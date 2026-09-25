import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  ShieldCheck,
  CheckCircle,
  Copy,
  Check,
  X,
  Lock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface AffiliateRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: AffiliateOffer;
}

export const AffiliateRedirectModal: React.FC<AffiliateRedirectModalProps> = ({
  isOpen,
  onClose,
  offer,
}) => {
  const [countdown, setCountdown] = useState(3);
  const [copied, setCopied] = useState(false);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(3);
      setRedirected(false);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setRedirected(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(offer.affiliateUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleProceed = () => {
    // In production, opens the affiliate link
    // Avoid window.open in restricted iframe, use safe anchor or notification
    window.location.href = '#pricing';
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header Ribbon */}
        <div className="bg-emerald-600 px-6 py-3.5 flex items-center justify-between text-white">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <Lock className="w-4 h-4" />
            <span>Secure Merchant Handoff</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-700/50 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-center">
          {/* Animated Icon & Status */}
          <div className="relative mx-auto w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-inner">
            <div className="absolute -inset-2 bg-emerald-500/20 rounded-3xl animate-ping opacity-60" />
            <ShieldCheck className="w-10 h-10 relative z-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Redirecting to Official Merchant
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              You are being safely routed to the authorized checkout server with your reader discount automatically attached.
            </p>
          </div>

          {/* Verification checklist items */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/90 text-left space-y-2.5 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Product:</span>
              <span className="font-bold text-slate-900">{offer.productName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Verified Discount:</span>
              <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                {offer.discountPercent} (Saved ${197 - 47})
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Affiliate Referral Cookie:</span>
              <span className="font-mono text-slate-700 text-[11px] truncate max-w-[200px]">
                partner_deal_2026 (Active)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Security Standard:</span>
              <span className="text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" />
                256-Bit SSL Encrypted
              </span>
            </div>
          </div>

          {/* Destination URL Display with Copy */}
          <div className="space-y-1.5 text-left">
            <div className="text-[11px] font-semibold text-slate-500 flex items-center justify-between">
              <span>Affiliate Offer URL</span>
              <button
                type="button"
                onClick={handleCopyLink}
                className="text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied URL!' : 'Copy Link'}</span>
              </button>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono truncate border border-slate-200">
              {offer.affiliateUrl}
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleProceed}
              className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Continue to Official Merchant ({countdown > 0 ? `${countdown}s` : 'Ready'})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Stay on this review page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
