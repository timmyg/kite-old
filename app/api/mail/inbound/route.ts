import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await new Response(req.body).text();
  const body2 = await new Response(req.body).json();
  console.info("Received an inbound email!", { body, body2 });
  return NextResponse.json({ message: "excellent!" });
}
