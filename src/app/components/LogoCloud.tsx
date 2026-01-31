import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const partners = [
  { name: 'Crown Castle', logo: '/logos/crown-castle.svg' },
  { name: 'Helios Towers', logo: '/logos/helios-towers.png' },
  { name: 'Edotco Group', logo: '/logos/edotco.png' },
  { name: 'IHS Towers', logo: '/logos/ihs-towers.png' },
];

const LogoCard = ({ partner }: { partner: (typeof partners)[0] }) => (
  <div className="flex-shrink-0 w-[280px] md:w-[320px] px-4">
    <div className="flex items-center justify-center p-8 md:p-10 bg-white rounded-xl border border-gray-100 shadow-sm min-h-[140px] md:min-h-[180px]">
      <ImageWithFallback
        src={partner.logo}
        alt={partner.name}
        className="max-h-14 md:max-h-20 w-auto object-contain"
      />
    </div>
  </div>
);

export const LogoCloud = () => {
  const trackContent = [...partners, ...partners];

  return (
    <section className="py-16 border-y border-gray-100 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-12">
          Confiado pelos principais provedores de infraestrutura do mundo
        </p>
        <div className="relative overflow-hidden">
          <div
            className="flex animate-logo-scroll"
            style={{ width: 'max-content' }}
          >
            {trackContent.map((partner, index) => (
              <LogoCard key={`${partner.name}-${index}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
