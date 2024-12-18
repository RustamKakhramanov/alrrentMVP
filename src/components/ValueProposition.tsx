import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const SLIDES = [
  {
    image: '/storage/images/premium_photo-1677087122691-63f3287422c0.avif',
    alt: 'Люди в свободном пространстве'
  },
  {
    image: '/storage/images/photo-1561491431-71b89da6056a.avif',
    alt: 'Успешная бизнес-встреча'
  },
  {
    image: '/storage/images/premium_photo-1677087121940-8ec58a497a38.avif',
    alt: 'Заключение сделки'
  },


];

export function ValueProposition() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Почему мы?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы предлагаем простое и удобное решение — платформу, где вы найдете доступные помещения для мероприятий в пару кликов. Экономьте время, выбирайте из лучших вариантов и забудьте о сложностях организации!
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Мгновенное бронирование</h3>
                  <p className="text-gray-600">Бронируйте помещения онлайн без долгих согласований и ожидания ответа</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Актуальное расписание</h3>
                  <p className="text-gray-600">Всегда актуальная информация о свободных датах и времени</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Проверенные площадки</h3>
                  <p className="text-gray-600">Только надежные арендодатели с подтвержденными отзывами</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {SLIDES.map((slide, index) => (
                <div
                  key={index}
                  className={`
                    absolute inset-0 transition-all duration-1000 transform
                    ${index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-full'
                    }
                  `}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-600/20 rounded-2xl -z-10 backdrop-blur-xl" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-gray-900/20 rounded-2xl -z-10 backdrop-blur-xl" />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {SLIDES.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                    }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}