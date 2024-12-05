import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';

interface BookingWidgetProps {
  price: number;
  spaceTitle: string;
  onBookingClick: () => void;
}

export function BookingWidget({ price, spaceTitle, onBookingClick }: BookingWidgetProps) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  const handleBookingClick = () => {
    trackEvent(analyticsConfig.googleAnalytics.events.bookingAttempt, {
      spaceTitle,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
      startTime,
      endTime
    });
    onBookingClick();
  };

  return (
    <div className="sticky top-24 bg-white rounded-xl border p-6">
      <div className="text-2xl font-bold mb-2">
        {price.toLocaleString()} ₸
        <span className="text-base font-normal text-gray-600">/час</span>
      </div>

      <div className="space-y-4 mt-6">
        {/* Date Selection */}
        <div className="relative">
          <button
            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            className="w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between"
          >
            <span className={selectedDate ? 'text-gray-900' : 'text-gray-400'}>
              {selectedDate 
                ? format(selectedDate, 'd MMMM yyyy', { locale: ru })
                : 'Выберите дату'
              }
            </span>
            <Calendar className="w-5 h-5 text-gray-400" />
          </button>

          {isDatePickerOpen && (
            <div className="absolute z-10 mt-2 bg-white border rounded-lg shadow-lg p-4">
              <DatePicker
                selectedDate={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setIsDatePickerOpen(false);
                }}
                onClose={() => setIsDatePickerOpen(false)}
              />
            </div>
          )}
        </div>

        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4">
          <TimePicker
            label="Время начала"
            value={startTime}
            onChange={setStartTime}
            selectedDate={selectedDate}
          />
          <TimePicker
            label="Время окончания"
            value={endTime}
            onChange={setEndTime}
            selectedDate={selectedDate}
          />
        </div>

        <button
          onClick={handleBookingClick}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Забронировать
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        Бесплатная отмена за 24 часа до начала
      </div>
    </div>
  );
}