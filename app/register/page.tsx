'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function RegisterContent() {
  const searchParams = useSearchParams();
  const initialRole = (searchParams.get('role') || 'donor') as 'donor' | 'ngo' | 'volunteer';
  
  const [role, setRole] = useState<'donor' | 'ngo' | 'volunteer'>(initialRole);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const roleInfo = {
    donor: {
      title: 'Register as a Donor',
      description: 'Start sharing food and making a difference',
      icon: '🍽️',
    },
    ngo: {
      title: 'Register as an NGO',
      description: 'Help distribute food to those in need',
      icon: '🤝',
    },
    volunteer: {
      title: 'Register as a Volunteer',
      description: 'Contribute your time to help others',
      icon: '💪',
    },
  };

  const current = roleInfo[role];

return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              FB
            </div>
            <span className="font-bold">FoodBridge</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">{current.title}</h1>
          <p className="text-muted-foreground">{current.description}</p>
        </div>

        {/* Role Selection */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 grid grid-cols-3 gap-2"
        >
          {(['donor', 'ngo', 'volunteer'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`py-2 px-3 rounded-lg border transition-all ${
                role === r
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <span className="text-lg block mb-1">
                {roleInfo[r].icon}
              </span>
              <span className="text-xs font-medium capitalize">{r}</span>
            </button>
          ))}
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91-98765-43210"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block text-sm font-medium mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your address"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
              rows={2}
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </motion.div>

          {/* Confirm Password */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-card px-4 py-2 outline-none focus:ring-2 focus:ring-primary text-sm"
              required
            />
          </motion.div>

          {/* Terms */}
          <motion.label
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex items-start gap-2 text-sm"
          >
            <input type="checkbox" className="mt-1" required />
            <span>I agree to the Terms & Conditions and Privacy Policy</span>
          </motion.label>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            type="submit"
            disabled={loading}
            className="w-full mt-6 rounded-lg bg-primary px-4 py-3 font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? 'Creating account...' : 'Create Account'}
            {!loading && <ArrowRight size={18} />}
          </motion.button>
        </form>

        {/* Sign In Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="mt-6 text-center text-sm"
        >
          Already have an account?{' '}
          <Link href="/login" className="text-primary font-medium hover:underline">
            Sign in
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <RegisterContent />
    </Suspense>
  );
}
