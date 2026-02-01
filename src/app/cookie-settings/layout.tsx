import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Settings | HaddonDigitalGroup",
  description:
    "Manage your cookie preferences and data consent. UK GDPR-compliant cookie settings for HaddonDigitalGroup.",
};

export default function CookieSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
