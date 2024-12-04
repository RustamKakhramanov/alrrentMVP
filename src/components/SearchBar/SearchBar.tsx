import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { DateTimePopover } from './DateTimePopover';

export function SearchBar() {
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SearchInput
          label="Ваше событие"
          value={eventType}
          onChange={setEventType}
          placeholder="Подкаст, Mastermind, фотостудия"
          icon={<Search className="w-5 h-5" />}
        />

        <SearchInput
          label="Где?"
          value={location}
          onChange={setLocation}
          placeholder="Алматы"
          icon={<MapPin className="w-5 h-5" />}
        />

        <div className="relative">
          <label className="block text-sm text-gray-500 mb-1">Когда?</label>
          <DateTimePopover
            selectedDate={selectedDate}
            startTime={startTime}
            endTime={endTime}
            onDateSelect={setSelectedDate}
            onStartTimeChange={setStartTime}
            onEndTimeChange={setEndTime}
          />
        </div>
      </div>
      
      <div className="mt-6">
        <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-md hover:bg-black/90 transition-colors font-medium">
          Найти помещение
        </button>
      </div>
    </div>
  );
}