import { FoodDonation, Volunteer, DashboardStats } from './types';

export const mockStats: DashboardStats = {
  totalMeals: 45230,
  wasteReduced: 12500,
  activeDonations: 234,
  totalVolunteers: 892,
  totalNGOs: 45,
};

export const mockDonations: FoodDonation[] = [
  {
    id: '1',
    donorId: 'donor1',
    foodName: 'Biryani & Raita',
    category: 'cooked',
    quantity: 50,
    veg: false,
    preparationTime: new Date(Date.now() - 2 * 60 * 60 * 1000),
    expiryTime: new Date(Date.now() + 4 * 60 * 60 * 1000),
    pickupTime: new Date(Date.now() + 1 * 60 * 60 * 1000),
    address: '123 Restaurant Lane',
    city: 'Mumbai',
    status: 'available',
    createdAt: new Date(Date.now() - 30 * 60 * 1000),
  },
  {
    id: '2',
    donorId: 'donor2',
    foodName: 'Fresh Bread & Pastries',
    category: 'bakery',
    quantity: 30,
    veg: true,
    preparationTime: new Date(Date.now() - 1 * 60 * 60 * 1000),
    expiryTime: new Date(Date.now() + 6 * 60 * 60 * 1000),
    pickupTime: new Date(Date.now() + 2 * 60 * 60 * 1000),
    address: '456 Bakery Street',
    city: 'Mumbai',
    status: 'available',
    createdAt: new Date(),
  },
  {
    id: '3',
    donorId: 'donor3',
    foodName: 'Mixed Vegetables & Rice',
    category: 'cooked',
    quantity: 75,
    veg: true,
    preparationTime: new Date(Date.now() - 3 * 60 * 60 * 1000),
    expiryTime: new Date(Date.now() + 3 * 60 * 60 * 1000),
    pickupTime: new Date(Date.now() + 30 * 60 * 1000),
    address: 'Corporate Cafeteria, Tech Park',
    city: 'Mumbai',
    status: 'accepted',
    acceptedBy: 'ngo1',
    createdAt: new Date(Date.now() - 45 * 60 * 1000),
  },
];

export const mockVolunteers: Volunteer[] = [
  {
    id: 'vol1',
    name: 'Amit Kumar',
    email: 'amit@example.com',
    phone: '+91-98765-43210',
    address: '789 Volunteer Ave',
    city: 'Mumbai',
    points: 1250,
    badges: ['50-pickups', 'reliable', 'community-hero'],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 'vol2',
    name: 'Priya Sharma',
    email: 'priya@example.com',
    phone: '+91-98765-43211',
    address: '101 Helper Street',
    city: 'Mumbai',
    points: 980,
    badges: ['25-pickups', 'dedicated'],
    createdAt: new Date('2024-03-20'),
  },
];

export const monthlyStats = [
  { month: 'Jan', meals: 2400, waste: 600 },
  { month: 'Feb', meals: 3210, waste: 800 },
  { month: 'Mar', meals: 2290, waste: 700 },
  { month: 'Apr', meals: 2000, waste: 500 },
  { month: 'May', meals: 2181, waste: 550 },
  { month: 'Jun', meals: 4215, waste: 1200 },
];

export const categoryStats = [
  { name: 'Cooked', value: 45 },
  { name: 'Fresh Produce', value: 25 },
  { name: 'Bakery', value: 20 },
  { name: 'Packaged', value: 10 },
];

export const ngoPerformance = [
  { name: 'Hope Foundation', meals: 8500, status: 'active' },
  { name: 'Community Care', meals: 7200, status: 'active' },
  { name: 'Food for All', meals: 6800, status: 'active' },
  { name: 'Helping Hands', meals: 5400, status: 'active' },
];
