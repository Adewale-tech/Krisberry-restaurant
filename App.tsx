import React, { useState, useEffect } from 'react';
import { AppRoute, Branch, MenuItem, CartItem, Order } from './types';
import { BRANCHES, INITIAL_MENU } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpiceGarden from './components/SpiceGarden';
import LocationSelector from './components/LocationSelector';
import MenuDisplay from './components/MenuDisplay';
import Checkout from './components/Checkout';
import Support from './components/Support';
import About from './components/About';
import Catering from './components/Catering';
import Footer from './components/Footer';
import AIChatbox from './components/AIChatbox';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(AppRoute.HOME);
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [menu] = useState<MenuItem[]>(INITIAL_MENU);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Navigate to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const addToCart = (item: MenuItem) => {
    if (!selectedBranch) {
      // Redirect to home and scroll to locations if no branch is selected
      setCurrentRoute(AppRoute.HOME);
      setTimeout(() => {
        const loc = document.getElementById('locations');
        loc?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
      return;
    }

    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const handlePlaceOrder = (customerName: string) => {
    setCart([]);
  };

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleOrderRedirect = () => {
    setCurrentRoute(AppRoute.MENU);
  };

  const handleNearbyRedirect = () => {
    setCurrentRoute(AppRoute.HOME);
    // Smooth scroll to locations
    setTimeout(() => {
      const loc = document.getElementById('locations');
      loc?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const vibes = [
    { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200", title: "Modern Vibe", size: "w-[280px] md:w-[420px] aspect-[4/5]" },
    { img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200", title: "Artisan Soul", size: "w-[240px] md:w-[320px] aspect-square" },
    { img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200", title: "Bustling Kitchen", size: "w-[300px] md:w-[480px] aspect-[16/9]" },
    { img: "https://images.unsplash.com/photo-1550966841-3ee7adac1af8?auto=format&fit=crop&q=80&w=1200", title: "Global Dining", size: "w-[260px] md:w-[380px] aspect-[4/5]" },
    { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200", title: "Heritage Hub", size: "w-[320px] md:w-[520px] aspect-video" },
    { img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200", title: "Culinary Craft", size: "w-[240px] md:w-[340px] aspect-[3/4]" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-soft dark:bg-chocolate transition-colors duration-500">
      <Navbar 
        onNavigate={setCurrentRoute} 
        cartCount={cart.reduce((acc, i) => acc + i.quantity, 0)} 
        currentRoute={currentRoute}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      
      <main className="flex-grow">
        {currentRoute === AppRoute.HOME && (
          <>
            <Hero onOrderClick={handleOrderRedirect} onNearbyClick={handleNearbyRedirect} />
            
            <SpiceGarden />

            <div id="locations">
              <LocationSelector 
                branches={BRANCHES} 
                onSelect={(branch) => {
                  setSelectedBranch(branch);
                  setCurrentRoute(AppRoute.MENU);
                }} 
              />
            </div>

            {/* Demographics & Unique Vibe Gallery Section */}
            <section className="py-20 md:py-32 overflow-hidden bg-white dark:bg-chocolate-light">
               <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div className="max-w-2xl">
                      <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">The Demographic Social Hub</span>
                      <h3 className="text-4xl md:text-6xl font-serif text-chocolate dark:text-background-soft mb-8 leading-tight tracking-tight">Designed for <span className="italic text-secondary">Abuja's Best.</span></h3>
                      <p className="text-lg md:text-2xl text-chocolate/60 dark:text-background-soft/60 font-medium leading-relaxed">From Bwari Law School students to FCT professionals, our kitchens are calibrated to your pace.</p>
                    </div>
                    <div className="flex gap-4">
                      <div className="px-6 py-3.5 bg-chocolate text-primary rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl border border-white/10 hover:bg-chocolate-light transition-all">
                        Student Special
                      </div>
                      <div className="px-6 py-3.5 bg-primary text-chocolate rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-hover transition-all">
                        Executive Suite
                      </div>
                    </div>
                  </div>
               </div>

               {/* Vibe Gallery - Infinite Marquee with Diverse Unique Sizes */}
               <div className="relative group/gallery overflow-hidden cursor-grab active:cursor-grabbing pb-12">
                  <div className="flex items-center gap-6 md:gap-10 animate-marquee hover:[animation-play-state:paused] w-max px-10">
                    {[...vibes, ...vibes].map((vibe, idx) => (
                      <div 
                        key={idx} 
                        className={`${vibe.size} shrink-0 relative rounded-[35px] md:rounded-[60px] overflow-hidden group shadow-premium border-2 md:border-4 border-chocolate/5 bg-background-soft dark:bg-chocolate transition-all duration-700 hover:border-primary/40`}
                      >
                        <div className="absolute inset-0 bg-chocolate/10 z-0" />
                        <img 
                          src={vibe.img} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 z-10" 
                          alt={vibe.title} 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                        <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12 text-white z-30">
                          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] mb-2 md:mb-4 text-primary leading-none">{vibe.title}</p>
                          <h4 className="text-xl md:text-4xl font-serif font-bold italic leading-tight drop-shadow-lg">The Planet Experience.</h4>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </section>
          </>
        )}

        {currentRoute === AppRoute.MENU && (
          <MenuDisplay 
            menu={menu} 
            addToCart={addToCart} 
            branch={selectedBranch}
            onCheckout={() => setCurrentRoute(AppRoute.CHECKOUT)}
            cart={cart}
            onSelectBranch={() => {
              setCurrentRoute(AppRoute.HOME);
              setTimeout(() => {
                document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        )}

        {currentRoute === AppRoute.CHECKOUT && (
          <Checkout 
            cart={cart} 
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            onPlaceOrder={handlePlaceOrder}
          />
        )}

        {currentRoute === AppRoute.SUPPORT && (
          <Support />
        )}

        {currentRoute === AppRoute.ABOUT && (
          <About />
        )}

        {currentRoute === AppRoute.CATERING && (
          <Catering />
        )}
      </main>

      <Footer onNavigate={setCurrentRoute} />
      <AIChatbox />
    </div>
  );
};

export default App;