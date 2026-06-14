import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ClientSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900/40">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <video 
              src="https://res.cloudinary.com/ddfacd0wf/video/upload/v1781473405/WhatsApp_Video_2026-06-14_at_6.12.37_PM_2_jqmrew.mp4" 
              autoPlay
              loop
              muted
              playsInline
              controls 
              className="w-full aspect-[9/16] object-cover"
            />
          </div>
          <div className="space-y-6">
            <span className="text-[#E30613] text-xs font-black uppercase tracking-widest block">
              HISTÓRIAS DE SUCESSO
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Veja o que nossos clientes alcançaram.
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Consórcio é planejamento, é realização. Confira como estamos mudando a vida de centenas de famílias através de crédito inteligente.
            </p>
            <a 
              href="https://wa.link/70toxx"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#E30613] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/40 uppercase tracking-widest"
            >
              Simular no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
