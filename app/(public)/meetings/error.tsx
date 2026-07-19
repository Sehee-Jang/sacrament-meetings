"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center gap-4 p-8'>
      <h2 className='text-xl font-bold'>Something went wrong</h2>

      <p>We could not load the meetings. Please try again.</p>

      <button
        onClick={() => reset()}
        className='rounded bg-blue-500 px-4 py-2 text-white'
      >
        Try Again
      </button>

      <Link href='/meetings'>Back to meetings</Link>
    </div>
  );
}
