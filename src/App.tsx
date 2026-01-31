import React from 'react';
import { ThemeProvider } from './components/context/themeProvider';
import Cursor from './components/Cursor';
import FallingStars from './components/FallingStars';
import SidebarProfile from './components/SidebarProfile';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Cursor />
        <FallingStars />
        
        <div className="relative z-10 container max-w-6xl mx-auto px-4 py-12 md:grid md:grid-cols-4 md:gap-12">
          {/* Sidebar - Fixed Profile */}
          <aside className="md:col-span-1 md:sticky md:top-12 h-fit mb-12 md:mb-0">
            <SidebarProfile />
          </aside>
          
          {/* Main Content - Scrollable */}
          <main className="md:col-span-3 space-y-16">
            {/* Intro Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6">Hey there! 👋</h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm an ICT student specializing in Data Engineering and AI, with a background in software
                  development through internships. I have hands-on experience in Python, SQL, ETL pipelines, and
                  cloud-based data platforms from both coursework and projects. I have contributed to data-driven
                  projects, including dashboards and real-time monitoring systems, where I collected, aggregated,
                  and analyzed metrics to support decision-making.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                  I'm eager to apply my analytical and coding skills to build and optimize real-world software solutions.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <Experience />
            
            {/* Education Section */}
            <Education />
            
            {/* Skills Section */}
            <Skills />
            
            {/* Contact Section */}
            <Contact />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;