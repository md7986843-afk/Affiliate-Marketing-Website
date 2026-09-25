import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AffiliateOffer } from '../types/affiliate';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  offer: AffiliateOffer;
  onCtaClick: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  offer,
  onCtaClick,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: '0:00 - Introduction & The Problem', summary: 'Why manual workflows cost modern teams thousands every month.' },
    { title: '0:42 - Core Automation Engine', summary: 'Live demonstration connecting triggers with drag-and-drop actions.' },
    { title: '1:15 - Template Marketplace', summary: 'Selecting and deploying 150+ pre-built workflow templates in 30 seconds.' },
    { title: '1:50 - Live ROI & Claiming Deal', summary: 'Activating the 76% verified partner discount rate.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden text-white flex flex-col">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-bold text-white">
              {offer.productName} — Official Product Walkthrough & Demo
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            referrerPolicy="no-referrer"
            src={offer.productIntroImage}
            alt="Demo Stream"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isPlaying ? 'opacity-85' : 'opacity-40'
            }`}
          />

          {/* Interactive Player Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex flex-col justify-between p-6 pointer-events-none">
            <div className="flex justify-between items-start">
              <span className="text-xs bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-slate-300 border border-slate-700/60">
                Chapter {activeChapter + 1} of 4: {chapters[activeChapter].title.split('-')[1]}
              </span>
            </div>

            {/* Bottom Controls Bar */}
            <div className="pointer-events-auto space-y-3">
              {/* Progress bar */}
              <div className="w-full h-1.5 bg-slate-700/80 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${(activeChapter + 1) * 25}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1.5 hover:text-white transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-1.5 hover:text-white transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-400">
                    01:24 / 02:15
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                    HD 1080P
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Chapters & Conversion Action */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all ${
                  activeChapter === idx
                    ? 'bg-slate-800 border-emerald-500/60 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="text-[11px] font-bold truncate">{chap.title}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{chap.summary}</div>
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-900">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Convinced by the demo? Lock in the {offer.discountPercent} special.</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onCtaClick();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get The Offer Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
