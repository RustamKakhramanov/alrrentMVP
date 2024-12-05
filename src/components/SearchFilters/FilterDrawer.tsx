import React from 'react';
import { X } from 'lucide-react';
import { PriceFilter } from './PriceFilter';
import { CapacityFilter } from './CapacityFilter';
import { AmenitiesFilter } from './AmenitiesFilter';
import { SpaceTypeFilter } from './SpaceTypeFilter';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    minPrice: number;
    maxPrice: number;
    selectedCapacity: [number, number | null];
    selectedAmenities: string[];
    selectedTypes: string[];
  };
  onPriceChange: (min: number, max: number) => void;
  onCapacityChange: (range: [number, number | null]) => void;
  onAmenityToggle: (amenityId: string) => void;
  onTypeToggle: (typeId: string) => void;
  onApplyFilters: () => void;
}

export function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onPriceChange,
  onCapacityChange,
  onAmenityToggle,
  onTypeToggle,
  onApplyFilters,
}: FilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md ml-auto bg-white h-full overflow-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Фильтры</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="divide-y">
          <PriceFilter
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onPriceChange={onPriceChange}
          />
          <CapacityFilter
            selectedCapacity={filters.selectedCapacity}
            onCapacityChange={onCapacityChange}
          />
          <AmenitiesFilter
            selectedAmenities={filters.selectedAmenities}
            onAmenityToggle={onAmenityToggle}
          />
          <SpaceTypeFilter
            selectedTypes={filters.selectedTypes}
            onTypeToggle={onTypeToggle}
          />
        </div>

        <div className="sticky bottom-0 bg-white border-t p-4">
          <button
            onClick={() => {
              onApplyFilters();
              onClose();
            }}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Применить фильтры
          </button>
        </div>
      </div>
    </div>
  );
}