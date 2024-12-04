import React from 'react';
import { SearchBar } from './SearchBar';
import { BackgroundSlideshow } from './BackgroundSlideshow';

export function Hero() {
  return (
    <div className="relative min-h-[600px] md:h-[600px] flex items-center justify-center pt-10 md:pt-0">
      <BackgroundSlideshow />

      <div className="relative z-10 text-center px-4 pt-20 pb-20 md:pt-0 md:pb-0 bg-black/50 md:bg-transparent">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Найдите идеальное место
          <span className="hidden md:inline"><br />для вашего мероприятия</span>
          <span className="inline md:hidden"> для вашего мероприятия</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Находите и бронируйте уникальные помещения для мероприятий, фотосессий, записи подкастов и многого другого
        </p>
        <SearchBar />
      </div>
    </div>
  );
}