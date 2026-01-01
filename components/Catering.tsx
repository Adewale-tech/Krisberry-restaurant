
import React, { useState } from 'react';

const Catering: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center animate-fade-in">
        <div className="size-20 bg-primary text-chocolate rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <span className="material-symbols-outlined text-4xl font-black">mail</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight">Inquiry Received</h2>
        <p className="text-base md:text-lg text-chocolate/60 font-medium mb-12">
          Our Events Concierge will review your details and reach out within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-chocolate text-white px-8 py-4 rounded-2xl font-black hover:bg-chocolate-light transition-all"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-start">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6">Elevate Your Event</span>
          <h2 className="text-4xl md:text-6xl font-serif text-chocolate leading-tight mb-8">
            Artisan <span className="italic text-primary">Catering</span> selections.
          </h2>
          <p className="text-lg md:text-xl text-chocolate/60 leading-relaxed font-medium mb-12">
            Whether it's a corporate gala or an intimate wedding, Krisberry brings the kitchen to you.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined font-black">restaurant</span>
              </div>
              <div>
                <h4 className="text-sm font-black text-chocolate uppercase tracking-wider">Custom Menus</h4>
                <p className="text-xs text-chocolate/60">Tailored intercontinental selections from our master chefs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined font-black">bolt</span>
              </div>
              <div>
                <h4 className="text-sm font-black text-chocolate uppercase tracking-wider">Live Action Stations</h4>
                <p className="text-xs text-chocolate/60">Witness the art of hand-tossed dough live.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-premium border border-chocolate/5">
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-center">Inquiry Form</h3>
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Full Name</label>
                <input required className="w-full h-14 rounded-2xl bg-background-soft border border-chocolate/5 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Company</label>
                <input className="w-full h-14 rounded-2xl bg-background-soft border border-chocolate/5 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Guests</label>
                <input required type="number" className="w-full h-14 rounded-2xl bg-background-soft border border-chocolate/5 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-sm" placeholder="20+" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Date</label>
                <input required type="date" className="w-full h-14 rounded-2xl bg-background-soft border border-chocolate/5 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Requirements</label>
              <textarea rows={3} className="w-full rounded-2xl bg-background-soft border border-chocolate/5 p-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold resize-none text-sm" placeholder="Tell us about your event..." />
            </div>
            <button className="w-full h-16 bg-chocolate text-primary font-black rounded-2xl shadow-xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3">
              Request Concierge Call
              <span className="material-symbols-outlined">call</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Catering;
