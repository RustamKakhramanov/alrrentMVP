import React from 'react';

const CAPACITY_OPTIONS = [
  { label: '1-10 человек', value: [1, 10] },
  { label: '11-30 человек', value: [11, 30] },
  { label: '31-50 человек', value: [31, 50] },
  { label: '51-100 человек', value: [51, 100] },
  { label: 'Более 100 человек', value: [101, null] },
];

interface CapacityFilterProps {
  selectedCapacity: [number, number | null];
  onCapacityChange: (range: [number, number | null]) => void;
}

export function CapacityFilter({ selectedCapacity, onCapacityChange }: CapacityFilterProps) {
  return (
    <div className="p-4 border-b">
      <h3 className="font-medium mb-4">Вместимость</h3>
      <div className="space-y-2">
        {CAPACITY_OPTIONS.map((option) => (
          <label key={option.label} className="flex items-center">
            <input
              type="radio"
              checked={selectedCapacity[0] === option.value[0] && selectedCapacity[1] === option.value[1]}
              onChange={() => onCapacityChange(option.value)}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}