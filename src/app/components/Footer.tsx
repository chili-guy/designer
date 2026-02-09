import React from 'react';
import { Phone, Mail, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top section - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo e tagline */}
          <div>
            <a href="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/logo-zeo.png" alt="Zeo" className="h-10" />
            </a>
            <p className="text-white/90 text-sm leading-relaxed max-w-xs">
              A plataforma que revoluciona a gestão de infraestrutura de telecomunicações.
            </p>
          </div>

          {/* Middle - Contato */}
          <div>
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+551137339645" className="flex items-center gap-3 text-white/90 text-sm hover:text-white transition-colors">
                <Phone className="text-gray-400 shrink-0" size={18} />
                (11) 3733-9645
              </a>
              <a href="mailto:contato@zeo.com.br" className="flex items-center gap-3 text-white/90 text-sm hover:text-white transition-colors">
                <Mail className="text-gray-400 shrink-0" size={18} />
                contato@zeo.com.br
              </a>
            </div>
          </div>

          {/* Right - Redes Sociais */}
          <div>
            <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
            <span>© 2025 Zeo App. Todos os direitos reservados. total com a LGPD</span>
            <span>Hospedagem em ambiente seguro Amazon AWS</span>
            <span>Conformidade</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
