import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

const ACTIVITIES = [

  {
    id: 'conference',
    title: 'Конференция',
    image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&q=80'
  },
  {
    id: 'photoshoot',
    title: 'Фотосессия',
    image: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80'
  },

  {
    id: 'workshop',
    title: 'Мастер-класс',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80'
  },
  {
    id: 'business',
    title: 'Бизнес-встреча',
    image: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?auto=format&fit=crop&q=80'
  },
  {
    id: 'podcast',
    title: 'Подкаст',
    image: 'https://images.unsplash.com/photo-1482442120256-9c03866de390?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'video',
    title: 'Видеосъемка',
    image: 'https://images.unsplash.com/photo-1540655037529-dec987208707?auto=format&fit=crop&q=80'
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
    image: 'https://images.unsplash.com/photo-1627556704302-624286467c65?auto=format&fit=crop&q=80'
  },
  {
    id: 'wedding',
    title: 'Свадьба',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
  }
];

export function SpaceForEveryMoment() {
  const [activeActivity, setActiveActivity] = useState(ACTIVITIES[0]);
  const navigate = useNavigate();

  const handleActivityClick = (activity: typeof ACTIVITIES[0]) => {
    trackEvent(analyticsConfig.googleAnalytics.events.activitySelect, {
      activityId: activity.id,
      activityName: activity.title
    });
    navigate(`/search?activity=${activity.id}`);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
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
                    px-4 py-2 rounded-full transition-all text-sm
                    ${activeActivity.id === activity.id
                      ? 'bg-black text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }
                  `}
                  onMouseEnter={() => setActiveActivity(activity)}
                  onClick={() => handleActivityClick(activity)}
                >
                  {activity.title}
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden block sm:hidden mt-5 mb-0">
              {ACTIVITIES.map((activity) => (
                <div
                  key={activity.id}
                  className={`
                  absolute inset-0 transition-opacity duration-500
                  ${activeActivity.id === activity.id ? 'opacity-100' : 'opacity-0'}
                  ${!activeActivity && activity.id === ACTIVITIES[0].id ? 'opacity-100' : ''}
                `}
                >
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate('/search')}
              className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
            >
              Посмотреть все активности
            </button>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden hidden sm:block">
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className={`
                  absolute inset-0 transition-opacity duration-500
                  ${activeActivity.id === activity.id ? 'opacity-100' : 'opacity-0'}
                  ${!activeActivity && activity.id === ACTIVITIES[0].id ? 'opacity-100' : ''}
                `}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}