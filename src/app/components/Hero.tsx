import React from 'react';
import { motion } from 'motion/react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight, Activity, Shield, FileCheck } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Carousel, CarouselContent, CarouselItem } from '@/app/components/ui/carousel';

const heroSlides = [
  {
    src: '/hero-structural-software.png',
    title: 'Análise P-Delta Não Linear',
    description: 'Simulação em tempo real para torres treliçadas de 120m',
  },
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1080',
    title: 'Verificação de Conformidade',
    description: 'Cálculos automatizados conforme Eurocode 3 e TIA-222-H',
  },
  {
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1080',
    title: 'Otimização Estrutural',
    description: 'Dimensionamento e análise de tensões em estruturas metálicas',
  },
];

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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
              Motor Estrutural de Nova Geração
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-black leading-[1.1] mb-6 tracking-tight">
              Engenharia com <br />
              <span className="text-[#FF6B00]">Precisão</span> em Escala.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              A plataforma em nuvem padrão do setor para análise e cálculo estrutural de infraestrutura de telecomunicações. Confiada por empresas globais de torres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#FF6B00] text-white px-8 py-4 font-bold flex items-center justify-center gap-2 hover:bg-[#E66000] transition-all group">
                Iniciar Teste Grátis
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border-2 border-black text-black px-8 py-4 font-bold hover:bg-black hover:text-white transition-all">
                Ver Soluções Empresariais
              </button>
            </div>
            
            <div className="mt-12 flex flex-col gap-6">
              <div className="flex items-center gap-8 grayscale opacity-50">
                <div className="flex items-center gap-2">
                  <Shield size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">Certificado ISO 27001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity size={18} />
                  <span className="text-xs font-semibold uppercase tracking-wider">99,99% Uptime</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <FileCheck size={14} className="opacity-70" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider">Referências normativas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block px-3 py-1.5 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-gray-200">
                    NBR 6118
                  </span>
                <span className="inline-block px-3 py-1.5 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-gray-200">
                  Eurocode 3
                </span>
                <span className="inline-block px-3 py-1.5 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-gray-200">
                  TIA-222-H
                </span>
                <span className="inline-block px-3 py-1.5 bg-gray-100 text-[10px] font-bold uppercase tracking-widest text-gray-600 border border-gray-200">
                    AS/NZS 1170
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-800 aspect-[4/3]">
              <Carousel
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 4000, stopOnMouseEnter: true })]}
                className="w-full h-full"
              >
                <CarouselContent className="h-full">
                  {heroSlides.map((slide, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                        <ImageWithFallback
                          src={slide.src}
                          alt={slide.title}
                          className="w-[117.6%] h-[117.6%] object-cover opacity-80 object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                          <div className="flex gap-4 mb-4">
                            <div className="w-12 h-1 bg-[#FF6B00]" />
                            <div className="w-12 h-1 bg-white/20" />
                            <div className="w-12 h-1 bg-white/20" />
                          </div>
                          <h3 className="text-white text-lg font-bold">{slide.title}</h3>
                          <p className="text-gray-400 text-sm">{slide.description}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
            {/* Abstract accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF6B00]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
