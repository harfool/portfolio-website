import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: 'LeetLab - Online Code Execution Platform',
      description: 'A comprehensive coding platform with real-time code execution, multiple language support, and integrated judge API for coding competitions and practice.',
      tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Prisma ORM'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      github: 'https://github.com/harfool/leetLab',
      live: '#',
      featured: true,
      
    },
    {
      title: 'AI-Powered Code Review & Generation Tool',
      description: 'Intelligent code analysis tool with AI-powered suggestions, automated code review, bug detection, and code generation capabilities using MERN stack.',
      tech: ['MERN', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      github: 'https://github.com/harfool/code-review-ai',
      live: '#',
      featured: true,
      
    },
    {
      title: 'Shri Bala ji Education computer center ',
      description: 'Interactive web application showcasing various technology stacks with detailed comparisons, user preferences, and technology recommendations.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      github: 'https://github.com/harfool/Shri-Bala-ji-Education-computer-center-LMS-',
      live: '#',
      featured: true,
      status: 'Freelancing · Ongoing'
    },
    {
      title: 'Developer Portfolio',
      description: 'Modern, responsive portfolio website with dark/light theme toggle, smooth animations, and optimized performance built with React and Tailwind CSS.',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      github: 'https://github.com/harfool/Harfool_gujjarPortfolio',
      live: '#',
      featured: true,
      status: 'Freelancing · Ongoing'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white dark:bg-gray-700 border-0 shadow-lg overflow-hidden transform hover:scale-105 ${
                isVisible ? 'animate-slide-in-left opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 200}ms`
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg group-hover:shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-gray-900 hover:bg-white transform hover:scale-110 transition-all duration-300"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/90 text-gray-900 hover:bg-white transform hover:scale-110 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-col items-end space-y-1">
                      {project.featured && (
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          Featured
                        </span>
                      )}
                      {project.status && (
                        <span className="text-xs text-blue-500 dark:text-blue-300 italic">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded-md hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 transform hover:scale-110"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 transform hover:scale-105"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
