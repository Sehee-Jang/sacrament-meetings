import { getMeetings } from "@/lib/meetings-db";
import MeetingCard from "../components/MeetingCard";

export default function MeetingsPage() {
  const meetings = getMeetings();

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        All Meetings
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard
            key={meeting.id}
            meeting={meeting}
          />
        ))}
      </div>
    </div>
  );
}