import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <Link href="/" className="flex flex-col">
          <span className="font-bold text-lg text-white tracking-tight">HaddonDigitalGroup</span>
          <span className="text-white/70 text-xs font-medium uppercase tracking-wider">
            Digital Design Agency
          </span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
          <Link href="#reviews" className="text-white/80 hover:text-white text-sm">
            Reviews
          </Link>
          <Link href="#video-showcase" className="text-white/80 hover:text-white text-sm">
            Who we build for
          </Link>
          <Link href="#pricing" className="text-white/80 hover:text-white text-sm">
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
            title="Client Portal: sign in to your dashboard"
          >
            Client Portal
          </Link>
        </nav>
      </div>
    </header>
  );
}
