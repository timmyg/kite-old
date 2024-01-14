import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    console.log("one1");
    let formData = await req.formData();
    console.log("two2");
    let { dkim, SPF, to, email, charsets, sender_ip, from, subject, envelope } =
      Object.fromEntries(formData);
    const supabase = createRouteHandlerClient({ cookies });
    console.log("inserting ");

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
    console.log("inserted ");

    // let parsed1 = await simpleParser(email.toString());
    // console.log({ parsed1 });

    // const parsed2 = EmailReplyParser(email.toString());
    // console.log({ parsed2 });

    // console.log({ requestBody });
    return NextResponse.json({ message: "excellent!" });
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ message: "failed" });
  }
}
