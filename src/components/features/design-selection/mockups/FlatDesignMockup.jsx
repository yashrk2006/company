import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, CheckCircle, Search, Mail, ArrowRight, Zap, Star, 
  Heart, Globe, MessageCircle, BarChart3, Database, Shield,
  Smartphone, Monitor, CreditCard, ChevronDown, Plus, Layers,
  Layout, Settings
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const FlatDesignMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#ECF0F1] text-[#2C3E50] font-sans selection:bg-[#3498DB] selection:text-white flex flex-col pt-0">
      {/* 1. Global 2D Geometric Vectors */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <div className="absolute -top-8 -right-20 w-[40rem] h-[40rem] bg-[#3498DB] rounded-full opacity-5" />
         <div className="absolute top-1/2 -left-40 w-[30rem] h-[30rem] bg-[#E74C3C] rounded-full opacity-5" />
         <div className="absolute bottom-20 right-[20%] w-[25rem] h-[25rem] bg-[#F1C40F] opacity-5 rotate-45" />
         <div className="absolute top-[20%] left-[10%] w-24 h-24 bg-[#2ECC71] opacity-5" />
      </div>

      {/* 2. Primary 2D Navbar */}
      <nav className="sticky top-6 z-[100] mx-6 md:mx-12 bg-white border-b-8 border-[#BDC3C7] px-8 py-6 flex justify-between items-center rounded-2xl shadow-none">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 bg-[#3498DB] rounded-xl flex items-center justify-center text-white border-b-4 border-[#2980B9] group-hover:translate-y-1 group-hover:border-b-0 transition-all">
               <Cloud size={32} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-3xl font-black tracking-tight text-[#2C3E50]">ZORVIA_FLAT</span>
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7F8C8D] mt-1">Simple Systems</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-10 text-sm font-black uppercase tracking-widest text-[#7F8C8D]">
            {['Solutions', 'Features', 'Community', 'Pricing'].map((item, i) => (
               <a key={item} href="#" className={`${i === 0 ? 'text-[#3498DB] border-b-4 border-[#3498DB]' : 'hover:text-[#3498DB]'} pb-1 transition-all`}>
                  {item}
               </a>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <button className="hidden sm:block text-xs font-black uppercase tracking-widest text-[#7F8C8D] hover:text-[#3498DB] transition-colors">
               Client Portal
            </button>
            <button className="px-10 py-4 bg-[#3498DB] text-white rounded-xl font-black text-xs uppercase tracking-widest border-b-4 border-[#2980B9] hover:translate-y-1 hover:border-b-0 transition-all">
               Get Started
            </button>
         </div>
      </nav>

      {/* 3. Hero Section (Clarity) */}
      <section className="relative z-10 pt-32 pb-12 px-12 md:px-24 flex flex-col items-center text-center max-w-7xl mx-auto min-h-fit">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-16"
         >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white rounded-full text-[11px] font-black uppercase tracking-[0.4em] text-[#3498DB] border-b-4 border-[#BDC3C7]">
               <Zap size={16} className="text-[#F1C40F] fill-[#F1C40F]" />
               Peak Performance Systems
            </div>

            <h1 className="text-4xl md:text-5xl font-black leading-[0.9] tracking-tighter text-[#2C3E50] uppercase">
               Keep It Simple. <br />
               <span className="text-[#3498DB] underline decoration-[#BDC3C7] decoration-8 underline-offset-8">Communicate.</span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold leading-relaxed max-w-3xl mx-auto text-[#7F8C8D] uppercase tracking-tighter italic">
               Eliminate unnecessary complexity. Flat design ensures your institutional logic reaches the user instantly, without visual noise or skeuomorphic friction.
            </p>

            <div className="flex flex-wrap justify-center gap-8 pt-6">
               <button className="px-16 py-8 bg-[#E74C3C] text-white rounded-2xl font-black text-lg uppercase tracking-widest border-b-8 border-[#C0392B] hover:translate-y-2 hover:border-b-0 transition-all shadow-none flex items-center gap-4">
                  Initialize Sync <ArrowRight size={24} />
               </button>
               <button className="px-16 py-8 bg-white border-4 border-[#BDC3C7] text-[#2C3E50] rounded-2xl font-black text-lg uppercase tracking-widest border-b-8 hover:bg-[#FDFDFD] transition-all">
                  Documentation
               </button>
            </div>
         </motion.div>
      </section>

      {/* 4. Feature Blocks (2D Grid) */}
      <section className="relative z-10 py-16 px-12 md:px-10 bg-white border-y-8 border-[#BDC3C7]">
         <div className="max-w-7xl mx-auto space-y-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-16 border-b-4 border-[#ECF0F1]">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#3498DB]">Flat Architecture</span>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-[#2C3E50] uppercase leading-none">The_Standard.</h2>
               </div>
               <p className="text-xl font-bold uppercase tracking-widest text-[#7F8C8D] italic leading-loose">
                  High-contrast, high-speed, and low-friction logic. Every component is designed for immediate recognition and zero cognitive load.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                  { title: "2D_Infrastructure", icon: Layout, color: "bg-[#3498DB]", desc: "No-shadow grid systems built for ultra-responsive cross-platform performance." },
                  { title: "Sharp_Logic", icon: Zap, color: "bg-[#F1C40F]", desc: "Clean geometric algorithms that process data with absolute mathematical precision." },
                  { title: "Vivid_UI", icon: Star, color: "bg-[#E74C3C]", desc: "High-saturation focal points that guide user intent with 100% clarity." },
                  { title: "Global_Sync", icon: Globe, color: "bg-[#2ECC71]", desc: "Standardized communication protocols for worldwide decentralized operation." },
                  { title: "Secure_Vault", icon: Shield, color: "bg-[#9B59B6]", desc: "Flat-layered encryption modules ensuring institutional data integrity." },
                  { title: "Live_Matrix", icon: BarChart3, color: "bg-[#E67E22]", desc: "Real-time telemetry visualized through crisp, geometric data representations." }
               ].map((f, i) => (
                  <div key={i} className="group p-14 bg-[#ECF0F1] border-b-8 border-[#BDC3C7] rounded-[2.5rem] flex flex-col items-center text-center gap-10 hover:bg-white hover:border-[#3498DB] hover:translate-y-2 hover:border-b-0 transition-all duration-300">
                     <div className={`w-24 h-24 ${f.color} rounded-2xl flex items-center justify-center text-white border-b-4 border-black/10 transition-transform group-hover:scale-110`}>
                        <f.icon size={48} fill="currentColor" />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-4xl font-black text-[#2C3E50] uppercase tracking-tighter">{f.title}.</h3>
                        <p className="text-sm font-bold uppercase tracking-widest leading-relaxed text-[#7F8C8D]">{f.desc}</p>
                     </div>
                     <div className="pt-10 flex items-center justify-center text-[11px] font-black uppercase tracking-[0.5em] text-[#3498DB]">
                        EXPLORE_MODULE
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Flat Performance (Performance Dashboard) */}
      <section className="py-16 px-12 md:px-10 bg-[#2C3E50] text-white z-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none grayscale">
            <Layers size={600} />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
            <div className="space-y-16 max-w-xl">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#3498DB]">Telemetry Sync</span>
                  <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">Measured <br/> Intensity.</h2>
               </div>
               <p className="text-xl font-bold italic opacity-60 leading-relaxed uppercase tracking-tighter italic">Monitoring 2.4B nodes per cycle with zero rendering overhead. Our flat-panel architecture delivers raw speed.</p>
               <div className="grid grid-cols-2 gap-12 pt-8">
                  {[
                     { val: "99.9%", label: "STABILITY_LOG" },
                     { val: "1.2ms", label: "NODE_LATENCY" },
                     { val: "ZERO", label: "VISUAL_NOISE" },
                     { val: "Prime", label: "AUTHORITY" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-2 border-l-4 border-[#3498DB] pl-8">
                        <div className="text-6xl font-black tracking-tighter italic">{s.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-16 bg-white rounded-[4rem] text-[#2C3E50] w-full lg:w-auto relative group">
               <div className="grid grid-cols-2 gap-10">
                  {[
                     { label: "Search Index", color: "text-[#3498DB]", val: "Sync OK", icon: Search },
                     { label: "Mail Flow", color: "text-[#E74C3C]", val: "2.4k/s", icon: Mail },
                     { label: "Database", color: "text-[#F1C40F]", val: "100%", icon: Database },
                     { label: "Settings", color: "text-[#2ECC71]", val: "Optimized", icon: Settings }
                  ].map((m, i) => (
                     <div key={i} className="flex flex-col items-center justify-center p-10 bg-[#ECF0F1] rounded-[2rem] border-b-4 border-[#BDC3C7] hover:translate-y-2 hover:border-b-0 transition-all cursor-crosshair">
                        <m.icon size={32} className={`${m.color} mb-6 transition-transform group-hover:scale-125`} />
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">{m.label}</div>
                        <div className="text-xl font-black uppercase tracking-tighter">{m.val}</div>
                     </div>
                  ))}
               </div>
               <div className="mt-12 w-full p-6 bg-[#2C3E50] text-white rounded-2xl flex items-center justify-between group-hover:bg-[#3498DB] transition-colors cursor-pointer border-b-4 border-black/20 font-black uppercase tracking-widest text-xs">
                  Run Diagnostics [F9]
               </div>
            </div>
         </div>
      </section>

      {/* 6. Friendly Bundles (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#3498DB]">Institutional Packaging</span>
            <h2 className="text-6xl md:text-5xl font-black uppercase tracking-tighter text-[#2C3E50] leading-none">Bundles.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
            <div className="p-16 bg-white border-b-8 border-[#BDC3C7] rounded-[4rem] flex flex-col gap-12 group hover:bg-[#FDFDFD] transition-all">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-[#3498DB]">
                  <span>Tier_01: Regular</span>
                  <Smartphone size={24} className="opacity-20 group-hover:text-[#3498DB] transition-all" />
               </div>
               <div className="text-9xl font-black italic text-[#2C3E50] tracking-tighter leading-none">$240<span className="text-sm font-black uppercase tracking-[0.2em] opacity-30 ml-4 not-italic">/annum</span></div>
               <ul className="space-y-6 pt-10 border-t-4 border-[#ECF0F1]">
                  {['Core Flat Architecture', 'Standard Node Support', 'Daily Sync Patterns', 'Community Access'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest text-[#2C3E50]/60 italic">
                        <CheckCircle size={24} className="text-[#2ECC71]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-[#3498DB] text-white font-black uppercase text-xl tracking-[0.3em] rounded-3xl border-b-8 border-[#2980B9] hover:translate-y-2 hover:border-b-0 transition-all mt-10">Select_Tier</button>
            </div>

            <div className="p-16 bg-[#3498DB] text-white border-b-8 border-[#2980B9] rounded-[4rem] flex flex-col gap-12 relative overflow-hidden group shadow-2xl scale-105 z-20">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700">
                  <Star size={300} fill="currentColor" />
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] relative z-10">
                  <span className="px-6 py-2 bg-white text-[#3498DB] rounded-full shadow-lg">Tier_02: Authority</span>
                  <Zap size={24} className="text-white fill-white animate-pulse" />
               </div>
               <div className="text-9xl font-black italic tracking-tighter leading-none relative z-10">$840<span className="text-sm font-black uppercase tracking-[0.3em] ml-4 not-italic">/annum</span></div>
               <p className="text-xs font-black uppercase tracking-[0.4em] leading-loose opacity-60 italic relative z-10">Full high-fidelity institutional sync. Priority access to premium 2D components and sovereign cloud governance.</p>
               <ul className="space-y-6 pt-8 relative z-10 border-t-4 border-white/20">
                  {['Full Institutional Sync', 'Unlimited Module Range', 'Priority Field Support', 'Custom Geometry Suite', 'Neural Sync Monitoring'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest text-white/90">
                        <Plus size={24} strokeWidth={4} className="text-white" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-white text-[#3498DB] font-black uppercase text-xl tracking-[0.3em] rounded-3xl border-b-8 border-[#BDC3C7] hover:translate-y-2 hover:border-b-0 transition-all mt-10 relative z-10">Purchase_Authority</button>
            </div>
         </div>
      </section>

      {/* 7. Flat Footer */}
      <footer className="p-12 md:p-40 bg-white border-t-8 border-[#BDC3C7] flex flex-col items-center gap-10 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-10 group cursor-pointer">
                  <div className="w-24 h-24 bg-[#3498DB] rounded-3xl flex items-center justify-center text-white border-b-4 border-black/10 group-hover:rotate-12 transition-transform shadow-xl">
                     <Cloud size={64} fill="currentColor" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-5xl font-black text-[#2C3E50] tracking-tighter uppercase italic leading-none">flat.zorvia</h4>
                     <p className="text-[11px] font-black tracking-[1em] text-[#3498DB] uppercase italic opacity-40">Simple Structures // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-black uppercase tracking-[0.3em] text-[#7F8C8D] leading-loose border-l-8 border-[#ECF0F1] pl-10 italic">Standardizing digital clarity for the decentralized era. We create high-fidelity 2D structures that respond with absolute logic.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-[#2C3E50] uppercase tracking-[0.5em] italic">PLATFORM_INDEX</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-[#7F8C8D] uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#3498DB] transition-all">Geometry_Map</a>
                  <a href="#" className="hover:text-[#3498DB] transition-all">Node_Status</a>
                  <a href="#" className="hover:text-[#3498DB] transition-all">Vector_Sync</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-[#2C3E50] uppercase tracking-[0.5em] italic">GOVERNANCE</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-[#7F8C8D] uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#3498DB] transition-all">Privacy_2D</a>
                  <a href="#" className="hover:text-[#3498DB] transition-all">Legal_Docs</a>
                  <a href="#" className="hover:text-[#3498DB] transition-all">Field_Rep</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-16 pt-32 border-t-8 border-[#ECF0F1] w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-[#ECF0F1] border-b-4 border-[#BDC3C7] rounded-3xl flex items-center justify-center text-[#7F8C8D] hover:bg-[#3498DB] hover:text-white hover:translate-y-1 hover:border-b-0 transition-all font-black text-3xl">
                  <Icon size={32} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-[#BDC3C7] uppercase tracking-[1em] italic leading-loose">
            <span>© MMXXVI ZORVIA FLAT INDUSTRIES</span>
            <div className="flex gap-10">
               <span>Clarity Prime</span>
               <Cloud size={12} />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default FlatDesignMockup;
