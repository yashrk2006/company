import React from 'react';
import { motion } from 'framer-motion';
import { 
  Edit3, Ruler, MousePointer2, ChevronRight, Share2, CornerRightDown, 
  Star, Highlighter, Hash, Shapes, Layers, Database, Globe, Shield, 
  Check, Plus, PenTool, Type, Scissors, Clipboard
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const SketchMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#FDFCF7] text-[#2C2C2C] font-serif selection:bg-[#4A5D4E] selection:text-white pt-0">
      
      {/* 2. Hand-Drawn Navbar */}
      <nav className="sticky top-0 z-[100] bg-[#FDFCF7]/90 backdrop-blur-md border-b-2 border-[#2C2C2C]/10 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-700">
         <div className="flex items-center gap-12 group cursor-pointer">
            <div className="flex flex-col leading-tight">
               <span className="text-3xl font-extralight tracking-[0.2em] uppercase text-[#2C2C2C]">Sketch</span>
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">Creative Archive</span>
            </div>
         </div>

         <div className="hidden lg:flex gap-12 text-[11px] font-black uppercase italic underline decoration-wavy decoration-[#FFD600] underline-offset-4">
            {['Blueprints', 'Structures', 'Archives', 'Verification'].map(item => (
              <a key={item} href="#" className="hover:text-[#FFD600] hover:decoration-[#2C4872] transition-all">{item}</a>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end opacity-40">
               <span className="text-[8px] font-black uppercase">Draft Authority</span>
               <span className="text-[12px] font-black italic border-b-2 border-dashed border-[#2C4872]">K. S. Verma</span>
            </div>
            <button className="px-6 py-2 border-2 border-[#2C4872] rounded-[5px_15px_8px_12px] bg-white font-black text-[10px] uppercase shadow-[4px_4px_0px_#2C4872] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
               Finalize
            </button>
         </div>
      </nav>

      {/* 3. Hero Section (The Drafting Board) */}
      <section className="relative z-10 p-12 lg:p-10 flex flex-col lg:flex-row gap-8 items-center justify-between min-h-fit">
         <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="max-w-4xl relative"
         >
            <div className="absolute -top-16 -left-8 rotate-[-12deg] bg-[#FFD600] px-5 py-2 text-black text-[11px] font-black uppercase shadow-md z-20">
               STRICTLY_IN_DRAFT
            </div>
            
            <h1 className="text-6xl md:text-5xl font-black leading-[0.85] tracking-tight uppercase italic mb-12">
               Sketch it. <br />
               <span className="text-white drop-shadow-[4px_4px_0px_#2C4872] relative">
                  Verify it.
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-4 left-0 h-10 bg-[#FFD600]/40 -z-10"
                  />
               </span>
            </h1>

            <div className="relative max-w-2xl mb-16">
               <p className="text-2xl md:text-3xl font-bold leading-relaxed border-l-[6px] border-[#2C4872] pl-8">
                  The infrastructure of the future isn't designed on polished screens. It starts as a rough idea, a scribble on a napkin, a blueprint for global scaling.
               </p>
               <div className="absolute top-0 -right-32 hidden xl:block">
                  <div className="flex flex-col items-center gap-4">
                     <CornerRightDown className="rotate-90 opacity-40" size={40} />
                     <span className="text-[10px] font-black italic opacity-40 uppercase whitespace-nowrap bg-white px-3 py-1 border border-dashed border-[#2C4872]">Verify logic points here</span>
                  </div>
               </div>
            </div>

            <div className="flex flex-wrap gap-10 items-center">
               <motion.button 
                 whileHover={{ scale: 1.05, rotate: 1 }}
                 className="px-12 py-6 bg-white border-[3px] border-[#2C4872] rounded-[12px_5px_18px_10px] font-black uppercase text-base shadow-[12px_12px_0px_#2C4872] transition-all flex items-center gap-6 group"
               >
                  Finalize Framework
                  <Edit3 size={24} className="group-hover:rotate-12 transition-transform" />
               </motion.button>
               <button className="flex items-center gap-6 text-base font-black uppercase underline decoration-4 decoration-[#FFD600] underline-offset-8">
                  Check Grid Analysis
                  <ChevronRight size={24} />
               </button>
            </div>
         </motion.div>

         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative hidden xl:block"
         >
            <div className="w-[450px] h-[450px] border-2 border-[#2C4872] bg-white rounded-[30px_15px_45px_20px] rotate-3 p-12 shadow-xl relative">
               <div className="absolute -top-10 -right-10 w-40 h-40 border-2 border-[#2C4872] rounded-full rotate-[-15deg] flex items-center justify-center bg-[#E7EEF6] shadow-md z-10">
                  <Star size={80} className="text-[#2C4872]" fill="#FFD600" strokeWidth={1} />
               </div>
               <div className="space-y-8 opacity-60">
                  <div className="flex justify-between border-b-2 border-dashed border-[#2C4872] pb-4">
                     <span className="text-[10px] font-black uppercase">ReferenceID</span>
                     <span className="text-[10px] font-black">XJ_482_BLUE</span>
                  </div>
                  <div className="h-2 w-full bg-[#E7EEF6] rounded" />
                  <div className="h-2 w-2/3 bg-[#E7EEF6] rounded" />
                  <div className="grid grid-cols-2 gap-8 pt-8">
                     <div className="h-32 border-2 border-[#2C4872] border-dashed rounded flex flex-col items-center justify-center gap-2">
                        <Shapes size={32} />
                        <span className="text-[8px] font-black uppercase">Structural_A</span>
                     </div>
                     <div className="h-32 border-2 border-[#2C4872] border-dashed rounded flex flex-col items-center justify-center gap-2">
                        <Layers size={32} />
                        <span className="text-[8px] font-black uppercase">Depth_Matrix</span>
                     </div>
                  </div>
               </div>
            </div>
            <div className="absolute bottom-[-60px] left-[-20px] rotate-[-10deg]">
               <div className="px-6 py-3 bg-[#FFD600] text-black text-xs font-black uppercase shadow-lg border-2 border-black">
                  LATEST_ITERATION // v4.8
               </div>
            </div>
         </motion.div>
      </section>

      {/* 4. Blueprint Components (Feature Matrix) */}
      <section className="relative z-10 py-32 px-12 md:px-10 bg-white/40 border-y-[3px] border-[#2C4872]">
         <div className="max-w-7xl mx-auto space-y-24">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 pb-12 border-b-2 border-dashed border-[#2C4872]">
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <Highlighter className="text-[#FFD600]" size={24} />
                     <span className="text-xs font-black text-[#2C4872] uppercase tracking-[0.4em] italic">System Components</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">Drafting_Logic.</h2>
               </div>
               <div className="text-[10px] font-black opacity-30 text-right uppercase">
                  Sheet 04 // Section G.2 <br/>
                  Global Grid Coordination
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
               {[
                  { title: "Grid_Sync", icon: Hash, desc: "Alignment of all digital coordinates to the Zorvia blueprint system." },
                  { title: "Draft_Forge", icon: PenTool, desc: "Rapid prototyping engine focusing on structural integrity over vanity." },
                  { title: "Flow_Trace", icon: MousePointer2, desc: "Dynamic tracking of user vectors across complex hierarchical architectures." },
                  { title: "Node_Stack", icon: Database, desc: "Foundational data layers structured for high-density information flow." },
                  { title: "Vessel_Security", icon: Shield, desc: "Hardened perimeters sketched into the core of the global network." },
                  { title: "Atlas_Node", icon: Globe, desc: "Geospatial coordinate mapping for decentralized infra deployment." }
               ].map((f, i) => (
                  <div key={i} className="p-10 border-2 border-[#2C4872] bg-white rounded-[20px_10px_30px_15px] group hover:rotate-2 hover:bg-[#FFD600]/5 transition-all shadow-sm">
                     <div className="w-16 h-16 border-2 border-[#2C4872] rounded-[8px_15px_6px_10px] flex items-center justify-center mb-10 group-hover:bg-[#FFD600] transition-colors">
                        <f.icon size={28} />
                     </div>
                     <h3 className="text-2xl font-black italic underline decoration-2 decoration-[#FFD600] underline-offset-8 uppercase mb-6">{f.title}.</h3>
                     <p className="text-sm font-bold leading-relaxed mb-10 italic opacity-80">{f.desc}</p>
                     <div className="flex justify-between items-center text-[8px] font-black uppercase opacity-30">
                        <span>Ver_4.8.2</span>
                        <span>CHECK_OK</span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Pricing (Blueprint Access) */}
      <section className="py-32 px-12 md:px-10">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter text-center mb-32">
               Licensing <br /> <span className="text-white drop-shadow-[4px_4px_0px_#2C4872]">Protocols.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
               {/* Tier 1: Post-it Style */}
               <div className="p-16 bg-[#FFD600]/80 border-2 border-black rounded-[5px_2px_45px_10px] rotate-[-2deg] shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform">
                     <Clipboard size={150} strokeWidth={1} />
                  </div>
                  <div className="space-y-12 relative z-10">
                     <div className="flex justify-between items-start">
                        <span className="text-[10px] font-black text-black uppercase tracking-widest bg-white px-3 py-1 border border-black italic">Draft_Access</span>
                        < Scissors size={24} className="text-black opacity-30" />
                     </div>
                     <div className="text-7xl font-black italic tracking-tighter text-black">$350<span className="text-sm uppercase not-italic ml-2">/draft</span></div>
                     <ul className="space-y-6">
                        {['Pencil Sketch Architecture', 'Standard Blueprint Export', 'Vector Path Trace', '48hr Response Lag'].map(item => (
                           <li key={item} className="flex items-center gap-4 text-xs font-black text-black/60 italic border-b border-black/10 pb-2">
                              <Check size={18} strokeWidth={3} /> {item}
                           </li>
                        ))}
                     </ul>
                     <button className="w-full py-6 bg-white border-2 border-black text-black font-black uppercase italic tracking-widest text-lg shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">Submit Draft</button>
                  </div>
               </div>

               {/* Tier 2: Final Blueprint Style */}
               <div className="p-16 bg-white border-[3px] border-[#2C4872] rounded-[30px_10px_20px_45px] rotate-[2deg] shadow-2xl relative overflow-hidden group">
                  <div className="absolute -bottom-10 -left-10 opacity-5 rotate-[-15deg]">
                     <Ruler size={400} strokeWidth={1} />
                  </div>
                  <div className="space-y-12 relative z-10">
                     <div className="flex justify-between items-start">
                        <div className="px-4 py-1 bg-[#2C4872] text-white text-[9px] font-black uppercase tracking-[0.4em] italic">Authority_Standard</div>
                        <Type size={24} className="text-[#2C4872] opacity-30" />
                     </div>
                     <div className="text-7xl font-black italic tracking-tighter text-[#2C4872]">$1,200<span className="text-sm uppercase not-italic ml-2">/release</span></div>
                     <ul className="space-y-6">
                        {['Full Scalable Blueprint Kit', 'Unlimited Iterations', 'Real-time Vector Sync', 'Institutional Authority Sign-off', 'Direct Line Verification'].map(item => (
                           <li key={item} className="flex items-center gap-4 text-xs font-black text-[#2C4872] border-b border-[#2C4872]/10 pb-2">
                              <Plus size={18} strokeWidth={3} className="text-[#FFD600]" /> {item}
                           </li>
                        ))}
                     </ul>
                     <button className="w-full py-6 bg-[#2C4872] text-white font-black uppercase italic tracking-widest text-lg shadow-[10px_10px_0px_#FFD600] hover:translate-y-[-4px] transition-all">Claim Authority</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Scribbled Footer */}
      <footer className="p-12 md:p-10 bg-[#E7EEF6] border-t-[4px] border-[#2C4872] flex flex-col gap-8 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] rotate-[-15deg] pointer-events-none">
            <Edit3 size={1000} strokeWidth={1} />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-8">
                  <div className="w-24 h-24 border-[3px] border-[#2C4872] rounded-[15px_30px_10px_20px] bg-white flex items-center justify-center text-[#2C4872] text-5xl font-black rotate-[-6deg] shadow-md">Z</div>
                  <div className="flex flex-col">
                     <h4 className="text-4xl font-black italic tracking-tighter uppercase leading-none text-[#2C4872]">ZORVIA.DRAFT</h4>
                     <span className="text-[10px] uppercase font-bold text-[#2C4872]/40 tracking-widest mt-1">Institutional Blueprint Authority</span>
                  </div>
               </div>
               <p className="max-w-md text-sm font-black italic uppercase tracking-widest text-[#2C4872]/50 leading-loose border-l-4 border-dashed border-[#2C4872] pl-8">Rough drafts that define global standards. We design the infrastructure of tomorrow with the precision of a blueprint and the freedom of a sketch.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-black uppercase tracking-[0.4em] italic underline decoration-[#FFD600] decoration-4 underline-offset-8">ARCHIVES</div>
               <div className="flex flex-col gap-6 text-xs font-black text-[#2C4872]/60 uppercase tracking-[0.2em] italic">
                  <a href="#" className="hover:text-black transition-colors">Revision_Log</a>
                  <a href="#" className="hover:text-black transition-colors">Site_Plans</a>
                  <a href="#" className="hover:text-black transition-colors">Vector_Store</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-black uppercase tracking-[0.4em] italic underline decoration-[#FFD600] decoration-4 underline-offset-8">VERIFY</div>
               <div className="flex flex-col gap-6 text-xs font-black text-[#2C4872]/60 uppercase tracking-[0.2em] italic">
                  <a href="#" className="hover:text-black transition-colors">Blueprint_Check</a>
                  <a href="#" className="hover:text-black transition-colors">Authority_List</a>
                  <a href="#" className="hover:text-black transition-colors">Field_Repairs</a>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-24 border-t-2 border-dashed border-[#2C4872]/30 relative z-10">
            <div className="flex gap-10">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 border-2 border-[#2C4872] rounded-[5px_15px_10px_12px] bg-white flex items-center justify-center text-[#2C4872] hover:bg-[#FFD600] hover:rotate-6 transition-all shadow-[6px_6px_0px_#2C4872]">
                     <Icon size={24} strokeWidth={2.5} />
                  </a>
               ))}
            </div>
            
            <div className="flex flex-col items-end gap-2">
               <div className="text-[11px] font-black italic uppercase tracking-[0.5em] text-[#2C4872]/40">© MMXXVI Zorvia Drafting Systems</div>
               <div className="text-[12px] font-black italic border-b-2 border-black/40 text-black/80 px-4 py-1 rotate-[-2deg] bg-[#FFD600]/20">Sign: K. S. Verma</div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default SketchMockup;
