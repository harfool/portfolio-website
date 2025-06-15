
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Figma to Code', level: 60 },
      ]
    },
    {
      title: 'Backend & Database Exposure',
      skills: [
        { name: 'Node.js', level: 56 },
        { name: 'Express.js', level: 65 },
        { name: 'MongoDB', level: 50 },
        { name: 'PostgreSQL', level: 40 },
        { name: 'REST APIs', level: 60 },
        { name: 'JWT Auth', level: 65 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
        { name: 'Redux', level: 75 },
        { name: 'React Hooks', level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                transitionDelay: `${categoryIndex * 200}ms`
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1500 ease-out transform origin-left hover:shadow-lg hover:shadow-blue-500/50"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
