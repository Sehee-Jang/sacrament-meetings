import Link from "next/link";
import { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <div className="card">
      <h2 className="mb-2 text-xl font-semibold">
        {meeting.date}
      </h2>

      <p>
        <strong>Type:</strong> {meeting.meetingType}
      </p>

      <p>
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
}