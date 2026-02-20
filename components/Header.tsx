import React from 'react';

interface HeaderProps {
  onStartClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onStartClick }) => {
  return (
    <header className="bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 border-b border-primary/10">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-icons text-white">account_balance</span>
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">6ESSH</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a className="hover:text-primary transition-colors font-medium text-sm lg:text-base" href="#hero">Início</a>
          <a className="hover:text-primary transition-colors font-medium text-sm lg:text-base" href="#automations">Automações</a>
          <a className="hover:text-primary transition-colors font-medium text-sm lg:text-base" href="#benefits">Benefícios</a>

          {/* BOTÃO ATUALIZADO COM A NOVA LÓGICA */}
          <button
            onClick={onStartClick}
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-sm active:scale-95"
          >
            Começar Agora
          </button>
        </div>

        {/* Menu Mobile - Também atualizado */}
        <div className="md:hidden flex items-center">
          <button
            onClick={onStartClick}
            className="p-2 text-primary"
          >
            <span className="material-icons">whatsapp</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;