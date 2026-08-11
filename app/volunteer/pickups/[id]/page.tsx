'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Check, Navigation2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PickupTrackingPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState('in-transit');

  const pickup = {
    id: params.id,
    food: 'Biryani & Raita',
    donor: 'Restaurant ABC',
    quantity: 50,
    status: 'in-transit',
    pickupLocation: '123 Restaurant Lane, Mumbai - 400001',
    deliveryLocation: 'Hope Foundation, Thane - 400605',
    timeline: [
      { step: 'Assigned', time: '2:30 PM', completed: true },
      { step: 'Picked Up', time: '3:15 PM', completed: true },
      { step: 'In Transit', time: '3:30 PM - Now', completed: true },
      { step: 'Delivered', time: 'Expected 5:00 PM', completed: false },
    ],
  };

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="volunteer" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Header */}
        <div className="border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center px-6 md:px-8">
            <Link
              href="/volunteer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 max-w-3xl pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header Info */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{pickup.food}</h1>
              <p className="text-muted-foreground">Donor: {pickup.donor}</p>
            </div>

            {/* Status Badge */}
            <div className="mb-8 inline-block">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm">
                In Transit
              </span>
            </div>

            {/* Timeline */}
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="font-bold mb-6">Delivery Timeline</h2>
              <div className="space-y-4">
                {pickup.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          item.completed
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-border'
                        }`}
                      >
                        {item.completed ? <Check size={16} /> : <div className="w-3 h-3 rounded-full bg-border" />}
                      </div>
                      {idx !== pickup.timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-border mt-2" />
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="font-medium">{item.step}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mb-8 rounded-lg border border-border bg-secondary/30 h-64 flex items-center justify-center">
              <div className="text-center">
                <Navigation2 size={32} className="mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Live Map Tracking</p>
                <p className="text-sm text-muted-foreground">Estimated arrival: 5:00 PM</p>
              </div>
            </div>

            {/* Locations */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Pickup Location */}
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Pickup Location</h3>
                    <p className="text-sm text-muted-foreground">{pickup.pickupLocation}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-muted-foreground">Quantity</p>
                  <p className="font-bold">{pickup.quantity} servings</p>
                </div>
              </div>

              {/* Delivery Location */}
              <div className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold">Delivery Location</h3>
                    <p className="text-sm text-muted-foreground">{pickup.deliveryLocation}</p>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <p className="text-muted-foreground">Expected Delivery</p>
                  <p className="font-bold">5:00 PM Today</p>
                </div>
              </div>
            </div>

            {/* QR Verification */}
            <div className="rounded-lg border border-border bg-card p-6 mb-8">
              <h3 className="font-bold mb-4">QR Code Verification</h3>
              <div className="bg-secondary rounded-lg p-8 flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">QR Code</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Scan QR code at delivery location to confirm delivery
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:opacity-90 transition">
                Confirm Delivery
              </button>
              <button className="flex-1 rounded-lg border border-border px-6 py-3 font-medium hover:bg-secondary transition">
                Need Help
              </button>
            </div>

            {/* Impact */}
            <div className="mt-12 rounded-lg border border-border bg-gradient-to-r from-primary/10 to-accent/10 p-6 text-center">
              <h3 className="font-bold mb-2">Your Impact</h3>
              <p className="text-3xl font-bold text-primary mb-1">+50 meals</p>
              <p className="text-sm text-muted-foreground">Will be provided to those in need</p>
              <p className="text-sm text-primary font-medium mt-3">+25 volunteer points</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
