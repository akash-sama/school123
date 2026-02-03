import React, { useState } from 'react';
import Section from './Section';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-navy dark:text-white mb-4">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index}
            className="border border-slate-200 dark:border-navy-700 rounded-lg bg-white dark:bg-navy-800 overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-navy dark:text-slate-200 pr-4">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-teal flex-shrink-0" />
              ) : (
                <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
              )}
            </button>
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
              }`}
            >
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
