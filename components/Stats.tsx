import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <div className="bg-navy dark:bg-navy-900 py-16 border-y border-navy-800 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute left-10 top-10 w-20 h-20 rounded-full bg-gold blur-2xl"></div>
        <div className="absolute right-10 bottom-10 w-32 h-32 rounded-full bg-teal blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-navy-700/50">
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center pt-8 md:pt-0 px-2 group">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-semibold text-teal-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;