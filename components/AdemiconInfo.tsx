import React from 'react';
import { MessageCircle } from 'lucide-react';

export const AdemiconInfo: React.FC = () => {
    return (
        <section id="ademicon" className="py-24 bg-neutral-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img 
                            src="https://res.cloudinary.com/ddfacd0wf/image/upload/v1781915827/Captura_de_tela_2026-06-19_213151_hnw3zq.png" 
                            alt="Sobre Ademicon" 
                            className="rounded-3xl shadow-2xl border border-white/5"
                        />
                    </div>
                    <div>
                        <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
                            Sobre a Ademicon
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
                            Segurança e Solidez Financeira.
                        </h2>
                        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
                            <p>
                                A Ademicon é uma administradora de consórcios que foi fundada com o objetivo de oferecer soluções de consórcio para imóveis e veículos, sempre com foco na transparência e na solidez financeira. 
                            </p>
                            <p>
                                Ela atua dentro das normas estabelecidas pelo Banco Central do Brasil, o que garante segurança aos cotistas. A empresa opera conforme a Lei 11.795 de 2008, que regula o consórcio no Brasil, garantindo um ambiente seguro, fiscalizado e vinculado às diretrizes do Banco Central.
                            </p>
                        </div>
                        <div className="mt-10">
                            <a 
                                href="https://wa.me/5541998009320?text=Olá,%20quero%20uma%20simulação%20de%20crédito" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#E30613] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/40 uppercase tracking-widest"
                            >
                                <MessageCircle size={24} /> Simular Consórcio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
