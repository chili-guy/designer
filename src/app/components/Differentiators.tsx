import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const differentiators = [
  {
    title: "Construído para Escalabilidade Empresarial",
    description: "Gerencie milhares de ativos de torres em um único banco de dados unificado. A arquitetura do Zeo App foi construída para atender às rigorosas demandas de operadores de telecomunicações multinacionais.",
    image: "https://images.unsplash.com/photo-1701513097378-78db9d01d2fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbiUyMHRvd2VyJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnR8ZW58MXx8fHwxNzY5ODA0NzU4fDA",
    list: [
      "Repositório Centralizado de Ativos",
      "Arquitetura de Segurança Multi-inquilino",
      "Colaboração de Equipes Globais"
    ]
  },
  {
    title: "Velocidade Computacional Inigualável",
    description: "Nosso motor de solver proprietário reduz o tempo de cálculo de horas para minutos. Execute simulações não lineares complexas na nuvem sem sobrecarregar o hardware local.",
    image: "https://images.unsplash.com/photo-1769654063887-413c2f294617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJ1Y3R1cmFsJTIwc3RlZWwlMjBjb25zdHJ1Y3Rpb24lMjBkZXRhaWx8ZW58MXx8fHwxNzY5ODA0NzU4fDA",
    list: [
      "Resolução Acelerada por GPU",
      "Capacidades de Processamento Paralelo",
      "Geração Instantânea de Relatórios"
    ]
  },
  {
    title: "Ecossistema de Integração Contínua",
    description: "Conecte o Zeo App aos seus sistemas existentes de CRM, Gestão de Ativos ou ERP. Automatize o processo de verificação estrutural de ponta a ponta com facilidade.",
    image: "https://images.unsplash.com/photo-1664526936810-ec0856d31b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjBuZXR3b3JrJTIwdG9wb2xvZ3l8ZW58MXx8fHwxNzY5ODA0NzU4fDA",
    list: [
      "Interface API RESTful",
      "Formatos Personalizados de Exportação",
      "Conectores de Software de Terceiros"
    ]
  }
];

export const Differentiators = () => {
  return (
    <section id="solutions" className="py-24 bg-gray-50">
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
                className="flex-1 w-full"
              >
                <div className="relative aspect-[16/10] bg-white shadow-2xl overflow-hidden">
                  <ImageWithFallback
                    src={diff.image}
                    alt={diff.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Technical overlay */}
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="px-2 py-1 bg-black/80 text-[8px] font-bold text-white tracking-widest uppercase">ZEO-SYS-04</div>
                    <div className="px-2 py-1 bg-[#FF6B00] text-[8px] font-bold text-white tracking-widest uppercase">ATIVO</div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
