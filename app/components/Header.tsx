import Link from "next/link";

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
            Springfield Ward
          </h1>
        </Link>

        <p className="text-sm text-gray-600">{today}</p>
      </div>
    </header>
  );
}