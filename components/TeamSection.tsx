import React from 'react';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#171717]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border-white/10 shadow-2xl overflow-hidden group">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
                EQUIPE SAMARIA
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Especialistas em Consórcio.
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                Nossa equipe é focada em resultados reais, com o objetivo de alcançar 30 milhões em créditos comercializados. Expertise técnica dedicada a transformar seu planejamento em conquista.
              </p>
            </div>
            <div className="flex-1 w-full">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781470646/WhatsApp_Image_2026-06-14_at_5.53.17_PM_i7xpcr.jpg" 
                alt="Equipe Samaria"
                className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
