import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import markdownToTxt from "markdown-to-txt";
import { textToAudio } from "@/libs/textToAudio";
import { uploadFile } from "@/libs/uploadFile";
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
      await supabase.from("emails").update({
        body_text: voiceText,
      });
      console.time("text to audio");
      const audioBuffer = await textToAudio({
        text: voiceText,
      });
      console.timeEnd("text to audio");
      console.time("upload");
      const uploadedFileUrl = await uploadFile(audioBuffer);
      console.timeEnd("upload");
      await supabase
        .from("emails")
        .update({
          voice_text_url: uploadedFileUrl,
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
