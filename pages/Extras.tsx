import React from 'react';
import Section from '../components/Section';
import { FACULTY } from '../constants';
import { User, Calendar } from 'lucide-react';

export const FacultyPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Our Faculty</h1>
          <p className="text-slate-600 dark:text-slate-300">Meet the mentors behind the success stories.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((member) => (
            <div key={member.id} className="bg-white dark:bg-navy-800 rounded-xl shadow-md overflow-hidden hover:-translate-y-1 transition-transform">
               <img src={member.imageUrl} alt={member.name} className="w-full h-48 object-cover" />
               <div className="p-4">
                  <h3 className="font-bold text-navy dark:text-white text-lg">{member.name}</h3>
                  <p className="text-teal text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{member.experience} Experience</p>
               </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export const Blog: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Blog & News</h1>
          <p className="text-slate-600 dark:text-slate-300">Latest updates, exam tips, and announcements.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white dark:bg-navy-800 rounded-xl shadow-lg overflow-hidden">
               <div className="h-48 bg-slate-200 dark:bg-navy-700"></div>
               <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                     <span className="flex items-center gap-1"><Calendar size={12} /> Oct 12, 2024</span>
                     <span className="flex items-center gap-1"><User size={12} /> Admin</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-white mb-3">5 Tips to Crack JEE Advanced</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...</p>
                  <button className="text-teal font-medium text-sm hover:underline">Read More</button>
               </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export const Results: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      <Section>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy dark:text-white mb-4">Our Results</h1>
          <p className="text-slate-600 dark:text-slate-300">Consistent performance year after year.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
           <div className="bg-navy dark:bg-navy-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">JEE Advanced 2024</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                    <span>Total Selections</span>
                    <span className="text-3xl font-bold text-gold">42</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                    <span>Top 100 AIR</span>
                    <span className="text-3xl font-bold text-gold">3</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-navy-700 pb-2">
                    <span>Top 1000 AIR</span>
                    <span className="text-3xl font-bold text-gold">15</span>
                 </div>
              </div>
           </div>
           
           <div className="bg-teal dark:bg-teal-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6">NEET 2024</h3>
              <div className="space-y-4">
                 <div className="flex justify-between items-end border-b border-teal-700 pb-2">
                    <span>Total Selections</span>
                    <span className="text-3xl font-bold text-white">85</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-teal-700 pb-2">
                    <span>700+ Score</span>
                    <span className="text-3xl font-bold text-white">4</span>
                 </div>
                 <div className="flex justify-between items-end border-b border-teal-700 pb-2">
                    <span>650+ Score</span>
                    <span className="text-3xl font-bold text-white">22</span>
                 </div>
              </div>
           </div>
        </div>
      </Section>
    </div>
  );
};
