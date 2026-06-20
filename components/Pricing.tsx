import React, { useState } from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';

type TabType = 'veiculos' | 'imobiliario';

// Define the shape of a plan item to ensure type safety when switching between categories
interface PlanItem {
  total: string;
  reduced: string;
  popular: boolean;
  extra?: string;
}

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('veiculos');

  // Explicitly type the data arrays with PlanItem to handle optional properties correctly
  const veiculosData: PlanItem[] = [
    { total: 'R$ 50.000', reduced: 'R$ 348,60', popular: false },
    { total: 'R$ 60.000', reduced: 'R$ 418,32', popular: false },
    { total: 'R$ 70.000', reduced: 'R$ 488,04', popular: false },
    { total: 'R$ 80.000', reduced: 'R$ 557,76', popular: false },
    { total: 'R$ 90.000', reduced: 'R$ 627,48', popular: false },
    { total: 'R$ 100.000', reduced: 'R$ 697,20', popular: true },
  ];

  const imobiliarioData: PlanItem[] = [
    { total: '100 MIL', reduced: 'R$ 337,30', extra: '€ 55 | $ 58', popular: false },
    { total: '200 MIL', reduced: 'R$ 674,60', extra: '€ 105 | $ 115', popular: false },
    { total: '300 MIL', reduced: 'R$ 1.011,60', extra: '€ 158 | $ 172', popular: false },
    { total: '400 MIL', reduced: 'R$ 1.348,30', extra: '€ 210 | $ 230', popular: true },
    { total: '500 MIL', reduced: 'R$ 1.685,20', extra: '€ 262 | $ 287', popular: false },
    { total: '1 MILHÃO', reduced: 'R$ 3.370,20', extra: '€ 525 | $ 573', popular: false },
  ];

  const benefits = [
    "Até a contemplação",
    "Zero juros bancários",
    "Flexibilidade de lances"
  ];

  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[#E30613] text-sm font-bold uppercase tracking-widest mb-4 block">SOLUÇÕES DE CRÉDITO</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">A liberdade de pagar como você planeja.</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Planos flexíveis que se ajustam ao seu fluxo de caixa, com a segurança da maior administradora independente do Brasil.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 glass-card rounded-full">
            <button 
              onClick={() => setActiveTab('veiculos')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'veiculos' ? 'bg-[#E30613] text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
            >
              Veículos (Brasil)
            </button>
            <button 
              onClick={() => setActiveTab('imobiliario')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'imobiliario' ? 'bg-[#E30613] text-white shadow-lg' : 'text-neutral-400 hover:text-white'}`}
            >
              Imobiliário (Internacional)
            </button>
          </div>
        </div>

        {/* Pricing Grid - Updated to handle 6 cards with better spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === 'veiculos' ? veiculosData : imobiliarioData).map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative glass-card rounded-[2rem] p-8 transition-all duration-500 hover:translate-y-[-8px] flex flex-col justify-between ${plan.popular ? 'border-[#E30613] shadow-[0_0_30px_rgba(227,6,19,0.15)] ring-1 ring-[#E30613]' : 'border-white/5'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E30613] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg z-20">
                  MAIS POPULAR
                </div>
              )}

              <div>
                <div className="text-center mb-8">
                  <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest mb-1">CRÉDITO TOTAL</p>
                  <h4 className="text-3xl font-extrabold text-white">{plan.total}</h4>
                </div>

                <div className="bg-red-950/20 border border-red-500/10 rounded-2xl p-6 mb-8 text-center">
                  <p className="text-[#E30613] text-[10px] font-bold uppercase mb-1">PARCELA REDUZIDA (50% OFF)</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-black text-white">{plan.reduced}</span>
                    <span className="text-neutral-500 text-xs">/mês</span>
                  </div>
                  {activeTab === 'imobiliario' && plan.extra && (
                    <p className="text-neutral-500 text-[10px] mt-2 font-medium">{plan.extra}</p>
                  )}
                </div>

                <ul className="space-y-4 mb-10">
                  {benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-3 text-sm text-neutral-300">
                      <CheckCircle2 size={16} className="text-[#E30613]" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://wa.me/5541998009320?text=Quero%20uma%20simulação"
                target="_blank"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-white text-black hover:bg-neutral-200' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                <MessageCircle size={18} /> Simular no WhatsApp
              </a>
            </div>
          ))}
        </div>

        {/* Extra info for Real Estate */}
        {activeTab === 'imobiliario' && (
          <div className="mt-16 flex flex-wrap justify-center gap-4 text-neutral-500 text-xs uppercase font-bold tracking-widest opacity-60">
            <span>• Atendimento EUA, Europa e Japão</span>
            <span>• Quitação de Financiamentos</span>
            <span>• Aposentadoria Imobiliária</span>
          </div>
        )}
      </div>
    </section>
  );
};