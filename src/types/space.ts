import { AvailabilitySchedule } from "./availability";
import { PricingTier } from "./pricing";

export interface Amenity {
  id: string;
  name: string;
}

export interface Equipment {
  id: string;
  name: string;
  price?: number,
  included: boolean
}
export interface Contact {
  id: string;
  value: string;
}

export interface Space {
  id: number;
  title: string;
  location: string;
  defaultPrice: number;
  capacity: number;
  rating: number;
  description: string;
  images: string[];
  coordinates: [number, number];
  type: string;
  activities: string[];

  amenities: Amenity[];
  contacts: Contact[];
  availability: AvailabilitySchedule
  equipment: Equipment[];
  prices: PricingTier[];
}