"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-GB">
      <body className="antialiased min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center px-4 font-sans">
        <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
        <p className="text-white/70 text-center mb-6 max-w-md">
          A critical error occurred. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
        >
          Try again
        </button>
        <a
          href="/"
          className="mt-4 text-white/70 hover:text-white text-sm underline"
        >
          Back to home
        </a>
      </body>
    </html>
  );
}
