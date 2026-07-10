import MeetingCard from "../components/MeetingCard";
import { SacramentMeeting } from "@/lib/types";

async function getMeetings() {
  const response = await fetch("http://localhost:3000/api/meetings", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch meetings");
  }

  return response.json() as Promise<SacramentMeeting[]>;
}

export default async function MeetingsPage() {
  const meetings = await getMeetings();

  return (
    <div>
      <h1 className='mb-6 text-3xl font-bold'>All Meetings</h1>

      <div className='grid gap-6 md:grid-cols-2'>
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </div>
  );
}
