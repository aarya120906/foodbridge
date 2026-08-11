export type UserRole = 'donor' | 'ngo' | 'volunteer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  profileImage?: string;
  address: string;
  city: string;
  createdAt: Date;
}

export interface FoodDonation {
  id: string;
  donorId: string;
  foodName: string;
  category: 'cooked' | 'packaged' | 'fresh' | 'bakery' | 'other';
  quantity: number;
  veg: boolean;
  preparationTime: Date;
  expiryTime: Date;
  pickupTime: Date;
  image?: string;
  address: string;
  city: string;
  notes?: string;
  status: 'available' | 'accepted' | 'completed' | 'expired';
  acceptedBy?: string;
  createdAt: Date;
}

export interface NGO {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  verified: boolean;
  description?: string;
  contactPerson: string;
  createdAt: Date;
}

export interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  points: number;
  badges: string[];
  createdAt: Date;
}

export interface Pickup {
  id: string;
  donationId: string;
  volunteerId: string;
  ngoId: string;
  status: 'assigned' | 'in-transit' | 'delivered';
  pickupLocation: string;
  deliveryLocation: string;
  createdAt: Date;
  completedAt?: Date;
}

export interface DashboardStats {
  totalMeals: number;
  wasteReduced: number;
  activeDonations: number;
  totalVolunteers: number;
  totalNGOs: number;
}
