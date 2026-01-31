// src/components/ui/Hero.tsx
import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';

const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const { theme } = useTheme();
  
  const texts = [
    "DATA ENGINEER",
    "AI DEVELOPER", 
    "FEDERATED LEARNING",
    "TURKU UAS ICT"
  ];

  useEffect(() => {
    let currentIndex = 0;
    const currentText = texts[textIndex];
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentText.length) {
        setDisplayText(currentText.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayText('');
          setIsTyping(true);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [textIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean background with subtle gradient */}
      <div className={`absolute inset-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-950' 
          : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Subtle grid pattern */}
        <div className={`absolute inset-0 ${
          theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'
        }`} style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${
            theme === 'dark' ? '#4b5563' : '#9ca3af'
          } 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/20 to-transparent' 
              : 'bg-gradient-to-br from-purple-100/50 to-transparent'
          } blur-3xl`}></div>
          
          {/* Square */}
          <div className={`absolute -bottom-40 -left-40 w-96 h-96 ${
            theme === 'dark'
              ? 'bg-gradient-to-tr from-amber-900/10 to-transparent'
              : 'bg-gradient-to-tr from-amber-100/40 to-transparent'
          } blur-3xl`}></div>
          
          {/* Triangle */}
          <div className={`absolute top-1/2 left-1/3 w-64 h-64 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-blue-900/15 to-transparent'
              : 'bg-gradient-to-br from-blue-100/30 to-transparent'
          } blur-3xl`} style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-12 ${
          theme === 'dark'
            ? 'bg-gray-800/50 backdrop-blur-sm border border-gray-700'
            : 'bg-white/50 backdrop-blur-sm border border-gray-300'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            theme === 'dark' ? 'bg-green-400' : 'bg-green-500'
          } animate-pulse`}></div>
          <span className={`text-sm font-mono ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            AVAILABLE FOR INTERNSHIPS
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">VAIDEHI</span>
            <span className="block mt-2">JOSHI</span>
          </h1>
          
          <div className={`text-lg md:text-xl font-light mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Data Engineering & AI • </span>
            <span>Turku University of Applied Sciences</span>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl ${
            theme === 'dark'
              ? 'bg-gray-800/30 backdrop-blur-sm border border-gray-700/50'
              : 'bg-white/30 backdrop-blur-sm border border-gray-300/50'
          }`}>
            <div className={`font-mono text-sm ${
              theme === 'dark' ? 'text-amber-400' : 'text-violet-600'
            }`}>
              &gt;&gt;
            </div>
            <div className="flex items-center">
              <span className={`font-mono text-lg md:text-xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {displayText}
              </span>
              <span className={`inline-block w-[2px] h-6 ml-2 ${
                isTyping 
                  ? theme === 'dark' ? 'bg-amber-400' : 'bg-violet-600'
                  : 'transparent'
              } animate-pulse`}></span>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
          {[
            { label: 'Data Engineering', value: 'Expert' },
            { label: 'AI/ML', value: 'Advanced' },
            { label: 'Web Development', value: 'Proficient' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all hover:scale-105 ${
                theme === 'dark'
                  ? 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                  : 'border-gray-300 bg-white/30 hover:border-gray-400'
              }`}
            >
              <div className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{stat.value}</div>
              <div className={`text-xs mt-1 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className={`px-8 py-3 rounded-full font-medium transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:shadow-amber-500/20'
                : 'bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/20'
            }`}
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className={`px-8 py-3 rounded-full font-medium border transition-all hover:scale-105 ${
              theme === 'dark'
                ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-800/30'
                : 'border-gray-400 text-gray-700 hover:border-gray-500 hover:bg-gray-100/50'
            }`}
          >
            View Experience
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className={`flex flex-col items-center gap-1 ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
          }`}>
            <span className="text-xs font-mono tracking-wider">EXPLORE</span>
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;