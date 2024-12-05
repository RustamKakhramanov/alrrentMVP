import { Space } from '../types/space';
import { SearchFilters } from '../types/search';
import { SPACES } from '../data/spaces';
import { LOCATIONS } from '../config/locations';

export function filterLocations(searchTerm: string): string[] {
  if (!searchTerm) {
    return Object.values(LOCATIONS).flatMap(cityData => 
      cityData.districts.map(district => `${cityData.city}, ${district}`)
    );
  }
  
  const normalizedSearch = searchTerm.toLowerCase();
  const results: string[] = [];

  Object.entries(LOCATIONS).forEach(([_, cityData]) => {
    if (cityData.city.toLowerCase().includes(normalizedSearch)) {
      results.push(...cityData.districts.map(district => `${cityData.city}, ${district}`));
    } else {
      cityData.districts.forEach(district => {
        if (district.toLowerCase().includes(normalizedSearch)) {
          results.push(`${cityData.city}, ${district}`);
        }
      });
    }
  });

  return results;
}

export function filterSpaces(filters: SearchFilters): Space[] {
  const baseSpaces = Object.values(SPACES);
  
  return baseSpaces.map(space => {
    // Create a copy of the space
    const newSpace = { ...space };
    
    // If location filter is active, update the space location
    if (filters.location) {
      newSpace.location = filters.location;
      
      // Update coordinates based on the selected district
      const coordinates = getDistrictCoordinates(filters.location);
      if (coordinates) {
        // Add some random offset to spread spaces around the district center
        const latOffset = (Math.random() - 0.5) * 0.004; // ~200m radius
        const lngOffset = (Math.random() - 0.5) * 0.004;
        newSpace.coordinates = [
          coordinates.lng + lngOffset,
          coordinates.lat + latOffset
        ];
      }
    }
    
    return newSpace;
  }).filter(space => {
    // Price filter
    if (filters.minPrice > 0 && space.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice > 0 && space.price > filters.maxPrice) {
      return false;
    }

    // Capacity filter
    const [minCapacity, maxCapacity] = filters.selectedCapacity;
    if (minCapacity > 0) {
      if (maxCapacity && (space.capacity < minCapacity || space.capacity > maxCapacity)) {
        return false;
      }
      if (!maxCapacity && space.capacity < minCapacity) {
        return false;
      }
    }

    // Amenities filter
    if (filters.selectedAmenities.length > 0) {
      const spaceAmenityIds = space.amenities.map(a => a.id);
      if (!filters.selectedAmenities.every(id => spaceAmenityIds.includes(id))) {
        return false;
      }
    }

    // Type filter
    if (filters.selectedTypes.length > 0 && !filters.selectedTypes.includes(space.type)) {
      return false;
    }

    return true;
  });
}

export function getDistrictCoordinates(location: string): { lat: number; lng: number } | null {
  const districtCoordinates: Record<string, { lat: number; lng: number }> = {
    // Алматы
    'Алмалинский район': { lat: 43.251484, lng: 76.928732 },
    'Медеуский район': { lat: 43.261484, lng: 76.948732 },
    'Бостандыкский район': { lat: 43.241484, lng: 76.938732 },
    'Ауэзовский район': { lat: 43.231484, lng: 76.918732 },
    'Турксибский район': { lat: 43.271484, lng: 76.938732 },
    'Жетысуский район': { lat: 43.241484, lng: 76.908732 },
    'Наурызбайский район': { lat: 43.221484, lng: 76.918732 },
    'Алатауский район': { lat: 43.281484, lng: 76.928732 },
    
    // Петропавловск
    'Центральный район': { lat: 54.874482, lng: 69.141768 },
    'Промышленный район': { lat: 54.864482, lng: 69.151768 },
    'Привокзальный район': { lat: 54.884482, lng: 69.131768 },
    'Рабочий поселок': { lat: 54.869482, lng: 69.146768 },
    'ПЗТМ': { lat: 54.859482, lng: 69.136768 },
    '19-й микрорайон': { lat: 54.879482, lng: 69.156768 },
    '20-й микрорайон': { lat: 54.889482, lng: 69.166768 },
    
    // Астана
    'Есильский район': { lat: 51.128199, lng: 71.430115 },
    'Алматинский район': { lat: 51.138199, lng: 71.440115 },
    'Сарыаркинский район': { lat: 51.148199, lng: 71.450115 },
    'Байконурский район': { lat: 51.158199, lng: 71.460115 }
  };

  for (const [district, coordinates] of Object.entries(districtCoordinates)) {
    if (location.includes(district)) {
      return coordinates;
    }
  }

  return null;
}