
import React, { useState } from 'react';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  onPlaceOrder: (name: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, updateQuantity, removeFromCart, onPlaceOrder }) => {
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const deliveryFee = 1500;
  const vat = Math.round(subtotal * 0.075);
  const total = subtotal + deliveryFee + vat;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    setIsProcessing(true);
    setTimeout(() => {
      onPlaceOrder(name);
      setIsSuccess(true);
      setIsProcessing(false);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center animate-fade-in">
        <div className="size-24 bg-primary text-chocolate rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
          <span className="material-symbols-outlined text-5xl font-black">check_circle</span>
        </div>
        <h2 className="text-5xl font-black mb-4 tracking-tight">Slice on the way!</h2>
        <p className="text-lg text-chocolate/60 font-medium mb-12">
          Thank you, <span className="text-chocolate font-bold">{name}</span>. Your order has been dispatched to our ovens. We'll text you when it's out for delivery.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-chocolate text-white px-10 py-4 rounded-2xl font-black hover:bg-chocolate-light transition-all"
        >
          Return Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-32 text-center">
        <span className="material-symbols-outlined text-6xl text-chocolate/20 mb-6">shopping_basket</span>
        <h2 className="text-3xl font-black mb-4">Empty Basket</h2>
        <p className="text-chocolate/60">Your journey to cosmic flavor starts with a single slice.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 animate-fade-in">
      <div className="lg:col-span-7">
        <header className="mb-12">
          <h2 className="text-5xl font-black mb-4 tracking-tight">Final Check.</h2>
          <p className="text-chocolate/60 font-medium">Please provide your delivery details below.</p>
        </header>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Your Name</label>
              <input 
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full h-16 rounded-2xl bg-white border border-chocolate/10 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-chocolate"
                placeholder="e.g. Kristin Berry"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Phone Number</label>
              <input 
                required
                className="w-full h-16 rounded-2xl bg-white border border-chocolate/10 px-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-chocolate"
                placeholder="080 000 0000"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-chocolate/40 ml-1">Delivery Address</label>
            <textarea 
              required
              rows={3}
              className="w-full rounded-2xl bg-white border border-chocolate/10 p-6 focus:ring-4 focus:ring-primary/20 outline-none transition-all font-bold text-chocolate resize-none"
              placeholder="Detailed address in Abuja..."
            />
          </div>
          
          <div className="p-8 bg-chocolate rounded-3xl text-white relative overflow-hidden">
            <div className="flex items-center gap-4 mb-3">
              <span className="material-symbols-outlined text-primary">speed</span>
              <p className="text-lg font-black">Fast-Track Delivery</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-0">
              Orders placed now are estimated to arrive within <span className="text-primary font-bold">35-45 minutes</span>. We'll send live tracking updates to your phone.
            </p>
          </div>
        </form>
      </div>

      <div className="lg:col-span-5">
        <div className="bg-white rounded-[40px] p-10 shadow-premium border border-chocolate/5 sticky top-32">
          <h3 className="text-2xl font-black mb-8">Summary</h3>
          <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scroll">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 group">
                <div className="size-16 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm leading-tight mb-1">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-chocolate/20 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 bg-background-soft rounded-full px-3 py-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="text-chocolate/40 hover:text-chocolate font-black">-</button>
                      <span className="text-xs font-black">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="text-chocolate/40 hover:text-chocolate font-black">+</button>
                    </div>
                    <span className="text-sm font-black text-secondary">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-8 border-t border-chocolate/5 mb-10">
            <div className="flex justify-between text-chocolate/60 text-sm font-bold">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-chocolate/60 text-sm font-bold">
              <span>Delivery</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-chocolate text-2xl font-black pt-4">
              <span>Total</span>
              <span className="text-secondary">₦{total.toLocaleString()}</span>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            disabled={isProcessing}
            className="w-full h-16 bg-primary hover:bg-primary-hover text-chocolate font-black rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
          >
            {isProcessing ? 'Firing Ovens...' : 'Confirm Delivery'}
            {!isProcessing && <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
