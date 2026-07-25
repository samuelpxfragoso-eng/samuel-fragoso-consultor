import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Car, MessageCircle } from 'lucide-react';

interface SimulatorData {
  titulo: string;
  consorcio: {
    prazo: string;
    entrada: string;
    taxa: string;
    total: string;
    renda: string;
  };
  financiamento: {
    prazo: string;
    entrada: string;
    taxa: string;
    total: string;
    renda: string;
  };
  economia: string;
  mensagemWa: string;
}

const simulatorData: Record<'imovel' | 'veiculo', SimulatorData> = {
  imovel: {
    titulo: "Imobiliário (R$ 500.000)",
    consorcio: {
      prazo: "240 meses (20 anos)",
      entrada: "Sem entrada",
      taxa: "1,3% a.a.",
      total: "R$ 620.000,00",
      renda: "R$ 7.500,00"
    },
    financiamento: {
      prazo: "420 meses (35 anos)",
      entrada: "R$ 125.000,00",
      taxa: "10% + TR (até 8%+ a.a.)",
      total: "R$ 1.227.523,00",
      renda: "R$ 20.000,00"
    },
    economia: "R$ 607.523,00",
    mensagemWa: "Olá! Fiz a simulação no site para o Consórcio Imobiliário de R$ 500 mil e vi que posso economizar mais de R$ 600 mil. Gostaria de fazer um atendimento personalizado!"
  },
  veiculo: {
    titulo: "Veicular (R$ 100.000)",
    consorcio: {
      prazo: "80 meses",
      entrada: "39% (R$ 39.000) - Lance",
      taxa: "21,2% Total (~1,6% a.a.)",
      total: "R$ 68.560,00 (pós-lance)",
      renda: "R$ 3.000,00"
    },
    financiamento: {
      prazo: "48 meses",
      entrada: "R$ 39.214,00",
      taxa: "32% a 86% c.a. (até 22%+ a.a.)",
      total: "R$ 111.561,12",
      renda: "R$ 7.500,00"
    },
    economia: "R$ 43.001,12",
    mensagemWa: "Olá! Fiz a simulação no site para o Consórcio Veicular de R$ 100 mil e notei a grande diferença nas taxas. Quero analisar as opções disponíveis para mim!"
  }
};

const phone = "5541998009320";

export const Simulator: React.FC = () => {
  const [category, setCategory] = useState<'imovel' | 'veiculo'>('imovel');
  const data = simulatorData[category];

  const encodedMsg = encodeURIComponent(data.mensagemWa);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMsg}`;

  return (
    <section className="py-16 bg-neutral-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-neutral-900 rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white mb-2">🎮 Game da Economia: Consórcio vs Financiamento</h2>
            <p className="text-neutral-400">Escolha a modalidade abaixo e compare os custos reais antes de tomar sua decisão.</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setCategory('imovel')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${category === 'imovel' ? 'bg-sky-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
            >
              <Building2 size={20} />
              🏠 Imobiliário (R$ 500k)
            </button>
            <button
              onClick={() => setCategory('veiculo')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${category === 'veiculo' ? 'bg-sky-600 text-white' : 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700'}`}
            >
              <Car size={20} />
              🚗 Veicular (R$ 100k)
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Consórcio */}
            <div className="bg-neutral-800/50 border-2 border-emerald-500 rounded-2xl p-6 relative">
              <span className="absolute -top-3 right-4 bg-emerald-500 text-emerald-950 text-xs font-bold px-3 py-1 rounded-full uppercase">Melhor Escolha</span>
              <h3 className="text-emerald-400 text-xl font-bold mb-4 flex items-center gap-2">💡 Consórcio</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Prazo</span><span className="font-semibold text-white">{data.consorcio.prazo}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Entrada/Lance</span><span className="font-semibold text-white">{data.consorcio.entrada}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Taxa Média</span><span className="font-semibold text-white">{data.consorcio.taxa}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Renda Exigida</span><span className="font-semibold text-white">{data.consorcio.renda}</span></li>
                <li className="flex justify-between pb-2"><span className="text-neutral-400">Total a Pagar</span><span className="font-bold text-emerald-400">{data.consorcio.total}</span></li>
              </ul>
            </div>

            {/* Financiamento */}
            <div className="bg-neutral-800/50 border-2 border-red-500 rounded-2xl p-6 relative">
              <span className="absolute -top-3 right-4 bg-red-500 text-red-950 text-xs font-bold px-3 py-1 rounded-full uppercase">Mais Caro</span>
              <h3 className="text-red-400 text-xl font-bold mb-4 flex items-center gap-2">🏦 Financiamento</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Prazo</span><span className="font-semibold text-white">{data.financiamento.prazo}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Entrada</span><span className="font-semibold text-white">{data.financiamento.entrada}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Taxa Média</span><span className="font-semibold text-white">{data.financiamento.taxa}</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-neutral-400">Renda Exigida</span><span className="font-semibold text-white">{data.financiamento.renda}</span></li>
                <li className="flex justify-between pb-2"><span className="text-neutral-400">Total a Pagar</span><span className="font-bold text-red-400">{data.financiamento.total}</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-700 to-teal-600 rounded-xl p-4 text-center mb-8">
            <h3 className="text-white font-bold">Economia estimada com Consórcio: <span className="text-yellow-300 text-lg font-extrabold">{data.economia}</span></h3>
          </div>

          <div className="text-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-green-500/30 transition-all text-lg">
              <MessageCircle size={24} />
              Fazer Simulação com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
