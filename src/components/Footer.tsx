import React, { useState } from 'react';
import { FeedbackModal } from './FeedbackModal';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('');

  const handleLinkClick = (linkName: string) => {
    trackEvent(analyticsConfig.googleAnalytics.events.footerLinkClick, {
      linkName
    });
    setModalSource(linkName);
    setIsModalOpen(true);
  };

  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О нас</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleLinkClick('about_company')}
                    className="hover:text-gray-300"
                  >
                    О компании
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('how_it_works')}
                    className="hover:text-gray-300"
                  >
                    Как это работает
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('press')}
                    className="hover:text-gray-300"
                  >
                    Пресса
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Арендодателям</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleLinkClick('list_space')}
                    className="hover:text-gray-300"
                  >
                    Разместить помещение
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('insurance')}
                    className="hover:text-gray-300"
                  >
                    Страхование
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('rules')}
                    className="hover:text-gray-300"
                  >
                    Правила
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Поддержка</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleLinkClick('help_center')}
                    className="hover:text-gray-300"
                  >
                    Центр помощи
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('contact_us')}
                    className="hover:text-gray-300"
                  >
                    Связаться с нами
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('safety')}
                    className="hover:text-gray-300"
                  >
                    Безопасность
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Правовая информация</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleLinkClick('terms')}
                    className="hover:text-gray-300"
                  >
                    Условия использования
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('privacy')}
                    className="hover:text-gray-300"
                  >
                    Политика конфиденциальности
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLinkClick('cookies')}
                    className="hover:text-gray-300"
                  >
                    Политика cookies
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 AllRent. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <FeedbackModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source={modalSource}
      />
    </>
  );
}