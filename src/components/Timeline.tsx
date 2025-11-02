import React from 'react';
import { Info } from 'lucide-react';
import { timelineStats } from '../data/mockData';

const Timeline: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-start py-4">
      {timelineStats.map((stat, index) => (
        <div key={index} className="text-center md:text-left md:border-l-2 border-gray-300 pl-4">
          <div className="flex items-center justify-center md:justify-start gap-1">
            <p className="text-3xl font-bold text-brand-blue">{stat.value}</p>
            <Info size={16} className="text-gray-400 cursor-pointer" />
          </div>
          <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
