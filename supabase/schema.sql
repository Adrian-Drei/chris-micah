create table if not exists public.rsvp (
  id text primary key,
  name text not null,
  family_list jsonb,
  email text,
  is_coming text not null check (is_coming in ('yes', 'no')),
  wedding_choices jsonb not null default '[]'::jsonb,
  wedding_guests jsonb not null default '{}'::jsonb,
  wedding_guests_state jsonb not null default '{}'::jsonb,
  meal_preferences jsonb not null default '[]'::jsonb,
  message text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.rsvp enable row level security;
revoke all on table public.rsvp from anon, authenticated;

create or replace function public.set_rsvp_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_rsvp_updated_at on public.rsvp;
create trigger set_rsvp_updated_at
before update on public.rsvp
for each row execute function public.set_rsvp_updated_at();

create or replace function public.get_rsvp(p_id text)
returns setof public.rsvp
language sql
security definer
set search_path = ''
as $$
  select * from public.rsvp where id = p_id limit 1;
$$;

create or replace function public.upsert_rsvp(p_rsvp jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.rsvp (
    id, name, family_list, email, is_coming, wedding_choices,
    wedding_guests, wedding_guests_state, meal_preferences, message
  ) values (
    p_rsvp->>'id',
    p_rsvp->>'name',
    p_rsvp->'family_list',
    nullif(p_rsvp->>'email', ''),
    p_rsvp->>'is_coming',
    coalesce(p_rsvp->'wedding_choices', '[]'::jsonb),
    coalesce(p_rsvp->'wedding_guests', '{}'::jsonb),
    coalesce(p_rsvp->'wedding_guests_state', '{}'::jsonb),
    coalesce(p_rsvp->'meal_preferences', '[]'::jsonb),
    nullif(p_rsvp->>'message', '')
  )
  on conflict (id) do update set
    name = excluded.name,
    family_list = excluded.family_list,
    email = excluded.email,
    is_coming = excluded.is_coming,
    wedding_choices = excluded.wedding_choices,
    wedding_guests = excluded.wedding_guests,
    wedding_guests_state = excluded.wedding_guests_state,
    meal_preferences = excluded.meal_preferences,
    message = excluded.message;
end;
$$;

revoke all on function public.get_rsvp(text) from public;
revoke all on function public.upsert_rsvp(jsonb) from public;
grant execute on function public.get_rsvp(text) to anon, authenticated;
grant execute on function public.upsert_rsvp(jsonb) to anon, authenticated;
