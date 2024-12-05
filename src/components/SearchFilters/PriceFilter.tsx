import React from 'react';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

export function PriceFilter({ minPrice, maxPrice, onPriceChange }: PriceFilterProps) {
  return (
    <div className="p-4 border-b">
      <h3 className="font-medium mb-4">Ценовой диапазон (в час)</h3>
      <div className="flex gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">От</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => onPriceChange(Number(e.target.value), maxPrice)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Мин."
            min={0}
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">До</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => onPriceChange(minPrice, Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Макс."
            min={0}
          />
        </div>
      </div>
    </div>
  );
}