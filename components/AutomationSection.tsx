
import React from 'react';
import { SectionData } from '../types';

interface AutomationSectionProps {
  section: SectionData;
}

const AutomationSection: React.FC<AutomationSectionProps> = ({ section }) => {
  const getBgClass = () => {
    switch (section.variant) {
      case 'tinted': return 'bg-primary/5 dark:bg-primary/5';
      case 'dark': return 'bg-slate-900 dark:bg-slate-950 text-white';
      default: return 'bg-white dark:bg-slate-900';
    }
  };

  const getCardBg = () => {
    if (section.variant === 'dark') return 'bg-slate-800 dark:bg-slate-900 border-slate-700 hover:border-primary';
    return 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50';
  };

  const getTextColor = () => {
    if (section.variant === 'dark') return 'text-white';
    return 'text-slate-900 dark:text-white';
  };

  const getSubtitleColor = () => {
    if (section.variant === 'dark') return 'text-slate-400';
    return 'text-slate-600 dark:text-slate-400';
  };

  const getDescriptionColor = () => {
    if (section.variant === 'dark') return 'text-slate-400';
    return 'text-slate-500 dark:text-slate-400';
  };

  return (
    <section id={section.id} className={`${getBgClass()} py-16 md:py-24 scroll-mt-32 transition-colors duration-500`}>
      <div className="container mx-auto px-6">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-primary pl-6`}>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${getTextColor()}`}>{section.title}</h2>
            <p className={`${getSubtitleColor()} mt-2 text-sm md:text-base`}>{section.subtitle}</p>
          </div>
          <span className="text-primary/20 font-mono text-4xl md:text-6xl font-black mt-4 md:mt-0 select-none">
            {section.index}
          </span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {section.items.map((item, idx) => (
            <div 
              key={idx} 
              className={`${getCardBg()} p-5 md:p-6 rounded-xl border shadow-sm transition-all hover:shadow-lg group cursor-default`}
            >
              <span className="material-icons text-primary mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
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
