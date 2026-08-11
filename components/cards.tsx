'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
  color?: 'primary' | 'accent' | 'secondary';
}

export function StatCard({
  title,
  value,
  subtitle,
  trend,
  icon,
  color = 'primary',
}: StatCardProps) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    accent: 'bg-accent/10 text-accent',
    secondary: 'bg-secondary/10 text-secondary',
  };

  return (
    <motion.div
      whileHover={{ translateY: -2 }}
      className="rounded-lg border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <h3 className="text-3xl font-bold">{value}</h3>
            {trend && (
              <div
                className={`flex items-center gap-1 text-sm font-medium ${
                  trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {trend === 'up' ? '+12%' : '-5%'}
              </div>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {icon && (
          <div className={`rounded-lg p-3 ${colorClasses[color]}`}>
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
}

interface FoodItemCardProps {
  foodName: string;
  category: string;
  quantity: number;
  expiryTime: Date;
  location: string;
  donor?: string;
  veg?: boolean;
  onAction?: () => void;
  actionLabel?: string;
}

export function FoodItemCard({
  foodName,
  category,
  quantity,
  expiryTime,
  location,
  donor,
  veg,
  onAction,
  actionLabel = 'View Details',
}: FoodItemCardProps) {
  const minutesUntilExpiry = Math.floor(
    (expiryTime.getTime() - Date.now()) / (1000 * 60)
  );
  const isExpiringSoon = minutesUntilExpiry < 120;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-card-foreground">{foodName}</h4>
            {veg !== undefined && (
              <span className={`text-xs px-2 py-1 rounded-full ${
                veg
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {veg ? 'Veg' : 'Non-Veg'}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">{category}</p>
        </div>
        <div className={`text-right ${isExpiringSoon ? 'text-red-600' : 'text-green-600'}`}>
          <p className="font-bold">{quantity}</p>
          <p className="text-xs">servings</p>
        </div>
      </div>

      <div className="mt-3 space-y-2 border-t border-border pt-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Location:</span>
          <span className="font-medium">{location}</span>
        </div>
        {donor && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Donor:</span>
            <span className="font-medium">{donor}</span>
          </div>
        )}
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Expires in:</span>
          <span className={`font-medium ${isExpiringSoon ? 'text-red-600' : ''}`}>
            {minutesUntilExpiry < 60
              ? `${minutesUntilExpiry}m`
              : `${Math.floor(minutesUntilExpiry / 60)}h`}
          </span>
        </div>
      </div>

      {onAction && (
        <button
          onClick={onAction}
          className="mt-4 w-full rounded-lg bg-primary py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
}

interface VolunteerCardProps {
  name: string;
  points: number;
  completedPickups: number;
  badges: string[];
  onViewProfile?: () => void;
}

export function VolunteerCard({
  name,
  points,
  completedPickups,
  badges,
  onViewProfile,
}: VolunteerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-lg border border-border bg-card p-4 shadow-sm"
    >
      <h4 className="font-semibold">{name}</h4>
      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-lg bg-primary/10 p-3">
          <p className="text-xs text-muted-foreground">Points</p>
          <p className="mt-1 font-bold text-primary">{points}</p>
        </div>
        <div className="rounded-lg bg-accent/10 p-3">
          <p className="text-xs text-muted-foreground">Pickups</p>
          <p className="mt-1 font-bold text-accent">{completedPickups}</p>
        </div>
      </div>
      {badges.length > 0 && (
        <div className="mt-3">
          <p className="text-xs font-medium text-muted-foreground mb-2">Badges</p>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="text-xs bg-secondary px-2 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      )}
      {onViewProfile && (
        <button
          onClick={onViewProfile}
          className="mt-4 w-full rounded-lg border border-primary bg-transparent py-2 text-sm font-medium text-primary hover:bg-primary/10 transition"
        >
          View Profile
        </button>
      )}
    </motion.div>
  );
}
