import Link from "next/link";
import { Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react";

const social = [
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "TikTok", href: "https://tiktok.com", Icon: () => null },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { name: "Facebook", href: "https://facebook.com", Icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} HaddonDigitalGroup. All rights reserved.
            </p>
            <a
              href="https://haddondigitalgroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              haddondigitalgroup.com
            </a>
          </div>
          <nav className="flex items-center gap-4" aria-label="Social media and other links">
          {social.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              aria-label={`HaddonDigitalGroup on ${name}`}
            >
              {name === "TikTok" ? (
                <ExternalLink className="w-5 h-5" aria-hidden />
              ) : (
                Icon && <Icon className="w-5 h-5" aria-hidden />
              )}
            </a>
          ))}
          <span className="text-white/40 text-sm">|</span>
          <Link
            href="https://www.google.com/business"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-sm"
          >
            Google Business
          </Link>
          <Link
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white text-sm"
          >
            Trustpilot
          </Link>
        </nav>
        </div>
        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-3 text-sm" aria-label="Legal and policies">
          <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span className="text-white/40" aria-hidden>·</span>
          <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
