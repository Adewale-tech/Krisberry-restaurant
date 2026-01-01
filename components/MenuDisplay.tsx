
import React, { useState } from 'react';
import { MenuItem, Branch, CartItem } from '../types';
import { getPizzaRecommendation } from '../services/geminiService';

interface MenuDisplayProps {
  menu: MenuItem[];
  addToCart: (item: MenuItem) => void;
  branch: Branch | null;
  onCheckout: () => void;
  cart: CartItem[];
}

const MenuDisplay: React.FC<MenuDisplayProps> = ({ menu, addToCart, branch, onCheckout, cart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiRec, setAiRec] = useState<{name: string, description: string, reasoning: string} | null>(null);
  const [userCraving, setUserCraving] = useState("");

  const categories = ['All', 'Pizza', 'Chinese', 'Bakery', 'Organic'];
  const filteredMenu = activeCategory === 'All' ? menu : menu.filter(m => m.category === activeCategory);

  const handleAiAsk = async () => {
    if (!userCraving.trim()) return;
    setAiLoading(true);
    const rec = await getPizzaRecommendation(userCraving);
    setAiRec(rec);
    setAiLoading(false);
  };

  const cartTotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Menu Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 text-secondary font-black text-[11px] uppercase tracking-widest mb-4">
            <span className="material-symbols-outlined text-lg">restaurant_menu</span>
            Dining from {branch?.name || 'Abuja'}
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-chocolate leading-tight tracking-tight">
            Curated <span className="italic text-primary">Intercontinental</span> Selection
          </h2>
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 animate-fade-in">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest transition-all whitespace-nowrap border-2 ${
                activeCategory === cat 
                ? 'bg-chocolate border-chocolate text-white shadow-xl' 
                : 'bg-white border-chocolate/5 text-chocolate/50 hover:border-primary/50 hover:text-chocolate'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* AI Flavor Matcher - Sleeker Design */}
      <div className="mb-24 relative group animate-fade-in">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-30 -z-10 group-hover:opacity-50 transition-opacity" />
        <div className="bg-chocolate rounded-[48px] p-10 md:p-16 text-white overflow-hidden relative shadow-2xl border border-white/5">
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-serif font-bold mb-6 flex items-center gap-4">
                The AI Flavor Pilot
                <span className="material-symbols-outlined text-primary text-4xl animate-pulse">auto_awesome</span>
              </h3>
              <p className="text-white/60 text-lg font-medium leading-relaxed mb-10">
                Can't decide? Describe your current mood or a specific flavor profile you're seeking. Our kitchen intelligence will craft a bespoke suggestion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  value={userCraving}
                  onChange={(e) => setUserCraving(e.target.value)}
                  className="flex-grow h-16 rounded-2xl bg-white/10 border border-white/10 px-8 text-white placeholder:text-white/30 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all font-medium"
                  placeholder="e.g. Something spicy, smoky, and smoky-sweet..."
                />
                <button 
                  onClick={handleAiAsk}
                  disabled={aiLoading}
                  className="h-16 px-10 bg-primary text-chocolate font-black rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-primary/20"
                >
                  {aiLoading ? 'Synthesizing...' : 'Match Me'}
                  <span className="material-symbols-outlined">rocket_launch</span>
                </button>
              </div>
            </div>

            <div className="relative h-full flex items-center">
              {aiRec ? (
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 animate-scale-in w-full">
                  <div className="text-primary text-[10px] font-extrabold uppercase mb-4 tracking-[0.2em]">Chef's Bespoke Choice</div>
                  <h4 className="text-3xl font-serif mb-4 leading-tight">{aiRec.name}</h4>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed italic">"{aiRec.description}"</p>
                  <div className="flex items-center gap-3 py-4 border-t border-white/10 text-xs font-bold text-primary">
                    <span className="material-symbols-outlined">tips_and_updates</span>
                    {aiRec.reasoning}
                  </div>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center justify-center text-white/20 border-2 border-dashed border-white/10 rounded-3xl p-12">
                  <span className="material-symbols-outlined text-6xl mb-4">psychology</span>
                  <p className="text-sm font-bold uppercase tracking-widest">Waiting for your input</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredMenu.map((item, idx) => (
          <div 
            key={item.id} 
            style={{ animationDelay: `${idx * 100}ms` }}
            className="group animate-fade-in flex flex-col"
          >
            <div className="aspect-[4/5] overflow-hidden relative rounded-[40px] shadow-premium mb-8">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {item.isBestseller && (
                  <div className="px-3 py-1 bg-secondary text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Top Choice
                  </div>
                )}
                {item.tags?.map(tag => (
                  <div key={tag} className="px-3 py-1 bg-white/90 backdrop-blur text-chocolate text-[9px] font-black uppercase tracking-widest rounded-full shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>

              <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <button 
                  onClick={() => addToCart(item)}
                  className="w-full h-14 bg-white text-chocolate font-black rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-2 shadow-2xl"
                >
                  Quick Add
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                </button>
              </div>
            </div>

            <div className="px-4">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif font-bold text-chocolate">{item.name}</h3>
                <span className="text-xl font-black text-secondary">₦{item.price.toLocaleString()}</span>
              </div>
              <p className="text-chocolate/50 font-medium leading-relaxed mb-6 text-sm">{item.description}</p>
              <button 
                onClick={() => addToCart(item)}
                className="lg:hidden w-full h-12 bg-chocolate text-white rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Persistent Mobile-Ready Cart Notification */}
      {cart.length > 0 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-lg z-[60] animate-slide-up">
          <div className="dark-glass text-white rounded-[32px] p-6 flex items-center justify-between shadow-2xl border border-white/10">
            <div className="flex items-center gap-5">
              <div className="size-14 bg-primary rounded-2xl flex items-center justify-center text-chocolate font-black text-xl shadow-inner">
                {cart.reduce((a, c) => a + c.quantity, 0)}
              </div>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary mb-1">Current Order</p>
                <p className="text-2xl font-serif font-bold">₦{cartTotal.toLocaleString()}</p>
              </div>
            </div>
            <button 
              onClick={onCheckout}
              className="bg-primary text-chocolate font-black h-16 px-10 rounded-2xl hover:bg-white transition-all flex items-center gap-3 shadow-lg active:scale-95"
            >
              Checkout
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDisplay;
