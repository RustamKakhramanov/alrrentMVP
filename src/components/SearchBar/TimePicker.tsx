import React from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

interface TimePickerProps {
  label: string;
  value: string;
  onChange: (time: string) => void;
}

export function TimePicker({ label, value, onChange }: TimePickerProps) {
  const times = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, '0');
    return [`${hour}:00`, `${hour}:30`];
  }).flat();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full px-4 py-2 text-left border border-gray-300 rounded-md flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500">
        <span className="text-gray-900">{value || 'Выберите время'}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </Menu.Button>

      <Menu.Items className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
        <div className="py-1">
          {times.map((time) => (
            <Menu.Item key={time}>
              {({ active }) => (
                <button
                  onClick={() => onChange(time)}
                  className={`${
                    active ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                  } w-full px-4 py-2 text-left text-sm hover:bg-blue-50`}
                >
                  {time}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}