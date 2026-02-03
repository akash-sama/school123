import React from 'react';
import Section from './Section';
import { INFRASTRUCTURE } from '../constants';
import Button from './Button';
import { useNavigation } from '../context/NavigationContext';

const Features: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <Section id="infrastructure" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4">
          World-Class Infrastructure
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          An environment designed to foster focus, discipline, and academic excellence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {INFRASTRUCTURE.map((feature, idx) => (
          <div 
            key={idx}
            className="group p-6 bg-white dark:bg-navy-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-navy-700 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-navy/5 dark:bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white dark:group-hover:bg-gold dark:group-hover:text-navy-900 transition-colors duration-300">
              <feature.icon className="w-7 h-7 text-navy dark:text-gold group-hover:text-white dark:group-hover:text-navy-900" />
            </div>
            <h3 className="text-xl font-bold text-navy dark:text-white mb-3">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" onClick={() => navigateTo('about')}>
          Take a Virtual Tour
        </Button>
      </div>
    </Section>
  );
};

export default Features;