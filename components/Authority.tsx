import React from 'react';
import { Award, Target, TrendingUp, Sparkles, MessageCircle, MapPin } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section id="autoridade" className="py-24 bg-neutral-900/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image and Map */}
          <div className="space-y-8">
            <div className="relative glass-card p-2 rounded-[2.5rem] transform -rotate-3 border-white/10">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781474881/WhatsApp_Image_2026-06-14_at_6.17.56_PM_1_ihtp1g.jpg" 
                alt="Samuel Fragoso" 
                className="w-full h-auto rounded-[2.3rem] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
              TRAJETÓRIA E EXPERIÊNCIA
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
              Mais de 3 anos transformando vidas através do consórcio.
            </h2>
            <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
              <p>
                Minha jornada no mundo do consórcio é baseada em técnica, ética e compromisso real com os objetivos dos meus clientes. Com mais de 3 anos de experiência sólida, desenvolvi um método de consultoria que vai muito além da venda.
              </p>
              <p>
                Atualmente, meu foco é escalar essa excelência na Equipe Samaria. Estou em constante evolução, com o objetivo claro de me tornar um gestor de referência e, em breve, conduzir minha própria loja.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <Award className="text-[#E30613] mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-2">Consultor Especialista</h4>
                <p className="text-neutral-500 text-sm">3+ anos de mercado com alto índice de aprovação.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <Target className="text-[#E30613] mb-4" size={32} />
                <h4 className="text-white font-bold text-lg mb-2">Visão de Futuro</h4>
                <p className="text-neutral-500 text-sm">Rumo à gestão e liderança de novas unidades.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* New Loja 200 Block */}
        <div className="mt-16 glass-card rounded-[2.5rem] p-10 md:p-16 border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">LOJA 200 - ADEMICON</span>
                <h2 className="text-3xl font-extrabold text-white mb-6">Sua referência em Curitiba.</h2>
                <p className="text-neutral-300 text-lg mb-8">Conheça nossa estrutura completa na Loja 200. Atendimento de elite para quem busca os melhores resultados.</p>
                <a href="https://wa.me/5541998009320?text=Quero%20uma%20simulação" target="_blank" className="inline-flex items-center gap-3 bg-[#E30613] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/40 uppercase tracking-widest">
                    <MessageCircle size={24} /> Simular na Loja 200
                </a>
            </div>
            <div className="flex-1 w-full space-y-6">
                <img src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781475080/Captura_de_tela_2026-06-14_191105_fapn2y.png" alt="Loja 200" className="rounded-3xl shadow-2xl" />
                <div className="relative glass-card rounded-[2.5rem] overflow-hidden border-white/10">
                  <div className="aspect-video w-full grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.116962058309!2d-49.289111624609825!3d-25.434327277559132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce409893d9b4b%3A0xc3f25c7e163b2f2!2sAv.%20Vicente%20Machado%2C%201412%20-%20Batel%2C%20Curitiba%20-%20PR%2C%2080420-011!5e0!3m2!1spt-BR!2sbr!4v1709400000000!5m2!1spt-BR!2sbr" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                    ></iframe>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3 text-neutral-300">
                    <MapPin size={20} className="text-[#E30613]" />
                    <p>Av. Vicente Machado, 1412 - Batel, Curitiba - PR</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};