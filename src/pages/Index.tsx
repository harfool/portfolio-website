
import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground font-inter">
        <Navigation />
        <main>
          <Hero />
          <div id="about">
            <Skills />
          </div>
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
