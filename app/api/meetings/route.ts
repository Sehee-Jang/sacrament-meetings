import { getMeetings } from "@/lib/meetings-db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const {searchParams} = new URL(request.url);

    const date = searchParams.get("date");

    const meetings = getMeetings();

    if(date) {
        const filteredMeetings = meetings.filter(
            (meeting) => meeting.date === date
        );
        
        return NextResponse.json(filteredMeetings);
    }

    return NextResponse.json(meetings);
}