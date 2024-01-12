// import { NextResponse } from "next/server";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "Sample RSS Feed",
    description: "This is a sample RSS feed",
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
    title: "Sample Item",
    description: "This is a sample item",
    url: "http://example.com/article1",
    categories: ["Category 1", "Category 2"],
    author: "Author",
    date: "May 27, 2020",
  });

  //   res.set("Content-Type", "text/xml");
  //   res.send(feed.xml());
  // return NextResponse.xmljson({ message: "excellent!" });
  return new Response(feed.xml(), { headers: { "Content-Type": "text/xml" } });
}
