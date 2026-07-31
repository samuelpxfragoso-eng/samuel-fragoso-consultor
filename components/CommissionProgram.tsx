import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const CommissionProgram: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const message = `Olá, gostaria de solicitar uma reunião de qualificação para o programa de comissionamento. Meu nome é ${name}. WhatsApp: ${phone}. Email: ${email}.`;
  const whatsappUrl = `https://wa.me/5541998009320?text=${encodeURIComponent(message)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-neutral-900/50" id="programa-comissionamento">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">Programa de Comissionamento</h2>
          <p className="text-lg text-neutral-400 mb-4">
            Além de conhecer o consórcio de perto e entender como ele funciona na prática, você pode criar uma <strong>renda recorrente</strong> conosco.
          </p>
          <p className="text-lg text-neutral-400">
            Como as vagas para esse acompanhamento são limitadas, fazemos uma <strong>reunião de qualificação</strong> para entender se você se encaixa no perfil do nosso programa. Preencha seus dados abaixo para agendarmos a videochamada.
          </p>
        </div>

        <div className="bg-neutral-900 p-8 rounded-3xl shadow-2xl border border-white/10 text-left">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Preencha para solicitar sua Reunião de Qualificação</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nome" className="block font-bold mb-2 text-neutral-300">Nome Completo*</label>
              <input 
                type="text" 
                id="nome" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-4 bg-neutral-800 border border-white/10 rounded-xl text-white placeholder-neutral-500" 
                placeholder="Digite seu nome" 
                required 
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block font-bold mb-2 text-neutral-300">Número do WhatsApp*</label>
              <input 
                type="tel" 
                id="whatsapp" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                className="w-full p-4 bg-neutral-800 border border-white/10 rounded-xl text-white placeholder-neutral-500" 
                placeholder="(DDD) 99999-9999" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold mb-2 text-neutral-300">E-mail que você mais utiliza*</label>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full p-4 bg-neutral-800 border border-white/10 rounded-xl text-white placeholder-neutral-500" 
                placeholder="seu.email@exemplo.com" 
                required 
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl text-center transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} /> Falar com Especialista & Agendar Reunião
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
