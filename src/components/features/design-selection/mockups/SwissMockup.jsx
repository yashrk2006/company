import React from 'react';
import { motion } from 'framer-motion';
import { 
  Circle, Crosshair, Plus, Minus, Move, LayoutGrid, ArrowRight,
  Database, Shield, Globe, Layers, BarChart3, Check, MousePointer2,
  Settings, Zap, AlertCircle, ChevronRight
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const SwissMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-white text-black font-sans selection:bg-[#E6192E] selection:text-white flex flex-col">
      {/* 1. Global Red Highlight Layer */}
      <div className="fixed top-0 right-0 w-[40%] h-full bg-[#E6192E]/[0.03] border-l border-black/5 z-0" />

      {/* 2. Structured Grid Navbar */}
      <nav className="sticky top-0 z-[100] bg-white border-b-2 border-black px-12 py-8 flex justify-between items-center">
         <div className="flex items-center gap-12">
            <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-10 h-10 bg-[#E6192E] flex items-center justify-center text-white transition-all group-hover:rotate-90">
                  <Plus size={24} strokeWidth={4} />
               </div>
               <div className="flex flex-col leading-none">
                  <span className="text-2xl font-black uppercase tracking-tighter">SWISS.ZORVIA</span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mt-1">Ref: International_CH</span>
               </div>
            </div>
            
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
               {['Explore', 'Modules', 'Archives', 'Security'].map(item => (
                  <a key={item} href="#" className="hover:opacity-100 hover:text-[#E6192E] transition-all">{item}</a>
               ))}
            </div>
         </div>

         <div className="flex items-center gap-8">
            <div className="hidden sm:flex flex-col items-end text-[9px] font-black uppercase tracking-widest opacity-40">
               <span>Sync: 99.8%</span>
               <span>Status: Optimal</span>
            </div>
            <button className="px-8 py-3 bg-black text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#E6192E] transition-all">
               Initialize
            </button>
         </div>
      </nav>

      {/* 3. Hero Section (Compositional Precision) */}
      <section className="relative z-10 p-12 lg:p-32 grid grid-cols-12 gap-12 min-h-fit">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="col-span-12 lg:col-span-7 space-y-16"
         >
            <div className="flex items-center gap-6 border-l-8 border-black pl-10">
               <span className="text-xs font-black uppercase tracking-[0.6em] text-slate-400">Section 01 // Abstract Draft</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-[-0.06em] uppercase">
               Modular <br />
               Precision <br />
               <span className="text-[#E6192E]">Above All.</span>
            </h1>

            <div className="max-w-2xl space-y-12">
               <p className="text-2xl md:text-3xl font-bold leading-tight uppercase tracking-tighter">
                  Objective clarity is not an option; it is the fundamental requirement for strategic communication in a complex digital environment.
               </p>
               <div className="flex flex-wrap gap-6 pt-4">
                  <button className="px-16 py-8 bg-black text-white font-black uppercase text-xs tracking-[0.4em] hover:bg-[#E6192E] transition-all shadow-2xl">
                     Initialize Build
                  </button>
                  <button className="px-16 py-8 border-2 border-black text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-black hover:text-white transition-all">
                     Specifications
                  </button>
               </div>
            </div>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="col-span-12 lg:col-span-5 flex flex-col justify-center border-l-2 border-black/10 pl-12 gap-20"
         >
            <div className="space-y-6">
               <div className="flex justify-between items-end">
                  <span className="text-[11px] font-black uppercase tracking-widest leading-none">Structural Integrity</span>
                  <span className="text-[11px] font-black uppercase">82%</span>
               </div>
               <div className="w-full h-4 bg-black/5 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="absolute top-0 left-0 h-full bg-[#E6192E]" 
                  />
               </div>
               <div className="flex justify-between font-black text-[9px] opacity-40 tracking-widest uppercase">
                  <span>Efficiency Vector</span>
                  <span>Target: 100%_Sync</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
               {[
                 { label: 'ELEMENTS', icon: LayoutGrid, val: '048' },
                 { label: 'NODES', icon: Crosshair, val: '12K' },
                 { label: 'VECTORS', icon: Move, val: 'INF' },
                 { label: 'RATIO', icon: Circle, val: '1:1.6' }
               ].map((mod, i) => (
                 <div key={i} className="p-10 border-2 border-black flex flex-col justify-between group hover:bg-black hover:text-white transition-all cursor-pointer">
                    <mod.icon size={28} className="mb-12 group-hover:rotate-12 transition-transform" />
                    <div>
                       <div className="text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-40">{mod.label}</div>
                       <div className="text-4xl font-black uppercase tracking-tighter tabular-nums">{mod.val}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-[#E6192E] p-12 text-white flex flex-col gap-6 relative overflow-hidden group">
               <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                  <LayoutGrid size={200} />
               </div>
               <div className="flex items-center gap-4 relative z-10">
                  <Minus size={24} strokeWidth={6} />
                  <span className="text-xs font-black uppercase tracking-[0.4em]">Protocol Sync OK</span>
               </div>
               <p className="text-xl font-black uppercase tracking-tighter leading-tight relative z-10">
                  Current system architecture is synchronized with Zurich mainframes. Absolute objective clarity achieved across all modules.
               </p>
            </div>
         </motion.div>
      </section>

      {/* 4. Grid Specifications (Features) */}
      <section className="relative z-10 py-48 px-12 md:px-32 bg-slate-50 border-y-2 border-black">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 pb-16 border-b-2 border-black">
               <div className="space-y-6">
                  <div className="text-[11px] font-black text-[#E6192E] uppercase tracking-[0.6em]">Modular Architecture</div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-[-0.04em] uppercase leading-none">System_Specs.</h2>
               </div>
               <div className="text-[10px] font-black text-right uppercase opacity-40 space-y-2">
                  <p>Document_048 // Ref_G</p>
                  <p>International Standard ISO:2026</p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-1px bg-black/10 border border-black/10">
               {[
                  { title: "Grid_Logic", icon: LayoutGrid, desc: "Mathematical alignment of all digital assets within a strict 12-column hierarchical framework." },
                  { title: "Color_Auth", icon: Zap, desc: "Strategic use of the International Red protocol to define secondary and tertiary focal points." },
                  { title: "Font_Weight", icon: Database, desc: "High-density typographic hierarchies that communicate authority through variable stroke weights." },
                  { title: "Vector_Sync", icon: Move, val: "Global mapping of directional intent across decentralized enterprise user portals." },
                  { title: "Structural_Guard", icon: Shield, desc: "Heavily reinforced system perimeters built with modular and redundant node clusters." },
                  { title: "Prime_Node", icon: Globe, desc: "The central intelligence hub for synchronized global infrastructure management and telemetry." }
               ].map((f, i) => (
                  <div key={i} className="bg-white p-16 space-y-10 group hover:bg-[#E6192E] transition-all duration-500 cursor-cell relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <f.icon size={120} strokeWidth={1} />
                     </div>
                     <div className="text-[11px] font-black uppercase tracking-[0.4em] opacity-30 group-hover:opacity-100 group-hover:text-white transition-all">0{i+1}_Spec</div>
                     <h3 className="text-4xl font-black uppercase tracking-tighter group-hover:text-white group-hover:translate-x-4 transition-all">{f.title}.</h3>
                     <p className="text-sm font-bold leading-tight uppercase tracking-tight group-hover:text-white opacity-60 group-hover:opacity-100">{f.desc}</p>
                     <div className="pt-10 flex justify-between items-center group-hover:text-white transition-colors">
                        <div className="w-12 h-[3px] bg-black group-hover:bg-white transition-colors" />
                        <ArrowRight size={20} strokeWidth={3} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Access Tiers (The Licensing) */}
      <section className="py-48 px-12 md:px-32">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-40 space-y-6">
               <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#E6192E]">Licensing Modules</span>
               <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-[-0.08em] leading-none">Access.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-black border-2 border-black w-full max-w-5xl shadow-[40px_40px_0px_#E6192E]">
               <div className="p-20 bg-white space-y-16 group hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] border border-black px-4 py-1">Protocol_Entry</span>
                     <Minus size={24} strokeWidth={6} />
                  </div>
                  <div className="text-8xl font-black tracking-[-0.1em] text-black italic">$400<span className="text-xs uppercase ml-4 not-italic opacity-40">/unit</span></div>
                  <ul className="space-y-6">
                     {['Standard Grid Architecture', 'Single Node Integration', 'Email Protocol Support', 'Core Asset Package'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b border-black/10 pb-4">
                           <Check size={18} strokeWidth={4} className="text-[#E6192E]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-[#E6192E] transition-all">Select Protocol</button>
               </div>

               <div className="p-20 bg-white space-y-16 relative overflow-hidden group hover:bg-slate-50 transition-colors">
                  <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-[-15deg]">
                     <Circle size={300} strokeWidth={40} />
                  </div>
                  <div className="flex justify-between items-start relative z-10">
                     <div className="px-6 py-2 bg-[#E6192E] text-white text-[10px] font-black uppercase tracking-[0.5em]">Authority_Tier</div>
                     <Star size={24} strokeWidth={3} className="text-[#E6192E]" />
                  </div>
                  <div className="text-8xl font-black tracking-[-0.1em] text-black italic relative z-10">$1,200<span className="text-xs uppercase ml-4 not-italic opacity-40">/unit</span></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed opacity-40 relative z-10">Full institutionalization across all global vectors. Reserved for high-value clusters and sovereign infrastructure.</p>
                  <ul className="space-y-6 relative z-10">
                     {['Full Mesh Grid Control', 'Unlimited Node Expansion', '24/7 Authority Sync', 'Custom Vector Engineering', 'Priority Field Support'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest border-b border-black/10 pb-4">
                           <Check size={18} strokeWidth={4} className="text-[#E6192E]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-[#E6192E] text-white font-black uppercase text-xs tracking-widest shadow-2xl relative z-10">Infiltrate Prime</button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Minimal Footer */}
      <footer className="p-12 md:p-32 bg-white border-t-2 border-black flex flex-col gap-32 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 font-black">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-10 group">
                  <div className="w-24 h-24 bg-black text-white flex items-center justify-center text-5xl font-black transition-all group-hover:rotate-12">Z</div>
                  <div className="flex flex-col">
                     <h4 className="text-4xl font-black tracking-[-0.08em] uppercase leading-none">SWISS.ZORVIA</h4>
                     <span className="text-[10px] tracking-[0.6em] uppercase opacity-40 mt-1">International Standard MMXXVI</span>
                  </div>
               </div>
               <p className="max-w-md text-sm uppercase leading-tight tracking-[0.1em] opacity-40">Architectural systems for digital infrastructures. We deliver absolute clarity through modular precision and objective design principles.</p>
            </div>

            <div className="space-y-8">
               <div className="text-[11px] uppercase tracking-[0.6em] text-[#E6192E]">PROTOCOLS</div>
               <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] opacity-40">
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Module_Archives</a>
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Grid_Reference</a>
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Security_Node</a>
               </div>
            </div>

            <div className="space-y-8">
               <div className="text-[11px] uppercase tracking-[0.6em] text-[#E6192E]">COMPANY</div>
               <div className="flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] opacity-40">
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Zurich_Unit</a>
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Status_Feed</a>
                  <a href="#" className="hover:opacity-100 hover:text-black transition-all">Repair_Log</a>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-16 border-t border-black/10">
            <div className="flex gap-12">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-16 h-16 border border-black/10 flex items-center justify-center text-black/20 hover:text-[#E6192E] hover:border-black transition-all font-serif">
                     <Icon size={24} strokeWidth={3} />
                  </a>
               ))}
            </div>
            
            <div className="flex flex-col items-end text-[10px] uppercase tracking-[0.4em] opacity-20 italic">
               <span>© MMXXVI ZORVIA INTERNATIONAL SYSTEMS</span>
               <span className="mt-2 text-[8px] tracking-[1em]">PRECISION_ENGINEERED</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default SwissMockup;
旋
