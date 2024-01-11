import { NextRequest, NextResponse } from "next/server";
import {
  parseEmail,
  storeAttachment,
} from "@feryardiant/sendgrid-inbound-parser";

export async function POST(req: NextRequest) {
  try {
    console.log(req.headers);
    console.log(req.body);
    const {
      // email: { attachments, envelope, headers, message, references, ...mail },
      email,
    } = await parseEmail(req);
    console.log({ email });
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
