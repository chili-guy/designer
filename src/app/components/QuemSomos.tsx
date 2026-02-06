import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: "+17.000", label: "Projetos Estruturais" },
  { value: "+10.000", label: "Análises e Laudos Realizados" },
  { value: "20", label: "Anos de Experiência Sólida" },
];

export const QuemSomos = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 tracking-tight">
            Quem Somos
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto leading-relaxed">
            Somos o Zeo App: a plataforma que revoluciona a gestão de infraestrutura. Com mais de 20 anos de expertise no mercado de telecomunicações, criamos uma solução capaz de simplificar processos complexos e elevar o controle da sua planta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#FF6B00] rounded-lg p-8 text-center shadow-lg"
            >
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
