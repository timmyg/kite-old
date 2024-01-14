import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import axios from "axios";

export async function POST(req: Request) {
  try {
    console.log("📪 INBOUND EMAIL 📪");
    console.log({
      requestSize: JSON.stringify(req).length,
      requestFormDataSize: JSON.stringify(req.formData).length,
    });
    console.log("getting form data");
    const formData = await req.formData();
    console.log("got form data");
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
    console.log("create supabase");
    console.time("create supabase");
    const supabase = createRouteHandlerClient({ cookies });
    console.timeEnd("create supabase");
    console.log("insert");
    console.time("insert");
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
    console.log("process");
    console.time("process");
    await axios.post(`/api/mail/process/${emailDb.data[0].id}`);
    console.timeEnd("process");
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
