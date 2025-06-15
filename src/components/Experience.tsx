import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'MetaCap IT Solutions',
      period: 'Dec 2023 - Sep 2024',
      location: 'Bijainagar, Ajmer',
      description: [
        'Developed reusable, scalable UI components in React.js based on Figma designs and WCAG accessibility standards',
        'Translated wireframes and prototypes into pixel-perfect responsive websites, ensuring optimal user experience',
        'Integrated RESTful APIs and managed application state using React Hooks and Context API',
        'Optimized rendering logic with efficient code-splitting, increasing user engagement by 25%',
        'Participated in Agile sprints, collaborating with cross-functional teams to deliver high-quality code deliverables'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Maharishi Dayanand Saraswati University (MDSU)',
      period: 'June 2025',
      description: 'Focused on computer applications, software development, and programming fundamentals'
    }
  ];

  const achievements = [
    {
      title: 'Excellence Award - BCA 2nd Year (2023-24)',
      description: 'Recognized for exceptional technical skills and academic performance'
    },
    {
      title: 'Outstanding Tech Talent Award- BCA 2nd Year (2024-25)',
      description: 'Recognized for exceptional technical skills and academic performance'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Professional Experience
            </h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform origin-top scale-y-0 animate-[scale-y_1.5s_ease-out_0.5s_forwards]"></div>

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 pb-8 group">
                  <div className={`absolute left-2 top-2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform transition-all duration-500 hover:scale-150 hover:bg-purple-600 ${isVisible ? 'animate-pulse' : ''}`}></div>

                  <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4 mr-1 animate-bounce" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                      <span className="font-medium">{exp.company}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex items-start group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                          <span className="text-blue-600 mr-2 mt-1 transform transition-transform duration-300 group-hover:scale-125">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-all duration-300 transform hover:scale-110" style={{ animationDelay: `${techIndex * 100}ms` }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'animate-slide-in-right opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Education */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Education</h3>
            <div className="relative mb-1">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 transform origin-top scale-y-0 animate-[scale-y_1.5s_ease-out_1s_forwards]"></div>

              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 pb-6 group">
                  <div className={`absolute left-2 top-2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 transform transition-all duration-500 hover:scale-150 hover:bg-blue-600 ${isVisible ? 'animate-pulse' : ''}`}></div>

                  <div className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <div className="text-purple-600 dark:text-purple-400 font-medium mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                      {edu.institution}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2 + 1.5}s` }}
                >
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
