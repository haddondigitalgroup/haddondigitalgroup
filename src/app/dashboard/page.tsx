import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import ProjectProgress from "@/components/dashboard/ProjectProgress";
import SupportHub from "@/components/dashboard/SupportHub";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: tickets } = await supabase
    .from("tickets")
    .select("id, subject, priority, status, created_at")
    .order("created_at", { ascending: false });

  const displayName =
    (user.user_metadata?.full_name as string) ||
    (user.user_metadata?.name as string) ||
    user.email?.split("@")[0] ||
    "there";

  return (
    <div className="space-y-10">
      <WelcomeSection name={displayName} />
      <ProjectProgress />
      <SupportHub initialTickets={tickets ?? []} />
    </div>
  );
}
