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

  // Estado global de seleções centralizado
  const [selecionados, setSelecionados] = useState<string[]>([]);

  // Função de controle global (limite de 7 total)
  const toggleGlobalSelection = (title: string) => {
    setSelecionados((prev) => {
      if (prev.includes(title)) {
        return prev.filter((t) => t !== title);
      }
      if (prev.length >= 7) {
        alert("Você já escolheu o limite máximo de 7 automações no total.");
        // Pequeno atraso para a rolagem funcionar após o fechamento do alert
        setTimeout(() => {
          const element = document.getElementById('contato-card');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
        return prev;
      }
      return [...prev, title];
    });
  };

  // LÓGICA DE ENVIO PARA O WHATSAPP
  const handleWhatsApp = () => {
    const phoneNumber = "5511937054645";

    if (selecionados.length === 0) {
      // Mensagem padrão caso nada esteja selecionado
      const msgPadrao = encodeURIComponent("Olá! Tenho interesse nas automações da Andalafat e gostaria de saber mais.");
      window.open(`https://wa.me/${phoneNumber}?text=${msgPadrao}`, "_blank");
    } else {
      // Mensagem dinâmica com os títulos selecionados
      const saudacao = "Olá! Tenho interesse, vamos iniciar com:";
      const listaItens = selecionados.map(item => `%0A• *${item}*`).join('');
      const fechamento = "%0A%0AQuero iniciar imediatamente!";

      const mensagemFinal = `${saudacao}${listaItens}${fechamento}`;
      window.open(`https://wa.me/${phoneNumber}?text=${mensagemFinal}`, "_blank");
    }
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
      <Header onStartClick={handleWhatsApp}/>

      <main className="flex-grow">
        {/* Passando a nova função para o Hero */}
        <Hero  />

        <CategoryNav activeSection={activeSection} sections={SECTIONS} />

        <div id="automations" className="space-y-0">
          {SECTIONS.map((section) => (
            <AutomationSection
              key={section.id}
              section={section}
              selecionados={selecionados}
              onToggle={toggleGlobalSelection}
            />
          ))}
        </div>

        <Benefits />
      </main>

      <Footer  onStartClick={handleWhatsApp}/>
      <GeminiExpert />
    </div>
  );
};

export default App;