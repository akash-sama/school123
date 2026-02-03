import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8 border-t border-navy-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gold rounded shadow-md">
                  <GraduationCap className="w-5 h-5 text-navy-900" />
                </div>
                <span className="text-xl font-bold">Apex Institute</span>
             </div>
             <p className="text-slate-400 text-sm leading-relaxed">
               Constructing Knowledge, Engineering Success. The leading institute for competitive exam preparation.
             </p>
             <div className="flex gap-4 pt-2">
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigateTo('home')} className="text-slate-400 hover:text-teal transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-slate-400 hover:text-teal transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('faculty')} className="text-slate-400 hover:text-teal transition-colors">Faculty</button></li>
              <li><button onClick={() => navigateTo('results')} className="text-slate-400 hover:text-teal transition-colors">Results</button></li>
              <li><button onClick={() => navigateTo('admissions')} className="text-slate-400 hover:text-teal transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => navigateTo('engineering')} className="text-slate-400 hover:text-white transition-colors">JEE Main & Advanced</button></li>
              <li><button onClick={() => navigateTo('medical')} className="text-slate-400 hover:text-white transition-colors">NEET Medical</button></li>
              <li><button onClick={() => navigateTo('foundation')} className="text-slate-400 hover:text-white transition-colors">Pre-Foundation (8-10)</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-gold mb-4">Head Office</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal shrink-0" />
                <span>Plot No. 45-46, Near Rajendra Place Metro Station, Karol Bagh, New Delhi - 110005</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal shrink-0" />
                <span>+91-11-4733-8820</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal shrink-0" />
                <span>admissions@verbelive.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
           <p>&copy; 2025 Apex Institute of Learning. All rights reserved.</p>
           <div className="flex gap-4 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-300">Privacy Policy</a>
             <a href="#" className="hover:text-slate-300">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;