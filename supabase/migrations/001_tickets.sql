-- HaddonDigital: tickets table for Support Hub
-- Run this in Supabase SQL Editor or via Supabase CLI

create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null,
  priority text not null check (priority in ('Low', 'Med', 'High')),
  status text not null default 'Open' check (status in ('Open', 'In Progress', 'Resolved')),
  message text,
  created_at timestamptz not null default now()
);

-- RLS: users can only see/insert their own tickets
alter table public.tickets enable row level security;

create policy "Users can view own tickets"
  on public.tickets for select
  using (auth.uid() = user_id);

create policy "Users can insert own tickets"
  on public.tickets for insert
  with check (auth.uid() = user_id);

-- Optional: allow update for status (e.g. if staff updates via service role)
create policy "Users can update own tickets"
  on public.tickets for update
  using (auth.uid() = user_id);

-- Index for dashboard listing
create index if not exists tickets_user_id_created_at_idx
  on public.tickets (user_id, created_at desc);
