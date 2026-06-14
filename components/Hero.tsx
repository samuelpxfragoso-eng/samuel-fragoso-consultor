import React from 'react';
import { ArrowRight, Star, Trophy } from 'lucide-react';

export const Hero: React.FC = () => {
  const bgVideo = "https://res.cloudinary.com/ddfacd0wf/video/upload/v1781470654/WhatsApp_Video_2026-06-14_at_5.49.35_PM_qamble.mp4";

  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 md:pt-48 md:pb-48 overflow-hidden bg-black">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 flex opacity-40">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle vertical divide blur */}
        <div className="absolute inset-y-0 left-0 w-px bg-white/5 backdrop-blur-3xl"></div>
      </div>

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#171717]/80 via-transparent to-[#171717]"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#171717] via-[#171717]/40 to-transparent lg:block hidden"></div>
      
      {/* Smoky / Foggy Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 z-[2] pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#171717] via-[#171717]/80 to-transparent"></div>
        <div className="absolute bottom-[-10px] left-[-10%] right-[-10%] h-32 bg-[#171717] blur-[40px] opacity-90"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#E30613] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Star size={12} fill="currentColor" /> DR. CONSÓRCIO OFICIAL
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Samuel <span className="text-[#E30613]">Fragoso</span>.<br />
              Sua Referência em Consórcio.
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Especialista em estratégias de investimento e planejamento patrimonial através de consórcios de alta performance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <a 
                href="https://wa.link/70toxx" 
                className="w-full sm:w-auto px-12 py-5 bg-[#E30613] text-white rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-2xl shadow-red-600/40 uppercase tracking-widest"
              >
                Simular no WhatsApp
              </a>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="flex-1 relative lg:max-w-md hidden lg:block">
            <div className="relative z-10 glass-card p-2 rounded-[2.5rem] transform rotate-3 hover:rotate-0 transition-all duration-700 shadow-3xl border-white/20">
              <video 
                src="https://res.cloudinary.com/ddfacd0wf/video/upload/v1781470654/WhatsApp_Video_2026-06-14_at_5.49.35_PM_qamble.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto rounded-[2.3rem] object-cover"
              />
            </div>
            {/* Decorative background glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#E30613]/20 blur-[100px] -z-10 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};