
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import AutomationSection from './components/AutomationSection';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import GeminiExpert from './components/GeminiExpert';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('comercial');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <CategoryNav activeSection={activeSection} sections={SECTIONS} />
        
        <div id="automations" className="space-y-0">
          {SECTIONS.map((section) => (
            <AutomationSection key={section.id} section={section} />
          ))}
        </div>

        <Benefits />
      </main>

      <Footer />
      <GeminiExpert />
    </div>
  );
};

export default App;
