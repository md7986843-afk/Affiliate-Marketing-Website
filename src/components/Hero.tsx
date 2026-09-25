import React, { useState } from 'react';
import {
  ShieldCheck,
  Star,
  ArrowRight,
  Play,
  Lock,
  Clock,
} from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface HeroProps {
  offer: AffiliateOffer;
  onCtaClick: () => void;
  onVideoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  offer,
  onCtaClick,
  onVideoClick,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/70 bg-gradient-to-b from-[#FBFBFC] via-[#F8FAFC] to-[#F1F5F9]/50">
      {/* Subtle architectural background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#0F172A 1px, transparent 1px), radial-gradient(#0F172A 1px, #FBFBFC 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition & Conversion Engine */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Promotional Kicker / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>{offer.badgeText}</span>
              <span className="text-amber-700/60 font-normal">|</span>
              <span className="text-amber-800 font-bold">{offer.discountPercent} Special</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-950 tracking-tight leading-[1.12] [text-wrap:balance]">
              {offer.headline}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
                {offer.headlineHighlight}
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {offer.subheadline}
            </p>

            {/* Primary Action Zone */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onCtaClick}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>{offer.ctaText}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onVideoClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-semibold text-slate-700 hover:text-slate-950 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-sm transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>{offer.secondaryCtaText}</span>
              </button>
            </div>

            {/* Trust and Safety Indicators (Below CTA) */}
            <div className="pt-2 border-t border-slate-200/70 space-y-2.5">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Lock className="w-4 h-4 text-emerald-600" />
                  <span>Secure & Easy Access</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{offer.guaranteeDays}-Day Money-Back Guarantee</span>
                </div>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Instant Digital Delivery</span>
                </div>
              </div>

              {/* Social proof micro-line */}
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2">
                  <img
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
                    alt="User"
                    className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
                    alt="User"
                    className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                  />
                  <img
                    referrerPolicy="no-referrer"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&auto=format&fit=crop&q=80"
                    alt="User"
                    className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                  />
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                    +14k
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-900">{offer.starRating}</span>
                  <span className="text-slate-400">({offer.ratingCount})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Hero Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Product Image Container */}
              <div className="relative rounded-2xl bg-white p-2 sm:p-2.5 shadow-xl shadow-slate-900/5 border border-slate-200/80 overflow-hidden">
                {!imageError ? (
                  <img
                    referrerPolicy="no-referrer"
                    src={offer.heroImage}
                    alt={`${offer.productName} Product Showcase`}
                    onError={() => setImageError(true)}
                    className="w-full h-auto object-cover rounded-xl aspect-[16/10] sm:aspect-[16/10]"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] rounded-xl bg-slate-900 text-white p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-300">
                        {offer.productName}
                      </span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                        {offer.discountPercent}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xl font-bold">{offer.tagline}</div>
                      <p className="text-xs text-slate-400">{offer.subheadline}</p>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold">
                      {offer.discountedPrice}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
