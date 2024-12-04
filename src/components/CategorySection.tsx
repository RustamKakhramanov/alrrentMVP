import React from 'react';
import { Mic2, Camera, Users, Briefcase, Music, Palette } from 'lucide-react';

const CATEGORIES = [
  {
    icon: <Mic2 className="w-8 h-8" />,
    title: 'Запись подкастов',
    description: 'Профессиональные студии для записи подкастов'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Фотосессии',
    description: 'Креативные пространства для фотосъемок'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Мероприятия',
    description: 'Площадки для проведения мероприятий'
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: 'Деловые встречи',
    description: 'Конференц-залы и переговорные'
  },
  {
    icon: <Music className="w-8 h-8" />,
    title: 'Музыка',
    description: 'Студии звукозаписи и репетиционные базы'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Творчество',
    description: 'Мастерские и арт-пространства'
  }
];

export function CategorySection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Найдите идеальное пространство для любых целей</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="mb-4 text-blue-600">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}