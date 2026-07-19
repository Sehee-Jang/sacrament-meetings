import PageContainer from "@/app/components/PageContainer";

export default function AdminMeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageContainer>{children}</PageContainer>;
}
