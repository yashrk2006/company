import React from 'react';
import { motion } from 'framer-motion';
import { 
  Minus, Plus, Zap, ArrowRight, Check, Eye, Lock, Globe, Layers, Wind, Sparkles,
  Command, Box, Activity, Shield, Cpu, ExternalLink, ArrowUpRight, ChevronDown,
  Menu, X, Bookmark, Share2, Mail, Phone, MapPin, Clock, Search
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MinimalDarkMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-black text-[#EAB308] font-sans selection:bg-[#EAB308] selection:text-black pt-0 flex flex-col">
      
      {/* 1. Immersive Ethereal Void Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.03)_0%,transparent_70%)]" />
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[-10%] w-[1000px] h-auto bg-[radial-gradient(circle,#EAB308_0%,transparent_70%)] blur-[150px]"
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
      </div>

      {/* 2. Zen Minimalist Navbar */}
      <nav className="sticky top-0 z-[110] bg-black/80 backdrop-blur-3xl border-b border-white/5 px-8 md:px-24 py-10 flex justify-between items-center transition-all duration-700">
         <div className="flex items-center gap-10 group cursor-pointer">
            <div className="relative">
               <div className="w-12 h-12 border border-[#EAB308]/20 flex items-center justify-center group-hover:border-[#EAB308] transition-all duration-700">
                  <motion.div 
                    animate={{ scale: [1, 1.5, 1] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-1.5 h-1.5 bg-[#EAB308] rounded-full" 
                  />
               </div>
               <div className="absolute -top-2 -right-2 text-[8px] font-light opacity-30">V.4.8</div>
            </div>
            <div className="flex flex-col items-start leading-none group-hover:translate-x-2 transition-transform duration-700">
               <span className="text-2xl font-light lowercase tracking-[0.5em] text-[#EAB308]">minimal.zorvia</span>
               <span className="text-[8px] tracking-[1.5em] uppercase opacity-20 mt-1">Silent Architecture</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[9px] font-light lowercase tracking-[0.8em] text-[#EAB308]/40">
            {['Essence', 'Protocol', 'Systems', 'Archives'].map(item => (
               <a key={item} href="#" className="hover:text-white hover:tracking-[1em] transition-all relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#EAB308] group-hover:w-full transition-all duration-700" />
               </a>
            ))}
         </div>

         <div className="flex items-center gap-10">
            <button className="hidden sm:block px-12 py-3 bg-transparent text-[#EAB308] border border-[#EAB308]/20 hover:border-[#EAB308] hover:bg-[#EAB308]/5 font-light uppercase text-[10px] tracking-[0.6em] transition-all duration-700">
               Initialize
            </button>
            <Menu size={28} className="lg:hidden cursor-pointer" />
         </div>
      </nav>

      {/* 3. Hero: The Mastery of Content */}
      <section className="relative z-10 min-h-fit flex flex-col items-center justify-center p-12 lg:p-48 text-center bg-transparent">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="max-w-6xl flex flex-col items-center gap-20"
         >
            <div className="w-px h-64 bg-gradient-to-b from-transparent via-[#EAB308] to-transparent opacity-20 shadow-[0_0_20px_#EAB308]" />
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.15em] leading-[0.85] uppercase text-white transition-all hover:tracking-[0.2em] cursor-default">
               NOTHING <br />
               <span className="text-[#EAB308] italic font-light drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">EXTRA.</span>
            </h1>
            
            <p className="text-xl md:text-4xl lg:text-5xl font-light tracking-[0.3em] leading-relaxed opacity-40 uppercase max-w-5xl italic text-white flex flex-col items-center gap-8">
               "Eliminate distraction. Elevate content."
               <span className="text-sm tracking-[1.5em] opacity-30 mt-4 leading-none">Institutional Restraint MMXXVI</span>
            </p>

            <div className="pt-24 flex flex-col items-center gap-8 w-full max-w-sm">
               <motion.button 
                 whileHover={{ scale: 1.05, letterSpacing: "1em" }}
                 className="w-full py-10 bg-transparent border-2 border-[#EAB308]/20 text-[#EAB308] text-[14px] uppercase font-light tracking-[0.6em] hover:border-[#EAB308] transition-all duration-1000 group flex items-center justify-center gap-6 relative overflow-hidden"
               >
                  <span className="relative z-10">ENTER_PROTOCOL</span>
                  <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-[#EAB308]/5 transition-all duration-1000" />
                  <ArrowRight size={24} className="group-hover:translate-x-6 transition-transform duration-1000" strokeWidth={1} />
               </motion.button>
               
               <div className="flex justify-between items-center w-full px-4 text-[9px] font-light uppercase tracking-[1.5em] opacity-20 italic">
                  <span>SYS:NOMINAL</span>
                  <div className="w-2 h-2 bg-[#EAB308] rounded-full animate-pulse" />
                  <span>LAT:0.2ms</span>
               </div>
            </div>
            
            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="flex flex-col items-center gap-8 opacity-20 mt-32"
            >
               <span className="text-[10px] uppercase tracking-[1em] font-light">The Essence Below</span>
               <ChevronDown size={28} strokeWidth={1} />
            </motion.div>
         </motion.div>
      </section>

      {/* 4. Infrastructure Matrix (Core Features) */}
      <section className="relative z-10 py-20 bg-white/5 border-y border-white/5">
         <div className="max-w-screen-2xl mx-auto px-8 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {[
                 { title: "Quiet_Sync", icon: Wind, desc: "Background processes that operate with zero thermal noise or distraction for the executive user." },
                 { title: "Pure_View", icon: Eye, desc: "A visual interface that prioritizes readability over decorative excess and information density." },
                 { title: "Ghost_Mesh", icon: Layers, desc: "Decentralized architecture that remains invisible until interaction is required by the node." },
                 { title: "Zen_Secure", icon: Shield, desc: "Minimalist protection layers focused on surgical defense rather than heavy encryption overhead." },
                 { title: "Flow_Metric", icon: Activity, desc: "Real-time telemetry streams delivered through high-fidelity, un-ornamented data modules." },
                 { title: "Void_Logic", icon: Command, desc: "Proprietary alignment systems that optimize empty space for maximum ocular relaxation." },
                 { title: "Static_Iron", icon: Box, desc: "Bulletproof structural builds designed to sustain centuries of digital trend erosion." },
                 { title: "Zero_CD", icon: Cpu, desc: "Instantaneous compilation of core assets with zero architectural fragmentation or latency." }
               ].map((f, i) => (
                  <div key={i} className="group space-y-12 p-12 border border-transparent hover:border-[#EAB308]/10 transition-all duration-1000 hover:bg-black">
                     <div className="w-16 h-px bg-[#EAB308]/20 group-hover:w-full transition-all duration-1000" />
                     <div className="flex flex-col gap-10">
                        <div className="text-[#EAB308] opacity-30 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110">
                           <f.icon size={48} strokeWidth={1} />
                        </div>
                        <div className="space-y-6">
                           <h3 className="text-3xl font-light uppercase tracking-[0.4em] text-white hover:text-[#EAB308] transition-colors">{f.title}</h3>
                           <p className="text-[11px] font-light tracking-[0.3em] leading-relaxed opacity-30 uppercase italic group-hover:opacity-60 transition-all duration-1000">{f.desc}</p>
                        </div>
                     </div>
                     <div className="pt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight size={24} className="text-[#EAB308]" strokeWidth={1} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Metrics of Silence (Stats) */}
      <section className="py-20 px-8 md:px-24 bg-transparent z-10 relative overflow-hidden">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="space-y-24 max-w-3xl">
               <div className="space-y-8">
                  <span className="text-[11px] font-light uppercase tracking-[1em] opacity-30 italic">Prescribed Performance</span>
                  <h2 className="text-5xl md:text-6xl font-extralight uppercase tracking-tighter leading-none text-white italic">The_Void.</h2>
               </div>
               <p className="text-2xl font-extralight italic leading-loose opacity-60 uppercase tracking-[0.4em] text-white border-l-2 border-[#EAB308]/20 pl-12 py-6">
                  Monitoring the absence of noise across 10^12 clusters. High-fidelity structural purity delivered through silent execution metrics.
               </p>
               <div className="grid grid-cols-2 gap-16 pt-12">
                  {[
                     { val: "99.9%", label: "SILENCE_INDEX" },
                     { val: "0.2ms", label: "VOID_LATENCY" },
                     { val: "CORE", label: "RESTRAINT" },
                     { val: "ZERO", label: "FRICTION" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-4 border-b border-white/10 pb-12 hover:border-[#EAB308]/40 transition-all group">
                        <div className="text-7xl font-extralight tracking-tighter text-[#EAB308] italic opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all tabular-nums">{s.val}</div>
                        <div className="text-[10px] font-light uppercase tracking-[0.6em] opacity-30 group-hover:opacity-60">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="relative group w-full lg:w-auto h-auto min-h-[400px] flex items-center justify-center">
               <div className="absolute inset-0 border border-white/5 group-hover:border-[#EAB308]/20 transition-all duration-[2000ms] rounded-full scale-[1.5] rotate-45" />
               <motion.div 
                 animate={{ rotate: 360 }} 
                 transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                 className="relative w-96 h-96 border border-[#EAB308]/10 rounded-full flex items-center justify-center p-20"
               >
                  <Globe size={180} strokeWidth={0.5} className="text-[#EAB308] opacity-20" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#EAB308]/10" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#EAB308]/10" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 6. Selective Models (Pricing) */}
      <section className="py-20 px-8 md:px-24 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-12 space-y-12">
            <Wind size={48} className="mx-auto opacity-20" strokeWidth={1} />
            <h2 className="text-7xl md:text-7xl font-extralight text-white tracking-[0.4em] uppercase leading-none italic">PRIVATE.</h2>
            <p className="text-[12px] font-light uppercase tracking-[1.5em] opacity-30 italic">Selective Access // Restricted Nodes</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:max-w-6xl">
            <div className="p-8 border border-white/5 hover:border-[#EAB308]/20 bg-black group relative transition-all duration-1000 overflow-hidden flex flex-col justify-between">
               <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Globe size={300} strokeWidth={0.5} />
               </div>
               <div className="space-y-20 relative z-10">
                  <div className="flex justify-between items-center mb-16">
                     <span className="text-[10px] font-light uppercase tracking-[1em] opacity-30 italic">System_Tier_01</span>
                     <Minus size={24} strokeWidth={1} className="opacity-40" />
                  </div>
                  <div className="space-y-6">
                     <div className="text-5xl font-extralight text-[#EAB308] tracking-tighter leading-none italic">$320<span className="text-xs opacity-20 tracking-[1em] ml-8 not-italic">/term</span></div>
                     <p className="text-sm font-light uppercase tracking-[0.4em] opacity-40 leading-relaxed max-w-[280px] italic border-l border-[#EAB308]/20 pl-6">Essential refinement for the solitary digital architect.</p>
                  </div>
                  <ul className="space-y-10 py-12">
                     {['Curated Type Architect', 'Static Layout Blueprint', 'Pure Signal Channel', 'Global Mirror v.01', 'Secure Archive Node'].map(item => (
                        <li key={item} className="flex items-center gap-8 text-[11px] font-light uppercase tracking-[0.8em] text-white/30 group-hover:text-white/80 transition-all italic">
                           <div className="w-1.5 h-1.5 border border-[#EAB308]/30 rounded-full" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-10 bg-transparent border border-[#EAB308]/30 text-[#EAB308] text-[12px] uppercase font-light tracking-[0.6em] hover:bg-[#EAB308] hover:text-black transition-all duration-1000 shadow-2xl mt-12">Select_Protocol</button>
               </div>
            </div>

            <div className="p-8 bg-[#EAB308]/5 border border-[#EAB308]/40 relative group overflow-hidden shadow-[0_0_100px_rgba(234,179,8,0.05)] transition-all duration-[2000ms] flex flex-col justify-between">
               <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-2 bg-[#EAB308] transition-all duration-[2000ms]" />
               <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-[2000ms]">
                  <Lock size={350} strokeWidth={0.5} />
               </div>
               <div className="space-y-20 relative z-10">
                  <div className="flex justify-between items-center mb-16">
                     <div className="flex items-center gap-4">
                        <Sparkles size={18} className="text-[#EAB308]" />
                        <span className="text-[11px] font-bold uppercase tracking-[1.5em] text-[#EAB308]">Peak_Institutional</span>
                     </div>
                     <Zap size={32} strokeWidth={1} className="text-[#EAB308]" />
                  </div>
                  <div className="space-y-6 text-center">
                     <div className="text-6xl font-extralight text-[#EAB308] tracking-tighter leading-none italic">$980<span className="text-xs opacity-40 tracking-[1.5em] ml-12 not-italic underline decoration-1">/eternity</span></div>
                     <p className="text-sm font-light uppercase tracking-[0.4em] leading-loose opacity-60 text-white italic max-w-md mx-auto">Full institutionalization across all global vectors. Reserved for high-value clusters and sovereign legacies.</p>
                  </div>
                  <div className="w-full h-px bg-[#EAB308]/20 my-12" />
                  <ul className="grid grid-cols-1 gap-12 text-center pb-12">
                     {['Dynamic Motion Architecture', 'Full Global CDN Mirroring', 'Absolute Signal Supremacy', 'Sovereign Source Protocol', '24/7 Strategic Support', 'Priority Refinement Cycle'].map(item => (
                        <li key={item} className="text-[12px] font-bold uppercase tracking-[1em] text-[#EAB308] hover:scale-110 transition-transform duration-1000 italic group-hover:text-white">
                           {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-12 bg-[#EAB308] text-black font-bold uppercase text-[15px] tracking-[1.2em] hover:bg-white hover:scale-[1.02] transition-all duration-1000 shadow-[0_0_50px_#EAB308]/20 mt-12 border-4 border-[#EAB308]/20">EXECUTE_SYSTEM</button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. The Final Audience (Inquiry) */}
      <section className="bg-black py-20 px-12 md:px-10 relative overflow-hidden text-center z-10 border-t border-white/5">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.05)_0%,transparent_70%)] pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2 }}
           viewport={{ once: true }}
           className="max-w-6xl mx-auto space-y-32 relative z-10"
         >
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white tracking-[0.2em] uppercase leading-[0.8] italic">
                  SILENT <br/> <span className="opacity-30 text-[#EAB308] tracking-[0.3em]">ALLIANCE.</span>
               </h2>
               <div className="w-64 h-px bg-[#EAB308]/30 mx-auto transition-all hover:w-full duration-1000" />
            </div>

            <div className="flex flex-col items-center gap-20">
               <motion.button 
                 whileHover={{ scale: 1.1, letterSpacing: '1.2em' }}
                 className="px-10 py-12 bg-transparent border-2 border-[#EAB308] text-[#EAB308] font-light uppercase tracking-[0.8em] text-4xl hover:bg-[#EAB308] hover:text-black transition-all duration-1000 shadow-3xl"
               >
                  Inquire
               </motion.button>
               <div className="space-y-6">
                  <p className="text-[11px] font-light uppercase tracking-[2em] opacity-40 italic">Private Consultations Only // Zero Noise Protocol</p>
                  <p className="text-xs font-light text-white/20 italic tracking-[0.6em]">Ref: SYS_MMXXVI_VOID</p>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Global Minimal Footer */}
      <footer className="p-12 md:p-48 bg-black border-t-8 border-black flex flex-col items-center gap-12 relative z-[110] overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] text-[40vw] font-black opacity-[0.02] italic pointer-events-none uppercase">VOID</div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 w-full max-w-screen-2xl mx-auto text-left">
            <div className="lg:col-span-2 space-y-24">
               <div className="flex items-center gap-16 group cursor-pointer">
                  <div className="w-24 h-24 border border-[#EAB308]/20 flex items-center justify-center text-[#EAB308] group-hover:border-[#EAB308] transition-all duration-1000 relative">
                     <Minus size={64} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-1000" />
                     <div className="absolute -top-4 -right-4 w-4 h-4 bg-[#EAB308] rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-6xl font-extralight text-white tracking-[0.5em] uppercase leading-none">minimal.sync</h4>
                     <p className="text-[10px] font-light tracking-[2.5em] text-[#EAB308]/30 uppercase italic">Refined Systems // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-xl text-xl font-light uppercase tracking-[0.4em] text-white/30 leading-relaxed italic border-l border-[#EAB308]/10 pl-16 py-8">
                  Standardizing the void globally. We build digital architectures that prioritize the absence of noise for absolute structural dominance and ocular serenity.
               </p>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[1.5em] italic border-b border-[#EAB308]/10 pb-6 w-fit opacity-40">DEPARTMENTS</div>
               <div className="flex flex-col gap-10 text-[10px] font-light text-white/30 uppercase tracking-[0.8em] italic leading-none">
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Void_Archive</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">System_Office</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Quiet_Logistics</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Zen_Lab</a>
               </div>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-bold text-[#EAB308] uppercase tracking-[1.5em] italic border-b border-[#EAB308]/10 pb-6 w-fit opacity-40">SOVEREIGN</div>
               <div className="flex flex-col gap-10 text-[10px] font-light text-white/30 uppercase tracking-[0.8em] italic leading-none">
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Zurich_Static</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Tokyo_Zero</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Reykjavik_Ice</a>
                  <a href="#" className="hover:text-white hover:translate-x-6 transition-all underline decoration-[#EAB308]/10 underline-offset-8">Dubai_Void</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-[#EAB308]/10 w-full max-w-screen-2xl mx-auto relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 border border-[#EAB308]/10 flex items-center justify-center text-[#EAB308]/20 hover:text-[#EAB308] hover:border-[#EAB308] hover:bg-[#EAB308]/5 hover:-translate-y-8 transition-all duration-1000 shadow-2xl">
                  <Icon size={28} strokeWidth={1} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl mx-auto pt-24 text-[12px] font-light text-[#EAB308]/10 uppercase tracking-[2em] italic leading-loose">
            <span>© MMXXVI MINIMAL SYSTEMS LABORATORY // VOID UNIT</span>
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#EAB308] rounded-full animate-pulse shadow-[0_0_15px_#EAB308]" />
                  <span>STATUS: ABSOLUTE</span>
               </div>
               <span>VERACITY: SILENCE</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default MinimalDarkMockup;
