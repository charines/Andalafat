
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-md">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-icons text-white text-sm">account_balance</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">Andalafat</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Redefinindo o financiamento imobiliário através de tecnologia e automação. Precisão institucional na velocidade do mercado.
            </p>
            <div className="flex space-x-4">
              <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-300" href="#">
                <span className="material-icons text-xl">language</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-600 dark:text-slate-300" href="#">
                <span className="material-icons text-xl">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Categorias</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#comercial">Comercial</a></li>
                <li><a className="hover:text-primary transition-colors" href="#operacional">Operacional</a></li>
                <li><a className="hover:text-primary transition-colors" href="#financeiro">Financeiro</a></li>
                <li><a className="hover:text-primary transition-colors" href="#parcerias">Parcerias</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">Sobre Nós</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Carreiras</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Segurança</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Privacidade</a></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/10 max-w-sm w-full">
            <h4 className="font-bold text-slate-900 dark:text-white mb-2">Pronto para automatizar?</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Junte-se à Andalafat e aproveite nossa tecnologia para seu portfólio.</p>
            <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/10">
              Solicitar Demonstração
            </button>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-400 uppercase tracking-widest">
          <p>© 2024 Andalafat Serviços Financeiros. Todos os direitos reservados.</p>
          <p>Desenvolvido com precisão para o mercado moderno.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
