// src/components/Footer.tsx
import React from 'react';
import { useTheme } from './context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-retro-border-light dark:border-retro-border-dark py-8">
      <div className="retro-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-retro-green font-bold mb-2">VAIDEHI JOSHI</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} All Rights Reserved | Data Engineering & AI Portfolio
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">SYSTEM</span>
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-green-500' : 'bg-retro-green'}`}></div>
                <span className="text-retro-green text-sm">{theme === 'dark' ? 'ONLINE' : 'ACTIVE'}</span>
              </div>
            </div>
            
            <div className="text-xs text-gray-500 dark:text-gray-500">
              v1.0.0 | Built with React & TypeScript
            </div>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span>Status:</span>
              <span className="text-retro-green">Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;