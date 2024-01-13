// import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import RSS from "rss";
import { cookies } from "next/headers";

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });
  const email = await supabase
    .from("emails")
    .select()
    .not("voice_text_url", "eq", null);
  if (!email.data || email.data.length === 0) {
    throw new Error("No emails found with a voice_text_url");
  }
  const feed = new RSS({
    title: "Sample RSS Feed 2",
    description: "This is a sample RSS feed 2",
    feed_url: "http://example.com/rss",
    site_url: "http://example.com",
    image_url: "http://example.com/icon.png",
    managingEditor: "Editor",
    webMaster: "Webmaster",
    copyright: "2020 Your Company",
    language: "en",
    categories: ["Category 1", "Category 2", "Category 3"],
    pubDate: "May 20, 2020 04:00:00 GMT",
    ttl: 60,
  });

  // Sample item
  feed.item({
    title: "Sample Item 2",
    description: "This is a sample item 2",
    url: "http://example.com/article1",
    categories: ["Category 1", "Category 2"],
    author: "Author",
    date: "May 27, 2020",
    enclosure: {
      //   url: "https://file-examples.com/wp-content/storage/2017/11/file_example_MP3_700KB.mp3",
      // url: "http://thepodcastexchange.ca/s/Porsche-Macan-July-5-2018-1.mp3",
      // url: "https://upcdn.io/FW25brC/raw/uploads/2024/01/13/4ktm5Qk17e-my_file.mp3",
      url: email.data[0].voice_text_url,
      type: "audio/mpeg",
      size: 752256, // 734 KB in bytes
    },
  });

  //   res.set("Content-Type", "text/xml");
  //   res.send(feed.xml());
  // return NextResponse.xmljson({ message: "excellent!" });
  return new Response(feed.xml(), { headers: { "Content-Type": "text/xml" } });
}
