import React from 'react';
import { X } from 'lucide-react';

interface ActiveFiltersProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    selectedCapacity: [number, number | null];
    selectedAmenities: string[];
    selectedTypes: string[];
  };
  onRemoveFilter: (type: string, value?: string) => void;
}

export function ActiveFilters({ filters, onRemoveFilter }: ActiveFiltersProps) {
  const hasActiveFilters = filters.minPrice > 0 || filters.maxPrice > 0 || 
    filters.selectedAmenities.length > 0 || filters.selectedTypes.length > 0;

  if (!hasActiveFilters) return null;

  return (
    <div className="flex flex-wrap gap-2 p-4">
      {filters.minPrice > 0 && (
        <FilterTag
          label={`От ${filters.minPrice} ₸`}
          onRemove={() => onRemoveFilter('minPrice')}
        />
      )}
      {filters.maxPrice > 0 && (
        <FilterTag
          label={`До ${filters.maxPrice} ₸`}
          onRemove={() => onRemoveFilter('maxPrice')}
        />
      )}
      {filters.selectedAmenities.map((amenity) => (
        <FilterTag
          key={amenity}
          label={amenity}
          onRemove={() => onRemoveFilter('amenity', amenity)}
        />
      ))}
      {filters.selectedTypes.map((type) => (
        <FilterTag
          key={type}
          label={type}
          onRemove={() => onRemoveFilter('type', type)}
        />
      ))}
    </div>
  );
}

function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
      <span className="text-sm">{label}</span>
      <button
        onClick={onRemove}
        className="ml-2 p-0.5 hover:bg-gray-200 rounded-full"
      >
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}