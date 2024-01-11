import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await new Response(req.body).text();
  console.info("Received an inbound email!", body);
  return NextResponse.json({ message: "excellent!" });
}
