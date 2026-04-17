import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, HardDrive, Settings, Activity, Shield, AlertTriangle, ChevronRight, Gauge, Zap, Hammer, Wind, Factory, Database, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../../../ui/Icons';

const IndustrialMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#0f172a] text-slate-300 font-mono selection:bg-orange-500 selection:text-white pb-4">
      {/* 1. Structural Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* 2. Heavy Header */}
      <header className="sticky top-0 z-[100] bg-[#0f172a]/95 backdrop-blur-xl border-b-4 border-orange-500/50 px-6 md:px-12 py-6 flex justify-between items-center shadow-2xl">
         <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
               <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-sm shadow-[4px_4px_0px_#7c2d12]">
                  <Factory size={28} />
               </div>
               <div>
                  <div className="text-xl font-black tracking-tighter text-white leading-none">ZORVIA.INDUSTRIAL</div>
                  <div className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">HEAVY_INFRASTRUCTURE_NODE</div>
               </div>
            </div>
            <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-500">
               {['Assets', 'Telemetry', 'Logistics', 'Security', 'Protocols'].map(item => (
                 <a key={item} href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2">
                    <span className="text-orange-500 opacity-50">#</span>{item}
                 </a>
               ))}
            </div>
         </div>
         <div className="flex items-center gap-8">
            <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-black/40 border border-white/10 rounded-sm">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-black tracking-widest text-slate-400">STATUS: NOMINAL / 0x48f2</span>
            </div>
            <button className="px-6 py-3 bg-white text-black font-black uppercase text-xs tracking-widest border-b-4 border-slate-400 hover:translate-y-px hover:border-b-0 transition-all">TERMINAL_EXIT</button>
         </div>
      </header>

      {/* 3. Hero / Main Telemetry */}
      <section className="relative z-10 p-6 md:p-12 lg:p-8 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8 space-y-12">
               <div className="bg-black/40 border-l-8 border-orange-500 p-12 space-y-8 shadow-[10px_10px_30px_rgba(0,0,0,0.5)]">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-orange-500 text-xs font-black uppercase tracking-[0.3em]"
                  >
                     <AlertTriangle size={16} />
                     HIGH_FIDELITY_DRIVEN
                  </motion.div>
                  
                  <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase">
                     BRUTE FORCE <br />
                     <span className="text-transparent" style={{ WebkitTextStroke: '2px #F97316' }}>DIGITAL</span> ENERGY.
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-400 font-bold max-w-2xl leading-relaxed uppercase">
                     Extreme architecture for heavy-duty digital operations. Automated, resilient, and built to withstand the pressure of global scale.
                  </p>

                  <div className="flex flex-wrap gap-6 pt-8">
                     <button className="px-10 py-5 bg-orange-600 text-white font-black uppercase text-sm tracking-[0.2em] shadow-[6px_6px_0px_#7c2d12] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-4">
                        Initialize_Core
                        <ChevronRight size={18} />
                     </button>
                     <button className="px-10 py-5 bg-transparent border-2 border-white/20 text-white font-black uppercase text-sm tracking-[0.2em] hover:bg-white/5 transition-colors">
                        SOP_Manual
                     </button>
                  </div>
               </div>

               {/* Live Telemetry Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#1e293b]/50 border border-white/10 p-8 flex flex-col justify-between group">
                     <div className="flex justify-between items-start mb-8">
                        <Cpu className="text-orange-500/50 group-hover:text-orange-500 transition-colors" size={32} />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Load: Critical</span>
                     </div>
                     <div>
                        <div className="text-4xl font-black text-white mb-2 tabular-nums">92.4%</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-orange-500">Compute_Stress_Level</div>
                     </div>
                  </div>
                  <div className="bg-[#1e293b]/50 border border-white/10 p-8 flex flex-col justify-between group">
                     <div className="flex justify-between items-start mb-8">
                        <Gauge className="text-orange-500/50 group-hover:text-orange-500 transition-colors" size={32} />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">IO: NOMINAL</span>
                     </div>
                     <div>
                        <div className="text-4xl font-black text-white mb-2 tabular-nums">4.8 GB/s</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-orange-500">Data_Ingestion_Rate</div>
                     </div>
                  </div>
               </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
               <div className="bg-orange-600/10 border-t-8 border-orange-600 p-10 shadow-2xl">
                  <h3 className="text-xl font-black text-white mb-8 border-b border-white/10 pb-4 uppercase tracking-tighter">System_Diagnostics</h3>
                  <div className="space-y-6">
                     {[
                       { label: 'Thermal', val: '48°C', status: 'Optimal' },
                       { label: 'Voltage', val: '240V', status: 'Stable' },
                       { label: 'Density', val: 'High', status: 'Nominal' }
                     ].map((item, i) => (
                       <div key={i} className="flex justify-between items-center group">
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 transition-colors group-hover:text-white">{item.label}</div>
                          <div className="flex items-center gap-4">
                             <div className="text-sm font-black text-white tabular-nums">{item.val}</div>
                             <div className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest ${item.status === 'Optimal' || item.status === 'Stable' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>{item.status}</div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 h-20 w-full bg-black/40 rounded-sm relative overflow-hidden border border-white/10">
                     <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-[2px] bg-orange-500" />
                     </div>
                     <motion.div 
                       animate={{ x: ['100%', '-100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       className="absolute inset-y-0 w-8 bg-orange-500/30 blur-md" 
                     />
                  </div>
               </div>

               <div className="bg-black/60 p-10 border-2 border-dashed border-white/10 text-center space-y-6 group cursor-pointer hover:border-orange-500/50 transition-colors">
                  <Settings className="mx-auto text-slate-700 group-hover:rotate-90 transition-transform" size={48} />
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 leading-relaxed">
                     Hardware protocols manually synchronized. <br />
                     <span className="text-orange-500">Last Sync: 04:22:18 GMT</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>

      {/* 4. Industrial Capability Matrix */}
      <section className="relative z-10 py-16 bg-black/60 border-y-4 border-white/10 mt-32">
         <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10">
            {[
              { title: "Iron_Gate", icon: Shield, desc: "High-density access control for restricted digital zones." },
              { title: "Thermal_Sink", icon: Wind, desc: "Extreme dissipation systems for compute-heavy workloads." },
              { title: "Gear_Logic", icon: Settings, desc: "Synchronized logic chains for deterministic outputs." },
              { title: "Vault_Base", icon: Database, desc: "Deep-layer storage with multi-redundant structural integrity." }
            ].map((f, i) => (
               <div key={i} className="bg-[#0f172a] p-12 space-y-8 hover:bg-orange-600 group transition-all duration-500">
                  <div className="text-orange-500 group-hover:text-white transition-colors">
                     <f.icon size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{f.title}</h3>
                  <div className="h-1 w-12 bg-orange-600 group-hover:bg-white transition-colors" />
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed group-hover:text-white/80 transition-colors">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 5. Pricing Index (Hardware Allocation) */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto space-y-24">
         <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic">ALLOCATION_INDEX.</h2>
            <div className="h-2 w-32 bg-orange-500 mx-auto" />
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
               { id: "A-01", name: "BASEUNIT", price: "24k", features: ["128 Core Compute", "1.2 TB Flash Store", "Standard Security", "Weekly Maintenance"] },
               { id: "B-99", name: "HEAVYUNIT", price: "88k", shadow: true, features: ["Infinite Compute Cluster", "Deep Cold Storage", "Military Security Node", "Real-time Telemetry", "Priority Repair Swarm"] }
            ].map((p, i) => (
               <div key={i} className={`p-16 border-2 shadow-2xl relative overflow-hidden group ${p.shadow ? 'border-orange-500 bg-orange-500/5' : 'border-white/10 bg-black/40'}`}>
                  <div className="flex justify-between items-start mb-16 relative z-10">
                     <div className="text-[10px] font-black uppercase tracking-[0.4em] bg-white/10 px-4 py-2 text-white">{p.id} / MODULE</div>
                     {p.shadow && <Zap className="text-orange-500" fill="currentColor" size={24} />}
                  </div>
                  
                  <div className="space-y-4 relative z-10 mb-16">
                     <div className="text-3xl font-black text-slate-500 uppercase tracking-widest">{p.name}</div>
                     <div className="text-7xl md:text-9xl font-black text-white tracking-tighter tabular-nums underline decoration-orange-500 decoration-8 underline-offset-8">
                        <span className="text-lg vertical-top tracking-normal">$</span>{p.price}
                     </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 pb-16">
                     {p.features.map((feat, k) => (
                        <li key={k} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                           <div className="w-2 h-2 bg-orange-500" />
                           {feat}
                        </li>
                     ))}
                  </ul>

                  <button className={`w-full py-8 font-black uppercase text-sm tracking-[0.4em] transition-all relative z-10 ${p.shadow ? 'bg-orange-600 text-white shadow-[8px_8px_0px_#7c2d12] hover:translate-x-1 hover:translate-y-1 hover:shadow-none' : 'bg-white text-black hover:bg-orange-500 hover:text-white'}`}>
                     COMMENCE_ALLOCATION
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Contact / Terminal Submission */}
      <section className="bg-orange-600 p-12 md:p-10 relative overflow-hidden text-center z-10">
         <Terminal className="absolute top-10 right-10 text-white/10" size={300} />
         <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <h2 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter uppercase leading-none">READY TO <br/> DEPLOY?</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <button className="px-16 py-8 bg-black text-white font-black uppercase tracking-widest text-2xl hover:skew-x-2 transition-transform shadow-2xl">INIT_CONTACT</button>
               <div className="text-[10px] font-black uppercase tracking-widest text-white/60 text-left leading-relaxed">
                  SYSTEM RESPONSE TIME: 12ms <br/>
                  UPTIME: 99.98% / CONTINUOUS <br/>
                  CLUSTER: GLOBAL-S
               </div>
            </div>
         </div>
      </section>

      {/* 7. Rugged Footer */}
      <footer className="p-12 md:p-10 bg-[#0f172a] border-t-8 border-white/5 flex flex-col gap-8 text-slate-500 relative z-10">
         <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="space-y-8">
               <div className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-white/5 border-2 border-orange-600 flex items-center justify-center text-white text-4xl font-black group-hover:bg-orange-600 transition-colors">I</div>
                  <div className="text-3xl font-black text-white tracking-tighter uppercase italic">ZORVIA.INDUSTRIAL</div>
               </div>
               <p className="max-w-md text-xs font-bold uppercase tracking-widest leading-relaxed">Providing high-density infrastructure solutions for global enterprise nodes. Built for longevity, security, and extreme scale.</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-[10px] font-black uppercase tracking-widest">
               <div className="space-y-6">
                  <div className="text-white border-l-2 border-orange-500 pl-4 py-1">HARDWARE</div>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">BaseUnits</a>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">NodeClusters</a>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">Vaults</a>
               </div>
               <div className="space-y-6">
                  <div className="text-white border-l-2 border-orange-500 pl-4 py-1">SYSTEMS</div>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">Telemetry</a>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">Diagnostics</a>
                  <a href="#" className="block hover:text-orange-500 transition-colors pl-4">Repairs</a>
               </div>
            </div>
         </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5">
            <div className="flex gap-12">
               {[GithubIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">
                     <Icon size={20} strokeWidth={3} />
                  </a>
               ))}
            </div>
            
            <div className="text-[9px] font-black uppercase tracking-[0.6em] italic text-slate-700">
               © MMXXVI ZORVIA INDUSTRIAL SYSTEMS // GLOBAL_ID: 0x48-IND-99
            </div>
         </div>
      </footer>
    </div>
  );
};

export default IndustrialMockup;
