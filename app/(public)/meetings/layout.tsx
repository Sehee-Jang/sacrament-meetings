export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='mx-auto max-w-6xl p-8 min-h-[500px]'>
      {children}
    </section>
  );
}
