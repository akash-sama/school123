import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string; // Used as page ID
  description?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Course {
  id: string;
  title: string;
  division: string;
  description: string;
  batches: string[];
  color: string;
  icon?: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  subject: string;
  experience: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rank?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
  };
}