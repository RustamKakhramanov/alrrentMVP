export interface Amenity {
  id: string;
  name: string;
}

export interface Equipment {
  id: string;
  name: string;
}

export interface Space {
  id: number;
  title: string;
  location: string;
  price: number;
  capacity: number;
  rating: number;
  description: string;
  images: string[];
  amenities: Amenity[];
  equipment: Equipment[];
  coordinates: [number, number];
}