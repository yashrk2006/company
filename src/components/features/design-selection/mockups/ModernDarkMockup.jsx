import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, Zap, Box, Lock, BarChart, Settings, Sliders, Globe, Cpu, Check, 
  ArrowRight, Server, Database, Cloud, Activity, MousePointer2, 
  Command, Layers, Code, Smartphone, Menu, X, ArrowUpRight, 
  ChevronDown, ExternalLink, Mail, Phone, MapPin, Search
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ModernDarkMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#0A0A0B] text-white font-sans selection:bg-[#3B82F6] selection:text-white pt-0">
      
      {/* 1. Tech Gradient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent_50%)]" />
         <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_50%)]" />
      </div>

      {/* 2. Modern Navbar */}
      <nav className="sticky top-0 z-[100] bg-[#0A0A0B]/80 backdrop-blur-xl border-b border-white/5 px-8 md:px-16 py-6 flex justify-between items-center transition-all duration-500">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-10 h-10 bg-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg">
               <span className="text-xl font-black">M</span>
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-2xl font-black uppercase tracking-tight">MODERN.SYS</span>
               <span className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-40 mt-1">Institutional Archive</span>
            </div>
         </div>
            
            <div className="hidden lg:flex items-center gap-14">
               {['Overview', 'Solutions', 'Systems', 'Security', 'Pricing'].map(item => (
                 <a key={item} href="#" className="text-xs font-black text-slate-400 hover:text-white transition-all uppercase tracking-[0.2em] relative group py-2">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3B82F6] group-hover:w-full transition-all duration-500" />
                 </a>
               ))}
            </div>

            <div className="flex items-center gap-6">
               <button className="hidden sm:block px-8 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 transition-all rounded-xl font-black text-xs uppercase tracking-widest">
                  Log_In
               </button>
               <button className="px-8 py-2.5 bg-[#3B82F6] hover:bg-blue-500 transition-all rounded-xl font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                  Console_Sys
               </button>
               <Menu size={28} className="lg:hidden text-white/60 hover:text-white cursor-pointer" />
            </div>
      </nav>

      {/* 3. High-Impact Tech Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-8 md:px-16 w-full max-w-screen-2xl mx-auto overflow-visible">
         <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-7 flex flex-col space-y-12">
               <motion.div 
                 initial={{ x: -30, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1 }}
                 className="inline-flex items-center gap-4 px-5 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#3B82F6] text-[10px] font-black tracking-widest w-fit shadow-[0_0_20px_rgba(59,130,246,0.1)]"
               >
                  <Lock size={16} className="animate-pulse" /> V4.8_QUANTUM_CORE_ACTIVE
               </motion.div>
               
               <h1 className="text-7xl md:text-[9rem] font-black leading-[0.9] tracking-tighter text-white">
                  Modern <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-indigo-500 italic drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]">Infrastructures.</span>
               </h1>
               
               <p className="text-xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed font-medium border-l-4 border-[#3B82F6] pl-8 py-2 bg-gradient-to-r from-[#3B82F6]/5 to-transparent">
                  Architecting high-performance digital ecosystems with intelligent edge routing, real-time telemetry, and autonomous scaling logic. Built for the data-heavy future.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-8 pt-8 items-center lg:items-start w-full lg:w-fit">
                  <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(59,130,246,0.4)" }}
                    className="w-full sm:w-auto px-16 py-6 bg-[#3B82F6] hover:bg-blue-500 transition-all rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-[0_20px_60px_rgba(59,130,246,0.3)]"
                  >
                     INITIALIZE_DEPLOY <ArrowUpRight size={24} strokeWidth={3} />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="w-full sm:w-auto px-16 py-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl font-black text-xl backdrop-blur-md flex items-center justify-center gap-4"
                  >
                     CORE_DOCS <Layers size={24} />
                  </motion.button>
               </div>

               <div className="pt-16 flex flex-col gap-8">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] italic">TRUSTED_BY_GLOBAL_CLUSTERS</span>
                  <div className="flex flex-wrap items-center gap-12 text-slate-500 transition-all cursor-default">
                     {[Globe, Database, Cloud, Server, Cpu, Command].map((Icon, i) => (
                        <div key={i} className="hover:text-[#3B82F6] hover:scale-125 transition-all duration-500 filter drop-shadow-lg">
                           <Icon size={48} strokeWidth={1} />
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative lg:block lg:mt-32">
               {/* 3D-ish Telemetry Dashboard */}
               <motion.div 
                  initial={{ rotateY: 30, rotateX: 10, opacity: 0 }}
                  animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="relative group p-0.5 bg-gradient-to-br from-[#3B82F6]/50 to-indigo-600/50 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] perspective-[1000px]"
               >
                  <div className="bg-[#0B0F19] rounded-[1.7rem] p-10 space-y-12 overflow-hidden relative">
                     <div className="absolute inset-0 bg-blue-500/5 pointer-events-none group-hover:opacity-10 transition-opacity" />
                     <div className="flex justify-between items-center pb-8 border-b border-white/5 relative z-10">
                        <div className="flex items-center gap-4">
                           <Activity className="text-[#3B82F6] animate-pulse" />
                           <span className="text-sm font-black text-slate-400 uppercase tracking-widest">Global_Status</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-1.5 bg-emerald-500/10 rounded-lg">
                           <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-ping" />
                           <span className="text-[10px] font-black text-[#22D3EE] uppercase tracking-widest tracking-tighter">Cluster_Live</span>
                        </div>
                     </div>
                     
                     <div className="space-y-10 relative z-10">
                        {[
                           { label: "Throughput", val: "1.2 GB/s", perc: 85, color: "#3B82F6" },
                           { label: "Latency", val: "4.2 ms", perc: 12, color: "#22D3EE" },
                           { label: "Memory_Ops", val: "94% Peak", perc: 94, color: "#6366F1" },
                           { label: "Security_X", val: "Titans", perc: 100, color: "#F43F5E" }
                        ].map((s, i) => (
                           <div key={i} className="space-y-4">
                              <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                                 <span className="text-slate-500">{s.label}</span>
                                 <span className="text-white">{s.val}</span>
                              </div>
                              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden shadow-inner">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${s.perc}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: i * 0.2 }}
                                    className="h-full rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    style={{ backgroundColor: s.color }}
                                 />
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="pt-8 border-t border-white/5 flex gap-10">
                        <div className="flex-1 h-32 bg-white/5 rounded-xl flex items-center justify-center flex-col gap-2 group-hover:bg-[#3B82F6]/10 transition-colors">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Load_Avg</span>
                           <span className="text-2xl font-black text-[#3B82F6]">0.08</span>
                        </div>
                        <div className="flex-1 h-32 bg-white/5 rounded-xl flex items-center justify-center flex-col gap-2 group-hover:bg-indigo-600/10 transition-colors">
                           <span className="text-[10px] font-black text-slate-500 uppercase">Requests</span>
                           <span className="text-2xl font-black text-indigo-500">2.4M</span>
                        </div>
                     </div>
                  </div>
               </motion.div>
               {/* Aesthetic floating card */}
               <motion.div 
                 animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-16 -left-16 p-8 bg-blue-600/20 backdrop-blur-2xl border border-blue-500/30 rounded-[2rem] shadow-2xl z-20 hidden md:block"
               >
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <Server size={32} />
                     </div>
                     <div>
                        <div className="text-xs font-black uppercase opacity-60">Edge_Node</div>
                        <div className="text-2xl font-black tracking-tighter">Silicon_01V</div>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Operations Suite Grid (Features Expanded) */}
      <section className="relative z-10 py-20 w-full bg-[#111827]/30 border-y border-white/5 flex flex-col items-center">
         <div className="max-w-7xl mx-auto px-8 md:px-16 text-center space-y-32">
            <div className="space-y-6">
               <motion.h2 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 className="text-6xl md:text-8xl font-black tracking-tighter text-white"
               >
                  Unified Ops Suite.
               </motion.h2>
               <p className="text-xl text-slate-400 font-medium max-w-4xl mx-auto">
                  A high-fidelity infrastructure layer designed for the absolute limit of digital scalability and autonomous execution.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { title: "Intelligent Edge", icon: Globe, desc: "Autonomous routing protocols that optimize data paths in real-time across global clusters." },
                 { title: "Zero-Trust Mesh", icon: Shield, desc: "Identity-aware security layers protecting every internal packet with quantum-readiness." },
                 { title: "Elastic Clusters", icon: Box, desc: "High-density compute nodes that scale instantly with extreme demand spikes or DDOS waves." },
                 { title: "Deep Analytics", icon: BarChart, desc: "Predictive telemetry provides deep insights with sub-second resolution for critical ops." },
                 { title: "Auto-Govern", icon: Sliders, desc: "Self-healing infrastructure that resolves common errors or bottlenecks autonomously." },
                 { title: "Pulse Guard", icon: Activity, desc: "Continuous uptime monitoring with 99.999% resilience benchmarks in high-noise environments." },
                 { title: "Static_Ops", icon: Command, desc: "Immutable infrastructure deployments for zero-defect production cycles and rollbacks." },
                 { title: "Global_Sync", icon: Server, desc: "Distributed state management with conflict-free replication across planetary nodes." },
                 { title: "Api_Sovereign", icon: Code, desc: "Standardized API endpoints with extreme throughput and built-in rate-limiting logic." }
               ].map((f, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.3)" }}
                    className="group p-12 bg-black/40 border border-white/5 rounded-[2.5rem] hover:bg-[#111827]/80 transition-all cursor-pointer text-left relative overflow-hidden"
                  >
                     <div className="absolute -top-8 -right-24 w-48 h-48 bg-[#3B82F6]/5 rounded-full blur-3xl group-hover:bg-[#3B82F6]/10 transition-all" />
                     <div className="w-16 h-16 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mb-10 group-hover:scale-125 transition-transform duration-500 relative z-10">
                        <f.icon size={32} />
                     </div>
                     <h3 className="text-3xl font-black mb-6 group-hover:text-[#3B82F6] transition-colors relative z-10">{f.title}</h3>
                     <p className="text-lg text-slate-400 leading-relaxed font-medium group-hover:text-white transition-colors relative z-10">{f.desc}</p>
                     <div className="mt-10 flex justify-end relative z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={24} className="text-[#3B82F6]" strokeWidth={3} />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Metrics & Telemetry Visualization */}
      <section className="py-20 w-full px-8 lg:px-24 bg-transparent relative z-10 flex flex-col items-center">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-12 text-center space-y-8 mb-20">
               <h2 className="text-6xl md:text-5xl font-black tracking-tighter text-white uppercase italic leading-none underline decoration-[#3B82F6] decoration-[20px] underline-offset-[20px]">SYS_TELEMETRY.</h2>
               <p className="text-xl font-bold uppercase tracking-[1em] text-slate-500">Real-Time Core Performance</p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-12">
               {[
                 { label: "Ops/Sec", val: "458,922", trend: "+12%", color: "#3B82F6" },
                 { label: "Active Nodes", val: "1,248", trend: "Nominal", color: "emerald-400" },
                 { label: "Packet Loss", val: "0.0001%", trend: "Minimal", color: "blue-400" }
               ].map((m, i) => (
                  <div key={i} className="p-10 bg-[#111827]/60 border border-white/5 rounded-3xl flex justify-between items-center group hover:border-[#3B82F6]/30 transition-all">
                     <div className="space-y-4">
                        <div className="text-sm font-black text-slate-500 uppercase tracking-widest">{m.label}</div>
                        <div className="text-6xl font-black tracking-tighter text-white">{m.val}</div>
                     </div>
                     <div className={`px-4 py-2 bg-[#3B82F6]/10 rounded-xl text-xs font-black text-[#3B82F6] italic`}>
                        {m.trend}
                     </div>
                  </div>
               ))}
            </div>

            <div className="lg:col-span-7 p-12 bg-black border border-white/5 rounded-[3rem] relative overflow-hidden group min-h-0 flex items-center justify-center">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="relative w-full h-full max-w-[400px] max-h-[400px] flex items-center justify-center"
               >
                  <Globe size={300} strokeWidth={0.5} className="text-[#3B82F6] opacity-30" />
                  <div className="absolute inset-0 border-[2px] border-dashed border-[#3B82F6]/10 rounded-full animate-spin-slow" style={{ animationDuration: '40s' }} />
                  <div className="absolute inset-4 border-[1px] border-white/5 rounded-full" />
                  {[0, 60, 120, 180, 240, 300].map(deg => (
                     <div 
                        key={deg}
                        className="absolute h-8 w-1 bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]"
                        style={{ transform: `rotate(${deg}deg) translateY(-150px)` }}
                     />
                  ))}
               </motion.div>
               <div className="absolute bottom-10 left-10 text-left space-y-4">
                  <div className="flex items-center gap-4">
                     <div className="w-3 h-3 bg-[#3B82F6] rounded-full" />
                     <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Atmospheric_Stability</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                     <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">Node_Redundancy</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Nexus Licensing (Pricing) */}
      <section className="py-20 px-8 md:px-16 w-full max-w-7xl mx-auto flex flex-col items-center relative z-10">
         <div className="text-center mb-32 space-y-8">
             <h2 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase italic">Scale_High.</h2>
             <p className="text-slate-400 text-2xl font-medium tracking-tight">Transparent licensing tailored for high-growth operations and data clusters.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full">
            {[
               { tier: "Nexus Core", price: "249", desc: "For localized infrastructure and scaling startups requiring high-fidelity routing.", color: "#3B82F6" },
               { tier: "Nexus Ultra", price: "899", desc: "Enterprise-grade clusters for demanding global operations with zero-trust needs.", featured: true, color: "#6366F1" },
               { tier: "Nexus Custom", price: "POA", desc: "Wholesale planetary infrastructure with dedicated hardware allocation.", color: "#22D3EE" }
            ].map((p, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -15 }}
                 className={`p-16 rounded-[2.8rem] border flex flex-col justify-between ${p.featured ? 'border-[#6366F1]/40 bg-indigo-950/20 shadow-[0_40px_100px_rgba(99,102,241,0.25)] relative' : 'border-white/5 bg-white/5 backdrop-blur-3xl'}`}
               >
                  {p.featured && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-8 py-2 bg-[#6366F1] text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg">
                       Recommended_Sys
                    </div>
                  )}
                  <div className="space-y-12">
                     <div className="flex justify-between items-center">
                        <div className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">{p.tier}</div>
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#3B82F6]">
                           <Box size={24} />
                        </div>
                     </div>
                     <div className="text-8xl font-black italic tracking-tighter leading-none">
                        <span className="text-3xl font-black opacity-30 italic">$</span>{p.price}
                        {p.price !== 'POA' && <span className="text-base opacity-30 font-black tracking-[0.3em] uppercase ml-4">/Month</span>}
                     </div>
                     <p className="text-lg text-slate-400 font-medium leading-relaxed italic border-l-2 border-white/10 pl-6">{p.desc}</p>
                     <div className="h-px w-full bg-white/5" />
                     <ul className="space-y-6">
                        {['Global Node Network (Standard)', 'Zero-Trust Protocol V4', 'Deep-Packet Analytics', '24/7 Priority Uplink', 'Custom Kern Logic'].map((li, k) => (
                           <li key={k} className="flex items-center gap-6 text-[13px] font-bold text-slate-300">
                              <Check size={20} style={{ color: p.color }} strokeWidth={4} className="p-1 bg-white/5 rounded-md" /> {li}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className={`w-full py-6 rounded-2xl font-black uppercase text-sm tracking-[0.3em] transition-all mt-16 ${p.featured ? 'bg-[#6366F1] hover:bg-indigo-500 shadow-[0_15px_30px_#6366F1/20]' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
                  >
                     COMMENCE_KEY
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 7. Final Call to Protocol (CTA) */}
      <section className="py-20 w-full px-8 md:px-10 bg-black border-t-[30px] border-white/5 relative flex flex-col items-center text-center overflow-hidden z-10">
         <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#3B82F6]/10 to-transparent pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-6xl mx-auto space-y-32"
         >
            <div className="space-y-12">
               <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic tracking-tighter text-white leading-[0.7] uppercase">
                  NEXUS <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-cyan-400">TERMINAL.</span>
               </h2>
               <div className="flex flex-col items-center gap-16 pt-12">
                  <motion.button 
                     whileHover={{ scale: 1.1, boxShadow: "0 0 100px rgba(59,130,246,0.3)" }}
                     className="px-24 py-10 bg-white text-black font-black uppercase text-3xl md:text-5xl tracking-[0.2em] rounded-3xl shadow-2xl flex items-center gap-10 group"
                  >
                     EXECUTE_UPLINK <ArrowRight size={60} strokeWidth={4} className="group-hover:translate-x-4 transition-transform" />
                  </motion.button>
                  <div className="text-sm font-black text-slate-500 uppercase tracking-[1em] italic">Transmitting From High Fidelity Nodes // MMXXVI</div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 8. Extra-Premium Professional Footer */}
      <footer className="pt-16 pb-20 w-full px-8 md:px-24 bg-black border-t-4 border-white/5 relative z-[110] flex flex-col items-center overflow-hidden text-center">
         <div className="absolute top-0 right-0 p-48 opacity-[0.03] italic font-black text-[30vw] pointer-events-none uppercase">CORE</div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 w-full max-w-screen-2xl mx-auto text-left relative z-10">
            <div className="lg:col-span-2 space-y-24">
               <div className="flex items-center gap-6 group cursor-pointer lg:justify-start">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-[#3B82F6] flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-700">
                       <Zap size={40} fill="white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-black" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-black tracking-tighter text-6xl text-white">NEXUS</span>
                     <span className="text-xs font-black tracking-[1em] text-[#3B82F6] uppercase">Sys_Master_V.4.8</span>
                  </div>
               </div>
               <p className="text-2xl font-medium text-slate-500 italic max-w-xl leading-relaxed border-l-4 border-[#3B82F6]/20 pl-12 py-4">
                  The foundational infrastructure layer for the next billion digital interactions. Scalable, secure, and fully autonomous at the planetary limit.
               </p>
            </div>

            {['Infrastructure', 'Security_X', 'Company'].map((cat, i) => (
               <div key={cat} className="space-y-12">
                  <h4 className="text-[12px] font-black uppercase tracking-[1em] text-white border-b border-white/5 pb-6 w-fit">{cat}</h4>
                  <ul className="flex flex-col gap-8 text-xl font-bold text-slate-600">
                     <li><a href="#" className="hover:text-[#3B82F6] hover:translate-x-4 transition-all inline-block hover:italic">Architecture_V4</a></li>
                     <li><a href="#" className="hover:text-[#3B82F6] hover:translate-x-4 transition-all inline-block hover:italic">Global_Nodes</a></li>
                     <li><a href="#" className="hover:text-[#3B82F6] hover:translate-x-4 transition-all inline-block hover:italic">Telemetry_Ops</a></li>
                     <li><a href="#" className="hover:text-[#3B82F6] hover:translate-x-4 transition-all inline-block hover:italic">Safety_Protos</a></li>
                  </ul>
               </div>
            ))}
         </div>

         <div className="pt-12 border-t border-white/5 w-full max-w-screen-2xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex gap-12">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone].map((Icon, i) => (
                  <a key={i} href="#" className="w-16 h-16 rounded-[1.2rem] bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all group overflow-hidden">
                     <Icon size={28} className="transition-transform group-hover:scale-125 group-hover:rotate-12" />
                  </a>
               ))}
            </div>
            <div className="flex flex-col items-end gap-4 text-right">
               <div className="text-xl font-black text-slate-700 uppercase tracking-widest italic group">
                  © MMXXVI ZORVIA SYSTEMS <span className="text-[#3B82F6]">//</span> ALL SYSTEMS NOMINAL
               </div>
               <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3">
                     <div className="w-2.5 h-2.5 bg-[#3B82F6] rounded-full animate-pulse shadow-[0_0_10px_#3B82F6]" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-[#3B82F6]">Latency: Zero</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Uptime: 99.9%</span>
                  </div>
               </div>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 120s linear infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}} />
    </div>
  );
};

export default ModernDarkMockup;
