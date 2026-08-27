import type { Metadata, Viewport } from "next";
import { Inter, Caveat, Space_Mono } from "next/font/google";
import { SITE_URL } from "./lib/site";
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
  themeColor: "#9c7c49",
  colorScheme: "light",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Roomade",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  description,
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
