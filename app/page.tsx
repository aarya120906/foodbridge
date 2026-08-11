'use client';

import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Users, Zap, TrendingUp, Heart, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 mb-6">
              <p className="text-sm font-medium text-primary">🌱 Save Food. Save Lives.</p>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-6">
              Community Food Sharing, Made Simple
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
              Connect food donors with NGOs and volunteers to reduce food waste and feed people in need. Together, we&apos;re building a more sustainable community.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/register"
                className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90 transition flex items-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-lg border border-border px-8 py-3 font-medium hover:bg-secondary transition"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">45K+</p>
                <p className="text-sm text-muted-foreground mt-2">Meals Saved</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">234</p>
                <p className="text-sm text-muted-foreground mt-2">Active Donations</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">892</p>
                <p className="text-sm text-muted-foreground mt-2">Volunteers</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 py-20 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps to make a difference in your community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Donors List Food',
                description: 'Restaurants, bakeries, and individuals post available food donations',
                icon: <Users size={28} />,
              },
              {
                step: '2',
                title: 'NGOs & Volunteers Browse',
                description: 'Browse nearby donations and apply to collect or support distribution',
                icon: <Globe size={28} />,
              },
              {
                step: '3',
                title: 'Make an Impact',
                description: 'Reduce waste, feed those in need, and build a stronger community',
                icon: <Heart size={28} />,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-lg border border-border bg-card p-8 relative"
              >
                <div className="absolute -top-5 left-8 rounded-full bg-primary px-3 py-1 font-bold text-primary-foreground text-sm">
                  {item.step}
                </div>
                <div className="mt-4 mb-4 text-primary">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-secondary/30">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose FoodBridge?</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Real-Time Updates', icon: <Zap size={24} /> },
              { title: 'Location-Based Search', icon: <Globe size={24} /> },
              { title: 'Impact Tracking', icon: <TrendingUp size={24} /> },
              { title: 'Verified Donors & NGOs', icon: <Users size={24} /> },
              { title: 'Volunteer Rewards', icon: <Leaf size={24} /> },
              { title: 'Community Support', icon: <Heart size={24} /> },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg border border-border bg-card p-6 text-center"
              >
                <div className="mb-4 flex justify-center text-primary">{feature.icon}</div>
                <h3 className="font-bold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of donors, NGOs, and volunteers transforming food waste into community care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/register?role=donor"
              className="rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90 transition"
            >
              I&apos;m a Donor
            </Link>
            <Link
              href="/register?role=ngo"
              className="rounded-lg border border-primary px-8 py-3 font-medium hover:bg-primary/10 transition"
            >
              I&apos;m an NGO
            </Link>
            <Link
              href="/register?role=volunteer"
              className="rounded-lg border border-primary px-8 py-3 font-medium hover:bg-primary/10 transition"
            >
              I&apos;m a Volunteer
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 px-4 py-12">
        <div className="mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {[
            {
              title: 'Product',
              links: ['How It Works', 'Features', 'Pricing'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers'],
            },
            {
              title: 'Resources',
              links: ['Documentation', 'API', 'Support'],
            },
            {
              title: 'Legal',
              links: ['Privacy', 'Terms', 'Contact'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 FoodBridge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
