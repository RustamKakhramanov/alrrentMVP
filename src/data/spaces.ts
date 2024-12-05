import { Space } from '../types/space';

export const SPACES: Record<number, Space> = {
  1: {
    id: 1,
    title: 'Студия фото Enjoy',
    location: 'Алматы, Алмалинский район, ул. Жибек Жолы',
    price: 12000,
    capacity: 15,
    rating: 4.8,
    description: 'Современная фотостудия с профессиональным оборудованием и различными фонами. Идеально подходит для фотосессий любого формата, от портретной до предметной съемки.',
    images: [
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1550490210-3f232296cbe9?auto=format&fit=crop&q=80',
    ],
    amenities: [
      { id: 'cyclorama', name: 'Циклорама' },
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' },
      { id: 'changing_room', name: 'Гримерка' }
    ],
    equipment: [
      { id: 'camera', name: 'Камера Canon EOS R5' },
      { id: 'lights', name: 'Комплект студийного света Profoto' },
      { id: 'backdrop_system', name: 'Система установки фонов' },
      { id: 'softboxes', name: 'Софтбоксы разных размеров' },
      { id: 'reflectors', name: 'Отражатели' },
      { id: 'monitor', name: 'Монитор для просмотра' }
    ],
    coordinates: [76.928732, 43.251484],
    type: 'studio',
    activities: ['photoshoot', 'video']
  },
  2: {
    id: 2,
    title: 'Студия звукозаписи PRO',
    location: 'Алматы, Алмалинский район, ул. Байтурсынова',
    price: 8000,
    capacity: 8,
    rating: 4.7,
    description: 'Профессиональная студия звукозаписи с современным оборудованием. Идеально подходит для записи подкастов, вокала и музыкальных инструментов.',
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
    ],
    amenities: [
      { id: 'soundproof', name: 'Звукоизоляция' },
      { id: 'acoustics', name: 'Акустическая обработка' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' },
      { id: 'lounge', name: 'Комната отдыха' }
    ],
    equipment: [
      { id: 'mic', name: 'Микрофон Neumann U87' },
      { id: 'interface', name: 'Аудиоинтерфейс Universal Audio' },
      { id: 'monitors', name: 'Студийные мониторы Genelec' },
      { id: 'headphones', name: 'Наушники Sennheiser HD600' },
      { id: 'protools', name: 'Pro Tools Ultimate' }
    ],
    coordinates: [76.938732, 43.241484],
    type: 'recording',
    activities: ['podcast', 'recording']
  },
  3: {
    id: 3,
    title: 'Конференц-зал «Премиум»',
    location: 'Алматы, Алмалинский район, ул. Сатпаева',
    price: 20000,
    capacity: 100,
    rating: 4.9,
    description: 'Просторный конференц-зал с современным оборудованием для проведения деловых мероприятий, конференций и презентаций.',
    images: [
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'projector', name: 'Проектор' },
      { id: 'screen', name: 'Экран' },
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'catering', name: 'Кейтеринг' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'microphones', name: 'Беспроводные микрофоны' },
      { id: 'flipchart', name: 'Флипчарт' },
      { id: 'laptop', name: 'Ноутбук' },
      { id: 'clicker', name: 'Презентер' }
    ],
    coordinates: [76.918732, 43.261484],
    type: 'conference',
    activities: ['conference', 'business', 'corporate', 'workshop']
  },
  4: {
    id: 4,
    title: 'Студия подкастов',
    location: 'Алматы, Алмалинский район, ул. Гоголя',
    price: 6000,
    capacity: 4,
    rating: 4.8,
    description: 'Компактная студия для записи подкастов с профессиональным оборудованием и звукоизоляцией.',
    images: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'soundproof', name: 'Звукоизоляция' },
      { id: 'acoustics', name: 'Акустическая обработка' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'coffee', name: 'Кофе-машина' }
    ],
    equipment: [
      { id: 'mics', name: 'Микрофоны Shure SM7B' },
      { id: 'interface', name: 'Аудиоинтерфейс Focusrite' },
      { id: 'headphones', name: 'Наушники Audio-Technica' },
      { id: 'mixer', name: 'Микшерный пульт Rodecaster Pro' }
    ],
    coordinates: [76.933732, 43.256484],
    type: 'podcast',
    activities: ['podcast']
  },
  5: {
    id: 5,
    title: 'Банкетный зал «Премьер»',
    location: 'Алматы, Алмалинский район, ул. Карасай батыра',
    price: 25000,
    capacity: 150,
    rating: 4.9,
    description: 'Роскошный банкетный зал для проведения свадеб, юбилеев и корпоративных мероприятий.',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'catering', name: 'Кейтеринг' },
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'lighting', name: 'Световое оборудование' },
      { id: 'parking', name: 'Парковка' },
      { id: 'kitchen', name: 'Кухня' }
    ],
    equipment: [
      { id: 'tables', name: 'Банкетные столы и стулья' },
      { id: 'sound_system', name: 'Звуковая система' },
      { id: 'light_system', name: 'Световое оборудование' },
      { id: 'dance_floor', name: 'Танцпол' }
    ],
    coordinates: [76.923732, 43.253484],
    type: 'banquet',
    activities: ['wedding', 'birthday', 'graduation', 'corporate']
  },
  6: {
    id: 6,
    title: 'Современный лофт',
    location: 'Алматы, Медеуский район',
    price: 15000,
    capacity: 50,
    rating: 4.9,
    description: 'Стильное лофт-пространство для проведения мероприятий любого формата.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'kitchen', name: 'Кухня' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'parking', name: 'Парковка' },
      { id: 'furniture', name: 'Мебель' }
    ],
    equipment: [
      { id: 'lighting', name: 'Световое оборудование' },
      { id: 'sound_system', name: 'Акустическая система' },
      { id: 'furniture', name: 'Модульная мебель' },
      { id: 'bar', name: 'Барная стойка' }
    ],
    coordinates: [76.945678, 43.242345],
    type: 'conference',
    activities: ['wedding', 'birthday', 'graduation', 'corporate', 'photoshoot', 'video',]
  },
  7: {
    id: 7,
    title: 'Творческая мастерская',
    location: 'Астана, Алматинский район',
    price: 10000,
    capacity: 30,
    rating: 4.6,
    description: 'Многофункциональное пространство для творческих мероприятий, мастер-классов и встреч.',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1497366754035-5f07c98bf336?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'tables', name: 'Рабочие столы' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'kitchen', name: 'Кухня' },
      { id: 'projector', name: 'Проектор' }
    ],
    equipment: [
      { id: 'boards', name: 'Маркерные доски' },
      { id: 'chairs', name: 'Удобные стулья' },
      { id: 'sound', name: 'Звуковое оборудование' }
    ],
    coordinates: [71.430359, 51.128207],
    type: 'conference',
    activities: ['wedding', 'birthday', 'graduation', 'corporate']
  },
  16: {
    id: 16,
    title: 'Фотостудия «Зазеркалье»',
    location: 'Астана, Алматинский район, мкр. Юго-Восток',
    price: 13000,
    capacity: 12,
    rating: 4.7,
    description: 'Стильная фотостудия с уникальными зеркальными инсталляциями и световыми решениями.',
    images: [
      'https://plus.unsplash.com/premium_photo-1696972235468-3bfa7fa8bd9e?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'mirrors', name: 'Зеркальные инсталляции' },
      { id: 'makeup', name: 'Гримерная комната' }
    ],
    equipment: [
      { id: 'camera', name: 'Камера Sony A7R IV' },
      { id: 'lights', name: 'Комплект студийного света' }
    ],
    coordinates: [71.440115, 51.138199],
    type: 'studio',
    activities: ['photoshoot', 'video']
  },

  17: {
    id: 17,
    title: 'Конференц-холл «Форум»',
    location: 'Петропавловск, Центральный район, ул. Абая',
    price: 40000,
    capacity: 180,
    rating: 4.8,
    description: 'Многофункциональный конференц-зал с современным оборудованием и модульной системой зонирования.',
    images: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'modular', name: 'Модульная система' },
      { id: 'catering', name: 'Кейтеринг' }
    ],
    equipment: [
      { id: 'conference', name: 'Конференц-система' },
      { id: 'screens', name: 'Плазменные экраны' }
    ],
    coordinates: [69.141768, 54.874482],
    type: 'conference',
    activities: ['conference', 'corporate', 'business']
  },

  18: {
    id: 18,
    title: 'Студия «Vinyl Records»',
    location: 'Алматы, Бостандыкский район, мкр. Коктем',
    price: 15000,
    capacity: 6,
    rating: 4.9,
    description: 'Атмосферная студия звукозаписи с винтажным оборудованием и современными технологиями.',
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'vinyl', name: 'Винтажное оборудование' },
      { id: 'lounge', name: 'Лаундж-зона' }
    ],
    equipment: [
      { id: 'mixer', name: 'Аналоговый микшер' },
      { id: 'mics', name: 'Винтажные микрофоны' }
    ],
    coordinates: [76.938732, 43.241484],
    type: 'recording',
    activities: ['recording', 'podcast']
  },

  19: {
    id: 19,
    title: 'Банкетный зал «Империал»',
    location: 'Астана, Есильский район, Дипломатический городок',
    price: 90000,
    capacity: 350,
    rating: 4.9,
    description: 'Роскошный банкетный зал в классическом стиле с панорамным видом на город.',
    images: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'vip', name: 'VIP-зона' },
      { id: 'parking', name: 'Подземный паркинг' }
    ],
    equipment: [
      { id: 'light', name: 'Световое оборудование' },
      { id: 'sound', name: 'Концертный звук' }
    ],
    coordinates: [71.416789, 51.123456],
    type: 'banquet',
    activities: ['wedding', 'corporate', 'graduation']
  },

  20: {
    id: 20,
    title: 'Мастерская «Креатив»',
    location: 'Алматы, Медеуский район, мкр. Коктобе',
    price: 9000,
    capacity: 25,
    rating: 4.6,
    description: 'Творческое пространство для проведения мастер-классов и арт-терапии.',
    images: [
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'materials', name: 'Художественные материалы' },
      { id: 'storage', name: 'Индивидуальные шкафчики' }
    ],
    equipment: [
      { id: 'easels', name: 'Мольберты' },
      { id: 'pottery', name: 'Гончарные круги' }
    ],
    coordinates: [76.958732, 43.271484],
    type: 'workshop',
    activities: ['workshop']
  },

  21: {
    id: 21,
    title: 'Подкаст-студия «ПетроПодкаст»',
    location: 'Петропавловск, Центральный район, ул. Театральная',
    price: 8000,
    capacity: 5,
    rating: 4.7,
    description: 'Современная студия для записи подкастов с профессиональной акустической обработкой.',
    images: [
      'https://plus.unsplash.com/premium_photo-1683140721527-262985d7c8ef?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'acoustic', name: 'Акустическая обработка' },
      { id: 'climate', name: 'Климат-контроль' }
    ],
    equipment: [
      { id: 'mics', name: 'Микрофоны Rode' },
      { id: 'interface', name: 'Аудиоинтерфейс UAD' }
    ],
    coordinates: [69.131768, 54.884482],
    type: 'podcast',
    activities: ['podcast', 'recording']
  },

  22: {
    id: 22,
    title: 'Видеостудия «Синема»',
    location: 'Астана, Алматинский район, ул. Кошкарбаева',
    price: 28000,
    capacity: 35,
    rating: 4.8,
    description: 'Профессиональная видеостудия с несколькими съемочными павильонами.',
    images: [
      'https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'pavilions', name: 'Съемочные павильоны' },
      { id: 'greenscreen', name: 'Зеленый фон' }
    ],
    equipment: [
      { id: 'cameras', name: 'Камеры Blackmagic' },
      { id: 'crane', name: 'Операторский кран' }
    ],
    coordinates: [71.440115, 51.138199],
    type: 'studio',
    activities: ['video']
  },

  23: {
    id: 23,
    title: 'Конференц-центр «Прогресс»',
    location: 'Алматы, Бостандыкский район, пр. Гагарина',
    price: 50000,
    capacity: 250,
    rating: 4.9,
    description: 'Инновационный конференц-центр с возможностью проведения гибридных мероприятий.',
    images: [
      'https://images.unsplash.com/photo-1531972111231-7482a960e109?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'streaming', name: 'Система стриминга' },
      { id: 'translation', name: 'Синхронный перевод' }
    ],
    equipment: [
      { id: 'video', name: 'Видеостена' },
      { id: 'network', name: 'Высокоскоростной интернет' }
    ],
    coordinates: [76.938732, 43.241484],
    type: 'conference',
    activities: ['conference', 'corporate', 'business']
  },

  24: {
    id: 24,
    title: 'Банкетный зал «Алтын»',
    location: 'Петропавловск, Центральный район, ул. Жумабаева',
    price: 60000,
    capacity: 250,
    rating: 4.8,
    description: 'Элегантный банкетный зал с национальным колоритом и современным оснащением.',
    images: [
      'https://plus.unsplash.com/premium_photo-1664304118366-216dbb7c76cf?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'kitchen', name: 'Профессиональная кухня' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'light', name: 'Световые эффекты' }
    ],
    coordinates: [69.141768, 54.874482],
    type: 'banquet',
    activities: ['wedding', 'birthday', 'graduation']
  },

  25: {
    id: 25,
    title: 'Арт-студия «Холст»',
    location: 'Алматы, Медеуский район, мкр. Самал',
    price: 11000,
    capacity: 15,
    rating: 4.7,
    description: 'Светлая студия для художников с профессиональным освещением и оборудованием.',
    images: [
      'https://images.unsplash.com/photo-1545033131-485ea67fd7c3?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'light', name: 'Профессиональный свет' },
      { id: 'ventilation', name: 'Вентиляция' }
    ],
    equipment: [
      { id: 'easels', name: 'Профессиональные мольберты' },
      { id: 'storage', name: 'Шкафы для материалов' }
    ],
    coordinates: [76.948732, 43.261484],
    type: 'studio',
    activities: ['workshop']
  },

  26: {
    id: 26,
    title: 'Коворкинг «Импульс»',
    location: 'Астана, Есильский район, ЖК Триумф',
    price: 25000,
    capacity: 60,
    rating: 4.8,
    description: 'Современное пространство для работы и нетворкинга с панорамным видом на город.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'meeting', name: 'Переговорные комнаты' },
      { id: 'coffee', name: 'Кофе-зона' }
    ],
    equipment: [
      { id: 'presentation', name: 'Презентационное оборудование' },
      { id: 'office', name: 'Офисная техника' }
    ],
    coordinates: [71.416789, 51.123456],
    type: 'coworking',
    activities: ['business', 'workshop']
  },

  27: {
    id: 27,
    title: 'Танцевальная студия «Фламенко»',
    location: 'Алматы, Бостандыкский район, мкр. Коктем',
    price: 12000,
    capacity: 30,
    rating: 4.6,
    description: 'Просторный зал для танцев с профессиональным покрытием и звуковым оборудованием.',
    images: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'floor', name: 'Танцевальное покрытие' },
      { id: 'sound', name: 'Звуковая система' }
    ],
    equipment: [
      { id: 'mirrors', name: 'Зеркальные стены' },
      { id: 'barre', name: 'Балетные станки' }
    ],
    coordinates: [76.938732, 43.241484],
    type: 'dance',
    activities: ['workshop']
  },

  28: {
    id: 28,
    title: 'Лофт «Высота»',
    location: 'Петропавловск, Промышленный район, ул. Строительная',
    price: 35000,
    capacity: 100,
    rating: 4.7,
    description: 'Современное лофт-пространство с панорамными окнами и индустриальным дизайном.',
    images: [
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'view', name: 'Панорамный вид' },
      { id: 'kitchen', name: 'Кухонная зона' }
    ],
    equipment: [
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'furniture', name: 'Дизайнерская мебель' }
    ],
    coordinates: [69.151768, 54.864482],
    type: 'loft',
    activities: ['corporate', 'photoshoot', 'workshop']
  },

  29: {
    id: 29,
    title: 'Галерея «Модерн»',
    location: 'Астана, Есильский район, Левый берег',
    price: 45000,
    capacity: 120,
    rating: 4.8,
    description: 'Современное выставочное пространство с профессиональным освещением и мультимедийным оборудованием.',
    images: [
      'https://images.unsplash.com/photo-1545033131-485ea67fd7c3?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'lighting', name: 'Галерейное освещение' },
      { id: 'multimedia', name: 'Мультимедиа' }
    ],
    equipment: [
      { id: 'projectors', name: 'Проекторы' },
      { id: 'screens', name: 'Экраны' }
    ],
    coordinates: [71.420115, 51.118199],
    type: 'gallery',
    activities: ['corporate', 'workshop']
  },

  30: {
    id: 30,
    title: 'Студия «Киберспорт»',
    location: 'Алматы, Бостандыкский район, ул. Тимирязева',
    price: 20000,
    capacity: 20,
    rating: 4.7,
    description: 'Специализированная студия для проведения киберспортивных мероприятий и стримов.',
    images: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80'
    ],
    amenities: [
      { id: 'gaming', name: 'Игровые станции' },
      { id: 'streaming', name: 'Стриминг-оборудование' }
    ],
    equipment: [
      { id: 'computers', name: 'Игровые компьютеры' },
      { id: 'network', name: 'Скоростной интернет' }
    ],
    coordinates: [76.938732, 43.241484],
    type: 'gaming',
    activities: ['corporate', 'workshop']
  }
};