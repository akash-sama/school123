import React from 'react';
import Section from './Section';
import { FACULTY } from '../constants';

const Faculty: React.FC = () => {
  return (
    <Section id="faculty">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4">
          Learn from the Masters
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Our faculty consists of IITians, Doctors, and seasoned educators with decades of experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FACULTY.map((member) => (
          <div key={member.id} className="group relative overflow-hidden rounded-xl bg-white dark:bg-navy-800 shadow-md">
            <div className="aspect-square bg-slate-200 dark:bg-navy-700 overflow-hidden">
               <img 
                 src={member.imageUrl} 
                 alt={member.name}
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 loading="lazy"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">"{member.subject} is not just a subject, it's a way of thinking."</p>
               </div>
            </div>
            <div className="p-4 relative">
              <h3 className="font-bold text-navy dark:text-white text-lg">{member.name}</h3>
              <p className="text-gold text-sm font-medium">{member.role}</p>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex justify-between items-center">
                 <span>{member.subject}</span>
                 <span className="px-2 py-0.5 bg-slate-100 dark:bg-navy-900 rounded-full">{member.experience}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Faculty;
