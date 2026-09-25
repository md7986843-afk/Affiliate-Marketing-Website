import React from 'react';
import { IconRenderer } from './IconRenderer';
import { AffiliateOffer } from '../types/affiliate';

interface FeaturesProps {
  offer: AffiliateOffer;
}

export const Features: React.FC<FeaturesProps> = ({ offer }) => {
  return (
    <section id="features" className="py-20 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Enterprise Power, Consumer Simplicity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Everything Included in Today’s Special Deal
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Every feature is purpose-built to accelerate your turnaround times and deliver repeatable, high-converting results.
          </p>
        </div>

        {/* 6-Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offer.features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-[#FBFBFC] hover:bg-white border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Minimal Icon Box */}
                <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5 group-hover:bg-emerald-600 transition-colors shadow-xs">
                  <IconRenderer name={feature.iconName} className="w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                  {feature.title}
                </h3>

                {/* Explanation */}
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              {/* Scan status footer */}
              <div className="pt-4 mt-5 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
                <span>Feature {index + 1} of 6</span>
                <span className="font-semibold text-emerald-700">Full Access</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
