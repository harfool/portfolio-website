import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Smartphone,
  Zap,
  GitBranch,
  Box,
  Layers,
  BookOpen,
  Trophy
} from 'lucide-react';

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="h-6 w-6" />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'React.js', experience: '1+ years' },
        { name: 'JavaScript (ES6+)', experience: '2+ years' },
        { name: 'TypeScript', experience: '6 months' },
        { name: 'HTML5/CSS3', experience: '3+ years' },
        { name: 'Tailwind CSS', experience: '1+ year' },
        { name: 'Responsive Design', experience: '1+ years' },]
    },
    {
      title: 'Backend Development Exposure',
      icon: <Database className="h-6 w-6" />,
      color: 'from-green-500 to-teal-600',
      skills: [
        { name: 'Node.js', experience: '5+ months' },
        { name: 'Express.js', experience: '5+ months' },
        { name: 'MongoDB', experience: '5+ months' },
        { name: 'REST APIs', experience: '5+ month' },
        { name: 'PostgreSQL', experience: '1+ months' },
      ]
    },
   
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 transform ${
                isVisible ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ 
                animationDelay: `${categoryIndex * 200}ms`,
                transitionDelay: `${categoryIndex * 200}ms`
              }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border hover:shadow-xl transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`group p-4 rounded-lg border-2 border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 ${
                        isVisible ? 'animate-bounce-in opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                        transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                      }}
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                        {skill.name}
                      </h4>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.experience}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border transition-all duration-1000 transform ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '800ms' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Continuous Learning</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Always staying updated with the latest technologies and best practices. 
              Currently exploring advanced React and backend development.
            </p>
          </div>

          <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border transition-all duration-1000 transform ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ animationDelay: '1000ms' }}>
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 mr-3">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Problem Solving</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate about solving complex problems with clean, efficient code. 
              Focus on writing maintainable and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
