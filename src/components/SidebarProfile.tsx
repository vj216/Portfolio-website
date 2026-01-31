import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const SidebarProfile: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Name & Title */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Vaidehi Joshi</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Data Engineering & AI Student
        </p>
      </div>

      {/* Short Bio */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
        Passionate about data-driven solutions and AI systems. Building the future of intelligent data processing.
      </p>

      {/* Status */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Available for Internships
        </span>
      </div>

      {/* Contact Links */}
      <div className="space-y-3">
        <a 
          href="https://github.com/vj216" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm">GitHub</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/vaidehi-joshi2006/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span className="text-sm">LinkedIn</span>
        </a>
        
        <a 
          href="mailto:vaidehij2020@gmail.com" 
          className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">Email</span>
        </a>
        
        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
          <Phone className="w-5 h-5" />
          <span className="text-sm">+358 405650313</span>
        </div>
      </div>

      {/* Skills Preview */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-sm font-semibold mb-3">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {['Python', 'SQL', 'React', 'Data Engineering', 'AI/ML'].map((skill) => (
            <span 
              key={skill}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;