import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { useNavigation } from '../context/NavigationContext';
import { CheckCircle2 } from 'lucide-react';

interface DivisionPageProps {
  title: string;
  subtitle: string;
  batches: { name: string; grade: string; description: string }[];
  color: string;
  highlight: string;
}

const DivisionLayout: React.FC<DivisionPageProps> = ({ title, subtitle, batches, color, highlight }) => {
  const { navigateTo } = useNavigation();

  return (
    <div className="pt-20 min-h-screen bg-slate-50 dark:bg-slate-900 animate-fade-in-up">
      <div className={`bg-gradient-to-r from-navy to-navy-800 dark:from-navy-900 dark:to-navy-800 text-white py-16 border-b-4 ${color}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-slate-300">{subtitle}</p>
        </div>
      </div>

      <Section>
        <div className="mb-12">
           <h2 className="text-2xl font-bold text-navy dark:text-white mb-6">Program Highlights</h2>
           <div className="p-6 bg-teal/10 rounded-lg border border-teal/20 text-teal-800 dark:text-teal-300 text-lg">
             {highlight}
           </div>
        </div>

        <div className="grid gap-8">
           {batches.map((batch, idx) => (
             <div key={idx} className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1">
                 <div className="flex items-center gap-4 mb-4">
                   <h3 className="text-2xl font-bold text-navy dark:text-white">{batch.name}</h3>
                   <span className="px-3 py-1 bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-300 text-sm font-bold rounded-full">{batch.grade}</span>
                 </div>
                 <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                   {batch.description}
                 </p>
                 <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Comprehensive Study Material
                    </li>
                    <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-teal" /> Regular Testing & Analysis
                    </li>
                 </ul>
               </div>
               <div className="w-full md:w-auto flex flex-col gap-3">
                 <Button onClick={() => navigateTo('admissions')}>Enroll Now</Button>
                 <Button variant="outline" onClick={() => navigateTo('fees')}>View Fees</Button>
               </div>
             </div>
           ))}
        </div>
      </Section>
    </div>
  );
};

export const Engineering: React.FC = () => (
  <DivisionLayout
    title="Engineering Division"
    subtitle="Premier coaching for JEE Main & Advanced"
    color="border-blue-500"
    highlight="Our Engineering division has produced over 250+ IITians in the last 5 years with a focus on deep conceptual understanding of Physics, Chemistry, and Mathematics."
    batches={[
      {
        name: "Shikhar Batch",
        grade: "Class 11",
        description: "Two-year classroom program covering the complete JEE syllabus. Focuses on building strong fundamentals in Class 11 and advanced application in Class 12."
      },
      {
        name: "Samarth Batch",
        grade: "Class 12",
        description: "One-year intensive program for Class 12 students. Fast-paced coverage of Class 12 topics along with revision of Class 11 concepts."
      }
    ]}
  />
);

export const Medical: React.FC = () => (
  <DivisionLayout
    title="Medical Division"
    subtitle="Excellence in NEET & AIIMS Preparation"
    color="border-teal-500"
    highlight="Designed by expert doctors and biologists, our medical curriculum ensures 100% NCERT mastery along with advanced problem-solving skills for competitive edges."
    batches={[
      {
        name: "Sanjeevani Batch",
        grade: "Class 11",
        description: "Two-year integrated program for NEET. Extensive coverage of Biology, Physics, and Chemistry with regular mock tests."
      },
      {
        name: "Lakshya Batch",
        grade: "Class 12",
        description: "One-year targeted program for Class 12 students appearing for NEET. Focuses on speed, accuracy, and rigorous testing."
      }
    ]}
  />
);

export const Foundation: React.FC = () => (
  <DivisionLayout
    title="Foundation Division"
    subtitle="Building a Strong Base for Future Success"
    color="border-gold"
    highlight="Start early to stay ahead. Our foundation courses for Class 8-10 prepare students for NTSE, Olympiads, and future competitive exams like JEE and NEET."
    batches={[
      {
        name: "Neev Batch",
        grade: "Class 8, 9 & 10",
        description: "Holistic development program that strengthens Science and Math concepts while preparing for school exams and talent search examinations."
      }
    ]}
  />
);
