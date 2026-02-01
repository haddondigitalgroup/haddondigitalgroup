"use server";

import { createClient } from "@/lib/supabase/server";

type SubmitInput = {
  subject: string;
  priority: string;
  message: string;
};

export async function submitTicket(input: SubmitInput) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be signed in to submit a ticket." };
  }

  const { data, error } = await supabase
    .from("tickets")
    .insert({
      user_id: user.id,
      subject: input.subject,
      priority: input.priority,
      message: input.message,
      status: "Open",
    })
    .select("id, subject, priority, status, created_at")
    .single();

  if (error) {
    return { error: error.message };
  }

  return { ticket: data };
}
