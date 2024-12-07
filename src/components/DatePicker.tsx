import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isAfter, startOfDay, isBefore } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  onClose: () => void;
  minDate?: Date;
}

export function DatePicker({ selectedDate, onDateSelect, minDate }: DatePickerProps) {
  const [currentMonth, setCurrentMonth] = useState(minDate || new Date());
  const today = startOfDay(new Date());

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => {
    const prevDate = subMonths(currentMonth, 1);
    const minAllowedDate = minDate || today;
    if (!isBefore(startOfMonth(prevDate), minAllowedDate)) {
      setCurrentMonth(prevDate);
    }
  };

  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

  const isDateDisabled = (date: Date) => {
    const minAllowedDate = minDate || today;
    return isBefore(date, minAllowedDate);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={isBefore(startOfMonth(subMonths(currentMonth, 1)), minDate || today)}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-medium">
          {format(currentMonth, 'LLLL yyyy', { locale: ru })}
        </h2>
        <button 
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-gray-500 font-medium">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day) => {
          const isSelected = selectedDate && isSameDay(day, selectedDate);
          const isCurrentMonth = isSameMonth(day, currentMonth);
          const isDisabled = isDateDisabled(day);

          return (
            <button
              key={day.toString()}
              onClick={() => !isDisabled && onDateSelect(day)}
              disabled={isDisabled}
              className={`
                p-2 text-sm rounded-full transition-colors relative
                ${isSelected ? 'bg-blue-600 text-white hover:bg-blue-700' : 'hover:bg-gray-100'}
                ${!isCurrentMonth && 'text-gray-300'}
                ${isDisabled && 'text-gray-300 cursor-not-allowed'}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}