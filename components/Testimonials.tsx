import React, { useState, useEffect, useRef } from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const nextIndex = (activeIndex + 1) % TESTIMONIALS.length;
        scrollToIndex(nextIndex);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: 'smooth'
      });
      // State update is handled by onScroll to ensure sync with manual swipes
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const index = Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth);
      if (index !== activeIndex) {
        setActiveIndex(index);
      }
    }
  };

  const next = () => scrollToIndex((activeIndex + 1) % TESTIMONIALS.length);
  const prev = () => scrollToIndex((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Section id="testimonials" darkBg>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4">
          Stories of Transformation
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Real results from students who trusted Apex with their future.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-12">
        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={t.id}
              className="min-w-full snap-center flex justify-center px-4"
            >
              <div className={`bg-white dark:bg-navy-800 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-navy-700 text-center max-w-3xl w-full transition-all duration-500 transform ${activeIndex === idx ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`}>
                 <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-5 h-5 text-gold fill-gold" />
                      ))}
                    </div>
                 </div>
                 <Quote className="w-10 h-10 text-teal/20 mx-auto mb-6" />
                 <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 italic mb-8 leading-relaxed line-clamp-4 md:line-clamp-none">
                   "{t.content}"
                 </p>
                 <div>
                   <h4 className="font-bold text-xl text-navy dark:text-white">{t.name}</h4>
                   <p className="text-teal font-medium">{t.role}</p>
                   {t.rank && (
                     <span className="inline-block mt-2 px-3 py-1 bg-gold/10 text-gold text-xs font-bold rounded-full border border-gold/30">
                       {t.rank}
                     </span>
                   )}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls (Desktop) */}
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-navy-800 rounded-full shadow-lg hover:text-teal transition-colors text-slate-400 z-10 hidden md:block hover:scale-110"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-navy-800 rounded-full shadow-lg hover:text-teal transition-colors text-slate-400 z-10 hidden md:block hover:scale-110"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {TESTIMONIALS.map((_, idx) => (
             <button
               key={idx}
               onClick={() => scrollToIndex(idx)}
               className={`h-2.5 rounded-full transition-all duration-300 ${
                 idx === activeIndex ? 'bg-teal w-8' : 'bg-slate-300 dark:bg-navy-700 w-2.5 hover:bg-teal/50'
               }`}
               aria-label={`Go to testimonial ${idx + 1}`}
             />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;