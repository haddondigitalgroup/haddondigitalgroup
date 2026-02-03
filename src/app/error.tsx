"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-[#0a0a0f] text-white">
      <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
      <p className="text-white/70 text-center mb-6 max-w-md">
        We couldn’t load this page. Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
      >
        Try again
      </button>
      <Link
        href="/"
        className="mt-4 text-white/70 hover:text-white text-sm underline"
      >
        Back to home
      </Link>
    </div>
  );
}
