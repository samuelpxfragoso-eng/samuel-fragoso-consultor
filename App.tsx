
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { ClientSection } from './components/ClientSection.tsx';
import { Authority } from './components/Authority.tsx';
import { AdemiconInfo } from './components/AdemiconInfo.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FAQ } from './components/FAQ.tsx';
import { Footer } from './components/Footer.tsx';
import { WhatsAppButton } from './components/WhatsAppButton.tsx';
import { ComparisonTool } from './components/ComparisonTool.tsx';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#171717] topographic-overlay">
      {/* Moving Fixed Strip here */}
      <div className="fixed top-0 left-0 right-0 z-[1000] bg-red-600 text-white text-xs py-1.5 font-bold uppercase tracking-widest overflow-hidden">
        <motion.div
           initial={{ x: "100%" }}
           animate={{ x: "-100%" }}
           transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           className="whitespace-nowrap"
        >
          🔥 URGÊNCIA: CONSULTE A MELHOR MODALIDADE AGORA E ECONOMIZE | VAGAS LIMITADAS PARA SIMULAÇÃO! 🔥 CONSULTE A MELHOR MODALIDADE AGORA E ECONOMIZE!
        </motion.div>
      </div>

      {/* Background radial glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#E30613] opacity-[0.03] blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#E30613] opacity-[0.02] blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 pt-8"> {/* Added pt-8 to account for top strip */}
        <Header isScrolled={isScrolled} />
        <main>
          <Hero />
          <TeamSection />
          <ClientSection />
          <ComparisonTool />
          <Authority />
          <AdemiconInfo />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default App;
