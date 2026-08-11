'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { FoodItemCard } from '@/components/cards';
import { mockDonations } from '@/lib/mock-data';
import { motion } from 'framer-motion';
import { MapPin, Filter, Search } from 'lucide-react';
import { useState } from 'react';

export default function BrowseDonationsPage() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  const filteredDonations = mockDonations.filter((donation) => {
    const matchesStatus = filter === 'all' || donation.status === filter;
    const matchesSearch =
      donation.foodName.toLowerCase().includes(search.toLowerCase()) ||
      donation.category.toLowerCase().includes(search.toLowerCase());
    const matchesLocation =
      location === '' || donation.city.toLowerCase().includes(location.toLowerCase());
    return matchesStatus && matchesSearch && matchesLocation;
  });

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="ngo" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Header */}
        <div className="border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="px-6 md:px-8 py-6">
            <h1 className="text-2xl font-bold mb-4">Browse Food Donations</h1>

            {/* Filters */}
            <div className="space-y-4">
              {/* Search & Location */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search by food type..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Filter by location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Status Filter */}
              <div className="flex gap-2 flex-wrap">
                <Filter size={18} className="text-muted-foreground my-auto" />
                {['all', 'available', 'accepted'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setFilter(status)}
                    className={`px-4 py-2 rounded-lg border transition-all capitalize ${
                      filter === status
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 pb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Found {filteredDonations.length} donation{filteredDonations.length !== 1 ? 's' : ''}
            </p>

            {filteredDonations.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredDonations.map((donation, idx) => (
                  <motion.div
                    key={donation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FoodItemCard
                      foodName={donation.foodName}
                      category={donation.category}
                      quantity={donation.quantity}
                      expiryTime={donation.expiryTime}
                      location={donation.city}
                      donor="Restaurant Partner"
                      veg={donation.veg}
                      actionLabel={
                        donation.status === 'accepted'
                          ? 'View Status'
                          : 'Accept Donation'
                      }
                      onAction={() => {
                        alert(`${donation.foodName} - Action triggered!`);
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 rounded-lg border border-border bg-card p-8">
                <Search size={48} className="mx-auto text-muted-foreground mb-4 opacity-50" />
                <p className="text-muted-foreground">
                  No donations found matching your criteria
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
