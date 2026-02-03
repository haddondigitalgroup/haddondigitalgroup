import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 bg-[#0a0a0f] text-white">
      <h1 className="text-2xl font-bold mb-2">Page not found</h1>
      <p className="text-white/70 text-center mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-white text-black font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
