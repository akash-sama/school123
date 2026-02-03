import React from 'react';
import Section from './Section';
import Button from './Button';
import { COURSES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Courses: React.FC = () => {
  const { navigateTo } = useNavigation();

  const handleLearnMore = (id: string) => {
    if (id === 'eng') navigateTo('engineering');
    if (id === 'med') navigateTo('medical');
    if (id === 'fnd') navigateTo('foundation');
  };

  return (
    <Section id="courses" darkBg>
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-navy dark:text-white sm:text-4xl mb-4">
          Structured Learning Paths
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Meticulously designed curriculums for every stage of your academic journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div 
            key={course.id}
            className="group relative bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Top Border Accent */}
            <div className={`absolute top-0 left-0 w-full h-1.5 ${course.color.replace('border-', 'bg-')}`}></div>
            
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-navy dark:text-white group-hover:text-teal transition-colors">{course.title}</h3>
                <p className="text-sm font-semibold text-gold mt-1 uppercase tracking-wide">{course.division}</p>
              </div>
              {course.icon && (
                <div className="p-2 bg-slate-50 dark:bg-navy-700 rounded-lg">
                  <course.icon className="w-6 h-6 text-slate-400 dark:text-slate-500" />
                </div>
              )}
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
              {course.description}
            </p>

            <div className="bg-slate-50 dark:bg-navy-900/50 rounded-xl p-4 mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-wider">
                Batches Available
              </p>
              <ul className="space-y-2">
                {course.batches.map((batch, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm font-medium text-navy dark:text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    {batch}
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              variant="outline" 
              className="w-full justify-between group-hover:bg-navy group-hover:text-white group-hover:border-navy dark:group-hover:bg-gold dark:group-hover:text-navy-900 transition-colors"
              onClick={() => handleLearnMore(course.id)}
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Courses;