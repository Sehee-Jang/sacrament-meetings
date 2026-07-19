import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <h2 className='text-xl font-bold'>Meeting not found</h2>

      <p>The meeting you are looking for does not exist.</p>

      <Link href='/meetings'>Return to meetings</Link>
    </div>
  );
}
