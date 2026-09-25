import React from 'react';
import { ShieldCheck, Lock, Headphones, RefreshCw, AlertCircle, CheckCircle2 } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface TrustSectionProps {
  offer: AffiliateOffer;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ offer }) => {
  const trustPillars = [
    {
      icon: Lock,
      title: '256-Bit SSL Encrypted Checkout',
      description: 'Your connection to the official merchant checkout is fortified with bank-grade encryption protocols.',
    },
    {
      icon: ShieldCheck,
      title: `${offer.guaranteeDays}-Day Money-Back Guarantee`,
      description: 'Try the product completely risk-free. If it does not meet expectations, request a 100% full refund.',
    },
    {
      icon: RefreshCw,
      title: 'Instant Automated Access',
      description: 'Zero waiting for physical delivery. Login credentials and download links are delivered instantly to your inbox.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Customer Support',
      description: 'Official merchant engineering team is ready to answer questions, resolve technical queries, and assist 24/7.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Trust, Security & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Buy with Complete Confidence
          </h2>
          <p className="text-base text-slate-600">
            We only recommend vetted, industry-standard digital tools backed by verified merchant buyer protections.
          </p>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#FBFBFC] border border-slate-200/70 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Affiliate Disclosure Box */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-7 flex flex-col sm:flex-row items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-800 flex items-center justify-center shrink-0">
            <AlertCircle className="w-5 h-5 text-amber-700" />
          </div>
          <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
            <div className="font-bold text-slate-900 text-sm">
              Official Affiliate Disclosure & Transparency Notice (FTC Compliant)
            </div>
            <p>
              This website is an independent affiliate publisher and consumer review resource. When you click the promotional buttons on this page and proceed to the merchant’s official platform to make a purchase, we may receive an affiliate compensation or referral commission at zero additional cost to you.
            </p>
            <p className="text-slate-500">
              Our reviews and recommendations are based on rigorous feature evaluations, objective technical benchmarks, and real user feedback. We never accept payment to publish misleading or artificially inflated reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
