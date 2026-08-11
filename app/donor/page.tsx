'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { StatCard, FoodItemCard } from '@/components/cards';
import { mockStats, mockDonations } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function DonorDashboard() {
  const donations = mockDonations.filter((d) => d.donorId === 'donor1');

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="donor" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            <h1 className="text-2xl font-bold">Donor Dashboard</h1>
            <Link
              href="/donor/add-donation"
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              + Add Donation
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
              title="Total Meals Donated"
              value={mockStats.totalMeals}
              subtitle="All time"
              trend="up"
              icon={<Package size={24} />}
              color="primary"
            />
            <StatCard
              title="Food Waste Reduced"
              value={`${mockStats.wasteReduced} kg`}
              subtitle="This month"
              trend="up"
              icon={<TrendingUp size={24} />}
              color="accent"
            />
            <StatCard
              title="Active Donations"
              value={donations.length}
              subtitle="Pending pickup"
              icon={<Package size={24} />}
              color="primary"
            />
            <StatCard
              title="NGOs Helped"
              value="12"
              subtitle="This quarter"
              trend="up"
              icon={<Users size={24} />}
              color="secondary"
            />
          </motion.div>

          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mb-6">
              <h2 className="text-xl font-bold">Your Recent Donations</h2>
              <p className="text-sm text-muted-foreground">
                Manage and track your food donations
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {donations.map((donation) => (
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
                    veg={donation.veg}
                    actionLabel={donation.status === 'available' ? 'View Details' : 'View Status'}
                    onAction={() => {
                      // Navigate to donation details
                    }}
                  />
                </motion.div>
              ))}
            </div>

            {donations.length === 0 && (
              <div className="text-center py-12">
                <Package size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground mb-4">No donations yet</p>
                <Link
                  href="/donor/add-donation"
                  className="inline-block rounded-lg bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  Create Your First Donation
                </Link>
              </div>
            )}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 rounded-lg border border-border bg-card p-6"
          >
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={20} />
              Impact Summary
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-muted-foreground">Meals Provided</p>
                <p className="text-3xl font-bold text-primary mt-2">2,450</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">CO2 Offset (kg)</p>
                <p className="text-3xl font-bold text-accent mt-2">1,200</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">People Helped</p>
                <p className="text-3xl font-bold text-primary mt-2">3,200</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
