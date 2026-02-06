import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Hexagon Pattern - honeycomb overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='40' viewBox='0 0 46 40'%3E%3Cpolygon fill='none' stroke='%23000' stroke-width='0.4' points='23,1 39,10.5 39,29.5 23,39 7,29.5 7,10.5'/%3E%3C/svg%3E")`,
          backgroundSize: '46px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
              O <span className="text-[#FF6B00]">futuro</span> da engenharia em Telecom chegou!
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Elimine gargalos e acelere resultados no mercado 5G. Transforme dias de espera em minutos de análise estrutural automatizada.
            </p>
            <a
              href="#solutions"
              className="inline-flex bg-[#FF6B00] text-white px-8 py-4 font-bold rounded-lg hover:bg-[#E66000] transition-all"
            >
              Conheça o Zeo App
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <ImageWithFallback
              src="/hero-torre.png"
              alt="Torre de telecomunicações"
              className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
          <a href="#solutions" aria-label="Rolar para baixo">
            <ChevronDown size={32} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
};
