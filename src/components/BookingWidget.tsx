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

interface BookedSlot {
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
}

export function BookingWidget({ price, spaceTitle, onBookingClick }: BookingWidgetProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const isBookingEnabled = startDate && !isBookingInProgress;

  const getValidationMessage = () => {
    if (!startDate) return 'Выберите дату начала';
    if (!startTime) return 'Выберите время начала';
    if (isBookingInProgress) return 'Заявка уже отправлена';
    return '';
  };

  const handleBookingClick = () => {
    if (!isBookingEnabled || !startDate) return;

    setIsBookingInProgress(true);

    // Add current slot to booked slots
    const newBookedSlot: BookedSlot = {
      startDate: startDate,
      endDate: endDate || startDate,
      startTime: startTime ?? null,
      endTime: endTime
    };
    setBookedSlots([...bookedSlots, newBookedSlot]);

    // Track the booking attempt
    trackEvent('booking_attempt', {
      spaceTitle,
      startDate: startDate ? format(startDate, 'yyyy-MM-dd') : 'Не указано',
      endDate: endDate ? format(endDate, 'yyyy-MM-dd') : null,
      startTime,
      endTime
    });

    // Clear the form
    setStartDate(null);
    setEndDate(null);
    setStartTime('');
    setEndTime('');

    // Call the parent's booking handler
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
          onStartDateSelect={(date) => {
            setStartDate(date);
            setIsBookingInProgress(false);
          }}
          onEndDateSelect={(date) => {
            setEndDate(date);
            setIsBookingInProgress(false);
          }}
          bookedSlots={bookedSlots}
        />

        {/* Time Selection */}
        <div className="grid grid-cols-2 gap-4">
          <TimePicker
            label="Время начала"
            value={startTime}
            onChange={(time) => {
              setStartTime(time);
              setIsBookingInProgress(false);
            }}
            selectedDate={startDate}
            disabledTimes={startDate ? bookedSlots
              .filter(slot => format(slot.startDate, 'yyyy-MM-dd') === format(startDate, 'yyyy-MM-dd'))
              .map(slot => slot.startTime)
              : []
            }
          />
          <TimePicker
            label="Время окончания"
            value={endTime}
            onChange={(time) => {
              setEndTime(time);
              setIsBookingInProgress(false);
            }}
            selectedDate={startDate}
            minTime={startTime}
          />
        </div>

        <div className="relative">
          <button
            onClick={handleBookingClick}
            disabled={!isBookingEnabled}
            onMouseEnter={() => !isBookingEnabled && setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className={`
              w-full py-3 rounded-lg transition-colors
              ${isBookingEnabled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            {isBookingInProgress
              ? 'Заявка отправлена'
              : 'Забронировать'
            }
          </button>

          {/* Validation Tooltip */}
          {showTooltip && !isBookingEnabled && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap">
              {getValidationMessage()}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
            </div>
          )}
        </div>
      </div>

      {bookedSlots.length > 0 && (
        <div className="mt-4 text-sm">
          <p className="font-medium text-gray-900 mb-2">Забронированные слоты:</p>
          <div className="space-y-1 text-gray-600">
            {bookedSlots.map((slot, index) => (
              <p key={index}>
                {format(slot.startDate, 'd MMMM', { locale: ru })}: {slot.startTime ?? null}
                {slot.endTime && ` - ${slot.endTime}`}
              </p>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-500 text-center">
        Бесплатная отмена за 24 часа до начала
      </div>
    </div>
  );
}