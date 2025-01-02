import React, { useState, useEffect } from 'react';
import { ChartData } from '../types';
import { generateDailyData } from '../utils/chartData';

export default function Chart() {
  const [timeRange, setTimeRange] = useState<'24h' | '7d'>('24h');
  const [chartData, setChartData] = useState<ChartData[]>([]);
  
  useEffect(() => {
    setChartData(generateDailyData(timeRange === '24h' ? 1 : 7));
  }, [timeRange]);

  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-500">
          Range: {minValue}% - {maxValue}%
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange('24h')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              timeRange === '24h'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            24h
          </button>
          <button
            onClick={() => setTimeRange('7d')}
            className={`px-3 py-1 rounded-md text-sm transition-colors ${
              timeRange === '7d'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            7 days
          </button>
        </div>
      </div>
      
      <div className="h-64 flex items-end gap-px">
        {chartData.map((data, index) => (
          <div
            key={data.timestamp}
            className="flex-1 flex flex-col items-center group relative"
          >
            <div
              className="w-full bg-blue-500 hover:bg-blue-600 rounded-t transition-all duration-200"
              style={{
                height: `${(data.value / 100) * 100}%`,
                transition: 'height 0.3s ease'
              }}
            />
            {(index % (timeRange === '24h' ? 4 : 24) === 0) && (
              <span className="text-xs text-gray-500 mt-2 rotate-45 origin-left whitespace-nowrap">
                {data.timestamp}
              </span>
            )}
            <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {data.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}