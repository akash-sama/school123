import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Courses from '../components/Courses';
import Locations from '../components/Locations';
import Testimonials from '../components/Testimonials';
import ResultsShowcase from '../components/ResultsShowcase';
import Scholarship from '../components/Scholarship';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import { useNavigation } from '../context/NavigationContext';
import { ChevronRight } from 'lucide-react';

const Home: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div className="relative w-full overflow-hidden animate-fade-in-up">
      
      {/* === GLOBAL ANIMATED BACKGROUND === */}
      {/* This background is fixed and covers the entire viewport. 
          It is prominently visible in the transparent Hero section 
          and gets muted by the frosted glass wrapper of the content below. */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-slate-50 dark:bg-navy-900 transition-colors duration-500">
          {/* Top Right Blob - Teal/Cyan */}
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-teal-400/20 dark:bg-teal-600/10 rounded-full blur-[120px] animate-float opacity-70"></div>
          
          {/* Bottom Left Blob - Navy/Blue */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-500/20 dark:bg-blue-800/20 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: '2s', animationDuration: '15s' }}></div>
          
          {/* Center/Top Blob - Gold Accent */}
          <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-gold-400/15 dark:bg-gold-500/5 rounded-full blur-[100px] animate-pulse opacity-50" style={{ animationDuration: '8s' }}></div>

          {/* Subtle Grid Overlay for Texture */}
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Hero Section - Completely transparent to show the background fully */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Content Wrapper - Creates the "Subtle Merge" effect */}
      {/* The frosted glass effect (backdrop-blur) and semi-transparent background mute the vibrant colors behind */}
      <div className="relative z-20 bg-slate-50/80 dark:bg-navy-950/80 backdrop-blur-xl border-t border-white/20 dark:border-navy-700 shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.1)] rounded-t-[2.5rem] mt-[-2rem]">
        
        {/* Components */}
        <Stats />
        <ResultsShowcase />
        <Courses />
        <Features /> {/* Infrastructure */}
        <Scholarship />
        <Testimonials />
        <Locations />
        <FAQ />
        
        {/* Final CTA Banner */}
        <section className="py-20 bg-teal text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-navy/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Ready to Transform <br/>Your Success?
                </h2>
                <p className="text-teal-50 text-xl mb-8 max-w-lg leading-relaxed">
                  Admissions closing soon for the upcoming session. Join the league of toppers and secure your future with Apex.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                     <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                     Last few seats left for Samarth Batch
                  </div>
                </div>
              </div>

              <div className="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl">
                 <h3 className="text-2xl font-bold text-navy mb-6">Request Callback</h3>
                 <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thanks! We will contact you shortly."); }}>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Student Name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-teal focus:outline-none" />
                      <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-teal focus:outline-none" />
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-teal focus:outline-none" />
                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-teal focus:outline-none text-slate-500">
                       <option>Select Course Interest</option>
                       <option>JEE (Engineering)</option>
                       <option>NEET (Medical)</option>
                       <option>Foundation (8-10)</option>
                    </select>
                    <Button className="w-full text-lg py-3">
                      Apply Now <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                 </form>
                 <p className="text-center text-xs text-slate-400 mt-4">
                   By submitting, you agree to our privacy policy.
                 </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;