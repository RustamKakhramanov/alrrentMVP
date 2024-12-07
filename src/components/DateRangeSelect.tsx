import React, { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { DatePicker } from './DatePicker';

interface DateRangeSelectProps {
  startDate: Date | null;
  endDate: Date | null;
  onStartDateSelect: (date: Date) => void;
  onEndDateSelect: (date: Date) => void;
}

export function DateRangeSelect({
  startDate,
  endDate,
  onStartDateSelect,
  onEndDateSelect
}: DateRangeSelectProps) {
  const [isStartPickerOpen, setIsStartPickerOpen] = useState(false);
  const [isEndPickerOpen, setIsEndPickerOpen] = useState(false);
  const [showEndDate, setShowEndDate] = useState(false);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return format(date, 'd MMMM yyyy', { locale: ru });
  };

  const handleStartDateSelect = (date: Date) => {
    onStartDateSelect(date);
    setIsStartPickerOpen(false);
    
    if (!showEndDate) {
      onEndDateSelect(date);
    }
  };

  return (
    <div className="space-y-4">
      {/* Start Date */}
      <div className="relative">
        <label className="block text-sm text-gray-500 mb-1">Дата начала</label>
        <button
          onClick={() => {
            setIsStartPickerOpen(!isStartPickerOpen);
            setIsEndPickerOpen(false);
          }}
          className="w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between bg-white"
        >
          <span className={startDate ? 'text-gray-900' : 'text-gray-400'}>
            {startDate ? formatDate(startDate) : 'Выберите дату'}
          </span>
          <Calendar className="w-5 h-5 text-gray-400" />
        </button>

        {isStartPickerOpen && (
          <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4">
            <DatePicker
              selectedDate={startDate}
              onDateSelect={handleStartDateSelect}
              onClose={() => setIsStartPickerOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Toggle End Date */}
      <button
        type="button"
        onClick={() => {
          setShowEndDate(!showEndDate);
          if (!showEndDate && startDate) {
            onEndDateSelect(startDate);
          }
        }}
        className={`
          px-4 py-2 text-sm rounded-lg transition-colors w-full
          ${showEndDate 
            ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
          }
        `}
      >
        {showEndDate ? 'Скрыть дату окончания' : 'Добавить дату окончания'}
      </button>

      {/* End Date */}
      {showEndDate && (
        <div className="relative">
          <label className="block text-sm text-gray-500 mb-1">Дата окончания</label>
          <button
            onClick={() => {
              setIsEndPickerOpen(!isEndPickerOpen);
              setIsStartPickerOpen(false);
            }}
            className="w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between bg-white"
          >
            <span className={endDate ? 'text-gray-900' : 'text-gray-400'}>
              {endDate ? formatDate(endDate) : 'Выберите дату'}
            </span>
            <Calendar className="w-5 h-5 text-gray-400" />
          </button>

          {isEndPickerOpen && (
            <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4">
              <DatePicker
                selectedDate={endDate}
                onDateSelect={(date) => {
                  onEndDateSelect(date);
                  setIsEndPickerOpen(false);
                }}
                onClose={() => setIsEndPickerOpen(false)}
                minDate={startDate || undefined}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}