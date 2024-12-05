import React from 'react';
import { SpaceCard } from './SpaceCard';
import { SPACES } from '../data/spaces';
import { filterSpaces } from '../utils/searchUtils';
import { useSpaceType } from '../hooks/useSpaceType';

interface PopularSpacesProps {
  spaceType: string | null;
}

export function PopularSpaces({ spaceType }: PopularSpacesProps) {
  const { content } = useSpaceType();
  const filteredSpaces = filterSpaces({ 
    minPrice: 0,
    maxPrice: 0,
    selectedCapacity: [0, null],
    selectedAmenities: [],
    selectedTypes: []
  }, spaceType);

  const popularSpaces = filteredSpaces
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 6);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-2">{content.title}</h2>
      <p className="text-gray-600 mb-8">{content.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularSpaces.map((space) => (
          <SpaceCard key={space.id} {...space} />
        ))}
      </div>
    </section>
  );
}