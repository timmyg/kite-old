import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import mailparser from "mailparser";
import EmailReplyParser from "email-reply-parser";

const simpleParser = mailparser.simpleParser;

export async function POST(req: Request) {
  try {
    let formData = await req.formData();
    let { dkim, SPF, to, email, charsets, sender_ip, from, subject, envelope } =
      Object.fromEntries(formData);
    // let keys = Object.keys(requestBody);
    // console.log({ keys });
    // 'dkim',     'SPF',
    // 'to',       'email',
    // 'charsets', 'sender_ip',
    // 'from',     'subject',
    // 'envelope'
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.from("emails").insert({
      dkim,
      spf: SPF,
      to,
      email,
      charsets,
      sender_ip,
      from,
      subject,
      envelope,
    });

    let parsed1 = await simpleParser(email.toString());
    console.log({ parsed1 });

    const parsed2 = new EmailReplyParser().read(email.toString());
    console.log({ parsed2 });

    // console.log({ requestBody });
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
