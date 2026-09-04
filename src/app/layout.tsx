import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { SITE_URL } from "./lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

// Stand-in for the app's heavy SF Pro titles on non-Apple devices. Apple
// devices get real SF Pro first via the .font-display stack in globals.css.
const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const title = "Roomade | everything your house needs, in one place";
const description =
  "One board for your shared house: what needs fixing, what everyone owes, what's happening this week, and the chat that goes with it. Join the waitlist.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#3A7071",
  colorScheme: "light",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Roomade",
  applicationCategory: "LifestyleApplication",
  operatingSystem: ["iOS", "Android"],
  description,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "MYR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-teal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
