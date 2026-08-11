'use client';

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: any[];
  title: string;
  height?: number;
}

export function MealsChart({ data, title }: ChartProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis stroke="var(--muted-foreground)" />
          <YAxis stroke="var(--muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="meals"
            stroke="var(--primary)"
            strokeWidth={2}
            dot={{ fill: 'var(--primary)' }}
          />
          <Line
            type="monotone"
            dataKey="waste"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={{ fill: 'var(--accent)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CategoryChart({ data, title }: ChartProps) {
  const colors = [
    'var(--primary)',
    'var(--accent)',
    'var(--chart-3)',
    'var(--chart-4)',
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name}: ${value}`}
            outerRadius={80}
            fill="var(--primary)"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function PerformanceChart({ data, title }: ChartProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis stroke="var(--muted-foreground)" />
          <YAxis stroke="var(--muted-foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
            }}
          />
          <Legend />
          <Bar dataKey="meals" fill="var(--primary)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
