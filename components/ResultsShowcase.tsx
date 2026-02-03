import React from 'react';
import Section from './Section';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { year: '2019', selections: 120 },
  { year: '2020', selections: 145 },
  { year: '2021', selections: 180 },
  { year: '2022', selections: 210 },
  { year: '2023', selections: 250 },
  { year: '2024', selections: 285 },
];

const ResultsShowcase: React.FC = () => {
  return (
    <Section id="results-showcase">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div>
           <div className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-bold rounded-full text-sm mb-4">
             CONSISTENT EXCELLENCE
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6">
             Engineering History, <br/>
             <span className="text-teal">Creating Legacies</span>
           </h2>
           <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
             Year after year, Apex students dominate the leaderboards. Our result-oriented methodology has produced a consistent upward trend in IIT-JEE and NEET selections.
           </p>

           <div className="grid grid-cols-2 gap-6">
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg border-l-4 border-navy">
                <div className="text-3xl font-bold text-navy dark:text-white">285+</div>
                <div className="text-sm text-slate-500">IIT Selections (2024)</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg border-l-4 border-teal">
                <div className="text-3xl font-bold text-teal">85+</div>
                <div className="text-sm text-slate-500">AIIMS/Govt Med Seats</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg border-l-4 border-gold">
                <div className="text-3xl font-bold text-gold">Top 10</div>
                <div className="text-sm text-slate-500">AIR Ranks (Last 5 Years)</div>
             </div>
             <div className="p-4 bg-slate-50 dark:bg-navy-800 rounded-lg border-l-4 border-navy">
                <div className="text-3xl font-bold text-navy dark:text-white">100%</div>
                <div className="text-sm text-slate-500">Board Pass Rate</div>
             </div>
           </div>
        </div>

        {/* Graph Visual */}
        <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-navy-700">
           <h3 className="text-lg font-bold text-navy dark:text-white mb-6">Growth in Selections (Year on Year)</h3>
           <div className="h-64 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={data}>
                 <defs>
                   <linearGradient id="colorSelections" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#D4A574" stopOpacity={0.8}/>
                     <stop offset="95%" stopColor="#D4A574" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <XAxis dataKey="year" stroke="#94a3b8" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                 <Tooltip 
                    contentStyle={{ backgroundColor: '#1E293B', borderColor: '#334155', color: '#fff', borderRadius: '8px' }}
                    itemStyle={{ color: '#D4A574' }}
                 />
                 <Area 
                    type="monotone" 
                    dataKey="selections" 
                    stroke="#D4A574" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorSelections)" 
                 />
               </AreaChart>
             </ResponsiveContainer>
           </div>
           <p className="text-center text-xs text-slate-400 mt-4">
             *Combined selections in JEE Main, JEE Advanced & NEET
           </p>
        </div>

      </div>
    </Section>
  );
};

export default ResultsShowcase;