import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, TowerControl as Tower, Building2, Radio } from 'lucide-react';

const cases = [
  {
    category: "Torres Treliçadas",
    title: "Auditoria Nacional de Torres",
    client: "Operadora Tier 1",
    description: "Verificação estrutural de 15.000 torres existentes para upgrade de equipamentos 5G. Geração automatizada de relatórios economizou 4.000 horas de engenharia.",
    icon: Tower
  },
  {
    category: "Monopostes",
    title: "Implantações Rápidas 5G",
    client: "Urban Infrastructure Co.",
    description: "Otimização de projeto de monopostes em nível de rua para ambientes urbanos de alta densidade usando o solver não linear do Zeo.",
    icon: Radio
  },
  {
    category: "Sites em Coberturas",
    title: "Monitoramento de Saúde Estrutural",
    client: "REIT Imobiliário",
    description: "Implementação de monitoramento de saúde estrutural em tempo real para clusters de telecomunicações em coberturas de edifícios residenciais.",
    icon: Building2
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="text-[#FF6B00] text-xs font-bold uppercase tracking-[0.2em] mb-4">Estudos de Caso</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-black tracking-tight mb-6">Sucesso em Projetos de Telecom</h2>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            Aplicações reais do Zeo App em projetos globais de infraestrutura de telecomunicações.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-50 p-10 flex flex-col h-full border border-transparent hover:border-gray-200 transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center mb-8">
                <c.icon size={20} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF6B00] mb-2">{c.category}</div>
              <h3 className="text-2xl font-bold text-black mb-4">{c.title}</h3>
              <div className="text-xs font-bold text-gray-400 uppercase mb-6">Cliente: {c.client}</div>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {c.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#FF6B00] transition-colors">
                Ver Detalhes do Projeto <ExternalLink size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
