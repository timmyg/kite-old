import { NextResponse, NextRequest } from "next/server";
import { sendEmail } from "@/libs/mailgun";
import { platformConfig } from "@/config/config.platform";

// This route is used to receive emails from Mailgun and forward them to our customer support email.
// See more: https://shipfa.st/docs/features/emails
export async function POST(req: NextRequest) {
  try {
    // extract the email content, subject and sender
    const formData = await req.formData();
    const sender = formData.get("From");
    const subject = formData.get("Subject");
    const html = formData.get("body-html");

    // send email to the admin if forwardRepliesTo is et & emailData exists
    // if (platformConfig.mailgun.forwardRepliesTo && html && subject && sender) {
    //   await sendEmail({
    //     to: platformConfig.mailgun.forwardRepliesTo,
    //     subject: `${platformConfig?.appName} | ${subject}`,
    //     html: `<div><p><b>- Subject:</b> ${subject}</p><p><b>- From:</b> ${sender}</p><p><b>- Content:</b></p><div>${html}</div></div>`,
    //     replyTo: String(sender),
    //   });
    // }

    return NextResponse.json({});
  } catch (e) {
    console.error(e?.message);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}
