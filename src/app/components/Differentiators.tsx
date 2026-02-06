import React from 'react';
import { motion } from 'motion/react';
import { DeviceMockup } from '@/app/components/DeviceMockup';

const differentiators = [
  {
    title: "Entrada Inteligente de Dados",
    description: "Interface amigável para inserção de dados técnicos da estrutura.",
    image: "/secao4/1-entrada-de-dados.png",
    list: [
      "Cadastro simplificado de estruturas",
      "Importação e validação automática",
      "Interface intuitiva para engenheiros"
    ]
  },
  {
    title: "Normas Técnicas Brasileiras",
    description: "Processamento 100% alinhado com as normas vigentes de engenharia.",
    image: "/secao4/2-normas-brasileiras.png",
    list: [
      "Conformidade NBR e Eurocode",
      "Verificação TIA-222-H integrada",
      "Atualização contínua das normas"
    ]
  },
  {
    title: "Resposta Instantânea",
    description: "Geração de relatórios técnicos detalhados imediatamente após o cálculo.",
    image: "/secao4/3-resposta-instantanea.png",
    list: [
      "Cálculo em minutos, não em horas",
      "Relatórios prontos na hora",
      "Aprovação e reprovação automática"
    ]
  },
  {
    title: "Dashboard e Analytics",
    description: "Centro de comando para visualização da ocupação da planta em tempo real.",
    image: "/secao4/4-dashboard.png",
    list: [
      "Visão em tempo real dos ativos",
      "Ocupação da planta centralizada",
      "Métricas e indicadores de desempenho"
    ]
  }
];

export const Differentiators = () => {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {differentiators.map((diff, idx) => (
            <div key={diff.title} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="w-12 h-1 bg-[#FF6B00] mb-8" />
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 tracking-tight leading-tight">
                  {diff.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {diff.description}
                </p>
                <ul className="space-y-4">
                  {diff.list.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1 w-full flex justify-center lg:justify-end"
              >
                <div className="relative w-fit max-w-full transition-all duration-300 hover:-translate-y-1">
                  <DeviceMockup
                    src={diff.image}
                    alt={diff.title}
                    className="min-w-[32rem] max-w-[52rem]"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
