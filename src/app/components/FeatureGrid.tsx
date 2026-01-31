import React from 'react';
import { motion } from 'motion/react';
import { Box, Layers, Terminal, Cloud, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "Análise Estrutural",
    description: "Solver FEA multi-norma especificamente ajustado para mastros, torres e estruturas treliçadas. Capacidades de análise linear e não linear.",
    icon: Box,
    items: ["Análise P-Delta", "Cargas Dinâmicas de Vento", "Cálculos de Carga de Gelo"]
  },
  {
    title: "Projeto e Verificação",
    description: "Verificação automatizada contra TIA-222-H, Eurocode 3 e AS/NZS 1170. Relatórios estruturais instantâneos de aprovação/reprovação.",
    icon: Layers,
    items: ["Conformidade Eurocode 3", "Otimização de Elementos", "Projeto de Fundação"]
  },
  {
    title: "API e Automação",
    description: "Integre cálculos estruturais diretamente no seu fluxo de gestão de ativos com nossa robusta API REST baseada em JSON.",
    icon: Terminal,
    items: ["SDK Python", "Integração Webhooks", "Processamento em Lote"]
  },
  {
    title: "Plataforma em Nuvem",
    description: "Arquitetura SaaS sem instalação. Workspaces colaborativos para equipes globais com versionamento completo e trilhas de auditoria.",
    icon: Cloud,
    items: ["Autenticação SSO", "Versionamento de Ativos", "Workspaces em Equipe"]
  }
];

export const FeatureGrid = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6 tracking-tight">Nosso Software</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Um conjunto completo de ferramentas projetadas para o engenheiro estrutural moderno, construído com base em precisão e velocidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 border border-gray-100 hover:border-[#FF6B00] transition-colors relative bg-white flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-[#FF6B00]/10 transition-colors">
                <feature.icon className="text-black group-hover:text-[#FF6B00] transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>
              <ul className="space-y-3 pt-6 border-t border-gray-50">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-gray-400">
                    <CheckCircle2 size={14} className="text-[#FF6B00]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
