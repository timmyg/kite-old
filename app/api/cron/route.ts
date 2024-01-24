import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { Database } from "@/libs/database.types";
import { checkTaskStatusUnreal } from "@/libs/unrealSpeech";

const checkEmailTranscriptionsReady = async () => {
  const supabase = createRouteHandlerClient({ cookies });
  const notReadyEmailsResults = await supabase
    .from("emails")
    .select("*")
    .eq("voice_text_is_ready", false)
    .neq("voice_task_id", null)
    .returns<Database["public"]["Tables"]["emails"]["Row"][]>();

  console.log({
    notReadyEmailsResults,
    length: notReadyEmailsResults.data.length,
  });

  // pick a random one, so it doesnt get stuck on one
  const randomIndex = Math.floor(
    Math.random() * notReadyEmailsResults.data.length
  );
  const email = notReadyEmailsResults.data[randomIndex];
  console.log({ randomIndex, email });

  if (email.voice_task_id) {
    const statusResponse = await checkTaskStatusUnreal({
      taskId: email.voice_task_id,
    });
    console.log({ statusResponse });
    if (statusResponse.SynthesisTask?.TaskStatus === "completed") {
      await supabase
        .from("emails")
        .update({ voice_text_is_ready: true })
        .eq("id", email.id);
      email.voice_text_is_ready = true;
      console.log("updated to true");
    }
  }
};

export async function POST() {
  console.log("cron");
  await checkEmailTranscriptionsReady();
  return NextResponse.json({ success: true });
}
