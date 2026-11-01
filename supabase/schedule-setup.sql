-- =====================================================================
--  РОЗКЛАД І ОПЛАТИ — одноразове налаштування (другий скрипт)
--  Supabase → SQL Editor → New query → встав увесь файл → Run.
--  Скрипт можна запускати повторно. Доступ до цих даних має лише викладач.
--  Наприкінці переносяться студенти й уроки з «Кабінету уроків» у Claude
--  (стан на 31.10.2026). Уже перенесене повторно не дублюється.
-- =====================================================================

create table if not exists public.crm_students (
  id text primary key, data jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists public.crm_lessons (
  id text primary key, data jsonb not null, updated_at timestamptz not null default now()
);
create table if not exists public.crm_payments (
  id text primary key, data jsonb not null, updated_at timestamptz not null default now()
);

alter table public.crm_students enable row level security;
alter table public.crm_lessons  enable row level security;
alter table public.crm_payments enable row level security;

drop policy if exists "crm students: teacher only" on public.crm_students;
create policy "crm students: teacher only" on public.crm_students
  for all to authenticated using (public.is_teacher()) with check (public.is_teacher());
drop policy if exists "crm lessons: teacher only" on public.crm_lessons;
create policy "crm lessons: teacher only" on public.crm_lessons
  for all to authenticated using (public.is_teacher()) with check (public.is_teacher());
drop policy if exists "crm payments: teacher only" on public.crm_payments;
create policy "crm payments: teacher only" on public.crm_payments
  for all to authenticated using (public.is_teacher()) with check (public.is_teacher());

-- ---------- Перенесення даних з «Кабінету уроків» ----------
insert into public.crm_students (id, data) values
  ('sanna', '{"currency": "UAH", "end": "", "name": "Anna", "note": "", "price": 400, "slots": [{"time": "10:00", "wd": 5}], "start": "2026-11-01"}'::jsonb),
  ('sannasoruta', '{"currency": "UAH", "end": "", "name": "Anna Soruta", "note": "", "price": 400, "slots": [{"time": "21:30", "wd": 3}, {"time": "21:30", "wd": 5}], "start": "2026-11-01"}'::jsonb),
  ('sanya', '{"currency": "UAH", "end": "", "name": "Anya", "note": "", "price": 400, "slots": [{"time": "12:00", "wd": 1}], "start": "2026-11-01"}'::jsonb),
  ('sdiana', '{"currency": "UAH", "end": "", "name": "Diana", "note": "", "price": 400, "slots": [{"time": "20:00", "wd": 3}, {"time": "18:00", "wd": 6}], "start": "2026-11-01"}'::jsonb),
  ('sinesa', '{"currency": "UAH", "end": "", "name": "Inesa", "note": "Пара з Lada, сб 11:00 (по 300 грн кожна)", "price": 300, "slots": [{"time": "11:00", "wd": 6}], "start": "2026-11-01"}'::jsonb),
  ('sirina', '{"currency": "UAH", "end": "", "name": "Irina", "note": "", "price": 400, "slots": [{"time": "11:00", "wd": 7}], "start": "2026-11-01"}'::jsonb),
  ('sivannainna', '{"currency": "UAH", "end": "", "name": "Ivanna (Inna)", "note": "", "price": 400, "slots": [{"time": "15:00", "wd": 6}], "start": "2026-11-01"}'::jsonb),
  ('slada', '{"currency": "UAH", "end": "", "name": "Lada", "note": "Пара з Inesa, сб 11:00 (по 300 грн кожна)", "price": 300, "slots": [{"time": "11:00", "wd": 6}], "start": "2026-11-01"}'::jsonb),
  ('slubov', '{"currency": "UAH", "end": "", "name": "Lubov", "note": "", "price": 400, "slots": [{"time": "21:30", "wd": 1}, {"time": "19:00", "wd": 3}], "start": "2026-11-01"}'::jsonb),
  ('smasha', '{"currency": "UAH", "end": "", "name": "Masha", "note": "", "price": 500, "slots": [{"time": "08:50", "wd": 3}, {"time": "08:50", "wd": 5}], "start": "2026-11-01"}'::jsonb),
  ('smeri', '{"currency": "UAH", "end": "", "name": "Meri", "note": "", "price": 400, "slots": [{"time": "20:00", "wd": 2}, {"time": "20:00", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('snadia', '{"currency": "UAH", "end": "", "name": "Nadia", "note": "", "price": 400, "slots": [{"time": "20:00", "wd": 1}, {"time": "20:00", "wd": 5}], "start": "2026-11-01"}'::jsonb),
  ('snazar', '{"currency": "UAH", "end": "", "name": "Nazar", "note": "", "price": 400, "slots": [{"time": "19:00", "wd": 1}, {"time": "19:00", "wd": 5}], "start": "2026-11-01"}'::jsonb),
  ('soksana', '{"currency": "UAH", "end": "", "name": "Oksana", "note": "", "price": 400, "slots": [{"time": "19:00", "wd": 2}, {"time": "19:00", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('solhafrolia', '{"currency": "UAH", "end": "", "name": "Olha Frolia", "note": "", "price": 400, "slots": [{"time": "10:00", "wd": 3}, {"time": "10:00", "wd": 6}], "start": "2026-11-01"}'::jsonb),
  ('ssofia', '{"currency": "UAH", "end": "", "name": "Sofia", "note": "", "price": 400, "slots": [{"time": "14:30", "wd": 1}, {"time": "12:00", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('svaleria', '{"currency": "UAH", "end": "", "name": "Valeria", "note": "", "price": 300, "slots": [{"time": "21:30", "wd": 2}, {"time": "21:30", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('svictor', '{"currency": "UAH", "end": "", "name": "Victor", "note": "", "price": 400, "slots": [{"time": "14:00", "wd": 2}, {"time": "14:00", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('syevhenii', '{"currency": "UAH", "end": "", "name": "Yevhenii", "note": "", "price": 400, "slots": [{"time": "10:00", "wd": 2}, {"time": "10:00", "wd": 4}], "start": "2026-11-01"}'::jsonb),
  ('syuliah', '{"currency": "UAH", "end": "", "name": "Yulia H", "note": "", "price": 400, "slots": [{"time": "10:00", "wd": 7}], "start": "2026-11-01"}'::jsonb)
on conflict (id) do nothing;
insert into public.crm_lessons (id, data) values
  ('m_32j9o4jim2zy', '{"date": "2026-11-01", "kind": "makeup", "origin": "r_sirina_2026-11-01_1100", "originDate": "2026-11-01", "status": "cancelled", "studentId": "sirina", "time": "12:00"}'::jsonb),
  ('r_sirina_2026-11-01_1100', '{"date": "2026-11-01", "kind": "regular", "makeupId": "m_32j9o4jim2zy", "movedTo": {"date": "2026-11-01", "time": "12:00"}, "status": "moved", "studentId": "sirina", "time": "11:00"}'::jsonb)
on conflict (id) do nothing;

select (select count(*) from public.crm_students) as students, (select count(*) from public.crm_lessons) as lessons;
