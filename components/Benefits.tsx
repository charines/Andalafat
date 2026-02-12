
import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white" id="benefits">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Feito para Crescer</h2>
          <p className="text-lg text-slate-400">Nossa tecnologia de automação não é apenas sobre velocidade; é sobre construir uma base que escala com sua ambição.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="group">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
              <span className="material-icons text-primary group-hover:text-white transition-colors text-3xl">trending_up</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Escalabilidade</h3>
            <p className="text-slate-400 leading-relaxed">Lide com 10x mais volume sem aumentar a equipe. Nossos sistemas são projetados para crescer junto com você.</p>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
              <span className="material-icons text-primary group-hover:text-white transition-colors text-3xl">verified</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Redução de Erros</h3>
            <p className="text-slate-400 leading-relaxed">Elimine o "fator humano" em entradas de dados e cálculos. Alcance 99.9% de precisão em todos os registros.</p>
          </div>
          
          <div className="group">
            <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-all">
              <span className="material-icons text-primary group-hover:text-white transition-colors text-3xl">diamond</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Vantagem Competitiva</h3>
            <p className="text-slate-400 leading-relaxed">Prazos de fechamento menores e custos operacionais reduzidos significam melhores taxas e margens maiores.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
