import React, { useState, useEffect } from 'react';

const SLIDES = [
  {
    url: '/storage/images/photo-1505373877841-8d25f7d46678.avif',
    alt: 'Мастер-класс'
  },
  {
    url: '/storage/images/photo-1517457373958-b7bdd4587205.avif',
    alt: 'Творческое пространство'
  },
  {
    url: '/storage/images/photo-1517457373958-b7bdd4587205.avif',
    alt: 'Фотостудия'
  },
  {
    url: '/storage/images/photo-1519167758481-83f550bb49b3.avif',
    alt: 'Лекционный зал'
  },


];

export function BackgroundSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0 bg-cover bg-center transition-opacity duration-1000
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            backgroundImage: `url(${slide.url})`,
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}