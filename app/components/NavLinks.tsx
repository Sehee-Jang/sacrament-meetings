"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/meetings",
    label: "Meetings",
  },
  {
    href: "/meetings/current",
    label: "Current",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-3 md:gap-5'>
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href !== "/" && pathname.startsWith(link.href));

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors py-1.5 px-2 rounded-md ${
              active
                ? "text-blue-700 bg-blue-50 font-semibold"
                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
