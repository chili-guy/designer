import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Scale, Building2 } from 'lucide-react';

const roadmapItems = [
  {
    icon: Cpu,
    title: "Dashboard com IA",
    description: "Acesso rápido a dados de ocupação e antenas por cidade.",
  },
  {
    icon: Scale,
    title: "Estimativa de Reforço",
    description: "Cálculo automático do peso necessário para reforço de torres.",
  },
  {
    icon: Building2,
    title: "Verificação de Fundação",
    description: "Implementação de análise automática de fundações de torres e postes.",
  },
];

export const Roadmap = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight">
            Roadmap
          </h2>
          <p className="text-lg text-gray-600">
            O que vem por aí
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roadmapItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <span className="absolute top-4 right-4 bg-[#FF6B00] text-white text-xs font-bold px-3 py-1 rounded-full">
                Em breve
              </span>
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6">
                <item.icon className="text-[#FF6B00]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
