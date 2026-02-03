import React from 'react';
import Section from '../components/Section';
import { HISTORY_TIMELINE, CORE_VALUES, LEADERSHIP_TEAM } from '../constants';
import { Target, Eye, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      
      {/* Hero Header */}
      <div className="bg-navy-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Constructing Knowledge <br/> Since 2010
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From a single classroom to a premier institution, our journey has been defined by one singular goal: 
            <span className="text-gold font-semibold"> Your Success.</span>
          </p>
        </div>
      </div>

      {/* The Apex Story */}
      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-teal/20 rounded-2xl rotate-3 blur-sm"></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=1000" 
              alt="Classroom discussion" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div>
            <div className="inline-block px-3 py-1 bg-navy/10 dark:bg-white/10 text-navy dark:text-gold text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              Our Story
            </div>
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-6">More Than Just Coaching</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              Apex Institute was born out of a realization that traditional schooling often leaves a gap in conceptual understanding required for competitive exams. 
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
              Founded by Dr. R.K. Sharma, we started with a modest batch of 20 students. Today, we are a family of over 2000 learners, driven by a philosophy that combines 
              <span className="font-semibold text-navy dark:text-white"> academic rigor</span> with 
              <span className="font-semibold text-navy dark:text-white"> personal mentorship</span>.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-gold pl-4">
                <h4 className="font-bold text-2xl text-navy dark:text-white">15+</h4>
                <p className="text-slate-500 text-sm">Years of Trust</p>
              </div>
              <div className="border-l-4 border-teal pl-4">
                <h4 className="font-bold text-2xl text-navy dark:text-white">5k+</h4>
                <p className="text-slate-500 text-sm">Alumni Network</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section darkBg>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To empower students with the deep conceptual knowledge and analytical skills required to excel in national-level examinations, fostering a generation of thinkers and problem solvers.
            </p>
          </div>
          <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-md border border-slate-100 dark:border-navy-700 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              To be the most trusted name in education, known not just for producing toppers, but for engineering mindsets that are resilient, innovative, and ethically grounded.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Our Core Values</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The principles that guide every lecture, every test, and every interaction at Apex.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((value, idx) => (
            <div key={idx} className="bg-white dark:bg-navy-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-navy-700 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 bg-teal/10 text-teal rounded-full flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-navy dark:text-white mb-2">{value.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <div className="bg-slate-100 dark:bg-navy-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Milestones of Excellence</h2>
          </div>
          <div className="relative border-l-2 border-slate-300 dark:border-navy-700 ml-4 md:ml-0 md:pl-0 space-y-12">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-navy-700 -translate-x-1/2"></div>
            
            {HISTORY_TIMELINE.map((item, index) => (
              <div key={index} className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center justify-between`}>
                
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-white dark:border-navy-900 shadow-md z-10"></div>
                
                {/* Content Side */}
                <div className="ml-8 md:ml-0 md:w-[45%] mb-2 md:mb-0">
                  <div className={`bg-white dark:bg-navy-800 p-6 rounded-xl shadow-md border border-slate-100 dark:border-navy-700 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <span className="text-teal font-bold text-sm tracking-widest">{item.year}</span>
                    <h3 className="text-xl font-bold text-navy dark:text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Empty Side for Desktop alignment */}
                <div className="hidden md:block md:w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Leadership Team</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Guided by visionaries who have dedicated their lives to education.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div key={idx} className="group bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-navy-700 text-center">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-1">{leader.name}</h3>
                <p className="text-teal font-medium text-sm mb-4 uppercase tracking-wide">{leader.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  "{leader.bio}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Summary */}
      <Section darkBg>
        <div className="bg-gradient-to-r from-navy to-navy-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Why Apex Institute?</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Proven Track Record of 15 Years",
                "Personalized Batch Size (30:1)",
                "Hybrid Learning Ecosystem",
                "Mental Wellness Support",
                "Advanced Testing Platform",
                "Best-in-Class Faculty Retention"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm md:text-base text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default About;