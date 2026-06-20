import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Trajetória', href: '#autoridade' },
    { label: 'Seja Referência', href: '#carreira' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#171717]/90 backdrop-blur-md shadow-xl border-b border-white/5 top-0' : 'bg-transparent top-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        <div className="flex items-center gap-3">
          <img 
            src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781915808/WhatsApp_Image_2026-06-19_at_9.35.09_PM_ejhudx.jpg" 
            alt="Logo" 
            className="w-12 h-12 rounded-xl object-cover shadow-[0_0_15px_rgba(227,6,19,0.6)]"
          />
          <span className="text-xl font-extrabold tracking-tighter text-white">
            SAMUEL<span className="text-[#E30613]">FRAGOSO</span>
            <span className="text-yellow-400 text-[10px] ml-1 font-bold block">DR. CONSÓRCIO OFICIAL</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5541998009320?text=Quero%20uma%20simulação" 
            className="bg-[#E30613] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#c40510] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#E30613]/20"
          >
            Falar com Samuel
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}`}>
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-lg font-medium text-neutral-300"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5541998009320?text=Quero%20uma%20simulação" 
            className="w-full text-center bg-[#E30613] text-white py-4 rounded-xl font-bold"
          >
            Falar com Samuel
          </a>
        </nav>
      </div>
    </header>
  );
};