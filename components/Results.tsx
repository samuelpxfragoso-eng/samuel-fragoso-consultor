
import React from 'react';
import { Bookmark } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass-card rounded-[2.5rem] p-4 md:p-10 border-white/5 shadow-2xl overflow-hidden group">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bookmark className="text-[#E30613]" size={18} fill="currentColor" />
              <span className="text-[#E30613] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">RESULTADOS EXTRAORDINÁRIOS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">Rumo ao próximo Bilhão.</h2>
          </div>

          {/* Image Container - Forced to 16:9 aspect ratio */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 aspect-video w-full bg-neutral-800">
            <img 
              src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/andre%20400%20milhoes.png" 
              alt="Equipe Samaria - 400 Milhões em Vendas" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Quote Section */}
          <div className="mt-10 text-center">
            <p className="text-neutral-400 text-sm md:text-base italic leading-relaxed max-w-2xl mx-auto">
              "O sucesso é a soma de pequenos esforços repetidos dia após dia." 
              <span className="block mt-2 font-bold text-neutral-500 not-italic uppercase text-[10px] tracking-widest">— Equipe Samaria na Ademicon Centro.</span>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E30613]/5 blur-[80px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};