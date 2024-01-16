import { NextResponse, NextRequest } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// This route is used to store the leads that are generated from the landing page.
// The API call is initiated by <ButtonLead /> component
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("BUTTON LEAD");

  if (!body.email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const supabase = createRouteHandlerClient({ cookies });
    const lead = await supabase
      .from("leads")
      .insert({ email: body.email })
      .select();
    console.log({ email: body.email, lead });

    return NextResponse.json({});
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
