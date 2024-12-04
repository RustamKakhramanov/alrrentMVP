import React from 'react';
import { ChevronDown } from 'lucide-react';
import { format, isAfter, isSameDay, parse, set } from 'date-fns';

interface TimePickerProps {
  label: string;
  value: string;
  onChange: (time: string) => void;
  selectedDate?: Date | null;
}

export function TimePicker({ label, value, onChange, selectedDate }: TimePickerProps) {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  const isToday = selectedDate ? isSameDay(selectedDate, now) : false;

  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return [`${hour}:00`, `${hour}:30`];
  }).flat();

  const isTimeDisabled = (time: string) => {
    if (!isToday) return false;
    
    const [hours, minutes] = time.split(':').map(Number);
    return hours < currentHour || (hours === currentHour && minutes <= currentMinute);
  };

  const filteredTimes = times.filter(time => !isTimeDisabled(time));

  return (
    <div className="relative">
      <label className="block text-sm text-gray-500 mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-lg appearance-none bg-white pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Выберите время</option>
          {filteredTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}