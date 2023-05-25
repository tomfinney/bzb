export default function TestDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>a nav bar</nav>
      {children}
    </section>
  );
}
