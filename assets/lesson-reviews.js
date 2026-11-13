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
  ,
  {
    level: 'B1+',
    lesson: '1A',
    title: 'B1+ · 1A The story of me',
    rules: [
      {
        title: 'Narrative tenses: як розповідати історію в минулому',
        text: 'У розповіді поєднуємо три часи: **past simple** — головні події, **past continuous** — фон і тимчасові ситуації, **past perfect** — те, що сталося ще раніше.',
        examples: [
          '*It was a cold day and the wind **was blowing**. Josh **was walking** home when he **heard** a crash.*'
        ]
      },
      {
        title: 'Past simple — головні події',
        text: 'Події, що йдуть одна за одною: **V2 / -ed**.',
        examples: [
          '*She **woke up** early, **made** coffee and **went** for a walk.*',
          '*Suddenly, I **realised** I didn\'t have my keys.*'
        ]
      },
      {
        title: 'Past continuous — фон і тимчасові ситуації',
        text: '**was / were + -ing**: що відбувалося в той момент, погода, атмосфера, тимчасове життя. Часто з **while** і **when**.',
        examples: [
          '*The sun **was shining** and people **were sitting** in the park.*',
          '*I got this ring when I **was living** in Italy.* (тимчасово)',
          '*I **was cooking** when the phone **rang**.* (довга дія + коротка)'
        ]
      },
      {
        title: 'Past perfect — раніше за інші події',
        text: '**had + V3**: дія сталася ДО іншої дії в минулому. Часто з **already, just, never … before**.',
        examples: [
          '*When we got to the station, the train **had already left**.*',
          '*I bought a new jacket to replace the one I**\'d lost**.*',
          '*I **had never ridden** a bike that far before.*'
        ]
      },
      {
        title: 'Оголошення: note form',
        text: 'В оголошеннях прибираємо **артиклі, займенники, допоміжні дієслова** і зайві слова — лишаємо головне.',
        examples: [
          '*It is in very good condition.* → **Very good condition.**',
          '*This bike was bought this year but it was never used.* → **Bought this year but never used.**',
          '*The price includes two chairs.* → **Price includes two chairs.**'
        ]
      }
    ],
    sections: [
      {
        title: 'Граматика: обери правильний час',
        intro: 'Подумай: головна подія, фон чи щось, що сталося раніше?',
        items: [
          { type:'choice', q:'It ___ heavily, so we decided to stay at home.', options:['rained','was raining','had rained'], answer:1, explain:'Фон, погода → **past continuous**.' },
          { type:'choice', q:'When I opened the fridge, I saw that someone ___ all the cheese.', options:['ate','was eating','had eaten'], answer:2, explain:'З\'їли ще до того, як я відкрив → **past perfect**.' },
          { type:'choice', q:'I ___ my old friend Dan while I was waiting for the bus.', options:['met','was meeting','had met'], answer:0, explain:'Коротка подія на фоні довгої → **past simple**.' },
          { type:'choice', q:'At that time, my sister ___ in Warsaw for a few months.', options:['lived','was living','had lived'], answer:1, explain:'Тимчасова ситуація → **past continuous**.' },
          { type:'choice', q:'She was nervous because she ___ on a plane before.', options:['never flew','was never flying','had never flown'], answer:2, explain:'Досвід до моменту в минулому → **had never + V3**.' },
          { type:'choice', q:'We got to the cinema late. The film ___ .', options:['already started','had already started','was already starting'], answer:1, explain:'Почався раніше, ніж ми прийшли → **past perfect**.' },
          { type:'choice', q:'He picked up the guitar, ___ down and started to play.', options:['sat','was sitting','had sat'], answer:0, explain:'Послідовність головних подій → **past simple**.' },
          { type:'choice', q:'I ___ for my phone for ten minutes when I realised it was in my hand!', options:['looked','had looked','was looking'], answer:2, explain:'Довга дія, яку перервало «усвідомив» → **past continuous**.' },
          { type:'choice', q:'Tim bought these boots while he ___ around New Zealand.', options:['travelled','was travelling','had travelled'], answer:1, explain:'Тимчасова ситуація (подорож) → **past continuous**.' },
          { type:'choice', q:'I recognised the man immediately. I ___ him on TV the day before.', options:['saw','was seeing','had seen'], answer:2, explain:'Бачив раніше, ніж упізнав → **past perfect**.' }
        ]
      },
      {
        title: 'Граматика: знайди правильну форму',
        intro: 'Напиши дієслово в дужках у past simple, past continuous або past perfect.',
        items: [
          { type:'gap', q:'While we ___ dinner, the lights suddenly went out.', hint:'have', answer:['were having'], explain:'Фон, перерваний подією → **were having**.' },
          { type:'gap', q:'When I got home, I realised I ___ my bag on the train.', hint:'leave', answer:['had left','\'d left'], explain:'Залишив раніше, ніж помітив → **had left**.' },
          { type:'gap', q:'Last summer, I ___ a cheap guitar at a street market.', hint:'buy', answer:['bought'], explain:'Завершена подія → **past simple**.' },
          { type:'gap', q:'The streets were wet because it ___ all night.', hint:'rain', answer:['had rained','had been raining','\'d rained'], explain:'Дощ ішов раніше → **had rained**.' },
          { type:'gap', q:'I ___ about my exam when my teacher called with the results.', hint:'think', answer:['was thinking'], explain:'Процес у момент дзвінка → **was thinking**.' },
          { type:'gap', q:'My grandma gave me a silver ring that ___ to her mother.', hint:'belong', answer:['had belonged','belonged'], explain:'Належав ще до того → **had belonged** (можна й belonged).' },
          { type:'gap', q:'We ___ snow before our trip to Norway.', hint:'never / see', answer:['had never seen','\'d never seen'], explain:'Досвід до моменту в минулому → **had never seen**.' },
          { type:'gap', q:'Suddenly, the dog ___ out of the house and ran after a cat.', hint:'jump', answer:['jumped'], explain:'Головна подія → **past simple**.' }
        ]
      },
      {
        title: 'Історія: доповни розповідь',
        intro: 'Одна історія — вісім дієслів. Обери правильну форму.',
        items: [
          { type:'choice', q:'It was a sunny afternoon and I ___ in the park with my dog.', options:['walked','was walking','had walked'], answer:1, explain:'Фон історії → **past continuous**.' },
          { type:'choice', q:'Suddenly, I ___ something shiny in the grass.', options:['noticed','was noticing','had noticed'], answer:0, explain:'Головна подія → **past simple**.' },
          { type:'choice', q:'It was an old gold watch. Somebody ___ it.', options:['lost','was losing','had lost'], answer:2, explain:'Загубили раніше → **past perfect**.' },
          { type:'choice', q:'On the back, somebody ___ the words "To Anna, 1975".', options:['wrote','had written','was writing'], answer:1, explain:'Написали задовго до того → **had written**.' },
          { type:'choice', q:'I ___ the watch to the police station near the park.', options:['took','was taking','had taken'], answer:0, explain:'Наступна подія → **past simple**.' },
          { type:'choice', q:'A week later, an old lady ___ me.', options:['called','was calling','had called'], answer:0, explain:'Подія → **past simple**.' },
          { type:'choice', q:'She explained that her husband ___ it to her on their wedding day.', options:['gave','had given','was giving'], answer:1, explain:'Подарував значно раніше → **had given**.' },
          { type:'choice', q:'She ___ when she thanked me — it was very special to her.', options:['cried','was crying','had cried'], answer:1, explain:'Що відбувалось у той момент → **was crying**.' }
        ]
      },
      {
        title: 'Лексика: описуємо речі',
        intro: 'Обери слово, яке найкраще підходить.',
        items: [
          { type:'choice', q:'This old bag ___ to my grandfather.', options:['belonged','inherited','owned'], answer:0, explain:'**belong to** — належати.' },
          { type:'choice', q:'When my aunt died, I ___ her piano.', options:['belonged','inherited','reminded'], answer:1, explain:'**inherit** — успадкувати.' },
          { type:'choice', q:'It\'s just a cheap ring. It isn\'t ___ a lot.', options:['worth','valuable','special'], answer:0, explain:'**not worth a lot** — небагато коштує.' },
          { type:'choice', q:'This is a ___ Rolex, not a fake one.', options:['cool','genuine','damaged'], answer:1, explain:'**genuine** — справжній.' },
          { type:'choice', q:'The box fell off the van, so the TV is a bit ___.', options:['damaged','genuine','special'], answer:0, explain:'**damaged** — пошкоджений.' },
          { type:'choice', q:'It\'s not expensive, but it\'s really ___ to me because my dad made it.', options:['worth','special','leather'], answer:1, explain:'**special to me** — дорогий для мене.' },
          { type:'choice', q:'Those sunglasses look really ___ on you!', options:['cool','genuine','inherited'], answer:0, explain:'**cool** — класний, стильний.' },
          { type:'choice', q:'Her shoes are made of real ___ — they\'re soft and brown.', options:['leather','denim','glass'], answer:0, explain:'**leather** — шкіра.' }
        ]
      },
      {
        title: 'Лексика: з чого це зроблено?',
        intro: 'Впиши матеріал: stone, rubber, diamond, iron, cotton, silver, denim, wood, steel, plastic, gold, glass.',
        items: [
          { type:'gap', q:'My favourite jeans and jacket are made of ___.', hint:'джинсова тканина', answer:['denim'], explain:'**denim**.' },
          { type:'gap', q:'The window broke because it was made of thin ___.', hint:'скло', answer:['glass'], explain:'**glass**.' },
          { type:'gap', q:'The ball bounced high — it was made of ___.', hint:'гума', answer:['rubber'], explain:'**rubber**.' },
          { type:'gap', q:'Second place gets a ___ medal.', hint:'срібло', answer:['silver'], explain:'**silver** — за друге місце.' },
          { type:'gap', q:'This T-shirt is 100% ___, so it\'s nice in hot weather.', hint:'бавовна', answer:['cotton'], explain:'**cotton**.' },
          { type:'gap', q:'Knives and saucepans are often made of stainless ___.', hint:'сталь', answer:['steel'], explain:'**stainless steel** — нержавіюча сталь.' },
          { type:'gap', q:'The old castle walls are made of ___.', hint:'камінь', answer:['stone'], explain:'**stone**.' },
          { type:'gap', q:'Please don\'t use ___ bags — they\'re bad for the environment.', hint:'пластик', answer:['plastic'], explain:'**plastic bags**.' },
          { type:'gap', q:'This chair is made of ___ from a local forest.', hint:'дерево', answer:['wood'], explain:'**wood** — дерево як матеріал (не tree).' },
          { type:'gap', q:'A ___ is the hardest natural stone in the world.', hint:'діамант', answer:['diamond'], explain:'**diamond**.' }
        ]
      },
      {
        title: 'Оголошення: note form',
        intro: 'Обери найкращий варіант для онлайн-оголошення.',
        items: [
          { type:'choice', q:'It has been slightly damaged.', options:['Slightly damaged.','It slightly damaged.','Has slightly damaged.'], answer:0, explain:'Прибираємо **it has been** → **Slightly damaged.**' },
          { type:'choice', q:'The price includes a spare set of strings.', options:['Price includes spare set of strings.','The price includes strings.','Includes the price strings.'], answer:0, explain:'Прибираємо артиклі → **Price includes spare set of strings.**' },
          { type:'choice', q:'This has never been used.', options:['Never used.','Has never used.','This never used.'], answer:0, explain:'**Never used.**' },
          { type:'choice', q:'They come in the original box.', options:['Come original box.','In original box.','They in original box.'], answer:1, explain:'**In original box.**' },
          { type:'choice', q:'It is in the same condition as it was when it was new.', options:['Same new.','Condition: as new.','It as new.'], answer:1, explain:'**Condition: as new.**' }
        ]
      }
    ],
    speaking: {
      intro: 'Відповідай уголос, 1–2 хвилини на питання. Розповідай історії: past simple, past continuous і past perfect.',
      questions: [
        'Choose three objects that say something about you. What are they and what are they made of?',
        'Where did you get each object? What were you doing at that time of your life?',
        'Do you have anything that belonged to your parents or grandparents? What\'s its story?',
        'Do you own something that isn\'t worth a lot but is very special to you? Why is it special?',
        'Tell me about a time you lost something important. What had happened? Did you find it?',
        'Is there something you would never throw away? Why not?',
        'Have you ever bought or sold something online? What happened?',
        'Describe one thing you could sell online today, as if you were writing the advert.'
      ],
      phrases: [
        'This … belonged to my …',
        'I inherited it from …',
        'It\'s not worth a lot, but it\'s really special to me.',
        'I got it when I was living / studying in …',
        'I bought it to replace the one I\'d lost.',
        'It\'s a bit damaged now, but I still love it.',
        'It reminds me of …',
        'It\'s made of …'
      ]
    }
  }
  ,
  {
    level: 'B1+',
    lesson: '1B',
    title: 'B1+ · 1B Less is more?',
    rules: [
      {
        title: 'Дієслово + прийменник + -ing',
        text: 'Якщо після дієслова стоїть прийменник (крім частки **to** інфінітива), наступне дієслово — у формі **-ing**.',
        examples: [
          '**succeed in** — *She succeeded in **finding** a cheap flat.*',
          '**believe in / care about / dream about / think about** — *I dream about **travelling** the world.*',
          '**concentrate on / apologise for / struggle with** — *He apologised for **being** late.*',
          '**look forward to** — тут **to** прийменник! *I look forward to **meeting** you.*'
        ]
      },
      {
        title: 'Фразові дієслова + -ing',
        text: 'Після більшості фразових дієслів теж **-ing**: **give up, put off, carry on, keep on**.',
        examples: [
          '*I gave up **eating** sugar a month ago.*',
          '*Stop putting off **calling** your grandma!*',
          '*We carried on **talking** until midnight.*'
        ]
      },
      {
        title: 'Різне значення: go on, grow up, turn out',
        text: 'Деякі дієслова міняють значення залежно від форми.',
        examples: [
          '**go on doing** — продовжувати: *She went on **singing** after the lights went out.*',
          '**go on to do** — згодом стати / зробити: *She went on **to become** a pop star.*',
          '**grow up doing** — робити, поки ріс: *He grew up **playing** football in the street.*',
          '**grow up to be** — ким став дорослим: *He grew up **to be** a professional player.*',
          '**turn out to be** — виявитися: *The trip turned out **to be** amazing.*'
        ]
      },
      {
        title: 'Stop і remember: to do чи doing',
        text: 'Значення змінюється!',
        examples: [
          '**stop doing** — припинити, кинути звичку: *I stopped **buying** magazines.*',
          '**stop to do** — зупинитися, щоб зробити інше: *We stopped **to buy** some water.*',
          '**remember to do** — не забути зробити: *Remember **to lock** the door.*',
          '**remember doing** — пам\'ятати, що робив: *I remember **playing** with this toy.*'
        ]
      },
      {
        title: 'Як говорити про вподобання',
        text: 'Корисні фрази з уроку.',
        examples: [
          '**It\'s ideal for me.** — Це саме те, що мені треба.',
          '**I\'m not a big fan of …** / **… is not for me.** — Мені не дуже подобається …',
          '**I can\'t do without …** — Я не можу обійтися без …',
          '**It gives me pleasure.** — Це мене радує.',
          '**We have different tastes.** — У нас різні смаки.'
        ]
      }
    ],
    sections: [
      {
        title: 'Граматика: обери правильну форму',
        intro: 'Є прийменник? Тоді, швидше за все, -ing.',
        items: [
          { type:'choice', q:'My brother finally succeeded in ___ his own business.', options:['start','to start','starting'], answer:2, explain:'**succeed in** + -ing.' },
          { type:'choice', q:'I\'m really looking forward to ___ my cousins at Christmas.', options:['see','seeing','to see'], answer:1, explain:'**look forward to** + -ing (to — прийменник).' },
          { type:'choice', q:'Our neighbour apologised for ___ so much noise last night.', options:['making','to make','make'], answer:0, explain:'**apologise for** + -ing.' },
          { type:'choice', q:'Stop worrying and concentrate on ___ the exam.', options:['pass','passing','to pass'], answer:1, explain:'**concentrate on** + -ing.' },
          { type:'choice', q:'The party turned out ___ much better than we expected.', options:['being','be','to be'], answer:2, explain:'**turn out to be** — виявитися.' },
          { type:'choice', q:'I keep putting off ___ the dentist.', options:['to call','calling','call'], answer:1, explain:'**put off** + -ing.' },
          { type:'choice', q:'She doesn\'t care about ___ expensive clothes.', options:['wearing','to wear','wear'], answer:0, explain:'**care about** + -ing.' },
          { type:'choice', q:'Lots of people struggle with ___ their homes tidy.', options:['keep','to keep','keeping'], answer:2, explain:'**struggle with** + -ing.' },
          { type:'choice', q:'We\'re thinking about ___ to a smaller flat.', options:['moving','to move','move'], answer:0, explain:'**think about** + -ing.' },
          { type:'choice', q:'Tom gave up ___ coffee because he couldn\'t sleep.', options:['to drink','drinking','drink'], answer:1, explain:'**give up** + -ing.' }
        ]
      },
      {
        title: 'Граматика: різне значення',
        intro: 'Обери форму, яка відповідає значенню.',
        items: [
          { type:'choice', q:'Anna started as a waitress and went on ___ her own restaurant.', options:['opening','to open'], answer:1, explain:'Згодом досягла → **go on to do**.' },
          { type:'choice', q:'The teacher asked them to be quiet, but they went on ___.', options:['talking','to talk'], answer:0, explain:'Продовжували → **go on doing**.' },
          { type:'choice', q:'I grew up ___ in a small village near the mountains.', options:['living','to live'], answer:0, explain:'Що робив, поки ріс → **grow up doing**.' },
          { type:'choice', q:'That shy little boy grew up ___ a famous actor.', options:['being','to be'], answer:1, explain:'Ким став → **grow up to be**.' },
          { type:'choice', q:'We were tired, so we stopped ___ a coffee.', options:['having','to have'], answer:1, explain:'Зупинились, щоб зробити → **stop to do**.' },
          { type:'choice', q:'I stopped ___ fast food — I feel much better now.', options:['eating','to eat'], answer:0, explain:'Кинув звичку → **stop doing**.' },
          { type:'choice', q:'Please remember ___ the plants while I\'m away.', options:['watering','to water'], answer:1, explain:'Не забудь зробити → **remember to do**.' },
          { type:'choice', q:'I remember ___ this song at my sister\'s wedding.', options:['hearing','to hear'], answer:0, explain:'Спогад → **remember doing**.' }
        ]
      },
      {
        title: 'Граматика: постав дієслово в правильну форму',
        intro: 'Історія дизайнерки. Напиши -ing або to-інфінітив.',
        items: [
          { type:'gap', q:'Maya grew up ___ pictures of houses on every piece of paper.', hint:'draw', answer:['drawing'], explain:'**grow up doing**.' },
          { type:'gap', q:'After school, she went on ___ interior design in Milan.', hint:'study', answer:['to study'], explain:'**go on to do** — далі зробила.' },
          { type:'gap', q:'Her first job turned out ___ really boring.', hint:'be', answer:['to be'], explain:'**turn out to be**.' },
          { type:'gap', q:'But she carried on ___ hard and learned a lot.', hint:'work', answer:['working'], explain:'**carry on** + -ing.' },
          { type:'gap', q:'Two years later, she succeeded in ___ her own studio.', hint:'open', answer:['opening'], explain:'**succeed in** + -ing.' },
          { type:'gap', q:'She believes in ___ homes simple and bright.', hint:'keep', answer:['keeping'], explain:'**believe in** + -ing.' },
          { type:'gap', q:'Now she dreams about ___ a hotel by the sea.', hint:'design', answer:['designing'], explain:'**dream about** + -ing.' },
          { type:'gap', q:'"I\'ll never stop ___ new things," she says.', hint:'try', answer:['trying'], explain:'Не припинятиме → **stop doing**.' }
        ]
      },
      {
        title: 'Лексика: вподобання',
        intro: 'Обери слово, яке підходить.',
        items: [
          { type:'choice', q:'This quiet café is ___ for working on my laptop.', options:['ideal','dream','pleasure'], answer:0, explain:'**ideal** — ідеальний, саме те.' },
          { type:'choice', q:'Working with animals has always been my ___ job.', options:['ideal','dream','taste'], answer:1, explain:'**dream job** — робота мрії.' },
          { type:'choice', q:'I live near my office, so I can ___ a car.', options:['appreciate','do without','give up'], answer:1, explain:'**do without** — обходитися без.' },
          { type:'choice', q:'After a month abroad, you really ___ your family and friends.', options:['appreciate','prefer','dream'], answer:0, explain:'**appreciate** — цінувати.' },
          { type:'choice', q:'Gardening ___ my grandma a lot of pleasure.', options:['makes','gives','takes'], answer:1, explain:'**give (sb) pleasure**.' },
          { type:'choice', q:'We never agree on films — we have very different ___.', options:['pleasures','dreams','tastes'], answer:2, explain:'**different tastes**.' },
          { type:'choice', q:'Extreme sports? No, thanks. They\'re not ___ me.', options:['for','of','to'], answer:0, explain:'**not for me**.' },
          { type:'choice', q:'I\'m not a big ___ of horror films.', options:['fan','lover','friend'], answer:0, explain:'**not a big fan of**.' }
        ]
      },
      {
        title: 'Лексика: впиши слово',
        intro: 'Слова з уроку: ideal, appreciate, do without, pleasure, tastes, fan, stuff, crowded.',
        items: [
          { type:'gap', q:'I can\'t ___ my morning coffee — I need it!', hint:'2 слова', answer:['do without'], explain:'**can\'t do without** — не можу без.' },
          { type:'gap', q:'Our flat is tiny, but it\'s ___ for two people.', hint:'1 слово', answer:['ideal'], explain:'**ideal for**.' },
          { type:'gap', q:'I\'m not a big ___ of shopping — I order everything online.', hint:'1 слово', answer:['fan'], explain:'**not a big fan of**.' },
          { type:'gap', q:'Reading in bed gives me real ___.', hint:'1 слово', answer:['pleasure'], explain:'**give pleasure**.' },
          { type:'gap', q:'I really ___ all your help with the move. Thank you!', hint:'1 слово', answer:['appreciate'], explain:'**appreciate** — бути вдячним.' },
          { type:'gap', q:'My parents and I have different ___ in furniture.', hint:'1 слово', answer:['tastes'], explain:'**different tastes**.' },
          { type:'gap', q:'The underground is so ___ in the morning that I can\'t move.', hint:'переповнений', answer:['crowded'], explain:'**crowded**.' },
          { type:'gap', q:'Our cupboards are full of old ___ we never use.', hint:'речі (розм.)', answer:['stuff'], explain:'**stuff** — незлічуване, без -s.' }
        ]
      },
      {
        title: 'Повторення статті: Minimalism vs. Maximalism',
        intro: 'Що сказали Zuleya та Richard у статті?',
        items: [
          { type:'choice', q:'Zuleya\'s motto is:', options:['"Less is more"','"Fill the world with colour"'], answer:0, explain:'Для мінімалістів: **"Less is more"**.' },
          { type:'choice', q:'Zuleya thinks minimalism helps us ___ the things that matter.', options:['buy','appreciate'], answer:1, explain:'**appreciate the things that matter**.' },
          { type:'choice', q:'For Zuleya, what is really important is:', options:['people and relationships','beautiful objects'], answer:0, explain:'**It\'s people and relationships, not stuff.**' },
          { type:'choice', q:'Richard\'s love of maximalism started with:', options:['a trip to Mozambique','a Netflix series'], answer:0, explain:'Подорож до **Mozambique** у 20 років.' },
          { type:'choice', q:'For Richard, maximalism is about:', options:['luxury','joy'], answer:1, explain:'**Maximalism isn\'t about luxury. It\'s about joy.**' },
          { type:'choice', q:'Richard\'s treasures ___ him and his visitors.', options:['give pleasure to','do without'], answer:0, explain:'**They give pleasure to me and my visitors.**' },
          { type:'choice', q:'Richard says a minimalist house would be like living in:', options:['a hospital','a museum'], answer:0, explain:'**It would be like living in a hospital!**' }
        ]
      }
    ],
    speaking: {
      intro: 'Відповідай уголос, 1–2 хвилини на питання. Вживай дієслова з прийменниками + -ing і емфатичні фрази (I definitely …, I really …, I absolutely can\'t …).',
      questions: [
        'Minimalism or maximalism — which is more "you"? Describe your ideal room.',
        'Social butterfly or stay-at-home: is your ideal evening spent alone or with other people?',
        'Messy or tidy: does it give you pleasure to keep things tidy?',
        'How long could you give up checking your phone? What can\'t you do without?',
        'Do you prefer to concentrate on one thing at a time, or are you a multitasker?',
        'Do you dream about big things (a dream job, a new country) or do you appreciate what you have now?',
        'Do you follow your family\'s traditions, or do you have different tastes?',
        'Are you a planner? What do you usually put off doing?',
        'What possessions would you never throw away? Which ones could you easily do without?'
      ],
      phrases: [
        'I\'m definitely a … person.',
        'I really look forward to …ing …',
        'I\'m not a big fan of … — it\'s not for me.',
        'I can\'t do without …',
        '… gives me a lot of pleasure.',
        'I always put off …ing …',
        'I believe in …ing …',
        'We have very different tastes.'
      ]
    }
  },
  {
    level: 'B1',
    lesson: '1C',
    title: 'B1 · 1C Let\'s talk!',
    rules: [
      {
        title: 'Почати розмову з незнайомцем',
        text: 'Ввічливо звертаємося через **Excuse me** і ставимо просте питання про ситуацію.',
        examples: [
          '***Excuse me, is anyone** sitting here / using this?*',
          '***Is this your first time** here / at this event?*',
          '***Do you mind if I** / **Is it OK if I** charge my phone here?*',
          '***How long have you** lived here / worked here?*',
          '***Excuse me, do you know if there\'s** a café near here?*',
          '*I\'m Matt, **by the way**.*'
        ]
      },
      {
        title: 'Почати розмову зі знайомим',
        text: 'Із друзями та знайомими починаємо з погоди, новин або планів.',
        examples: [
          '***It\'s a lovely** morning, **isn\'t it**?*',
          '***Did you hear about** the accident?*',
          '***Did you watch** the match?*',
          '***Are you doing anything nice** at the weekend?*',
          '***How was your** weekend / holiday?*'
        ]
      },
      {
        title: 'Відповісти і підтримати розмову',
        text: 'Коротко дозволяємо: **No problem. Go ahead. Not at all. Help yourself. Be my guest.** Щоб розмова тривала, повертаємо питання: **What about you? How about you? And you?**',
        examples: [
          '*Do you mind if I sit here? — **Not at all.***',
          '*Is anyone using this? — No, **go ahead**.*',
          '*I go every year. **How about you?***'
        ]
      },
      {
        title: 'Закінчити розмову',
        text: 'Пояснюємо, що треба йти, і прощаємося.',
        examples: [
          '***I\'ve got to go.** / **That\'s my** bus.*',
          '*OK, **nice to meet you**. / **Nice talking to you**.*',
          '***See you later.** / **Have fun!** / **Have a good time!***'
        ]
      }
    ],
    sections: [
      {
        title: 'Граматика: обери правильний варіант',
        intro: 'Як у Grammar Bank: обери правильне слово у фразі.',
        items: [
          { type:'choice', q:'A: ___, is anyone sitting here?', options:['Excuse','Excuse me'], answer:1, explain:'**Excuse me**, is anyone sitting here?' },
          { type:'choice', q:'B: No, ___.', options:['go on','go ahead'], answer:1, explain:'**Go ahead** = будь ласка, сідайте.' },
          { type:'choice', q:'A: Do you mind ___ I charge my phone here?', options:['that','if'], answer:1, explain:'**Do you mind if I …?**' },
          { type:'choice', q:'B: ___ problem.', options:['No','Is no'], answer:0, explain:'**No problem.**' },
          { type:'choice', q:'A: Is this ___ first time here?', options:['the','your'], answer:1, explain:'**Is this your first time here?**' },
          { type:'choice', q:'B: Yes, what ___ you?', options:['for','about'], answer:1, explain:'**What about you?** — питання у відповідь.' },
          { type:'choice', q:'A: How long ___ here?', options:['have you lived','do you live'], answer:0, explain:'Від минулого до тепер → **have you lived** (Present Perfect).' },
          { type:'choice', q:'A: Are you going ___ Cambridge?', options:['in','to'], answer:1, explain:'**going to** + місце.' },
          { type:'choice', q:'B: Sorry, ___ go.', options:['I\'ve got to','I don\'t'], answer:0, explain:'**I\'ve got to go** = мені треба йти.' },
          { type:'choice', q:'A: ___ you mind if I sit here?', options:['Are','Do'], answer:1, explain:'**Do you mind if …?**' },
          { type:'choice', q:'B: ___ guest.', options:['You are my','Be my'], answer:1, explain:'**Be my guest.**' },
          { type:'choice', q:'A: I\'m Jess, ___ way.', options:['on the','by the'], answer:1, explain:'**by the way** = до речі.' },
          { type:'choice', q:'B: OK, ___ you, Jess.', options:['nice that I meet','nice to meet'], answer:1, explain:'**Nice to meet you.**' },
          { type:'choice', q:'B: OK, ___ your weekend!', options:['enjoy','enjoying'], answer:0, explain:'Побажання — наказовий спосіб: **Enjoy your weekend!**' }
        ]
      },
      {
        title: 'Граматика: розстав слова в правильному порядку',
        intro: 'Напиши речення повністю. Розділові знаки можна не ставити.',
        items: [
          { type:'gap', q:'you / talking / to / nice .', hint:'(закінчити розмову)', answer:['Nice talking to you.','nice / talking / to / you .'], explain:'**Nice / talking / to / you.**' },
          { type:'gap', q:'nice / weekend / you / at / anything / the / doing / are ?', hint:'(питання про плани)', answer:['Are you doing anything nice at the weekend?','are / you / doing / anything / nice / at / the / weekend ?'], explain:'**Are / you / doing / anything / nice / at / the / weekend?**' },
          { type:'gap', q:'anyone / is / this / using ?', hint:'(почати розмову)', answer:['Is anyone using this?','is / anyone / using / this ?'], explain:'**Is / anyone / using / this?**' },
          { type:'gap', q:'time / a / good / have .', hint:'(побажання)', answer:['Have a good time.','have / a / good / time .'], explain:'**Have / a / good / time.**' },
          { type:'gap', q:'if / you / charge / mind / I / phone / here / do / my ?', hint:'(дозвіл)', answer:['Do you mind if I charge my phone here?','do / you / mind / if / I / charge / my / phone / here ?'], explain:'**Do / you / mind / if / I / charge / my / phone / here?**' },
          { type:'gap', q:'to / OK, / you / meet / nice .', hint:'(знайомство)', answer:['OK, nice to meet you.','OK nice to meet you','OK, / nice / to / meet / you .'], explain:'**OK, / nice / to / meet / you.**' },
          { type:'gap', q:'train / this / my / is .', hint:'(треба йти)', answer:['This is my train.','this / is / my / train .'], explain:'**This / is / my / train.**' },
          { type:'gap', q:'later / you / see .', hint:'(прощання)', answer:['See you later.','see / you / later .'], explain:'**See / you / later.**' }
        ]
      },
      {
        title: 'Повторення уроку: фрази з розмов',
        intro: 'Розмови з уроку: фестиваль, перший день на роботі, вокзал і співбесіда.',
        items: [
          { type:'gap', q:'Excuse me, is ___ sitting here?', hint:'1 слово', answer:['anyone','anybody'], explain:'**Is anyone sitting here?**' },
          { type:'gap', q:'Have you been to the festival before? — Yes, I go every year. How ___ you?', hint:'1 слово', answer:['about'], explain:'**How about you?**' },
          { type:'gap', q:'I\'m Kate, by the ___.', hint:'1 слово', answer:['way'], explain:'**by the way**.' },
          { type:'gap', q:'Great. Well, Justine, I\'ve ___ go.', hint:'2 слова', answer:['got to'], explain:'**I\'ve got to go.**' },
          { type:'gap', q:'Nice to meet you. — Yes, nice to ___ you.', hint:'1 слово', answer:['meet'], explain:'**Nice to meet you.**' },
          { type:'gap', q:'Excuse me, do you ___ if I charge my phone here?', hint:'1 слово', answer:['mind'], explain:'**Do you mind if …?**' },
          { type:'gap', q:'Not at all. ___ my guest.', hint:'1 слово', answer:['Be'], explain:'**Be my guest.**' },
          { type:'gap', q:'Oh, that\'s my train. Nice ___ to you.', hint:'1 слово', answer:['talking'], explain:'**Nice talking to you.**' },
          { type:'gap', q:'It\'s a lovely morning, ___ it?', hint:'1 слово', answer:['isn\'t','isnt'], explain:'**isn\'t it?** — розділове питання.' },
          { type:'gap', q:'Ten thirty. I\'m early. What ___ yours?', hint:'1 слово', answer:['about'], explain:'**What about yours?**' }
        ]
      },
      {
        title: 'Почати, підтримати чи закінчити?',
        intro: 'Для чого ця фраза?',
        items: [
          { type:'choice', q:'Nice talking to you.', options:['starting','keeping it going','ending'], answer:2, explain:'Закінчуємо розмову.' },
          { type:'choice', q:'Do you mind if I charge my phone here?', options:['starting','keeping it going','ending'], answer:0, explain:'Починаємо розмову.' },
          { type:'choice', q:'Help yourself.', options:['starting','keeping it going','ending'], answer:1, explain:'Відповідь, розмова триває.' },
          { type:'choice', q:'I\'ve got to go.', options:['starting','keeping it going','ending'], answer:2, explain:'Закінчуємо розмову.' },
          { type:'choice', q:'Do you know if there\'s a café near here?', options:['starting','keeping it going','ending'], answer:0, explain:'Починаємо розмову.' },
          { type:'choice', q:'What about you?', options:['starting','keeping it going','ending'], answer:1, explain:'Повертаємо питання — розмова триває.' }
        ]
      },
      {
        title: 'Лексика: тема для розмови',
        intro: 'Про яку тему це питання? Кожне питання — з уроку.',
        items: [
          { type:'choice', q:'Did you hear about the fire in town? It\'s terrible.', options:['the news','the weather','politics'], answer:0, explain:'**the news**' },
          { type:'choice', q:'That\'s a nice jacket. Where did you get it?', options:['hobbies','clothes and fashion','work or studies'], answer:1, explain:'**clothes and fashion**' },
          { type:'choice', q:'So, who do you think will win the election?', options:['the news','sport or music events','politics'], answer:2, explain:'**politics**' },
          { type:'choice', q:'Astrid tells me you like painting. What kinds of things do you paint?', options:['hobbies and free-time activities','holiday experiences','work or studies'], answer:0, explain:'**hobbies and free-time activities**' },
          { type:'choice', q:'It\'s the Big Music Live this weekend. Are you going?', options:['sport or music events','the news','food and eating out'], answer:0, explain:'**sport or music events**' },
          { type:'choice', q:'I hear you have a job in finance. Do you enjoy it?', options:['politics','work or studies','hobbies'], answer:1, explain:'**work or studies**' },
          { type:'choice', q:'Have you tried these pastries? They look delicious.', options:['food and eating out','clothes and fashion','the weather'], answer:0, explain:'**food and eating out**' },
          { type:'choice', q:'We\'ve just got back from Corfu. It was wonderful.', options:['holiday experiences','sport or music events','the news'], answer:0, explain:'**holiday experiences**' }
        ]
      },
      {
        title: 'Лексика: Making small talk',
        intro: 'Впиши тему: clothes, eating, event, experiences, hobbies, news, studies, weather.',
        items: [
          { type:'gap', q:'One thing that we all have in common is the ___.', hint:'погода', answer:['weather'], explain:'**the weather**' },
          { type:'gap', q:'It could be a national ___ like a football match or a festival.', hint:'подія', answer:['event'], explain:'**event**' },
          { type:'gap', q:'You might want to avoid talking about the ___ because the stories are often sad.', hint:'новини', answer:['news'], explain:'**the news**' },
          { type:'gap', q:'He told me about his university ___ in business.', hint:'навчання', answer:['studies'], explain:'**studies**' },
          { type:'gap', q:'He told me about his recent holiday ___ abroad.', hint:'враження', answer:['experiences'], explain:'**holiday experiences**' },
          { type:'gap', q:'Ask about restaurants — this can lead to a discussion about food and ___ out.', hint:'-ing', answer:['eating'], explain:'**food and eating out**' }
        ]
      }
    ],
    speaking: {
      intro: 'Відповідай уголос або розіграй мінідіалоги. Почни розмову, підтримай її питанням і красиво закінчи.',
      questions: [
        'How often do you talk to people you don\'t know? In what places?',
        'Would a "Happy to chat bench" be a good idea where you live? Why / why not?',
        'Which topics are good for small talk with strangers? Which topics are better to avoid? Why?',
        'Role-play: it\'s your first day at work. Start a conversation with a colleague in the kitchen.',
        'Role-play: you are on a train and want to charge your phone. Ask the person next to you, chat and end the conversation.',
        'Role-play: you meet a friend at the bus stop on Monday morning. Ask about the weekend.',
        'Role-play: you sit on a "Happy to chat bench" in a park. Someone sits next to you. Keep the conversation going for 2 minutes.'
      ],
      phrases: [
        'Excuse me, is anyone sitting here?',
        'Is this your first time here?',
        'Do you mind if I …?',
        'It\'s a lovely day, isn\'t it?',
        'Not at all. / Go ahead. / Be my guest.',
        'How about you? / What about you?',
        'Oh, that\'s my bus. I\'ve got to go. Nice talking to you!'
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
  const lv = (t.match(/(?:^|[^A-Z0-9])([ABC][12]\+?)(?![0-9])/) || String(studentLevel || '').toUpperCase().match(/([ABC][12]\+?)/) || [])[1];
  if(lv) return same.find(r => r.level.toUpperCase() === lv) || null;
  return same.length === 1 ? same[0] : null;
}
