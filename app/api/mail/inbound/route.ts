import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import axios from "axios";
const host = "podletter.xyz";

export async function POST(req: Request) {
  try {
    console.log("📪📪📪 INBOUND EMAIL 📪📪📪");
    console.log({
      requestSize: JSON.stringify(req)?.length,
      requestFormDataSize: JSON.stringify(req?.formData)?.length,
    });
    console.log("getting form data");
    const formData = await req.formData(); // need node 20 for this, 18 hung on vercel
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
    console.time("process");
    console.log({ emailDb });
    const processEmailUrl = `https://${host}/api/mail/process/${emailDb.data[0].id}`;
    console.log("call process", emailDb.data[0].id, processEmailUrl);
    console.log("calling");
    await axios.post(processEmailUrl);
    console.timeEnd("process");
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
