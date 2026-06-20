import React from 'react';

export const Testimonials: React.FC = () => {
    return (
        <section className="py-24 bg-neutral-900">
            <div className="container mx-auto px-6 max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
                    Eles confiaram e realizaram.
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <video 
                                src="https://res.cloudinary.com/ddfacd0wf/video/upload/v1781917423/WhatsApp_Video_2026-06-19_at_9.58.35_PM_mc95lv.mp4" 
                                controls 
                                className="w-full aspect-[9/16] object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Christian - Investindo no seu negócio</h3>
                        <p className="text-neutral-300">Entendeu como o consórcio funciona e vai investir na ampliação e estruturação do seu negócio.</p>
                    </div>
                    <div className="space-y-6">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                            <video 
                                src="https://res.cloudinary.com/ddfacd0wf/video/upload/v1781917426/WhatsApp_Video_2026-06-19_at_9.59.40_PM_glqblp.mp4" 
                                controls 
                                className="w-full aspect-[9/16] object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Cliente Contemplado - Sorteio no 8º mês</h3>
                        <p className="text-neutral-300">Contemplação rápida e realização da compra do imóvel com o crédito liberado.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
