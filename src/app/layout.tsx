import type { Metadata } from "next";
import { Inter, Caveat, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-label",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const title = "Roomade | the board for your flat";
const description =
  "Issues, spends, and heads-ups for your shared flat, all pinned to one board. Join the waitlist.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
