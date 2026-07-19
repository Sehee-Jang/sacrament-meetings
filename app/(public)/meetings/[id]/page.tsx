import MeetingDetail from "@/app/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";
import { notFound } from "next/navigation";
interface PageProps {
  params: Promise<{ id: string }>;
}
export default async function MeetingDetailPage({ params }: PageProps) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }
  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }
  
  return <MeetingDetail meeting={meeting} />;
}
