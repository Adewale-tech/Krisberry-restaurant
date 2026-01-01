
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BRANCHES, INITIAL_MENU } from '../constants';

const AIChatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: 'Welcome! I’m the Krisberry Flavor Pilot. Ask me about our 48-hour fermented dough, event catering, or today’s freshest intercontinental picks!'}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setInput('');
    setLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `You are the Krisberry Flavor Pilot, the elite artisan host for Krisberry Pizza Planet in Abuja. 
      Brand Essence: Taste has no Borders. We fuse Intercontinental, Chinese, and Nigerian flavors.
      Technique: Our "Honey Yellow" dough is 48-hour cold fermented sourdough. It's light, bubbly, and gut-friendly.
      Sourcing: Market-to-Table at 6:00 AM every morning from Bwari local markets. Fresh Scotch Bonnet, yaji spice, and forest honey.
      Menu Detail: ${JSON.stringify(INITIAL_MENU)}. 
      Locations: ${JSON.stringify(BRANCHES)}. 
      Catering: We provide live action stations for weddings, corporate, and galas.
      Response Style: Professional, appetizing, energetic, and concise. Use Naira (₦). If asked about ingredients, highlight the "Spice Garden" philosophy.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: { systemInstruction: systemPrompt }
      });

      setMessages(prev => [...prev, {role: 'ai', text: response.text || "I'm experiencing a bit of solar flare interference. Could you rephrase that for me?"}]);
    } catch (error) {
      setMessages(prev => [...prev, {role: 'ai', text: "Connectivity issues! Please reach out to our concierge via the 'Direct Line' if this persists."}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {isOpen ? (
        <div className="w-[340px] sm:w-[400px] h-[550px] bg-white dark:bg-chocolate rounded-[40px] shadow-2xl flex flex-col overflow-hidden border border-chocolate/10 dark:border-white/10 animate-scale-in">
          {/* Header */}
          <div className="bg-chocolate dark:bg-chocolate-light p-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-chocolate">
                <span className="material-symbols-outlined text-2xl font-black">auto_awesome</span>
              </div>
              <div className="text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary leading-none mb-1.5">Elite Concierge</p>
                <p className="text-base font-bold leading-none">Flavor Pilot v3.1</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 bg-background-soft dark:bg-chocolate no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-[14px] font-medium shadow-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-primary text-chocolate' : 'bg-white dark:bg-chocolate-light border border-chocolate/5 dark:border-white/5 text-chocolate/80 dark:text-background-soft/80'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-chocolate-light px-6 py-4 rounded-3xl border border-chocolate/5 flex gap-1.5 items-center">
                  <div className="size-2 bg-primary rounded-full animate-bounce" />
                  <div className="size-2 bg-primary rounded-full animate-bounce delay-75" />
                  <div className="size-2 bg-primary rounded-full animate-bounce delay-150" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-8 bg-white dark:bg-chocolate border-t border-chocolate/5 dark:border-white/10">
            <div className="flex gap-4">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Talk to our Pilot..."
                className="flex-grow bg-background-soft dark:bg-chocolate-light border-none rounded-2xl px-6 py-4 text-sm dark:text-background-soft focus:ring-4 focus:ring-primary/20 outline-none font-bold"
              />
              <button onClick={handleSend} className="bg-chocolate dark:bg-primary text-primary dark:text-chocolate size-14 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform shadow-lg active:scale-95">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-4 cursor-pointer group animate-float"
        >
          <div className="bg-white/95 backdrop-blur-xl px-8 py-5 rounded-full shadow-2xl flex items-center gap-4 border border-chocolate/5 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
             <span className="size-3 bg-emerald-500 rounded-full animate-pulse" />
             <p className="text-sm font-black text-chocolate uppercase tracking-[0.2em] whitespace-nowrap">Ask the Concierge!</p>
          </div>
          <div className="size-20 bg-chocolate dark:bg-primary text-primary dark:text-chocolate rounded-[32px] shadow-2xl flex items-center justify-center hover:scale-110 transition-all relative border-4 border-white/20">
            <span className="material-symbols-outlined text-4xl font-black group-hover:rotate-12 transition-transform">auto_awesome</span>
            <span className="absolute -top-1 -right-1 size-6 bg-secondary rounded-full border-4 border-background-soft dark:border-chocolate animate-pulse shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbox;
