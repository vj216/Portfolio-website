// src/components/ThemeToggle.tsx
import React from 'react';
import { useTheme } from './context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-lg transition-all duration-300 group ${
        theme === 'dark' 
          ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
          : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
      }`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6 overflow-hidden">
        {/* Sun */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === 'dark' 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-6 opacity-0'
        }`}>
          <div className="text-amber-400">☀️</div>
        </div>
        
        {/* Moon */}
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
          theme === 'dark' 
            ? '-translate-y-6 opacity-0' 
            : 'translate-y-0 opacity-100'
        }`}>
          <div className="text-violet-600">🌙</div>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs font-mono transition-opacity duration-200 opacity-0 group-hover:opacity-100 ${
        theme === 'dark' 
          ? 'bg-gray-800 text-gray-300' 
          : 'bg-gray-100 text-gray-700'
      }`}>
        {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
      </div>
    </button>
  );
};

export default ThemeToggle;