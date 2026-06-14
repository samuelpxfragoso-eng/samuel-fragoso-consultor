
import React from 'react';
import { TrendingUp, Globe, ShieldCheck, Wallet } from 'lucide-react';

export const Investments: React.FC = () => {
  const strategies = [
    {
      icon: <TrendingUp className="text-[#E30613]" size={32} />,
      title: "Alavancagem Patrimonial",
      desc: "Uso estratégico do crédito para adquirir ativos que geram renda passiva ou valorização acima do custo da operação.",
      features: ["ROI superior ao mercado", "Consultoria exclusiva", "Otimização tributária"]
    },
    {
      icon: <Globe className="text-[#E30613]" size={32} />,
      title: "Investimento Internacional",
      desc: "Proteja seu patrimônio em moedas fortes. Estratégias para conversão de crédito em Euro ou Dólar para imóveis no exterior.",
      features: ["Moeda forte", "Diversificação global", "Suporte jurídico"]
    },
    {
      icon: <ShieldCheck className="text-[#E30613]" size={32} />,
      title: "Parcelas Reduzidas",
      desc: "Pague de 50% a 70% da parcela até a contemplação, garantindo liquidez total para seus outros projetos e negócios.",
      features: ["Maior fluxo de caixa", "Entrada inteligente", "Planejamento flexível"]
    },
    {
      icon: <Wallet className="text-[#E30613]" size={32} />,
      title: "Consórcio Imobiliário",
      desc: "A ferramenta financeira mais eficiente do Brasil para construção, compra ou reforma de imóveis de alto padrão.",
      features: ["Sem juros abusivos", "Fiscalizado pelo BACEN", "Poder de compra à vista"]
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">A Matemática do <span className="text-[#E30613]">Sucesso</span></h2>
          <p className="text-neutral-400 text-lg">
            Muito além do consórcio tradicional, entregamos estratégias de engenharia financeira personalizadas para os maiores investidores do Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl hover:bg-neutral-800/80 transition-all duration-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <ul className="space-y-2">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs font-bold text-neutral-300 uppercase tracking-wide">
                    <div className="w-1 h-1 bg-[#E30613] rounded-full"></div>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 glass-card rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-red-500/20 bg-gradient-to-br from-neutral-800/40 to-red-900/5">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Pronto para sua primeira consultoria?</h3>
            <p className="text-neutral-400">Analise seu fluxo de caixa e descubra como a Loja 200 pode acelerar seus ganhos.</p>
          </div>
          <button className="px-10 py-5 bg-[#E30613] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-red-600/30 transition-all">
            Solicitar Análise de Investimento
          </button>
        </div>
      </div>
    </section>
  );
};
