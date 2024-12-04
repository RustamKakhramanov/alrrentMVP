import React from 'react';
import { SpaceCard } from './SpaceCard';
import { SPACES } from '../data/spaces';

export function PopularSpaces() {
  const popularSpaces = Object.values(SPACES).slice(0, 6);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Популярные площадки</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularSpaces.map((space) => (
          <SpaceCard key={space.id} {...space} />
        ))}
      </div>
    </section>
  );
}