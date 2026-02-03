"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Haddon Digital Group delivered a premium digital presence that paid for itself within weeks. We now receive a consistent stream of high-value enquiries every single week.",
  },
];

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  return (
    <section
      id="reviews"
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="reviews-heading"
          className="sr-only"
        >
          What our clients say
        </h2>
        <div className="relative">
          <span
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-8xl sm:text-9xl font-serif text-white/20 select-none"
            aria-hidden
          >
            99
          </span>
          <blockquote className="relative z-10 text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed px-4">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4" role="group" aria-label="Testimonial navigation">
          <button
            type="button"
            onClick={() => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}
