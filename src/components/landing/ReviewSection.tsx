"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "HaddonDigitalGroup built our café website and it's brought in so many new customers. Professional and a pleasure to work with.",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Our new site looks premium and we get enquiries every week. Worth every penny.",
  },
  {
    name: "Lisa K.",
    rating: 5,
    text: "From design to launch, everything was smooth. Our garage has never looked so good online.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ReviewSection() {
  return (
    <section
      id="reviews"
      className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f]"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="reviews-heading"
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-2 text-center"
        >
          Shared by our community
        </h2>
        <p className="text-white/70 text-center mb-8">
          What local businesses say about working with us
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review, i) => (
            <motion.article
              key={i}
              variants={item}
              className="glass rounded-xl p-6 border border-white/10 flex flex-col"
            >
              <div className="flex gap-1 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-white/20 mb-2" aria-hidden />
              <p className="text-white/90 flex-1">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-4 pt-4 border-t border-white/10">
                <p className="font-semibold text-white">{review.name}</p>
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
