import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className='mx-auto max-w-6xl p-8 min-h-[500px]'>
      <div className='overflow-hidden rounded-xl bg-white shadow'>
        <Image
          src='/hero00.jpg'
          alt='Sacrament meeting chapel'
          width={1200}
          height={600}
          priority
          className='h-[420px] w-full object-cover'
        />

        <div className='space-y-4 p-8'>
          <h1 className='text-4xl font-bold'>Sacrament Meeting Planner</h1>

          <p className='text-gray-600'>
            Organize sacrament meetings, review agendas, and print meeting
            programs for members and leadership.
          </p>

          <Link
            href='/meetings'
            className='inline-block rounded bg-blue-600 px-5 py-3 text-white hover:bg-blue-700'
          >
            View Meetings
          </Link>
        </div>
      </div>
    </section>
  );
}
