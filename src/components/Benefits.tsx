import React from 'react';
import { IconRenderer } from './IconRenderer';
import { AffiliateOffer } from '../types/affiliate';

interface BenefitsProps {
  offer: AffiliateOffer;
}

export const Benefits: React.FC<BenefitsProps> = ({ offer }) => {
  return (
    <section id="benefits" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Why Professionals Choose Vanguard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Engineered to Solve Your Biggest Bottlenecks
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Everything you need to eliminate friction, automate manual toil, and operate at peak efficiency.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offer.benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-[#FBFBFC] hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-emerald-600/40 shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Subtle top indicator line on hover */}
              <div className="absolute top-0 left-6 right-6 h-0.5 bg-transparent group-hover:bg-emerald-600 transition-colors rounded-t" />

              <div className="space-y-4">
                {/* Minimal Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                  <IconRenderer name={benefit.iconName} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {benefit.description}
                </p>
              </div>

              {/* Card Footer Micro-Note */}
              <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span>Core Benefit</span>
                <span className="font-semibold text-emerald-700">Included</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
