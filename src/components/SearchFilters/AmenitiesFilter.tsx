import React from 'react';

const AMENITIES = [
  { id: 'wifi', label: 'Wi-Fi' },
  { id: 'parking', label: 'Парковка' },
  { id: 'kitchen', label: 'Кухня' },
  { id: 'sound', label: 'Звуковое оборудование' },
  { id: 'projector', label: 'Проектор' },
  { id: 'lighting', label: 'Профессиональный свет' },
  { id: 'furniture', label: 'Мебель' },
  { id: 'bathroom', label: 'Отдельный санузел' },
];

interface AmenitiesFilterProps {
  selectedAmenities: string[];
  onAmenityToggle: (amenityId: string) => void;
}

export function AmenitiesFilter({ selectedAmenities, onAmenityToggle }: AmenitiesFilterProps) {
  return (
    <div className="p-4 border-b">
      <h3 className="font-medium mb-4">Удобства</h3>
      <div className="grid grid-cols-2 gap-2">
        {AMENITIES.map((amenity) => (
          <label key={amenity.id} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedAmenities.includes(amenity.id)}
              onChange={() => onAmenityToggle(amenity.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm">{amenity.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}