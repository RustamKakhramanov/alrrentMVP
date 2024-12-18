export interface Equipment {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  included: boolean;
  pricePerHour?: number;
  requiresBooking?: boolean;
}

export interface EquipmentCategory {
  id: string;
  name: string;
  equipment: Equipment[];
}