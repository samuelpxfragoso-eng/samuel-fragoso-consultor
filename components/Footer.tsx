
import React from 'react';
import { Instagram, Linkedin, Facebook, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781915808/WhatsApp_Image_2026-06-19_at_9.35.09_PM_ejhudx.jpg" 
                alt="Logo" 
                className="w-16 h-16 rounded-xl object-cover shadow-[0_0_15px_rgba(227,6,19,0.6)]"
              />
              <span className="text-2xl font-extrabold tracking-tighter text-white block">
                SAMUEL<span className="text-[#E30613]">FRAGOSO</span><span className="text-neutral-500 text-sm ml-1 font-medium">DR.CONSÓRCIO</span>
              </span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-8 leading-relaxed">
              Consultoria estratégica de elite para investidores que buscam segurança, rentabilidade e alavancagem através do consórcio imobiliário.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-neutral-400 hover:text-[#E30613] hover:border-[#E30613]/50 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções Financeiras</a></li>
              <li><a href="#autoridade" className="hover:text-white transition-colors">A Loja 200</a></li>
              <li><a href="#carreira" className="hover:text-white transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-neutral-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#E30613] shrink-0" />
                <span>Av. Vicente Machado, 1412<br />Curitiba - PR</span>
              </li>
              <li>samuel.px.fragoso@gmail.com</li>
              <li>(41) 99999-9999</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            © {new Date().getFullYear()} Samuel Fragoso | Dr.Consórcio Oficial. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-neutral-600 text-xs font-bold uppercase tracking-widest">
            <span>Ademicon Autorizada</span>
            <span>Loja 200 Curitiba</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
