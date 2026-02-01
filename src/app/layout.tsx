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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haddondigital.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HaddonDigitalGroup | Enterprise-Grade Technology for Local Business",
  description:
    "Essential, Advanced, and Professional website packages plus Additional Services for Hinckley & Leicestershire. From £499. Client Portal, UK hosting, e-commerce, abandoned cart recovery. All prices in £ (GBP).",
  keywords:
    "web design Hinckley, Essential package, Advanced package, Professional package, e-commerce, abandoned cart, Client Portal, Additional Services, UK hosting, digital agency, HaddonDigitalGroup, UK, Leicestershire, England",
  authors: [{ name: "HaddonDigitalGroup", url: siteUrl }],
  creator: "HaddonDigitalGroup",
  publisher: "HaddonDigitalGroup",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "HaddonDigitalGroup | Enterprise-Grade Technology for Local Business",
    description:
      "Essential, Advanced & Professional packages from £499. Client Portal, UK hosting, e-commerce, app included. Additional Services £299 one-off. Hinckley & Leicestershire.",
    type: "website",
    url: "/",
    siteName: "HaddonDigitalGroup",
    locale: "en_GB",
    countryName: "United Kingdom",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "HaddonDigitalGroup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HaddonDigitalGroup | Enterprise-Grade Technology for Local Business",
    description:
      "Essential, Advanced & Professional from £499. Client Portal, UK hosting, e-commerce, app. Additional Services £299. Hinckley & Leicestershire.",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: { canonical: "/" },
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
