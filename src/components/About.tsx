// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="retro-section">
      <div className="retro-container">
        <h2 className="section-title">
          [ SYSTEM PROFILE ]
        </h2>
        
        <div className="retro-card">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-retro-green mb-4">// About Me</h3>
                <p className="mb-4">
                  I'm an ICT student specializing in <span className="text-retro-green">Data Engineering and AI</span>, 
                  with a background in software development through internships. I have hands-on experience in 
                  Python, SQL, ETL pipelines, and cloud-based data platforms from both coursework and projects.
                </p>
                <p className="mb-4">
                  I've contributed to data-driven projects, including dashboards and real-time monitoring systems, 
                  where I collected, aggregated, and analyzed metrics to support decision-making.
                </p>
                <p>
                  I'm eager to apply my analytical and coding skills to build and optimize real-world software solutions.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-retro-green mb-2">// Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Active & Available</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-retro-green mb-2">// Focus Areas</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="text-retro-green">▶</span>
                      <span>Data Engineering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-retro-green">▶</span>
                      <span>AI/ML Systems</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-retro-green">▶</span>
                      <span>Federated Learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-retro-green">▶</span>
                      <span>Real-time Analytics</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-retro-green mb-2">// Mode</h4>
                  <div className="inline-block px-3 py-1 bg-retro-green/10 border border-retro-green rounded text-sm">
                    LEARNING & BUILDING
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;