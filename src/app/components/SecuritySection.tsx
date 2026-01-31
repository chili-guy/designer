import React from 'react';
import { ShieldCheck, HardDrive, RefreshCw, Lock, Server, FileText } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const specs = [
  { title: "ISO 27001", description: "Sistema de gestão de segurança da informação de classe mundial.", icon: ShieldCheck },
  { title: "SOC 2 Tipo II", description: "Auditoria independente rigorosa dos nossos controles operacionais.", icon: Lock },
  { title: "Criptografia", description: "AES-256 em repouso e TLS 1.3 em trânsito.", icon: Server },
  { title: "99,99% Uptime", description: "Disponibilidade garantida por SLA com nós redundantes em nuvem.", icon: RefreshCw }
];

export const SecuritySection = () => {
  return (
    <section id="enterprise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-video bg-gray-900 overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZXJ2ZXIlMjByb29tJTIwZGF0YWNlbnRlcnxlbnwxfHx8fDE3Njk3MDQ4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Infraestrutura de Segurança"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B00] flex items-center justify-center">
                  <ShieldCheck className="text-white" size={24} />
                </div>
                <div className="text-white font-bold tracking-tight">Pacote de Segurança Empresarial</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 tracking-tight">Confiabilidade Empresarial</h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Entendemos que dados estruturais são infraestrutura crítica. Nossa plataforma foi construída com mentalidade de segurança em primeiro lugar para garantir que sua propriedade intelectual e registros de ativos estejam sempre protegidos.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {specs.map((spec) => (
                <div key={spec.title} className="flex gap-4">
                  <spec.icon className="text-[#FF6B00] shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold text-black text-sm mb-1">{spec.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100">
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-[#FF6B00] transition-colors">
                <FileText size={18} /> Baixar Whitepaper de Segurança
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
