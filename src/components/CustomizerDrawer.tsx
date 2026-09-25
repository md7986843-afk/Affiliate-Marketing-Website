import React from 'react';
import { X, Sliders, Check, RefreshCw, Link as LinkIcon, DollarSign, Tag, Sparkles } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';
import { PRESET_OFFERS } from '../data/mockData';

interface CustomizerDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  offer: AffiliateOffer;
  onUpdateOffer: (updated: Partial<AffiliateOffer>) => void;
  onSelectPreset: (presetId: string) => void;
}

export const CustomizerDrawer: React.FC<CustomizerDrawerProps> = ({
  isOpen,
  onClose,
  offer,
  onUpdateOffer,
  onSelectPreset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-white shadow-2xl h-full flex flex-col border-l border-slate-200 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="text-base font-bold text-white">Affiliate Offer Studio</h3>
              <p className="text-xs text-slate-400">Configure parameters for your specific niche</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-xs text-slate-700">
          {/* Preset Offer Switcher */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
              Niche Offer Presets
            </label>
            <div className="grid grid-cols-1 gap-2">
              {PRESET_OFFERS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => onSelectPreset(preset.id)}
                  className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                    offer.id === preset.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-xs'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold">{preset.nicheName}</div>
                    <div className="text-xs text-slate-500 font-normal">{preset.productName}</div>
                  </div>
                  {offer.id === preset.id && (
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Affiliate URL configuration */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-emerald-600" />
              <span>Your Affiliate Referral URL</span>
            </label>
            <p className="text-[11px] text-slate-500">
              All CTA buttons across the page automatically route to this destination with your tracking subID.
            </p>
            <input
              type="text"
              value={offer.affiliateUrl}
              onChange={(e) => onUpdateOffer({ affiliateUrl: e.target.value })}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-emerald-600"
              placeholder="https://merchant.example.com/deal?aff=YOUR_ID"
            />
          </div>

          {/* Offer Title & Tagline */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-emerald-600" />
              <span>Product Title & CTA</span>
            </label>

            <div>
              <span className="text-[11px] text-slate-500 font-medium">Product Name</span>
              <input
                type="text"
                value={offer.productName}
                onChange={(e) => onUpdateOffer({ productName: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <span className="text-[11px] text-slate-500 font-medium">Primary CTA Button Label</span>
              <input
                type="text"
                value={offer.ctaText}
                onChange={(e) => onUpdateOffer({ ctaText: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Pricing Controls */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              <span>Pricing & Discount</span>
            </label>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <span className="text-[11px] text-slate-500 font-medium">Discounted Price</span>
                <input
                  type="text"
                  value={offer.discountedPrice}
                  onChange={(e) => onUpdateOffer({ discountedPrice: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-emerald-700"
                />
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-medium">Original Price</span>
                <input
                  type="text"
                  value={offer.originalPrice}
                  onChange={(e) => onUpdateOffer({ originalPrice: e.target.value })}
                  className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-500"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] text-slate-500 font-medium">Discount Badge Text</span>
              <input
                type="text"
                value={offer.discountPercent}
                onChange={(e) => onUpdateOffer({ discountPercent: e.target.value })}
                className="w-full mt-1 px-3 py-2 rounded-xl border border-slate-300 text-xs"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => onSelectPreset('saas-productivity')}
            className="text-xs text-slate-500 hover:text-slate-800 underline"
          >
            Reset to Default
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors shadow-sm"
          >
            Apply & Close
          </button>
        </div>
      </div>
    </div>
  );
};
