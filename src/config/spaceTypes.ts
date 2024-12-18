export interface SpaceType {
    id: string;
    label: string;
    description: string;
    icon: string; // Lucide icon name
    activities: string[];
}

export const SPACE_TYPES: SpaceType[] = [
    {
        id: 'studio',
        label: 'Фотостудия',
        description: 'Профессиональные пространства для фото и видеосъемки',
        icon: 'Camera',
        activities: ['photoshoot', 'video', 'content']
    },
    {
        id: 'podcast',
        label: 'Подкаст-студия',
        description: 'Студии для записи подкастов и аудиоконтента',
        icon: 'Mic2',
        activities: ['podcast', 'recording', 'voiceover']
    },
    {
        id: 'conference',
        label: 'Конференц-зал',
        description: 'Помещения для деловых мероприятий и встреч',
        icon: 'Users',
        activities: ['conference', 'business', 'presentation', 'training', 'seminar']
    },
    {
        id: 'event',
        label: 'Ивент-пространство',
        description: 'Универсальные площадки для мероприятий',
        icon: 'PartyPopper',
        activities: ['corporate', 'birthday', 'wedding', 'graduation', 'exhibition']
    },
    {
        id: 'workshop',
        label: 'Мастерская',
        description: 'Пространства для творческих занятий и мастер-классов',
        icon: 'Palette',
        activities: ['workshop', 'masterclass', 'art', 'craft']
    },
    {
        id: 'dance',
        label: 'Танцевальный зал',
        description: 'Залы для танцев и физической активности',
        icon: 'Music',
        activities: ['dance', 'yoga', 'fitness', 'rehearsal']
    },
    {
        id: 'music',
        label: 'Музыкальная студия',
        description: 'Профессиональные студии для музыкантов',
        icon: 'Music4',
        activities: ['recording', 'rehearsal', 'production']
    },
    {
        id: 'coworking',
        label: 'Коворкинг',
        description: 'Рабочие пространства для команд и фрилансеров',
        icon: 'Briefcase',
        activities: ['work', 'meeting', 'presentation']
    }
];