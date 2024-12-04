import React from 'react';
import { Popover } from '@headlessui/react';
import { Calendar, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';

interface DateTimePopoverProps {
  selectedDate: Date | null;
  startTime: string;
  endTime: string;
  onDateSelect: (date: Date) => void;
  onStartTimeChange: (time: string) => void;
  onEndTimeChange: (time: string) => void;
}

export function DateTimePopover({
  selectedDate,
  startTime,
  endTime,
  onDateSelect,
  onStartTimeChange,
  onEndTimeChange,
}: DateTimePopoverProps) {
  const formattedDate = selectedDate
    ? format(selectedDate, 'd MMMM yyyy', { locale: ru })
    : '';

  const formattedDateTime = selectedDate && startTime && endTime
    ? `${formattedDate}, ${startTime} - ${endTime}`
    : '';

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="w-full px-4 py-3 text-left border border-gray-300 rounded-md flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="truncate text-gray-900">
              {formattedDateTime || 'Выберите дату и время'}
            </span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'transform rotate-180' : ''}`} />
          </Popover.Button>

          <Popover.Panel className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-6 z-50">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">Выберите дату</h3>
                <DatePicker
                  selectedDate={selectedDate}
                  onDateSelect={onDateSelect}
                />
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-gray-900">Выберите время</h3>
                <div className="grid grid-cols-2 gap-4">
                  <TimePicker
                    label="Время начала"
                    value={startTime}
                    onChange={onStartTimeChange}
                  />
                  <TimePicker
                    label="Время окончания"
                    value={endTime}
                    onChange={onEndTimeChange}
                  />
                </div>
              </div>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}