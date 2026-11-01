/* ==================================================================
   ГОТОВІ НАБОРИ СЛІВ ДО УРОКІВ
   Коли у вчительській панелі відмічаєш урок із такою ж назвою
   (наприклад «6B»), панель пропонує одразу додати ці слова учневі.

   Формат слова: { en, ua, example }
   • example — речення, де слово en стоїть ТОЧНО в такій формі:
     з нього кабінет робить вправу «Встав у речення».
   • Кілька перекладів — через кому: 'швидкий, швидко'.
   • Альтернатива англійською — у дужках: 'lorry (truck)'.
================================================================== */
const WORD_SETS = [
  {
    level: 'A2',
    lesson: '6B',
    title: 'A2 · 6B My way',
    parts: [
      {
        title: 'Прикметники (common adjectives 2)',
        words: [
          { en: 'cheap', ua: 'дешевий', example: 'The bus is cheap, but the taxi is expensive.' },
          { en: 'expensive', ua: 'дорогий', example: 'A taxi to the airport is very expensive.' },
          { en: 'comfortable', ua: 'зручний', example: 'The seats on the train are really comfortable.' },
          { en: 'uncomfortable', ua: 'незручний', example: 'This chair is uncomfortable — can I sit in that one?' },
          { en: 'easy', ua: 'легкий, простий', example: 'The underground is easy to use.' },
          { en: 'difficult', ua: 'складний, важкий', example: 'The journey is difficult in winter.' },
          { en: 'interesting', ua: 'цікавий', example: 'The river is slower, but it is more interesting.' },
          { en: 'boring', ua: 'нудний', example: 'A 12-hour plane journey can be boring.' },
          { en: 'long', ua: 'довгий', example: 'My journey to work is long — ninety minutes!' },
          { en: 'short', ua: 'короткий', example: 'It is a short journey, only five minutes.' },
          { en: 'safe', ua: 'безпечний', example: 'Is it safe to ride a bike in the city centre?' },
          { en: 'dangerous', ua: 'небезпечний', example: 'Please don\'t drive so fast — it\'s dangerous.' },
          { en: 'slow', ua: 'повільний', example: 'The bus is very slow when there\'s a lot of traffic.' },
          { en: 'fast', ua: 'швидкий, швидко', example: 'Flying is fast — only four minutes.' },
          { en: 'quiet', ua: 'тихий', example: 'He loves the river because it is quiet.' },
          { en: 'noisy', ua: 'шумний, галасливий', example: 'Sorry, it\'s very noisy in here and I can\'t hear you.' }
        ]
      },
      {
        title: 'Види транспорту',
        words: [
          { en: 'plane', ua: 'літак', example: 'He built his own plane and flies to work.' },
          { en: 'motorbike', ua: 'мотоцикл', example: 'My brother goes to work by motorbike.' },
          { en: 'scooter', ua: 'скутер, моторолер', example: 'A scooter is great for short journeys in the city.' },
          { en: 'van', ua: 'фургон, мікроавтобус', example: 'We moved house in a big white van.' },
          { en: 'hovercraft', ua: 'судно на повітряній подушці', example: 'The sisters built a hovercraft from garden machines.' },
          { en: 'lorry (truck)', ua: 'вантажівка', example: 'A big lorry is on the motorway.' },
          { en: 'boat', ua: 'човен, катер', example: 'He travels to work by boat.' },
          { en: 'ship', ua: 'корабель, судно', example: 'A big ship is in the port.' },
          { en: 'rowing boat', ua: 'весловий човен', example: 'We hired a rowing boat on the lake.' },
          { en: 'ferry', ua: 'пором', example: 'We took the ferry to the island.' },
          { en: 'tram', ua: 'трамвай', example: 'The tram stops in front of my house.' },
          { en: 'underground', ua: 'метро', example: 'The underground is the fastest way to get around London.' }
        ]
      },
      {
        title: 'Сполучення з транспортом (collocations)',
        words: [
          { en: 'take a taxi', ua: 'їхати на таксі, взяти таксі', example: 'Let\'s take a taxi to the train station.' },
          { en: 'get on', ua: 'сісти (в автобус, потяг, на велосипед)', example: 'You touch the card machine when you get on the bus.' },
          { en: 'get off', ua: 'вийти (з автобуса, потяга), злізти', example: 'We get off the train at the next station.' },
          { en: 'get into', ua: 'сісти (в машину, таксі, човен)', example: 'Get into the car — we\'re late!' },
          { en: 'get out of', ua: 'вийти (з машини, таксі)', example: 'The car didn\'t start, so I decided to get out of the car and take the bus.' },
          { en: 'ride a bike', ua: 'їздити на велосипеді', example: 'I prefer to ride a bike when it\'s warm.' },
          { en: 'go by train', ua: 'їхати потягом', example: 'It\'s cheaper to go by train than by plane.' },
          { en: 'on foot', ua: 'пішки', example: 'I go to school on foot — it\'s only ten minutes.' },
          { en: 'journey', ua: 'поїздка, подорож (дорога кудись)', example: 'The journey to work takes ninety minutes.' },
          { en: 'workplace', ua: 'місце роботи', example: 'His workplace is fifteen minutes by car.' },
          { en: 'motorway', ua: 'автомагістраль, траса', example: 'The river is more beautiful than the motorway.' },
          { en: 'car park', ua: 'автостоянка, парковка', example: 'The car park is full in the morning.' },
          { en: 'traffic', ua: 'дорожній рух, затори', example: 'There\'s always a lot of traffic in the city centre.' }
        ]
      }
    ]
  },
  {
    level: 'B2',
    lesson: '1B',
    title: 'B2 · 1B Memory',
    parts: [
      {
        title: 'Сполучення про пам\'ять (collocations about memory)',
        words: [
          { en: 'remember every detail', ua: 'пам\'ятати кожну дрібницю', example: 'I remember every detail of my first day at school.' },
          { en: 'learn things by heart', ua: 'вчити напам\'ять', example: 'At school we had to learn things by heart.' },
          { en: 'bring back memories', ua: 'навівати спогади, пробуджувати спогади', example: 'Old family photos always bring back memories.' },
          { en: 'short-term memory', ua: 'короткочасна пам\'ять', example: 'My short-term memory is terrible — I can\'t remember what I had for breakfast!' },
          { en: 'long-term memory', ua: 'довготривала пам\'ять', example: 'My long-term memory is pretty good.' },
          { en: 'perfect recall', ua: 'бездоганна пам\'ять, здатність точно все відтворити', example: 'I definitely don\'t have perfect recall when it comes to appointments.' },
          { en: 'childhood memories', ua: 'дитячі спогади', example: 'We love sharing our childhood memories with the family.' },
          { en: 'have a good memory', ua: 'мати хорошу пам\'ять', example: 'Do you have a good memory for names?' },
          { en: 'forgetful', ua: 'забудькуватий', example: 'My dad is so forgetful — he loses his keys every day.' },
          { en: 'recall', ua: 'пригадувати, згадувати', example: 'Can you recall the name of your first teacher?' }
        ]
      },
      {
        title: 'Ідіоми про пам\'ять (idioms: memory)',
        words: [
          { en: 'go in one ear and out the other', ua: 'в одне вухо влетіло, в інше вилетіло', example: 'Everything I tell him seems to go in one ear and out the other.' },
          { en: 'slipped my mind', ua: 'вилетіло з голови, я забув(-ла)', example: 'I forgot the milk! Sorry, it totally slipped my mind.' },
          { en: 'refresh my memory', ua: 'нагадати мені, освіжити пам\'ять', example: 'Can you refresh my memory — what time are we starting tomorrow?' },
          { en: 'on the tip of my tongue', ua: 'крутиться на язиці', example: 'Her name is on the tip of my tongue — don\'t tell me!' },
          { en: 'ring a bell', ua: 'здаватися знайомим, щось нагадувати', example: 'Does the name Jill Price ring a bell?' },
          { en: 'memory is playing tricks on me', ua: 'пам\'ять мене підводить (я щось неправильно запам\'ятав)', example: 'I was sure the café was here — my memory is playing tricks on me.' }
        ]
      },
      {
        title: 'Слова зі статей (reading)',
        words: [
          { en: 'relive', ua: 'знову переживати', example: 'She began to relive everything that had happened on that day.' },
          { en: 'daydreaming', ua: 'мріяння, витання в хмарах', example: 'He spends hours daydreaming instead of doing his homework.' },
          { en: 'reliable', ua: 'надійний', example: 'Our memories may not be as reliable as we think.' },
          { en: 'false memories', ua: 'хибні спогади', example: 'Sometimes we create false memories from family stories.' },
          { en: 'fill in the gaps', ua: 'заповнювати прогалини', example: 'If we can\'t remember small details, we fill in the gaps ourselves.' },
          { en: 'bring to mind', ua: 'пригадати, відновити в пам\'яті', example: 'I can\'t bring to mind the name of that film.' },
          { en: 'emotional connection', ua: 'емоційний зв\'язок', example: 'We remember things better when we have an emotional connection with them.' },
          { en: 'focus on', ua: 'зосереджуватися на', example: 'You remember more if you focus on one task at a time.' },
          { en: 'stamina', ua: 'витривалість', example: 'Running up and down the stairs improved my stamina.' }
        ]
      }
    ]
  },
  {
    level: 'B1',
    lesson: '3D',
    title: 'B1 · 3D What matters most?',
    parts: [
      {
        title: 'Фразові дієслова (phrasal verbs)',
        words: [
          { en: 'get up', ua: 'вставати (з ліжка)', example: 'I usually get up at 6.15 on weekdays.' },
          { en: 'go off', ua: 'спрацювати (про будильник)', example: 'My alarm didn\'t go off this morning, so I was late.' },
          { en: 'put on', ua: 'вдягнути; увімкнути (пісню)', example: 'When I feel sad, I put on my favourite song.' },
          { en: 'take off', ua: 'зняти (одяг); злетіти (про літак)', example: 'Please take off your shoes before you come in.' },
          { en: 'pick up', ua: 'підняти, взяти в руки', example: 'Can you pick up that pen for me, please?' },
          { en: 'put away', ua: 'прибрати на місце', example: 'Put away your toys before dinner!' },
          { en: 'throw away', ua: 'викинути', example: 'Don\'t throw away old photos — they\'re memories.' },
          { en: 'switch off', ua: 'вимкнути', example: 'Don\'t forget to switch off the lights.' },
          { en: 'write down', ua: 'записати', example: 'Let me write down your phone number.' },
          { en: 'look up', ua: 'знайти (слово в словнику)', example: 'I don\'t know this word, so I need to look up the meaning.' },
          { en: 'try on', ua: 'приміряти', example: 'Can I try on these jeans, please?' },
          { en: 'shut down', ua: 'вимкнути (комп\'ютер)', example: 'Shut down your laptop before you leave the office.' },
          { en: 'look after', ua: 'доглядати, піклуватися', example: 'I look after my friend\'s son on Saturdays.' },
          { en: 'look out for', ua: 'підтримувати, оберігати (одне одного)', example: 'It\'s important to look out for each other.' },
          { en: 'come across', ua: 'випадково знайти, натрапити', example: 'You sometimes come across old letters when you clean the house.' },
          { en: 'stick with', ua: 'не кидати, продовжувати', example: 'I\'m enjoying my Spanish lessons, so I\'m going to stick with them.' },
          { en: 'log onto', ua: 'увійти (в систему, акаунт)', example: 'I need to log onto the computer first.' },
          { en: 'break into', ua: 'вломитися, проникнути', example: 'Someone tried to break into our house last week.' },
          { en: 'get on', ua: 'сісти (в автобус, потяг)', example: 'We get on the bus outside the school.' },
          { en: 'break down', ua: 'зламатися (про техніку, авто)', example: 'Our old car can break down at any moment.' },
          { en: 'go out', ua: 'піти кудись (розважитися)', example: 'We go out with friends every Friday.' },
          { en: 'go away', ua: 'піти геть; поїхати', example: 'Please go away, I\'m busy!' }
        ]
      },
      {
        title: 'Що для нас важливо (what matters)',
        words: [
          { en: 'creative activities', ua: 'творчі заняття', example: 'Painting and singing are my favourite creative activities.' },
          { en: 'socialise', ua: 'спілкуватися, проводити час з людьми', example: 'I love to socialise with my friends at the weekend.' },
          { en: 'trends', ua: 'тренди, модні тенденції', example: 'I don\'t care about new trends that much.' },
          { en: 'brands', ua: 'бренди', example: 'I\'m not really into brands at all.' },
          { en: 'current events', ua: 'поточні події, новини', example: 'I\'m more interested in current events.' },
          { en: 'opinions', ua: 'думки', example: 'Other people\'s opinions are not very important to me.' },
          { en: 'mood', ua: 'настрій', example: 'Natalia sings to change her mood.' },
          { en: 'uplift', ua: 'підбадьорити, підняти настрій', example: 'Putting on a certain song can uplift you.' },
          { en: 'balance', ua: 'баланс, рівновага', example: 'I need a good balance between my work and my free time.' },
          { en: 'structure', ua: 'структура, чіткий розпорядок', example: 'Structure is really important to me.' },
          { en: 'relaxed', ua: 'розслаблений, спокійний', example: 'Good friends make us feel more relaxed.' },
          { en: 'annoyed', ua: 'роздратований', example: 'When we\'re very tired, we get annoyed more often.' },
          { en: 'jealous', ua: 'заздрісний; ревнивий', example: 'I feel a bit jealous when my sister travels without me.' },
          { en: 'be into', ua: 'захоплюватися (чимось)', example: 'My kids seem to be into computer games.' },
          { en: 'care about', ua: 'дбати про; хвилювати (когось)', example: 'I really care about my family.' },
          { en: 'make the right choices', ua: 'робити правильний вибір', example: 'Learning helps us make the right choices.' },
          { en: 'a reason to get out of bed', ua: 'причина вставати зранку', example: 'My dog gives me a reason to get out of bed.' },
          { en: 'local ingredients', ua: 'місцеві продукти', example: 'I try to buy local ingredients at the market.' },
          { en: 'experiment with', ua: 'експериментувати з', example: 'I like to experiment with new dishes.' },
          { en: 'worth it', ua: 'варте того', example: 'Some dishes take two hours, but it\'s worth it!' }
        ]
      }
    ]
  }
];

/* Ключ набору: «A2 6B» */
function wordSetKey(set){ return `${set.level} ${set.lesson}`; }

/* Знайти набір за назвою уроку: «A2 Lesson 6B», «A2 6B», «6B».
   Рівень береться з назви уроку; якщо його там немає — з рівня учня
   (поле «Рівень» у налаштуваннях учня). Без рівня набір знаходиться,
   лише якщо урок із такою назвою є тільки в одному наборі. */
function findWordSet(lessonTitle, studentLevel){
  const t = String(lessonTitle || '').toUpperCase();
  const m = t.match(/(?:^|[^A-Z0-9])(\d{1,2}[A-E])(?![A-Z0-9])/);
  if(!m) return null;
  const sameLesson = WORD_SETS.filter(s => s.lesson.toUpperCase() === m[1]);
  const lv = (t.match(/(?:^|[^A-Z0-9])([ABC][12])(?![0-9])/) || String(studentLevel || '').toUpperCase().match(/([ABC][12])/) || [])[1];
  if(lv) return sameLesson.find(s => s.level.toUpperCase() === lv) || null;
  return sameLesson.length === 1 ? sameLesson[0] : null;
}
