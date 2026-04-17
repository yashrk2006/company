import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Globe, Search, ArrowDownCircle, Mail, Menu, Zap, Sparkles, 
  Command, Hash, Activity, Shield, Cpu, Globe2, Layout, Layers, 
  ChevronDown, ArrowUpRight, Check, X, Bookmark, Share2, Plus, 
  Maximize2, Eye, MessageSquare, Phone
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const BoldTypographyMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#09090B] text-white font-sans selection:bg-white selection:text-[#09090B] pb-0 pt-0 flex flex-col items-center">
      
      {/* 1. Immersive Kinetic Typography Background (Fixed) */}
      <div className="fixed inset-0 flex flex-col justify-around overflow-hidden opacity-[0.03] pointer-events-none select-none mix-blend-overlay z-0">
         <motion.h1 
           animate={{ x: [0, -200, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
           className="text-[20rem] md:text-[40rem] font-black uppercase leading-[0.5] whitespace-nowrap -ml-20 tracking-tighter italic"
         >
           TYPE / FIRST
         </motion.h1>
         <motion.h1 
           animate={{ x: [-200, 0, -200] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
           className="text-[20rem] md:text-[40rem] font-black uppercase leading-[0.5] whitespace-nowrap ml-10 tracking-tighter"
         >
           CONTENT
         </motion.h1>
         <motion.h1 
           animate={{ x: [0, -300, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
           className="text-[20rem] md:text-[40rem] font-black uppercase leading-[0.5] whitespace-nowrap -ml-40 tracking-tighter italic"
         >
           DRIVEN.
         </motion.h1>
         <motion.h1 
           animate={{ x: [-300, 0, -300] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="text-[20rem] md:text-[40rem] font-black uppercase leading-[0.5] whitespace-nowrap ml-60 tracking-tighter"
         >
           SYSTEMS
         </motion.h1>
      </div>

      {/* 2. Minimized Ultra-Bold Header */}
      <header className="sticky top-0 z-[110] bg-[#09090B]/80 backdrop-blur-3xl px-8 md:px-24 py-10 flex justify-between items-center border-b-[12px] border-white uppercase font-black tracking-[0.4em] text-xs w-full max-w-screen-2xl">
         <div className="flex items-center gap-10">
            <div className="flex items-baseline gap-4 group cursor-pointer skew-x-[-10deg]">
               <span className="text-4xl italic tracking-tighter text-white group-hover:bg-white group-hover:text-[#09090B] px-2 transition-all">ZORVIA.TXT</span>
            </div>
            <div className="hidden lg:flex gap-12 text-[9px] opacity-30 mt-1">
               {['Manifesto', 'Archive', 'Protocol', 'Systems'].map(item => (
                 <a key={item} href="#" className="hover:opacity-100 hover:italic hover:text-[#fff] transition-all hover:translate-y-[-2px]">{item}</a>
               ))}
            </div>
         </div>
         <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-6 px-10 py-3 bg-white text-[#09090B] font-black text-xs h-10 italic">
               <Activity size={16} strokeWidth={4} />
               <span>ACTIVE_SESSION</span>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, skewX: -10 }}
              className="px-10 py-3 border-[4px] border-white text-white font-black hover:bg-white hover:text-[#09090B] transition-all h-10 flex items-center"
            >
               CONTACT_SYS
            </motion.button>
            <Menu size={32} className="lg:hidden" strokeWidth={3} />
         </div>
      </header>

      {/* 3. Aggressive Hero Section (The Message) */}
      <section className="relative z-10 w-full p-8 md:p-16 lg:p-40 flex flex-col justify-center min-h-[100dvh] max-w-screen-2xl mx-auto border-x-[12px] border-white shadow-none">
         <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="space-y-32"
         >
            <div className="space-y-8">
               <div className="flex items-baseline gap-8">
                  <span className="text-xl font-black italic tracking-[1em] opacity-40 uppercase">Archive</span>
                  <div className="h-[4px] flex-grow bg-white/20" />
               </div>
               <h2 className="text-[14vw] md:text-7xl lg:text-9xl font-black leading-[0.7] tracking-tighter uppercase italic pr-8 relative">
                  <span className="block border-t-[20px] border-white pt-10">FORM_</span>
                  <span className="block text-transparent bg-clip-text relative hover:text-white transition-all cursor-default" style={{ WebkitTextStroke: '3px white' }}>
                    FOLLOWS
                    <Sparkles size={120} className="absolute -top-16 -right-24 text-white animate-pulse hidden xl:block" />
                  </span>
                  <span className="block border-b-[20px] border-white pb-12 italic text-white/90">MEANING.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end">
               <div className="lg:col-span-7 space-y-16">
                  <p className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.8] italic bg-white text-black p-8 shadow-[30px_30px_0px_white/10]">
                     "Strip away the digital containers. Silence the aesthetic noise. Let the syntax define the superstructure."
                  </p>
                  <p className="text-2xl font-bold uppercase tracking-widest opacity-40 leading-snug max-w-3xl border-l-[12px] border-white/20 pl-10 py-4 italic">
                     When the communication is vital, we abandon the decorative. High-fidelity semantic infrastructure built through extreme typographic discipline.
                  </p>
               </div>
               
               <div className="lg:col-span-5 flex justify-start lg:justify-end">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative group cursor-pointer"
                  >
                     <div className="w-48 h-48 md:w-80 md:h-80 rounded-full border-[16px] border-white flex items-center justify-center group-hover:bg-white transition-all duration-700">
                        <ArrowDownCircle size={100} className="md:w-48 md:h-48 text-white group-hover:text-black transition-all" strokeWidth={1} />
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-xs font-black uppercase tracking-[1.5em] opacity-0 group-hover:opacity-40 transition-opacity rotate-[-90deg]">SCROLL_NOW</span>
                     </div>
                  </motion.div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 4. Typographic Marquee (Pulse) */}
      <section className="relative z-20 w-full py-20 bg-white text-black overflow-hidden select-none border-y-[20px] border-black">
         <motion.div 
           animate={{ x: [0, -2000] }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap gap-28 h-auto items-center"
         >
            {[...Array(10)].map((_, i) => (
               <span key={i} className="text-7xl font-black uppercase tracking-tighter italic flex items-center gap-12">
                  THE_TEXT_IS_THE_INTERFACE <Hash size={80} strokeWidth={8} /> TYPOGRAPHY_IS_THE_CODE <Zap size={80} strokeWidth={8} fill="currentColor" /> 
               </span>
            ))}
         </motion.div>
      </section>

      {/* 5. Manifesto Matrix (Core Pillars) */}
      <section className="relative z-10 w-full bg-black text-white py-20 px-8 md:px-24">
         <div className="max-w-screen-2xl mx-auto space-y-12">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-b-[12px] border-white pb-20">
               <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.7] text-white">THE_SYNTAX.</h2>
               <div className="max-w-md text-right space-y-8">
                  <div className="text-sm font-black uppercase tracking-[1.5em] opacity-30 italic">Strategic Alignment</div>
                  <p className="text-2xl font-bold uppercase tracking-widest leading-none bg-white text-black px-4 py-2 italic inline-block">Absolute control over the visual hierarchy.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-[12px] border-white divide-x-[12px] divide-y-[12px] md:divide-y-0 divide-white bg-white">
               {[
                 { id: "01", title: "Scale Logic", desc: "Typography that adapts its power from microfilm to massive digital monoliths with zero friction." },
                 { id: "02", title: "Visual Silence", desc: "Tactical removal of the unnecessary to reveal the essential structural logic of your identity." },
                 { id: "03", title: "Kern Focus", desc: "Extreme mathematical attention to the physical spaces between points where semantic transfer occurs." },
                 { id: "04", title: "Bold Integrity", desc: "Unapologetic use of stroke weight and pressure to command total ocular respect in noisy clusters." },
                 { id: "05", title: "Type Security", desc: "Proprietary semantic encryption that ensures your brand's voice remains immutable and sovereign." },
                 { id: "06", title: "High Fidelity", desc: "Zero-latency character rendering at any resolution or kinetic velocity for total transmission." }
               ].map((f, i) => (
                  <div key={i} className="group cursor-default p-16 space-y-12 bg-black hover:bg-white hover:text-black transition-all duration-500 overflow-hidden relative">
                     <span className="absolute -bottom-10 -right-10 text-[20rem] font-black italic opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">{f.id}</span>
                     <div className="w-24 h-24 border-[8px] border-current flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform italic text-4xl font-black">
                        {f.id}
                     </div>
                     <div className="space-y-8 relative z-10">
                        <h3 className="text-6xl font-black italic uppercase tracking-tighter leading-none group-hover:translate-x-6 transition-transform">{f.title}.</h3>
                        <p className="text-xl font-bold uppercase tracking-tight opacity-40 group-hover:opacity-100 leading-snug max-w-xs">{f.desc}</p>
                     </div>
                     <div className="pt-12 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[12px] font-black uppercase tracking-[0.8em] italic">Access_Manifesto</span>
                        <ArrowUpRight size={40} strokeWidth={8} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Semantic Audit (Showcase/Pricing) */}
      <section className="relative z-10 w-full bg-white text-black py-20 px-8 md:px-24">
         <div className="max-w-screen-2xl mx-auto space-y-12">
            <div className="text-center space-y-12">
               <h2 className="text-8xl md:text-[20rem] font-black uppercase text-center tracking-tighter leading-none italic underline decoration-black decoration-[24px] underline-offset-[30px] mb-20">THE_INDEX.</h2>
               <p className="text-2xl font-black uppercase tracking-[1.5em] opacity-30 italic">Investment Tiering // System Access</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black border-[20px] border-black">
               {[
                  { tier: "VOL. 01 (LITE)", price: "240", accent: "black", items: ["3 Core Static Typefaces", "Basic Grid Foundation", "Monochrome Identity Seal", "24hr Response Latency", "Semantic Basic Audit"] },
                  { tier: "VOL. 02 (ENT)", price: "980", featured: true, accent: "black", items: ["Infinite Typeface Access", "Manifesto Engine V4.8", "Full Distributed Nodes", "VIP Direct Semantic Uplink", "Custom Kerning Logic", "Zero Latency Ops"] }
               ].map((p, i) => (
                  <div key={i} className={`p-8 space-y-20 bg-white group hover:bg-black hover:text-white transition-all duration-1000 flex flex-col justify-between`}>
                     <div className="space-y-16">
                        <div className="flex justify-between items-start border-b-[10px] border-black group-hover:border-white pb-8">
                           <span className="text-xl font-black uppercase tracking-[0.5em] italic">{p.tier}</span>
                           <div className="w-10 h-10 border-4 border-current flex items-center justify-center">
                              <Zap size={20} className={p.featured ? "fill-current" : ""} />
                           </div>
                        </div>
                        <div className="text-6xl md:text-8xl font-black tracking-tighter leading-none italic relative group-hover:scale-110 transition-transform">
                           <span className="text-3xl font-black opacity-30 absolute top-0 left-[-2rem]">$</span>{p.price}
                           <span className="text-sm font-black uppercase tracking-[0.6em] opacity-10 absolute bottom-0 right-[-4rem] rotate-[-90deg] invisible md:visible">Participation / Year</span>
                        </div>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
                           {p.items.map((item, k) => (
                              <li key={k} className="flex items-center gap-6 text-[14px] font-black uppercase tracking-widest italic opacity-60 group-hover:opacity-100 border-l-[8px] border-black group-hover:border-white pl-4 py-2 hover:bg-black hover:text-white transition-colors">
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <motion.button 
                        whileHover={{ scale: 1.05, skewX: -4 }}
                        className="w-full py-12 bg-black text-white group-hover:bg-white group-hover:text-black font-black text-4xl tracking-[0.4em] uppercase transition-all mt-20 border-[8px] border-black shadow-[30px_30px_0px_rgba(0,0,0,0.1)] group-hover:shadow-none"
                     >
                        INITIALIZE_KEY
                     </motion.button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. The Final Assertion (Call to Action) */}
      <section className="relative z-10 w-full bg-black text-white py-20 px-12 md:px-10 text-center overflow-hidden border-t-[20px] border-white">
         <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none" />
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-32 relative z-10"
         >
            <h2 className="text-[14vw] md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.6] uppercase text-white drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
               SAY_IT<br/>LOUDER.
            </h2>
            <div className="flex flex-col items-center gap-16">
               <motion.button 
                  whileHover={{ scale: 1.1, skewX: -15, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-10 py-16 bg-white text-black font-black uppercase text-4xl md:text-7xl tracking-[0.2em] shadow-[50px_50px_0px_white/10] hover:shadow-none transition-all flex items-center gap-12"
               >
                  COMMENCE <ArrowRight size={80} strokeWidth={8} />
               </motion.button>
               <div className="text-xl font-black uppercase tracking-[2em] opacity-40 italic mt-8">Transmitting High Fidelity Signals MMXXVI</div>
            </div>
         </motion.div>
      </section>

      {/* 8. Extra-Large Typographic Footer */}
      <footer className="w-full p-12 md:p-40 bg-white text-black border-t-[40px] border-black flex flex-col items-center gap-12 text-center relative z-110 overflow-hidden">
         <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-black opacity-[0.03] italic pointer-events-none uppercase">TYPE</div>
         
         <div className="flex flex-col items-center gap-8 group transition-all cursor-crosshair">
            <div className="w-64 h-64 bg-black flex items-center justify-center text-white -rotate-12 group-hover:rotate-12 transition-transform duration-700 shadow-[30px_30px_0px_#ccc] relative">
               <span className="text-6xl font-black italic">Z</span>
               <div className="absolute top-4 right-4 text-[10px] font-black tracking-widest opacity-40">[048]</div>
            </div>
            <div className="space-y-8">
               <div className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter italic leading-none uppercase text-black">ZORVIA.TXT</div>
               <div className="text-[14px] font-black tracking-[3em] opacity-40 uppercase italic ml-6">Archived Transmission // SYS_V.4.8</div>
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-2xl text-[14px] font-black uppercase tracking-[1.2em] opacity-30 border-y-[10px] border-black/5 py-24">
            <a href="#" className="hover:opacity-100 hover:tracking-[1.5em] transition-all underline decoration-4 underline-offset-8">Manifesto</a>
            <a href="#" className="hover:opacity-100 hover:tracking-[1.5em] transition-all underline decoration-4 underline-offset-8">Archives</a>
            <a href="#" className="hover:opacity-100 hover:tracking-[1.5em] transition-all underline decoration-4 underline-offset-8">Protocols</a>
            <a href="#" className="hover:opacity-100 hover:tracking-[1.5em] transition-all underline decoration-4 underline-offset-8">Security</a>
         </div>

         <div className="flex flex-wrap gap-12 pt-32 w-full max-w-screen-2xl justify-center items-center">
            {[GithubIcon, TwitterIcon, Mail, LinkedinIcon, InstagramIcon, Globe2].map((Icon, i) => (
               <a key={i} href="#" className="w-32 h-32 border-[12px] border-black flex items-center justify-center hover:bg-black hover:text-white hover:italic transition-all shadow-[15px_15px_0px_rgba(0,0,0,0.1)] hover:shadow-none">
                  <Icon size={48} strokeWidth={4} />
               </a>
            ))}
         </div>

         <div className="pt-32 flex flex-col md:flex-row justify-between w-full max-w-screen-2xl items-center gap-12 text-[16px] font-black uppercase tracking-[1em] opacity-20 italic">
            <span>© MMXXVI ZORVIA SYSTEMS // ALL RIGHTS RESERVED // V.4.8</span>
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-black rounded-full animate-pulse" />
                  <span>LATENCY: ZERO</span>
               </div>
               <span>VERACITY: TOTAL</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .text-shadow-xl {
          text-shadow: 0 20px 40px rgba(255,255,255,0.3);
        }
        .pattern-dots {
          background-image: radial-gradient(circle at 1px 1px, white 1px, transparent 0);
          background-size: 30px 30px;
        }
        .pattern-max-dots {
          background-image: radial-gradient(circle at 1px 1px, black 2px, transparent 0);
          background-size: 20px 20px;
        }
      `}} />
    </div>
  );
};

export default BoldTypographyMockup;
