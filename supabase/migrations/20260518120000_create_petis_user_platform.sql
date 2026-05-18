create extension if not exists pgcrypto;

create schema if not exists app_private;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text not null default '',
  phone text not null default '',
  first_pet_name text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.calendars (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pet_name text not null,
  pet_type text not null default 'Perro',
  story text not null default '',
  special_dates text not null default '',
  status text not null default 'draft' check (status in ('draft', 'submitted', 'in_design', 'approved', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.calendar_photos (
  id uuid primary key default gen_random_uuid(),
  calendar_id uuid not null references public.calendars(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  storage_path text not null,
  caption text not null default '',
  calendar_month text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.calendars enable row level security;
alter table public.calendar_photos enable row level security;

create index if not exists calendars_user_id_created_at_idx
  on public.calendars (user_id, created_at desc);

create index if not exists calendar_photos_calendar_id_idx
  on public.calendar_photos (calendar_id);

create index if not exists calendar_photos_user_id_idx
  on public.calendar_photos (user_id);

create or replace function app_private.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function app_private.set_updated_at();

drop trigger if exists calendars_set_updated_at on public.calendars;
create trigger calendars_set_updated_at
  before update on public.calendars
  for each row execute function app_private.set_updated_at();

create or replace function app_private.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, phone, first_pet_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    coalesce(new.raw_user_meta_data ->> 'phone', ''),
    coalesce(new.raw_user_meta_data ->> 'first_pet_name', '')
  )
  on conflict (id) do update
  set
    email = excluded.email,
    full_name = excluded.full_name,
    phone = excluded.phone,
    first_pet_name = excluded.first_pet_name,
    updated_at = now();

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function app_private.handle_new_user();

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'profiles_select_own'
  ) then
    create policy profiles_select_own
      on public.profiles for select
      to authenticated
      using ((select auth.uid()) = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'profiles_update_own'
  ) then
    create policy profiles_update_own
      on public.profiles for update
      to authenticated
      using ((select auth.uid()) = id)
      with check ((select auth.uid()) = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendars' and policyname = 'calendars_select_own'
  ) then
    create policy calendars_select_own
      on public.calendars for select
      to authenticated
      using ((select auth.uid()) = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendars' and policyname = 'calendars_insert_own'
  ) then
    create policy calendars_insert_own
      on public.calendars for insert
      to authenticated
      with check ((select auth.uid()) = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendars' and policyname = 'calendars_update_own'
  ) then
    create policy calendars_update_own
      on public.calendars for update
      to authenticated
      using ((select auth.uid()) = user_id)
      with check ((select auth.uid()) = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendars' and policyname = 'calendars_delete_own'
  ) then
    create policy calendars_delete_own
      on public.calendars for delete
      to authenticated
      using ((select auth.uid()) = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendar_photos' and policyname = 'calendar_photos_select_own'
  ) then
    create policy calendar_photos_select_own
      on public.calendar_photos for select
      to authenticated
      using ((select auth.uid()) = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendar_photos' and policyname = 'calendar_photos_insert_own'
  ) then
    create policy calendar_photos_insert_own
      on public.calendar_photos for insert
      to authenticated
      with check (
        (select auth.uid()) = user_id
        and exists (
          select 1
          from public.calendars
          where calendars.id = calendar_id
            and calendars.user_id = (select auth.uid())
        )
      );
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'calendar_photos' and policyname = 'calendar_photos_delete_own'
  ) then
    create policy calendar_photos_delete_own
      on public.calendar_photos for delete
      to authenticated
      using ((select auth.uid()) = user_id);
  end if;
end;
$$;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'pet-calendar-photos',
  'pet-calendar-photos',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'pet_calendar_photos_select_own'
  ) then
    create policy pet_calendar_photos_select_own
      on storage.objects for select
      to authenticated
      using (
        bucket_id = 'pet-calendar-photos'
        and (storage.foldername(name))[1] = (select auth.uid())::text
      );
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'pet_calendar_photos_insert_own'
  ) then
    create policy pet_calendar_photos_insert_own
      on storage.objects for insert
      to authenticated
      with check (
        bucket_id = 'pet-calendar-photos'
        and (storage.foldername(name))[1] = (select auth.uid())::text
      );
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'pet_calendar_photos_update_own'
  ) then
    create policy pet_calendar_photos_update_own
      on storage.objects for update
      to authenticated
      using (
        bucket_id = 'pet-calendar-photos'
        and (storage.foldername(name))[1] = (select auth.uid())::text
      )
      with check (
        bucket_id = 'pet-calendar-photos'
        and (storage.foldername(name))[1] = (select auth.uid())::text
      );
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'storage' and tablename = 'objects' and policyname = 'pet_calendar_photos_delete_own'
  ) then
    create policy pet_calendar_photos_delete_own
      on storage.objects for delete
      to authenticated
      using (
        bucket_id = 'pet-calendar-photos'
        and (storage.foldername(name))[1] = (select auth.uid())::text
      );
  end if;
end;
$$;
