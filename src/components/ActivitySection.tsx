import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ACTIVITIES = [
  {
    id: 'workshop',
    title: 'Мастер-класс',
    image: '/storage/images/photo-1552581234-26160f608093.avif'
  },
  {
    id: 'photoshoot',
    title: 'Фотосессия',
    image: '/storage/images/photo-1590650153855-d9e808231d41.avif'
  },
  {
    id: 'conference',
    title: 'Конференция',
    image: '/storage/images/photo-1505373877841-8d25f7d46678.avif'
  },
  {
    id: 'business',
    title: 'Бизнес-встреча',
    image: '/storage/images/photo-1517457373958-b7bdd4587205.avif'
  },
  {
    id: 'podcast',
    title: 'Подкаст',
    image: '/storage/images/photo-1604328698692-f76ea9498e76.avif'
  },
  {
    id: 'video',
    title: 'Видеосъемка',
    image: '/storage/images/photo-1579546929662-711aa81148cf.avif'
  },
  {
    id: 'corporate',
    title: 'Корпоративное мероприятие',
    image: '/storage/images/photo-1511578314322-379afb476865.avif'
  },
  {
    id: 'recording',
    title: 'Звукозапись',
    image: '/storage/images/photo-1598488035139-bdbb2231ce04.avif'
  },
  {
    id: 'birthday',
    title: 'День рождения',
    image: '/storage/images/photo-1530103862676-de8c9debad1d.avif'
  },
  {
    id: 'graduation',
    title: 'Выпускной',
    image: '/storage/images/photo-1523050854058-8df90110c9f1.avif'
  },
  {
    id: 'wedding',
    title: 'Свадьба',
    image: '/storage/images/photo-1519741497674-611481863552.avif'
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