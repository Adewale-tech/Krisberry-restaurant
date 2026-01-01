import React, { useState } from 'react';
import { AppRoute } from '../types';

interface NavbarProps {
  onNavigate: (route: AppRoute) => void;
  cartCount: number;
  currentRoute: AppRoute;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, cartCount, currentRoute, isDarkMode, onToggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: AppRoute.HOME, label: 'Kitchens', icon: 'home' },
    { id: AppRoute.MENU, label: 'World Menu', icon: 'restaurant_menu' },
    { id: AppRoute.CATERING, label: 'Catering', icon: 'event' },
    { id: AppRoute.ABOUT, label: 'Our Story', icon: 'auto_stories' },
    { id: AppRoute.SUPPORT, label: 'Concierge', icon: 'support_agent' }
  ];

  const handleMobileNav = (id: AppRoute) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[80] w-full glass border-b border-chocolate/5 px-6 sm:px-16 py-4 md:py-6 flex items-center justify-between transition-all duration-500">
        <div 
          className="flex items-center gap-3 md:gap-5 cursor-pointer group" 
          onClick={() => onNavigate(AppRoute.HOME)}
        >
          <div className="size-10 md:size-14 bg-chocolate dark:bg-primary rounded-[14px] md:rounded-[20px] flex items-center justify-center text-primary dark:text-chocolate shadow-2xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
            <span className="material-symbols-outlined font-black text-xl md:text-3xl">local_pizza</span>
          </div>
          <div>
            <h1 className="text-chocolate dark:text-background-soft text-xl md:text-3xl font-serif font-bold leading-none tracking-tight">KRISBERRY</h1>
            <p className="text-secondary text-[8px] md:text-[10px] font-extrabold uppercase tracking-[0.5em] mt-1 md:mt-2 opacity-80 flex items-center gap-2">
              <span className="w-3 md:w-4 h-[1px] bg-secondary" />
              Abuja Artisan
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)} 
              className={`text-[11px] font-extrabold uppercase tracking-[0.2em] transition-all relative py-2 ${
                currentRoute === item.id 
                  ? 'text-chocolate dark:text-primary' 
                  : 'text-chocolate/40 dark:text-background-soft/40 hover:text-chocolate dark:hover:text-background-soft'
              }`}
            >
              {item.label}
              {currentRoute === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-scale-in" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-6">
          <button 
            onClick={onToggleDarkMode}
            className="size-10 md:size-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white dark:bg-chocolate-light border border-chocolate/5 dark:border-white/10 text-chocolate dark:text-primary hover:scale-105 transition-all shadow-float"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <button 
            onClick={() => onNavigate(AppRoute.CHECKOUT)}
            className="relative group size-10 md:size-14 flex items-center justify-center rounded-xl md:rounded-2xl bg-white dark:bg-chocolate-light border border-chocolate/5 dark:border-white/10 text-chocolate dark:text-background-soft hover:bg-chocolate hover:text-white dark:hover:bg-primary dark:hover:text-chocolate transition-all shadow-float"
          >
            <span className="material-symbols-outlined text-xl md:text-2xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 size-5 md:size-6 bg-secondary rounded-full text-[9px] md:text-[11px] font-black text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-chocolate animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden size-10 md:size-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-chocolate text-primary hover:scale-105 transition-all shadow-float"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Unique Mobile Full-Screen Menu */}
      <div 
        className={`fixed inset-0 z-[100] bg-chocolate transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate/90 via-chocolate to-chocolate-light/50" />
        
        {/* Background Elements */}
        <div className="absolute top-20 right-[-10%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />

        <div className="relative h-full flex flex-col px-10 pt-32 pb-12 overflow-y-auto no-scrollbar">
          <div className="flex flex-col gap-8">
            <span className="text-primary/40 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Institutional Portal</span>
            
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleMobileNav(item.id)}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`flex items-center justify-between text-left group transition-all duration-500 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}
              >
                <div className="flex items-center gap-6">
                  <span className={`material-symbols-outlined text-4xl ${currentRoute === item.id ? 'text-primary' : 'text-white/20'}`}>
                    {item.icon}
                  </span>
                  <span className={`text-4xl font-serif italic transition-colors ${currentRoute === item.id ? 'text-white' : 'text-white/40'}`}>
                    {item.label}
                  </span>
                </div>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-16 flex flex-col gap-8">
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl">
               <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-chocolate">
                 <span className="material-symbols-outlined text-2xl font-black">support_agent</span>
               </div>
               <div>
                 <p className="text-[9px] font-black uppercase tracking-widest text-primary">Live Assistance</p>
                 <p className="text-white text-sm font-bold">+234 801 234 5678</p>
               </div>
            </div>

            <div className="flex justify-between items-center text-[9px] font-black text-white/30 tracking-[0.3em] uppercase">
              <p>© 2024 Krisberry</p>
              <div className="flex gap-4">
                <span className="text-primary italic">Artisan</span>
                <span className="text-secondary italic">Abuja</span>
              </div>
            </div>
          </div>
          
          {/* Close button inside menu */}
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-8 right-10 size-14 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;