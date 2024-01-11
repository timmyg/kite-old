import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import mailparser from "mailparser";

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

    let parsed = await simpleParser(email.toString());
    console.log({ parsed });

    // console.log({ requestBody });
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
