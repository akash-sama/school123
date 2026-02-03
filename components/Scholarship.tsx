import React from 'react';
import Section from './Section';
import Button from './Button';
import { Target, Trophy, Clock } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Scholarship: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <Section id="scholarship" className="bg-gradient-to-br from-navy to-navy-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apex Scholarship Admission Test (ASAT)</h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Talent should never face a financial barrier. Prove your potential and win scholarships up to 100% on tuition fees.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
               <div className="p-3 bg-white/10 rounded-lg">
                 <Trophy className="w-6 h-6 text-gold" />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Merit-Based Rewards</h4>
                 <p className="text-slate-400 text-sm">Up to 90% scholarship for top performers and 100% for Olympiad qualifiers.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="p-3 bg-white/10 rounded-lg">
                 <Target className="w-6 h-6 text-teal" />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Instant Evaluation</h4>
                 <p className="text-slate-400 text-sm">Get detailed performance analysis and AIR prediction instantly.</p>
               </div>
            </div>
          </div>

          <Button variant="primary" size="lg" className="bg-gold text-navy-900 hover:bg-white" onClick={() => navigateTo('admissions')}>
             Register for ASAT
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
           <h3 className="text-xl font-bold mb-6 text-center border-b border-white/20 pb-4">Test Schedule</h3>
           <div className="space-y-4">
              <div className="flex justify-between items-center bg-navy-900/50 p-4 rounded-lg">
                 <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal" />
                    <span>Every Sunday</span>
                 </div>
                 <span className="font-bold">10:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between items-center bg-navy-900/50 p-4 rounded-lg">
                 <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal" />
                    <span>Duration</span>
                 </div>
                 <span className="font-bold">3 Hours</span>
              </div>
              <div className="flex justify-between items-center bg-navy-900/50 p-4 rounded-lg">
                 <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-teal" />
                    <span>Mode</span>
                 </div>
                 <span className="font-bold">Online & Offline</span>
              </div>
           </div>
           <p className="text-center text-xs text-slate-400 mt-6">
             *Registration fee of ₹500 is applicable. Free for NTSE scholars.
           </p>
        </div>
      </div>
    </Section>
  );
};

export default Scholarship;