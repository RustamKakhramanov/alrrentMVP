export interface PricingTier {
  id: string;
  name: string;
  duration: number; // Minimum hours for this tier
  price: number;    // Price per hour
  description?: string;
}

export interface Package {
  id: string;
  name: string;
  duration: number; // Total hours in package
  price: number;    // Total package price
  description?: string;
  savings?: number; // Optional savings amount to display
}