import React from 'react';
import { X } from 'lucide-react';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';

interface MobileDateTimePickerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  startTime: string;
  endTime: string;
  onDateSelect: (date: Date) => void;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
}

export function MobileDateTimePicker({
  isOpen,
  onClose,
  selectedDate,
  startTime,
  endTime,
  onDateSelect,
  onStartTimeChange,
  onEndTimeChange
}: MobileDateTimePickerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="sticky top-0 bg-white border-b z-10">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Выберите дату и время</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-4 space-y-6 overflow-auto h-[calc(100vh-64px)]">
        <DatePicker
          selectedDate={selectedDate}
          onDateSelect={onDateSelect}
          onClose={() => {}}
        />

        <div className="space-y-4">
          <TimePicker
            label="Время начала"
            value={startTime}
            onChange={onStartTimeChange}
            selectedDate={selectedDate}
          />
          <TimePicker
            label="Время окончания"
            value={endTime}
            onChange={onEndTimeChange}
            selectedDate={selectedDate}
          />
        </div>

        <div className="sticky bottom-0 bg-white pt-4 border-t">
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          >
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}