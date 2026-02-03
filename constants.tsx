import { 
  Brain, Target, Users, BarChart3, Fingerprint, BookOpen, Microscope, 
  GraduationCap, Wifi, Library, MonitorPlay, MessageCircle,
  Shield, Zap, Lightbulb, Heart, Award, Eye
} from 'lucide-react';
import { NavSection, Feature, Course, Stat, FacultyMember, Testimonial, FAQItem, TimelineItem, Value, Leader } from './types';

export const NAV_MENU: NavSection[] = [
  {
    title: 'Institute',
    items: [
      { label: 'About Us', href: 'about', description: 'Our mission, vision and journey' },
      { label: 'Faculty', href: 'faculty', description: 'Meet our expert mentors' },
      { label: 'Results', href: 'results', description: 'Hall of fame and success stories' },
      { label: 'Blog & News', href: 'blog', description: 'Latest updates and study tips' },
    ]
  },
  {
    title: 'Programs',
    items: [
      { label: 'Engineering', href: 'engineering', description: 'JEE Main & Advanced' },
      { label: 'Medical', href: 'medical', description: 'NEET & AIIMS' },
      { label: 'Foundation', href: 'foundation', description: 'Class 8, 9 & 10' },
    ]
  },
  {
    title: 'Admissions',
    items: [
      { label: 'Contact & Admissions', href: 'admissions', description: 'Apply now for 2025' },
      { label: 'Fee Structure', href: 'fees', description: 'Transparent pricing details' },
    ]
  }
];

export const INFRASTRUCTURE: Feature[] = [
  {
    title: 'Biometric Attendance',
    description: 'Automated tracking ensures discipline and keeps parents informed instantly.',
    icon: Fingerprint,
  },
  {
    title: 'Smart Classrooms',
    description: 'Interactive panels and AV systems for immersive learning experiences.',
    icon: MonitorPlay,
  },
  {
    title: 'Digital Library',
    description: '24/7 access to recorded lectures, e-books, and practice papers.',
    icon: Library,
  },
  {
    title: 'Doubt Removal Cells',
    description: 'Dedicated 1-on-1 sessions with expert faculty to clear concepts instantly.',
    icon: MessageCircle,
  },
];

export const COURSES: Course[] = [
  {
    id: 'eng',
    title: 'Engineering Division',
    division: 'JEE Main & Advanced',
    description: 'Rigorous preparation for IIT-JEE focusing on complex problem-solving and conceptual depth.',
    batches: ['Shikhar (Class 11)', 'Samarth (Class 12)'],
    color: 'border-blue-500',
    icon: Brain,
  },
  {
    id: 'med',
    title: 'Medical Division',
    division: 'NEET / AIIMS',
    description: 'Master NCERT and advanced biological concepts with our expert medical faculty.',
    batches: ['Sanjeevani (Class 11)', 'Lakshya (Class 12)'],
    color: 'border-teal-500',
    icon: Microscope,
  },
  {
    id: 'fnd',
    title: 'Foundation Division',
    division: 'Class 8, 9 & 10',
    description: 'Build a rock-solid foundation in Science & Math for Olympiads and future competitive exams.',
    batches: ['Neev (Early Start)'],
    color: 'border-gold',
    icon: BookOpen,
  },
];

export const STATS: Stat[] = [
  { value: '2000+', label: 'Students Enrolled' },
  { value: '95%+', label: 'Success Rate' },
  { value: '15+', label: 'Years Excellence' },
  { value: '50+', label: 'Expert Faculty' },
  { value: '03', label: 'Premium Centers' },
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Dr. R.K. Sharma',
    role: 'HOD Physics',
    subject: 'Physics',
    experience: '20+ Years',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 'f2',
    name: 'Mrs. Anjali Gupta',
    role: 'HOD Chemistry',
    subject: 'Organic Chemistry',
    experience: '18+ Years',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 'f3',
    name: 'Mr. Vikram Singh',
    role: 'Senior Faculty',
    subject: 'Mathematics',
    experience: '15+ Years',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    id: 'f4',
    name: 'Dr. S. Mehta',
    role: 'HOD Biology',
    subject: 'Zoology',
    experience: '22+ Years',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aravind Patel',
    role: 'IIT Bombay (CSE)',
    rank: 'AIR 45',
    content: "Apex's test series and doubt clearing sessions were the game changer for me. The faculty is incredibly supportive.",
  },
  {
    id: 't2',
    name: 'Sneha Reddy',
    role: 'AIIMS Delhi',
    rank: 'AIR 12',
    content: "The disciplined environment and the AI analytics helped me focus on my weak topics. I couldn't have done it without Apex.",
  },
  {
    id: 't3',
    name: 'Rahul Verma',
    role: 'NTSE Scholar',
    content: "Foundation courses here are excellent. They don't just teach for exams, they build real conceptual understanding.",
  },
  {
    id: 't4',
    name: 'Ishaan Malhotra',
    role: 'JEE Main Topper',
    rank: '99.99 %ile',
    content: "The personalized attention in the Samarth batch was exactly what I needed to boost my confidence in Physics.",
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I register for a demo class?",
    answer: "You can click on the 'Request Demo' button at the top of the page. Fill in your details, and our admission team will contact you within 24 hours.",
  },
  {
    question: "Is there a scholarship test?",
    answer: "Yes, we conduct the Apex Scholarship Admission Test (ASAT) every Sunday. You can avail up to 100% scholarship based on performance.",
  },
  {
    question: "Does the institute provide hostel facilities?",
    answer: "We have tied up with premium hostels nearby that provide safe, hygienic, and student-friendly environments with supervision.",
  },
  {
    question: "What is the batch size?",
    answer: "We maintain a strict teacher-student ratio of 1:30 to ensure personalized attention for every student.",
  },
];

export const HISTORY_TIMELINE: TimelineItem[] = [
  { year: '2010', title: 'Inception', description: 'Apex Institute was founded by Dr. R.K. Sharma with a visionary batch of 20 students in a small classroom in Karol Bagh.' },
  { year: '2013', title: 'First Major Success', description: 'Produced our first Top 100 All India Rank (AIR) in JEE Advanced, establishing our reputation for quality.' },
  { year: '2016', title: 'Expansion Phase', description: 'Launched the dedicated Medical Division and inaugurated the South Delhi center to cater to growing demand.' },
  { year: '2019', title: 'Technological Integration', description: 'Introduced AI-driven performance analytics and biometric attendance systems to modernize the learning ecosystem.' },
  { year: '2022', title: 'Hybrid Learning Model', description: 'Seamlessly integrated offline rigor with online resources, launching the Apex Digital Library.' },
  { year: '2024', title: 'Market Leadership', description: 'Recognized as one of Delhi’s premier coaching institutes with over 2000 active enrollments and 3 premium centers.' },
];

export const CORE_VALUES: Value[] = [
  { title: 'Integrity', description: 'Honest guidance, transparent results, and ethical practices in everything we do.', icon: Shield },
  { title: 'Excellence', description: 'A relentless pursuit of academic perfection and operational superiority.', icon: Award },
  { title: 'Innovation', description: 'Constantly evolving our pedagogy with modern teaching methodologies and technology.', icon: Lightbulb },
  { title: 'Student-First', description: 'Every decision we make is centered around the well-being and success of our students.', icon: Heart },
];

export const LEADERSHIP_TEAM: Leader[] = [
  { 
    name: 'Dr. R.K. Sharma', 
    role: 'Founder & Chairman', 
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'With over 25 years of experience in Physics education, Dr. Sharma has mentored over 10,000 students. His vision drives the academic rigor at Apex.'
  },
  { 
    name: 'Mrs. Anjali Gupta', 
    role: 'Academic Director', 
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Former HOD at a prestigious Delhi school, Mrs. Gupta specializes in curriculum design and student psychology, ensuring a balanced learning approach.'
  },
  { 
    name: 'Mr. Vikram Singh', 
    role: 'Head of Operations', 
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'An IIM alumnus who ensures that the institute runs like a well-oiled machine, focusing on infrastructure and student facilities.'
  }
];