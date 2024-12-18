import { Space } from '../types/space';

export const SPACES: Array<Space> = [
  {
    id: 1,
    title: 'Студия фото Enjoy',
    location: 'Алматы, Алмалинский район, ул. Жибек Жолы',
    price: 12000,
    capacity: 15,
    rating: 4.8,
    description: 'Современная фотостудия с профессиональным оборудованием и различными фонами. Идеально подходит для фотосессий любого формата, от портретной до предметной съемки.',
    images: [
      '/storage/images/places/photo-1471341971476-ae15ff5dd4ea.avif',
      '/storage/images/places/photo-1603425013520-e0b30e6e37dc.avif',
      '/storage/images/places/photo-1550490210-3f232296cbe9.avif',
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
  {
    id: 2,
    title: 'Студия звукозаписи PRO',
    location: 'Алматы, Алмалинский район, ул. Байтурсынова',
    price: 8000,
    capacity: 8,
    rating: 4.7,
    description: 'Профессиональная студия звукозаписи с современным оборудованием. Идеально подходит для записи подкастов, вокала и музыкальных инструментов.',
    images: [
      '/storage/images/places/photo-1598488035139-bdbb2231ce04.avif',
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
  {
    id: 3,
    title: 'Конференц-зал «Премиум»',
    location: 'Алматы, Алмалинский район, ул. Сатпаева',
    price: 20000,
    capacity: 100,
    rating: 4.9,
    description: 'Просторный конференц-зал с современным оборудованием для проведения деловых мероприятий, конференций и презентаций.',
    images: [
      '/storage/images/places/photo-1505373877841-8d25f7d46678.avif',
      '/storage/images/places/photo-1517457373958-b7bdd4587205.avif',
      '/storage/images/places/photo-1497366811353-6870744d04b2.avif'
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
  {
    id: 4,
    title: 'Студия подкастов',
    location: 'Алматы, Алмалинский район, ул. Гоголя',
    price: 6000,
    capacity: 4,
    rating: 4.8,
    description: 'Компактная студия для записи подкастов с профессиональным оборудованием и звукоизоляцией.',
    images: [
      '/storage/images/places/photo-1604328698692-f76ea9498e76.avif',
      '/storage/images/places/photo-1598488035139-bdbb2231ce04.avif',
      '/storage/images/places/photo-1598488035139-bdbb2231ce04.avif',
      '/storage/images/places/photo-1598488035139-bdbb2231ce04.avif'
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
  {
    id: 5,
    title: 'Банкетный зал «Премьер»',
    location: 'Алматы, Алмалинский район, ул. Карасай батыра',
    price: 25000,
    capacity: 150,
    rating: 4.9,
    description: 'Роскошный банкетный зал для проведения свадеб, юбилеев и корпоративных мероприятий.',
    images: [
      '/storage/images/places/photo-1519225421980-715cb0215aed.avif',
      '/storage/images/places/photo-1511578314322-379afb476865.avif',
      '/storage/images/places/photo-1530103862676-de8c9debad1d.avif',
      '/storage/images/places/photo-1523050854058-8df90110c9f1.avif'
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
  {
    id: 6,
    title: 'Современный лофт',
    location: 'Алматы, Медеуский район',
    price: 15000,
    capacity: 50,
    rating: 4.9,
    description: 'Стильное лофт-пространство для проведения мероприятий любого формата.',
    images: [
      '/storage/images/places/photo-1497366216548-37526070297c.avif',
      '/storage/images/places/photo-1505373877841-8d25f7d46678.avif',
      '/storage/images/places/photo-1517457373958-b7bdd4587205.avif'
    ],
    amenities: [
      { id: 'sound', name: 'Звуковое оборудование' },
      { id: 'projector', name: 'Проектор' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'coffee', name: 'Кофе-машина' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'projector', name: 'Проектор и экран' },
      { id: 'mics', name: 'Беспроводные микрофоны' },
      { id: 'sound_system', name: 'Звуковая система' }
    ],
    coordinates: [76.930732, 43.244484],
    type: 'loft',
    activities: ['meeting', 'conference', 'event', 'workshop']
  }
];


export function getPopularSpaces(): Space[] {
  return SPACES
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}