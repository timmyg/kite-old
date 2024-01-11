import { NextRequest, NextResponse } from "next/server";
import sendgridParser from "@sendgrid/inbound-mail-parser";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const parsedEmail = new sendgridParser(
    { keys: ["from", "to", "subject", "text"] },
    { body }
  ).keyValues();
  console.info("Received an inbound email!", { parsedEmail });
  return NextResponse.json({ message: "excellent!" });
}
