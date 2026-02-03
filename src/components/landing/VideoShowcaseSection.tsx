"use client";

import { useRef, useEffect, useState } from "react";

// Real video URLs (Pexels – free to use). Override with NEXT_PUBLIC_VIDEO_* in .env.local or add files in public/videos/
const DEFAULT_VIDEOS = {
  trades:
    "https://videos.pexels.com/video-files/4612891/4612891-uhd_2560_1440_25fps.mp4",
  cafe:
    "https://videos.pexels.com/video-files/30846352/30846352-uhd_2560_1440_25fps.mp4",
  smallBusiness:
    "https://videos.pexels.com/video-files/3205624/3205624-uhd_2560_1440_25fps.mp4",
  hotels: "",
  pubs: "",
  healthWellness: "",
};

const videos = [
  {
    id: "trades",
    title: "Trades & builders",
    description: "Sites that win more jobs",
    src: process.env.NEXT_PUBLIC_VIDEO_TRADES ?? DEFAULT_VIDEOS.trades,
    poster: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Builder or tradesperson at work",
  },
  {
    id: "cafe",
    title: "Cafés and Restaurants",
    description: "Menus, bookings, local reach",
    src: process.env.NEXT_PUBLIC_VIDEO_CAFE ?? DEFAULT_VIDEOS.cafe,
    poster: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    alt: "Café or restaurant worker",
  },
  {
    id: "small-business",
    title: "Small business",
    description: "From high street to digital",
    src:
      process.env.NEXT_PUBLIC_VIDEO_SMALL_BUSINESS ?? DEFAULT_VIDEOS.smallBusiness,
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    alt: "An upmarket London office",
  },
  {
    id: "hotels",
    title: "Hotels and accommodation",
    description: "Bookings, availability, local reach",
    src: process.env.NEXT_PUBLIC_VIDEO_HOTELS ?? DEFAULT_VIDEOS.hotels,
    poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Hotel lobby and accommodation",
  },
  {
    id: "pubs",
    title: "Pubs and Bars",
    description: "Menus, events, local reach",
    src: process.env.NEXT_PUBLIC_VIDEO_PUBS ?? DEFAULT_VIDEOS.pubs,
    poster: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80",
    alt: "Pub or bar with atmosphere",
  },
  {
    id: "health-wellness",
    title: "Health & Wellness",
    description: "Classes, bookings, local reach",
    src: process.env.NEXT_PUBLIC_VIDEO_HEALTH_WELLNESS ?? DEFAULT_VIDEOS.healthWellness,
    poster: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    alt: "Somebody running outside in daylight",
  },
];

function VideoTile({
  title,
  description,
  src,
  poster,
  alt,
}: {
  title: string;
  description: string;
  src: string;
  poster: string;
  alt: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && el.paused) {
            el.play().catch(() => {});
          } else if (!entry.isIntersecting && !el.paused) {
            el.pause();
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleError = () => setHasVideo(false);

  return (
    <article className="group relative rounded-2xl overflow-hidden glass border border-white/10 aspect-[4/3] sm:aspect-video">
      {hasVideo && src ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleError}
          aria-label={alt}
        />
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-neutral-800 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
          role="img"
          aria-label={alt}
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-white/80 text-sm mt-1">{description}</p>
      </div>
    </article>
  );
}

export default function VideoShowcaseSection() {
  return (
    <section
      id="video-showcase"
      className="pt-20 sm:pt-24 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 bg-[#0d0d14]"
      aria-labelledby="video-showcase-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="video-showcase-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 text-center"
        >
          Who we build for
        </h2>
        <p className="text-white/70 text-center mb-8 max-w-2xl mx-auto">
          Real businesses. Real results. See the people behind the brands we work with.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <VideoTile
              key={video.id}
              title={video.title}
              description={video.description}
              src={video.src}
              poster={video.poster}
              alt={video.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
