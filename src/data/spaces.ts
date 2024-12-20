import { AvailabilitySchedule } from '../types/availability';
import { Space } from '../types/space';

const defaultAvailability: AvailabilitySchedule = {
  regularHours: {
    monday: { isOpen: true, slots: [{ start: '09:00', end: '22:00' }] },
    tuesday: { isOpen: true, slots: [{ start: '09:00', end: '22:00' }] },
    wednesday: { isOpen: true, slots: [{ start: '09:00', end: '22:00' }] },
    thursday: { isOpen: true, slots: [{ start: '09:00', end: '22:00' }] },
    friday: { isOpen: true, slots: [{ start: '09:00', end: '22:00' }] },
    saturday: { isOpen: true, slots: [{ start: '10:00', end: '22:00' }] },
    sunday: { isOpen: true, slots: [{ start: '10:00', end: '22:00' }] }
  },
  breakBetweenBookings: 15,// Minutes required between bookings
  specialDates: [],
  bookings: [],
  minBookingDuration: 60,   // Minimum booking duration in minutes
  maxBookingDuration: 480,   // Maximum booking duration in minutes
};

export const SPACES: Array<Space> = [
  {
    id: 1,
    title: 'Студия фотографии с 7 фотозонами',
    name: 'Enjoy Studio',
    location: 'Алматы, Алмалинский район, ул. Жибек Жолы',
    contacts: [
      { id: 'phone', value: '+77713598901' },
      { id: 'email', value: 'info@enjoystudio.kz' }
    ],
    defaultPrice: 12000,
    capacity: 15,
    rating: 4.8,
    description: 'Современная фотостудия с профессиональным оборудованием и различными фонами. Идеально подходит для фотосессий любого формата, от портретной до предметной съемки.',
    images: [
      '/storage/images/places/photo-1471341971476-ae15ff5dd4ea.avif',
      '/storage/images/places/photo-1603425013520-e0b30e6e37dc.avif',
      '/storage/images/places/photo-1550490210-3f232296cbe9.avif',
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа и более',
        duration: 2,
        price: 10000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package5',
        name: 'Пакет 5 часов',
        duration: 5,
        price: 40000,
        description: 'Экономия 20000 тенге',
      }
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
      { id: 'camera', name: 'Камера Canon EOS R5', included: false, price: 0 },
      { id: 'lights', name: 'Комплект студийного света Profoto', included: true },
      { id: 'backdrop_system', name: 'Система установки фонов', included: true },
      { id: 'softboxes', name: 'Софтбоксы разных размеров', included: true },
      { id: 'reflectors', name: 'Отражатели', included: true },
      { id: 'monitor', name: 'Монитор для просмотра', included: true }
    ],
    availability: defaultAvailability,
    coordinates: [76.928732, 43.251484],
    type: 'studio',
    activities: ['photoshoot', 'video'],
  },
  {
    id: 2,
    title: 'Студия для видеосъемок, подкастов и онлайн-трансляций',
    name: 'Studio 502',
    location: 'Алматы, Бостандыкский район, ул. Темирязево 42',
    contacts: [
      { id: 'phone', value: '+77074957606' },
    ],
    defaultPrice: 12000,
    capacity: 10,
    rating: 4.7,
    description: 'Студия предоставляет все необходимое для видеосъемки, подкастов и онлайн-трансляций, включая аренду с профессиональным светом, микрофонами, камерами, хромакеем и услугами операторов.',
    images: [
      '/storage/images/places/photo-502studio1.webp',
      '/storage/images/places/photo-502studio2.webp',
      '/storage/images/places/photo-502studio3.webp', 
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа и более',
        duration: 2,
        price: 10000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package5',
        name: 'Пакет 5 часов',
        duration: 5,
        price: 40000,
        description: 'Экономия 20000 тенге',
      }
    ],
    amenities: [
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'lights', name: 'Студийный моноблок Amaran 200x 1шт', included: true },
      { id: 'lights', name: 'Светодиодный осветитель Amaran 300c 1шт', included: true },
      { id: 'lights', name: 'Осветитель светодиодный Godox RGB Tube Light 1шт', included: true },
      { id: 'tripod', name: 'Штатив по запросу', included: true },
      { id: 'microphones', name: 'Петлички Hollyland L LARK M1', included: false, price: 2000 },
      { id: 'microphones', name: 'Петлички Hollyland LARK150', included: false, price: 2500 },
      { id: 'microphones', name: 'Микрофон ZOOM', included: false, price: 3000 },
      { id: 'teleprompter', name: 'Телесуфлер Feelword', included: false, price: 3000 },
      { id: 'table', name: 'Стол для предметной съемки 3D поворотный', included: false, price: 1500 },
      { id: 'softbox', name: 'Разные Софтбоксы', included: true },
      { id: 'switcher', name: 'Видеомикшер Аtem mini Blackmagicdesign', included: false, price: 3500 },
      { id: 'monitor', name: 'Плейбек Lilliput A7', included: false, price: 2500 },

    ],
    availability: defaultAvailability,
    coordinates: [43.21753958979015, 76.90525784036454],
    type: 'podcast',
    activities: ['podcast', 'video', 'recording'],
  },
  {
    id: 3,
    title: '​Студия подкастов и звукозаписи',
    name: 'Astana Podcast Studio',
    location: 'Астана, Сарайшык район, ул. Жумекен Нажимединова 29/2',
    contacts: [
      { id: 'phone', value: '+77073290737' },
      { id: 'email', value: 'astanapodcast@gmail.com' }
    ],
    defaultPrice: 12000,
    capacity: 10,
    rating: 5.0,
    description: 'Студия предоставляет все необходимое для подкастов включая аренду профессионального света, микрофонов, камеры',
    images: [
      '/storage/images/places/photo-502studio1.webp',
      '/storage/images/places/photo-502studio2.webp',
      '/storage/images/places/photo-502studio3.webp', 
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа',
        duration: 2,
        price: 20000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package3',
        name: 'Пакет 3 часов',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      }
    ],
    amenities: [
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'camera', name: 'Sony fx30', included: true },
      { id: 'camera', name: 'Sony А71V', included: true },
      { id: 'camera', name: 'Sony a6400', included: true },
      { id: 'tripod', name: 'Аренда штатива для телефона', included: false, price: 2500 },
      { id: 'camera', name: 'Дополнительная камера ', included: false, price: 5000 },
      { id: 'microphones', name: 'Дополнительные микрофоны и наушники', included: false, price: 2500 },
      { id: 'microphones', name: 'Петлички Hollyland LARK150', included: false, price: 2500 },
      { id: 'microphones', name: 'Микрофон ZOOM', included: false, price: 3000 },
      { id: 'teleprompter', name: 'Телесуфлер', included: false, price: 5000 },
      { id: 'table', name: 'Стол для предметной съемки 3D поворотный', included: false, price: 1500 },
      { id: 'softbox', name: 'Разные Софтбоксы', included: true },
      { id: 'switcher', name: 'Видеомикшер Аtem mini Blackmagicdesign', included: false, price: 3500 },
      { id: 'monitor', name: 'Плейбек Lilliput A7', included: false, price: 2500 },

    ],
    availability: defaultAvailability,
    coordinates: [43.21753958979015, 76.90525784036454],
    type: 'podcast',
    activities: ['podcast', 'video', 'recording'],
  },
  {
    id: 4,
    title: '​Студия подкастов',
    name: 'DD Podcast Studio ',
    location: 'Астана, Нура район, ул. Кабанбай батыра 13 ',
    contacts: [
      { id: 'phone', value: '+77767326020' },
      { id: 'email', value: '' }
    ],
    defaultPrice: 12000,
    capacity: 6,
    rating: 4.8,
    description: 'Студия предоставляет все необходимое для подкастов включая аренду профессионального света, микрофонов, камеры',
    images: [
      '/storage/images/places/photo-502studio1.webp',
      '/storage/images/places/photo-502studio2.webp',
      '/storage/images/places/photo-502studio3.webp', 
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа',
        duration: 2,
        price: 20000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package3',
        name: 'Пакет 3 часов',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 1.5,
        price: 27000,
        description: 'Пакет "Базовый" включает аренду студии на 1.5 часа, съемку до 1 часа, услуги оператора и монтажера, цветокоррекцию, звуковую обработку и настройку оборудования.',
      },
      {
        id: 'podcastPack2',
        name: 'Подкаст "Pro"',
        duration: 2,
        price: 27000,
        description: 'Этот тариф включает полный комплекс для создания профессионального подкаста: аренда студии на 2 часа, видеосъемка до 1.5 часа, услуги оператора и монтажера, цветокоррекция и звуковая обработка, настройка оборудования. В комплекте – обложка для подкаста, 3 коротких Reels и тизер для продвижения.',
      },
      {
        id: 'podcastPack3',
        name: 'Подкаст "DD  "',
        duration: 2.5,
        price: 27000,
        description: 'Пакет "DD" включает аренду студии на 2.5 часа, съемку до 2 часов, услуги оператора и монтажера, цветокоррекцию, звуковую обработку, настройку оборудования, обложку и интро для подкаста, 5 Reels и бэкстейдж-съемку.',
      },
      
    ],
    amenities: [
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'camera', name: 'Sony ZV E 10', included: true },
      { id: 'microphones', name: 'Rode Podmic 2шт', included: false, price: 2000 },
      { id: 'recorder', name: 'Zoom Podtrack P8', included: false, price: 2500 },
      { id: 'softbox', name: 'Godox SL60', included: true },

    ],
    availability: defaultAvailability,
    coordinates: [43.21753958979015, 76.90525784036454],
    type: 'podcast',
    activities: ['podcast', 'video', 'recording'],
  },
  {
    id: 4,
    title: '​Студия подкастов',
    name: 'DD Podcast Studio ',
    location: 'Астана, Нура район, ул. Кабанбай батыра 13 ',
    contacts: [
      { id: 'phone', value: '+77767326020' },
      { id: 'email', value: '' }
    ],
    defaultPrice: 12000,
    capacity: 6,
    rating: 4.8,
    description: 'Студия предоставляет все необходимое для подкастов включая аренду профессионального света, микрофонов, камеры',
    images: [
      '/storage/images/places/photo-502studio1.webp',
      '/storage/images/places/photo-502studio2.webp',
      '/storage/images/places/photo-502studio3.webp', 
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа',
        duration: 2,
        price: 20000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package3',
        name: 'Пакет 3 часов',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 1.5,
        price: 27000,
        description: 'Пакет "Базовый" включает аренду студии на 1.5 часа, съемку до 1 часа, услуги оператора и монтажера, цветокоррекцию, звуковую обработку и настройку оборудования.',
      },
      {
        id: 'podcastPack2',
        name: 'Подкаст "Pro"',
        duration: 2,
        price: 27000,
        description: 'Этот тариф включает полный комплекс для создания профессионального подкаста: аренда студии на 2 часа, видеосъемка до 1.5 часа, услуги оператора и монтажера, цветокоррекция и звуковая обработка, настройка оборудования. В комплекте – обложка для подкаста, 3 коротких Reels и тизер для продвижения.',
      },
      {
        id: 'podcastPack3',
        name: 'Подкаст "DD  "',
        duration: 2.5,
        price: 27000,
        description: 'Пакет "DD" включает аренду студии на 2.5 часа, съемку до 2 часов, услуги оператора и монтажера, цветокоррекцию, звуковую обработку, настройку оборудования, обложку и интро для подкаста, 5 Reels и бэкстейдж-съемку.',
      },
      
    ],
    amenities: [
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'camera', name: 'Sony ZV E 10', included: true },
      { id: 'microphones', name: 'Rode Podmic 2шт', included: false, price: 2000 },
      { id: 'recorder', name: 'Zoom Podtrack P8', included: false, price: 2500 },
      { id: 'softbox', name: 'Godox SL60', included: true },

    ],
    availability: defaultAvailability,
    coordinates: [43.21753958979015, 76.90525784036454],
    type: 'podcast',
    activities: ['podcast', 'video', 'recording'],
  },
  {
    id: 5,
    title: '​Студия подкастов',
    name: 'DD Podcast Studio ',
    location: 'Астана, Нура район, ул. Кабанбай батыра 13 ',
    contacts: [
      { id: 'phone', value: '+77767326020' },
      { id: 'email', value: '' }
    ],
    defaultPrice: 12000,
    capacity: 6,
    rating: 4.8,
    description: 'Студия предоставляет все необходимое для подкастов включая аренду профессионального света, микрофонов, камеры',
    images: [
      '/storage/images/places/photo-502studio1.webp',
      '/storage/images/places/photo-502studio2.webp',
      '/storage/images/premium_photo-1677087122691-63f3287422c0.avif', 
    ],
    prices: [
      {
        id: 'standard',
        name: 'Стандартный',
        duration: 1,
        price: 12000,
        description: 'Почасовая аренда'
      },
      {
        id: 'extended',
        name: '2 часа',
        duration: 2,
        price: 20000,
        description: 'Выгодный тариф для длительной аренды'
      },
      {
        id: 'package3',
        name: 'Пакет 3 часов',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 3,
        price: 27000,
        description: 'Экономия 9000 тенге',
      },
      {
        id: 'podcastPack1',
        name: 'Подкаст "Базовый"',
        duration: 1.5,
        price: 27000,
        description: 'Пакет "Базовый" включает аренду студии на 1.5 часа, съемку до 1 часа, услуги оператора и монтажера, цветокоррекцию, звуковую обработку и настройку оборудования.',
      },
      {
        id: 'podcastPack2',
        name: 'Подкаст "Pro"',
        duration: 2,
        price: 27000,
        description: 'Этот тариф включает полный комплекс для создания профессионального подкаста: аренда студии на 2 часа, видеосъемка до 1.5 часа, услуги оператора и монтажера, цветокоррекция и звуковая обработка, настройка оборудования. В комплекте – обложка для подкаста, 3 коротких Reels и тизер для продвижения.',
      },
      {
        id: 'podcastPack3',
        name: 'Подкаст "DD  "',
        duration: 2.5,
        price: 27000,
        description: 'Пакет "DD" включает аренду студии на 2.5 часа, съемку до 2 часов, услуги оператора и монтажера, цветокоррекцию, звуковую обработку, настройку оборудования, обложку и интро для подкаста, 5 Reels и бэкстейдж-съемку.',
      },
      
    ],
    amenities: [
      { id: 'lighting', name: 'Студийный свет' },
      { id: 'backdrop', name: 'Фоны' },
      { id: 'wifi', name: 'Wi-Fi' },
      { id: 'parking', name: 'Парковка' }
    ],
    equipment: [
      { id: 'camera', name: 'Sony ZV E 10', included: true },
      { id: 'microphones', name: 'Rode Podmic 2шт', included: false, price: 2000 },
      { id: 'recorder', name: 'Zoom Podtrack P8', included: false, price: 2500 },
      { id: 'softbox', name: 'Godox SL60', included: true },

    ],
    availability: defaultAvailability,
    coordinates: [43.21753958979015, 76.90525784036454],
    type: 'podcast',
    activities: ['podcast', 'video', 'recording'],
  },
];


export function getPopularSpaces(): Space[] {
  return SPACES
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}