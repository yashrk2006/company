import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, ShieldAlert, Cpu, Share2, Terminal, Target, Wifi, Activity,
  Database, Lock, Globe, Zap as ZapIcon, AlertCircle, ChevronRight,
  Crosshair, Fingerprint, Eye, Radio, ShieldCheck, Power
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const CyberpunkMockup = ({ theme }) => {
  const [glitchText, setGlitchText] = useState('SYSTEM_OVERRIDE');
  const [hexData, setHexData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const chars = 'ABCDEF0123456789_X';
      setGlitchText(prev => 
        prev.split('').map(c => Math.random() > 0.9 ? chars[Math.floor(chars.length * Math.random())] : c).join('')
      );
      if (Math.random() > 0.8) setGlitchText('SYSTEM_OVERRIDE');
    }, 150);

    const dataInterval = setInterval(() => {
      setHexData(prev => [
        Math.random().toString(16).slice(2, 10).toUpperCase(),
        ...prev.slice(0, 15)
      ]);
    }, 200);

    return () => {
      clearInterval(interval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#0D0221] text-[#00FF9F] font-mono selection:bg-[#FF00FF] selection:text-white flex flex-col">
      {/* 1. Global HUD Infrastructure */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A0B2E_1px,transparent_1px),linear-gradient(to_bottom,#1A0B2E_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
         <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.1),rgba(0,255,0,0.05),rgba(0,0,255,0.1))] bg-[length:100%_4px,5px_100%] animate-pulse" />
      </div>

      {/* 2. HUD Navbar */}
      <nav className="sticky top-0 z-[100] bg-black/40 backdrop-blur-md border-b border-[#00FF9F]/20 px-8 py-6 flex justify-between items-center">
         <div className="flex items-center gap-6">
            <div className="w-10 h-10 border border-[#00FF9F] flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#00FF9F]/20 group-hover:bg-[#00FF9F]/40 transition-colors" />
               <Terminal size={20} className="relative z-10" />
            </div>
            <div className="flex flex-col">
               <span className="text-xl font-black italic tracking-tighter text-white">ZORVIA.NEON</span>
               <span className="text-[8px] tracking-[0.4em] text-[#00FF9F] opacity-60">NEURAL_AGENCY_PORT_77</span>
            </div>
         </div>

         <div className="hidden lg:flex gap-12 text-[10px] font-bold uppercase tracking-[0.5em] text-[#00FF9F]/60">
            {['Infiltrate', 'Protocols', 'Nodes', 'BlackMarket'].map(item => (
              <a key={item} href="#" className="hover:text-white hover:shadow-[0_0_10px_#00FF9F] transition-all">{item}</a>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-3 text-[10px] text-[#FF00FF]">
               <Activity size={12} className="animate-pulse" /> UPLINK_STABLE
            </div>
            <button className="px-6 py-2 bg-[#FF00FF] text-black font-black text-[10px] uppercase skew-x-[-12deg] shadow-[4px_4px_0px_#00FF9F]">
               Connect_Nerve
            </button>
         </div>
      </nav>

      {/* Sidebars (Keep original data stream visual) */}
      <div className="fixed left-0 top-0 bottom-0 w-32 border-r border-[#00FF9F]/20 bg-black/20 backdrop-blur-sm p-4 flex flex-col gap-2 overflow-hidden z-20 hidden xl:flex">
        <div className="text-[8px] opacity-40 mb-4 pt-24">DATA_STREAM.EXE</div>
        {hexData.map((h, i) => (
          <div key={i} className="text-[10px] opacity-30 whitespace-nowrap">{h}</div>
        ))}
      </div>

      <div className="fixed right-0 top-0 bottom-0 w-48 border-l border-[#FF00FF]/20 bg-black/20 backdrop-blur-sm p-6 flex flex-col gap-8 z-20 hidden xl:flex">
        <div className="p-4 bg-[#FF00FF]/5 border border-[#FF00FF]/50 relative group mt-24">
           <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF00FF] flex items-center justify-center">
              <ShieldAlert size={10} className="text-black" />
           </div>
           <h5 className="text-[10px] font-black text-[#FF00FF] mb-2 uppercase tracking-widest">Security Level</h5>
           <div className="h-1 bg-white/10 w-full">
              <motion.div 
                className="h-full bg-[#FF00FF] shadow-[0_0_10px_#FF00FF]" 
                animate={{ width: ['20%', '90%', '40%', '75%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
           </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-[10px] opacity-60">
             <Wifi size={12} /> CONNECTED
          </div>
          <div className="flex items-center gap-3 text-[10px] opacity-60">
             <Target size={12} /> TRACE_DISABLED
          </div>
          <div className="flex items-center gap-3 text-[8px] font-bold text-white/40 uppercase tracking-widest border-t border-white/10 pt-4">
             Location: Sector_G
          </div>
        </div>

        <div className="mt-auto pb-4">
           <div className="w-full h-32 bg-black/40 border border-[#00FF9F]/20 rounded p-2 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                 <Cpu size={80} />
              </div>
              <div className="text-[8px] text-[#00FF9F]">CPU_TEMP: 48C</div>
              <div className="text-[8px] text-[#00FF9F]">LOAD: 42.8%</div>
           </div>
        </div>
      </div>

      {/* 3. Hero Section (Neural Core) */}
      <section className="relative z-10 min-h-fit flex flex-col items-center justify-center p-8 md:p-10 lg:ml-32 lg:mr-48 text-left max-w-7xl">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           className="w-full"
         >
            <div className="mb-6 flex items-center gap-4">
               <div className="px-3 py-1 bg-[#00FF9F] text-black font-black text-[10px] skew-x-[-12deg]">CLASSIFIED</div>
               <div className="text-[10px] opacity-40 font-mono tracking-widest">ENCRYPTED_SIGNAL_STREAM</div>
            </div>
            
            <h2 className="text-6xl md:text-5xl font-black italic tracking-tighter mb-8 skew-x-[-12deg] relative leading-none uppercase">
              <span className="relative z-10 text-white" style={{ textShadow: `0 0 20px #00FF9F` }}>{glitchText}</span>
              <span className="absolute top-1 left-1 z-0 text-[#FF00FF] opacity-50 blur-[1px] animate-pulse">{glitchText}</span>
            </h2>
            
            <p className="text-[#00FF9F]/80 text-xl md:text-2xl max-w-3xl leading-relaxed mb-16 border-l-8 border-[#FF00FF] pl-10 italic">
              Future civilizations aren't defined by logic. They thrive in the neon void. Access the neural core of Zorvia and rewrite reality.
            </p>

            <div className="flex flex-wrap gap-8">
               <motion.button 
                 whileHover={{ scale: 1.05, shadow: "0 0 30px #00FF9F" }}
                 className="group relative px-12 py-6 bg-[#00FF9F] text-black font-black uppercase italic tracking-tighter skew-x-[-12deg] shadow-[8px_8px_0px_#FF00FF] transition-all flex items-center gap-4"
               >
                  Establish Neural Link
                  <ChevronRight size={20} />
               </motion.button>
               
               <button className="px-12 py-6 border-2 border-[#FF00FF] text-[#FF00FF] font-black uppercase italic tracking-tighter skew-x-[-12deg] hover:bg-[#FF00FF]/10 transition-colors">
                  Infiltrate System
               </button>
            </div>
         </motion.div>
      </section>

      {/* 4. Cyber-Protocols Grid */}
      <section className="relative z-10 py-32 px-8 md:px-10 lg:ml-32 lg:mr-48 bg-black/40 border-y border-[#00FF9F]/10">
         <div className="max-w-7xl mx-auto space-y-24">
            <div className="flex justify-between items-end border-b border-[#00FF9F]/20 pb-8">
               <div className="space-y-2">
                  <div className="text-[10px] font-black text-[#FF00FF] uppercase tracking-[0.4em]">Protocol Selection</div>
                  <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase italic skew-x-[-12deg]">Core_Modules.</h2>
               </div>
               <div className="text-[10px] opacity-20 font-mono text-right hidden md:block">BUILD_v4.8 // SECTOR_G</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-[#00FF9F]/10 border border-[#00FF9F]/20 shadow-[0_0_50px_rgba(0,255,159,0.05)]">
               {[
                  { title: "Neuro_Mesh", icon: Fingerprint, desc: "Direct sensory-to-code interface for real-time digital interaction." },
                  { title: "Glitch_Slayer", icon: ShieldCheck, desc: "Automatic rectification of anomalous data streams and system errors." },
                  { title: "Void_Drive", icon: Database, desc: "Ephemeral non-volatile storage housed in the deep neon sub-layers." },
                  { title: "Neon_Trace", icon: Crosshair, desc: "Hyper-accurate positioning across decentralized neural networks." },
                  { title: "Ghost_Uplink", icon: Radio, desc: "Stealth protocol for high-bandwidth data extraction without trace." },
                  { title: "Pulse_Link", icon: Power, desc: "Kinetic energy synthesis for powering remote neural nodes." }
               ].map((f, i) => (
                  <div key={i} className="bg-[#0D0221] p-12 space-y-8 group hover:bg-[#00FF9F]/5 transition-all relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <f.icon size={100} strokeWidth={1} />
                     </div>
                     <div className="w-16 h-16 border border-[#00FF9F]/30 flex items-center justify-center text-[#00FF9F] group-hover:shadow-[0_0_20px_#00FF9F] transition-all">
                        <f.icon size={28} />
                     </div>
                     <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase skew-x-[-12deg]">{f.title}</h3>
                     <p className="text-xs font-bold leading-relaxed text-[#00FF9F]/60 group-hover:text-white transition-colors">{f.desc}</p>
                     <div className="flex gap-2">
                        <div className="w-full h-1 bg-white/5 relative overflow-hidden">
                           <motion.div 
                             animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                             className="absolute inset-y-0 w-1/2 bg-[#00FF9F]" 
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Neural Access Tiers */}
      <section className="py-32 px-8 md:px-10 lg:ml-32 lg:mr-48">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-20 space-y-4">
               <h2 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white uppercase italic skew-x-[-12deg]"> neural.access </h2>
               <div className="h-1 w-32 bg-[#FF00FF] mx-auto shadow-[0_0_10px_#FF00FF]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
               <div className="p-16 border border-[#00FF9F]/20 bg-black/40 group relative hover:border-[#00FF9F] transition-all shadow-2xl">
                  <div className="flex justify-between items-center mb-16">
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#00FF9F]">Hacker_Entry</span>
                     <Terminal size={24} className="opacity-40" />
                  </div>
                  <div className="text-7xl font-black italic tracking-tighter mb-12 text-white">400<span className="text-sm opacity-40 uppercase not-italic ml-2">nv / term</span></div>
                  <ul className="space-y-6 mb-16">
                     {['Standard Neural Port', 'Base Code Mirroring', 'Low-Bandwidth Trace', 'Basic Uplink'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-black uppercase italic tracking-widest text-white/60">
                           <div className="w-2 h-2 bg-[#00FF9F] shadow-[0_0_5px_#00FF9F]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-6 bg-transparent border border-[#00FF9F] text-[#00FF9F] font-black uppercase italic tracking-widest text-lg hover:bg-[#00FF9F] hover:text-black transition-all shadow-[0_0_20px_rgba(0,255,159,0.1)]">Initialize</button>
               </div>

               <div className="p-16 bg-[#FF00FF]/5 border border-[#FF00FF] relative group overflow-hidden shadow-[0_0_50px_rgba(255,0,255,0.1)]">
                  <div className="absolute top-0 right-0 p-8 opacity-5 rotate-12 pointer-events-none text-[#FF00FF]">
                     <Cpu size={300} strokeWidth={1} />
                  </div>
                  <div className="flex justify-between items-center mb-16 relative z-10">
                     <div className="px-3 py-1 bg-[#FF00FF] text-white text-[8px] font-black uppercase tracking-widest skew-x-[-12deg]">Elite_Netrunner</div>
                     <ZapIcon size={24} className="text-[#FF00FF]" />
                  </div>
                  <div className="text-7xl font-black italic tracking-tighter mb-12 text-[#FF00FF]">1,400<span className="text-sm text-white opacity-40 uppercase not-italic ml-2">nv / term</span></div>
                  <ul className="space-y-6 mb-16 relative z-10">
                     {['High-Speed Neural Mesh', 'Unlimited BlackMarket Port', 'Ghost Stealth Cloaking', 'Direct AI Core Access', '24/7 Node Support'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-black uppercase italic tracking-widest text-white">
                           <ChevronRight size={18} className="text-[#FF00FF]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-6 bg-[#FF00FF] text-white font-black uppercase italic tracking-widest text-lg shadow-[0_0_30px_#FF00FF] relative z-10 hover:bg-white hover:text-black transition-all">Establish Link</button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Cyber Footer */}
      <footer className="p-12 md:p-10 bg-black/60 border-t-4 border-[#00FF9F]/30 flex flex-col gap-8 relative z-10 lg:ml-32 lg:mr-48">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            <div className="lg:col-span-2 space-y-10">
               <div className="flex items-center gap-6 group">
                  <div className="w-20 h-20 bg-transparent border-2 border-[#00FF9F] flex items-center justify-center text-[#00FF9F] text-5xl font-black skew-x-[-12deg] group-hover:bg-[#00FF9F] group-hover:text-black transition-all duration-500 shadow-[0_0_20px_#00FF9F]">Z</div>
                  <div className="flex flex-col">
                     <h4 className="text-4xl font-black italic leading-none tracking-tighter text-white uppercase skew-x-[-12deg]">ZORVIA.NEON</h4>
                     <span className="text-[10px] tracking-[0.4em] text-[#00FF9F] opacity-60 mt-1 uppercase">Infrastructure // Sector_G</span>
                  </div>
               </div>
               <p className="max-w-md text-xs font-black uppercase italic tracking-widest text-white/40 leading-loose">The future is a glitch. We provide the neural infrastructure to navigate the void. Full systemic overhaul achieved via neon protocols.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[10px] font-black text-[#FF00FF] uppercase tracking-[0.4em] border-l border-[#FF00FF] pl-4">INFILTRATE</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-[#00FF9F]/40 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Neural_Ports</a>
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Black_Market</a>
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Void_Access</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[10px] font-black text-[#FF00FF] uppercase tracking-[0.4em] border-l border-[#FF00FF] pl-4">SYSTEMS</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-[#00FF9F]/40 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Protocols</a>
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Nodes_List</a>
                  <a href="#" className="hover:text-[#00FF9F] transition-colors">Uptime_Stream</a>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-[#00FF9F]/10">
            <div className="flex gap-10">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 border border-[#00FF9F]/20 flex items-center justify-center text-[#00FF9F]/30 hover:text-[#00FF9F] hover:border-[#00FF9F] hover:shadow-[0_0_15px_#00FF9F] transition-all rotate-45">
                     <Icon size={24} className="-rotate-45" />
                  </a>
               ))}
            </div>
            
            <div className="flex flex-col items-end">
               <div className="text-[10px] font-black uppercase tracking-[0.6em] italic text-[#FF00FF]">© MMXXVI NEON SYSTEMS</div>
               <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.8em] mt-1 italic">ENCRYPTED_SIGNAL_SECURED_0x48</div>
            </div>
         </div>
      </footer>

      {/* 7. Scanlines Overlay (Global HUD) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[200] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%] animate-scanlines" />
    </div>
  );
};

export default CyberpunkMockup;
