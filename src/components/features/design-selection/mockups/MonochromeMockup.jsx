import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Plus, Maximize, ArrowUpRight, Copy, Check, Menu, X, ArrowRight, Layers, Smartphone, Code, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MonochromeMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-white text-black font-sans selection:bg-black selection:text-white">
      
      {/* 1. Fine Structure Lines (Global) */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-12 h-full w-px bg-black/5" />
         <div className="absolute top-0 right-12 h-full w-px bg-black/5" />
         <div className="absolute top-48 left-0 w-full h-px bg-black/5" />
      </div>

      {/* 2. Brutalist Navbar */}
      <nav className="sticky top-0 z-[100] bg-white border-b-8 border-black px-8 md:px-16 py-8 flex justify-between items-center">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 bg-black text-white flex items-center justify-center -rotate-6 group-hover:rotate-0 transition-transform">
               <span className="text-4xl font-black">M</span>
            </div>
            <span className="text-3xl font-black uppercase tracking-tighter">MNCRM.STUDIO</span>
         </div>
         
         <div className="hidden lg:flex gap-12 text-xs font-black uppercase tracking-widest">
            {['Architecture', 'Systems', 'Archives', 'Essence'].map(item => (
               <a key={item} href="#" className="relative group">
                  {item}
                  <div className="absolute -bottom-1 inset-x-0 h-1 bg-black scale-x-0 group-hover:scale-x-100 transition-transform" />
               </a>
            ))}
         </div>

         <button className="px-10 py-4 bg-black text-white font-black uppercase text-xs tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all">
            Execute_Plan
         </button>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-10 p-8 md:p-24 border-b-8 border-black">
         <div className="max-w-7xl mx-auto flex flex-col gap-20">
            <div className="space-y-12">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="inline-block px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em]"
               >
                  Protocol_4.0_Loaded
               </motion.div>
               
               <h1 className="text-[12vw] font-black leading-[0.85] tracking-tighter uppercase break-words border-l-[24px] border-black pl-12">
                  Absolute <br />
                  Contrast.
               </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
               <p className="text-3xl md:text-5xl font-black tracking-tighter leading-none uppercase max-w-xl">
                  "Clarity through subtraction. We build high-fidelity digital infrastructure with zero noise."
               </p>
               
               <div className="flex flex-col gap-6">
                  <button className="w-full py-8 bg-black text-white font-black uppercase tracking-[0.3em] text-xl flex items-center justify-center gap-4 hover:translate-x-2 hover:-translate-y-2 transition-transform border-4 border-black">
                     Deploy Now <ArrowRight size={32} />
                  </button>
                  <div className="flex gap-6">
                     <button className="flex-1 py-6 border-4 border-black text-black font-black uppercase tracking-widest text-xs">Archives</button>
                     <button className="flex-1 py-6 border-4 border-black text-black font-black uppercase tracking-widest text-xs">Contact</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Feature Matrix (Structural) */}
      <section className="relative z-10 py-32 bg-black text-white">
         <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center">
            <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-32 border-b-[8px] border-white inline-block">Architecture.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white border-2 border-white w-full">
               {[
                 { title: "Grids", icon: Activity, desc: "Asymmetric layout systems for radical tension." },
                 { title: "Impact", icon: Maximize, desc: "Massive scale elements that command presence." },
                 { title: "Layer", icon: Layers, desc: "Spatially aware components with deep depth." },
                 { title: "Responsive", icon: Smartphone, desc: "Fluid adaptation across every possible node." }
               ].map((f, i) => (
                  <div key={i} className="p-16 bg-black group hover:bg-white hover:text-black transition-all">
                     <div className="w-16 h-16 border-2 border-white group-hover:border-black flex items-center justify-center mb-10">
                        <f.icon size={32} />
                     </div>
                     <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">{f.title}</h3>
                     <p className="text-lg font-bold uppercase opacity-40 group-hover:opacity-100">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Pricing (Binary Choice) */}
      <section className="py-48 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-32">
            <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter italic leading-none">THE_PLAN.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-black border-4 border-black w-full max-w-5xl shadow-[20px_20px_0px_black]">
            <div className="p-16 bg-white hover:bg-black hover:text-white transition-all group">
               <div className="flex justify-between items-center mb-12">
                  <span className="text-xs font-black uppercase tracking-widest opacity-40">Tier_01</span>
                  <Code size={24} />
               </div>
               <div className="text-8xl md:text-[8rem] font-black tracking-tighter mb-12">$250</div>
               <p className="text-xl font-bold uppercase leading-tight mb-12">Standard system implementation for single node networks.</p>
               <ul className="space-y-6 mb-16">
                  {['Custom Grid Config', 'Binary Color Palette', 'Standard Support', 'Digital Archives'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                        <Check size={20} strokeWidth={4} /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 border-4 border-black group-hover:border-white font-black uppercase text-xl">Acquire</button>
            </div>

            <div className="p-16 bg-black text-white hover:bg-white hover:text-black transition-all group">
               <div className="flex justify-between items-center mb-12">
                  <span className="text-xs font-black uppercase tracking-widest opacity-40">Tier_02</span>
                  <ShieldCheck size={24} />
               </div>
               <div className="text-8xl md:text-[8rem] font-black tracking-tighter mb-12">$850</div>
               <p className="text-xl font-bold uppercase leading-tight mb-12">Enterprise architecture for global multi-node clusters.</p>
               <ul className="space-y-6 mb-16">
                  {['Extreme Grid System', 'Multilayer Depth Engine', '24/7 Priority Execute', 'Full Source Access'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                        <Check size={20} strokeWidth={4} /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-white text-black group-hover:bg-black group-hover:text-white border-4 border-white group-hover:border-black font-black uppercase text-xl">Execute</button>
            </div>
         </div>
      </section>

      {/* 6. Footer (Absolute) */}
      <footer className="p-12 md:p-32 bg-black text-white border-t-[32px] border-black flex flex-col items-center gap-32 text-center">
         <div className="flex flex-col items-center gap-20">
            <div className="w-48 h-48 bg-white flex items-center justify-center text-black rotate-12 hover:rotate-0 transition-transform cursor-pointer">
               <Zap size={96} fill="black" />
            </div>
            <div className="space-y-6">
               <h3 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter italic leading-none">MNCRM</h3>
               <p className="text-xs font-black tracking-[1.5em] opacity-40 uppercase">Binary Systems Institutionalized // MMXXVI</p>
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 w-full lg:max-w-6xl text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
            {['Architecture', 'Systems', 'Archives', 'Essence', 'Protocols', 'Support', 'Manifesto', 'Legal'].map(item => (
                <a key={item} href="#" className="hover:text-white hover:opacity-100 transition-all">{item}</a>
            ))}
         </div>

         <div className="flex gap-12 pt-24 border-t-2 border-white/10 w-full max-w-5xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-white text-black border-4 border-white flex items-center justify-center hover:bg-black hover:text-white hover:-translate-y-4 transition-all">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="pt-24 flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-12 text-[12px] font-black uppercase tracking-[1em] opacity-20 italic">
            <span>© MMXXVI ZORVIA SYSTEMS // BINARY RESERVE</span>
            <div className="flex gap-12">
               <span>STATUS: ACTIVE</span>
               <span>NETWORK: SECURE</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default MonochromeMockup;
