import React from 'react';

interface CTASectionProps {
    selecionados: string[];
    onStartClick: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ selecionados, onStartClick }) => {
    const isComplete = selecionados.length === 3;

    return (
        <section id="cta-section" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className={`bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border ${isComplete ? 'border-primary' : 'border-slate-200 dark:border-slate-800'} transition-all duration-500`}>
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                            {/* Soph.IA Avatar / Visual */}
                            <div className="relative group">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full flex items-center justify-center relative overflow-hidden">
                                    <span className="material-icons text-5xl md:text-6xl text-primary group-hover:scale-110 transition-transform duration-500">auto_awesome</span>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                                </div>
                                {/* Status Indicator */}
                                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
                            </div>

                            <div className="flex-grow text-center md:text-left">
                                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                    <span>{isComplete ? 'Primeira Etapa Concluída' : 'Em Progresso'}</span>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
                                    {isComplete
                                        ? "Excelente escolha! Automações selecionadas."
                                        : "Escolha suas 3 automações estrategicas"}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                                    Para prosseguir com a implementação, clique no botão e fale agora com a <strong className="text-primary font-bold">Soph.IA</strong> — nossa agente inteligente de primeiro contato que irá orientar sua jornada de transformação digital.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <button
                                        onClick={onStartClick}
                                        className="w-full sm:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3 group"
                                    >
                                        <span>Falar com Soph.IA</span>
                                        <span className="material-icons group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>

                                    {selecionados.length > 0 && (
                                        <div className="text-xs text-slate-400 flex flex-col sm:items-start items-center">
                                            <span className="font-semibold uppercase tracking-widest text-[10px] mb-1">Selecionados:</span>
                                            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                                                {selecionados.map((s, i) => (
                                                    <span key={i} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
