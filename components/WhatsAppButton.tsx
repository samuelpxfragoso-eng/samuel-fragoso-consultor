import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5541998009320?text=Olá,%20quero%20uma%20simulação%20de%20crédito" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 animate-pulse-red bg-[#E30613] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="28" 
        height="28" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="lucide lucide-message-circle"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
      <span className="hidden md:inline font-bold pr-2">Falar com Samuel</span>
    </a>
  );
};