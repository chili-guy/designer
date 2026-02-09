import React from 'react';
import { motion } from 'motion/react';
import { Clock, CalendarDays, Users, DollarSign, Zap, Timer, Cpu, TrendingDown } from 'lucide-react';

const problemaItems = [
  { icon: CalendarDays, text: "7 a 10 dias por informação (laudo)" },
  { icon: Users, text: "Equipe sobrecarregada" },
  { icon: DollarSign, text: "Custos elevados com reanálises manuais" },
];

const solucaoItems = [
  { icon: Timer, text: "Análise em minutos" },
  { icon: Cpu, text: "Automação total via SaaS" },
  { icon: TrendingDown, text: "Redução drástica de custos operacionais" },
];

export const FeatureGrid = () => {
  return (
    <section id="solucao" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight">
            O Problema vs. A Solução
          </h2>
          <p className="text-lg text-gray-600">
            Veja como o Zeo App transforma o processo de análise estrutural
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gray-200 rounded-lg shadow-lg border border-gray-300"
          >
            <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center mb-6">
              <Clock className="text-gray-600" size={24} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 mb-8">O Processo Atual</h3>
            <ul className="space-y-6">
              {problemaItems.map((item) => (
                <li key={item.text} className="flex items-start gap-4 text-gray-600">
                  <item.icon size={20} className="text-gray-500 mt-0.5 shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 bg-[#FF6B00] rounded-lg shadow-lg"
          >
            <div className="w-12 h-12 rounded-full bg-[#E66000] flex items-center justify-center mb-6">
              <Zap className="text-white" size={24} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-white mb-8">A Realidade Zeo</h3>
            <ul className="space-y-6">
              {solucaoItems.map((item) => (
                <li key={item.text} className="flex items-start gap-4 text-white">
                  <item.icon size={20} className="text-white/90 shrink-0 mt-0.5" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <img src="/esse.png" alt="Zeo App" className="max-w-3xl w-full h-auto" />
        </div>
      </div>
    </section>
  );
};
