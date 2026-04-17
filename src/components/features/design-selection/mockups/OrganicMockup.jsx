import React from 'react';
import { motion } from 'framer-motion';
import {
  Leaf, Wind, Sun, Sprout, Droplets, Flower2, Bird, Cloud,
  Globe, Heart, Star, Anchor, Navigation, Shield, Zap,
  ChevronDown, ArrowUpRight, Check, Waves, Trees, Tent, Plus
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const OrganicMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#F2F2EB] text-[#2D3A3A] font-serif selection:bg-[#8BA888] selection:text-white flex flex-col">
      {/* 1. Fluid Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-[800px] h-auto bg-[#D8E2DC] rounded-full blur-[100px] opacity-40"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 w-[600px] h-auto bg-[#EAE4E9] rounded-full blur-[80px] opacity-50"
        />
        <div className="absolute top-[30%] left-[20%] w-64 h-64 bg-green-100 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* 2. Soft Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.4] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] z-[50]" />

      {/* 3. Delicate Navbar */}
      <nav className="sticky top-0 z-[100] bg-[#F2F2EB]/60 backdrop-blur-md px-10 md:px-20 py-8 flex justify-between items-center transition-all">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-12 h-12 border border-[#2D3A3A]/10 rounded-full flex items-center justify-center italic font-bold group-hover:rotate-12 transition-transform">
               <Leaf size={24} className="text-[#8BA888]" />
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-3xl font-bold tracking-tight text-[#2D3A3A] italic">Organic.Studio</span>
               <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mt-1">Nature-Infused Systems</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.5em] font-medium opacity-60">
            {['The Garden', 'Living Cycle', 'Canopy', 'Essence'].map(item => (
              <a key={item} href="#" className="hover:text-[#8BA888] hover:opacity-100 transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#8BA888] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
         </div>

         <button className="px-10 py-3 bg-[#2D3A3A] text-[#F2F2EB] rounded-full text-[10px] uppercase tracking-[0.4em] font-bold shadow-2xl hover:bg-[#8BA888] transition-all">
            Join The Grove
         </button>
      </nav>

      {/* 4. Hero Section (Inhale) */}
      <section className="relative z-10 min-h-fit flex flex-col items-center justify-center p-12 lg:p-40 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.5 }}
           className="max-w-5xl flex flex-col items-center"
         >
            <div className="mb-12 flex items-center gap-6 text-[#8BA888]">
               <div className="w-16 h-px bg-[#8BA888]/30" />
               <span className="text-xs uppercase tracking-[0.6em] font-medium italic">Sustainable Logic // Protocol v4.8</span>
               <div className="w-16 h-px bg-[#8BA888]/30" />
            </div>

            <h1 className="text-6xl md:text-5xl font-light leading-[0.9] tracking-tight italic mb-16 text-[#2D3A3A]">
               Digital gardens grown <br />
               from <span className="text-[#8BA888]">pure intention.</span>
            </h1>

            <p className="text-xl md:text-3xl font-light leading-relaxed max-w-3xl opacity-60 mb-20 text-[#2D3A3A]/80 uppercase tracking-tighter italic">
               Reshaping technology to inhale complex data and exhale meaningful human experiences. Soft, fluid, and inherently connected to the natural rhythm of life.
            </p>

            <div className="flex flex-wrap justify-center gap-12">
               <motion.button 
                 whileHover={{ scale: 1.05, y: -4 }}
                 className="px-16 py-8 bg-[#2D3A3A] text-[#F2F2EB] rounded-full text-xs uppercase tracking-[0.4em] font-bold shadow-[0_20px_40px_rgba(45,58,58,0.2)] hover:bg-[#8BA888] transition-all"
               >
                  Plant Your Seed
               </motion.button>
               <button className="flex items-center gap-6 text-xs uppercase tracking-[0.3em] font-black group italic">
                  View The Canopy
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Wind size={24} className="group-hover:text-[#8BA888] transition-colors" />
                  </motion.div>
               </button>
            </div>
         </motion.div>
      </section>

      {/* 5. Living Modules (Feature Canopy) */}
      <section className="relative z-10 py-16 px-8 md:px-24 bg-white/40 backdrop-blur-md border-y border-[#2D3A3A]/5">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-16 border-b border-[#2D3A3A]/10">
               <div className="space-y-8">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#8BA888]">Seasonal Architecture</span>
                  <h2 className="text-5xl md:text-7xl font-light italic leading-none text-[#2D3A3A]">The Flora Collection.</h2>
               </div>
               <p className="text-[11px] font-medium uppercase tracking-[0.2em] italic opacity-40 leading-loose">
                  Modules designed to evolve with your ecosystem. Each component is a living entity, adapting to user patterns and seasonal shifts in digital demand.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                  { title: "Root_Protocol", icon: Sprout, color: "bg-[#D8E2DC]/50", desc: "Foundational stability for deep infrastructure growth and resilience." },
                  { title: "Bloom_Logic", icon: Flower2, color: "bg-[#FAD2E1]/50", desc: "Responsive UI patterns that open and reveal function with graceful intent." },
                  { title: "Current_Flow", icon: Waves, color: "bg-[#E2ECE9]/50", desc: "Fluid data orchestration following natural pressure-gradient algorithms." },
                  { title: "Sun_Harvest", icon: Sun, color: "bg-yellow-50/50", desc: "Adaptive energy consumption designed for zero-waste digital footprints." }
               ].map((f, i) => (
                  <div key={i} className="group p-12 bg-[#F2F2EB]/40 rounded-[4rem] border border-white/40 hover:bg-white/80 transition-all duration-700 flex flex-col items-center text-center">
                     <div className={`w-20 h-20 ${f.color} rounded-full flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 transition-transform duration-700`}>
                        <f.icon size={32} strokeWidth={1.5} className="text-[#2D3A3A]/60" />
                     </div>
                     <h3 className="text-2xl font-light italic text-[#2D3A3A] mb-4 uppercase tracking-tighter underline decoration-[#8BA888]/20 underline-offset-8">{f.title}</h3>
                     <p className="text-[11px] font-medium leading-relaxed text-[#2D3A3A]/60 uppercase tracking-widest">{f.desc}</p>
                     <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "30%" }}
                        className="mt-10 h-px bg-[#8BA888]/40" 
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Growth Cycles (Metrics) */}
      <section className="py-16 px-12 md:px-10 bg-[#2D3A3A] text-[#F2F2EB] relative overflow-hidden z-10">
         <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none">
            <Trees size={600} strokeWidth={1} />
         </div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-16">
               <h2 className="text-6xl md:text-9xl font-light italic leading-none tracking-tighter">Measured <br/> <span className="opacity-30">Harmony.</span></h2>
               <div className="grid grid-cols-2 gap-16">
                  {[
                     { val: "94%", label: "Bio_Efficiency" },
                     { val: "12M", label: "Grown_Nodes" },
                     { val: "0.2w", label: "Energy_Draw" },
                     { val: "Pure", label: "Intention" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-4">
                        <div className="text-6xl font-light italic tracking-tight">{s.val}</div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>
            
            <div className="p-16 border border-white/10 rounded-[4rem] bg-white/5 backdrop-blur-sm space-y-12">
               <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center italic font-bold">B</div>
                  <div>
                     <div className="text-sm font-bold uppercase tracking-[0.2em]">Botanical Director</div>
                     <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 italic">Zorvia Forest Reserve</div>
                  </div>
               </div>
               <p className="text-2xl font-light italic leading-loose opacity-60 uppercase tracking-tight">
                  "We don't build software—we cultivate environments. Zorvia is the foundation of a digital world that breathes."
               </p>
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Sun size={32} className="opacity-20" />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 7. Biological Tiers (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-40 space-y-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-[#8BA888]">Ecosystem Access</span>
            <h2 className="text-6xl md:text-9xl font-light italic leading-none text-[#2D3A3A] tracking-tighter">Growth Tiers.</h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
            <div className="p-8 bg-white/40 rounded-[5rem] border border-[#2D3A3A]/5 hover:shadow-2xl transition-all duration-1000 flex flex-col justify-between group">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#8BA888]">The_Sprout</span>
                     <Droplets size={24} className="opacity-20 group-hover:text-[#8BA888] transition-all" />
                  </div>
                  <div className="text-8xl font-light italic text-[#2D3A3A] tracking-tighter leading-none">$240<span className="text-sm uppercase tracking-[0.2em] font-bold opacity-30 ml-4 not-italic">/cycle</span></div>
                  <ul className="space-y-6">
                     {['Foundation Soil Mapping', 'Standard Flora Support', 'Daily Dew Updates', 'Ephemeral Hosting'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2D3A3A]/60 italic">
                           <Check size={16} strokeWidth={3} className="text-[#8BA888]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 border border-[#2D3A3A]/10 rounded-full text-[11px] uppercase tracking-[0.5em] font-bold hover:bg-[#2D3A3A] hover:text-[#F2F2EB] transition-all">Claim Plot</button>
               </div>
            </div>

            <div className="p-8 bg-white rounded-[5rem] shadow-[0_40px_100px_rgba(45,58,58,0.05)] border border-[#8BA888]/20 flex flex-col justify-between relative overflow-hidden group">
               <div className="absolute bottom-[-100px] right-[-100px] opacity-5 group-hover:opacity-10 transition-opacity">
                  <Leaf size={400} strokeWidth={1} />
               </div>
               <div className="space-y-16 relative z-10">
                  <div className="flex justify-between items-center">
                     <div className="px-6 py-2 bg-[#8BA888] text-white rounded-full text-[9px] font-black uppercase tracking-[0.4em] italic">The Canopy Alpha</div>
                     <Star size={24} className="text-[#8BA888]" />
                  </div>
                  <div className="text-8xl font-light italic text-[#2D3A3A] tracking-tighter leading-none">$1,800<span className="text-sm uppercase tracking-[0.2em] font-bold opacity-30 ml-4 not-italic">/cycle</span></div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] leading-loose opacity-60 italic">Full institutional integration within the global forest network. Continuous growth monitoring and sovereign infrastructure governance.</p>
                  <ul className="space-y-6 pb-12">
                     {['Bespoke Ecosystem Architecture', 'Unlimited Growth Modules', 'Direct Forest Support', 'Neural Hive Integration', 'Pulse_Current Hosting'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#2D3A3A]">
                           <Plus size={18} className="text-[#8BA888]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-[#8BA888] text-white rounded-full text-[12px] uppercase tracking-[0.6em] font-bold shadow-xl hover:bg-[#2D3A3A] transition-all">Claim Territory</button>
               </div>
            </div>
         </div>
      </section>

      {/* 8. Serene Footer */}
      <footer className="p-12 md:p-40 bg-[#D8E2DC]/30 border-t border-[#2D3A3A]/5 flex flex-col items-center gap-10 relative z-10">
         <div className="absolute bottom-0 left-0 p-40 opacity-5 pointer-events-none rotate-12">
            <Droplets size={400} strokeWidth={1} />
         </div>
         
         <div className="flex flex-col items-center gap-12 group">
            <div className="w-32 h-32 rounded-full border border-[#2D3A3A]/10 flex items-center justify-center text-[#8BA888] group-hover:border-[#8BA888] transition-all duration-1000">
               <Leaf size={64} strokeWidth={1} className="opacity-40 group-hover:opacity-100" />
            </div>
            <div className="space-y-6 text-center">
               <h4 className="text-5xl font-light text-[#2D3A3A] tracking-[0.4em] uppercase italic">Zorvia Botanical</h4>
               <p className="text-[11px] font-bold tracking-[1em] text-[#8BA888] uppercase italic leading-none">Inhale Data // Exhale Life</p>
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-[10px] font-bold uppercase tracking-[0.5em] text-[#2D3A3A]/40 w-full max-w-5xl justify-items-center">
            {['The Garden', 'Archives', 'Saplings', 'Root_API', 'Growth_Status', 'Canopy_Log', 'Flora_Docs', 'Support'].map(item => (
               <a key={item} href="#" className="hover:text-[#8BA888] transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8BA888] group-hover:w-full transition-all duration-300" />
               </a>
            ))}
         </div>

         <div className="flex gap-16 pt-32 border-t border-[#2D3A3A]/5 w-full max-w-5xl self-center justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-16 h-16 border border-[#2D3A3A]/10 rounded-full flex items-center justify-center text-[#2D3A3A]/20 hover:text-[#8BA888] hover:border-[#8BA888]/50 transition-all font-serif">
                  <Icon size={24} strokeWidth={1} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl self-center pt-20 text-[10px] font-medium text-[#2D3A3A]/20 uppercase tracking-[1em] italic">
            <span>© MMXXVI Zorvia Botanical Systems</span>
            <div className="flex items-center gap-4">
               <span className="opacity-0 lg:opacity-100">Optimized for Biosphere_G</span>
               <Sun size={12} />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default OrganicMockup;
