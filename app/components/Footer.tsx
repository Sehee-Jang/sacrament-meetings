export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container-page py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sacrament Meeting Planner
      </div>
    </footer>
  );
}