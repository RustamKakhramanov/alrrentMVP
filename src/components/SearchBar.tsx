import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { MobileDateTimePicker } from './MobileDateTimePicker';
import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';
import { ACTIVITIES } from '../config/activities';
import { trackEvent } from '../utils/analytics';
import { analyticsConfig } from '../config/analytics';
import { useClickOutside } from '../hooks/useClickOutside';
import { filterLocations } from '../utils/searchUtils';

export function SearchBar() {
  const navigate = useNavigate();
  const activityRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const dateTimeRef = useRef<HTMLDivElement>(null);
  const [eventType, setEventType] = useState('');
  const [location, setLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [showActivitySuggestions, setShowActivitySuggestions] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [locationSuggestions, setLocationSuggestions] = useState<string[]>([]);

  useClickOutside(activityRef, () => setShowActivitySuggestions(false));
  useClickOutside(locationRef, () => setShowLocationSuggestions(false));
  useClickOutside(dateTimeRef, () => setIsDateTimePickerOpen(false));

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const suggestions = filterLocations(location);
    setLocationSuggestions(suggestions);
  }, [location]);

  const formattedDate = selectedDate
    ? format(selectedDate, 'd MMMM yyyy', { locale: ru })
    : '';

  const formattedDateTime = selectedDate && startTime && endTime
    ? `${formattedDate}, ${startTime} - ${endTime}`
    : '';

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (eventType) params.append('activity', eventType);
    if (location) params.append('location', location);
    if (selectedDate) params.append('date', selectedDate.toISOString());
    if (startTime) params.append('startTime', startTime);
    if (endTime) params.append('endTime', endTime);

    trackEvent(analyticsConfig.googleAnalytics.events.search, {
      eventType,
      location,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
      startTime,
      endTime
    });

    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center bg-white rounded-lg shadow-lg">
        {/* Activity Input */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200" ref={activityRef}>
          <label className="block text-sm text-gray-500 mb-1">Что планируете?</label>
          <div className="relative">
            <input
              type="text"
              value={eventType}
              onChange={(e) => {
                setEventType(e.target.value);
                setShowActivitySuggestions(true);
              }}
              onFocus={() => setShowActivitySuggestions(true)}
              placeholder="Подкаст, мастер-класс, фотосессия"
              className="w-full pl-4 pr-10 py-2 text-lg border-0 focus:ring-0 placeholder-gray-400"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            {showActivitySuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
                {ACTIVITIES.filter(activity =>
                  activity.title.toLowerCase().includes(eventType.toLowerCase())
                ).map((activity) => (
                  <button
                    key={activity.id}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50"
                    onClick={() => {
                      setEventType(activity.title);
                      setShowActivitySuggestions(false);
                      trackEvent(analyticsConfig.googleAnalytics.events.activitySelect, {
                        activityId: activity.id,
                        activityName: activity.title
                      });
                    }}
                  >
                    {activity.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Location Input */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200" ref={locationRef}>
          <label className="block text-sm text-gray-500 mb-1">Где?</label>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setShowLocationSuggestions(true);
              }}
              onFocus={() => setShowLocationSuggestions(true)}
              placeholder="Введите адрес"
              className="w-full pl-4 pr-10 py-2 text-lg border-0 focus:ring-0 placeholder-gray-400"
            />
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

            {showLocationSuggestions && (
              <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-lg shadow-lg z-50 max-h-60 overflow-auto">
                {locationSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50"
                    onClick={() => {
                      setLocation(suggestion);
                      setShowLocationSuggestions(false);
                      trackEvent(analyticsConfig.googleAnalytics.events.locationSelect, {
                        location: suggestion
                      });
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date/Time Selection */}
        <div className="flex-1 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <label className="block text-sm text-gray-500 mb-1">Когда?</label>
          <button
            onClick={() => setIsDateTimePickerOpen(true)}
            className="w-full text-left py-2 text-lg focus:outline-none flex items-center"
          >
            <Calendar className="w-5 h-5 mr-2 text-gray-400" />
            <span className={formattedDateTime ? 'text-gray-900' : 'text-gray-400'}>
              {formattedDateTime || 'Выберите дату и время'}
            </span>
          </button>
        </div>

        {/* Search Button */}
        <div className="p-4 md:w-auto">
          <button
            onClick={handleSearch}
            className="w-full md:w-[140px] px-8 py-3 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
          >
            Найти
          </button>
        </div>
      </div>

      {/* Mobile Date/Time Picker */}
      {isMobileView ? (
        <MobileDateTimePicker
          isOpen={isDateTimePickerOpen}
          onClose={() => setIsDateTimePickerOpen(false)}
          selectedDate={selectedDate}
          startTime={startTime}
          endTime={endTime}
          onDateSelect={setSelectedDate}
          onStartTimeChange={setStartTime}
          onEndTimeChange={setEndTime}
        />
      ) : (
        isDateTimePickerOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50" ref={dateTimeRef}>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <DatePicker
                  selectedDate={selectedDate}
                  onDateSelect={setSelectedDate}
                  onClose={() => { }}
                />
                <div className="space-y-4">
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
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsDateTimePickerOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Применить
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}