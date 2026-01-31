import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Ativos Analisados", value: "250 mil+", sub: "Gerenciados globalmente" },
  { label: "Velocidade de Cálculo", value: "12x", sub: "Mais rápido que desktop" },
  { label: "Normas de Conformidade", value: "45+", sub: "Códigos regionais suportados" },
  { label: "Uptime Empresarial", value: "99,99%", sub: "Disponibilidade do serviço" }
];

export const Metrics = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-1/2 h-full border-l border-white/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="text-4xl lg:text-6xl font-bold text-[#FF6B00] mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-500 font-medium italic">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
