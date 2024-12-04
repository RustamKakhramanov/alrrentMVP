import React from 'react';
import { SpaceCard } from './SpaceCard';
import { Space } from '../types/space';

interface SearchResultsProps {
  spaces: Space[];
  selectedSpace: number | null;
  onSpaceSelect: (id: number) => void;
}

export function SearchResults({ spaces, selectedSpace, onSpaceSelect }: SearchResultsProps) {
  if (spaces.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">По вашему запросу ничего не найдено</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4">
        {spaces.map((space) => (
          <div
            key={space.id}
            className={`
              cursor-pointer transition-all
              ${selectedSpace === space.id ? 'scale-[0.98]' : ''}
            `}
            onClick={() => onSpaceSelect(space.id)}
          >
            <SpaceCard {...space} />
          </div>
        ))}
      </div>
    </div>
  );
}