import React, { useState } from 'react';
import { Fan, Power } from 'lucide-react';

interface ControlsProps {
  fanSpeed: number;
}

const FAN_LEVELS = [
  { level: 0, label: 'Off', color: 'bg-gray-200' },
  { level: 1, label: 'Low', color: 'bg-green-200' },
  { level: 2, label: 'Medium', color: 'bg-yellow-200' },
  { level: 3, label: 'High', color: 'bg-red-200' }
];

export default function Controls({ fanSpeed: initialFanSpeed }: ControlsProps) {
  const [fanSpeed, setFanSpeed] = useState(initialFanSpeed);
  const [isOn, setIsOn] = useState(true);

  const handlePowerToggle = () => {
    if (isOn) {
      if (confirm('Are you sure you want to turn off the air purifier?')) {
        setIsOn(false);
        setFanSpeed(0);
      }
    } else {
      setIsOn(true);
      setFanSpeed(1);
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isOn) {
      setFanSpeed(Number(e.target.value));
    }
  };

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-gray-700">Fan Speed</label>
          <span className={`text-sm px-2 py-1 rounded ${FAN_LEVELS[fanSpeed].color}`}>
            {FAN_LEVELS[fanSpeed].label}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="3"
          value={fanSpeed}
          disabled={!isOn}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer disabled:opacity-50"
          onChange={handleSpeedChange}
        />
        <div className="flex justify-between mt-1">
          {FAN_LEVELS.map((level) => (
            <span key={level.level} className="text-xs text-gray-500">
              {level.label}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handlePowerToggle}
        className={`w-full py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 ${
          isOn
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        <Power className="w-5 h-5" />
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>

      {!isOn && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm flex items-center gap-2">
          <Fan className="w-4 h-4" />
          Device is currently powered off
        </div>
      )}
    </div>
  );
}