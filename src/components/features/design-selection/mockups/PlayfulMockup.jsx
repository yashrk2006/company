import React from 'react';
import { motion } from 'framer-motion';
import { 
  Circle, Square, Triangle, Hexagon, Star, Sparkles, Smile, ArrowRight, Heart, 
  Zap, Play, Check, MousePointer2, Ghost, Rocket, Cloud, Sun, Moon,
  Activity, Layout, Command, Layers, Mail, Phone, MapPin, Globe,
  MessageCircle, Share2, Plus, Maximize, Target, Trash2, Edit3
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const PlayfulMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#FFEB3B] text-[#1A1A1A] font-sans selection:bg-[#E91E63] selection:text-white pt-0">
      
      {/* 2. Bouncy Navbar */}
      <nav className="sticky top-0 z-[100] bg-white border-b-4 border-black px-8 md:px-16 py-6 flex justify-between items-center transition-all duration-500 shadow-[8px_8px_0px_#1A1A1A]">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-[#E91E63] border-4 border-black rounded-full flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all">
               <span className="text-3xl font-black italic">P</span>
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-3xl font-black uppercase tracking-tight text-[#1A1A1A]">PLAY.SYSTEM</span>
               <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-40 mt-1">Design Unit</span>
            </div>
         </div>

           <div className="hidden lg:flex gap-10">
              {['Parks', 'Spells', 'Studio', 'The_Club', 'Stickers'].map((item, i) => (
                <motion.button 
                  key={item} whileHover={{ y: -10, rotate: i % 2 === 0 ? 5 : -5, scale: 1.1 }}
                  className={`px-10 py-3 rounded-full font-black uppercase text-xs tracking-[0.2em] border-[4px] border-slate-900 transition-all ${i === 0 ? 'bg-[#FBBF24]' : 'bg-slate-50 hover:bg-[#34D399]'}`}
                >
                   {item}
                </motion.button>
              ))}
           </div>

           <div className="flex items-center gap-6">
              <button className="hidden sm:block px-10 py-3 bg-white border-[4px] border-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                 Log_In
              </button>
              <motion.button 
                 whileHover={{ scale: 1.1, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)" }}
                 className="px-10 py-3 bg-[#F472B6] border-[4px] border-slate-900 rounded-full font-black uppercase text-xs tracking-widest shadow-pop transition-all text-white"
              >
                 JOIN_FUN
              </motion.button>
           </div>
      </nav>

      {/* 3. Hero: The Maximum Celebration */}
      <section className="relative z-10 w-full px-8 md:px-24 pt-32 pb-12 flex flex-col items-center text-center max-w-screen-2xl mx-auto overflow-visible">
         <motion.div
           initial={{ scale: 0, rotate: -45 }}
           animate={{ scale: 1, rotate: 10 }}
           transition={{ type: "spring", damping: 10, stiffness: 100 }}
           className="relative group cursor-pointer mb-20"
         >
            <div className="px-10 py-4 bg-[#34D399] border-[8px] border-slate-900 rounded-full shadow-pop-lg flex items-center gap-6 hover:rotate-0 transition-transform duration-700">
               <Sparkles className="text-white animate-bounce" size={40} />
               <span className="text-xl md:text-2xl font-black uppercase tracking-[0.3em] text-slate-900 italic">NEW: SQUISHY_UI_V4.8</span>
            </div>
            <div className="absolute -top-10 -right-10 bg-[#FBBF24] border-[6px] border-black rounded-full p-4 rotate-12 group-hover:rotate-[360deg] transition-all duration-1000">
               <Zap size={48} fill="white" strokeWidth={3} />
            </div>
         </motion.div>

         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.75] mb-16 tracking-tighter text-slate-900 relative group cursor-default">
            MAKE <br /> DIGITAL <br />
            <span className="text-[#8B5CF6] italic inline-block relative px-12 pb-4">
               FUN AGAIN!
               <motion.div 
                 animate={{ scaleX: [1, 1.1, 1] }} 
                 transition={{ duration: 0.5, repeat: Infinity }}
                 className="absolute bottom-0 left-0 w-full h-[30px] bg-[#FBBF24] -z-10 rounded-full skew-x-[-15deg]" 
               />
               <Heart size={100} className="absolute -top-8 -right-24 text-[#F472B6] fill-[#F472B6] group-hover:scale-150 transition-transform duration-500" />
            </span>
         </h1>

         <p className="text-2xl md:text-5xl lg:text-6xl font-black text-slate-400 max-w-6xl mb-32 leading-[1.1] tracking-tight text-center italic border-y-[12px] border-slate-50 py-12 relative">
            "Bold lines, vibrant colors, and bubbly animations that make every click feel like a celebration."
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-8 font-mono text-sm tracking-[2em] uppercase opacity-20">Creative_Cluster_MMXXVI</div>
         </p>

         <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-full sm:w-auto px-16 py-10 bg-[#8B5CF6] text-white border-[10px] border-slate-900 rounded-[4rem] font-black text-4xl uppercase tracking-[0.2em] shadow-pop-lg hover:shadow-none hover:translate-y-4 transition-all flex items-center justify-center gap-8 group"
            >
               PLAY_NOW <Play size={54} fill="white" className="group-hover:scale-125 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-full sm:w-auto px-16 py-10 bg-white text-slate-900 border-[10px] border-slate-900 rounded-[4rem] font-black text-4xl uppercase tracking-[0.2em] shadow-pop-lg hover:translate-y-4 hover:shadow-none transition-all flex items-center justify-center gap-8"
            >
               STUDIO_VIBE <Rocket size={54} />
            </motion.button>
         </div>

         {/* Hero Sticker Parade (Interactive) */}
         <div className="mt-16 w-full flex flex-wrap justify-center gap-16 md:gap-10">
            {[
               { Icon: Triangle, color: '#F472B6', label: 'RAD' },
               { Icon: Square, color: '#34D399', label: 'COOL' },
               { Icon: Circle, color: '#FBBF24', label: 'FUN' },
               { Icon: Hexagon, color: '#60A5FA', label: 'WOW' },
               { Icon: Heart, color: '#8B5CF6', label: 'LOVE' },
               { Icon: Star, color: '#F87171', label: 'YAY' }
            ].map((s, i) => (
               <motion.div 
                 key={i}
                 initial={{ y: 0 }}
                 animate={{ 
                    y: [0, -40, 0], 
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 0.8, 1] 
                 }}
                 transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                 className="relative group cursor-pointer"
               >
                  <div 
                    className="w-40 h-40 md:w-56 md:h-56 rounded-[3rem] border-[10px] border-slate-900 shadow-pop flex items-center justify-center transition-all duration-700 group-hover:-translate-y-12"
                    style={{ backgroundColor: s.color }}
                  >
                     <s.Icon size={80} className="text-white fill-white" strokeWidth={5} />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-2 rounded-full font-black text-2xl rotate-[-10deg] opacity-0 group-hover:opacity-100 transition-all duration-500">
                     {s.label}
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 4. Squishy Features Matrix (Spells) */}
      <section className="relative z-10 py-20 w-full bg-[#FDE68A] border-y-[16px] border-slate-900 flex flex-col items-center">
         <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col items-center space-y-12">
            <div className="text-center space-y-8">
               <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none textShadow">VISUAL_SPELLS.</h2>
               <p className="text-2xl font-black uppercase tracking-[1em] opacity-40 italic">Hyper-Energy Infrastructure</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
               {[
                 { title: "Bouncy UX", color: "#F472B6", icon: MousePointer2, desc: "Interfaces that respond with meaningful weight and elastic delight in every interaction cluster." },
                 { title: "Zesty Grids", color: "#34D399", icon: Zap, desc: "Layouts that break the standard cage with radical, asymmetric energy and high-fidelity focus." },
                 { title: "Sticker Pack", color: "#8B5CF6", icon: Sparkles, desc: "Custom decorative elements that bring sovereign personality to every pixel and node." },
                 { title: "Joy Storage", color: "#60A5FA", icon: Circle, desc: "Secure data clusters wrapped in approachable, high-spirit containers for maximum trust." },
                 { title: "Global Rave", color: "#FBBF24", icon: Star, desc: "Resilient node networks designed for massive planetary scale and zero friction ops." },
                 { title: "Primal Core", color: "#F87171", icon: Heart, desc: "The foundational engine built for peak stability, high throughput, and joyous growth." },
                 { title: "Vibe Check", color: "#F472B6", icon: Activity, icon: Activity, desc: "Real-time emotional telemetry to ensure your project's soul remains vibrant and active." },
                 { title: "Cloud Parks", color: "#34D399", icon: Cloud, desc: "Collaborative sandboxes for creative clusters to experiment without architectural limits." },
                 { title: "Soul Labs", color: "#8B5CF6", icon: Edit3, desc: "Advanced customization tools to forge own stickers, icons, and kinetic typography." }
               ].map((f, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -20, rotate: i % 2 === 0 ? 3 : -3 }}
                    className="group p-12 bg-white border-[10px] border-slate-900 rounded-[5rem] shadow-pop hover:shadow-none transition-all flex flex-col gap-10"
                  >
                     <div 
                        className="w-24 h-24 rounded-[2rem] border-[6px] border-slate-900 flex items-center justify-center text-white mb-6 shadow-pop group-hover:rotate-12 transition-transform duration-700" 
                        style={{ backgroundColor: f.color }}
                     >
                        <f.icon size={50} strokeWidth={4} />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter group-hover:text-[#8B5CF6] transition-colors leading-none">{f.title}</h3>
                        <p className="text-xl font-bold text-slate-400 leading-tight group-hover:text-slate-700 transition-colors uppercase italic">{f.desc}</p>
                     </div>
                     <div className="pt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-all">
                        <Plus size={48} className="text-slate-900" strokeWidth={5} />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. The Vibe Engine (Display/Stats) */}
      <section className="py-20 w-full px-8 md:px-24 bg-white z-10 relative flex flex-col items-center overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-60">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-slate-100 fill-none stroke-[0.1]">
               <circle cx="50" cy="50" r="40" />
               <circle cx="50" cy="50" r="30" />
               <circle cx="50" cy="50" r="20" />
            </svg>
         </div>
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 w-full">
            <div className="lg:col-span-12 text-center space-y-12 mb-32">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none text-slate-900 underline decoration-[#8B5CF6] decoration-[30px] underline-offset-[20px]">JOY_ENGINE.</h2>
               <div className="text-2xl font-black uppercase tracking-[1.5em] text-slate-300 italic">Planetary Happiness Metrics</div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-12">
               {[
                 { label: "Smiles/Sec", val: "4.8M", color: "#F472B6" },
                 { label: "Global Joy", val: "99%", color: "#FBBF24" },
                 { label: "Vibe Stable", val: "TRUE", color: "#34D399" }
               ].map((m, i) => (
                  <div key={i} className="p-12 bg-slate-50 border-[8px] border-slate-900 rounded-[4rem] shadow-pop flex justify-between items-center group hover:-translate-x-6 transition-transform cursor-pointer">
                     <div className="space-y-4">
                        <div className="text-sm font-black text-slate-400 uppercase tracking-widest">{m.label}</div>
                        <div className="text-7xl font-black tracking-tighter text-slate-900 uppercase italic" style={{ color: m.color }}>{m.val}</div>
                     </div>
                     <div className="w-16 h-16 rounded-full border-4 border-black flex items-center justify-center bg-white group-hover:rotate-[360deg] transition-all duration-1000">
                        <Zap size={32} fill={m.color} />
                     </div>
                  </div>
               ))}
            </div>

            <div className="lg:col-span-7 bg-white border-[12px] border-slate-900 rounded-[6rem] shadow-pop-lg relative overflow-hidden group min-h-auto flex items-center justify-center p-12">
               <div className="absolute inset-0 bg-[#8B5CF6]/5 pointer-events-none group-hover:opacity-10 transition-opacity" />
               <motion.div 
                 animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.2, 1] }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="relative w-full h-full max-w-[450px] max-h-[450px] flex items-center justify-center"
               >
                  <Sun size={350} strokeWidth={2} className="text-[#FBBF24] opacity-40" fill="#FBBF24" fillOpacity={0.1} />
                  <div className="absolute inset-0 border-[12px] border-dotted border-slate-900 rounded-full animate-spin-slow" />
                  <Heart size={150} fill="#F472B6" className="absolute text-[#F472B6] animate-pulse" />
               </motion.div>
               <div className="absolute bottom-16 right-16 px-10 py-4 bg-slate-900 text-white rounded-full font-black text-2xl rotate-12 group-hover:rotate-0 transition-all duration-1000 uppercase italic">
                  CORE_READY_V4.8
               </div>
            </div>
         </div>
      </section>

      {/* 6. Joyful Models (Pricing) */}
      <section className="py-20 px-12 md:px-24 w-full max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-12 space-y-12">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic leading-none drop-shadow-[6px_6px_0px_#FBBF24]">CHOOSE_JOY.</h2>
            <p className="text-[14px] font-black uppercase tracking-[2em] opacity-30 italic">Investment Clusters // Collective Play</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:max-w-6xl">
            {[
               { tier: "Starter_Pack", price: "24", color: "#F472B6", textColor: "white", bg: "bg-white", border: "border-slate-900", accent: "#F472B6", items: ["Core Sticker Pack V1", "Basic Playground Access", "Community Joy Channels", "Daily Vibe Monitoring", "Standard Spells Cluster"] },
               { tier: "Extreme_Pack", price: "88", color: "#8B5CF6", textColor: "white", bg: "bg-[#8B5CF6]", border: "border-slate-900", accent: "#FBBF24", items: ["Infinite Sticker Forge", "Kinetic Studio Engine", "Global Rave Clusters", "Priority Uplink Support", "Custom Joy Fabrication", "Full Source Sovereignty"] }
            ].map((p, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -25, scale: 1.02 }}
                 className={`p-8 ${p.bg} ${p.border} border-[12px] rounded-[6rem] shadow-pop-lg group relative transition-all duration-700 overflow-hidden flex flex-col justify-between`}
               >
                  <div className="space-y-20 relative z-10">
                     <div className="flex justify-between items-center mb-16 px-4">
                        <span className={`text-2xl font-black uppercase italic tracking-tighter ${i === 1 ? 'text-white' : 'text-slate-400'}`}>{p.tier}</span>
                        <div className="w-16 h-16 rounded-[1.5rem] border-4 border-black flex items-center justify-center bg-white group-hover:rotate-[360deg] transition-all duration-700">
                           <Zap size={32} fill={p.accent} />
                        </div>
                     </div>
                     <div className={`space-y-6 text-center ${i === 1 ? 'text-white' : 'text-slate-900'}`}>
                        <div className="text-6xl font-black tracking-tighter leading-none italic relative flex items-center justify-center">
                           <span className="text-4xl font-black opacity-30 absolute top-0 left-[-4rem] italic">$</span>{p.price}
                           <span className="text-[12px] font-black uppercase tracking-[1em] opacity-30 absolute bottom-0 right-[-6rem] rotate-[-90deg] invisible md:visible">Archival Vibe Fee</span>
                        </div>
                        <ul className="grid grid-cols-1 gap-10 py-16 text-left max-w-sm mx-auto">
                           {p.items.map((item, k) => (
                              <li key={k} className={`flex items-center gap-6 text-[14px] font-black uppercase tracking-widest italic leading-none hover:translate-x-4 transition-transform ${i === 1 ? 'text-white' : 'text-slate-600'}`}>
                                 <Check size={28} className={i === 1 ? 'text-[#FBBF24]' : 'text-[#34D399]'} strokeWidth={6} /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <motion.button 
                     whileHover={{ scale: 1.1, skewX: -10 }}
                     className={`w-full py-12 ${i === 1 ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'} border-[8px] border-slate-900 font-black uppercase text-3xl tracking-[0.2em] rounded-full shadow-pop transition-all mt-16`}
                  >
                     SELECT_JOY
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 7. The Final Vibe (CTA) */}
      <section className="bg-white py-20 px-12 md:px-10 relative overflow-hidden text-center z-10 border-t-[20px] border-slate-900">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pattern-dots opacity-10 pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, type: "spring", damping: 10 }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-12 relative z-10"
         >
            <h2 className="text-7xl md:text-8xl lg:text-8xl font-black italic tracking-tighter leading-[0.6] uppercase text-slate-900 drop-shadow-[8px_8px_0px_#8B5CF6]">
               JUST_DO<br/>IT_FUN.
            </h2>
            <div className="flex flex-col items-center gap-20">
               <motion.button 
                  whileHover={{ scale: 1.15, rotate: 5, skewX: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-20 bg-[#FBBF24] border-[12px] border-slate-900 rounded-[6rem] text-slate-900 font-black uppercase text-6xl md:text-9xl tracking-[0.2em] shadow-pop-lg hover:shadow-none transition-all flex items-center gap-8 group"
               >
                  GO! <Smile size={100} strokeWidth={8} className="group-hover:rotate-[360deg] transition-all duration-1000" />
               </motion.button>
               <div className="text-2xl font-black uppercase tracking-[2em] opacity-30 italic mt-16">Transmitting Maximum Joy // MMXXVI</div>
            </div>
         </motion.div>
      </section>

      {/* 8. Super-Sticker Powered Footer */}
      <footer className="w-full p-12 md:p-48 bg-white border-t-[24px] border-slate-900 flex flex-col items-center gap-16 relative z-[110] overflow-hidden text-center">
         <div className="absolute top-[-10%] left-[-10%] text-[40vw] font-black opacity-[0.03] italic pointer-events-none uppercase text-slate-900">JOY</div>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-screen-2xl mx-auto items-center relative z-10">
            <div className="lg:col-span-2 space-y-24 text-left">
               <div className="flex items-center gap-10 group cursor-pointer transition-all duration-700">
                  <div className="relative">
                     <div className="w-32 h-32 bg-[#F472B6] border-[8px] border-slate-900 rounded-[4rem] shadow-pop flex items-center justify-center text-white -rotate-12 group-hover:rotate-12 group-hover:scale-110 transition-all duration-1000">
                        <Sparkles size={80} fill="white" fillOpacity={0.2} />
                     </div>
                     <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#FBBF24] border-4 border-black rounded-full animate-bounce shadow-pop" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-black text-8xl md:text-9xl tracking-tighter uppercase italic leading-none text-slate-900">ZORVIA.PLAY!</span>
                     <span className="text-[11px] font-black tracking-[3em] text-[#8B5CF6] uppercase mt-4 italic">Refined Joy Ecosystems // Binary Happiness</span>
                  </div>
               </div>
               <p className="max-w-3xl text-3xl font-black italic tracking-tight text-slate-400 leading-tight border-l-[16px] border-[#FDE68A] pl-16 py-8">
                  The foundational world-building layer for projects that refuse to be boring. We build digital architectures that prioritize joy, energy, and sovereign self-expression.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-16 w-full text-left">
               {['Parks', 'Spells', 'Studio', 'Club', 'Archive', 'Legal', 'Privacy', 'Nodes'].map(item => (
                  <a key={item} href="#" className="text-xl font-black uppercase tracking-widest text-slate-900 hover:text-[#FBBF24] hover:translate-x-6 transition-all underline decoration-8 underline-offset-12 decoration-slate-100 italic">
                     {item}
                  </a>
               ))}
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-16 w-full max-w-screen-2xl mx-auto pt-12 border-t-[10px] border-slate-50">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone].map((Icon, i) => (
               <motion.a 
                  key={i} 
                  whileHover={{ y: -20, rotate: i % 2 === 0 ? 15 : -15 }}
                  href="#" 
                  className="w-24 h-24 bg-white border-[6px] border-slate-900 rounded-[2.5rem] flex items-center justify-center text-slate-900 shadow-pop hover:bg-[#FBBF24] transition-all group"
               >
                  <Icon size={40} strokeWidth={4} className="group-hover:scale-125 transition-transform" />
               </motion.a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl mx-auto pt-24 text-[14px] font-black text-slate-200 uppercase tracking-[1.5em] italic">
            <span>© MMXXVI ZORVIA.PLAY! SYSTEMS // ALL RIGHTS RADICAL</span>
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-6">
                  <div className="w-4 h-4 bg-[#34D399] rounded-full animate-pulse shadow-[0_0_20px_#34D399]" />
                  <span>JOY_LEVEL: PEAK</span>
               </div>
               <span>VIBE_STABLE: 99%</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
           animation: spin-slow 20s linear infinite;
        }
        .shadow-pop { box-shadow: 10px 10px 0px 0px rgba(15,23,42,1); }
        .shadow-pop-lg { box-shadow: 20px 20px 0px 0px rgba(15,23,42,1); }
        .textShadow {
           text-shadow: 10px 10px 0px rgba(251,191,36,0.3);
        }
        .pattern-dots {
          background-image: radial-gradient(circle at 1px 1px, #8B5CF6 2px, transparent 0);
          background-size: 30px 30px;
        }
      `}} />
    </div>
  );
};

export default PlayfulMockup;
