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
    label: "Current Meeting",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`nav-link ${
            pathname === link.href ? "active" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}