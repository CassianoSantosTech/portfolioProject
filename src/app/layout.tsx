import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600'] });

const BASE_URL = "https://cassianosantos-dev.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Cassiano Santos — Full Stack Developer",
    template: "%s | Cassiano Santos",
  },
  description:
    "Full Stack Developer graduated in Systems Analysis and Development from FIAP. Passionate about clean code, modern web technologies and delivering complete solutions.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Node.js",
    "Cassiano Santos",
  ],
  authors: [{ name: "Cassiano Santos", url: BASE_URL }],
  creator: "Cassiano Santos",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Cassiano Santos",
    title: "Cassiano Santos — Full Stack Developer",
    description:
      "Full Stack Developer graduated in Systems Analysis and Development from FIAP. Passionate about clean code, modern web technologies and delivering complete solutions.",
    images: [
      {
        url: "/me-in-vatican.jpeg",
        width: 800,
        height: 800,
        alt: "Cassiano Santos — Full Stack Developer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cassiano Santos — Full Stack Developer",
    description:
      "Full Stack Developer passionate about clean code and modern web technologies.",
    images: ["/me-in-vatican.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
