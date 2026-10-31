-- =====================================================================
--  КАБІНЕТИ УЧНІВ — одноразове налаштування бази даних
--  Supabase → SQL Editor → New query → встав увесь цей файл → Run.
--  Скрипт можна запускати повторно: він нічого не зламає і не видалить.
--
--  ВАЖЛИВО: email викладача нижче (у двох місцях) — це акаунт,
--  який отримає доступ до вчительської панелі. Якщо входитимеш
--  з іншою поштою — заміни її в обох місцях перед запуском.
-- =====================================================================

-- ---------- 1. ТАБЛИЦІ ----------

-- Профіль кожного користувача (учня або викладача)
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text,
  full_name   text not null default '',
  role        text not null default 'student' check (role in ('student','teacher')),
  level       text not null default '',
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Уроки учня (план курсу + відмітка «пройдено»)
create table if not exists public.cabinet_lessons (
  id           bigint generated always as identity primary key,
  student_id   uuid not null references public.profiles(id) on delete cascade,
  title        text not null,
  topic        text not null default '',
  lesson_date  date,
  status       text not null default 'planned' check (status in ('planned','done')),
  notes        text not null default '',
  created_at   timestamptz not null default now()
);
create index if not exists cabinet_lessons_student_idx on public.cabinet_lessons(student_id);

-- Додаткові завдання (посилання на матеріали після уроку)
create table if not exists public.cabinet_tasks (
  id           bigint generated always as identity primary key,
  student_id   uuid not null references public.profiles(id) on delete cascade,
  lesson_id    bigint references public.cabinet_lessons(id) on delete set null,
  title        text not null,
  url          text not null default '',
  description  text not null default '',
  done         boolean not null default false,
  done_at      timestamptz,
  created_at   timestamptz not null default now()
);
create index if not exists cabinet_tasks_student_idx on public.cabinet_tasks(student_id);

-- Лексика учня з інтервальним повторенням
create table if not exists public.cabinet_words (
  id           bigint generated always as identity primary key,
  student_id   uuid not null references public.profiles(id) on delete cascade,
  lesson_id    bigint references public.cabinet_lessons(id) on delete set null,
  en           text not null,
  ua           text not null,
  example      text not null default '',
  box          int  not null default 0,
  due          date not null default current_date,
  added        date not null default current_date,
  added_by     text not null default 'tutor' check (added_by in ('tutor','student')),
  created_at   timestamptz not null default now()
);
create index if not exists cabinet_words_student_idx on public.cabinet_words(student_id);

-- ---------- 2. ХТО ВИКЛАДАЧ ----------

create or replace function public.is_teacher()
returns boolean
language sql stable security definer
set search_path = public
as $$
  select exists (select 1 from public.profiles where id = auth.uid() and role = 'teacher');
$$;

-- Автоматично створює профіль, коли з'являється новий акаунт
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    case when lower(new.email) = 'stovpyuk@gmail.com' then 'teacher' else 'student' end
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Профілі для акаунтів, які вже існували до запуску скрипту
insert into public.profiles (id, email, role)
select u.id, u.email,
       case when lower(u.email) = 'stovpyuk@gmail.com' then 'teacher' else 'student' end
from auth.users u
on conflict (id) do nothing;

update public.profiles set role = 'teacher' where lower(email) = 'stovpyuk@gmail.com';

-- ---------- 3. ДОСТУП (Row Level Security) ----------
-- Учень бачить лише своє. Викладач бачить і змінює все.

alter table public.profiles        enable row level security;
alter table public.cabinet_lessons enable row level security;
alter table public.cabinet_tasks   enable row level security;
alter table public.cabinet_words   enable row level security;

drop policy if exists "profiles: read own or teacher" on public.profiles;
create policy "profiles: read own or teacher" on public.profiles
  for select to authenticated
  using (id = auth.uid() or public.is_teacher());

drop policy if exists "profiles: teacher updates" on public.profiles;
create policy "profiles: teacher updates" on public.profiles
  for update to authenticated
  using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "lessons: read own or teacher" on public.cabinet_lessons;
create policy "lessons: read own or teacher" on public.cabinet_lessons
  for select to authenticated
  using (student_id = auth.uid() or public.is_teacher());

drop policy if exists "lessons: teacher writes" on public.cabinet_lessons;
create policy "lessons: teacher writes" on public.cabinet_lessons
  for all to authenticated
  using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "tasks: read own or teacher" on public.cabinet_tasks;
create policy "tasks: read own or teacher" on public.cabinet_tasks
  for select to authenticated
  using (student_id = auth.uid() or public.is_teacher());

drop policy if exists "tasks: teacher writes" on public.cabinet_tasks;
create policy "tasks: teacher writes" on public.cabinet_tasks
  for all to authenticated
  using (public.is_teacher()) with check (public.is_teacher());

drop policy if exists "words: own or teacher" on public.cabinet_words;
create policy "words: own or teacher" on public.cabinet_words
  for all to authenticated
  using (student_id = auth.uid() or public.is_teacher())
  with check (student_id = auth.uid() or public.is_teacher());

-- ---------- 4. ДІЇ, ЯКІ МОЖЕ РОБИТИ УЧЕНЬ ----------

-- Учень відмічає своє завдання як виконане (і нічого іншого в ньому не змінює)
create or replace function public.set_task_done(task_id bigint, is_done boolean)
returns void
language plpgsql security definer
set search_path = public
as $$
begin
  update public.cabinet_tasks
     set done = is_done,
         done_at = case when is_done then now() else null end
   where id = task_id
     and (student_id = auth.uid() or public.is_teacher());
end;
$$;

-- ---------- 5. ДІЇ ВИКЛАДАЧА ----------

-- Новий пароль для учня (якщо забув)
create or replace function public.teacher_set_password(p_student uuid, p_password text)
returns void
language plpgsql security definer
set search_path = public, extensions
as $$
begin
  if not public.is_teacher() then
    raise exception 'Only the teacher can do this';
  end if;
  if length(coalesce(p_password, '')) < 6 then
    raise exception 'Password must be at least 6 characters';
  end if;
  update auth.users
     set encrypted_password = extensions.crypt(p_password, extensions.gen_salt('bf')),
         updated_at = now()
   where id = p_student;
end;
$$;

-- Перенести слова учня зі старого тренажера (trainer.html, таблиця words)
create or replace function public.import_old_words(p_student uuid, p_old_name text)
returns integer
language plpgsql security definer
set search_path = public
as $$
declare
  n integer;
begin
  if not public.is_teacher() then
    raise exception 'Only the teacher can do this';
  end if;
  insert into public.cabinet_words (student_id, en, ua, example, box, due, added, added_by)
  select p_student, w.en, w.ua, coalesce(w.example, ''),
         coalesce(w.box::text::int, 0),
         coalesce(w.due::text::date, current_date),
         coalesce(w.added::text::date, current_date),
         case when w.added_by = 'student' then 'student' else 'tutor' end
    from public.words w
   where lower(trim(w.student)) = lower(trim(p_old_name))
     and not exists (
       select 1 from public.cabinet_words c
        where c.student_id = p_student and lower(c.en) = lower(w.en)
     );
  get diagnostics n = row_count;
  return n;
end;
$$;


-- Зведення по всіх учнях для вчительської панелі
create or replace function public.teacher_overview()
returns table(student_id uuid, lessons_total int, lessons_done int, tasks_open int,
              words_total int, words_due int, last_lesson date)
language sql stable security definer
set search_path = public
as $$
  select p.id,
    (select count(*) from cabinet_lessons l where l.student_id = p.id)::int,
    (select count(*) from cabinet_lessons l where l.student_id = p.id and l.status = 'done')::int,
    (select count(*) from cabinet_tasks t where t.student_id = p.id and not t.done)::int,
    (select count(*) from cabinet_words w where w.student_id = p.id)::int,
    (select count(*) from cabinet_words w where w.student_id = p.id and w.due <= current_date)::int,
    (select max(l.lesson_date) from cabinet_lessons l where l.student_id = p.id and l.status = 'done')
  from public.profiles p
  where p.role = 'student' and public.is_teacher();
$$;

revoke all on function public.teacher_overview() from public, anon;
grant execute on function public.teacher_overview() to authenticated;
revoke all on function public.teacher_set_password(uuid, text) from public, anon;
revoke all on function public.import_old_words(uuid, text)     from public, anon;
revoke all on function public.set_task_done(bigint, boolean)   from public, anon;
grant execute on function public.teacher_set_password(uuid, text) to authenticated;
grant execute on function public.import_old_words(uuid, text)     to authenticated;
grant execute on function public.set_task_done(bigint, boolean)   to authenticated;

-- Готово. Перевірка: має показати твій акаунт з role = teacher
-- (якщо акаунт уже створено).
select email, role from public.profiles where role = 'teacher';
