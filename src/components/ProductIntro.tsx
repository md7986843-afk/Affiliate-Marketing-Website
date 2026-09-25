import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface ProductIntroProps {
  offer: AffiliateOffer;
  onCtaClick: () => void;
}

export const ProductIntro: React.FC<ProductIntroProps> = ({ offer, onCtaClick }) => {
  const [imageError, setImageError] = useState(false);

  const keyHighlights = [
    {
      title: 'Direct Cloud Deployment',
      description: 'Zero servers or complex infrastructure to manage. Runs instantly in your browser or native workspace.',
    },
    {
      title: 'Automated Multi-Channel Routing',
      description: 'Sync inputs and triggers across tools like Slack, Notion, Google Workspace, and CRM platforms seamlessly.',
    },
    {
      title: 'Intelligent Error Handling',
      description: 'Self-healing routines catch failed API calls and auto-retry without crashing your ongoing pipelines.',
    },
    {
      title: 'Universal Export & Backup',
      description: 'Keep 100% data ownership. Export all workflows, databases, and logs in standard JSON, CSV, or PDF formats.',
    },
  ];

  return (
    <section id="overview" className="py-20 lg:py-28 bg-[#FBFBFC] border-b border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Product Showcase Visual Carrier */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 rounded-3xl blur-2xl -z-10" />

              <div className="rounded-2xl bg-white p-3 shadow-xl shadow-slate-900/5 border border-slate-200/80 overflow-hidden">
                {!imageError ? (
                  <img
                    referrerPolicy="no-referrer"
                    src={offer.productIntroImage}
                    alt={`${offer.productName} Interface Overview`}
                    onError={() => setImageError(true)}
                    className="w-full h-auto rounded-xl object-cover aspect-[4/3] shadow-inner"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] rounded-xl bg-slate-900 text-white p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-emerald-400 text-sm">Dashboard Overview</span>
                      <span className="text-xs bg-slate-800 px-2.5 py-1 rounded text-slate-300">Live Engine</span>
                    </div>
                    <div className="space-y-3">
                      <div className="text-xl font-bold">{offer.productName}</div>
                      <p className="text-sm text-slate-300">{offer.tagline}</p>
                    </div>
                    <div className="text-xs text-slate-400">
                      High-converting architecture ready for instant deployment
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Quick Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-slate-950 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-slate-800 hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Under 10-Minute Setup</div>
                  <div className="text-[11px] text-slate-400">No coding or complicated setup needed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Explanation & Benefits */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Complete System Breakdown
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight [text-wrap:balance]">
              Designed Specifically to Replace Clunky Tools and Chaotic Spreadsheets
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Most productivity tools require endless tutorials, expensive add-ons, or custom developers just to get working. {offer.productName} was built from the ground up for speed, simplicity, and immediate return on investment.
            </p>

            {/* Checklist of core highlights */}
            <div className="space-y-4 pt-2">
              {keyHighlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-Section Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={onCtaClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>Get The Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protected by {offer.guaranteeDays}-day guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
