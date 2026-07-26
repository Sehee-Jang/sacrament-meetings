import Link from "next/link";
import NavLinks from "./NavLinks";
import { auth } from "@/auth";
import SignOutButton from "./SignOutButton";

export default async function Header() {
  const session = await auth();

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className='border-b bg-white shadow-sm'>
      <div className='container-page flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-6 gap-3 md:gap-0'>
        <div className='flex flex-col items-center md:items-start'>
          <Link href='/'>
            <h1 className='text-2xl font-bold text-blue-700 tracking-tight'>
              Suji Ward
            </h1>
          </Link>
          {/* Mobile Only */}
          <p className='text-[11px] text-gray-400 mt-0.5 md:hidden'>{today}</p>
        </div>

        <div className='flex items-center gap-4'>
          <NavLinks />

          {session?.user ? (
            <>
              <Link
                href='/meetings/new'
                className='text-sm font-medium text-blue-600 hover:text-blue-800'
              >
                New Meeting
              </Link>

              <SignOutButton />
            </>
          ) : (
            <Link
              href='/login'
              className='text-sm font-medium text-blue-600 hover:text-blue-800'
            >
              Sign In
            </Link>
          )}
        </div>

        {/* Desktop Only */}
        <p className='hidden md:block text-sm text-gray-600 font-medium'>
          {today}
        </p>
      </div>
    </header>
  );
}
