import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/landing/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.haddondigitalgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Haddon Digital Group | Digital Transformation Agency",
  description:
    "Web Developer in Leicestershire and UK Digital Agency. Professional web design and digital packages from £449.00. Contact us today for competitive rates.",
  keywords:
    "Web Developer in Leicestershire, UK Digital Agency, web design Hinckley, Essential package, Advanced package, Professional package, Custom iOS Android app, Mobile app, e-commerce, Client Portal, UK hosting, Haddon Digital Group, Leicestershire, England",
  authors: [{ name: "Haddon Digital Group", url: siteUrl }],
  creator: "Haddon Digital Group",
  publisher: "Haddon Digital Group",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "Haddon Digital Group | Digital Transformation Agency",
    description:
      "Web Developer in Leicestershire and UK Digital Agency. Professional web design and digital packages from £449.00. Find us on Instagram, TikTok, LinkedIn and Facebook.",
    type: "website",
    url: siteUrl,
    siteName: "Haddon Digital Group",
    locale: "en_GB",
    countryName: "United Kingdom",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Haddon Digital Group" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haddon Digital Group | Digital Transformation Agency",
    description:
      "Web Developer in Leicestershire and UK Digital Agency. Professional web design and digital packages from £449.00. Find us on Instagram, TikTok, LinkedIn and Facebook.",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "Haddon Digital Group" }],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: { canonical: `${siteUrl}/` },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
