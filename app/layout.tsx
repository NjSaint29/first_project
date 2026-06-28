import type { Metadata } from "next";
import { Anton, Inter, Newsreader } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jo Mendes — Curated Lived Spaces",
  description:
    "Jo Mendes is an interior design studio crafting curated, lived-in spaces. From atmosphere to resolution, each decision is shaped with restraint, clarity, and intent.",
  openGraph: {
    title: "Jo Mendes — Curated Lived Spaces",
    description:
      "An interior design studio crafting curated, lived-in spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
