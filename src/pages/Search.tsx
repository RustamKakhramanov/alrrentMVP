import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Map as MapIcon, X } from 'lucide-react';
import { SearchMap } from '../components/SearchMap/SearchMap';
import { SearchList } from '../components/SearchList/SearchList';
import { FilterDrawer } from '../components/SearchFilters/FilterDrawer';
import { SearchFilters } from '../types/search';
import { filterSpaces, getDistrictCoordinates } from '../utils/searchUtils';

export function Search() {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    minPrice: 0,
    maxPrice: 0,
    selectedCapacity: [0, null],
    selectedAmenities: [],
    selectedTypes: [],
    location: '',
    date: null,
    startTime: '',
    endTime: ''
  });
  const [searchResults, setSearchResults] = useState(filterSpaces(filters));
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number } | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    const activity = searchParams.get('activity');
    const locationParam = searchParams.get('location');
    const date = searchParams.get('date');
    const startTime = searchParams.get('startTime');
    const endTime = searchParams.get('endTime');

    const newFilters = {
      ...filters,
      selectedTypes: activity ? [activity] : [],
      location: locationParam || '',
      date: date ? new Date(date) : null,
      startTime: startTime || '',
      endTime: endTime || ''
    };

    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));

    if (locationParam) {
      const coordinates = getDistrictCoordinates(locationParam);
      if (coordinates) {
        setMapCenter(coordinates);
      }
    }
  }, [location.search]);

  const handlePriceChange = (min: number, max: number) => {
    const newFilters = { ...filters, minPrice: min, maxPrice: max };
    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));
  };

  const handleCapacityChange = (range: [number, number | null]) => {
    const newFilters = { ...filters, selectedCapacity: range };
    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));
  };

  const handleAmenityToggle = (amenityId: string) => {
    const newFilters = {
      ...filters,
      selectedAmenities: filters.selectedAmenities.includes(amenityId)
        ? filters.selectedAmenities.filter(id => id !== amenityId)
        : [...filters.selectedAmenities, amenityId]
    };
    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));
  };

  const handleTypeToggle = (typeId: string) => {
    const newFilters = {
      ...filters,
      selectedTypes: filters.selectedTypes.includes(typeId)
        ? filters.selectedTypes.filter(id => id !== typeId)
        : [...filters.selectedTypes, typeId]
    };
    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));
  };

  const handleRemoveFilter = (type: string, value?: string) => {
    const newFilters = { ...filters };
    switch (type) {
      case 'minPrice':
        newFilters.minPrice = 0;
        break;
      case 'maxPrice':
        newFilters.maxPrice = 0;
        break;
      case 'amenity':
        newFilters.selectedAmenities = filters.selectedAmenities.filter(id => id !== value);
        break;
      case 'type':
        newFilters.selectedTypes = filters.selectedTypes.filter(id => id !== value);
        break;
      case 'location':
        newFilters.location = '';
        setMapCenter(null);
        break;
    }
    setFilters(newFilters);
    setSearchResults(filterSpaces(newFilters));
  };

  const handleSpaceSelect = (id: number) => {
    setSelectedSpace(id);
    navigate(`/spaces/${id}`);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            На главную
          </Link>
          <div className="text-sm text-gray-500">
            Найдено: {searchResults.length} помещений
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row relative">
        <div className="lg:hidden sticky top-0 z-10 bg-white border-b p-4">
          <button
            onClick={() => setShowMap(!showMap)}
            className="w-full flex items-center justify-center space-x-2 bg-black text-white px-4 py-2 rounded-lg"
          >
            {showMap ? (
              <>
                <X className="w-5 h-5" />
                <span>Скрыть карту</span>
              </>
            ) : (
              <>
                <MapIcon className="w-5 h-5" />
                <span>Показать карту</span>
              </>
            )}
          </button>
        </div>

        <div className={`
          w-full lg:w-[600px] flex-shrink-0
          ${showMap ? 'hidden lg:block' : 'block'}
        `}>
          <SearchList
            spaces={searchResults}
            selectedSpace={selectedSpace}
            onSpaceSelect={handleSpaceSelect}
            filters={filters}
            onRemoveFilter={handleRemoveFilter}
            onOpenFilters={() => setIsFilterDrawerOpen(true)}
          />
        </div>

        <div className={`
          flex-1 relative lg:sticky lg:top-0 lg:h-screen
          ${showMap ? 'block' : 'hidden lg:block'}
        `}>
          <SearchMap
            spaces={searchResults}
            selectedSpace={selectedSpace}
            onSpaceSelect={handleSpaceSelect}
            center={mapCenter}
          />
        </div>
      </div>

      <FilterDrawer
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        filters={filters}
        onPriceChange={handlePriceChange}
        onCapacityChange={handleCapacityChange}
        onAmenityToggle={handleAmenityToggle}
        onTypeToggle={handleTypeToggle}
      />
    </div>
  );
}