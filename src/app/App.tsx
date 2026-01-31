import React from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { LogoCloud } from '@/app/components/LogoCloud';
import { FeatureGrid } from '@/app/components/FeatureGrid';
import { Differentiators } from '@/app/components/Differentiators';
import { Metrics } from '@/app/components/Metrics';
import { UseCases } from '@/app/components/UseCases';
import { Testimonials } from '@/app/components/Testimonials';
import { SecuritySection } from '@/app/components/SecuritySection';
import { Footer } from '@/app/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <FeatureGrid />
        <Differentiators />
        <Metrics />
        <UseCases />
        <Testimonials />
        <SecuritySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
