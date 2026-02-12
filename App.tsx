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

  // NOVO: Estado global de seleções centralizado aqui
  const [selecionados, setSelecionados] = useState<string[]>([]);

  // NOVO: Função de controle global (limite de 7 total)
  const toggleGlobalSelection = (title: string) => {
    setSelecionados((prev) => {
      if (prev.includes(title)) {
        return prev.filter((t) => t !== title);
      }
      if (prev.length >= 7) {
        alert("Você já escolheu o limite máximo de 7 automações no total.");
        return prev;
      }
      return [...prev, title];
    });
  };

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
            <AutomationSection
              key={section.id}
              section={section}
              selecionados={selecionados} // Passa a lista global
              onToggle={toggleGlobalSelection} // Passa a função de clique
            />
          ))}
        </div>

        <Benefits />
      </main>

      {/* Botão flutuante de WhatsApp opcional ou dentro do Footer/Hero */}
      <Footer />
      <GeminiExpert />
    </div>
  );
};

export default App;