import React, { useState } from 'react';

const SpiceGarden: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tangerine via-secondary to-chocolate dark:from-[#1A0C05] dark:to-chocolate py-20 lg:py-32">
      {/* High-Impact Visual Blobs */}
      <div className="absolute top-0 right-0 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-primary/20 rounded-full blur-[120px] md:blur-[180px] animate-float opacity-70" />
      <div className="absolute -bottom-40 -left-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gold/30 rounded-full blur-[100px] md:blur-[140px] animate-float delay-1000 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Interactive Heritage Procurement Gallery - FIXED IMAGE VISIBILITY */}
          <div className="relative order-2 lg:order-1 h-[500px] md:h-[650px] flex items-center justify-center animate-scale-in">
            {/* Background Image 1 - Refined Layering */}
            <div className="absolute top-4 left-4 w-56 md:w-80 aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl animate-float rotate-6 group cursor-pointer border-4 border-white/20 z-10">
              <img 
                src="https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000" 
                alt="Heritage Spices" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Background Image 2 - Refined Layering */}
            <div className="absolute bottom-4 right-4 w-64 md:w-96 aspect-[3/4] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-premium animate-float delay-700 -rotate-3 group cursor-pointer border-4 border-white/20 z-10">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000" 
                alt="Agricultural Sourcing" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Central Institutional Hub - FIXED STYLING AND Z-INDEX */}
            <div className="relative p-10 md:p-14 bg-white/10 backdrop-blur-3xl rounded-[50px] md:rounded-[80px] border border-white/30 shadow-3xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-white/20 hover:scale-105 transition-all duration-700 z-30">
               <div className="size-20 md:size-24 bg-primary rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-xl animate-pulse">
                 <span className="material-symbols-outlined text-chocolate text-4xl md:text-5xl font-black">verified</span>
               </div>
               <h4 className="text-white text-2xl md:text-4xl font-black uppercase tracking-[0.4em]">Origin Paradigm</h4>
               <p className="text-white/60 text-[10px] md:text-[12px] mt-6 uppercase font-black tracking-[0.3em]">Institutional Standards</p>
            </div>
          </div>

          {/* Sourcing Intelligence & Execution Section */}
          <div className="space-y-8 md:space-y-12 animate-fade-in order-1 lg:order-2">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-3xl border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl transition-all duration-1000 hover:scale-105 hover:bg-white/20 cursor-default">
              <span className="material-symbols-outlined text-lg text-primary">intelligence</span>
              Procurement Intelligence
            </div>
            
            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight tracking-tighter transition-all duration-1000 hover:translate-x-2 cursor-default">
              Epicurean <br/> <span className="text-primary italic font-serif">Provenance.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed max-w-xl transition-all duration-700 hover:text-white">
              Transcending conventional sourcing protocols. Our ingredients are meticulously curated from the <span className="text-primary font-bold italic">Bwari Agricultural Portfolio</span>.
            </p>

            <div className="pt-6 md:pt-10 space-y-6 md:space-y-8">
               {[
                 { step: '06', title: 'Agricultural Selection', desc: 'Precision-procured organic spices and botanical herbs.' },
                 { step: '10', title: 'Culinary Integration', desc: 'Advanced protocols to preserve molecular integrity.' },
                 { step: '12', title: 'Epicurean Execution', desc: 'Orchestration of flavors with excellence.' }
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-6 md:gap-8 group cursor-default p-6 md:p-8 rounded-[30px] md:rounded-[40px] hover:bg-white/5 transition-all duration-700 hover:-translate-y-2 border border-transparent hover:border-white/10">
                    <div className="size-14 md:size-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary font-black text-xl md:text-2xl group-hover:bg-primary group-hover:text-chocolate transition-all duration-700 shadow-2xl">
                      {item.step}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-black text-white uppercase text-sm md:text-base tracking-[0.2em] mb-2 group-hover:text-primary transition-colors duration-700">{item.title}</h4>
                      <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md group-hover:text-white/70 transition-colors duration-700">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div 
              className="pt-8 relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className={`absolute -inset-1 bg-gradient-to-r from-primary to-gold rounded-[30px] blur-xl opacity-20 transition-opacity duration-1000 ${isHovered ? 'opacity-40' : ''}`} />
              <button className="relative w-full h-18 md:h-20 bg-chocolate border border-white/10 text-primary font-black rounded-[30px] shadow-3xl hover:bg-chocolate-light hover:scale-[1.01] transition-all duration-700 flex items-center justify-between px-10 group overflow-hidden">
                <span className="text-sm md:text-base uppercase tracking-[0.3em] relative z-10">Institutional Portfolio</span>
                <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform duration-700 relative z-10">hub</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpiceGarden;