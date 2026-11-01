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
    lesson: '6B',
    title: '6B My way',
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
  }
];

/* Знайти набір за назвою уроку: «6B», «6b», «6B My way», «Lesson 6B» */
function findWordSet(lessonTitle){
  const m = String(lessonTitle || '').toUpperCase().match(/\b(\d{1,2}[A-E])\b/);
  if(!m) return null;
  return WORD_SETS.find(s => s.lesson.toUpperCase() === m[1]) || null;
}
