
import React from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const img = './public/img.jpg';
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

   const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "./public/HarfoolGujjarResume2025.pdf";
  link.setAttribute("download", "Harfool_Gujjar_Resume.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br rounded-full flex items-center justify-center text-white text-4xl font-bold animate-float">
               { img && <img src={img} className="w-full h-full rounded-full" alt="" /> }
                <img src="https://dqy38fnwh4fqs.cloudfront.net/UHR86P8ELA7GRKB1RD7D68A97QDB/hr86p8ela7grkb1rd7d68a97qdb-1921-profile.webp" className="w-full h-full rounded-full" alt="" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Harfool Gurjar
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Frontend Developer | React Developer
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Performance-oriented and user-centric Full-Stack Developer with over 8 months of practical experience 
              in creating responsive, modular web applications utilizing React.js, JavaScript, and contemporary UI frameworks. 
              Proven ability to develop scalable user interfaces, enhance load times by 40%, and work effectively within Agile teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => scrollToAbout()}
              >
                View My Work
              </Button>
              
              <Button
                onClick={handleDownloadCV}
                variant="outline"
                size="lg"
                className="px-8 py-3 rounded-full hover:scale-105 transition-all duration-200"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:harfoolgujar63@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/harfool-gurjar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/harfool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-18 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
