import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Aug 2025 – Present',
      title: 'Data Engineering Intern',
      company: 'INSIGHT Lab, Turku University of Applied Sciences',
      description: 'Contributed to the development of a data-driven monitoring dashboard for a federated learning platform, mainly focusing on real-time ingestion, aggregation, and visualization of distributed training metrics.',
      details: [
        'Developed metrics-based monitoring using Prometheus in a Linux environment',
        'Integrated backend data with dashboard using Python and REST APIs',
        'Ensured accurate and timely retrieval of training and evaluation metrics'
      ],
      tags: ['Python', 'Prometheus', 'REST APIs', 'Linux', 'Data Visualization']
    },
    {
      period: 'Jun 2025 – Aug 2025',
      title: 'Frontend Developer Intern',
      company: 'TheFirma, Turku University of Applied Sciences',
      description: 'Developed frontend features for a kanban-like ticketing system using React and TypeScript.',
      details: [
        'Built reusable UI components and implemented real-time updates using WebSocket',
        'Improved usability and responsiveness of the application',
        'Collaborated with backend developers and designers'
      ],
      tags: ['React', 'TypeScript', 'WebSocket', 'Tailwind CSS']
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.company}</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
            
            {exp.details.length > 0 && (
              <ul className="space-y-2 mb-6">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-400 dark:text-gray-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;