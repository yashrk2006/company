import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, ArrowRight, Activity, Cpu, Wind, FastForward, Repeat,
  Globe, Shield, Gauge, Zap as Flash, ArrowUpRight,
  TrendingUp, Layers, CheckCircle, Star, MoveRight,
  ChevronDown, Phone, Mail, Clock
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const KineticMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#0A0A0A] text-white font-sans selection:bg-[#00E5FF] selection:text-black pt-0">
      
      {/* 1. Kinetic Background Energy */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
           className="absolute top-[-20%] right-[-20%] w-[1000px] h-[1000px] bg-[radial-gradient(circle,#00E5FF_0%,transparent_70%)] opacity-[0.05] blur-[120px]"
         />
         <motion.div 
           animate={{ rotate: -360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-[radial-gradient(circle,#7000FF_0%,transparent_70%)] opacity-[0.05] blur-[100px]"
         />
      </div>

      {/* 2. Fluid Navbar */}
      <nav className="sticky top-0 z-[100] bg-[#0A0A0A]/80 backdrop-blur-3xl border-b border-white/10 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-500">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full overflow-hidden relative group-hover:scale-110 transition-transform">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF] to-[#7000FF] animate-spin-slow" />
               <span className="relative z-10 text-black font-black text-2xl">K</span>
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-3xl font-black uppercase tracking-tighter">KINETIC.CORE</span>
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mt-1">Dynamic Systems</span>
            </div>
            
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.5em] text-white/40">
               {['Turbine', 'Vector', 'Mach_Sync', 'Propel'].map((item, i) => (
                  <a key={item} href="#" className={`${i === 0 ? 'text-[#DFE104] border-b border-[#DFE104]' : 'hover:text-white'} pb-1 transition-all`}>
                     {item}
                  </a>
               ))}
            </div>
         </div>
         <div className="hidden md:flex items-center px-10 gap-8">
            <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-[#DFE104] animate-pulse">
               <Activity size={12} />
               <span>Status: OPTIMIZED</span>
            </div>
            <button className="px-12 py-3 bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-[#DFE104] transition-all skew-x-[-12deg]">
               DEPLOY_CORE
            </button>
         </div>
      </nav>

      {/* 3. Hero Transition (Acceleration) */}
      <section className="relative z-10 pt-32 pb-12 px-8 md:px-24 max-w-7xl mx-auto min-h-fit">
         <motion.div
           initial={{ opacity: 0, x: -100, skewX: 10 }}
           animate={{ opacity: 1, x: 0, skewX: -12 }}
           className="space-y-16"
         >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-[#DFE104] text-black text-[11px] font-black uppercase tracking-[0.5em] shadow-[10px_10px_0px_rgba(223,225,4,0.1)]">
               <Flash size={16} fill="currentColor" /> Pulse Velocity Ref_00
            </div>

            <h1 className="text-5xl md:text-6xl font-black italic tracking-tighter leading-[0.8] uppercase text-white">
               MOTION <br />
               IS THE <br />
               <span className="text-[#DFE104]" style={{ textShadow: '0 0 40px rgba(223, 225, 4, 0.3)' }}>ARCHITECTURE.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-16 items-start md:items-center">
               <p className="max-w-xl text-xl font-bold uppercase tracking-tight leading-tight border-l-8 border-white pl-10 py-4 opacity-60 italic">
                  Fluid digital systems designed for a world that never stops moving. High-velocity performance architectures that adapt in real-time to modern global scale.
               </p>
               <div className="flex flex-col gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 20 }}
                    className="px-16 py-8 bg-[#DFE104] text-black rounded-sm font-black uppercase text-sm tracking-[0.4em] transition-all flex items-center justify-center gap-4 shadow-[15px_15px_0px_rgba(223,225,4,0.2)]"
                  >
                     IGNITE SYNC <ArrowRight size={20} strokeWidth={4} />
                  </motion.button>
                  <button className="px-16 py-8 border-2 border-white/20 font-black uppercase text-sm tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                     SPEC_MANUAL
                  </button>
               </div>
            </div>
         </motion.div>

         {/* Trust Marquee (Inversed) */}
         <div className="mt-40 border-y border-white/10 py-10 flex gap-8 overflow-hidden skew-y-[-2deg]">
            <motion.div 
               animate={{ x: [0, -1000] }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="flex items-center gap-10 whitespace-nowrap text-3xl font-black italic uppercase opacity-20"
            >
               {['Mach_9', 'Propel_Inc', 'Turbo_Vault', 'Vector_Core', 'Velocity_AI', 'Sonic_Sync'].map(brand => (
                  <span key={brand}>{brand}</span>
               ))}
            </motion.div>
         </div>
      </section>

      {/* 4. Velocity Grid (Features) */}
      <section className="relative z-10 py-16 px-12 md:px-10 bg-white text-black border-y-8 border-[#DFE104] skew-y-[1deg]">
         <div className="max-w-7xl mx-auto space-y-40 skew-y-[-1deg]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-16 border-b-2 border-black/10">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#DFE104]">Core Velocity</span>
                  <h2 className="text-6xl md:text-5xl font-black tracking-tighter text-black uppercase leading-none italic">The_Mach.</h2>
               </div>
               <p className="text-2xl font-black uppercase tracking-widest text-black/40 italic leading-none pt-10 border-t-4 border-black">
                  Optimizing for instantaneous response and sub-millisecond execution.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                  { title: "Sonic_Flow", icon: Wind, desc: "Aero-dynamic data pipelines that eliminate bottlenecks in the project delivery cycle." },
                  { title: "Turbo_Cores", icon: Cpu, desc: "High-density processing modules dedicated to resource-intensive enterprise tasks." },
                  { title: "Inertia_Sync", icon: Repeat, desc: "Global state synchronization that maintains momentum across decentralized teams." },
                  { title: "Velocity_Map", icon: Globe, desc: "Real-time vector visualization of regional asset performance and movement." },
                  { title: "Shield_Mach", icon: Shield, desc: "High-speed security protocols that neutralize threats at Mach speed." },
                  { title: "Elastic_Node", icon: Gauge, desc: "Adapting infrastructure capacity in nanoseconds to meet peak performance demands." }
               ].map((f, i) => (
                  <div key={i} className="group p-16 bg-[#09090B] text-white border-b-8 border-white/10 skew-x-[-4deg] hover:bg-[#DFE104] hover:text-black hover:border-black transition-all duration-300">
                     <div className="w-20 h-20 bg-white/5 rounded-xl flex items-center justify-center mb-10 group-hover:bg-black group-hover:text-white transition-colors">
                        <f.icon size={40} className="skew-x-[4deg]" />
                     </div>
                     <div className="space-y-6 skew-x-[4deg]">
                        <h3 className="text-4xl font-black uppercase tracking-tighter italic">{f.title}.</h3>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] leading-relaxed opacity-60 group-hover:opacity-100">{f.desc}</p>
                     </div>
                     <div className="pt-12 skew-x-[4deg] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-black uppercase tracking-widest">Activate_Mach</span>
                        <ArrowUpRight size={24} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Performance Dashboard (Kinetic Visual) */}
      <section className="py-16 px-12 md:px-10 bg-black text-white z-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none rotate-12">
            <Gauge size={600} strokeWidth={0.5} />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
            <div className="space-y-16 max-w-xl">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#DFE104]">Pulse Telemetry</span>
                  <h2 className="text-7xl font-black uppercase tracking-tighter leading-none italic">Raw <br/> Velocity.</h2>
               </div>
               <p className="text-xl font-bold italic opacity-40 leading-relaxed uppercase tracking-widest italic border-l-8 border-[#DFE104] pl-10">Monitoring global asset movement with absolute precision. High Mach architectures for high stakes.</p>
               <div className="grid grid-cols-2 gap-12 pt-8">
                  {[
                     { val: "1,240", label: "GB/SEC_FLOW" },
                     { val: "0.01", label: "MS_LATENCY" },
                     { val: "99.99", label: "UPTIME_VEL" },
                     { val: "Mach 9", label: "PEAK_BURST" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-2 border-b-2 border-white/10 pb-4">
                        <div className="text-6xl font-black tracking-tighter italic text-[#DFE104] tabular-nums">{s.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-16 bg-[#DFE104] text-black skew-x-[-8deg] shadow-[30px_30px_0_0_rgba(255,255,255,0.05)] w-full lg:w-auto relative group">
               <div className="grid grid-cols-2 gap-0 border-8 border-black">
                  {[
                     { label: "Mach Sync", val: "ACTIVE", icon: Activity },
                     { label: "Cooling", val: "CRITICAL", icon: Wind },
                     { label: "Core Temp", val: "98.2°C", icon: Gauge },
                     { label: "Propel", val: "NOMINAL", icon: Flash }
                  ].map((m, i) => (
                     <div key={i} className="flex flex-col items-center justify-center p-12 border-4 border-black hover:bg-black hover:text-[#DFE104] transition-all cursor-crosshair group-hover:skew-x-2">
                        <m.icon size={32} className="mb-6 skew-x-[8deg]" />
                        <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2 skew-x-[8deg]">{m.label}</div>
                        <div className="text-2xl font-black uppercase tracking-tighter italic skew-x-[8deg]">{m.val}</div>
                     </div>
                  ))}
               </div>
               <div className="mt-12 w-full p-8 bg-black text-white hover:text-[#DFE104] transition-colors cursor-pointer font-black uppercase tracking-[0.5em] text-xs skew-x-[8deg] text-center border-b-8 border-white/20">
                  Execute Manual Overdrive [M+8]
               </div>
            </div>
         </div>
      </section>

      {/* 6. Turbine Tiers (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#DFE104]">Performance Bundles</span>
            <h2 className="text-7xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none italic">Tiers.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
            <div className="p-8 bg-white text-black border-l-[24px] border-[#DFE104] flex flex-col gap-12 group hover:bg-slate-100 transition-all duration-500 skew-x-[-4deg]">
               <div className="space-y-12 skew-x-[4deg]">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                     <span>Turbine_01: Subsonic</span>
                     <Wind size={24} />
                  </div>
                  <div className="text-9xl font-black italic text-black tracking-tighter leading-none">$240<span className="text-sm font-black uppercase tracking-[0.2em] opacity-30 ml-4 not-italic">/annum</span></div>
                  <ul className="space-y-6 pt-10 border-t-4 border-black">
                     {['Standard Velocity Path', 'Dual Core Processing', 'Daily Telemetry Logs', 'Global Sync Beta'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.2em] italic">
                           <CheckCircle size={24} className="text-[#DFE104] fill-black" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-black text-white font-black uppercase text-xl tracking-[0.4em] hover:bg-[#DFE104] hover:text-black transition-all mt-10 shadow-[10px_10px_0_0_rgba(0,0,0,0.1)]">Select_Mach</button>
               </div>
            </div>

            <div className="p-8 bg-[#DFE104] text-black border-l-[24px] border-white flex flex-col gap-12 relative overflow-hidden group hover:bg-white transition-all duration-700 skew-x-[-4deg] scale-105 shadow-[0_40px_100px_rgba(223,225,4,0.3)]">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
                  <Flash size={300} fill="currentColor" />
               </div>
               <div className="space-y-16 relative z-10 skew-x-[4deg]">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em]">
                     <span className="px-6 py-2 bg-black text-white">Turbine_02: Mach_9</span>
                     <Star size={24} className="fill-black" />
                  </div>
                  <div className="text-9xl font-black italic tracking-tighter leading-none text-black">$840<span className="text-sm font-black uppercase tracking-[0.3em] ml-4 not-italic">/annum</span></div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] leading-loose opacity-60 italic">Full high-fidelity sonic authority. Reserved for elite node pilots requiring zero-latency infrastructure synchronization.</p>
                  <ul className="space-y-6 pt-8 border-t-4 border-black">
                     {['Mach 9 Performance Cycle', 'Unlimited Core Clusters', '24/7 Priority Field Support', 'Custom Kinetic Logic Suite', 'Sonic Sync Authority'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-widest">
                           <TrendingUp size={24} className="text-black" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-10 bg-black text-white font-black uppercase text-xl tracking-[0.4em] hover:bg-white hover:text-black transition-all mt-10 relative z-10 shadow-2xl">IGNITE_TURBINE</button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Accelerated Footer */}
      <footer className="p-12 md:p-40 bg-black border-t-8 border-white/10 flex flex-col items-center gap-40 relative z-10">
         <div className="absolute top-0 right-0 p-40 opacity-5 pointer-events-none rotate-12">
            <Zap size={400} strokeWidth={4} />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-16">
               <div className="flex items-center gap-12 group cursor-pointer skew-x-[-12deg]">
                  <div className="w-28 h-28 bg-[#DFE104] flex items-center justify-center text-black shadow-[12px_12px_0_0_white] group-hover:translate-y-4 transition-transform">
                     <Zap size={64} fill="currentColor" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-7xl font-black text-white tracking-tighter uppercase italic leading-none">kntic.v2</h4>
                     <p className="text-[11px] font-black tracking-[1.5em] text-[#DFE104] uppercase italic opacity-40">Velocity Systems // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-black uppercase tracking-[0.4em] text-white/40 leading-loose border-l-8 border-[#DFE104] pl-12 italic">Standardizing digital speed across the global grid. We deliver high-velocity architectures that move with raw purpose.</p>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-black text-white uppercase tracking-[0.8em] italic opacity-60">THRUST_PRACTICE</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#DFE104] transition-all">Mach_Flow</a>
                  <a href="#" className="hover:text-[#DFE104] transition-all">Turbine_Labs</a>
                  <a href="#" className="hover:text-[#DFE104] transition-all">Vector_Sync</a>
                  <a href="#" className="hover:text-[#DFE104] transition-all">Propel_Vault</a>
               </div>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-black text-white uppercase tracking-[0.8em] italic opacity-60">GOVERNANCE</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-white/40 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#DFE104] transition-all">Privacy_Velocity</a>
                  <a href="#" className="hover:text-[#DFE104] transition-all">Legal_Mach</a>
                  <a href="#" className="hover:text-[#DFE104] transition-all">Field_Support</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-8 pt-32 border-t-2 border-white/10 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-24 h-24 border-2 border-white/10 rounded-full flex items-center justify-center text-white/20 hover:text-[#DFE104] hover:border-[#DFE104] hover:-translate-y-4 transition-all italic font-black text-3xl">
                  <Icon size={40} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-white/10 uppercase tracking-[1em] italic leading-loose">
            <span>© MMXXVI ZORVIA KINETIC LABORATORIES</span>
            <div className="flex gap-16">
               <span>Mach Peak</span>
               <Flash size={12} fill="currentColor" />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default KineticMockup;
