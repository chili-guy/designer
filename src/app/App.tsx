import React from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Hero } from '@/app/components/Hero';
import { LogoCloud } from '@/app/components/LogoCloud';
import { QuemSomos } from '@/app/components/QuemSomos';
import { FeatureGrid } from '@/app/components/FeatureGrid';
import { Differentiators } from '@/app/components/Differentiators';
import { Metrics } from '@/app/components/Metrics';
import { Roadmap } from '@/app/components/Roadmap';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-[#FF6B00] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <QuemSomos />
        <FeatureGrid />
        <Differentiators />
        <Metrics />
        <Roadmap />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
