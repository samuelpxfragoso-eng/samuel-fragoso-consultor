import React from 'react';
import { motion } from 'motion/react';
import { Target, MessageCircle } from 'lucide-react';

export const FinancialPlan: React.FC = () => {
  const message = "Quero criar meu plano";
  const whatsappUrl = `https://wa.me/5541998009320?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-24 bg-[#121212] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 font-bold text-sm tracking-wider uppercase mb-6"
        >
          <Target size={18} />
          Planejamento Estratégico
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6"
        >
          Trace o seu plano financeiro
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-lg mb-10"
        >
          Não deixe o seu patrimônio ao acaso. Desenvolva uma estratégia personalizada para alcançar seus objetivos de curto, médio e longo prazo com segurança e rentabilidade.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/20 uppercase tracking-wider"
        >
          <MessageCircle size={24} />
          Quero criar meu plano
        </motion.a>
      </div>
    </section>
  );
};
