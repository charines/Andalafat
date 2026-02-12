
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-24 md:pb-32" id="hero">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10 -z-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-8">
            <span className="material-icons text-sm">bolt</span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Arquitetura de Alta Eficiência</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            As 50 Automações que <span className="text-primary">Escalam sua Eficiência</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            A Andalafat utiliza automação de nível institucional em todo o ciclo financeiro imobiliário. Explore como eliminamos o atrito manual.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12 md:mt-16 border-t border-slate-200 dark:border-slate-800 pt-12">
            <div className="text-center min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">99.9%</p>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1">Precisão de Dados</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">10k+</p>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1">Horas Mensais Salvas</p>
            </div>
            <div className="text-center min-w-[120px]">
              <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">&lt;2m</p>
              <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mt-1">Tempo Médio de Processamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
