import React from 'react';
import { AppRoute } from '../types';

interface HeroProps {
  onOrderClick: () => void;
  onNearbyClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOrderClick, onNearbyClick }) => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Dynamic Background Image with High-End Color Grading */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover brightness-[0.6] contrast-[1.1] scale-105 animate-slow-zoom" 
          alt="Artisan Gastronomy"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-chocolate via-chocolate/60 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12 md:pt-20">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          {/* Institutional Status Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl transition-all duration-700 hover:scale-105 hover:bg-white/15">
            <span className="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_15px_#FDB813]" />
            Artisan Paradigm • Bwari Institutional HQ
          </div>

          {/* Masterbrand Headline - Updated Text Content, Size, and Font Type */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tighter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-all duration-1000 hover:translate-x-2 cursor-default">
            <span className="font-sans font-extrabold uppercase tracking-tight">Abuja’s</span> <br/> 
            <span className="italic text-primary dark:text-gold font-serif font-bold">Flavor Heritage</span>
          </h2>

          {/* Professional Brand Proposition */}
          <p className="text-lg md:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl drop-shadow-xl transition-all duration-700 hover:text-white">
            Defining the pinnacle of intercontinental gastronomy. 
            From slow-fermented heritage doughs to precision-fire grills.
          </p>

          {/* Strategic Action Interface */}
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <button 
              onClick={onOrderClick}
              className="h-16 md:h-18 px-10 md:px-12 bg-primary text-chocolate font-black text-sm md:text-base rounded-full shadow-[0_20px_50px_rgba(253,184,19,0.3)] hover:bg-primary-hover hover:scale-[1.05] transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Epicurean Selection
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">restaurant_menu</span>
            </button>
            <button 
              onClick={onNearbyClick}
              className="h-16 md:h-18 px-10 md:px-12 bg-white/5 backdrop-blur-3xl text-white border-2 border-white/20 font-black text-sm md:text-base rounded-full hover:bg-white/10 hover:scale-[1.05] transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Establishment Portfolio
              <span className="material-symbols-outlined text-lg group-hover:rotate-12 transition-transform">location_on</span>
            </button>
          </div>

          {/* Performance Analytics Hub */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-10 border-t border-white/10 max-w-3xl">
            <div className="flex items-center gap-10">
              <div className="text-left transition-all duration-700 hover:-translate-y-2 cursor-default group/metric">
                <p className="text-3xl md:text-4xl font-serif font-black text-primary leading-none group-hover/metric:text-gold transition-colors duration-700">3.9★</p>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mt-3">Elite Rating</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="text-left transition-all duration-700 hover:-translate-y-2 cursor-default group/metric">
                <p className="text-3xl md:text-4xl font-serif font-black text-white leading-none group-hover/metric:text-primary transition-colors duration-700">167+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mt-3">Reviews</p>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="text-left transition-all duration-700 hover:-translate-y-2 cursor-default group/metric">
                <p className="text-3xl md:text-4xl font-serif font-black text-primary leading-none group-hover/metric:text-gold transition-colors duration-700">₦2K+</p>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mt-3">Entry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Concierge Operations Interface */}
      <div className="absolute bottom-10 right-10 flex items-center gap-6 animate-float hidden lg:flex">
        <div className="bg-white/95 backdrop-blur-3xl px-8 py-4 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.4)] flex items-center gap-4 border border-white/20 transition-all duration-700 hover:scale-105">
           <span className="size-2.5 bg-emerald-500 rounded-full animate-pulse" />
           <p className="text-[11px] font-black text-chocolate uppercase tracking-[0.2em]">Concierge Active</p>
        </div>
        <div className="size-16 bg-chocolate text-primary rounded-[24px] flex items-center justify-center shadow-2xl border-2 border-white/10 hover:rotate-12 hover:scale-110 transition-all duration-500 cursor-pointer group">
          <span className="material-symbols-outlined text-2xl group-hover:scale-110">contact_support</span>
        </div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;