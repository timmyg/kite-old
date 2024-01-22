import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import markdownToTxt from "markdown-to-txt";
import { textToAudio as textToAudioOpenai } from "@/libs/openAi";
import { textToAudio as textToAudioUnreal } from "@/libs/unrealSpeech";
import { uploadFile } from "@/libs/uploadFile";
import { convert as htmlToTextConvert } from "html-to-text";
const simpleParser = require("mailparser").simpleParser;

export async function POST(req: NextRequest, { params }: any) {
  try {
    console.time("process email");
    const { emailId } = params;
    const supabase = createRouteHandlerClient({ cookies });
    if (emailId) {
      const { data } = await supabase
        .from("emails")
        .select("*")
        .eq("id", emailId);
      const { text } = await simpleParser(data[0].email);
      const voiceText = markdownToTxt(text);
      console.log({ voiceText });
      await supabase
        .from("emails")
        .update({
          body_text: voiceText,
          body_text_2: htmlToTextConvert(String(data[0].email), {}),
        })
        .eq("id", emailId);
      console.time("text to audio");
      // const audioBuffer = await textToAudioOpenai({
      //   text: voiceText,
      // });
      const audio = await textToAudioUnreal({
        text: voiceText,
      });
      console.timeEnd("text to audio");
      console.time("upload");
      // const { fileUrl } = await uploadFile(audioBuffer);
      console.timeEnd("upload");
      await supabase
        .from("emails")
        .update({
          voice_text_url: audio.SynthesisTask.OutputUri,
          voice_text_is_ready: false,
          voice_task_id: audio.SynthesisTask.TaskId,
        })
        .eq("id", emailId);

      console.timeEnd("process email");
      return NextResponse.json({ message: "excellent!" });
    }
    console.timeEnd("process email");
    return NextResponse.json({ message: "failed" });
  } catch (error) {
    console.error({ error });
    console.timeEnd("process email");
    return NextResponse.json({ message: "failed" });
  }
}
