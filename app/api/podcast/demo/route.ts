// import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import RSS from "rss";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { checkTaskStatusUnreal } from "@/libs/unrealSpeech";
import { Database } from "@/libs/database.types";
import dayjs from "dayjs";

export const revalidate = 1;

const getEmails = async () => {
  const supabase = createRouteHandlerClient({ cookies });
  // add feed filter here in future
  const emailsResult = await supabase
    .from("emails")
    .select("*")
    .returns<Database["public"]["Tables"]["emails"]["Row"][]>();
  const emailResponses = [];
  for (let email of emailsResult.data) {
    if (email.voice_text_is_ready) {
      emailResponses.push(email);
    } else {
      // file marked not ready but check
      if (email.voice_task_id) {
        const statusResponse = await checkTaskStatusUnreal({
          taskId: email.voice_task_id,
        });
        if (statusResponse.SynthesisTask?.TaskStatus === "completed") {
          await supabase
            .from("emails")
            .update({ voice_text_is_ready: true })
            .eq("id", email.id);
          email.voice_text_is_ready = true;
          emailResponses.push(email);
        }
      }
    }
  }
  return emailResponses;
};

export async function GET() {
  // const supabase = createRouteHandlerClient({ cookies });
  // const result = await supabase.from("emails").select();
  // .not("voice_text_url", "eq", null);
  console.log("getting demo podcast feed...");

  const emails = await getEmails();

  if (!emails || emails.length === 0) {
    return new Response("No feed", { status: 200 });
  }
  const feed = new RSS({
    title: "Podletter Hello World Feed",
    description: "Testing feed",
    feed_url: "http://podletter.xyz/api/podcast",
    site_url: "https://podletter.xyz",
    image_url: "https://podletter.xyz/icon.png",
    // managingEditor: "Editor",
    // webMaster: "Webmaster",
    // copyright: "2020 Your Company",
    // language: "en",
    // categories: ["Category 1", "Category 2", "Category 3"],
    // pubDate: "May 20, 2020 04:00:00 GMT",
    ttl: 60,
  });

  // Sample item
  for (let email of emails) {
    feed.item({
      title: email.subject,
      description: email.subject,
      url: "",
      // categories: ["Category 1", "Category 2"],
      author: email.from,
      // date: "May 27, 2020",
      date: dayjs(email.created_at).format("MMMM D, YYYY"),
      enclosure: {
        //   url: "https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3",
        url: email.voice_text_url,
        type: "audio/mpeg",
        // size: 752256,
      },
    });
  }
  // console.log("log1", result.data[0].voice_text_url);
  return new Response(feed.xml(), { headers: { "Content-Type": "text/xml" } });
}

// for some reason this HAS to be here for the GET to work
// DONT REMOVE
export async function POST() {
  return NextResponse.json({ test: 3 });
}
