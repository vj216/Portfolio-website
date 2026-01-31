import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Data Engineering & Pipelines',
      skills: ['Python', 'SQL', 'ETL Pipelines', 'Airflow', 'Data Wrangling', 'Data Transformation']
    },
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Tailwind CSS', 'Pandas', 'NumPy', 'scikit-learn', 'matplotlib']
    },
    {
      category: 'Platforms & Environments',
      skills: ['Linux', 'Docker', 'Prometheus', 'Git', 'Figma']
    },
    {
      category: 'Languages',
      skills: ['English', 'Hindi', 'Finnish (A2)', 'Marathi']
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;