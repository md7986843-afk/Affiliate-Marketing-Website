import React from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sliders,
  FileCode,
  ExternalLink,
  ShieldAlert,
  Sparkles,
  Link,
  Zap
} from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface AffiliateControlBarProps {
  offer: AffiliateOffer;
  viewMode: 'desktop' | 'tablet' | 'mobile';
  setViewMode: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenCustomizer: () => void;
  onOpenExport: () => void;
  onTestRedirect: () => void;
}

export const AffiliateControlBar: React.FC<AffiliateControlBarProps> = ({
  offer,
  viewMode,
  setViewMode,
  onOpenCustomizer,
  onOpenExport,
  onTestRedirect,
}) => {
  return (
    <aside aria-label="Affiliate Page Toolbar" className="bg-slate-950 text-white border-b border-slate-800 text-xs py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Active preset & affiliate link indicator */}
        <div className="flex items-center gap-2.5 truncate">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-slate-200">Active Offer:</span>
          <span className="bg-slate-800 text-emerald-400 font-semibold px-2 py-0.5 rounded border border-slate-700 truncate max-w-[180px] sm:max-w-none">
            {offer.productName}
          </span>
          <span className="hidden md:inline text-slate-500">·</span>
          <span className="hidden md:inline text-slate-400 truncate max-w-xs font-mono text-[11px]">
            {offer.affiliateUrl}
          </span>
        </div>

        {/* Center: Responsive Viewport Simulation */}
        <div className="hidden lg:flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
          <button
            onClick={() => setViewMode('desktop')}
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'desktop' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
            title="Desktop 1440px View"
          >
            <Monitor className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('tablet')}
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'tablet' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
            title="Tablet 768px View"
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`p-1.5 rounded-md transition-colors ${
              viewMode === 'mobile' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
            }`}
            title="Mobile 375px View"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onTestRedirect}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Test Affiliate Redirect</span>
            <span className="sm:hidden">Test Link</span>
          </button>

          <button
            type="button"
            onClick={onOpenCustomizer}
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Customize Offer</span>
            <span className="sm:hidden">Edit</span>
          </button>

          <button
            type="button"
            onClick={onOpenExport}
            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Elementor / WP Export</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
