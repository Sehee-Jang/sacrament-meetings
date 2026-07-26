import type { Metadata } from "next";
import MeetingCard from "@/app/components/MeetingCard";
import { MeetingSearch } from "@/app/components/MeetingSearch";
import { Pagination } from "@/app/components/Pagination";
import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";

export const metadata: Metadata = {
  title: "All Meetings",
  description: "View scheduled sacrament meetings and meeting details.",
};

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <div className='flex flex-col justify-center'>
      <div className='text-center space-y-4 mb-6'>
        <h1 className='text-3xl font-bold'>All Meetings</h1>
        <MeetingSearch />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>

      <div className='flex justify-center items-center gap-6 py-8 w-full'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
