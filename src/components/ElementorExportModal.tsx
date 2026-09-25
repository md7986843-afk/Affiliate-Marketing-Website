import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Layers, BookOpen, ExternalLink } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface ElementorExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: AffiliateOffer;
}

export const ElementorExportModal: React.FC<ElementorExportModalProps> = ({
  isOpen,
  onClose,
  offer,
}) => {
  const [activeTab, setActiveTab] = useState<'elementor' | 'html' | 'guide'>('elementor');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Real Elementor JSON Template payload
  const elementorJsonTemplate = {
    version: '0.4',
    title: `${offer.productName} - High-Converting Affiliate Landing Page`,
    type: 'page',
    content: [
      {
        id: 'header-section',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          flex_direction: 'row',
          justify_content: 'space-between',
          align_items: 'center',
          padding: { unit: 'px', top: '16', right: '24', bottom: '16', left: '24' },
          background_background: 'classic',
          background_color: '#FFFFFF',
          sticky: 'top',
          sticky_effects_offset: 20,
        },
        elements: [
          {
            id: 'site-logo',
            elType: 'widget',
            widgetType: 'heading',
            settings: {
              title: `${offer.productName.split(' ')[0]}.`,
              header_size: 'h3',
              typography_font_family: 'Outfit',
              typography_font_weight: '800',
              title_color: '#0F172A',
            },
          },
          {
            id: 'header-nav-menu',
            elType: 'widget',
            widgetType: 'nav-menu',
            settings: {
              layout: 'horizontal',
              pointer: 'underline',
              typography_font_family: 'Plus Jakarta Sans',
            },
          },
          {
            id: 'header-cta-button',
            elType: 'widget',
            widgetType: 'button',
            settings: {
              text: 'Get The Offer',
              link: { url: offer.affiliateUrl, is_external: true, nofollow: true, custom_attributes: 'rel|sponsored nofollow' },
              background_color: '#059669',
              border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12' },
            },
          },
        ],
      },
      {
        id: 'hero-section',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          flex_direction: 'row',
          padding: { unit: 'px', top: '64', right: '24', bottom: '80', left: '24' },
          background_color: '#FBFBFC',
        },
        elements: [
          {
            id: 'hero-left-col',
            elType: 'container',
            settings: { width: { unit: '%', size: 60 } },
            elements: [
              {
                id: 'hero-badge',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: `🔥 ${offer.badgeText} · ${offer.discountPercent}`,
                  header_size: 'span',
                  title_color: '#92400E',
                },
              },
              {
                id: 'hero-h1-headline',
                elType: 'widget',
                widgetType: 'heading',
                settings: {
                  title: `${offer.headline} ${offer.headlineHighlight}`,
                  header_size: 'h1',
                  typography_font_size: { unit: 'px', size: 52 },
                  typography_font_weight: '800',
                  title_color: '#020617',
                },
              },
              {
                id: 'hero-description',
                elType: 'widget',
                widgetType: 'text-editor',
                settings: {
                  editor: `<p>${offer.subheadline}</p>`,
                },
              },
              {
                id: 'hero-cta-btn',
                elType: 'widget',
                widgetType: 'button',
                settings: {
                  text: offer.ctaText,
                  link: { url: offer.affiliateUrl, is_external: true, custom_attributes: 'rel|sponsored nofollow' },
                  background_color: '#059669',
                  border_radius: { unit: 'px', top: '12', right: '12', bottom: '12', left: '12' },
                },
              },
            ],
          },
          {
            id: 'hero-right-col',
            elType: 'container',
            settings: { width: { unit: '%', size: 40 } },
            elements: [
              {
                id: 'hero-product-image',
                elType: 'widget',
                widgetType: 'image',
                settings: {
                  image: { url: offer.heroImage },
                  border_radius: { unit: 'px', top: '16', right: '16', bottom: '16', left: '16' },
                },
              },
            ],
          },
        ],
      },
      {
        id: 'special-pricing-section',
        elType: 'container',
        settings: {
          content_width: 'boxed',
          padding: { unit: 'px', top: '80', right: '24', bottom: '80', left: '24' },
          background_color: '#F8FAFC',
        },
        elements: [
          {
            id: 'pricing-card',
            elType: 'container',
            settings: {
              background_color: '#FFFFFF',
              border_radius: { unit: 'px', top: '24', right: '24', bottom: '24', left: '24' },
              border_border: 'solid',
              border_width: { unit: 'px', top: '2', right: '2', bottom: '2', left: '2' },
              border_color: '#10B981',
            },
            elements: [
              {
                id: 'pricing-cta',
                elType: 'widget',
                widgetType: 'button',
                settings: {
                  text: 'Get The Offer Now',
                  link: { url: offer.affiliateUrl, is_external: true, custom_attributes: 'rel|sponsored nofollow' },
                  background_color: '#059669',
                  size: 'xl',
                },
              },
            ],
          },
        ],
      },
    ],
  };

  const jsonString = JSON.stringify(elementorJsonTemplate, null, 2);

  const cleanHtmlSnippet = `<!-- WordPress / Elementor Landing Page Affiliate Module -->
<section class="vanguard-affiliate-hero" style="background:#FBFBFC; padding: 60px 20px; font-family: 'Plus Jakarta Sans', sans-serif;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 40px; align-items: center;">
    <div style="flex: 1 1 540px;">
      <span style="background: rgba(245, 158, 11, 0.15); color: #92400E; padding: 6px 12px; border-radius: 8px; font-size: 13px; font-weight: 700;">
        ${offer.badgeText} · ${offer.discountPercent}
      </span>
      <h1 style="font-size: 48px; font-weight: 800; color: #020617; line-height: 1.15; margin-top: 16px;">
        ${offer.headline} <span style="color: #059669;">${offer.headlineHighlight}</span>
      </h1>
      <p style="font-size: 18px; color: #475569; margin: 20px 0 30px;">
        ${offer.subheadline}
      </p>
      <a href="${offer.affiliateUrl}" rel="sponsored nofollow" target="_blank"
         style="display: inline-block; background: #059669; color: #FFFFFF; font-weight: 700; font-size: 18px; padding: 16px 36px; border-radius: 12px; text-decoration: none; box-shadow: 0 10px 25px -5px rgba(5, 150, 105, 0.3);">
        ${offer.ctaText} &rarr;
      </a>
      <div style="margin-top: 20px; font-size: 12px; color: #64748B;">
        🔒 256-Bit SSL Encrypted Checkout · ${offer.guaranteeDays}-Day Money-Back Guarantee
      </div>
    </div>
    <div style="flex: 1 1 450px;">
      <img src="${offer.heroImage}" alt="${offer.productName}" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.08); border: 1px solid #E2E8F0;" />
    </div>
  </div>
</section>`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'elementor' ? jsonString : cleanHtmlSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `elementor-template-${offer.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xs">
              WP
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                WordPress & Elementor Pro Export Kit
              </h3>
              <p className="text-xs text-slate-400">
                Ready-to-import layout, semantic tags, and affiliate link configuration
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab selection */}
        <div className="px-6 py-3 bg-slate-100/80 border-b border-slate-200 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('elementor')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              activeTab === 'elementor'
                ? 'bg-white text-emerald-800 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-3.5 h-3.5 text-emerald-600" />
            <span>Elementor JSON Template</span>
          </button>
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              activeTab === 'html'
                ? 'bg-white text-emerald-800 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>Clean WordPress HTML</span>
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              activeTab === 'guide'
                ? 'bg-white text-emerald-800 shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
            <span>Elementor Setup Guide</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4 text-sm text-slate-700">
          {activeTab === 'elementor' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Standard Elementor 3.x+ Container JSON schema. Import via WP Admin &gt; Templates &gt; Saved Templates &gt; Import Templates.
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownloadJson}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .JSON</span>
                  </button>
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied JSON!' : 'Copy Template JSON'}</span>
                  </button>
                </div>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-slate-300 font-mono text-xs overflow-x-auto max-h-[380px] border border-slate-800">
                {jsonString}
              </pre>
            </div>
          )}

          {activeTab === 'html' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Lightweight inline-styled HTML. Paste directly into a WordPress Custom HTML block or Elementor HTML widget.
                </span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied HTML!' : 'Copy HTML'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs overflow-x-auto max-h-[380px] border border-slate-800">
                {cleanHtmlSnippet}
              </pre>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 leading-relaxed text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-1">
                <div className="font-bold">Affiliate Link SEO & Google Compliance Rule:</div>
                <p>
                  Always set your affiliate buttons in Elementor with <code className="bg-emerald-100 px-1 py-0.5 rounded font-mono">rel="sponsored nofollow"</code> to comply with Google Search Quality guidelines and avoid algorithmic ranking penalties.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="font-bold text-slate-900 text-base">
                  How to Build this in Elementor / Elementor Pro:
                </h4>
                <ol className="list-decimal list-inside space-y-2.5 text-slate-600 pl-1">
                  <li>
                    <strong>Container Layouts:</strong> Turn on <em>Flexbox Containers</em> in Elementor &gt; Settings &gt; Features. Set content width to 1200px boxed.
                  </li>
                  <li>
                    <strong>Global Colors & Fonts:</strong>
                    <ul className="list-disc list-inside pl-4 pt-1 space-y-1 text-slate-600">
                      <li>Primary Action Color: <code className="text-emerald-700 font-bold">#059669 (Emerald)</code></li>
                      <li>Dark Typography: <code className="text-slate-900 font-bold">#0F172A (Deep Slate)</code></li>
                      <li>Canvas Background: <code className="text-slate-700 font-bold">#FBFBFC (Clean Off-White)</code></li>
                      <li>Font Family: <em>Plus Jakarta Sans</em> (Body 400/500/600) + <em>Outfit</em> (Headings 700/800)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Button Widget Settings:</strong> Set link to your affiliate URL, check &quot;Open in new window&quot;, and in Custom Attributes enter: <code className="bg-slate-100 p-1 rounded font-mono">rel|sponsored nofollow</code>.
                  </li>
                  <li>
                    <strong>Sticky Header:</strong> Under Header Container &gt; Advanced &gt; Motion Effects &gt; set Sticky to <em>Top</em> and enable on Desktop &amp; Tablet.
                  </li>
                  <li>
                    <strong>FTC Disclosure:</strong> Keep the affiliate disclosure notice in the hero footer and final footer clearly legible without grayed-out contrast.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Optimized for fast Core Web Vitals & mobile conversion rate</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
