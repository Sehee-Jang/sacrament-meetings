"use client";

import { createMeeting } from "@/lib/actions";
import MeetingForm from "../components/MeetingForm";

export default function NewMeetingPage() {
  return (
    <div className='flex flex-col items-center'>
      <div className='mb-8 text-center'>
        <h1 className='text-3xl font-bold'>Create Meeting</h1>
        <p className='mt-2 text-gray-500'>
          Add a new sacrament meeting schedule.
        </p>
      </div>

      <MeetingForm action={createMeeting} submitLabel='Create Meeting' />
    </div>
  );
}
