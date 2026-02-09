import React from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface DeviceMockupProps {
  src: string;
  alt: string;
  className?: string;
}

export const DeviceMockup = ({ src, alt, className = '' }: DeviceMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative drop-shadow-2xl w-full">
        {/* Monitor - moldura escura simulando o bezel */}
        <div className="relative rounded-xl overflow-hidden border-8 border-[#0d0d0d] bg-[#0d0d0d] w-full shadow-inner">
          <div className="aspect-video w-full bg-black">
            <ImageWithFallback
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        {/* Suporte fino e minimalista */}
        <div className="flex justify-center -mt-px">
          <div className="w-3 h-8 bg-[#1f1f1f] rounded-b-sm" />
        </div>
        {/* Base discreta */}
        <div className="flex justify-center -mt-px">
          <div className="w-24 h-2 bg-[#2a2a2a] rounded-b-xl" />
        </div>
      </div>
    </div>
  );
};
