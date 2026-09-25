import React, { useState, useEffect } from 'react';
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Lock,
  Gift,
  AlertCircle
} from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface SpecialOfferProps {
  offer: AffiliateOffer;
  onCtaClick: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ offer, onCtaClick }) => {
  // Live dynamic countdown timer for authentic urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 43,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 2, minutes: 45, seconds: 0 }; // Soft reset for promo
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const offerInclusions = [
    'Complete Vanguard Core Platform License (Latest 2026 Edition)',
    '150+ Ready-to-Deploy Automated Workflow Templates',
    'Unlimited Cloud Synchronization & Workspace Devices',
    'Priority Customer Support & Onboarding Video Masterclass',
    'Complimentary VIP Access to Upcoming Feature Drops',
    `Ironclad ${offer.guaranteeDays}-Day 100% Risk-Free Money-Back Guarantee`,
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Affiliate Partner Promotion</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Claim Your Discount Before This Promotional Window Closes
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Lock in our reader-exclusive {offer.discountPercent} savings. Instant digital access directly through the official merchant partner.
          </p>
        </div>

        {/* Urgency Countdown Banner */}
        <div className="max-w-xl mx-auto mb-8 bg-slate-950 text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                Limited Time Offer
              </div>
              <div className="text-xs text-slate-400">
                Promotional pricing expires in:
              </div>
            </div>
          </div>

          {/* Tabular Numerals Timer */}
          <div className="flex items-center gap-2 font-mono text-center">
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              <span className="text-lg sm:text-xl font-bold text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <div className="text-[9px] uppercase tracking-wider text-slate-400">Hrs</div>
            </div>
            <span className="text-amber-400 font-bold">:</span>
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              <span className="text-lg sm:text-xl font-bold text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <div className="text-[9px] uppercase tracking-wider text-slate-400">Min</div>
            </div>
            <span className="text-amber-400 font-bold">:</span>
            <div className="bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
              <span className="text-lg sm:text-xl font-bold text-emerald-400 tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <div className="text-[9px] uppercase tracking-wider text-slate-400">Sec</div>
            </div>
          </div>
        </div>

        {/* Main Special Offer Card */}
        <div className="relative rounded-3xl bg-white border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/10 overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="bg-emerald-600 text-white text-xs sm:text-sm font-bold text-center py-2 px-4 tracking-wide">
            ★ VERIFIED AFFILIATE EXCLUSIVE: {offer.discountPercent} INSTANT DISCOUNT ACTIVE ★
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Product Visual & Badges */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl bg-slate-50 p-3 border border-slate-200/90 shadow-sm overflow-hidden group">
                  <img
                    referrerPolicy="no-referrer"
                    src={offer.specialOfferImage}
                    alt={`${offer.productName} Special Bundle`}
                    className="w-full h-auto object-cover rounded-xl aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-md">
                    {offer.discountPercent}
                  </div>
                </div>

                <div className="bg-amber-50/80 border border-amber-200/70 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-amber-900">
                  <Gift className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bonus Included:</strong> Free access to the 2026 High-Impact Automation Playbook (Normally $49, included at $0 today).
                  </span>
                </div>
              </div>

              {/* Offer Details, Pricing & Conversion Action */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {offer.billingFrequency}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {offer.productName} Complete Package
                  </h3>
                </div>

                {/* Price Display */}
                <div className="flex flex-wrap items-baseline gap-3.5 pt-1">
                  <div className="text-4xl sm:text-5xl font-black text-slate-950 font-['Outfit',sans-serif]">
                    {offer.discountedPrice}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-400 line-through">
                    {offer.originalPrice}
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-extrabold text-sm border border-emerald-200">
                    Save 76% Today
                  </span>
                </div>

                <p className="text-sm text-slate-600">
                  One-time special promotional investment. Zero recurring surprise charges. Protected by official vendor billing.
                </p>

                {/* Key Inclusions Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  {offerInclusions.map((inclusion, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{inclusion}</span>
                    </div>
                  ))}
                </div>

                {/* Large Conversion CTA */}
                <div className="pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={onCtaClick}
                    className="w-full py-4 sm:py-5 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-emerald-600/25 hover:shadow-2xl hover:shadow-emerald-600/35 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                  >
                    <span>Get The Offer Now</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>

                  {/* Safety & Trust micro-indicators */}
                  <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      256-Bit SSL Encrypted
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {offer.guaranteeDays}-Day Money Back
                    </span>
                    <span>·</span>
                    <span>Instant Digital Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
