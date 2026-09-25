import React, { useState } from 'react';
import { X, Shield, FileText, AlertCircle, Mail, CheckCircle2 } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'disclosure' | 'contact' | null;
  onClose: () => void;
  offer: AffiliateOffer;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose, offer }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!type) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && <Shield className="w-5 h-5 text-emerald-400" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-emerald-400" />}
            {type === 'disclosure' && <AlertCircle className="w-5 h-5 text-amber-400" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-emerald-400" />}
            <h3 className="text-base font-bold text-white capitalize">
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'disclosure' && 'FTC Affiliate Disclosure Notice'}
              {type === 'contact' && 'Contact Publisher Support'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' && (
            <div className="space-y-3">
              <p>
                <strong>Effective Date: 2026</strong>
              </p>
              <p>
                We respect your personal privacy. When you browse this informational landing page, we do not require registration or store your financial payment details.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information We Collect</h4>
              <p>
                We may collect non-personally identifiable diagnostic analytics (such as browser type, referring page, and operating system) solely to monitor page loading speed, Core Web Vitals, and affiliate referral click reliability.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Merchant Checkout Platform</h4>
              <p>
                When you click through to the official {offer.productName} checkout portal, all payment processing is governed exclusively by the merchant’s secure, PCI-compliant payment infrastructure.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Cookies & Tracking</h4>
              <p>
                Affiliate tracking cookies may be set when clicking our outbound links to credit our partner account for referrals within a standard 30–60 day attribution window.
              </p>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-3">
              <p>
                <strong>Terms of Website Use & Affiliate Disclaimer</strong>
              </p>
              <p>
                By accessing this affiliate promotional review page, you agree to these standard terms:
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Informational Purposes Only</h4>
              <p>
                All reviews, feature comparisons, and promotional summaries provided are for informational and educational evaluation. While we strive to maintain current pricing and discount details, the merchant’s live checkout page always supersedes any discrepancies.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Third-Party Products</h4>
              <p>
                We are an independent publisher. Product warranties, licenses, software updates, and refund guarantees are fulfilled directly by the official merchant partner according to their published store terms.
              </p>
            </div>
          )}

          {type === 'disclosure' && (
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900">
                <strong>FTC Compliance Statement:</strong> In compliance with the Federal Trade Commission (FTC) guidelines, please assume that any links leading to third-party offers or merchant sites on this page are affiliate links.
              </div>
              <p>
                If you choose to click a link on this page and make a purchase on the merchant’s website, we may earn an affiliate commission.
              </p>
              <p>
                <strong>What this means for you:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-700">
                <li>You never pay more by using our affiliate links.</li>
                <li>In most cases, our partner links provide you with a lower, negotiated discount price (e.g. {offer.discountPercent} off).</li>
                <li>Our editorial evaluations remain unbiased and grounded in technical facts.</li>
              </ul>
            </div>
          )}

          {type === 'contact' && (
            <div>
              {contactSubmitted ? (
                <div className="py-10 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Message Received!</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Thank you for reaching out. Our support team responds to inquiries within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <p className="text-xs text-slate-500">
                    Have questions regarding our affiliate review, discount validity, or commercial partnerships? Send us a message below.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1">Message or Question</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
