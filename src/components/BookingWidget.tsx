import React, { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { DateRangeSelect } from './DateRangeSelect';
import { TimePicker } from './TimePicker';
import { trackEvent } from '../utils/analytics';

interface BookingWidgetProps {
  price: number;
  spaceTitle: string;
  onBookingClick: () => void;
}

export function BookingWidget({ price, spaceTitle, onBookingClick }: BookingWidgetProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const isBookingEnabled = startDate;

  const handleBookingClick = () => {
    if (!isBookingEnabled) return;

    trackEvent('booking_attempt', {
      spaceTitle,
      startDate: startDate ? format(startDate, 'yyyy-MM-dd') : null,
      endDate: endDate ? format(endDate, 'yyyy-MM-dd') : null,
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
        {/* Date Range Selection */}
        <DateRangeSelect
          startDate={startDate}
          endDate={endDate}
          onStartDateSelect={setStartDate}
          onEndDateSelect={setEndDate}
        />

        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4">
          <TimePicker
            label="Время начала"
            value={startTime}
            onChange={setStartTime}
            selectedDate={startDate}
          />
          <TimePicker
            label="Время окончания"
            value={endTime}
            onChange={setEndTime}
            selectedDate={startDate}
          />
        </div>

        <button
          onClick={handleBookingClick}
          disabled={!isBookingEnabled}
          className={`
            w-full py-3 rounded-lg transition-colors
            ${isBookingEnabled
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }
          `}
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