import React from 'react';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface SocialProofProps {
  offer: AffiliateOffer;
}

export const SocialProof: React.FC<SocialProofProps> = ({ offer }) => {
  return (
    <section id="reviews" className="py-20 lg:py-24 bg-white border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Real Customer Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Trusted by Over {offer.customersCount} Teams Worldwide
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Here is what verified customers and early adopters say after switching to {offer.productName}.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="pt-2 inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-bold text-slate-900">{offer.starRating} out of 5</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-600 font-medium">Based on {offer.ratingCount}</span>
          </div>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offer.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FBFBFC] rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Purchase</span>
                  </div>
                </div>

                {/* Highlight Quote Title */}
                <h3 className="text-base font-bold text-slate-900 mb-2.5">
                  &ldquo;{testimonial.highlight}&rdquo;
                </h3>

                {/* Full Testimonial Text */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {testimonial.quote}
                </p>
              </div>

              {/* Customer Author Row */}
              <div className="pt-5 mt-6 border-t border-slate-200/60 flex items-center gap-3.5">
                <img
                  referrerPolicy="no-referrer"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500/20"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {testimonial.role} · <span className="text-slate-700 font-medium">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliate Review Disclosure / Trust Sub-notice */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Testimonials shown reflect verified buyer experiences with the merchant’s product. Results may vary depending on individual workflow consistency and business scale.
        </div>
      </div>
    </section>
  );
};
