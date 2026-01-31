import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "O Zeo App mudou fundamentalmente a forma como lidamos com nossa carteira estrutural. A capacidade de executar análises em lote em milhares de torres dobrou nossa produtividade em engenharia.",
    author: "Dr. Marcus Chen",
    position: "Engenheiro Chefe, Global Infra Solutions",
    company: "Vantage Towers Group"
  },
  {
    quote: "A integração via API é a melhor que vimos no mercado de software estrutural. Encaixa perfeitamente em nossa cadeia de ferramentas personalizada de gestão de ativos.",
    author: "Sarah Jenkins",
    position: "VP de Operações",
    company: "American Tower Corp"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 border border-gray-100 shadow-sm relative"
            >
              <Quote className="absolute top-8 right-8 text-gray-100" size={60} />
              <p className="text-xl text-gray-800 leading-relaxed italic mb-10 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-none flex items-center justify-center font-bold text-gray-400">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-black text-sm">{t.author}</div>
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{t.position}</div>
                  <div className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-[0.2em] mt-1">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
