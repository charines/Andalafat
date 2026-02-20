import React from 'react';
import { SectionData } from '../types';

interface AutomationSectionProps {
  section: SectionData;
  selecionados: string[]; // Recebe o estado global
  onToggle: (title: string) => void; // Função para alterar o estado global
}

const AutomationSection: React.FC<AutomationSectionProps> = ({ section, selecionados, onToggle }) => {

  const getBgClass = () => {
    switch (section.variant) {
      case 'tinted': return 'bg-primary/5 dark:bg-primary/5';
      case 'dark': return 'bg-slate-900 dark:bg-slate-950 text-white';
      default: return 'bg-white dark:bg-slate-900';
    }
  };

  const getCardStyle = (title: string) => {
    const isSelected = selecionados.includes(title);
    const base = section.variant === 'dark'
      ? 'bg-slate-800 dark:bg-slate-900 border-slate-700'
      : 'bg-white dark:bg-slate-800 border-slate-200';

    const selectedEffect = isSelected
      ? 'ring-2 ring-primary border-primary shadow-blue-500/20 scale-[1.02]'
      : 'hover:border-primary/50';

    return `${base} ${selectedEffect} p-5 md:p-6 rounded-xl border shadow-sm transition-all duration-300 group cursor-pointer`;
  };

  const getTextColor = () => section.variant === 'dark' ? 'text-white' : 'text-slate-900 dark:text-white';
  const getSubtitleColor = () => section.variant === 'dark' ? 'text-slate-400' : 'text-slate-600 dark:text-slate-400';
  const getDescriptionColor = () => section.variant === 'dark' ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400';

  return (
    <section id={section.id} className={`${getBgClass()} py-16 md:py-24 scroll-mt-32 transition-colors duration-500`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-primary pl-6">
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${getTextColor()}`}>{section.title}</h2>
            <p className={`${getSubtitleColor()} mt-2 text-sm md:text-base`}>{section.subtitle}</p>
          </div>
          <div className="flex flex-col items-end">
             {/* Agora mostra o total global acumulado */}
             <span className="text-primary font-bold text-sm mb-1">{selecionados.length}/3 total selecionado</span>
             <span className="text-primary/20 font-mono text-4xl md:text-6xl font-black select-none">
              {section.index}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {section.items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onToggle(item.title)}
              className={getCardStyle(item.title)}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`material-icons text-primary ${selecionados.includes(item.title) ? 'scale-110' : ''} transition-transform`}>
                  {item.icon}
                </span>
                {selecionados.includes(item.title) && (
                  <span className="material-icons text-primary text-sm">check_circle</span>
                )}
              </div>
              <h3 className={`font-bold text-sm md:text-base mb-2 ${getTextColor()}`}>
                {item.title}
              </h3>
              <p className={`text-[11px] md:text-xs leading-relaxed ${getDescriptionColor()}`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;