import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      period: '2024 – 2028',
      degree: 'Bachelor of Engineering in Information and Communication Technology (ICT)',
      institution: 'Turku University of Applied Sciences',
      details: [
        'Majoring in Data Engineering and AI',
        'Grade average: 4.8/5'
      ],
      tags: ['Data Engineering', 'AI', 'Software Development']
    },
    {
      period: '2022 – 2024',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Pune, Maharashtra, India',
      details: [
        'Science Stream (PCM)',
        'Score: 86%'
      ]
    },
    {
      period: '2022',
      degree: 'Indian Certificate of Secondary Education (ICSE)',
      institution: 'Class X',
      details: [
        'Score: 98%'
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">Education</h2>
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
                <h3 className="text-xl font-semibold mt-1">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
              </div>
            </div>
            
            {edu.details && (
              <ul className="space-y-2 mb-6">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-400 dark:text-gray-500 mr-2 mt-1">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {edu.tags && (
              <div className="flex flex-wrap gap-2">
                {edu.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;