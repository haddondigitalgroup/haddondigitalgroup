import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/landing/CookieConsent";
import ExpertChat from "@/components/landing/ExpertChat";

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
  title: "HaddonDigitalGroup | Web Design & Digital Packages | Hinckley & Leicestershire",
  description:
    "Professional web design and digital packages in the UK. From £449. Contact us today for competitive rates.",
  keywords:
    "web design Hinckley, Essential package, Advanced package, Professional package, e-commerce, abandoned cart, Client Portal, Additional Services, UK hosting, digital agency, HaddonDigitalGroup, UK, Leicestershire, England",
  authors: [{ name: "HaddonDigitalGroup", url: siteUrl }],
  creator: "HaddonDigitalGroup",
  publisher: "HaddonDigitalGroup",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "HaddonDigitalGroup",
    description: "Find us on Instagram, TikTok, LinkedIn, and Facebook. Web design & packages from £449.",
    type: "website",
    url: siteUrl,
    siteName: "HaddonDigitalGroup",
    locale: "en_GB",
    countryName: "United Kingdom",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "HaddonDigitalGroup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaddonDigitalGroup",
    description: "Find us on Instagram, TikTok, LinkedIn, and Facebook. Web design & packages from £449.",
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630, alt: "HaddonDigitalGroup" }],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0a0a0f] text-white font-sans`}
      >
        {children}
        <CookieConsent />
        <ExpertChat />
      </body>
    </html>
  );
}
