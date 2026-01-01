
import React from 'react';

const About: React.FC = () => {
  const values = [
    { name: 'Empathy', icon: 'favorite' },
    { name: 'Commitment', icon: 'handshake' },
    { name: 'Respect', icon: 'self_improvement' },
    { name: 'Trust', icon: 'shield' },
    { name: 'Passion', icon: 'local_fire_department' },
    { name: 'Honesty', icon: 'verified' },
    { name: 'Patience', icon: 'timer' },
    { name: 'Integrity', icon: 'balance' },
    { name: 'Excellence', icon: 'workspace_premium' },
    { name: 'Speed', icon: 'bolt' }
  ];

  return (
    <div className="animate-fade-in transition-colors duration-500">
      {/* Welcome Hero - Reduced padding and font size */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 dark:opacity-20 transition-opacity" 
            alt="Artisan Kitchen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background-soft via-transparent to-background-soft dark:from-chocolate dark:to-chocolate" />
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 dark:bg-primary/10 text-secondary dark:text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-primary/30">
            Welcome to the Planet
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-chocolate dark:text-background-soft leading-[1.2] mb-10 animate-fade-in">
            Where Taste Has <span className="italic text-secondary dark:text-primary">No Borders</span>.
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-xl text-chocolate/70 dark:text-background-soft/70 font-medium leading-relaxed mb-8">
              Welcome! At Krisberry, we believe food is more than a meal—it’s a journey across flavors and cultures.
            </p>
            <p className="text-sm md:text-base text-chocolate/50 dark:text-background-soft/50 font-medium leading-relaxed italic">
              "Whether you are here with family, friends, or on a solo treat, our menu is designed to satisfy every craving."
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary rounded-[30px] md:rounded-[50px] blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
              className="relative z-10 w-full rounded-[30px] md:rounded-[40px] shadow-premium" 
              alt="Dining Experience"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-chocolate dark:text-background-soft leading-tight">The Krisberry Story</h2>
            <p className="text-lg md:text-xl text-chocolate/70 dark:text-background-soft/70 leading-relaxed font-medium">
              Krisberry Pizza Planet is your one-stop destination in Bwari, FCT Abuja. We are more than just a restaurant—we are a fusion of cultures.
            </p>
            <div className="p-8 bg-white dark:bg-chocolate-light rounded-[32px] border border-chocolate/5 dark:border-white/10 shadow-float">
              <p className="text-sm md:text-base text-chocolate/80 dark:text-background-soft/80 leading-relaxed">
                We combine quality ingredients, creativity, and passion to serve meals that warm your heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards - Tighter spacing */}
      <section className="py-16 md:py-24 bg-background-soft dark:bg-chocolate transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="group p-10 bg-white dark:bg-chocolate-light rounded-[30px] shadow-premium border border-chocolate/5 dark:border-white/10 hover:border-primary transition-all duration-500">
            <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center text-secondary dark:text-primary mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
              <span className="material-symbols-outlined text-3xl font-black">visibility</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-chocolate dark:text-background-soft mb-6">Our Vision</h3>
            <p className="text-base md:text-lg text-chocolate/60 dark:text-background-soft/60 leading-relaxed font-medium italic">
              "Shaping the future of exceptional dining with great tasting meals."
            </p>
          </div>

          <div className="group p-10 bg-chocolate dark:bg-white rounded-[30px] shadow-premium transition-all duration-500">
            <div className="size-14 bg-white/10 dark:bg-chocolate/10 rounded-2xl flex items-center justify-center text-primary dark:text-secondary mb-8 transition-transform group-hover:scale-110 group-hover:rotate-6">
              <span className="material-symbols-outlined text-3xl font-black">rocket_launch</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white dark:text-chocolate mb-6">Our Mission</h3>
            <ul className="space-y-4 text-white/70 dark:text-chocolate/70 font-medium text-sm md:text-base">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Quality meals from the freshest ingredients.
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                A welcoming atmosphere for everyone.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Grid - More compact */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-chocolate dark:text-background-soft mb-4">Our Core Values</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div 
              key={i} 
              className="p-6 bg-white dark:bg-chocolate-light rounded-[24px] border border-chocolate/5 dark:border-white/10 text-center flex flex-col items-center group hover:scale-105 transition-all duration-300 shadow-float"
            >
              <div className="size-12 bg-background-soft dark:bg-chocolate rounded-xl flex items-center justify-center text-secondary dark:text-primary mb-4 transition-all group-hover:bg-primary group-hover:text-chocolate">
                <span className="material-symbols-outlined text-xl">{v.icon}</span>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-chocolate dark:text-background-soft transition-colors">
                {v.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
