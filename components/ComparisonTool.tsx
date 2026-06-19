import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

export const ComparisonTool: React.FC = () => {
  const [creditAmount, setCreditAmount] = useState(200000);
  const [type, setType] = useState<'imobiliario' | 'veicular'>('imobiliario');

  const data = useMemo(() => {
    // Financing: 3.3744x multiplier
    // Consortium: 1.242x multiplier
    
    if (type === 'imobiliario') {
      return [
        { name: 'Consórcio (Ademicon)', totalCost: creditAmount * 1.242 },
        { name: 'Financiamento (Banco)', totalCost: creditAmount * 3.3744 }
      ];
    } else {
      // Keeping placeholders for veicular if not defined
      return [
        { name: 'Consórcio (Ademicon)', totalCost: creditAmount * 1.15 },
        { name: 'Financiamento (Banco)', totalCost: creditAmount * 1.6 }
      ];
    }
  }, [creditAmount, type]);

  return (
    <section className="py-24 bg-neutral-900/60">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-[#E30613] text-xs font-black uppercase tracking-widest mb-4 block">
            SIMULADOR COMPARATIVO
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Compare e Economize.
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Veja a diferença real entre financiar no banco ou planejar com o consórcio Ademicon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mb-10 text-center">
            <div className="flex justify-center gap-4 mb-6">
              <button 
                onClick={() => setType('imobiliario')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${type === 'imobiliario' ? 'bg-[#E30613] text-white' : 'bg-white/5 text-neutral-400'}`}
              >
                Imobiliário
              </button>
              <button 
                onClick={() => setType('veicular')}
                className={`px-6 py-2 rounded-full font-bold transition-all ${type === 'veicular' ? 'bg-[#E30613] text-white' : 'bg-white/5 text-neutral-400'}`}
              >
                Veicular
              </button>
            </div>
            <label className="block text-neutral-400 font-bold mb-4 uppercase tracking-widest text-sm">
              Escolha o valor do crédito (R$):
            </label>
            <input
              type="range"
              min="100000"
              max="1000000"
              step="50000"
              value={creditAmount}
              onChange={(e) => setCreditAmount(Number(e.target.value))}
              className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#E30613]"
            />
            <div className="text-3xl font-black text-white mt-4">
              R$ {creditAmount.toLocaleString('pt-BR')}
            </div>
          </div>

          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                <YAxis stroke="#fff" tickFormatter={(value) => `R$ ${value / 1000}k`} fontSize={12} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', color: '#fff' }}
                  labelStyle={{ color: '#fff' }}
                  formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Custo Final']}
                />
                <Bar dataKey="totalCost" name="Custo Final">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#E30613' : '#444'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8 mt-12 bg-neutral-800 p-8 rounded-3xl border border-white/5">
          <h3 className="text-3xl font-extrabold text-white mb-6">Detalhamento Comparativo (R$ 500.000)</h3>
          <div className="overflow-x-auto text-white">
              <table className="w-full text-left">
                  <thead>
                      <tr className="border-b border-white/10">
                          <th className="p-4">Característica</th>
                          <th className="p-4">Consórcio (C)</th>
                          <th className="p-4">Financiamento (F)</th>
                      </tr>
                  </thead>
                  <tbody className="text-sm">
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Valor Total</td>
                        <td className="p-4">R$ 500.000,00</td>
                        <td className="p-4">R$ 500.000,00</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Prazo Total</td>
                        <td className="p-4">240 meses (20 anos)</td>
                        <td className="p-4">420 meses (35 anos)</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Entrada</td>
                        <td className="p-4">Sem entrada</td>
                        <td className="p-4">R$ 125.000,00</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Taxa (Tx)</td>
                        <td className="p-4">1,3% a.a.</td>
                        <td className="p-4">10% + TR</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Saldo Devedor Total</td>
                        <td className="p-4">R$ 620.000,00</td>
                        <td className="p-4">R$ 1.227.523,00</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="p-4 font-bold">Renda Exigida</td>
                        <td className="p-4">R$ 7.500,00</td>
                        <td className="p-4">R$ 20.000,00</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <h3 className="text-3xl font-extrabold text-white">Por que o Consórcio vence?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-white font-bold mb-2">Imobiliário</h4>
              <p className="text-neutral-300">Consórcio: <span className="text-[#E30613] font-bold">1,2% a.a.</span> | Financiamento: <span className="text-neutral-500 line-through">8% a.a.</span></p>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <h4 className="text-white font-bold mb-2">Veicular</h4>
              <p className="text-neutral-300">Consórcio: <span className="text-[#E30613] font-bold">1,2% a.a.</span> | Financiamento: <span className="text-neutral-500 line-through">22% a.a.</span></p>
            </div>
          </div>
          <p className="text-lg text-white font-bold text-center leading-tight">
            📈 Com um crédito de 100 mil, o financiamento pode custar mais do que 337 mil ao final, enquanto no consórcio, com uma taxa de 1,2% ao ano, o custo final é cerca de 124 mil. Ou seja, com o consórcio, você paga muito menos e realiza seu sonho de forma mais inteligente. Pense no futuro: o consórcio coloca o seu patrimônio no caminho mais econômico.
          </p>
          <div className="text-center">
            <a 
              href="https://wa.link/70toxx"
              target="_blank"
              className="inline-flex items-center gap-3 bg-[#E30613] text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-[#c40510] transition-all transform hover:-translate-y-1 shadow-xl shadow-red-600/40 uppercase tracking-widest"
            >
              Simular no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
