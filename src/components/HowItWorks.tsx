import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface HowItWorksProps {
  offer: AffiliateOffer;
  onCtaClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ offer, onCtaClick }) => {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-[#FBFBFC] border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Frictionless Onboarding
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            How to Claim Your Special Offer in 3 Simple Steps
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            We’ve negotiated the highest available partner discount with the official vendor. Here is exactly how to redeem it.
          </p>
        </div>

        {/* 3 Steps Timeline / Cards */}
        <div className="relative">
          {/* Desktop horizontal connector line */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {offer.steps.map((stepItem, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-lg flex items-center justify-center shadow-xs">
                      {stepItem.step}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {stepItem.note}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {stepItem.description}
                  </p>
                </div>

                {/* Step Sub-Trust Marker */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified 100% safe & instant</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button after process */}
        <div className="mt-14 text-center space-y-3">
          <button
            type="button"
            onClick={onCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <span>Lock In Your Discount Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="text-xs text-slate-500">
            No credit card required to view the official merchant pricing tiers
          </div>
        </div>
      </div>
    </section>
  );
};
