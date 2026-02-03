import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GraduationCap, ChevronDown } from 'lucide-react';
import { NAV_MENU } from '../constants';
import Button from './Button';
import { useNavigation } from '../context/NavigationContext';

interface HeaderProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    navigateTo(page as any);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-navy-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white/50 dark:bg-navy-900/50 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="flex items-center gap-2 group z-50">
            <div className="p-2 bg-navy dark:bg-gold rounded-lg shadow-md group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-white dark:text-navy-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-navy dark:text-white leading-none tracking-tight">APEX</span>
              <span className="text-xs font-medium text-gold tracking-widest uppercase">Institute</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
               onClick={() => handleNavClick('home')}
               className="text-sm font-medium text-slate-700 hover:text-navy dark:text-slate-200 dark:hover:text-gold transition-colors"
            >
              Home
            </button>
            
            {NAV_MENU.map((section) => (
              <div 
                key={section.title} 
                className="relative group"
                onMouseEnter={() => setActiveDropdown(section.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-navy dark:text-slate-200 dark:hover:text-gold transition-colors py-2"
                >
                  {section.title}
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 transition-all duration-200 ${
                    activeDropdown === section.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-white dark:bg-navy-800 rounded-xl shadow-xl border border-slate-100 dark:border-navy-700 overflow-hidden p-2">
                    {section.items.map((item) => (
                      <a
                        key={item.label}
                        href="#"
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        className="block px-4 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-navy-700 transition-colors"
                      >
                        <div className="text-sm font-semibold text-navy dark:text-white">{item.label}</div>
                        {item.description && (
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Button size="sm" variant="primary" onClick={() => handleNavClick('login')}>
              Student Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300"
            >
               {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navy dark:text-white"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-navy-900 shadow-xl border-t dark:border-navy-800 overflow-y-auto max-h-[85vh] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'hidden opacity-0'
        }`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-lg font-bold text-navy dark:text-gold">Home</a>
          
          {NAV_MENU.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">{section.title}</h3>
              <div className="pl-4 space-y-3 border-l-2 border-slate-100 dark:border-navy-700">
                {section.items.map((item) => (
                   <a 
                     key={item.label}
                     href="#"
                     onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                     className="block text-base font-medium text-slate-700 dark:text-slate-200"
                   >
                     {item.label}
                   </a>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-100 dark:border-navy-700 space-y-3">
            <Button className="w-full" onClick={() => handleNavClick('login')}>Student Login</Button>
            <Button variant="outline" className="w-full" onClick={() => handleNavClick('admissions')}>Request Demo</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;