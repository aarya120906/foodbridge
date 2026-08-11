'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { StatCard, VolunteerCard } from '@/components/cards';
import { mockVolunteers, mockStats } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Truck, Trophy, Heart, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function VolunteerDashboard() {
  const volunteer = mockVolunteers[0];

  const pickups = [
    {
      id: '1',
      food: 'Biryani & Raita',
      donor: 'Restaurant ABC',
      status: 'in-transit',
      pickupTime: 'Today 3:00 PM',
      deliveryTime: 'Today 5:00 PM',
    },
    {
      id: '2',
      food: 'Fresh Vegetables',
      donor: 'Farm Market',
      status: 'assigned',
      pickupTime: 'Tomorrow 10:00 AM',
      deliveryTime: 'Tomorrow 12:00 PM',
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="volunteer" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            <h1 className="text-2xl font-bold">Volunteer Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">{volunteer.name}</p>
                <p className="text-xs text-muted-foreground">{volunteer.points} points</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-bold">{volunteer.name.charAt(0)}</span>
              </div>
            </div>
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
              title="Volunteer Points"
              value={volunteer.points}
              subtitle="Earn more by completing pickups"
              icon={<Trophy size={24} />}
              color="accent"
            />
            <StatCard
              title="Completed Pickups"
              value="47"
              subtitle="This month: 12"
              trend="up"
              icon={<Truck size={24} />}
              color="primary"
            />
            <StatCard
              title="Meals Delivered"
              value="2,340"
              subtitle="Lives impacted"
              icon={<Heart size={24} />}
              color="primary"
            />
            <StatCard
              title="Badges Earned"
              value={volunteer.badges.length}
              subtitle="Keep it up!"
              icon={<Trophy size={24} />}
              color="secondary"
            />
          </motion.div>

          {/* Active Pickups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold mb-4">Assigned Pickups</h2>

            <div className="grid gap-4 mb-8">
              {pickups.map((pickup, idx) => (
                <motion.div
                  key={pickup.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-lg border border-border bg-card p-4 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold">{pickup.food}</h3>
                      <p className="text-sm text-muted-foreground">{pickup.donor}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        pickup.status === 'in-transit'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {pickup.status === 'in-transit' ? 'In Transit' : 'Assigned'}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Pickup Time</p>
                      <p className="font-medium">{pickup.pickupTime}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Expected Delivery</p>
                      <p className="font-medium">{pickup.deliveryTime}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/volunteer/pickups/${pickup.id}`}
                      className="flex-1 rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition text-center"
                    >
                      View Details
                    </Link>
                    <button className="flex-1 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition">
                      Update Status
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {pickups.length === 0 && (
              <div className="text-center py-12 rounded-lg border border-border bg-card p-8 mb-8">
                <Truck size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground">No assigned pickups</p>
              </div>
            )}
          </motion.div>

          {/* Badges & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-4">Your Achievements</h2>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {volunteer.badges.map((badge, idx) => (
                  <motion.div
                    key={badge}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-primary/10 text-center"
                  >
                    <Trophy size={24} className="text-primary mb-2" />
                    <p className="text-sm font-medium capitalize">{badge.replace('-', ' ')}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg border border-border/50 bg-secondary/30 flex gap-3">
                <AlertCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Next Badge: 100 Pickups Completed</p>
                  <div className="mt-2 w-full bg-border rounded-full h-2">
                    <div className="bg-primary rounded-full h-2" style={{ width: '47%' }} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">53 pickups remaining</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
