import React from 'react';
import { ArrowRight, Star, PlayCircle, Zap } from 'lucide-react';
import Button from './Button';
import Section from './Section';
import { useNavigation } from '../context/NavigationContext';

const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <div id="home" className="relative min-h-[90vh] flex items-center pt-24 overflow-visible bg-transparent">
      
      {/* Decorative gradient blur in background specifically for Hero text contrast */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <Section className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typographic Content */}
          <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-navy-800/60 border border-teal/20 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
              <span className="text-sm font-bold text-navy dark:text-teal-300 tracking-wide uppercase">Admissions Open 2025-26</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-navy dark:text-white">
              Constructing <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-800 to-navy-600 dark:from-white dark:to-slate-300">
                Knowledge,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 dark:from-teal-400 dark:via-blue-400 dark:to-purple-400 filter drop-shadow-sm pb-2 block mt-2">
                Engineering Success
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="font-sans text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-light">
              Bridge the gap between school education and competitive excellence. 
              Join New Delhi's premier institute where <span className="font-semibold text-navy dark:text-white">technology meets discipline</span>.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <Button size="lg" className="group text-lg px-8 py-4 shadow-xl shadow-teal/20" onClick={() => navigateTo('admissions')}>
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 backdrop-blur-sm" onClick={() => navigateTo('engineering')}>
                Explore Courses
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 flex items-center gap-8">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map((i) => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 bg-slate-200 dark:bg-navy-700 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="Student" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white dark:border-navy-900 bg-navy text-white flex items-center justify-center text-xs font-bold">
                   2k+
                 </div>
              </div>
              <div className="space-y-1">
                <div className="flex text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-sm font-bold text-navy dark:text-white">Rated 4.9/5 by Students</div>
              </div>
            </div>
          </div>

          {/* Visual Area - 3D Perspective */}
          <div className="lg:col-span-5 relative perspective-1000 hidden lg:block h-[600px] flex items-center justify-center">
            
            {/* Main Floating Card */}
            <div className="relative z-20 w-full max-w-md bg-white/70 dark:bg-navy-800/60 backdrop-blur-xl rounded-3xl p-6 border border-white/40 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out animate-float">
               
               {/* Card Header */}
               <div className="flex items-center justify-between mb-8">
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center shadow-lg">
                      <Zap className="text-white w-6 h-6" />
                   </div>
                   <div>
                     <div className="font-display font-bold text-xl text-navy dark:text-white">Performance</div>
                     <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Real-time Analytics</div>
                   </div>
                 </div>
                 <div className="px-3 py-1 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 text-xs font-bold rounded-full border border-green-200 dark:border-green-500/30">
                   +24% Growth
                 </div>
               </div>

               {/* Graph Representation */}
               <div className="h-40 flex items-end justify-between gap-2 mb-6 px-2">
                  {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-full bg-slate-100 dark:bg-navy-900/50 rounded-t-lg relative group overflow-hidden" style={{ height: '100%' }}>
                       <div 
                         className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-teal-500 to-teal-300 rounded-t-lg transition-all duration-1000 ease-out"
                         style={{ height: `${h}%`, transitionDelay: `${i * 100}ms` }}
                       ></div>
                    </div>
                  ))}
               </div>

               {/* Stats Row */}
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white/50 dark:bg-navy-900/50 rounded-xl p-4 border border-white/50 dark:border-white/5">
                    <div className="text-slate-500 text-xs font-semibold mb-1">Concept Mastery</div>
                    <div className="text-2xl font-display font-bold text-navy dark:text-white">92%</div>
                 </div>
                 <div className="bg-white/50 dark:bg-navy-900/50 rounded-xl p-4 border border-white/50 dark:border-white/5">
                    <div className="text-slate-500 text-xs font-semibold mb-1">Test Rank</div>
                    <div className="text-2xl font-display font-bold text-navy dark:text-white">#14</div>
                 </div>
               </div>
            </div>

            {/* Background Floating Elements for Depth */}
            <div className="absolute top-[10%] -right-[10%] w-64 h-64 bg-gradient-to-bl from-purple-500 to-blue-500 rounded-full blur-[80px] opacity-40 animate-pulse z-0"></div>
            
            <div className="absolute -bottom-10 -left-10 z-30 animate-float-delayed">
               <div className="bg-white dark:bg-navy-700 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-navy-600 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy dark:text-white">Live Class</div>
                    <div className="text-xs text-red-500 font-semibold animate-pulse">● Now Streaming</div>
                  </div>
               </div>
            </div>

            <div className="absolute top-20 -right-5 z-10 animate-float">
               <div className="bg-navy-900 dark:bg-white p-4 rounded-2xl shadow-2xl transform rotate-6 border border-slate-700 dark:border-slate-200">
                  <div className="text-white dark:text-navy-900 font-bold text-lg font-display">AIR 1</div>
                  <div className="text-slate-400 dark:text-slate-500 text-xs">Target Achieved</div>
               </div>
            </div>

          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;