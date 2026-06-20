import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isLast: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`transition-all duration-300 ${!isLast ? 'border-b border-white/5' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 md:px-8 py-7 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group"
      >
        <span className={`text-white font-bold text-base md:text-lg pr-4 transition-colors ${isOpen ? 'text-white' : 'text-neutral-200 group-hover:text-white'}`}>
          {question}
        </span>
        <ChevronDown 
          className={`text-neutral-500 transition-all duration-300 ${isOpen ? 'rotate-180 text-[#E30613]' : 'group-hover:text-neutral-300'}`} 
          size={20} 
        />
      </button>
      <div 
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 md:px-8 pb-8">
          <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O consórcio Ademicon é seguro?",
      answer: "Sim, a Ademicon é a maior administradora independente do Brasil, autorizada e fiscalizada pelo Banco Central. A Loja 200 é uma das unidades mais premiadas da rede, garantindo segurança total em cada contrato."
    },
    {
      question: "Como funciona a estratégia de alavancagem patrimonial?",
      answer: "Utilizamos o consórcio como ferramenta de crédito de baixo custo para adquirir ativos (imóveis ou veículos) que geram renda ou valorização, superando o valor das parcelas. É engenharia financeira aplicada para multiplicar capital."
    },
    {
      question: "Qual a diferença entre a parcela reduzida e a cheia?",
      answer: "O cliente pode pagar entre 50% e 70% da parcela até o momento da contemplação. Isso preserva sua liquidez durante o período de espera, permitindo manter o capital girando em outros investimentos."
    },
    {
      question: "Como posso investir em imóveis no exterior através do consórcio?",
      answer: "Sim! Com a consultoria do Samuel Fragoso, você pode utilizar sua carta de crédito contemplada para aquisição de imóveis em países onde a legislação permite a conversão e remessa, diversificando seu patrimônio em moedas fortes."
    },
    {
      question: "O que é necessário para entrar na Equipe Samaria?",
      answer: "Buscamos pessoas com perfil empreendedor, alto nível de resiliência e foco em resultados. Oferecemos o treinamento completo da 'Unidade Referência' Loja 200 para formar consultores de alta performance."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E30613]/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle size={16} className="text-[#E30613]" />
            <span className="text-[#E30613] text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">DÚVIDAS COMUNS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Perguntas e Respostas.</h2>
          <p className="text-neutral-500 text-sm md:text-base">Esclareça os principais pontos sobre nossos investimentos e plano de carreira.</p>
        </div>
        
        <div className="glass-card rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl">
          <div className="bg-neutral-900/40">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                question={faq.question} 
                answer={faq.answer} 
                isLast={idx === faqs.length - 1} 
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500 text-sm">
            Ainda tem dúvidas? <a href="https://wa.me/5541998009320?text=Quero%20uma%20simulação" className="text-[#E30613] font-bold hover:underline transition-all">Fale diretamente com Samuel Fragoso</a>
          </p>
        </div>
      </div>
    </section>
  );
};