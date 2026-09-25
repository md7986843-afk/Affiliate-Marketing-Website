/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AffiliateOffer } from './types/affiliate';
import { DEFAULT_OFFER } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductIntro } from './components/ProductIntro';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { VideoDemo } from './components/VideoDemo';
import { SocialProof } from './components/SocialProof';
import { SpecialOffer } from './components/SpecialOffer';
import { TrustSection } from './components/TrustSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { AffiliateRedirectModal } from './components/AffiliateRedirectModal';
import { VideoModal } from './components/VideoModal';
import { LegalModals } from './components/LegalModals';

export default function App() {
  const [offer, setOffer] = useState<AffiliateOffer>(DEFAULT_OFFER);

  // Modal States
  const [isRedirectOpen, setIsRedirectOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'disclosure' | 'contact' | null>(null);

  const handleCtaClick = () => {
    setIsRedirectOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-slate-900 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. Header (Sticky with Logo, Menu, and Button) */}
      <Header
        offer={offer}
        onCtaClick={handleCtaClick}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section (Clean Left Text, Right Image) */}
        <Hero
          offer={offer}
          onCtaClick={handleCtaClick}
          onVideoClick={() => setIsVideoOpen(true)}
        />

        {/* 3. Benefits Section */}
        <Benefits offer={offer} />

        {/* 4. Product / Offer Introduction */}
        <ProductIntro
          offer={offer}
          onCtaClick={handleCtaClick}
        />

        {/* 5. Features Section */}
        <Features offer={offer} />

        {/* 6. How It Works */}
        <HowItWorks
          offer={offer}
          onCtaClick={handleCtaClick}
        />

        {/* 7. Product Demo / Video Section */}
        <VideoDemo
          offer={offer}
          onPlayClick={() => setIsVideoOpen(true)}
          onCtaClick={handleCtaClick}
        />

        {/* 8. Social Proof / Testimonials */}
        <SocialProof offer={offer} />

        {/* 9. Special Offer Section */}
        <SpecialOffer
          offer={offer}
          onCtaClick={handleCtaClick}
        />

        {/* 10. Trust Section */}
        <TrustSection offer={offer} />

        {/* 11. FAQ Section */}
        <FaqSection
          offer={offer}
          onCtaClick={handleCtaClick}
        />

        {/* 12. Final CTA Section */}
        <FinalCta
          offer={offer}
          onCtaClick={handleCtaClick}
        />
      </main>

      {/* 13. Footer */}
      <Footer
        offer={offer}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenDisclosure={() => setLegalModalType('disclosure')}
        onOpenContact={() => setLegalModalType('contact')}
      />

      {/* Interactive Modals */}
      <AffiliateRedirectModal
        isOpen={isRedirectOpen}
        onClose={() => setIsRedirectOpen(false)}
        offer={offer}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        offer={offer}
        onCtaClick={handleCtaClick}
      />

      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
        offer={offer}
      />
    </div>
  );
}
