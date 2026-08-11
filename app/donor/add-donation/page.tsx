'use client';

import { DashboardSidebar } from '@/components/dashboard-sidebar';
import { motion } from 'framer-motion';
import { ArrowLeft, Upload } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AddDonationPage() {
  const [formData, setFormData] = useState({
    foodName: '',
    category: 'cooked',
    quantity: '',
    vegNonVeg: 'veg',
    preparationTime: '',
    expiryTime: '',
    pickupTime: '',
    address: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Donation added successfully!');
    }, 1000);
  };

  const categories = [
    { id: 'cooked', label: 'Cooked Food' },
    { id: 'bakery', label: 'Bakery Items' },
    { id: 'fresh', label: 'Fresh Produce' },
    { id: 'packaged', label: 'Packaged Food' },
    { id: 'other', label: 'Other' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar role="donor" />

      {/* Main Content */}
      <main className="flex-1 md:ml-0">
        {/* Header */}
        <div className="border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex h-16 items-center px-6 md:px-8">
            <Link
              href="/donor"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft size={18} />
              Back to Dashboard
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 md:ml-0 max-w-2xl pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">Add Food Donation</h1>
            <p className="text-muted-foreground mb-8">
              Share your food donation details with our community
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Food Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Food Name *</label>
                <input
                  type="text"
                  name="foodName"
                  value={formData.foodName}
                  onChange={handleInputChange}
                  placeholder="e.g., Biryani, Fresh Vegetables"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Category & Veg/Non-Veg */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Type *</label>
                  <select
                    name="vegNonVeg"
                    value={formData.vegNonVeg}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="veg">Vegetarian</option>
                    <option value="non-veg">Non-Vegetarian</option>
                  </select>
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity (servings) *</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleInputChange}
                  placeholder="e.g., 50"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Preparation & Expiry Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preparation Time *</label>
                  <input
                    type="datetime-local"
                    name="preparationTime"
                    value={formData.preparationTime}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry Time *</label>
                  <input
                    type="datetime-local"
                    name="expiryTime"
                    value={formData.expiryTime}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Pickup Time */}
              <div>
                <label className="block text-sm font-medium mb-2">Preferred Pickup Time *</label>
                <input
                  type="datetime-local"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium mb-2">Pickup Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter complete address for pickup"
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                  required
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Any special instructions or details about the food..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                  rows={3}
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">Food Image</label>
                <div className="rounded-lg border-2 border-dashed border-border p-6 text-center hover:border-primary transition cursor-pointer">
                  <Upload size={24} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Post Donation'}
                </button>
                <Link
                  href="/donor"
                  className="flex-1 rounded-lg border border-border px-4 py-3 font-medium text-center hover:bg-secondary transition"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
