import React from 'react';
import Section from './Section';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <Section id="locations" className="bg-slate-50 dark:bg-navy-900/50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4">
          Our Centers
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          State-of-the-art learning centers located conveniently across Delhi.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Head Office Card - Featured */}
        <div className="lg:col-span-1 lg:-mt-4 relative bg-navy dark:bg-navy-800 rounded-2xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>
          <div className="p-8 h-full flex flex-col text-white">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-gold text-navy-900 text-xs font-bold rounded-full mb-2">HEAD OFFICE</span>
              <h3 className="text-2xl font-bold">Karol Bagh</h3>
              <p className="text-slate-300 text-sm mt-1">Central Delhi Campus</p>
            </div>
            
            <div className="space-y-6 flex-grow">
               <div className="flex gap-4">
                 <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                 <p className="text-sm text-slate-200 leading-relaxed">
                   Plot No. 45-46, Near Rajendra Place Metro Station,<br/>Karol Bagh, New Delhi - 110005
                 </p>
               </div>
               <div className="flex gap-4">
                 <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                 <div className="text-sm">
                   <p className="text-white font-medium">+91-11-4733-8820</p>
                   <p className="text-slate-400 text-xs mt-1">Mon-Sun: 7:00 AM - 9:00 PM</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                 <a href="mailto:admissions@verbelive.edu.in" className="text-sm text-slate-200 hover:text-white">
                   admissions@verbelive.edu.in
                 </a>
               </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
               <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                 <ShieldCheck className="w-4 h-4" />
                 Main Admission Center
               </div>
            </div>
          </div>
        </div>

        {/* South Delhi Card */}
        <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg border border-slate-200 dark:border-navy-700 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-2 bg-teal"></div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-navy dark:text-white mb-1">Hauz Khas</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">South Delhi Center</p>
            
            <div className="space-y-4">
               <div className="flex gap-3">
                 <MapPin className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">
                   Building A-12, Opposite Select Citywalk, Hauz Khas, New Delhi - 110016
                 </p>
               </div>
               <div className="flex gap-3">
                 <Phone className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">+91-11-4989-7654</p>
               </div>
               <div className="flex gap-3">
                 <Clock className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">10:00 AM - 8:00 PM</p>
               </div>
            </div>
          </div>
        </div>

        {/* North Delhi Card */}
        <div className="bg-white dark:bg-navy-800 rounded-2xl shadow-lg border border-slate-200 dark:border-navy-700 overflow-hidden hover:shadow-xl transition-shadow">
          <div className="h-2 bg-teal"></div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-navy dark:text-white mb-1">Rohini</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-6">North Delhi Center</p>
            
            <div className="space-y-4">
               <div className="flex gap-3">
                 <MapPin className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">
                   3rd Floor, Vertex Tower, Sector 7, Rohini, New Delhi - 110085
                 </p>
               </div>
               <div className="flex gap-3">
                 <Phone className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">+91-11-4562-1234</p>
               </div>
               <div className="flex gap-3">
                 <Clock className="w-5 h-5 text-teal shrink-0" />
                 <p className="text-sm text-slate-600 dark:text-slate-300">10:00 AM - 8:00 PM</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Locations;