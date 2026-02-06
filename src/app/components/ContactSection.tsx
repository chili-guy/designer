import React, { useState } from 'react';

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
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Fale conosco e descubra como o Zeo App pode transformar sua operação
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail Corporativo
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none"
                  placeholder="seu@empresa.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  id="empresa"
                  type="text"
                  value={formData.empresa}
                  onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none"
                  placeholder="Sua empresa"
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  id="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX_MESSAGE_LENGTH))}
                maxLength={MAX_MESSAGE_LENGTH}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none resize-none"
                placeholder="Sua mensagem"
              />
              <p className="mt-1 text-sm text-gray-500">
                Máximo de {MAX_MESSAGE_LENGTH} caracteres ({message.length}/{MAX_MESSAGE_LENGTH})
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-4 bg-[#FF6B00] text-white font-bold rounded-lg hover:bg-[#E66000] transition-colors"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
