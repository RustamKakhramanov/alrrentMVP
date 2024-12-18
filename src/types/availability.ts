// Time slot representation
export interface TimeSlot {
  start: string; // HH:mm format
  end: string;   // HH:mm format
}

// Daily schedule
export interface DailySchedule {
  isOpen: boolean;
  slots: TimeSlot[];
}

// Weekly schedule
export interface WeeklySchedule {
  monday: DailySchedule;
  tuesday: DailySchedule;
  wednesday: DailySchedule;
  thursday: DailySchedule;
  friday: DailySchedule;
  saturday: DailySchedule;
  sunday: DailySchedule;
}

// Special dates (holidays, maintenance, etc)
export interface SpecialDate {
  date: string;        // YYYY-MM-DD format
  isOpen: boolean;
  reason?: string;     // e.g., "Holiday", "Maintenance"
  slots?: TimeSlot[];  // Optional different schedule for special dates
}

// Booking
export interface Booking {
  id: string;
  spaceId: number;
  startDate: string;   // YYYY-MM-DD format
  endDate?: string;    // YYYY-MM-DD format
  startTime: string;   // HH:mm format
  endTime: string;     // HH:mm format
  status: 'pending' | 'confirmed' | 'cancelled';
}

// Complete availability schedule
export interface AvailabilitySchedule {
  regularHours: WeeklySchedule;
  specialDates?: SpecialDate[];
  bookings: Booking[];
  breakBetweenBookings: number; // Minutes required between bookings
  minBookingDuration: number;   // Minimum booking duration in minutes
  maxBookingDuration: number;   // Maximum booking duration in minutes
}