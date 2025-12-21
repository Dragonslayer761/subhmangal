import React from 'react';
import { WeddingPackage } from '../types';
import { Check, Camera, Video, Film, Users, Star } from 'lucide-react';

interface PackageCardProps {
  pkg: WeddingPackage;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const getBorderColor = () => {
    switch (pkg.highlightColor) {
      case 'gold': return 'border-amber-500/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]';
      case 'red': return 'border-red-900/30 shadow-[0_0_15px_rgba(185,28,28,0.05)]';
      case 'green': return 'border-emerald-900/30 shadow-[0_0_15px_rgba(6,95,70,0.05)]';
      case 'purple': return 'border-purple-900/30 shadow-[0_0_15px_rgba(147,51,234,0.05)]';
      default: return 'border-neutral-800';
    }
  };

  const getTextColor = () => {
    switch (pkg.highlightColor) {
      case 'gold': return 'text-premiumGold';
      case 'red': return 'text-red-400';
      case 'green': return 'text-emerald-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-white';
    }
  };

  return (
    <div className={`relative bg-neutral-900/40 backdrop-blur-sm border ${getBorderColor()} p-8 rounded-sm flex flex-col h-full transition-all duration-500 hover:-translate-y-2 hover:bg-neutral-900/60 group`}>
      {pkg.isPremium && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-premiumGold to-amber-500 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-black" />
          Premium Choice
        </div>
      )}

      <div className="mb-8 text-center border-b border-white/5 pb-6">
        <h3 className={`font-serif text-2xl mb-3 ${getTextColor()} tracking-wide`}>{pkg.title}</h3>
        {pkg.price ? (
          <div className="text-4xl font-light text-white mb-2">{pkg.price}</div>
        ) : (
          <div className="text-2xl font-light text-neutral-500 mb-2">Contact for Quote</div>
        )}
        {pkg.duration && <div className="text-xs text-neutral-500 uppercase tracking-widest">{pkg.duration}</div>}
      </div>

      <p className="text-neutral-400 mb-8 text-center text-sm font-light leading-relaxed">
        {pkg.description}
      </p>

      {/* Features List */}
      <div className="space-y-5 mb-8 flex-grow">
        <h4 className="text-neutral-600 text-[10px] uppercase tracking-[0.2em] text-center mb-6">Deliverables included</h4>

        <div className="flex items-start gap-4 group/item">
          <Camera className="w-5 h-5 text-neutral-600 group-hover/item:text-premiumGold transition-colors mt-0.5 shrink-0" />
          <div className="text-sm text-neutral-300">
            <span className="block font-medium text-white">{pkg.features.editedPhotos} Edited Pictures</span>
            <span className="text-neutral-600 text-xs">{pkg.features.rawPhotos}</span>
          </div>
        </div>

        <div className="flex items-start gap-4 group/item">
          <Video className="w-5 h-5 text-neutral-600 group-hover/item:text-premiumGold transition-colors mt-0.5 shrink-0" />
          <div className="text-sm text-neutral-300">
            <span className="block">{pkg.features.video}</span>
          </div>
        </div>

        <div className="flex items-start gap-4 group/item">
          <Film className="w-5 h-5 text-neutral-600 group-hover/item:text-premiumGold transition-colors mt-0.5 shrink-0" />
          <div className="text-sm text-neutral-300">
            <span className="block">{pkg.features.reels}</span>
          </div>
        </div>

        {pkg.features.album && (
          <div className="flex items-start gap-4 group/item">
            <div className="w-5 h-5 flex items-center justify-center border border-neutral-700 rounded-sm text-[10px] text-neutral-500 shrink-0 group-hover/item:border-premiumGold group-hover/item:text-premiumGold transition-colors">A</div>
            <div className="text-sm text-neutral-300">
              <span className="block">{pkg.features.album}</span>
            </div>
          </div>
        )}

        {pkg.features.extra && pkg.features.extra.map((extra, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <Check className={`w-5 h-5 ${getTextColor()} mt-0.5 shrink-0`} />
            <div className="text-sm text-white font-medium italic">
              {extra}
            </div>
          </div>
        ))}
      </div>

      {/* Manpower Section */}
      {pkg.manpower && (
        <div className="bg-black/40 p-5 rounded-sm border border-white/5 mb-6">
          <h4 className="flex items-center gap-2 text-neutral-500 text-[10px] uppercase tracking-widest mb-4">
            <Users className="w-3 h-3" />
            Team Deployment
          </h4>
          <div className="space-y-4">
            {pkg.manpower.map((mp, index) => (
              <div key={index}>
                <div className={`text-xs font-bold mb-1 ${pkg.highlightColor === 'gold' ? 'text-premiumGold' : 'text-neutral-400'}`}>{mp.event}</div>
                <ul className="text-xs text-neutral-500 space-y-1.5">
                  {mp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="pl-3 border-l border-neutral-800">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <a href="#contact">
        <button className={`w-full mt-auto py-3 px-4 rounded-sm transition-all duration-300 font-serif tracking-wide ${pkg.isPremium
          ? 'bg-premiumGold text-black hover:bg-white font-bold'
          : 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-premiumGold'
          }`}>
          Book This Package
        </button>
      </a>
    </div>
  );
};