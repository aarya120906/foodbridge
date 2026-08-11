'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface DashboardSidebarProps {
  role: 'donor' | 'ngo' | 'volunteer' | 'admin';
}

export function DashboardSidebar({ role }: DashboardSidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems: Record<string, NavItem[]> = {
    donor: [
      { label: 'Dashboard', href: '/donor', icon: <LayoutDashboard size={20} /> },
      { label: 'Add Donation', href: '/donor/add-donation', icon: <Package size={20} /> },
      { label: 'My Donations', href: '/donor/donations', icon: <Package size={20} /> },
      { label: 'Analytics', href: '/donor/analytics', icon: <BarChart3 size={20} /> },
      { label: 'Profile', href: '/donor/profile', icon: <Users size={20} /> },
    ],
    ngo: [
      { label: 'Dashboard', href: '/ngo', icon: <LayoutDashboard size={20} /> },
      { label: 'Browse Donations', href: '/ngo/donations', icon: <Package size={20} /> },
      { label: 'Accepted Items', href: '/ngo/accepted', icon: <Truck size={20} /> },
      { label: 'Reports', href: '/ngo/reports', icon: <BarChart3 size={20} /> },
      { label: 'Profile', href: '/ngo/profile', icon: <Users size={20} /> },
    ],
    volunteer: [
      { label: 'Dashboard', href: '/volunteer', icon: <LayoutDashboard size={20} /> },
      { label: 'Assigned Pickups', href: '/volunteer/pickups', icon: <Truck size={20} /> },
      { label: 'Completed', href: '/volunteer/completed', icon: <Package size={20} /> },
      { label: 'Points & Badges', href: '/volunteer/rewards', icon: <BarChart3 size={20} /> },
      { label: 'Profile', href: '/volunteer/profile', icon: <Users size={20} /> },
    ],
    admin: [
      { label: 'Dashboard', href: '/admin', icon: <LayoutDashboard size={20} /> },
      { label: 'Users', href: '/admin/users', icon: <Users size={20} /> },
      { label: 'Donations', href: '/admin/donations', icon: <Package size={20} /> },
      { label: 'Verifications', href: '/admin/verify', icon: <BarChart3 size={20} /> },
      { label: 'Reports', href: '/admin/reports', icon: <BarChart3 size={20} /> },
    ],
  };

  const items = navItems[role] || [];

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 md:hidden rounded-full bg-primary p-3 text-primary-foreground shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0 top-0 z-30 h-screen w-64 border-r border-border bg-sidebar md:translate-x-0 md:static"
      >
        <div className="flex h-16 items-center border-b border-sidebar-border px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground font-bold">
              FB
            </div>
            <span className="font-bold">FoodBridge</span>
          </Link>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-6">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div className="border-t border-sidebar-border space-y-1 p-4">
          <Link
            href="/settings"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Settings size={20} />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </motion.aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
