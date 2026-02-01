"use client";

// Use NEXT_PUBLIC_HERO_VIDEO_URL in .env.local, or add public/hero.mp4 (e.g. from Pexels)
const HERO_VIDEO_SRC = process.env.NEXT_PUBLIC_HERO_VIDEO_URL ?? "/hero.mp4";

export default function HeroSection() {
  return (
    <section
      className="relative w-full max-w-none flex items-center justify-center overflow-hidden pt-14 sm:pt-16 pb-10 sm:pb-12"
      aria-label="Hero: Enterprise-Grade Technology"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0 w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230a0a0f' width='1920' height='1080'/%3E%3C/svg%3E"
          title="Background video: HaddonDigitalGroup brand"
          aria-label="Decorative background video"
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Dark gradient + glassmorphism overlay */}
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-[2px]"
        aria-hidden
      />

      {/* Content: full-width, no visible edges */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full glass-strong rounded-none border-0 px-6 py-8 sm:px-10 sm:py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Enterprise-Grade Technology.
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Empowering local business.
          </p>
          <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base max-w-2xl mx-auto">
            Delivering high-end technology solutions to local enterprises. HaddonDigitalGroup specialise
            in high-performance web development and AI business automation designed to help small
            businesses scale and reach their potential.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
            >
              View packages
            </a>
            <a
              href="#reviews"
              className="inline-flex items-center justify-center rounded-lg glass border border-white/20 px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              See reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
