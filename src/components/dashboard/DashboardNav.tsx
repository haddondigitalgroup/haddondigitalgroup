"use client";

import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

export default function DashboardNav({ userEmail }: { userEmail: string }) {
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <header className="glass border-b border-white/10 sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        <Link href="/dashboard" className="font-bold text-white">
          HaddonDigitalGroup
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-white/70 text-sm truncate max-w-[180px]" title={userEmail}>
            {userEmail}
          </span>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-2 text-white/70 hover:text-white text-sm"
            aria-label="Sign out"
          >
            <LogOut className="w-4 h-4" aria-hidden />
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
}
