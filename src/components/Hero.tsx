import React from 'react';
import { SearchBar } from './SearchBar';
import { BackgroundSlideshow } from './BackgroundSlideshow';
import { useSpaceType } from '../hooks/useSpaceType';

export function Hero() {
  const { content } = useSpaceType();

  return (
    <div className="relative min-h-[600px] md:h-[600px] flex items-center justify-center">
      <BackgroundSlideshow />
      
      <div className="relative z-10 text-center px-4 pt-20 md:pt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {content.heroTitle.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index > 0 && <br />}
              {line}
            </React.Fragment>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {content.heroDescription}
        </p>
        <SearchBar />
      </div>
    </div>
  );
}