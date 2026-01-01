
import React from 'react';
import { AppRoute } from '../types';

interface FooterProps {
  onNavigate: (route: AppRoute) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-chocolate dark:bg-[#1A0C05] text-white py-24 rounded-t-[60px] mt-20 transition-colors duration-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4 text-primary">
              <span className="material-symbols-outlined text-5xl font-black">local_pizza</span>
              <h3 className="text-3xl font-serif font-bold tracking-tight">Krisberry</h3>
            </div>
            <p className="text-white/50 leading-relaxed font-medium">
              Abuja's premier artisan kitchen. From our award-winning flavors to global cuisines, every meal is an orbit around the world.
            </p>
            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'Twitter'].map(social => (
                <div key={social} className="size-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-chocolate transition-all cursor-pointer border border-white/5">
                  <span className="text-[11px] font-black uppercase">{social.slice(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-primary font-black uppercase text-[11px] tracking-[0.4em] mb-10">Explore</h4>
            <ul className="space-y-5 text-white/40 font-bold text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => onNavigate(AppRoute.HOME)}>Artisan Kitchens</li>
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => onNavigate(AppRoute.MENU)}>Full World Menu</li>
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => onNavigate(AppRoute.ABOUT)}>Our Story</li>
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => onNavigate(AppRoute.CATERING)}>Catering Concierge</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-black uppercase text-[11px] tracking-[0.4em] mb-10">Support</h4>
            <ul className="space-y-5 text-white/40 font-bold text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors" onClick={() => onNavigate(AppRoute.SUPPORT)}>Direct Line</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Quality Assurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-black uppercase text-[11px] tracking-[0.4em] mb-10">Newsletter</h4>
            <p className="text-white/40 text-sm mb-8 font-medium">Join 15,000+ food lovers for secret menu alerts and seasonal drops.</p>
            <div className="flex gap-3">
              <input className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex-grow focus:outline-none focus:ring-2 focus:ring-primary font-medium" placeholder="Your Email" />
              <button className="bg-primary text-chocolate px-6 rounded-2xl font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/10">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>© 2024 KRISBERRY PIZZA PLANET. CRAFTED IN ABUJA.</p>
          <div className="flex gap-10">
            <span className="text-primary opacity-50 italic text-[10px]">Artisan Standard</span>
            <span className="text-primary opacity-50 italic text-[10px]">Abuja, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
