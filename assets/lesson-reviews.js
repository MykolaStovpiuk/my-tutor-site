/* ==================================================================
   ПОВТОРЕННЯ МАТЕРІАЛУ УРОКІВ
   Коли урок у кабінеті учня позначений як пройдений і його назва
   збігається з набором тут (наприклад «B2 Lesson 1B»), в учня на
   картці уроку з'являється кнопка «Повторити урок».
   Рівень береться з назви уроку, а якщо його там немає — з рівня учня.

   Формат:
   {
     level, lesson, title,
     rules:    [{ title, text, examples: [...] }]      — коротка теорія
     sections: [{ title, intro, items: [...] }]        — вправи
     speaking: { intro, questions: [...], phrases: [...] }
   }
   Типи вправ:
   • { type:'choice', q:'... ___ ...', options:[...], answer:0, explain:'...' }
     answer — номер правильного варіанта (з 0).
   • { type:'gap', q:'... ___ ...', hint:'(verb)', answer:['to visit'], explain:'...' }
     answer — усі прийнятні відповіді.
   У текстах **так** виділяється жирним.
================================================================== */
const LESSON_REVIEWS = [
  {
    level: 'B2',
    lesson: '1B',
    title: 'B2 · 1B Memory',
    rules: [
      {
        title: 'Дієслова зі зміною значення: to do чи doing',
        text: 'Після **remember, forget, stop, try** можна вжити і to-інфінітив, і -ing, але значення різне.',
        examples: [
          '**remember to do** — не забути щось зробити: *Remember to lock the door.*',
          '**remember doing** — пам\'ятати, що вже робив: *I remember going to school for the first time.*',
          '**forget to do** — забути зробити: *I forgot to feed the dog!*',
          '**never forget doing** — ніколи не забути пережите: *I\'ll never forget singing on TV.*',
          '**stop to do** — зупинитися, щоб зробити інше: *I stopped to call my mum.*',
          '**stop doing** — припинити, більше не робити: *I stopped watching TV two years ago.*',
          '**try to do** — намагатися (буває, що не виходить): *I tried to fix the roof.*',
          '**try doing** — спробувати як варіант, чи спрацює: *Try drinking green tea.*'
        ]
      },
      {
        title: 'To-інфінітив після be',
        text: 'Коли говоримо про план, мету чи ідею: **is / was + to do**.',
        examples: [
          '*My idea is **to build** an app.*',
          '*The plan is **to meet** Max outside the venue.*'
        ]
      },
      {
        title: 'To-інфінітив для мети (навіщо?)',
        text: 'Щоб сказати, навіщо щось робимо: **to do**. Формальніше: **so as (not) to do**.',
        examples: [
          '*You should practise every day **to get** better.*',
          '***To remember** a list, imagine a building.*',
          '*She ran to school **so as not to be** late.*'
        ]
      },
      {
        title: '-ing після прийменника',
        text: 'Після прийменників (**by, about, of, for, before, after, without, forward to**…) — завжди -ing, а не інфінітив.',
        examples: [
          '*I passed my exams **by working** hard.*',
          '*I\'m looking forward **to having** a bowl of soup.*'
        ]
      }
    ],
    sections: [
      {
        title: 'Граматика: обери правильну форму',
        intro: 'Зверни увагу на значення: це спогад, план, мета чи спроба?',
        items: [
          { type:'choice', q:'I\'ll never forget ___ the sea for the first time.', options:['to see','seeing'], answer:1, explain:'Спогад про те, що вже було → **forget doing**.' },
          { type:'choice', q:'Please remember ___ the lights before you go to bed.', options:['to switch off','switching off'], answer:0, explain:'Не забути зробити в майбутньому → **remember to do**.' },
          { type:'choice', q:'We stopped ___ a coffee on the way to the airport.', options:['to have','having'], answer:0, explain:'Зупинились, щоб зробити щось інше → **stop to do**.' },
          { type:'choice', q:'My laptop froze, so I tried ___ it off and on again.', options:['to switch','switching'], answer:1, explain:'Спробував як варіант, чи допоможе → **try doing**.' },
          { type:'choice', q:'I tried ___ the box, but it was too heavy.', options:['to lift','lifting'], answer:0, explain:'Намагався, але не вийшло → **try to do**.' },
          { type:'choice', q:'He stopped ___ fast food a year ago and feels much better.', options:['to eat','eating'], answer:1, explain:'Припинив, більше не робить → **stop doing**.' },
          { type:'choice', q:'Oh no, I forgot ___ Mum back! She called three times.', options:['to call','calling'], answer:0, explain:'Не зробив, бо забув → **forget to do**.' },
          { type:'choice', q:'The aim of this exercise is ___ your memory.', options:['to test','testing'], answer:0, explain:'Мета після **be** → to-інфінітив.' },
          { type:'choice', q:'She wrote everything down so as ___ any details.', options:['not to forget','to not forget','not forgetting'], answer:0, explain:'Правильний порядок: **so as not to** do.' },
          { type:'choice', q:'You can improve your vocabulary by ___ a little every day.', options:['to read','reading','read'], answer:1, explain:'Після прийменника **by** → -ing.' }
        ]
      },
      {
        title: 'Граматика: постав дієслово в правильну форму',
        intro: 'Напиши to-інфінітив або -ing форму дієслова в дужках.',
        items: [
          { type:'gap', q:'I remember ___ off my bike when I was six.', hint:'fall', answer:['falling'], explain:'Спогад про минуле → **remember doing**.' },
          { type:'gap', q:'___ long lists, some people imagine a big building.', hint:'remember', answer:['to remember'], explain:'Мета (навіщо?) → to-інфінітив.' },
          { type:'gap', q:'Can\'t sleep? Try ___ a cup of warm milk.', hint:'drink', answer:['drinking'], explain:'Порада спробувати як варіант → **try doing**.' },
          { type:'gap', q:'My plan this summer is ___ all my childhood places.', hint:'visit', answer:['to visit'], explain:'План після **be** → to-інфінітив.' },
          { type:'gap', q:'Don\'t forget ___ your notebook tomorrow!', hint:'bring', answer:['to bring'], explain:'Не забути зробити → **forget to do**.' },
          { type:'gap', q:'I was tired and looking forward to ___ a big bowl of soup.', hint:'have', answer:['having'], explain:'**to** тут прийменник (look forward to) → -ing.' },
          { type:'gap', q:'I turned back early so as ___ home before dark.', hint:'be', answer:['to be'], explain:'**so as to** + інфінітив без -ing.' }
        ]
      },
      {
        title: 'Лексика: сполучення та ідіоми',
        intro: 'Обери слово, яке утворює правильне сполучення.',
        items: [
          { type:'choice', q:'Wait, don\'t tell me — her name is on the ___ of my tongue!', options:['tip','end','top'], answer:0, explain:'**on the tip of my tongue** — крутиться на язиці.' },
          { type:'choice', q:'Sorry I didn\'t call you — it completely ___ my mind.', options:['slipped','ran','fell'], answer:0, explain:'**it slipped my mind** — вилетіло з голови.' },
          { type:'choice', q:'Does the name Jill Price ___ a bell?', options:['ring','sound','play'], answer:0, explain:'**ring a bell** — здаватися знайомим.' },
          { type:'choice', q:'Can you ___ my memory? When is the test?', options:['refresh','remind','repeat'], answer:0, explain:'**refresh my memory** — нагадати мені.' },
          { type:'choice', q:'I tell him every day, but it goes in one ear and ___ the other.', options:['out','off','through'], answer:0, explain:'**in one ear and out the other** — в одне вухо влетіло, в інше вилетіло.' },
          { type:'choice', q:'I was sure we turned left here — my memory is playing ___ on me.', options:['tricks','jokes','games'], answer:0, explain:'**my memory is playing tricks on me** — пам\'ять мене підводить.' },
          { type:'choice', q:'This song always ___ back memories of my first summer job.', options:['brings','takes','gets'], answer:0, explain:'**bring back memories** — навівати спогади.' },
          { type:'choice', q:'Actors need to learn their lines by ___.', options:['heart','memory','mind'], answer:0, explain:'**learn by heart** — вивчити напам\'ять.' },
          { type:'choice', q:'My ___ memory is terrible — I can\'t remember what I had for breakfast!', options:['short-term','long-term','childhood'], answer:0, explain:'Те, що було кілька хвилин чи годин тому → **short-term memory**.' },
          { type:'choice', q:'People with HSAM have almost ___ recall of their lives.', options:['perfect','full','whole'], answer:0, explain:'Сталий вираз → **perfect recall**.' }
        ]
      },
      {
        title: 'Лексика: впиши слово',
        intro: 'Одне слово в кожен пропуск.',
        items: [
          { type:'gap', q:'I\'m terrible with names — I just don\'t have a good ___ for them.', hint:'1 слово', answer:['memory'], explain:'**have a good memory (for sth)**.' },
          { type:'gap', q:'Nima Veiseh can remember every ___ of his teenage years.', hint:'1 слово', answer:['detail'], explain:'**remember every detail**.' },
          { type:'gap', q:'Our earliest ___ memories are often very powerful.', hint:'1 слово', answer:['childhood'], explain:'**childhood memories** — дитячі спогади.' },
          { type:'gap', q:'Research shows our memories may not be as ___ as we think.', hint:'надійні', answer:['reliable'], explain:'**reliable** — надійний.' },
          { type:'gap', q:'If we can\'t remember small details, we fill in the ___ ourselves.', hint:'1 слово', answer:['gaps'], explain:'**fill in the gaps** — заповнювати прогалини.' }
        ]
      }
    ],
    speaking: {
      intro: 'Відповідай уголос, 1–2 хвилини на питання. Намагайся вжити фрази нижче.',
      questions: [
        'Which is better — your short-term memory or your long-term memory? Give an example.',
        'Are you good or bad at learning things by heart? What did you have to learn by heart at school?',
        'Is there a song, smell or place that brings back memories for you? Describe it.',
        'What do you do to remember things — notes, apps, songs, visualisation? What else would you like to try?',
        'Tell a short story from your childhood: when, where, who was there, what happened? Add funny or unusual details.',
        'Do you trust your memory? Has your family ever remembered the same event differently?'
      ],
      phrases: [
        'I clearly remember …ing …',
        'It brings back memories of …',
        'It totally slipped my mind.',
        'It\'s on the tip of my tongue …',
        'My memory may be playing tricks on me, but …',
        'I\'ve tried …ing, and it really works.'
      ]
    }
  },
  {
    level: 'B1',
    lesson: '3D',
    title: 'B1 · 3D What matters most?',
    rules: [
      {
        title: 'Що таке фразове дієслово',
        text: 'Дієслово + частка (**up, off, on, away, down, after**…). Значення часто нове, не таке, як у самого дієслова.',
        examples: [
          '*I **get up** at 6.15.* — встаю з ліжка',
          '*My car **broke down**.* — зламалася',
          'Без об\'єкта: *I **go out** at night. My alarm **goes off** at 7. The plane **takes off** in ten minutes.*'
        ]
      },
      {
        title: 'Можна розділити',
        text: 'Об\'єкт може стояти **після частки** або **між дієсловом і часткою**.',
        examples: [
          '*I **put on** my coat.* = *I **put** my coat **on**.*',
          '*We **picked up** our rubbish.* = *We **picked** our rubbish **up**.*',
          'Так само: **throw away, switch on/off, write down, shut down, look up, try on, take off, put away**'
        ]
      },
      {
        title: 'Не можна розділити',
        text: 'Дієслово і частка завжди разом.',
        examples: [
          '*I **look after** my children.* — НЕ *I look my children after.*',
          '*We **got on** the bus.* — НЕ *We got the bus on.*',
          'Так само: **come across, stick with, log onto, break into, look out for**'
        ]
      },
      {
        title: 'Займенник — посередині',
        text: 'Якщо об\'єкт — займенник (**it, them, her, me**…), у розділюваних дієсловах він завжди стоїть між дієсловом і часткою.',
        examples: [
          '*I\'ll **throw it away**.* — НЕ *I\'ll throw away it.*',
          '*She **picked it up**.* — НЕ *She picked up it.*'
        ]
      }
    ],
    sections: [
      {
        title: 'Граматика: обери правильний варіант',
        intro: 'Розділяється дієслово чи ні? Де стоїть займенник?',
        items: [
          { type:'choice', q:'Grandma is ill, so I ___ this week.', options:['look after her','look her after'], answer:0, explain:'**look after** не розділяється.' },
          { type:'choice', q:'Here\'s your jacket. ___!', options:['Put on it','Put it on'], answer:1, explain:'Займенник — посередині: **put it on**.' },
          { type:'choice', q:'We ___ outside the cinema.', options:['got on the bus','got the bus on'], answer:0, explain:'**get on** (транспорт) не розділяється.' },
          { type:'choice', q:'I ___ in an old box last night.', options:['came across these photos','came these photos across'], answer:0, explain:'**come across** = випадково знайти; не розділяється.' },
          { type:'choice', q:'I don\'t know this word. I\'ll ___.', options:['look up it','look it up'], answer:1, explain:'**look it up** — займенник між дієсловом і часткою.' },
          { type:'choice', q:'Which sentence is NOT correct?', options:['Switch the TV off.','Switch off the TV.','Switch off it.'], answer:2, explain:'З займенником тільки **switch it off**.' },
          { type:'choice', q:'Someone ___ last week, but they didn\'t take anything.', options:['broke our house into','broke into our house'], answer:1, explain:'**break into** не розділяється.' },
          { type:'choice', q:'These shoes are too small. Can I ___ in a bigger size?', options:['try them on','try on them'], answer:0, explain:'**try them on**.' },
          { type:'choice', q:'I\'m enjoying my guitar lessons, so I\'m going to ___.', options:['stick them with','stick with them'], answer:1, explain:'**stick with** не розділяється.' },
          { type:'choice', q:'The plane will ___ in thirty minutes.', options:['take off','take on'], answer:0, explain:'Літак злітає — **take off**.' }
        ]
      },
      {
        title: 'Граматика: напиши з займенником',
        intro: 'Напиши фразове дієслово з дужок разом із займенником (it / them / her). Зверни увагу на час.',
        items: [
          { type:'gap', q:'These old magazines are useless. Let\'s ___.', hint:'(throw away)', answer:['throw them away'], explain:'**throw them away**.' },
          { type:'gap', q:'This is my new number. Please ___.', hint:'(write down)', answer:['write it down'], explain:'**write it down**.' },
          { type:'gap', q:'The music is too loud. Can you ___?', hint:'(switch off)', answer:['switch it off','turn it off'], explain:'**switch it off**.' },
          { type:'gap', q:'I saw some money on the floor, so I ___.', hint:'(pick up, past)', answer:['picked it up'], explain:'**picked it up** — минулий час.' },
          { type:'gap', q:'Your toys are everywhere! ___ now, please.', hint:'(put away)', answer:['put them away','Put them away'], explain:'**Put them away**.' },
          { type:'gap', q:'Mrs Garcia asked me to take her cat and ___ while she\'s away.', hint:'(look after)', answer:['look after it','look after her','look after him'], explain:'**look after it** — не розділяється, займенник іде після.' }
        ]
      },
      {
        title: 'Повторення уроку: що сказали люди',
        intro: 'BBC Street Interviews, life coach Gavin та коментар Alex.',
        items: [
          { type:'choice', q:'Lotte: "I\'m more interested ___ current events."', options:['in','about','on'], answer:0, explain:'**interested in**.' },
          { type:'choice', q:'Mon Zer: "I don\'t care ___ new trends that much."', options:['for','about','of'], answer:1, explain:'**care about**.' },
          { type:'choice', q:'Gerard: "I\'m not really ___ brands at all."', options:['in','into','on'], answer:1, explain:'**be into** = захоплюватися.' },
          { type:'choice', q:'Lily: "Other people\'s opinions are not very ___."', options:['important','interesting','interested'], answer:0, explain:'Для Lily думки інших не дуже важливі.' },
          { type:'choice', q:'"It\'s important to look ___ for each other."', options:['after','out','up'], answer:1, explain:'**look out for** = підтримувати, оберігати.' },
          { type:'choice', q:'Gavin: when we learn, we have the things we need to make ___.', options:['no mistakes','the right choices'], answer:1, explain:'**make the right choices**.' },
          { type:'choice', q:'Gavin: friends make us feel ___ relaxed.', options:['more','less'], answer:0, explain:'Друзі допомагають розслабитися.' },
          { type:'choice', q:'Gavin: when we\'re very tired, we get ___ more often.', options:['annoyed','jealous'], answer:0, explain:'**annoyed** — роздратований.' },
          { type:'choice', q:'Alex: "Some dishes take two hours or more, but it\'s ___ it!"', options:['worth','value','good'], answer:0, explain:'**it\'s worth it** — воно того варте.' },
          { type:'choice', q:'Alex: "I\'m not really ___ shopping in big supermarkets."', options:['into','in','about'], answer:0, explain:'**I\'m not really into …**' }
        ]
      },
      {
        title: 'Лексика: впиши слово',
        intro: 'Одне слово в кожен пропуск.',
        items: [
          { type:'gap', q:'I need a good ___ between my work and my free time.', hint:'рівновага', answer:['balance'], explain:'**a balance between A and B**.' },
          { type:'gap', q:'I plan every hour of my day. ___ is really important to me.', hint:'порядок', answer:['structure','Structure'], explain:'**structure**.' },
          { type:'gap', q:'Music always changes my ___.', hint:'настрій', answer:['mood'], explain:'**change your mood**.' },
          { type:'gap', q:'My dog gives me a ___ to get out of bed.', hint:'причина', answer:['reason'], explain:'**a reason to get out of bed**.' },
          { type:'gap', q:'I love to ___ with new dishes.', hint:'експериментувати', answer:['experiment'], explain:'**experiment with**.' },
          { type:'gap', q:'I try to buy ___ ingredients from the farms near where I live.', hint:'місцеві', answer:['local'], explain:'**local ingredients**.' }
        ]
      }
    ],
    speaking: {
      intro: 'Відповідай уголос, 1–2 хвилини на питання. Вживай фрази нижче і фразові дієслова з уроку.',
      questions: [
        'What three things or activities are most important in your life? Why?',
        'What three things are NOT important to you? Why not?',
        'Is it important for you to follow trends or buy brands? Why / why not?',
        'How do you keep a balance between work or study and free time?',
        'What song do you put on when you need a good mood?',
        'Do you need structure in your day, or do you prefer to be spontaneous?',
        'Who looks out for you? Who do you look after?',
        'Tell me about a hobby you started and stuck with. When did you first become interested in it?',
        'What is a good reason to get out of bed in the morning?',
        'What would you never throw away? Why?'
      ],
      phrases: [
        'The things that are important in my life are …',
        'Spending time with … is important.',
        'It\'s important to look after …',
        'I\'m not interested in … at all.',
        'I don\'t care about … that much.',
        'I\'m not really into …',
        '… means a lot to me. / I couldn\'t live without …'
      ]
    }
  }
];

/* Знайти повторення за назвою уроку: «B2 Lesson 1B», «B2 1B», «1B». */
function findLessonReview(lessonTitle, studentLevel){
  const t = String(lessonTitle || '').toUpperCase();
  const m = t.match(/(?:^|[^A-Z0-9])(\d{1,2}[A-E])(?![A-Z0-9])/);
  if(!m) return null;
  const same = LESSON_REVIEWS.filter(r => r.lesson.toUpperCase() === m[1]);
  const lv = (t.match(/(?:^|[^A-Z0-9])([ABC][12])(?![0-9])/) || String(studentLevel || '').toUpperCase().match(/([ABC][12])/) || [])[1];
  if(lv) return same.find(r => r.level.toUpperCase() === lv) || null;
  return same.length === 1 ? same[0] : null;
}
