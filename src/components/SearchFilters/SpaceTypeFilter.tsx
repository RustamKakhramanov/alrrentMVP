import React from 'react';

const SPACE_TYPES = [
  { id: 'studio', label: 'Фотостудия' },
  { id: 'meeting', label: 'Переговорная' },
  { id: 'event', label: 'Ивент-пространство' },
  { id: 'workshop', label: 'Мастерская' },
  { id: 'office', label: 'Офисное помещение' },
  { id: 'outdoor', label: 'Открытая площадка' },
];

interface SpaceTypeFilterProps {
  selectedTypes: string[];
  onTypeToggle: (typeId: string) => void;
}

export function SpaceTypeFilter({ selectedTypes, onTypeToggle }: SpaceTypeFilterProps) {
  return (
    <div className="p-4 border-b">
      <h3 className="font-medium mb-4">Тип помещения</h3>
      <div className="space-y-2">
        {SPACE_TYPES.map((type) => (
          <label key={type.id} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.id)}
              onChange={() => onTypeToggle(type.id)}
              className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2">{type.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}