import React from 'react';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight tracking-tighter">
              Pronto para modernizar <br />
              sua <span className="text-[#FF6B00]">engenharia de torres</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Junte-se às principais empresas de torres que já usam o Zeo App para otimizar seus fluxos de trabalho estruturais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF6B00] text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#E66000] transition-all group">
                Agendar Demo Privada
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-all">
                Falar com Vendas
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-6">Produto</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-white">Motor de Análise</a></li>
                <li><a href="#" className="hover:text-white">Documentação da API</a></li>
                <li><a href="#" className="hover:text-white">Integrações</a></li>
                <li><a href="#" className="hover:text-white">Notas de Versão</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-6">Empresa</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre o Zeo</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
                <li><a href="#" className="hover:text-white">Segurança</a></li>
                <li><a href="#" className="hover:text-white">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#FF6B00]" />
            <span className="text-lg font-bold tracking-tight">ZEO APP</span>
          </div>
          
          <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
            © 2026 Zeo App Technologies. Todos os direitos reservados. Análise estrutural com precisão.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
