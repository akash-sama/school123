import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  darkBg?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, darkBg = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${darkBg ? 'bg-slate-100 dark:bg-slate-800' : 'bg-transparent'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
