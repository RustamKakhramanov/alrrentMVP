export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  spaceTypes: string[];
  requirements?: string[];
}

export const ACTIVITIES: Activity[] = [
  // Фото и видео
  {
    id: 'photoshoot',
    title: 'Фотосессия',
    description: 'Профессиональная фотосъемка',
    icon: 'Camera',
    spaceTypes: ['studio'],
    requirements: ['lighting', 'backdrop']
  },
  {
    id: 'video',
    title: 'Видеосъемка',
    description: 'Создание видеоконтента',
    icon: 'Video',
    spaceTypes: ['studio'],
    requirements: ['lighting', 'sound']
  },
  {
    id: 'content',
    title: 'Контент-съемка',
    description: 'Создание контента для соцсетей',
    icon: 'Instagram',
    spaceTypes: ['studio'],
    requirements: ['lighting']
  },

  // Аудио
  {
    id: 'podcast',
    title: 'Подкаст',
    description: 'Запись подкастов',
    icon: 'Mic2',
    spaceTypes: ['podcast', 'music'],
    requirements: ['sound']
  },
  {
    id: 'recording',
    title: 'Звукозапись',
    description: 'Профессиональная аудиозапись',
    icon: 'Music4',
    spaceTypes: ['music', 'podcast'],
    requirements: ['sound']
  },
  {
    id: 'voiceover',
    title: 'Озвучка',
    description: 'Запись голоса',
    icon: 'Mic',
    spaceTypes: ['podcast', 'music'],
    requirements: ['sound']
  },

  // Деловые мероприятия
  {
    id: 'conference',
    title: 'Конференция',
    description: 'Проведение конференций',
    icon: 'Users',
    spaceTypes: ['conference', 'event'],
    requirements: ['projector', 'sound']
  },
  {
    id: 'business',
    title: 'Бизнес-встреча',
    description: 'Деловые переговоры',
    icon: 'Briefcase',
    spaceTypes: ['conference', 'coworking'],
    requirements: ['wifi']
  },
  {
    id: 'presentation',
    title: 'Презентация',
    description: 'Проведение презентаций',
    icon: 'PresentationScreen',
    spaceTypes: ['conference', 'event'],
    requirements: ['projector']
  },
  {
    id: 'training',
    title: 'Тренинг',
    description: 'Обучающие мероприятия',
    icon: 'GraduationCap',
    spaceTypes: ['conference', 'event'],
    requirements: ['projector', 'sound']
  },

  // Мероприятия
  {
    id: 'corporate',
    title: 'Корпоратив',
    description: 'Корпоративные мероприятия',
    icon: 'PartyPopper',
    spaceTypes: ['event'],
    requirements: ['sound', 'catering']
  },
  {
    id: 'birthday',
    title: 'День рождения',
    description: 'Празднование дня рождения',
    icon: 'Cake',
    spaceTypes: ['event'],
    requirements: ['sound', 'catering']
  },
  {
    id: 'wedding',
    title: 'Свадьба',
    description: 'Свадебное торжество',
    icon: 'Heart',
    spaceTypes: ['event'],
    requirements: ['sound', 'catering']
  },

  // Творчество и обучение
  {
    id: 'workshop',
    title: 'Мастер-класс',
    description: 'Практические занятия',
    icon: 'Palette',
    spaceTypes: ['workshop', 'event'],
    requirements: ['tables']
  },
  {
    id: 'art',
    title: 'Арт-класс',
    description: 'Художественные занятия',
    icon: 'Brush',
    spaceTypes: ['workshop'],
    requirements: ['tables', 'lighting']
  },
  {
    id: 'dance',
    title: 'Танцы',
    description: 'Танцевальные занятия',
    icon: 'Music',
    spaceTypes: ['dance'],
    requirements: ['sound', 'mirrors']
  },
  {
    id: 'yoga',
    title: 'Йога',
    description: 'Занятия йогой',
    icon: 'Yoga',
    spaceTypes: ['dance'],
    requirements: ['mats']
  }
];