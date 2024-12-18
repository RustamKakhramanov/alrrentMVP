import React, { useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { HostApplicationModal } from './HostApplicationModal';

export function HostCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    trackEvent(analyticsConfig.googleAnalytics.events.hostSignup, {
      source: 'cta_section'
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative h-[600px] lg:h-900">
            <img
              src="/storage/images/photo-1610879247468-ba0c12f0d709.avif"
              alt="Успешный арендодатель с ключами"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Зарабатывайте вместе с AllRent
            </h2>

            <p className="text-xl mb-4">
              Начните зарабатывать на своем помещении.
            </p>

            <p className="text-lg text-gray-300 mb-8">
              Получайте дополнительный доход, открыв свои двери для проведения мероприятий и встреч в вашем пространстве.
            </p>

            <button
              onClick={handleClick}
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors w-fit"
            >
              Разместить помещение
            </button>
          </div>
        </div>
      </section>

      <HostApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}