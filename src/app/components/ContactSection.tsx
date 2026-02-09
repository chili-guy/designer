import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const MAX_MESSAGE_LENGTH = 500;

export const ContactSection = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    telefone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implementar envio
  };

  return (
    <section
      id="contact"
      className="py-24 relative min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Mapa real da localização - Rua Alexandre Dumas, Chácara Santo Antônio, SP */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          title="Localização - Rua Alexandre Dumas, São Paulo"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-46.682,-23.608,-46.662,-23.582&layer=mapnik&marker=-23.595,-46.672"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          sandbox="allow-scripts"
          style={{ filter: 'grayscale(100%) brightness(1.2)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">
          {/* Left - Contact info */}
          <div className="lg:w-2/5 p-10 lg:p-12 flex flex-col justify-center">
            <h2 className="text-[#FF6B00] font-bold text-2xl mb-1">Contato</h2>
            <h3 className="text-white font-bold text-xl uppercase tracking-wider mb-10">
              Fale Conosco
            </h3>

            <div className="space-y-6 text-white">
              <div className="flex gap-4">
                <MapPin className="text-[#FF6B00] shrink-0 mt-0.5" size={20} />
                <span className="text-sm leading-relaxed">
                  Rua Alexandre Dumas, 2220 - cj 52 - Chácara Santo Antônio, São Paulo - SP, 04717-912
                </span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#FF6B00] shrink-0 mt-0.5" size={20} />
                <span className="text-sm">(11) 3733-9645</span>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#FF6B00] shrink-0 mt-0.5" size={20} />
                <span className="text-sm">contato@zeo.com.br</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:w-3/5 p-10 lg:p-12 bg-black border-l border-white/10">
            <h4 className="text-white font-bold text-xl mb-2">Quer nos conhecer melhor?</h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Estamos à sua disposição em diferentes canais de atendimento para responder as dúvidas
              sobre os nossos serviços e soluções.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-600 border-0 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  placeholder="Seu nome"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-600 border-0 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  placeholder="Seu e-mail"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-600 border-0 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  placeholder="Sua empresa"
                />
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-600 border-0 focus:ring-2 focus:ring-[#FF6B00] outline-none"
                  placeholder="Telefone"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                  maxLength={MAX_MESSAGE_LENGTH}
                  className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder:text-gray-600 border-0 focus:ring-2 focus:ring-[#FF6B00] outline-none resize-none"
                  placeholder="Mensagem"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#FF6B00] text-white font-bold rounded-lg hover:bg-[#E66000] transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
