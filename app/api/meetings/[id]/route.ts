import { getMeetingById } from "@/lib/meetings-db";
import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, context: RouteContext) {
  const { id } = await context.params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return NextResponse.json(
      {
        message: "Invalid meeting id",
      },
      {
        status: 400,
      },
    );
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    return NextResponse.json(
      {
        message: "Meeting not found",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json(meeting);
}
