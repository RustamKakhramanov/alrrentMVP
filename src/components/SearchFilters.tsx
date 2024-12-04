import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

export function SearchFilters() {
  const handleFilterClick = (filterType: string) => {
    trackEvent(analyticsConfig.googleAnalytics.events.filterApply, {
      filterType
    });
  };

  return (
    <div className="sticky top-0 bg-white border-b z-10">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Результаты поиска</h1>
          <button 
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={() => handleFilterClick('all')}
          >
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Фильтры
          </button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button 
            className="px-4 py-2 rounded-full border hover:bg-gray-50 whitespace-nowrap flex items-center"
            onClick={() => handleFilterClick('price')}
          >
            Цена
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button 
            className="px-4 py-2 rounded-full border hover:bg-gray-50 whitespace-nowrap flex items-center"
            onClick={() => handleFilterClick('capacity')}
          >
            Вместимость
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button 
            className="px-4 py-2 rounded-full border hover:bg-gray-50 whitespace-nowrap flex items-center"
            onClick={() => handleFilterClick('type')}
          >
            Тип помещения
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          <button 
            className="px-4 py-2 rounded-full border hover:bg-gray-50 whitespace-nowrap flex items-center"
            onClick={() => handleFilterClick('rating')}
          >
            Рейтинг
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}