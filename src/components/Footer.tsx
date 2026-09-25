import React from 'react';
import { ShieldCheck, Lock, CheckCircle2, ExternalLink, Mail, Award } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface FooterProps {
  offer: AffiliateOffer;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenDisclosure: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  offer,
  onOpenPrivacy,
  onOpenTerms,
  onOpenDisclosure,
  onOpenContact,
}) => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0B1528] text-slate-200 py-16 lg:py-20 border-t border-slate-800/90 relative overflow-hidden">
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Brand & Description (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-extrabold text-base shadow-md">
                V
              </div>
              <span className="font-['Outfit',sans-serif] text-2xl font-bold text-white tracking-tight">
                {offer.productName.split(' ')[0]} Review
              </span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Your trusted technological review portal and official promotional partner for {offer.productName}. We help professionals and organizations make data-driven software decisions with verified merchant discounts.
            </p>

            {/* Trust Badges Row */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-Bit SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{offer.guaranteeDays}-Day Guarantee</span>
              </div>
            </div>
          </div>

          {/* Quick Anchor Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase font-['Outfit',sans-serif]">
              Quick Navigation
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <a href="#benefits" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Core Benefits</span>
                </a>
              </li>
              <li>
                <a href="#overview" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Product Overview</span>
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Features List</span>
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>How It Works</span>
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Customer Reviews</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Special Discount & Pricing</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group">
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Frequently Asked Questions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Links (Col 9-12) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-emerald-400 font-bold text-sm tracking-wider uppercase font-['Outfit',sans-serif]">
              Compliance & Legal
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Privacy Policy</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Terms & Conditions</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenDisclosure}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Affiliate Disclosure Notice</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <span className="text-emerald-500 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
                  <span>Contact & Publisher Support</span>
                </button>
              </li>
            </ul>

            {/* Support micro-box */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Need Assistance?</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Contact our editorial team anytime for inquiries regarding verified discount vouchers or merchant partnership validation.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright Divider */}
        <div className="pt-8 border-t border-slate-800/90 space-y-4">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <strong>FTC & Legal Notice:</strong> This website is an independent affiliate publisher. When visitors click promotional offer links on this page and proceed to the merchant platform to complete a purchase, we may receive an affiliate referral commission at no additional cost to you. All trademarks, logos, and brand names are property of their respective owners.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-xs sm:text-sm text-slate-400">
            <div>
              &copy; {currentYear} Vanguard Affiliate Marketing Hub. All rights reserved.
            </div>

            <div className="flex items-center gap-5 text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Publisher</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span>SSL Encrypted</span>
              </span>
              <span>·</span>
              <span className="text-slate-300">FTC Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
