import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.info("Received an inbound email!", req.body);
  return NextResponse.json({ message: "excellent!" });
}
