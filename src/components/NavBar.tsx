// src/components/NavBar.tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import ThemeToggle from './darkorlightmode';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-lg' 
        : ''
    } ${theme === 'dark' 
        ? 'bg-gray-900/80 border-b border-gray-800' 
        : 'bg-white/80 border-b border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className={`text-xl font-bold transition-colors ${
              theme === 'dark' 
                ? 'text-amber-400 group-hover:text-amber-300' 
                : 'text-violet-600 group-hover:text-violet-500'
            }`}>
              <span className="font-mono tracking-tight">VAIDEHI</span>
              <span className="font-mono ml-2 tracking-tight">JOSHI</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className={`transition-colors ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>SYSTEM</span>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${
                  theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
                } animate-pulse`}></div>
                <span className={`font-mono ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`}>ONLINE</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-1 text-sm font-medium transition-all duration-300 font-mono ${
                  activeSection === item.id
                    ? theme === 'dark' ? 'text-amber-400' : 'text-violet-600'
                    : theme === 'dark' ? 'text-gray-400 hover:text-amber-300' : 'text-gray-600 hover:text-violet-500'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                    theme === 'dark' ? 'bg-amber-400' : 'bg-violet-600'
                  } rounded-full`}></div>
                )}
              </button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;