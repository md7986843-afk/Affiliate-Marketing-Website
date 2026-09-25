import React from 'react';
import { ArrowRight, ShieldCheck, Lock, Sparkles, CheckCircle2 } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface FinalCtaProps {
  offer: AffiliateOffer;
  onCtaClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ offer, onCtaClick }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Urgent Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exclusive Promotional Opportunity</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight [text-wrap:balance]">
          Ready to Get Started?
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Check the official offer and see if it is right for you. Your {offer.discountPercent} promotional discount is automatically reserved.
        </p>

        {/* High-Converting CTA Button */}
        <div className="pt-2 max-w-md mx-auto space-y-4">
          <button
            type="button"
            onClick={onCtaClick}
            className="w-full py-5 px-10 rounded-2xl bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-black text-xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/40 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40"
          >
            <span>GET THE OFFER</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
          </button>

          {/* Guarantee line */}
          <div className="flex items-center justify-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              {offer.guaranteeDays}-Day 100% Money-Back Guarantee
            </span>
            <span className="text-slate-600">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400" />
              Instant Secure Checkout
            </span>
          </div>
        </div>

        {/* Mandatory Affiliate Disclosure Below CTA */}
        <div className="pt-8 border-t border-slate-800/80 max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            This page may contain affiliate links. We may earn a commission if you make a purchase through our links, at no additional cost to you.
          </p>
        </div>
      </div>
    </section>
  );
};
