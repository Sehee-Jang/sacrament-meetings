import MeetingDetail from "@/app/components/MeetingDetail";
import { SacramentMeeting } from "@/lib/types";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(id: string) {
  const response = await fetch(`http://localhost:3000/api/meetings/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Failed to fetch meeting");
  }

  return response.json() as Promise<SacramentMeeting>;
}

export default async function MeetingDetailPage({ params }: PageProps) {
  const { id } = await params;

  const meeting = await getMeeting(id);

  return <MeetingDetail meeting={meeting} />;
}
