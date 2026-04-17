import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Star, Zap, Layout, Shapes, Layers, Hash, Command, 
  ArrowRight, Shield, Globe, Cpu, Check, Lock, Smartphone, Github, 
  Twitter, Linkedin, Instagram, Activity, Box, Grid, Construction,
  AlertTriangle, Hammer, Ruler, HardHat, FileText, Download,
  Menu, X, ChevronDown, CheckCircle, ExternalLink, Mail, Phone,
  MapPin, Clock
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const BrutalistMockup = ({ theme }) => {
  return (
    <div className="min-h-fit bg-white flex flex-col font-heading selection:bg-black selection:text-[#FFD600] border-[12px] border-black m-0 md:m-0 pt-0 relative overflow-x-hidden">
      
      {/* 1. Massive Structural Grid Background (Fixed) */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)', backgroundSize: '100px 100px' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </div>

      {/* 2. Global Safety Yellow Banner (Top) */}
      <div className="relative z-[110] bg-[#FFD600] border-b-8 border-black py-4 px-8 overflow-hidden h-14 flex items-center">
        <motion.div 
           animate={{ x: [0, -1000] }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="whitespace-nowrap flex gap-12 font-black text-xs uppercase tracking-[0.5em] text-black italic"
        >
           {[...Array(10)].map((_, i) => (
             <span key={i}>CAUTION: RAW_PROTOCOL_IN_USE // DO_NOT_DECORATE // STRUCTURAL_INTEGRITY_INDEX_4.8 // </span>
           ))}
        </motion.div>
      </div>

      {/* 3. Extreme Brutal Header */}
      <nav className="sticky top-0 z-[100] bg-white border-b-8 border-black flex items-stretch divide-x-8 divide-black h-24 shadow-none">
         <div className="w-24 bg-[#FFD600] flex items-center justify-center text-black hover:bg-black hover:text-[#FFD600] transition-all cursor-pointer group">
            <Layout size={40} strokeWidth={4} className="group-hover:rotate-90 transition-transform" />
         </div>
         <div className="flex-grow flex items-center px-12 gap-12">
            <div className="flex items-center gap-6 group cursor-pointer skew-x-[-4deg]">
               <div className="w-10 h-10 bg-black flex items-center justify-center text-[#FFD600] font-black text-2xl group-hover:bg-[#FFD600] group-hover:text-black transition-all">Z</div>
               <span className="text-4xl font-black italic tracking-tighter uppercase leading-none text-black">BRUTAL.SYNC</span>
            </div>
            
            <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-black">
               {['Foundation', 'Superstructure', 'Concrete_Logic', 'Silos'].map((item, i) => (
                  <a key={item} href="#" className={`${i === 0 ? 'bg-[#FFD600] px-4 py-2 border-4 border-black' : 'hover:underline decoration-4 underline-offset-8'} transition-all`}>
                     {item}
                  </a>
               ))}
            </div>
         </div>
         <div className="hidden md:flex items-center px-10 gap-8">
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] bg-black text-[#FFD600] px-6 py-2 border-4 border-black">
               <Activity size={14} strokeWidth={3} />
               <span>LOAD: NOMINAL</span>
            </div>
            <button className="px-14 py-4 bg-black text-white font-black text-xs uppercase tracking-widest hover:bg-[#FFD600] hover:text-black transition-all border-b-8 border-white/20">
               INITIALIZE_SYNC
            </button>
         </div>
      </nav>

      {/* 4. Structural Hero (Raw Force) */}
      <section className="relative z-10 border-b-8 border-black flex flex-col lg:flex-row divide-y-8 lg:divide-y-0 lg:divide-x-8 divide-black">
         <div className="flex-grow p-12 md:p-32 space-y-20 bg-white relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD600] border-l-8 border-b-8 border-black flex items-center justify-center opacity-10 group-hover:opacity-100 transition-opacity">
               <Construction size={120} strokeWidth={4} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
               <div className="inline-flex items-center gap-6 px-8 py-3 bg-black text-[#FFD600] text-[12px] font-black uppercase tracking-[0.8em] shadow-[15px_15px_0px_#FFD600] italic">
                  <AlertTriangle size={18} strokeWidth={3} /> Heavy Structural Build
               </div>

               <h1 className="text-8xl md:text-[14rem] font-black uppercase leading-[0.75] tracking-tighter text-black italic">
                  RAW<br />
                  <span className="bg-black text-[#FFD600] px-6 py-2 ml-[-0.1em] shadow-[20px_20px_0px_#888]">FORCE.</span>
               </h1>

               <div className="flex flex-col md:flex-row gap-20 items-start md:items-end">
                  <p className="max-w-2xl text-2xl font-black uppercase tracking-tight leading-none border-l-[16px] border-black pl-12 py-8 italic bg-slate-50">
                     We strip away the digital vanity. No gradients. No soft shadows. Just pure structural intent and high-velocity communication for total institutional dominion.
                  </p>
                  <div className="flex flex-col gap-6 w-full md:w-auto">
                     <motion.button 
                       whileHover={{ scale: 1.05, skewX: -4 }}
                       className="px-20 py-10 bg-black text-white font-black uppercase text-sm tracking-[0.5em] transition-all flex items-center justify-center gap-6 shadow-[15px_15px_0px_#FFD600] border-4 border-black"
                     >
                        COMMIT_BUILD <ArrowRight size={24} strokeWidth={4} />
                     </motion.button>
                     <button className="px-20 py-10 bg-white border-4 border-black font-black uppercase text-sm tracking-[0.5em] hover:bg-black hover:text-white transition-all shadow-[15px_15px_0px_#EEE]">
                        BLUEPRINTS
                     </button>
                  </div>
               </div>
            </motion.div>
         </div>
         
         {/* Sidebar Stats */}
         <aside className="w-full lg:w-[400px] flex flex-col divide-y-8 divide-black bg-[#FFD600]">
            {[
               { val: "24/7", label: "NODE_STABILITY", icon: Activity },
               { val: "0.0ms", label: "SYNC_LATENCY", icon: Zap },
               { val: "100%", label: "RAW_INTEGRITY", icon: Shield },
               { val: "CORE", label: "PROTOCOL_V4", icon: Cpu }
            ].map((s, i) => (
               <div key={i} className="flex-grow p-12 flex flex-col justify-center gap-4 hover:bg-black hover:text-[#FFD600] transition-colors group cursor-default">
                  <s.icon size={40} className="opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={4} />
                  <div>
                     <div className="text-8xl font-black italic tabular-nums leading-none tracking-tighter">{s.val}</div>
                     <div className="text-[11px] font-black uppercase tracking-[0.4em] mt-2 opacity-60">{s.label}</div>
                  </div>
               </div>
            ))}
         </aside>
      </section>

      {/* 5. Manifesto Matrix (Features) */}
      <section className="relative z-10 py-48 px-12 md:px-32 bg-white border-b-8 border-black">
         <div className="max-w-7xl mx-auto space-y-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end pb-16 border-b-8 border-black">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[1em] text-black italic">Functional Purity</span>
                  <h2 className="text-7xl md:text-[12rem] font-black tracking-tighter text-black uppercase leading-none italic">The_Mass.</h2>
               </div>
               <p className="text-3xl font-black uppercase tracking-widest text-black leading-none border-t-[12px] border-[#FFD600] pt-12">
                  Heavy architectures optimized for absolute performance and zero aesthetic compromise.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-8 border-black divide-x-8 divide-y-8 divide-black">
               {[
                  { title: "Concrete_Ui", icon: Box, desc: "High-density interfaces built to withstand the heaviest enterprise data loads." },
                  { title: "Sharp_Logic", icon: Ruler, desc: "Mathematical precision at the core of every structural node and protocol layer." },
                  { title: "Force_Field", icon: Grid, desc: "Distributed grid systems that guarantee total architectural stability globally." },
                  { title: "Hard_Sync", icon: Repeat, desc: "Inflexible synchronization protocols ensuring 100% data fidelity across clusters." },
                  { title: "Brute_Armor", icon: Lock, desc: "Solid-state security modules designed to neutralize recursive threat vectors." },
                  { title: "Mach_Speed", icon: Activity, desc: "Raw processing velocity delivered through un-ornamented infrastructure sync." }
               ].map((f, i) => (
                  <div key={i} className="p-20 flex flex-col gap-12 group hover:bg-[#FFD600] transition-colors bg-white">
                     <div className="w-28 h-28 bg-black flex items-center justify-center text-[#FFD600] border-8 border-black group-hover:bg-white group-hover:text-black transition-all shadow-[12px_12px_0_0_#aaa]">
                        <f.icon size={56} strokeWidth={4} />
                     </div>
                     <div className="space-y-8 translate-x-2">
                        <h3 className="text-5xl font-black text-black uppercase tracking-tighter italic">{f.title}.</h3>
                        <p className="text-sm font-black uppercase tracking-[0.2em] leading-tight text-black opacity-60 group-hover:opacity-100">{f.desc}</p>
                     </div>
                     <div className="pt-16 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[12px] font-black uppercase tracking-[0.5em]">INITIALIZE_MODULE</span>
                        <ArrowUpRight size={40} strokeWidth={5} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Technical Specifications (Dashboard/Data) */}
      <section className="py-48 px-12 md:px-32 bg-black text-white z-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-40 opacity-15 pointer-events-none grayscale">
            <Construction size={700} strokeWidth={2} />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-end gap-32 relative z-10">
            <div className="space-y-24 max-w-2xl">
               <div className="space-y-10">
                  <span className="text-[11px] font-black uppercase tracking-[1em] text-[#FFD600]">Structural Telemetry</span>
                  <h2 className="text-8xl md:text-[11rem] font-black uppercase tracking-tighter leading-none italic text-transparent" style={{ WebkitTextStroke: '3px white' }}>The_Rig.</h2>
               </div>
               <p className="text-3xl font-black italic opacity-60 leading-tight uppercase tracking-widest italic border-l-[24px] border-[#FFD600] pl-16 py-8 bg-white/5">Monitoring 10^12 metrics per cycle with zero decorative overhead. High-fidelity structural health analysis.</p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12">
                  {[
                     { val: "99.99%", label: "BATTALION_SYNC" },
                     { val: "1.2 TB", label: "NODE_DENSITY" },
                     { val: "CORE", label: "REINFORCEMENT" },
                     { val: "ACTIVE", label: "SIREN_PROTOCOL" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-4 border-b-8 border-white/20 pb-8 hover:border-[#FFD600] transition-colors">
                        <div className="text-8xl font-black italic tracking-tighter tabular-nums text-[#FFD600]">{s.val}</div>
                        <div className="text-[11px] font-black uppercase tracking-[0.6em] opacity-40">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-16 bg-white border-[16px] border-[#333] text-black w-full lg:w-auto relative group shadow-[40px_40px_0_0_rgba(255,214,0,0.2)]">
               <div className="grid grid-cols-1 gap-px bg-black border-4 border-black">
                  {[
                     { label: "Stress Load", val: "NOMINAL", icon: Activity },
                     { label: "Foundation", val: "STABLE", icon: Construction },
                     { label: "Armor V2", val: "LOCKED", icon: Lock },
                     { label: "Telemetry", val: "RAW", icon: Search }
                  ].map((m, i) => (
                     <div key={i} className="flex items-center justify-between p-12 bg-white hover:bg-[#FFD600] transition-all cursor-crosshair">
                        <div className="flex items-center gap-10">
                           <m.icon size={48} strokeWidth={4} className="group-hover:rotate-12 transition-transform" />
                           <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-40">{m.label}</div>
                        </div>
                        <div className="text-4xl font-black uppercase tracking-tighter italic">{m.val}</div>
                     </div>
                  ))}
               </div>
               <div className="mt-12 w-full p-10 bg-black text-[#FFD600] border-4 border-black flex items-center justify-between group-hover:bg-[#FFD600] group-hover:text-black transition-colors cursor-pointer font-black uppercase tracking-[0.6em] text-sm italic">
                  Run Structural Integrity Check [F-12]
                  <ArrowRight size={24} strokeWidth={4} />
               </div>
            </div>
         </div>
      </section>

      {/* 7. Capacity Bundles (Pricing) */}
      <section className="py-48 px-12 md:px-32 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-10">
            <span className="text-[11px] font-black uppercase tracking-[1.5em] text-black italic">Structural Tiers</span>
            <h2 className="text-7xl md:text-[18rem] font-black uppercase tracking-tighter text-black leading-none italic underline decoration-black decoration-[24px] underline-offset-[40px]">Bundles.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-[16px] border-black divide-x-0 md:divide-x-[16px] divide-y-[16px] md:divide-y-0 divide-black w-full max-w-6xl shadow-[40px_40px_0_0_#FFD600]">
            <div className="p-20 bg-white flex flex-col gap-16 group hover:bg-slate-100 transition-all duration-500">
               <div className="space-y-16">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] opacity-40">
                     <span>Rank_01: Infantry</span>
                     <Hammer size={32} strokeWidth={4} className="group-hover:text-black" />
                  </div>
                  <div className="text-[10rem] font-black italic text-black tracking-tighter leading-none">$480<span className="text-sm font-black uppercase tracking-[0.4em] opacity-30 ml-8 not-italic">/unit</span></div>
                  <ul className="space-y-8 pt-12 border-t-[12px] border-black">
                     {['Standard Concrete Build', 'Monochrome Asset Forge', 'Daily Health Status', 'Core Node Access'].map(item => (
                        <li key={item} className="flex items-center gap-8 text-[14px] font-black uppercase tracking-widest text-black/60 italic group-hover:text-black">
                           <CheckCircle size={32} strokeWidth={5} className="text-[#FFD600] fill-black" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-10 bg-black text-white font-black uppercase text-2xl tracking-[0.5em] hover:bg-[#FFD600] hover:text-black transition-all mt-16 shadow-[20px_20px_0_0_rgba(0,0,0,0.1)]">Enlist_Unit</button>
               </div>
            </div>

            <div className="p-20 bg-[#FFD600] text-black flex flex-col gap-16 relative overflow-hidden group hover:bg-white transition-all duration-1000">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000 pointer-events-none">
                  <Star size={400} strokeWidth={8} fill="currentColor" />
               </div>
               <div className="space-y-20 relative z-10">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[1em]">
                     <span className="px-8 py-3 bg-black text-white italic">Rank_02: Battalion</span>
                     <Zap size={32} strokeWidth={4} className="fill-black" />
                  </div>
                  <div className="text-[11rem] font-black italic tracking-tighter leading-none text-black">$1,480<span className="text-xs font-black uppercase tracking-[1em] text-black ml-8 not-italic">/silo</span></div>
                  <p className="text-sm font-black uppercase tracking-[0.5em] leading-loose opacity-60 italic max-w-sm">Full high-fidelity structural dominion. Elite signal strength for sovereign node builders requiring permanent infrastructure sync.</p>
                  <ul className="space-y-8 pt-10 border-t-[12px] border-black">
                     {['Total Infrastructure Sync', 'Unlimited Silo Capacity', '24/7 Field Repair Priority', 'Custom Brutal Logic Suite', 'Force Field Authority'].map(item => (
                        <li key={item} className="flex items-center gap-8 text-[14px] font-black uppercase tracking-widest text-black group-hover:italic">
                           <CheckCircle size={32} strokeWidth={5} className="text-black" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-12 bg-black text-white font-black uppercase text-3xl tracking-[0.5em] hover:bg-[#FFD600] hover:text-black hover:scale-105 transition-all mt-16 relative z-10 shadow-[24px_24px_0_0_#888] border-8 border-black">DEPLOY_BATTALION</button>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Savage Industrial Footer */}
      <footer className="p-12 md:p-40 bg-[#FFD600] border-t-[32px] border-black flex flex-col items-center gap-48 relative z-10">
         <div className="absolute top-0 left-0 p-40 opacity-15 pointer-events-none rotate-[-12deg]">
            <Hash size={500} strokeWidth={10} />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 relative z-10 w-full max-w-screen-2xl">
            <div className="lg:col-span-2 space-y-24">
               <div className="flex items-center gap-16 group cursor-pointer skew-x-[-12deg]">
                  <div className="w-40 h-40 bg-black flex items-center justify-center text-[#FFD600] shadow-[24px_24px_0_0_white] group-hover:translate-x-8 transition-transform border-4 border-black">
                     <span className="text-8xl font-black italic">Z</span>
                  </div>
                  <div className="space-y-6">
                     <h4 className="text-8xl font-black text-black tracking-tighter uppercase italic leading-none">zorvia.brutal</h4>
                     <p className="text-[12px] font-black tracking-[2em] text-black uppercase italic opacity-40">Structural Dominion // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-xl text-xl font-black uppercase tracking-[0.5em] text-black leading-tight border-l-[32px] border-black pl-16 italic py-4">Standardizing digital force globally. We build architectures that rejection ornament for raw structural necessity and absolute power.</p>
            </div>

            <div className="space-y-16">
               <div className="text-[12px] font-black text-black uppercase tracking-[1.2em] italic border-b-8 border-black pb-6">THE_SILOS</div>
               <div className="flex flex-col gap-10 text-[11px] font-black text-black uppercase tracking-[0.6em] italic leading-none">
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Superstructure</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Node_Archives</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Signal_Vault</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Maintenance</a>
               </div>
            </div>

            <div className="space-y-16">
               <div className="text-[12px] font-black text-black uppercase tracking-[1.2em] italic border-b-8 border-black pb-6">AUTHORITY</div>
               <div className="flex flex-col gap-10 text-[11px] font-black text-black uppercase tracking-[0.6em] italic leading-none">
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Privacy_Armor</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Legal_Steel</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Field_Ops</a>
                  <a href="#" className="hover:translate-x-4 transition-transform underline underline-offset-8 decoration-[6px]">Compliance</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-24 pt-48 border-t-[16px] border-black w-full max-w-screen-2xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-32 h-32 bg-black text-[#FFD600] border-8 border-black flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-8 transition-all shadow-[20px_20px_0_0_#000]">
                  <Icon size={56} strokeWidth={4} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl pt-24 text-[12px] font-black text-black/40 uppercase tracking-[1.5em] italic leading-loose">
            <span>© MMXXVI ZORVIA BRUTALIST LABORATORIES</span>
            <div className="flex gap-20">
               <span>Structural Peak</span>
               <HardHat size={16} strokeWidth={4} />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default BrutalistMockup;
