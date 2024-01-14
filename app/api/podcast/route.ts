// import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import RSS from "rss";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// export const revalidate = 1;

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });
  const result = await supabase
    .from("emails")
    .select()
    .not("voice_text_url", "eq", null);
  if (!result.data || result.data.length === 0) {
    return new Response("No feed items found 8", { status: 200 });
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
      url: result.data[0].voice_text_url,
      type: "audio/mpeg",
      size: 752256,
    },
  });
  console.log("log1", result.data[0].voice_text_url);
  return new Response(feed.xml(), { headers: { "Content-Type": "text/xml" } });
}

// for some reason this HAS to be here for the GET to work
// DONT REMOVE
export async function POST() {
  return NextResponse.json({ test: 3 });
}
