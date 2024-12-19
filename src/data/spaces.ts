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
  }
];


export function getPopularSpaces(): Space[] {
  return SPACES
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);
}