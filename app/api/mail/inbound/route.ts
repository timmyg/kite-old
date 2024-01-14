import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const {
      dkim,
      SPF,
      to,
      email,
      charsets,
      sender_ip,
      from,
      subject,
      envelope,
    } = Object.fromEntries(formData);
    const supabase = createRouteHandlerClient({ cookies });
    const emailDb = await supabase
      .from("emails")
      .insert({
        dkim,
        spf: SPF,
        to,
        email,
        charsets,
        sender_ip,
        from,
        subject,
        envelope,
      })
      .select();
    console.log("inserted ");

    // let parsed1 = await simpleParser(email.toString());
    // console.log({ parsed1 });
    // const parsed2 = EmailReplyParser(email.toString());
    // console.log({ parsed2 });

    // process it, email to body, body to audio mp3
    await axios.post(`/api/mail/process/${emailDb.data[0].id}`);
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
