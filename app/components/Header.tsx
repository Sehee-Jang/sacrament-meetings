import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-2xl font-bold text-blue-700">
            Suji Ward
          </h1>
        </Link>

        
        <Image
            src="/logo.png"
            alt="Ward logo"
            width={48}
            height={48}
        />

        <NavLinks />
        
        <p className="text-sm text-gray-600">{today}</p>
      </div>
    </header>
  );
}