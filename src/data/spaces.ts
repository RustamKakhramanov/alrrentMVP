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
      'https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80'
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
    coordinates: [76.928732, 43.251484] // Алмалинский район, Жибек Жолы
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
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80'
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
    coordinates: [76.938732, 43.241484] // Алмалинский район, Байтурсынова
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
      'https://images.unsplash.com/photo-1497366754035-5f07c98bf336?auto=format&fit=crop&q=80',
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
    coordinates: [76.918732, 43.261484] // Алмалинский район, Сатпаева
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
    coordinates: [76.933732, 43.256484] // Алмалинский район, Гоголя
  },
  5: {
    id: 5,
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
    coordinates: [71.430359, 51.128207]
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
    coordinates: [76.945678, 43.242345]
  }
};