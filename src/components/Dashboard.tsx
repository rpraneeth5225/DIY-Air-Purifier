import React from 'react';
import { Wind, Droplets, Thermometer, Gauge } from 'lucide-react';
import SensorCard from './SensorCard';
import Chart from './Chart';
import Controls from './Controls';

const mockData = {
  temperature: 23.5,
  humidity: 65,
  airQuality: 85,
  waterLevel: 75,
  fanSpeed: 2
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Air Purifier Dashboard</h1>
        <p className="text-gray-600">Real-time monitoring and control system</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <SensorCard
          title="Temperature"
          value={`${mockData.temperature}°C`}
          icon={<Thermometer className="w-6 h-6" />}
          color="text-red-500"
        />
        <SensorCard
          title="Humidity"
          value={`${mockData.humidity}%`}
          icon={<Droplets className="w-6 h-6" />}
          color="text-blue-500"
        />
        <SensorCard
          title="Air Quality"
          value={`${mockData.airQuality}%`}
          icon={<Gauge className="w-6 h-6" />}
          color="text-green-500"
        />
        <SensorCard
          title="Water Level"
          value={`${mockData.waterLevel}%`}
          icon={<Wind className="w-6 h-6" />}
          color="text-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Air Quality Trends</h2>
          <Chart />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Controls</h2>
          <Controls fanSpeed={mockData.fanSpeed} />
        </div>
      </div>
    </div>
  );
}