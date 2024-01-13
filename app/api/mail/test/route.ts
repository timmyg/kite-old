import { NextRequest, NextResponse } from "next/server";
// import { email, email2 } from "./email";
import fs from "fs";
import path from "path";
import * as speechMarkdown from "speechmarkdown-js";

const speech = new speechMarkdown.SpeechMarkdown();

const simpleParser = require("mailparser").simpleParser;
import markdownToTxt from "markdown-to-txt";
import { textToAudio } from "@/libs/textToAudio";
import { uploadFile } from "@/libs/uploadFile";

function markdownToVoice(text: string): string {
  // Remove Markdown links, keep the link text
  text = text.replace(/\[(.*?)\]\(.*?\)/g, "$1");

  // Remove other Markdown formatting characters and special characters like dashes and line breaks
  text = text.replace(/(\*|_|`|#|>|—|\n|-)/g, "");

  // Optionally, replace multiple spaces with a single space if needed
  text = text.replace(/\s+/g, " ");

  return text.trim();
}

export async function GET(req: NextRequest) {
  // req.query;
  try {
    const emailPath = path.resolve("./public/emails/bens-bites.eml");
    const email = fs.readFileSync(emailPath, "utf-8");
    const { text } = await simpleParser(email);
    // const voiceText = markdownToVoice(text);
    // const voiceText2 = speech.toText(text, {});
    // const voiceText3 = markdownToTxt(text);
    // const parsed2 = await simpleParser(email2);
    const audioBuffer = await textToAudio({
      // text,
      text: "im coming slow but speeding",
    });
    const uploadedFile = await uploadFile(audioBuffer);

    return NextResponse.json({
      message: "excellent!",
      text,
      uploadedFile,
      // voiceText2,
      // voiceText3,
    });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
