import { ChartData } from '../types';

const generateTimeBasedValue = (hour: number, day: number): number => {
  const baseValue = 75; // Base air quality
  const timeOfDayVariation = Math.sin((hour - 12) * Math.PI / 12) * 10; // Daily pattern
  const weekdayEffect = Math.sin((day - 3) * Math.PI / 7) * 5; // Weekly pattern
  const randomVariation = Math.random() * 3; // Reduced random noise
  
  return Math.round(Math.max(0, Math.min(100, baseValue + timeOfDayVariation + weekdayEffect + randomVariation)));
};

export const generateDailyData = (days: number = 1): ChartData[] => {
  const data: ChartData[] = [];
  const now = new Date();
  
  for (let d = days - 1; d >= 0; d--) {
    for (let h = 0; h < 24; h++) {
      const date = new Date(now);
      date.setDate(date.getDate() - d);
      date.setHours(h);
      
      data.push({
        timestamp: date.toLocaleString('en-US', { 
          weekday: 'short',
          hour: 'numeric'
        }),
        value: generateTimeBasedValue(h, date.getDay())
      });
    }
  }
  
  return data;
};