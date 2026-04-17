import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Plus, Maximize, ArrowUpRight, Copy, Check, Menu, X, ArrowRight, 
  Layers, Smartphone, Code, ShieldCheck, Zap, Command, Box, Hash,
  Activity as ActivityIcon, Sliders, Globe, Cpu, Search, 
  ArrowDownCircle, Lock, Mail, Phone, MapPin, ExternalLink
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MonochromeMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-white text-black font-sans selection:bg-black selection:text-white pt-0 flex flex-col items-center">
      
      {/* 1. Fine Structure Grid (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-12 h-full w-px bg-black opacity-5" />
         <div className="absolute top-0 right-12 h-full w-px bg-black opacity-5" />
         <div className="absolute top-48 left-0 w-full h-px bg-black opacity-5" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* 2. Brutalist High-Contrast Navbar */}
      <nav className="sticky top-0 z-[110] w-full bg-white border-b-[12px] border-black px-8 md:px-24 py-10 flex justify-between items-center bg-white/80 backdrop-blur-3xl transition-all duration-500">
         <div className="flex items-center gap-8 group cursor-pointer">
            <div className="relative">
               <div className="w-16 h-16 bg-black text-white flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-all duration-700 shadow-[10px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className="text-4xl font-black italic">M</span>
               </div>
               <div className="absolute -top-2 -right-2 w-4 h-4 bg-black rounded-full animate-ping" />
            </div>
            <div className="flex flex-col leading-none group-hover:translate-x-4 transition-transform duration-700">
               <span className="text-4xl font-black uppercase tracking-tighter">MNCRM.SYSTEM</span>
               <span className="text-[10px] font-bold tracking-[1.5em] uppercase opacity-40 mt-1">Binary Reserve MMXXVI</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-black/40">
            {['Architecture', 'Systems', 'Archives', 'Essence'].map(item => (
               <a key={item} href="#" className="hover:text-black hover:tracking-[0.8em] transition-all relative group py-2">
                  {item}
                  <div className="absolute bottom-0 inset-x-0 h-[4px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
               </a>
            ))}
         </div>

         <div className="flex items-center gap-8">
            <button className="hidden sm:block px-12 py-4 bg-transparent text-black font-black uppercase text-xs tracking-[0.4em] border-[4px] border-black hover:bg-black hover:text-white transition-all shadow-[10px_10px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
               ACCESS_SYS
            </button>
            <Menu size={40} className="lg:hidden cursor-pointer" strokeWidth={3} />
         </div>
      </nav>

      {/* 3. Hero: Structural Purity */}
      <section className="relative z-10 w-full p-8 md:p-8 border-b-[20px] border-black bg-white flex flex-col justify-center min-h-[80vh] max-w-screen-2xl mx-auto shadow-none">
         <div className="flex flex-col gap-8 relative">
            <div className="space-y-16">
               <motion.div
                 initial={{ opacity: 0, x: -100 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1, ease: "easeOut" }}
                 viewport={{ once: true }}
                 className="inline-block px-8 py-3 bg-black text-white text-[12px] font-black uppercase tracking-[1em] italic"
               >
                  PROTOCOL_4.8_STABLE
               </motion.div>
               
               <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.7] tracking-tighter uppercase break-words border-l-[40px] border-black pl-16 py-8 relative group cursor-default transition-all hover:bg-black hover:text-white">
                  ABSOLUTE <br />
                  CONTRAST.
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 Transition-opacity">
                     <Zap size={300} strokeWidth={8} fill="currentColor" />
                  </div>
               </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
               <div className="lg:col-span-8 flex flex-col gap-16">
                  <p className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic bg-black text-white px-8 py-12 shadow-[30px_30px_0px_rgba(0,0,0,0.1)]">
                     "Clarity through violent subtraction. Building high-fidelity infrastructure with zero noise."
                  </p>
                  <p className="text-xl font-bold uppercase tracking-widest opacity-40 leading-snug border-l-[12px] border-black/10 pl-10 max-w-4xl italic mt-8 font-mono">
                     In the binary reserve, only the core logic remains. Minimalist structural builds designed to sustain centuries of trend erosion and digital fragmentation.
                  </p>
               </div>
               
               <div className="lg:col-span-4 flex flex-col gap-12 w-full">
                  <motion.button 
                    whileHover={{ scale: 1.05, skewX: -4, x: 10 }}
                    className="w-full py-10 bg-black text-white font-black uppercase tracking-[0.5em] text-2xl flex items-center justify-center gap-6 border-[8px] border-black shadow-[20px_20px_0px_rgba(0,0,0,0.1)] hover:shadow-none transition-all"
                  >
                     EXECUTE_UPLINK <ArrowRight size={48} strokeWidth={4} />
                  </motion.button>
                  <div className="flex gap-8">
                     <button className="flex-1 py-8 border-[6px] border-black text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-black hover:text-white transition-all">PROJECT_INDEX</button>
                     <button className="flex-1 py-8 border-[6px] border-black text-black font-black uppercase tracking-[0.4em] text-sm hover:bg-black hover:text-white transition-all">CONTACT_STRAT</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Binary Marquee (Inertia) */}
      <section className="relative z-20 w-full py-16 bg-black text-white overflow-hidden select-none border-y-[12px] border-black">
         <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="flex whitespace-nowrap gap-10 h-auto items-center"
         >
            {[...Array(10)].map((_, i) => (
               <span key={i} className="text-5xl font-black uppercase tracking-tighter italic flex items-center gap-12 group hover:text-white/20 transition-colors cursor-crosshair">
                  ZERO_NOISE_ONE_SYSTEM <Hash size={80} strokeWidth={8} /> BINARY_RESERVE <Zap size={80} fill="currentColor" /> 
               </span>
            ))}
         </motion.div>
      </section>

      {/* 5. Structural Matrix (Architecture) */}
      <section className="relative z-10 w-full bg-white text-black py-20 px-8 md:px-24">
         <div className="max-w-screen-2xl mx-auto space-y-12">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-b-[20px] border-black pb-20">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.7]">STRUCTURE.</h2>
               <div className="max-w-md text-right space-y-8">
                  <div className="text-sm font-black uppercase tracking-[2em] opacity-30 italic">High Fidelity Ops</div>
                  <p className="text-2xl font-bold uppercase tracking-widest leading-none bg-black text-white px-6 py-3 italic inline-block">Absolute structural dominance in every node.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-[16px] border-black divide-x-[16px] divide-y-[16px] lg:divide-y-0 divide-black bg-white shadow-[40px_40px_0px_rgba(0,0,0,0.05)]">
               {[
                 { id: "01", title: "Grids_X", icon: Activity, desc: "Asymmetric layout systems for radical tension and ocular focus across all clusters." },
                 { id: "02", title: "Scale_Max", icon: Maximize, desc: "Massive scale elements that command respect and presence in noise-heavy digital markets." },
                 { id: "03", title: "Depth_V", icon: Layers, desc: "Deep multi-layer components with spatial awareness and shadow-casting logic." },
                 { id: "04", title: "Responsive", icon: Smartphone, desc: "Fluid binary adaptation across every possible node, legacy or future-state." },
                 { id: "05", title: "Secure_Z", icon: ShieldCheck, desc: "Unbreakable structural encryption for the integrity of your visual communications." },
                 { id: "06", title: "Logic_H", icon: Code, desc: "Clean semantic markup optimized for search engines and high-fidelity rendering." },
                 { id: "07", title: "Core_Sys", icon: Zap, desc: "Infinite power allocation for mission-critical digital infrastructures and platforms." },
                 { id: "08", title: "Global_M", icon: Globe, desc: "Distributed mirror network for zero-latency transmission of core structural assets." }
               ].slice(0, 4).map((f, i) => (
                  <div key={i} className="group p-16 space-y-12 bg-white hover:bg-black hover:text-white transition-all duration-700 relative overflow-hidden flex flex-col justify-between">
                     <span className="absolute -bottom-10 -right-10 text-[20rem] font-black italic opacity-[0.03] group-hover:opacity-[0.1] transition-opacity pointer-events-none">{f.id}</span>
                     <div className="space-y-12 relative z-10">
                        <div className="w-24 h-24 border-[10px] border-black group-hover:border-white flex items-center justify-center group-hover:scale-110 transition-transform duration-700 italic text-4xl font-black">
                           <f.icon size={48} strokeWidth={4} />
                        </div>
                        <div className="space-y-6">
                           <h3 className="text-5xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">{f.title}.</h3>
                           <p className="text-lg font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 leading-snug italic">{f.desc}</p>
                        </div>
                     </div>
                     <div className="pt-16 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700 relative z-10">
                        <span className="text-xs font-black uppercase tracking-[1em] italic">Access_Protocol</span>
                        <ArrowUpRight size={48} strokeWidth={8} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Binary Reserve Analytics (Stats) */}
      <section className="py-20 bg-black text-white w-full px-8 md:px-24 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-48 opacity-[0.05] italic font-black text-[30vw] pointer-events-none uppercase">STATS</div>
         <div className="max-w-7xl mx-auto space-y-32 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               <div className="space-y-16">
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic border-b-[12px] border-white/20 pb-12">THE_NUMBERS.</h2>
                  <p className="text-2xl font-bold uppercase tracking-[1em] opacity-40 italic">Global Transmission Data</p>
               </div>
               <div className="grid grid-cols-2 gap-16">
                  {[
                     { val: "100%", label: "CONTRAST_RATIO" },
                     { val: "ZERO", label: "NOISE_FLOOR" },
                     { val: "CORE", label: "STABILITY" },
                     { val: "EXEC", label: "LATENCY" }
                  ].map((s, i) => (
                     <div key={i} className="p-12 border-[6px] border-white/10 hover:border-white transition-all group hover:bg-white hover:text-black">
                        <div className="text-7xl font-black tracking-tighter italic mb-4 group-hover:scale-110 transition-transform">{s.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[1.5em] opacity-40 group-hover:opacity-100">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="w-full h-auto border-[12px] border-white/10 bg-white/5 relative group overflow-hidden flex items-center justify-center p-12">
               <div className="absolute inset-x-0 top-1/2 h-px bg-white/10" />
               <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
               <motion.div 
                 animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
                 transition={{ duration: 20, repeat: Infinity }}
                 className="relative w-96 h-96 border-[20px] border-white flex items-center justify-center p-10 group-hover:border-[#fff]"
               >
                  <Box size={200} strokeWidth={8} fill="white" className="opacity-20 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute -top-12 -left-12 p-4 bg-white text-black font-black text-xs uppercase tracking-widest italic group-hover:rotate-[-45deg] transition-transform">SECURE_NODE_01</div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. Binary Pricing (Tier Access) */}
      <section className="py-20 px-8 md:px-24 w-full max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-12 space-y-12">
            <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter italic leading-none underline decoration-black underline-offset-[20px] decoration-[30px]">BINARY_PLANS.</h2>
            <p className="text-[12px] font-black uppercase tracking-[2em] opacity-30 italic">Investment Tiering // System Access</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-[20px] border-black bg-black w-full lg:max-w-6xl shadow-[50px_50px_0px_rgba(0,0,0,0.05)]">
            {[
               { tier: "VOL. 01 (CORE)", price: "320", desc: "For single node startups and independent digital architects requiring brutalist clarity.", items: ["3 Core Static Grids", "Binary Palette System", "Standard Protocol Uplink", "24hr Sync Latency", "Basic Source Access"] },
               { tier: "VOL. 02 (ENT)", price: "950", featured: true, desc: "For global clusters and legacy institutions demanding planetary architectural dominance.", items: ["12 Advanced Grid Systems", "Multi-Layer Depth Engine", "High-Priority Uplink", "Zero Latency Ops", "Full Sovereign Source", "24/7 Strategic Audit"] }
            ].map((p, i) => (
               <div key={i} className={`p-8 bg-white group hover:bg-black hover:text-white transition-all duration-1000 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="space-y-16 relative z-10">
                     <div className="flex justify-between items-start border-b-[8px] border-black group-hover:border-white pb-10">
                        <span className="text-xl font-black uppercase tracking-[0.8em] italic">{p.tier}</span>
                        <div className="w-12 h-12 border-[6px] border-current flex items-center justify-center">
                           <Zap size={24} fill={p.featured ? "currentColor" : "none"} strokeWidth={4} />
                        </div>
                     </div>
                     <div className="text-6xl md:text-7xl font-black tracking-tighter leading-none italic relative group-hover:scale-105 transition-transform duration-1000">
                        <span className="text-3xl font-black opacity-30 absolute top-0 left-[-3rem]">$</span>{p.price}
                        <span className="text-[12px] font-black uppercase tracking-[1em] opacity-20 absolute bottom-0 right-[-6rem] rotate-[-90deg] invisible md:visible">Archival Fee / Term</span>
                     </div>
                     <p className="text-xl font-bold uppercase tracking-widest leading-relaxed opacity-60 italic border-l-[12px] border-black group-hover:border-white pl-8 py-4">
                        {p.desc}
                     </p>
                     <ul className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-16">
                        {p.items.map((item, k) => (
                           <li key={k} className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] italic opacity-40 group-hover:opacity-100 border-l-[4px] border-black group-hover:border-white pl-4 py-2 hover:bg-black hover:text-white transition-colors">
                              <Check size={18} strokeWidth={6} /> {item}
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
      </section>

      {/* 8. The Final Assertion (Inquiry) */}
      <section className="bg-white py-20 px-12 md:px-10 relative overflow-hidden text-center z-10 border-t-[40px] border-black">
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-12 relative z-10"
         >
            <h2 className="text-7xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.6] uppercase text-black">
               BINARY<br/>LEGACY.
            </h2>
            <div className="flex flex-col items-center gap-16">
               <motion.button 
                  whileHover={{ scale: 1.1, skewX: -15, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-20 bg-black text-white font-black uppercase text-5xl md:text-8xl tracking-[0.3em] shadow-[60px_60px_0px_rgba(0,0,0,0.05)] hover:shadow-none transition-all flex items-center gap-16"
               >
                  COMMENCE <ArrowDownCircle size={100} strokeWidth={8} />
               </motion.button>
               <div className="text-xl font-black uppercase tracking-[3em] opacity-40 italic mt-8 font-mono">Archive // MMXXVI // SYNC_STABLE</div>
            </div>
         </motion.div>
      </section>

      {/* 9. Extra-Brutalist Monochrome Footer */}
      <footer className="w-full p-12 md:p-48 bg-black text-white border-t-[40px] border-black flex flex-col items-center gap-16 relative z-[110] overflow-hidden">
         <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-black opacity-[0.03] italic pointer-events-none uppercase">MONO</div>
         
         <div className="flex flex-col items-center gap-8 group transition-all cursor-crosshair">
            <div className="w-80 h-80 bg-white flex items-center justify-center text-black -rotate-12 group-hover:rotate-12 transition-all duration-1000 shadow-[40px_40px_0px_rgba(255,255,255,0.1)] relative">
               <span className="text-7xl font-black italic select-none">M</span>
               <div className="absolute top-8 right-8 text-xs font-black tracking-widest opacity-40">[SYN_V.4.8]</div>
            </div>
            <div className="space-y-8">
               <div className="text-5xl md:text-7xl font-black tracking-tighter italic leading-none uppercase text-white hover:italic transition-all">MNCRM.STUDIO</div>
               <div className="text-[14px] font-black tracking-[4em] opacity-40 uppercase italic ml-10">Institutional Proprietary // Binary Reserve</div>
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-screen-2xl text-[14px] font-black uppercase tracking-[1.5em] opacity-30 border-y-[10px] border-white/10 py-32 text-center">
            {['Architecture', 'Systems', 'Archives', 'Essence', 'Protocols', 'Support', 'Legal', 'Privacy'].map(item => (
               <a key={item} href="#" className="hover:text-white hover:tracking-[2em] transition-all underline decoration-8 underline-offset-12 decoration-white/5">
                  {item}
               </a>
            ))}
         </div>

         <div className="flex flex-wrap gap-16 w-full max-w-screen-2xl justify-center items-center pt-24">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone].map((Icon, i) => (
               <a key={i} href="#" className="w-32 h-32 bg-white text-black border-[12px] border-white flex items-center justify-center hover:bg-black hover:text-white hover:italic transition-all shadow-[20px_20px_0px_rgba(255,255,255,0.05)] group">
                  <Icon size={48} strokeWidth={4} className="group-hover:scale-125 group-hover:rotate-12 transition-transform" />
               </a>
            ))}
         </div>

         <div className="pt-12 flex flex-col md:flex-row justify-between w-full max-w-screen-2xl items-center gap-16 text-[18px] font-black uppercase tracking-[1.5em] opacity-20 italic font-mono">
            <span>© MMXXVI MNCRM.STUDIO SYSTEMS // ALL RIGHTS RESERVED // V.4.8</span>
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_20px_white]" />
                  <span>LATENCY: ZERO</span>
               </div>
               <span>VERACITY: BINARY</span>
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
        .text-stroke {
          -webkit-text-stroke: 2px black;
          color: transparent;
        }
        .text-stroke-white {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }
      `}} />
    </div>
  );
};

export default MonochromeMockup;
