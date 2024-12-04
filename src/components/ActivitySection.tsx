import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ACTIVITIES = [
  {
    id: 'workshop',
    title: 'Мастер-класс',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80'
  },
  {
    id: 'photoshoot',
    title: 'Фотосессия',
    image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'conference',
    title: 'Конференция',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
  },
  {
    id: 'business',
    title: 'Бизнес-встреча',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80'
  },
  {
    id: 'podcast',
    title: 'Подкаст',
    image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80'
  },
  {
    id: 'video',
    title: 'Видеосъемка',
    image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?auto=format&fit=crop&q=80'
  },
  {
    id: 'corporate',
    title: 'Корпоративное мероприятие',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80'
  },
  {
    id: 'recording',
    title: 'Звукозапись',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80'
  },
  {
    id: 'birthday',
    title: 'День рождения',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80'
  },
  {
    id: 'graduation',
    title: 'Выпускной',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80'
  },
  {
    id: 'wedding',
    title: 'Свадьба',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
  }
];

export function ActivitySection() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleActivityClick = (activityId: string) => {
    navigate(`/search?activity=${activityId}`);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Пространство для каждого момента
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Забронируйте уникальное помещение для вашего мероприятия
            </p>

            <div className="flex flex-wrap gap-2">
              {ACTIVITIES.map((activity) => (
                <button
                  key={activity.id}
                  className={`
                    px-4 py-2 text-sm rounded-full transition-all
                    ${selectedActivity === activity.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}
                  `}
                  onMouseEnter={() => setSelectedActivity(activity.id)}
                  onMouseLeave={() => setSelectedActivity(null)}
                  onClick={() => handleActivityClick(activity.id)}
                >
                  {activity.title}
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate('/search')}
              className="mt-8 inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              Посмотреть все активности
            </button>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className={`
                  absolute inset-0 transition-opacity duration-500
                  ${selectedActivity === activity.id ? 'opacity-100' : 'opacity-0'}
                  ${!selectedActivity && activity.id === ACTIVITIES[0].id ? 'opacity-100' : ''}
                `}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}