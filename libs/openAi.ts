import OpenAI from "openai";

export async function textToAudio({ text }: { text: string }) {
  const openai = new OpenAI();
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    // model: "tts-1-hd",
    voice: "alloy",
    input: text,
  });
  const buffer = Buffer.from(await mp3.arrayBuffer());
  // const date = new Date();
  // const timestamp = date.getTime();
  // await fs.promises.writeFile(
  //   path.resolve(`./responses/speech_${timestamp}.mp3`),
  //   buffer
  // );
  return buffer;
}
