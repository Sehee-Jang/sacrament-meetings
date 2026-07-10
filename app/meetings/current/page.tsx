import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";


function getCurrentSunday() {

  const today = new Date();

  const day = today.getDay();

  const diff = today.getDate() - day;

  const sunday = new Date(today);

  sunday.setDate(diff);


  return sunday.toISOString().split("T")[0];
}


export default function CurrentMeetingPage() {

  const sunday = getCurrentSunday();


  const meetings = getMeetings();


  const currentMeeting = meetings.find(
    (meeting) => meeting.date === sunday
  );


  if (currentMeeting) {
    redirect(`/meetings/${currentMeeting.id}`);
  }


  redirect("/meetings");
}