import { NextResponse } from "next/server";
import { email, email2 } from "./email";

const simpleParser = require("mailparser").simpleParser;

export async function GET() {
  try {
    console.log("one");
    const parsed = await simpleParser(email);
    const parsed2 = await simpleParser(email2);
    return NextResponse.json({ message: "excellent!", parsed, parsed2 });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
