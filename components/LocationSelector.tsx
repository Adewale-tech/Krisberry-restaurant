
import React from 'react';
import { Branch } from '../types';

interface LocationSelectorProps {
  branches: Branch[];
  onSelect: (branch: Branch) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ branches, onSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="mb-20 max-w-3xl animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-secondary text-[11px] font-extrabold uppercase tracking-widest mb-8 border border-primary/20">
          <span className="material-symbols-outlined text-sm leading-none">star</span>
          Artisan Craftsmanship
        </div>
        <h2 className="text-5xl md:text-7xl font-serif text-chocolate leading-[1.05] tracking-tight mb-8">
          The <span className="italic text-secondary">Artisan</span> heartbeat of Abuja.
        </h2>
        <p className="text-xl text-chocolate/60 font-medium leading-relaxed">
          Select your local branch to explore our live kitchen, wait times, and direct-to-oven ordering flow.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {branches.map((branch, index) => (
          <div 
            key={branch.id}
            style={{ animationDelay: `${index * 150}ms` }}
            className="group relative bg-white rounded-[40px] overflow-hidden shadow-premium border border-chocolate/5 hover:border-primary/40 transition-all duration-700 animate-fade-in flex flex-col"
          >
            {/* Image Container with Consistent Gradient Overlay */}
            <div className="h-96 relative overflow-hidden">
              <img 
                src={branch.image} 
                alt={branch.name}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              {/* Refined gradient overlay for better text contrast across all images */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate via-chocolate/40 to-transparent opacity-100" />
              
              <div className="absolute top-8 left-8 flex items-center gap-3">
                {branch.isMain && (
                  <div className="px-4 py-1.5 bg-primary text-chocolate text-[10px] font-extrabold uppercase tracking-widest rounded-full shadow-2xl">
                    Main Kitchen HQ
                  </div>
                )}
                <div className="px-4 py-1.5 bg-white/10 backdrop-blur-xl text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/20">
                  {branch.distance} Away
                </div>
              </div>
              
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <h3 className="text-5xl font-serif font-bold mb-4">{branch.name}</h3>
                <div className="flex items-center gap-3 opacity-90 text-sm font-medium">
                  <span className="material-symbols-outlined text-xl text-primary">location_on</span>
                  {branch.address}
                </div>
              </div>
            </div>

            {/* Bottom Info Bar - Functional and Beautiful */}
            <div className="p-10 flex flex-col sm:flex-row items-center justify-between gap-10 bg-white">
              <div className="flex gap-12 flex-grow">
                <div className="flex flex-col">
                  <span className="text-[10px] text-chocolate/30 font-extrabold uppercase tracking-[0.2em] mb-3">Live Status</span>
                  <span className={`text-sm font-black flex items-center gap-2.5 ${
                    branch.vibe === 'Bustling' ? 'text-secondary' : 
                    branch.vibe === 'Chill' ? 'text-emerald-500' : 'text-primary'
                  }`}>
                    <span className="size-2 rounded-full bg-current animate-pulse" />
                    {branch.vibe}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-chocolate/30 font-extrabold uppercase tracking-[0.2em] mb-3">Wait Time</span>
                  <span className="text-sm font-black text-chocolate flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-xl opacity-30">timer</span>
                    {branch.waitTime}
                  </span>
                </div>
              </div>

              <button 
                onClick={() => onSelect(branch)}
                className="w-full sm:w-auto px-12 py-5 bg-primary hover:bg-chocolate hover:text-primary text-chocolate font-black rounded-3xl flex items-center justify-center gap-3 transition-all duration-500 transform active:scale-95 shadow-xl shadow-primary/10 group/btn"
              >
                Order Now
                <span className="material-symbols-outlined text-lg group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSelector;
