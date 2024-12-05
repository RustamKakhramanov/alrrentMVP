import React from 'react';
import { SearchResults } from '../SearchResults';
import { ActiveFilters } from '../SearchFilters/ActiveFilters';
import { Space } from '../../types/space';

interface SearchListProps {
  spaces: Space[];
  selectedSpace: number | null;
  onSpaceSelect: (id: number) => void;
  filters: {
    minPrice: number;
    maxPrice: number;
    selectedCapacity: [number, number | null];
    selectedAmenities: string[];
    selectedTypes: string[];
  };
  onRemoveFilter: (type: string, value?: string) => void;
  onOpenFilters: () => void;
}

export function SearchList({
  spaces,
  selectedSpace,
  onSpaceSelect,
  filters,
  onRemoveFilter,
  onOpenFilters
}: SearchListProps) {
  return (
    <div className="h-full overflow-auto">
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="p-4">
          <button
            onClick={onOpenFilters}
            className="w-full flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
          >
            <span>Фильтры</span>
          </button>
        </div>
        <ActiveFilters
          filters={filters}
          onRemoveFilter={onRemoveFilter}
        />
      </div>
      <SearchResults 
        spaces={spaces}
        selectedSpace={selectedSpace}
        onSpaceSelect={onSpaceSelect}
      />
    </div>
  );
}