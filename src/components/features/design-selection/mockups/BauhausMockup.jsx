import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layout, Shapes, Layers, Hash, Command, Circle, Square, Triangle,
  ArrowRight, Check, Star, Globe, Zap, Box, Grid,
  Target, Zap as Flash, Monitor, User as Profile, 
  ArrowUpRight, Download, Menu, Activity
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const BauhausMockup = ({ theme }) => {
  return (
    <div className="min-h-fit bg-white flex flex-col font-sans relative overflow-x-hidden text-black selection:bg-black selection:text-white pt-0">
      
      {/* 1. Geometric Background Architecture (Global) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E6192E] border-l-8 border-black opacity-5" />
         <motion.div 
           animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], rotate: 10 }}
           transition={{ duration: 15, repeat: Infinity }}
           className="absolute -top-20 -left-20 w-96 h-96 bg-[#FFE100] rounded-full border-8 border-black mix-blend-multiply opacity-20" 
         />
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[20%] right-[10%] w-[35rem] h-[35rem] border-[30px] border-[#0055A4] mix-blend-multiply opacity-10" 
         />
         <div className="absolute top-1/2 left-0 w-full h-[8px] bg-black opacity-10" />
      </div>

      {/* 2. Unified Bauhaus Header */}
      <nav className="sticky top-0 z-[100] bg-white border-b-8 border-black flex items-stretch divide-x-8 divide-black h-24">
         <div className="w-24 bg-[#E6192E] flex items-center justify-center text-white hover:bg-black transition-colors cursor-pointer">
            <Layout size={32} />
         </div>
         <div className="flex-grow flex items-center px-10 gap-10">
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center text-white group-hover:rotate-90 transition-transform">
                  <Square size={20} fill="currentColor" />
               </div>
               <span className="text-3xl font-black uppercase tracking-tighter italic">BAUHAUS_SYSTEM</span>
            </div>
            
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
               {['Laboratory', 'Archives', 'Workshop', 'Foundation'].map((item, i) => (
                  <a key={item} href="#" className={`${i === 0 ? 'text-black border-b-4 border-[#E6192E]' : 'hover:text-[#0055A4]'} pb-1 transition-all`}>
                     {item}
                  </a>
               ))}
            </div>
         </div>
         <div className="hidden md:flex items-center px-10 gap-6">
            <span className="text-[9px] font-black uppercase tracking-widest opacity-40">INSTITUTION_01</span>
            <button className="px-10 py-3 bg-black text-white font-black text-xs uppercase tracking-widest hover:bg-[#FFE100] hover:text-black transition-all border-l-8 border-black">
               Initialize Sync
            </button>
         </div>
      </nav>

      {/* 3. Hero Composition (Functionalism) */}
      <section className="relative z-10 flex border-x-8 border-black mx-auto w-full max-w-screen-2xl divide-x-8 divide-black border-b-8">
         <div className="flex-grow p-16 md:p-32 space-y-16 bg-white/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
               <div className="inline-flex items-center gap-4 px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.5em]">
                  <Shapes size={14} /> Structural Mastery
               </div>
               <h1 className="text-8xl md:text-[14rem] font-black uppercase leading-[0.8] tracking-tighter text-black">
                  FORM <br /> 
                  FOLLOWS <br />
                  <span className="text-transparent" style={{ WebkitTextStroke: '3px black' }}>FUNCTION.</span>
               </h1>
               <div className="flex flex-col md:flex-row gap-16 items-start md:items-center">
                  <p className="max-w-xl text-xl font-bold uppercase tracking-tight leading-tight border-l-[12px] border-[#FFE100] pl-10 py-4 opacity-70 italic">
                     A radical rejection of decorative excess. We build digital architectures that prioritize structural integrity, geometric balance, and mathematical clarity.
                  </p>
                  <div className="flex flex-col gap-4">
                     <motion.button 
                       whileHover={{ scale: 1.05, backgroundColor: '#E6192E' }}
                       className="px-16 py-8 bg-black text-white font-black uppercase text-sm tracking-[0.3em] transition-all flex items-center justify-center gap-4"
                     >
                        Begin The Build <ArrowRight size={20} />
                     </motion.button>
                     <button className="px-16 py-8 border-4 border-black font-black uppercase text-sm tracking-[0.3em] hover:bg-[#0055A4] hover:text-white transition-all">
                        Research Files
                     </button>
                  </div>
               </div>
            </motion.div>
         </div>
         
         {/* Right Abstract Visuals */}
         <aside className="w-48 lg:w-96 hidden md:flex flex-col divide-y-8 divide-black bg-[#FFE100]/20">
            {[
               { icon: Circle, color: '#E6192E', rot: 0 },
               { icon: Triangle, color: '#0055A4', rot: 180 },
               { icon: Square, color: '#FFE100', rot: 45 }
            ].map((s, i) => (
               <div key={i} className="flex-grow flex items-center justify-center p-12 group hover:bg-black transition-colors">
                  <s.icon 
                    size={80} 
                    className="transition-all duration-700 group-hover:scale-75 group-hover:text-white" 
                    fill={s.color} 
                    strokeWidth={4}
                    style={{ transform: `rotate(${s.rot}deg)` }}
                  />
               </div>
            ))}
         </aside>
      </section>

      {/* 4. The Grid Matrix (Features) */}
      <section className="relative z-10 py-48 px-12 md:px-32 bg-white border-b-8 border-black">
         <div className="max-w-7xl mx-auto space-y-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end pb-16">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#E6192E]">Design Principles</span>
                  <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter text-black uppercase leading-none">The_Matrix.</h2>
               </div>
               <p className="text-2xl font-black uppercase tracking-widest text-black/30 italic leading-none border-t-8 border-black pt-10">
                  Universal design language optimized for industrial-scale digital output.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-8 border-black divide-x-8 divide-black divide-y-8 ">
               {[
                  { title: "Symmetry_X", icon: Hash, desc: "Perfectly balanced grid systems for zero-distortion information hierarchy." },
                  { title: "Primary_Logic", icon: Box, desc: "Reducing complex data into its fundamental geometric and logical components." },
                  { title: "Scale_Authority", icon: Target, desc: "Institutional architectures that scale with mathematical predictability." },
                  { title: "Unison_Sync", icon: Globe, desc: "Global synchronization of visual and functional intent across all nodes." },
                  { title: "Metric_Layer", icon: Activity, desc: "Real-time structural health monitoring visualized with absolute clarity." },
                  { title: "Core_Module", icon: Flash, desc: "Atomic build components designed for rapid manufacturing of digital space." }
               ].map((f, i) => (
                  <div key={i} className="p-16 flex flex-col items-center text-center gap-12 group hover:bg-[#FFE100] transition-all">
                     <div className="w-24 h-24 bg-black flex items-center justify-center text-white border-4 border-black group-hover:bg-[#E6192E] transition-all">
                        <f.icon size={48} strokeWidth={2.5} />
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-4xl font-black text-black uppercase tracking-tighter">{f.title}.</h3>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] leading-relaxed text-black/60 italic">{f.desc}</p>
                     </div>
                     <div className="pt-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={32} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Performance Diagnostics (Data Visualization) */}
      <section className="py-48 px-12 md:px-32 bg-black text-white z-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-40 opacity-10 pointer-events-none grayscale">
            <Layers size={600} strokeWidth={1} />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-32 relative z-10">
            <div className="space-y-16 max-w-xl">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#FFE100]">System Telemetry</span>
                  <h2 className="text-7xl font-black uppercase tracking-tighter leading-none italic">Asymmetric <br/> Balance.</h2>
               </div>
               <p className="text-xl font-bold italic opacity-40 leading-relaxed uppercase tracking-widest italic border-l-8 border-[#0055A4] pl-10">Monitoring global asset integrity with absolute geometric precision. Zero ornament. Zero waste.</p>
               <div className="grid grid-cols-2 gap-12 pt-8">
                  {[
                     { val: "1.0", label: "GOLDEN_RATIO" },
                     { val: "99%", label: "UTILITY_INDEX" },
                     { val: "MIN", label: "FRICTION_LOSS" },
                     { val: "STABLE", label: "SYSTEM_HEALTH" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-2 border-b-2 border-white/20 pb-4">
                        <div className="text-6xl font-black tracking-tighter italic text-[#FFE100]">{s.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-16 bg-white border-[12px] border-black text-black w-full lg:w-auto relative group">
               <div className="grid grid-cols-2 gap-0 border-4 border-black">
                  {[
                     { label: "Build Unit", color: "bg-[#E6192E]", val: "64px", icon: Layout },
                     { label: "Radius X", color: "bg-[#0055A4]", val: "NULL", icon: Circle },
                     { label: "Grid Angle", color: "bg-[#FFE100]", val: "90.0°", icon: Grid },
                     { label: "Form Node", color: "bg-black", val: "ACTIVE", icon: Hash }
                  ].map((m, i) => (
                     <div key={i} className="flex flex-col items-center justify-center p-12 border-4 border-black hover:bg-black hover:text-white transition-all cursor-crosshair">
                        <div className={`w-12 h-12 ${m.color} mb-6 border-2 border-black group-hover:bg-white`} />
                        <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">{m.label}</div>
                        <div className="text-xl font-black uppercase tracking-tighter italic">{m.val}</div>
                     </div>
                  ))}
               </div>
               <div className="mt-12 w-full p-8 bg-black text-[#FFE100] border-4 border-black flex items-center justify-between group-hover:bg-[#E6192E] group-hover:text-white transition-colors cursor-pointer font-black uppercase tracking-[0.3em] text-xs">
                  Run Diagnostic Matrix [B-9]
               </div>
            </div>
         </div>
      </section>

      {/* 6. Unified Tiers (Pricing) */}
      <section className="py-48 px-12 md:px-32 max-w-7xl mx-auto flex flex-col items-center z-10 bg-[#ECF0F1]/20">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#0055A4]">Institutional Tiers</span>
            <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-[-0.1em] text-black leading-none italic">Foundation.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full max-w-5xl border-8 border-black divide-x-8 divide-black">
            <div className="p-20 bg-white flex flex-col gap-12 group hover:bg-[#ECF0F1] transition-all">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-black">
                  <span>Standard Laboratory</span>
                  <Box size={24} className="opacity-20 group-hover:text-[#E6192E] transition-all" />
               </div>
               <div className="text-8xl font-black italic text-black tracking-tighter leading-none">2.4k<span className="text-sm font-black uppercase tracking-[0.2em] opacity-30 ml-4 not-italic">/node</span></div>
               <ul className="space-y-6 pt-10 border-t-8 border-black">
                  {['Core Bauhaus Architecture', 'Geometric Logic Support', 'Daily Metric Log', 'Archives Access'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest text-black/60 italic group-hover:text-black">
                        <div className="w-3 h-3 bg-[#E6192E]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-black text-white font-black uppercase text-xl tracking-[0.3em] hover:bg-[#0055A4] transition-all mt-10">Select_Tier_A</button>
            </div>

            <div className="p-20 bg-[#FFE100] text-black flex flex-col gap-12 relative overflow-hidden group hover:bg-white transition-all duration-700">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
                  <Triangle size={300} fill="currentColor" />
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] relative z-10">
                  <span className="px-6 py-2 bg-black text-white uppercase tracking-widest">Master Authority</span>
                  <Star size={24} className="text-black fill-black" />
               </div>
               <div className="text-8xl font-black italic tracking-tighter leading-none relative z-10 text-black">8.4k<span className="text-sm font-black uppercase tracking-[0.3em] ml-4 not-italic">/node</span></div>
               <p className="text-xs font-black uppercase tracking-[0.3em] leading-loose opacity-60 italic relative z-10 max-w-sm">Full sovereignty over the industrial grid matrix. Reserved for institution-level node governors and master builders.</p>
               <ul className="space-y-6 pt-8 relative z-10 border-t-8 border-black">
                  {['Total Structural Sovereignty', 'Unlimited Grid Modules', 'Priority Laboratory Support', 'Bespoke Logic Generation', 'Neural Sync Authority'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest text-black group-hover:italic">
                        <div className="w-3 h-3 bg-black group-hover:bg-[#E6192E]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-10 bg-black text-white font-black uppercase text-xl tracking-[0.3em] hover:bg-[#E6192E] hover:scale-105 transition-all mt-10 relative z-10 shadow-2xl">Initialize Command</button>
            </div>
         </div>
      </section>

      {/* 7. Institutional Footer */}
      <footer className="p-12 md:p-40 bg-white border-t-8 border-black flex flex-col items-center gap-40 relative z-10">
         <div className="absolute bottom-0 left-0 p-40 opacity-[0.05] pointer-events-none rotate-[-12deg]">
            <Hash size={400} strokeWidth={4} />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-16">
               <div className="flex items-center gap-12 group cursor-pointer">
                  <div className="w-28 h-28 bg-[#E6192E] flex items-center justify-center text-white border-4 border-black group-hover:translate-x-4 transition-transform shadow-[12px_12px_0_0_black]">
                     <Layout size={64} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-6xl font-black text-black tracking-tighter uppercase italic leading-none">B.zorvia</h4>
                     <p className="text-[11px] font-black tracking-[1.5em] text-[#0055A4] uppercase italic opacity-40">Industrial Systems // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-black uppercase tracking-[0.4em] text-black leading-loose border-l-[16px] border-[#FFE100] pl-12 italic">Universal clarity through geometric architecture. We build architectures that rejection decoration for raw industrial utility.</p>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-black text-black uppercase tracking-[0.8em] italic border-b-4 border-[#E6192E] pb-4">COLLECTION</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-black/50 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#E6192E] transition-all">Form_Log</a>
                  <a href="#" className="hover:text-[#E6192E] transition-all">Function_Archives</a>
                  <a href="#" className="hover:text-[#E6192E] transition-all">Grid_Matrix</a>
                  <a href="#" className="hover:text-[#E6192E] transition-all">Blueprint_Vault</a>
               </div>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-black text-black uppercase tracking-[0.8em] italic border-b-4 border-[#0055A4] pb-4">SOVEREIGNTY</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-black/50 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#0055A4] transition-all">Privacy_Protocol</a>
                  <a href="#" className="hover:text-[#0055A4] transition-all">Legal_Structure</a>
                  <a href="#" className="hover:text-[#0055A4] transition-all">Compliance_Grid</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-20 pt-32 border-t-8 border-black w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-24 h-24 bg-white border-8 border-black flex items-center justify-center text-black hover:bg-[#FFE100] hover:-translate-y-4 transition-all shadow-[12px_12px_0_0_black]">
                  <Icon size={40} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-black/30 uppercase tracking-[1em] italic leading-loose">
            <span>© MMXXVI ZORVIA BAUHAUS LABORATORIES</span>
            <div className="flex gap-16">
               <span>Purity Axis</span>
               <Square size={12} fill="currentColor" />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default BauhausMockup;
