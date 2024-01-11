import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
// import {
//   parseEmail,
//   storeAttachment,
// } from "@feryardiant/sendgrid-inbound-parser";

export async function POST(req: NextRequest) {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) {
        console.error(err);
        return NextResponse.json({ message: "failde!" });
      }
      console.log({ fields, files });
      return NextResponse.json({ message: "excellent!" });
    });
    // return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
