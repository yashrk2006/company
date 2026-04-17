import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Cpu, Database, Activity, HardDrive, Network, Lock, Code, Server, Shield, Globe, Power, Terminal, ChevronRight, Check } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const TerminalMockup = ({ theme }) => {
  const [logs, setLogs] = useState([
    '[INIT] ZORVIA_CORE_OS REV: 4.8.x',
    '[OK] MOUNTING NEURAL_DRIVE... DONE',
    '[OK] ESTABLISHING SECURE_TUNNEL... DONE',
    '[INFO] FETCHING GLOBAL_ARCHETYPES...',
  ]);
  const logEndRef = useRef(null);

  useEffect(() => {
    const logMessages = [
      '[OK] DESIGN_SYSTEM::BAUHAUS LOADED',
      '[OK] DESIGN_SYSTEM::MAXIMALISM LOADED',
      '[WARN] LATENCY SPIKE IN SECTOR_D',
      '[OK] CLEANING CACHE FILES...',
      '[INFO] USER_CONNECTED: ADMIN_01',
      '[OK] COMPILING ASSETS...',
      '[OK] REFRESHING_STATE...',
      '[INFO] KERNEL_UPLINK::STABLE',
    ];

    const interval = setInterval(() => {
      setLogs(prev => [...prev, logMessages[Math.floor(Math.random() * logMessages.length)]].slice(-20));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <div className="min-h-fit bg-[#050505] text-[#00FF00] font-mono selection:bg-[#00FF00] selection:text-black">
      
      {/* 1. System Header (Static) */}
      <header className="fixed top-0 w-full z-[100] bg-black border-b border-[#00FF00]/30 px-8 py-4 flex justify-between items-center text-[10px] tracking-widest uppercase">
         <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[#00FF00] animate-pulse" />
               <span className="font-bold">SYSTEM_READY</span>
            </div>
            <div className="hidden md:flex gap-8 opacity-40">
               <span>ID: Z-9941</span>
               <span>LOC: BOM-BASE-01</span>
               <span>OS: ZORVIA_v4</span>
            </div>
         </div>
         <div className="flex gap-8">
            <span className="opacity-40">TRANSMISSION: SECURE</span>
            <span className="text-white">USER: ADMIN_ROOT</span>
         </div>
      </header>

      {/* 2. Hero Section (Terminal Interface) */}
      <section className="relative pt-32 pb-4 px-8 md:px-16 flex flex-col gap-12">
         {/* System Vitals Header */}
         <div className="flex flex-col lg:flex-row justify-between items-start gap-12 border-b border-[#00FF00]/10 pb-12">
            <div className="space-y-6">
               <pre className="text-[7px] sm:text-[10px] md:text-[12px] leading-tight text-[#00FF00] font-bold overflow-hidden">
{` ███████╗ ██████╗ ██████╗ ██╗   ██╗██╗ █████╗ 
 ╚══███╔╝██╔═══██╗██╔══██╗██║   ██║██║██╔══██╗
   ███╔╝ ██║   ██║██████╔╝██║   ██║██║███████║
  ███╔╝  ██║   ██║██╔══██╗╚██╗ ██╔╝██║██╔══██║
 ███████╗╚██████╔╝██║  ██║ ╚████╔╝ ██║██║  ██║
 ╚══════╝ ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝`}
               </pre>
               <div className="inline-flex items-center gap-4 bg-[#00FF00]/10 px-4 py-2 border border-[#00FF00]/30 shadow-[4px_4px_0px_#00FF00]">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">BOOTING_ZORVIA_PROTOCOL_STABLE</span>
               </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-6 w-full lg:w-auto">
               {[
                  { label: "CPU_CAPACITY", icon: Cpu, val: "68%", animate: true },
                  { label: "MEMORY_HEAP", icon: Database, val: "42%", animate: true },
                  { label: "UPLINK_SPEED", icon: Activity, val: "1.2 GB/S" },
                  { label: "FIREWALL_ST", icon: Lock, val: "ACTIVE" }
               ].map((v, i) => (
                  <div key={i} className="flex flex-col gap-2">
                     <div className="flex items-center gap-2 opacity-40 text-[9px] uppercase tracking-widest font-bold">
                        <v.icon size={12} /> {v.label}
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="text-sm font-black text-white">{v.val}</div>
                        {v.animate && (
                           <div className="flex-grow min-w-[60px] h-1.5 bg-[#00FF00]/10 overflow-hidden">
                              <motion.div 
                                 className="h-full bg-[#00FF00]" 
                                 animate={{ width: ['20%', '80%', '40%', '60%', '30%'] }} 
                                 transition={{ duration: 4 + i, repeat: Infinity }}
                              />
                           </div>
                        )}
                     </div>
                  </div>
               ))}
            </div>
         </div>

         {/* Main Terminal Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Console Output */}
            <div className="lg:col-span-8 flex flex-col border border-[#00FF00]/20 bg-black p-8 shadow-[10px_10px_0px_rgba(0,255,0,0.1)] h-[500px]">
               <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#00FF00]/10 opacity-60">
                  <div className="flex items-center gap-4">
                     <Terminal size={14} />
                     <span className="text-[10px] uppercase tracking-[0.3em]">PRIMARY_LOG_TRANSMISSION</span>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-2 h-2 rounded-full border border-[#00FF00]/50" />
                     <div className="w-2 h-2 rounded-full border border-[#00FF00]/50" />
                     <div className="w-2 h-2 rounded-full bg-[#00FF00]" />
                  </div>
               </div>
               
               <div className="flex-grow overflow-hidden text-[10px] md:text-sm space-y-2 opacity-80">
                  {logs.map((log, i) => (
                    <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     animate={{ opacity: 1, x: 0 }}
                     key={i} 
                     className={log.includes('WARN') ? 'text-yellow-400' : log.includes('ERR') ? 'text-red-500' : ''}
                    >
                      <span className="opacity-30 mr-4">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
                      <span className="text-white opacity-40 mr-2">$</span>
                      {log}
                    </motion.div>
                  ))}
                  <div className="flex items-center gap-3">
                     <span className="opacity-30 mr-4">[{new Date().toLocaleTimeString([], {hour12: false})}]</span>
                     <span className="text-[#00FF00]">zorvia@admin:~$</span>
                     <motion.div 
                       animate={{ opacity: [0, 1] }} 
                       transition={{ repeat: Infinity, duration: 0.8 }}
                       className="w-3 h-5 bg-[#00FF00]" 
                     />
                  </div>
                  <div ref={logEndRef} />
               </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               <div className="text-[10px] font-black opacity-30 uppercase tracking-[0.5em] mb-2 px-2">Operational Protocol</div>
               {[
                 { label: 'Access_Core_OS', cmd: 'run zorvia_core', icon: HardDrive, id: '001' },
                 { label: 'Global_Signal_Sync', cmd: 'net uplink --sync', icon: Network, id: '002' },
                 { label: 'Compile_Archetypes', cmd: 'build design_sys', icon: Code, id: '003' },
                 { label: 'Flush_System_Buffer', cmd: 'rm -rf ./temp', icon: Power, id: '004' },
               ].map((item, i) => (
                 <motion.button
                   key={i}
                   whileHover={{ x: 10, backgroundColor: 'rgba(0, 255, 0, 0.08)', borderColor: 'rgba(0, 255, 0, 0.6)' }}
                   className="w-full p-6 border border-[#00FF00]/20 flex items-center justify-between group transition-all bg-black relative overflow-hidden"
                 >
                   <div className="flex items-center gap-6 relative z-10">
                      <item.icon size={20} className="text-[#00FF00] opacity-40 group-hover:opacity-100 transition-opacity" />
                      <div className="text-left space-y-1">
                         <div className="text-xs font-black text-white group-hover:text-[#00FF00] transition-colors uppercase tracking-widest">{item.label}</div>
                         <div className="text-[9px] opacity-30 font-mono tracking-tighter">CMD: <span className="text-[#00FF00]">{item.cmd}</span></div>
                      </div>
                   </div>
                   <div className="text-[10px] font-black opacity-10 group-hover:opacity-40 transition-opacity relative z-10">IDX::{item.id}</div>
                   <div className="absolute left-0 top-0 w-[2px] h-0 bg-[#00FF00] group-hover:h-full transition-all duration-300" />
                 </motion.button>
               ))}

               <div className="mt-6 p-8 bg-[#00FF00] text-black space-y-6 shadow-[10px_10px_0px_white]">
                  <div className="text-3xl font-black uppercase tracking-tighter italic leading-none">DEPLOY_SYSTEM_V4</div>
                  <p className="text-[9px] font-bold uppercase tracking-widest leading-relaxed">Confirming multi-node deployment will register your host with the Zorvia Global Mesh. Proceed with extreme caution.</p>
                  <button className="w-full py-4 bg-black text-[#00FF00] font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all border-2 border-black">
                     INITIALIZE_SEQUENCE
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 3. Core Modules (Features) */}
      <section className="py-16 bg-black border-y border-[#00FF00]/10">
         <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-40 text-white italic border-b-8 border-[#00FF00] inline-block pr-12">SYSTEM_CAPS.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
               {[
                 { title: "KRNL_SYNC", icon: Cpu, desc: "Direct kernel-level synchronization for zero-latency design rendering." },
                 { title: "SHLD_PROT", icon: Shield, desc: "Multi-layer encrypted traffic monitoring and rogue node detection." },
                 { title: "NODE_MESH", icon: Globe, icon: Network, desc: "Distributed content delivery across the Zorvia global edge mesh." },
                 { title: "DATA_VAULT", icon: Database, desc: "Immutable storage clusters for critical institutional design assets." }
               ].map((f, i) => (
                  <div key={i} className="p-10 border border-[#00FF00]/10 bg-[#0A0A0A] group hover:border-[#00FF00] transition-all hover:-translate-y-4">
                     <div className="w-16 h-16 border border-[#00FF00]/20 flex items-center justify-center text-[#00FF00] mb-8 group-hover:bg-[#00FF00] group-hover:text-black transition-all">
                        <f.icon size={32} />
                     </div>
                     <h3 className="text-2xl font-black uppercase tracking-widest mb-4 group-hover:text-[#00FF00] transition-colors">{f.title}</h3>
                     <p className="text-xs font-bold leading-relaxed opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Access Tiers (Pricing) */}
      <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto">
         <div className="text-center mb-40">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#00FF00] leading-none mb-8 italic">THE_INDEX_::P</h2>
            <div className="h-2 w-full max-w-lg bg-[#00FF00]/20 mx-auto" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            {[
               { tier: "LVL_01_USER", price: "29", features: ["1x Global Node Access", "Basic Log Access", "Standard Kernel Sync", "Community Protocol"] },
               { tier: "LVL_02_SUPER", price: "85", featured: true, features: ["Complete Grid Control", "Advanced System Logs", "Priority Data Mirros", "24/7 Admin Uplink", "Source Access"] },
               { tier: "LVL_03_GHOST", price: "250", features: ["Unlimited Edge Mesh", "Full Encryption Core", "Reality Drift Engine", "Ghost Node Status"] }
            ].map((p, i) => (
               <div key={i} className={`p-12 border ${p.featured ? 'border-[#00FF00] bg-[#00FF00]/5 shadow-[20px_20px_0px_rgba(0,255,0,0.1)]' : 'border-[#00FF00]/10 bg-[#0A0A0A]'} transition-all hover:-translate-y-4`}>
                  <div className="text-[10px] font-black tracking-[0.5em] mb-12 opacity-40 uppercase italic">{p.tier}</div>
                  <div className="text-8xl font-black text-white mb-12 tracking-tighter">
                     <span className="text-sm font-bold opacity-30">$</span>{p.price}
                  </div>
                  <ul className="space-y-6 pb-12 border-b border-[#00FF00]/10">
                     {p.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                           <Check size={18} className="text-[#00FF00]" strokeWidth={4} /> {f}
                        </li>
                     ))}
                  </ul>
                  <button className={`w-full mt-12 py-6 font-black uppercase tracking-widest text-xs transition-all ${p.featured ? 'bg-[#00FF00] text-black shadow-[8px_8px_0px_white]' : 'bg-transparent text-[#00FF00] border-2 border-[#00FF00] opacity-60 hover:opacity-100'}`}>
                     REQUEST_UPLINK
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 5. Terminal Footer */}
      <footer className="p-12 md:p-10 bg-black border-t-8 border-[#00FF00] flex flex-col items-center gap-8 text-center">
         <div className="flex flex-col items-center gap-12 group">
            <div className="w-32 h-32 border-4 border-[#00FF00] flex items-center justify-center text-[#00FF00] rotate-12 group-hover:rotate-0 transition-transform cursor-pointer shadow-[12px_12px_0px_rgba(0,255,0,0.1)] bg-[#00FF00]/5">
               <Server size={64} strokeWidth={3} />
            </div>
            <div className="space-y-6">
               <h4 className="text-6xl md:text-5xl font-black uppercase tracking-tighter text-white italic drop-shadow-[4px_4px_0px_#00FF00]">ZORVIA_OS</h4>
               <p className="text-[10px] font-black tracking-[1.5em] text-[#00FF00] uppercase opacity-40">System Finalized // Total Ownership Institutionalized</p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-[10px] font-black uppercase tracking-[0.5em] text-[#00FF00]/40">
            {['Archives', 'Manifesto', 'Glossary', 'Protocols', 'Galleries', 'Security', 'Legal', 'Index'].map(item => (
                <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
         </div>

         <div className="flex gap-16 pt-24 border-t-2 border-[#00FF00]/10 w-full max-w-5xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 border-2 border-[#00FF00]/20 flex items-center justify-center text-[#00FF00] hover:bg-[#00FF00] hover:text-black hover:-translate-y-4 transition-all shadow-[6px_6px_0px_rgba(0,255,0,0.05)]">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="pt-24 flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-12 text-[12px] font-black uppercase tracking-[1em] opacity-20 italic">
            <span>© MMXXVI ZORVIA OS // KERNEL_STABLE_REV</span>
            <div className="flex gap-12">
               <span>LATENCY: 4MS</span>
               <span>SYSTEM: NOMINAL</span>
            </div>
         </div>
      </footer>

      {/* 6. Global Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[200] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] animate-pulse" />
    </div>
  );
};

export default TerminalMockup;
