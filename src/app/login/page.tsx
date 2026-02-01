"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage({
          type: "success",
          text: "Check your email for the confirmation link.",
        });
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = "/dashboard";
        return;
      }
    } catch (err: unknown) {
      setMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-[#0a0a0f]">
      <div className="w-full max-w-md">
        <div className="glass-strong rounded-2xl p-8 border border-white/15">
          <h1 className="text-2xl font-bold text-white text-center">
            {isSignUp ? "Create account" : "Client login"}
          </h1>
          <p className="text-white/70 text-center mt-2 text-sm">
            HaddonDigitalGroup dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={isSignUp ? "new-password" : "current-password"}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="••••••••"
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="privacy"
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => setPrivacyAgreed(e.target.checked)}
                required
                className="mt-1 rounded border-white/20 bg-white/5 text-white focus:ring-white/20"
                aria-describedby="privacy-desc"
              />
              <label id="privacy-desc" htmlFor="privacy" className="text-sm text-white/80">
                I agree to the{" "}
                <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                  Privacy Policy
                </Link>{" "}
                and how my data is handled.
              </label>
            </div>

            {message && (
              <p
                className={`text-sm ${
                  message.type === "success" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {message.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || !privacyAgreed}
              className="w-full rounded-lg bg-white text-black font-semibold py-3 flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
              ) : null}
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/70">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setMessage(null);
              }}
              className="text-white font-medium hover:underline"
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </button>
          </p>
        </div>

        <p className="mt-6 text-center">
          <Link href="/" className="text-white/60 hover:text-white text-sm">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
