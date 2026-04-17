import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, TrendingUp, Globe, Anchor, Bookmark, Share2, Search, Menu, Clock, AlertCircle, Quote, CheckCircle, ChevronRight, PenTool, Hash, Filter } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const NewspaperMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#F9F9F7] text-[#111111] font-serif selection:bg-[#CC0000] selection:text-white pb-4">

      {/* 2. Top Bar (Live Status) */}
      <div className="border-b border-black/10 px-8 py-3 flex justify-between items-center bg-[#F9F9F7]/80 backdrop-blur-md sticky top-0 z-[100]">
         <div className="flex gap-8 items-center font-mono text-[10px] uppercase font-black tracking-widest">
            <Menu size={18} className="cursor-pointer" />
            <span className="hidden md:inline">Zorvia Intelligence Unit // 59.8K Followers</span>
         </div>
         <div className="flex items-center gap-4 text-[10px] font-mono font-black uppercase tracking-widest">
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-[#CC0000]">● SIGNAL_STABLE</motion.span>
            <span className="hidden xs:inline">Market Intensity: +14.2%</span>
         </div>
         <div className="flex gap-6 items-center">
            <Search size={18} className="cursor-pointer" />
            <button className="px-4 py-1.5 bg-black text-white text-[10px] font-mono uppercase font-black tracking-widest">Login</button>
         </div>
      </div>

      {/* 3. Main Masthead */}
      <header className="border-b-[12px] border-double border-black px-8 md:px-24 py-12 flex flex-col items-center gap-8 relative overflow-hidden">
         <div className="absolute top-8 left-12 flex-col text-[10px] font-mono uppercase tracking-tighter leading-none opacity-40 hidden lg:flex">
            <span>Edition: Global</span>
            <span>Vol. CXVII</span>
            <span>No. 59,842</span>
         </div>
         
         <motion.h1 
           initial={{ letterSpacing: "1em", opacity: 0 }}
           animate={{ letterSpacing: "-0.02em", opacity: 1 }}
           transition={{ duration: 1.5 }}
           className="text-7xl md:text-[10rem] lg:text-[13rem] font-black tracking-tighter uppercase text-center leading-none"
         >
            The Zorvia Times
         </motion.h1>
         
         <div className="w-full flex flex-col md:flex-row justify-between items-center border-t-2 border-black pt-8 gap-6">
            <div className="flex items-center gap-4">
               <Globe size={16} className="text-[#CC0000]" />
               <span className="text-xs font-mono uppercase font-black tracking-[0.3em]">Design Infrastructure Gazette</span>
            </div>
            <div className="flex gap-8 text-xs font-mono uppercase font-black tracking-[0.3em] opacity-60">
               <span>Wednesday, April 15, 2026</span>
               <div className="h-4 w-px bg-black/20" />
               <span className="text-[#CC0000]">Price: $15.00</span>
            </div>
         </div>
      </header>

      {/* 4. Hero Analysis Section */}
      <section className="border-b-[8px] border-black grid grid-cols-1 lg:grid-cols-12">
         <div className="lg:col-span-8 p-8 md:p-16 border-r-4 border-black border-dashed flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
               <div className="flex items-center gap-4">
                  <span className="px-4 py-1.5 bg-[#CC0000] text-white text-[10px] font-black uppercase tracking-[0.2em] italic">EDITORIAL_V1</span>
                  <div className="h-px flex-grow bg-black/10" />
               </div>
               
               <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase">
                  Systems <br/> as Sovereign <br/> Assets.
               </h2>

               <p className="text-2xl md:text-5xl font-bold leading-tight decoration-black/10 underline underline-offset-8">
                  "In an era of high-frequency visual noise, the new design protocols prioritize authority over interaction."
               </p>

               <div className="flex items-center gap-6 pt-12 border-t border-black/10">
                  <div className="w-16 h-16 bg-black flex items-center justify-center text-white rotate-6">
                     <PenTool size={32} />
                  </div>
                  <div>
                     <p className="text-xl font-bold uppercase tracking-tight">Intelligence Report by Dr. Zorvia</p>
                     <p className="text-xs font-mono opacity-40 uppercase tracking-widest">Strategic Design Lead // 8 Min Read</p>
                  </div>
               </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t-[4px] border-black">
               <div className="space-y-8">
                  <p className="text-xl leading-relaxed text-justify first-letter:text-[8rem] first-letter:font-black first-letter:float-left first-letter:mr-6 first-letter:leading-[0.7] first-letter:text-[#CC0000] first-letter:mt-4">
                     The shift toward maximal structural integrity is not accidental. As digital landscapes become increasingly saturated, the organizations that command attention are those that wield information with the weight of physical architecture.
                  </p>
                  <div className="p-8 bg-black/5 border-l-8 border-[#CC0000] italic text-2xl font-bold opacity-80 decoration-black underline decoration-1 underline-offset-4">
                     "The grid is no longer a tool; it is the constitutional framework of the entire enterprise."
                  </div>
               </div>
               <div className="flex flex-col gap-8">
                  <div className="aspect-[4/5] bg-black/5 border-4 border-black relative overflow-hidden group grayscale hover:grayscale-0 transition-opacity">
                     <div className="absolute inset-0 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:12px_12px] opacity-10" />
                     <img 
                       src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" 
                       className="w-full h-full object-cover mix-blend-multiply opacity-80"
                     />
                     <div className="absolute top-4 right-4 bg-[#CC0000] text-white px-3 py-1 text-[10px] font-mono font-black border-2 border-black shadow-[4px_4px_0px_black]">FIG_01: ARCHITECTURE</div>
                  </div>
                  <h4 className="text-3xl font-black uppercase italic leading-none border-b-2 border-black inline-block pb-2 tracking-tighter text-[#CC0000]">The Return to Ink.</h4>
                  <p className="text-lg leading-snug opacity-80">Why high-contrast black and white palettes are winning the battle for attention span in the high-noise environment of 2026.</p>
               </div>
            </div>
         </div>

         {/* Sidebar: Intelligence Feed */}
         <div className="lg:col-span-4 bg-[#111111] text-white flex flex-col">
            <div className="p-12 space-y-12 border-b-4 border-white/10 flex-grow">
               <div className="flex items-center justify-between">
                  <h5 className="font-mono text-xs uppercase tracking-[0.5em] font-black text-[#CC0000]">LIVE_SIGNALS</h5>
                  <TrendingUp size={24} className="text-[#CC0000]" />
               </div>

               <div className="space-y-12">
                  {[
                     { ref: "ARCHILE", time: "12:05 PM", signal: "Sovereign identity layers now standard in all Zorvia protocol deployments." },
                     { ref: "GRID-V", time: "11:42 AM", signal: "Automated grid systems achieving 99.8% structural efficiency across 40 nodes." },
                     { ref: "NEURAL", time: "10:15 AM", signal: "Neural layout engines deprecating traditional responsive helpers." },
                     { ref: "INFRA", time: "09:30 AM", signal: "Visual entropy levels dropping below critical thresholds in test environments." }
                  ].map((s, i) => (
                     <div key={i} className="space-y-4 group cursor-pointer hover:translate-x-4 transition-transform">
                        <div className="flex justify-between items-center text-[10px] font-mono opacity-40 uppercase tracking-widest text-white/50">
                           <span>Ref: {s.ref}</span>
                           <span>{s.time}</span>
                        </div>
                        <p className="text-xl font-bold leading-snug">{s.signal}</p>
                        <div className="h-px w-full bg-[#CC0000] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-12 bg-[#CC0000] space-y-10 group cursor-pointer">
               <h3 className="text-5xl font-black uppercase tracking-tighter leading-none italic drop-shadow-[4px_4px_0px_black]">SUBSCRIBE TO <br/> THE PROTOCOL.</h3>
               <p className="text-xs font-mono uppercase tracking-widest opacity-80 leading-relaxed max-w-xs uppercase">Access high-fidelity intelligence feeds and elite architectural frameworks.</p>
               <button className="w-full py-6 bg-white text-black border-4 border-black font-mono text-[10px] uppercase tracking-widest font-black shadow-[8px_8px_0px_black] group-hover:shadow-none group-hover:translate-x-2 group-hover:translate-y-2 transition-all">
                  INITIALIZE_ACCESS_v1
               </button>
            </div>
         </div>
      </section>

      {/* 5. Classification Index (Pricing) */}
      <section className="py-48 px-8 md:px-24 max-w-7xl mx-auto flex flex-col items-center gap-32">
         <div className="text-center space-y-4">
            <h2 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-[0.8] border-b-[32px] border-black inline-block italic mb-4">THE_PLAN.</h2>
            <div className="flex items-center gap-8 justify-center opacity-40 italic font-bold">
               <Filter size={24} />
               <span>FILTERING_BY_AUTHORITY</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border-8 border-black shadow-[40px_40px_0px_rgba(204,0,0,0.2)]">
            {[
               { tier: "CLASS_01 (GUEST)", price: "20.00", features: ["Limited Signal Feed", "Standard Grid Protocols", "Editorial Assets", "Monthly Archive Access"] },
               { tier: "CLASS_02 (MEMBER)", price: "125.00", color: "#CC0000", featured: true, features: ["Full High-Fidelity Signal", "Custom Grid Builder", "Strategic Source Code", "24/7 Intelligence Support"] },
               { tier: "CLASS_03 (INSTITUTE)", price: "950.00", features: ["Global Multi-Node Mirror", "Sovereign Infra Deployment", "Private Direct Comms", "Infinite Archive Access"] }
            ].map((p, i) => (
               <div key={i} className={`p-16 space-y-16 bg-[#F9F9F7] hover:bg-white transition-all group ${p.featured ? 'border-4 border-[#CC0000]' : ''}`}>
                  <div className="flex flex-col gap-4">
                     <span className={`text-xs font-mono font-black uppercase tracking-widest ${p.featured ? 'text-[#CC0000]' : 'opacity-40'}`}>{p.tier}</span>
                     <div className="h-2 w-16 bg-black/10 group-hover:w-full transition-all duration-700" />
                  </div>
                  <div className="text-[10rem] font-black tracking-tighter leading-none italic">
                     <span className="text-sm font-bold opacity-30">$</span>{p.price}
                  </div>
                  <ul className="space-y-6 pb-12 border-b-2 border-black/10">
                     {p.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-sm font-bold uppercase tracking-tight opacity-60">
                           <CheckCircle size={20} className="text-[#CC0000]" /> {f}
                        </li>
                     ))}
                  </ul>
                  <button className={`w-full py-6 font-mono text-[10px] uppercase tracking-widest font-black transition-all border-4 border-black shadow-[8px_8px_0px_black] hover:shadow-none hover:translate-x-2 hover:translate-y-2 ${p.featured ? 'bg-[#CC0000] text-white' : 'bg-transparent text-black'}`}>
                     ACQUIRE_SPELL
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Footer (Official Documents) */}
      <footer className="p-12 md:p-32 bg-[#111111] text-white border-t-[32px] border-black flex flex-col items-center gap-32 text-center relative">
         <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(ellipse_at_center,white_0%,transparent_70%)]" />
         
         <div className="flex flex-col items-center gap-12 group transition-all relative z-10">
            <div className="w-48 h-48 bg-white flex items-center justify-center text-black -rotate-12 group-hover:rotate-0 transition-transform cursor-pointer border-8 border-[#CC0000] shadow-[20px_20px_0px_black]">
               <Newspaper size={96} strokeWidth={3} />
            </div>
            <div className="space-y-6">
               <h3 className="text-6xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-none text-[#CC0000] drop-shadow-[4px_4px_0px_white]">THE_GAZETTE.</h3>
               <div className="text-xs font-mono font-black tracking-[1.2em] opacity-40 uppercase">Archived Transmission MMXXVI // ZORVIA</div>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-24 text-[10px] font-mono font-black uppercase tracking-[0.5em] text-white/40 relative z-10">
            {['Archives', 'Manifesto', 'Glossary', 'Protocols', 'Galleries', 'Security', 'Legal', 'Index'].map(item => (
                <a key={item} href="#" className="hover:text-[#CC0000] transition-colors">{item}</a>
            ))}
         </div>

         <div className="flex gap-16 pt-24 border-t-2 border-white/10 w-full max-w-5xl justify-center relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-white text-black border-4 border-[#CC0000] flex items-center justify-center hover:bg-[#CC0000] hover:text-white hover:-translate-y-4 transition-all shadow-[8px_8px_0px_black]">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="pt-24 flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-12 text-[12px] font-mono font-black uppercase tracking-[0.8em] opacity-20 italic relative z-10">
            <span>© MMXXVI THE ZORVIA TIMES // ALL RIGHTS RESERVED</span>
            <div className="flex gap-12 items-center">
               <AlertCircle size={20} />
               <span>STATUS: TOTAL_TRANSMISSION</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default NewspaperMockup;
