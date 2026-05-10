/**
 * Root layout — required by Next.js but kept as a passthrough.
 * The actual <html>/<body> live in app/[locale]/layout.tsx so that
 * `lang` and `data-theme` attributes can be set per-request.
 *
 * See PLANNING.md §3 and next-intl App Router docs.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
