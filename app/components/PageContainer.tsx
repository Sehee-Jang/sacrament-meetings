export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='mx-auto min-h-[500px] max-w-6xl p-8'>
      {children}
    </section>
  );
}
