'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { MealsChart, CategoryChart, PerformanceChart } from '@/components/charts';
import { monthlyStats, categoryStats, ngoPerformance } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { BarChart3, Download, Filter } from 'lucide-react';

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="admin" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Header */}
        <div className="sticky top-0 z-20 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-6 md:px-8">
            <h1 className="text-2xl font-bold">Reports & Analytics</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-secondary transition">
                <Filter size={18} />
                Filter
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 pb-20">
          {/* Date Range Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <label className="text-sm font-medium">Report Period:</label>
            <select className="rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
              <option>All Time</option>
            </select>
          </motion.div>

          {/* Charts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <MealsChart data={monthlyStats} title="Meals Saved Over Time" />
              <CategoryChart data={categoryStats} title="Food Type Distribution" />
            </div>

            <PerformanceChart data={ngoPerformance} title="NGO Performance Metrics" />

            {/* Summary Statistics */}
            <div className="grid md:grid-cols-4 gap-4 rounded-lg border border-border bg-card p-6">
              <motion.div whileHover={{ scale: 1.02 }} className="text-center">
                <p className="text-sm text-muted-foreground">Total Meals</p>
                <p className="text-3xl font-bold text-primary mt-2">45,230</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="text-center">
                <p className="text-sm text-muted-foreground">Waste Reduced</p>
                <p className="text-3xl font-bold text-accent mt-2">12.5T</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="text-center">
                <p className="text-sm text-muted-foreground">People Helped</p>
                <p className="text-3xl font-bold text-primary mt-2">23,450</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="text-center">
                <p className="text-sm text-muted-foreground">CO2 Offset</p>
                <p className="text-3xl font-bold text-secondary mt-2">8.2T</p>
              </motion.div>
            </div>

            {/* Key Insights */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <BarChart3 size={20} />
                Key Insights
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Weekend donations are 35% higher than weekday donations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>NGO performance improved by 28% after volunteer training program</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>Average food delivery time reduced from 2.5 hours to 1.8 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">→</span>
                  <span>Top performing region: Mumbai with 15,230 meals distributed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
