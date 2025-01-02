import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface SensorCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export default function SensorCard({ title, value, icon, color }: SensorCardProps) {
  const [trend] = useState<'up' | 'down' | 'stable'>(
    Math.random() > 0.6 ? 'up' : Math.random() > 0.3 ? 'down' : 'stable'
  );
  const [change] = useState(
    `${trend === 'up' ? '+' : trend === 'down' ? '-' : ''}${Math.round(Math.random() * 5)}${title === 'Temperature' ? '°C' : '%'}`
  );

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gray-50 cursor-pointer">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <span className={color}>{icon}</span>
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-2">{value}</p>
      <div className="flex items-center gap-2 text-sm">
        {getTrendIcon()}
        <span className={`${
          trend === 'up' ? 'text-green-500' :
          trend === 'down' ? 'text-red-500' :
          'text-gray-500'
        }`}>
          {change} since last hour
        </span>
      </div>
    </div>
  );
}