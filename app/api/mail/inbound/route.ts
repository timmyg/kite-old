import { NextRequest, NextResponse } from "next/server";
import {
  parseEmail,
  storeAttachment,
} from "@feryardiant/sendgrid-inbound-parser";

export async function POST(req: NextRequest) {
  try {
    // const headers = Object.fromEntries(req.headers.entries());
    // const rawReq = { ...req, headers };
    // const { email } = await parseEmail(rawReq);
    const body = req.text();
    const headers = Object.fromEntries(req.headers.entries());
    console.log({ body, headers });
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
