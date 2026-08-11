'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { StatCard } from '@/components/cards';
import { MealsChart, CategoryChart, PerformanceChart } from '@/components/charts';
import { mockStats, monthlyStats, categoryStats, ngoPerformance } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { Users, Package, TrendingUp, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="admin" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Top Bar */}
        <div className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition">
              Generate Report
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 pb-20">
          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <StatCard
              title="Total Meals Saved"
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
              title="Active NGOs"
              value={mockStats.totalNGOs}
              subtitle="Verified organizations"
              icon={<Users size={24} />}
              color="primary"
            />
            <StatCard
              title="Active Volunteers"
              value={mockStats.totalVolunteers}
              subtitle="Community helpers"
              icon={<Users size={24} />}
              color="secondary"
            />
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <MealsChart data={monthlyStats} title="Monthly Meals & Waste Reduction" />
            <CategoryChart data={categoryStats} title="Food Category Distribution" />
          </motion.div>

          {/* Performance & Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-8"
          >
            <PerformanceChart data={ngoPerformance} title="NGO Performance" />

            {/* System Alerts */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <AlertCircle size={20} />
                System Alerts
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-red-100/50 border border-red-200 text-sm">
                  <p className="font-medium text-red-900">2 Pending Verifications</p>
                  <p className="text-xs text-red-800 mt-1">NGOs waiting for verification</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-100/50 border border-yellow-200 text-sm">
                  <p className="font-medium text-yellow-900">3 Donations Expiring Soon</p>
                  <p className="text-xs text-yellow-800 mt-1">Less than 2 hours remaining</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-100/50 border border-blue-200 text-sm">
                  <p className="font-medium text-blue-900">New User Registrations</p>
                  <p className="text-xs text-blue-800 mt-1">45 users registered this week</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Users Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg border border-border bg-card p-6"
          >
            <h3 className="font-bold mb-4">Recent Users</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-medium">Name</th>
                    <th className="px-4 py-3 text-left font-medium">Email</th>
                    <th className="px-4 py-3 text-left font-medium">Role</th>
                    <th className="px-4 py-3 text-left font-medium">Joined</th>
                    <th className="px-4 py-3 text-left font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'John Restaurant', email: 'john@restaurant.com', role: 'Donor', joined: '2 days ago', status: 'active' },
                    { name: 'Hope Foundation', email: 'info@hope.org', role: 'NGO', joined: '5 days ago', status: 'verified' },
                    { name: 'Amit Volunteer', email: 'amit@volunteer.com', role: 'Volunteer', joined: '1 week ago', status: 'active' },
                    { name: 'Food For All', email: 'admin@foodforall.org', role: 'NGO', joined: '2 weeks ago', status: 'verified' },
                  ].map((user, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-secondary/30 transition">
                      <td className="px-4 py-3">{user.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{user.joined}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            user.status === 'verified'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {user.status === 'verified' ? 'Verified' : 'Active'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
