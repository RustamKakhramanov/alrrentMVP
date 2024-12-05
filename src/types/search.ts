import { Space } from './space';

export interface SearchFilters {
  minPrice: number;
  maxPrice: number;
  selectedCapacity: [number, number | null];
  selectedAmenities: string[];
  selectedTypes: string[];
  location?: string;
  date?: Date | null;
  startTime?: string;
  endTime?: string;
}

export interface SearchState {
  filters: SearchFilters;
  results: Space[];
  selectedSpace: number | null;
}