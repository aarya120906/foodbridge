'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { StatCard, FoodItemCard } from '@/components/cards';
import { mockStats, mockDonations } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Package, MapPin, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function NGODashboard() {
  const availableDonations = mockDonations.filter((d) => d.status === 'available');

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="ngo" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            <h1 className="text-2xl font-bold">NGO Dashboard</h1>
            <Link
              href="/ngo/donations"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Browse All
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 pb-20">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <StatCard
              title="Available Donations"
              value={availableDonations.length}
              subtitle="Ready for pickup"
              icon={<Package size={24} />}
              color="primary"
            />
            <StatCard
              title="Total Meals Received"
              value="12,450"
              subtitle="This month"
              trend="up"
              icon={<Users size={24} />}
              color="accent"
            />
            <StatCard
              title="Beneficiaries Served"
              value="5,230"
              subtitle="This month"
              trend="up"
              icon={<Users size={24} />}
              color="primary"
            />
            <StatCard
              title="Active Volunteers"
              value={mockStats.totalVolunteers}
              subtitle="In your region"
              icon={<MapPin size={24} />}
              color="secondary"
            />
          </motion.div>

          {/* Available Donations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold">Available Donations Near You</h2>
              <p className="text-sm text-muted-foreground">
                Browse and accept food donations for distribution
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {availableDonations.map((donation) => (
                <motion.div
                  key={donation.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <FoodItemCard
                    foodName={donation.foodName}
                    category={donation.category}
                    quantity={donation.quantity}
                    expiryTime={donation.expiryTime}
                    location={donation.city}
                    donor="Local Restaurant"
                    veg={donation.veg}
                    actionLabel="Accept Donation"
                    onAction={() => {
                      // Accept donation
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {availableDonations.length === 0 && (
              <div className="text-center py-12 rounded-lg border border-border bg-card p-8">
                <Package size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground">No donations available right now</p>
              </div>
            )}
          </motion.div>

          {/* Impact Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-lg border border-border bg-card p-6"
          >
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Your Impact This Month
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Meals Distributed</p>
                <p className="text-3xl font-bold text-primary mt-2">12,450</p>
                <p className="text-xs text-muted-foreground mt-1">+20% from last month</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Waste Prevented (kg)</p>
                <p className="text-3xl font-bold text-accent mt-2">6,220</p>
                <p className="text-xs text-muted-foreground mt-1">CO2 offset</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
                <p className="text-3xl font-bold text-primary mt-2">5,230</p>
                <p className="text-xs text-muted-foreground mt-1">Beneficiaries served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
