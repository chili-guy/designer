import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface MonitorLogoMockupProps {
  className?: string;
}

export const MonitorLogoMockup = ({ className = '' }: MonitorLogoMockupProps) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative drop-shadow-2xl w-full">
        {/* Monitor - bezel escuro fino */}
        <div className="relative rounded-lg overflow-hidden border-2 border-[#374151] w-full shadow-lg">
          {/* Tela preta com logo centralizado */}
          <div className="aspect-video w-full bg-black flex items-center justify-center p-8">
            <ImageWithFallback
              src="/logo-zeo.png"
              alt="ZEO"
              className="max-h-16 md:max-h-24 w-auto object-contain"
            />
          </div>
        </div>
        {/* Suporte prateado */}
        <div className="flex justify-center -mt-px">
          <div className="w-4 h-10 bg-[#d1d5db] rounded-b-md border-x border-[#9ca3af]" />
        </div>
        {/* Base retangular prateada */}
        <div className="flex justify-center -mt-px">
          <div className="w-32 h-4 bg-[#d1d5db] rounded-b-xl border border-[#9ca3af]" />
        </div>
      </div>
    </div>
  );
};
