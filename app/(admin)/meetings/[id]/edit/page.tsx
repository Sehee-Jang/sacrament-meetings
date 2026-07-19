import { getMeetingById } from "@/lib/meetings-db";
import { updateMeeting } from "@/lib/actions";
import { notFound } from "next/navigation";
import MeetingForm from "../../components/MeetingForm";

export default async function EditMeetingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  return (
    <div className='mx-auto max-w-3xl space-y-6'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold'>Edit Meeting</h1>
        <p className='mt-2 text-gray-500'>Update the meeting information.</p>
      </div>

      <MeetingForm
        meeting={meeting}
        action={updateMeeting.bind(null, meeting.id)}
        submitLabel='Update Meeting'
      />
    </div>
  );
}
