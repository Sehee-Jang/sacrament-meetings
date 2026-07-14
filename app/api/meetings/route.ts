import { getMeetings } from "@/lib/meetings-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const date = searchParams.get("date");

  const meetings = getMeetings(date ?? undefined);

  return NextResponse.json(meetings);
}
