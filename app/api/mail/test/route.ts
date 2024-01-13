import { NextResponse } from "next/server";

const simpleParser = require("mailparser").simpleParser;

export async function POST(req: Request) {
  try {
    console.log("one");
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
