
import React from 'react';
import { BRANCHES } from '../constants';

const Support: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 animate-fade-in">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-chocolate tracking-tight mb-6">
          Direct Line to <span className="text-secondary italic">Flavor</span>.
        </h2>
        <p className="text-lg text-chocolate/70 font-medium">
          Need a quick update on your order or want to book a table? Our branch managers are ready to assist you directly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANCHES.map(branch => (
          <div key={branch.id} className="bg-white rounded-[32px] p-10 shadow-premium border border-chocolate/5 flex flex-col md:flex-row gap-8 items-center group hover:border-primary/50 transition-all duration-500">
            <div className="size-32 shrink-0 rounded-2xl overflow-hidden shadow-xl">
              <img src={branch.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={branch.name} />
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl font-black mb-2">{branch.name} Delivery</h3>
              <p className="text-chocolate/60 font-medium text-sm mb-6 flex items-center justify-center md:justify-start gap-2">
                <span className="material-symbols-outlined text-sm text-secondary">location_on</span>
                {branch.address}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a 
                  href={`tel:${branch.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 bg-chocolate text-primary px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-chocolate-light transition-all shadow-lg"
                >
                  <span className="material-symbols-outlined">call</span>
                  {branch.phone}
                </a>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse" />
                  Live Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-12 bg-primary rounded-[40px] text-chocolate overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl font-black mb-4">Quality & Safety Guarantee</h3>
            <p className="font-medium text-chocolate/80 leading-relaxed">
              Every meal at Krisberry is prepared following the highest global safety standards. Our organic ingredients are sourced directly from partner farms in the Abuja suburbs.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl mb-2">verified</span>
              <p className="text-[10px] font-black uppercase tracking-widest">ISO Certified</p>
            </div>
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl mb-2">eco</span>
              <p className="text-[10px] font-black uppercase tracking-widest">100% Organic</p>
            </div>
            <div className="text-center">
              <span className="material-symbols-outlined text-4xl mb-2">schedule</span>
              <p className="text-[10px] font-black uppercase tracking-widest">Always Fresh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
