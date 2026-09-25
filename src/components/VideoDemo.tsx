import React from 'react';
import { Play, Sparkles, CheckCircle, Volume2, Shield } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface VideoDemoProps {
  offer: AffiliateOffer;
  onPlayClick: () => void;
  onCtaClick: () => void;
}

export const VideoDemo: React.FC<VideoDemoProps> = ({
  offer,
  onPlayClick,
  onCtaClick,
}) => {
  return (
    <section className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Interactive Product Demonstration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            See How It Works in 2 Minutes
          </h2>
          <p className="text-base text-slate-300">
            Watch a live walkthrough of the core features, workflow automation engine, and instant deployment process.
          </p>
        </div>

        {/* Video Carrier Player Mockup */}
        <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden group">
          <div
            onClick={onPlayClick}
            className="relative aspect-video rounded-xl bg-slate-900 overflow-hidden cursor-pointer flex items-center justify-center select-none"
          >
            {/* Background interface snapshot */}
            <img
              referrerPolicy="no-referrer"
              src={offer.productIntroImage}
              alt="Video Preview Walkthrough"
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-300"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

            {/* Centered Large Play Button with ripple effect */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-3 bg-emerald-500/30 rounded-full blur-md group-hover:bg-emerald-500/50 transition-all animate-pulse" />
                <div className="relative w-20 h-20 rounded-full bg-emerald-600 group-hover:bg-emerald-500 flex items-center justify-center text-white shadow-xl transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
              <span className="text-sm font-semibold text-white tracking-wide bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-700/60">
                Click to Watch Walkthrough (2:15)
              </span>
            </div>

            {/* Bottom Video Controls Mock Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300 bg-slate-950/70 backdrop-blur-md px-4 py-2.5 rounded-lg border border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="font-medium text-white">Full HD 1080p Interactive Demo</span>
                <span className="text-slate-500 hidden sm:inline">|</span>
                <span className="text-slate-400 hidden sm:inline">Overview & Feature Tour</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Volume2 className="w-4 h-4" />
                <span>Audio enabled</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section Supporting CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-xl">
          <div className="flex items-center gap-3 text-sm text-slate-300">
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Ready to implement this system in your business today?</span>
          </div>

          <button
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer shrink-0"
          >
            Claim Discounted Access
          </button>
        </div>
      </div>
    </section>
  );
};
