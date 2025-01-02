export interface SensorData {
  temperature: number;
  humidity: number;
  airQuality: number;
  waterLevel: number;
  fanSpeed: number;
}

export interface ChartData {
  timestamp: string;
  value: number;
}