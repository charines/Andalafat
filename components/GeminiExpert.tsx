
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const GeminiExpert: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const askExpert = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse('');
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: query,
        config: {
          systemInstruction: 'Você é o Especialista em Automação da Andalafat. Seu objetivo é explicar como as 50 automações financeiras e imobiliárias apresentadas no site podem ajudar o usuário. Seja profissional, institucional e conciso. Responda em Português do Brasil.',
        }
      });
      setResponse(result.text || "Desculpe, não consegui processar sua pergunta.");
    } catch (error) {
      console.error(error);
      setResponse("Houve um erro ao consultar o especialista. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-pulse"
        >
          <span className="material-icons text-3xl">psychology</span>
        </button>
      ) : (
        <div className="w-80 md:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-primary/20 overflow-hidden flex flex-col">
          <div className="bg-primary p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <span className="material-icons">auto_awesome</span>
              <span className="font-bold">IA Especialista</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-lg p-1">
              <span className="material-icons">close</span>
            </button>
          </div>
          
          <div className="p-4 h-64 md:h-80 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900/50" ref={chatRef}>
            {response ? (
              <div className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
                {response}
              </div>
            ) : loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-slate-400">
                <span className="material-icons text-4xl mb-2">chat</span>
                <p className="text-xs">Olá! Eu sou a IA da Andalafat. Como posso ajudar você a entender nossas automações hoje?</p>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && askExpert()}
                placeholder="Pergunte sobre automações..."
                className="flex-grow text-xs rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:ring-primary focus:border-primary"
              />
              <button 
                onClick={askExpert}
                disabled={loading}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 disabled:opacity-50"
              >
                <span className="material-icons text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiExpert;
