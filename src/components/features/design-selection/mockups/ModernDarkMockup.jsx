import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Box, Lock, BarChart, Settings, Sliders, Globe, Cpu, Check, ArrowRight, Server, Database, Cloud } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ModernDarkMockup = ({ theme }) => {
  const accents = ['#3B82F6', '#6366F1', '#22D3EE'];

  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#0B0F19] text-white font-sans selection:bg-[#3B82F6] selection:text-white pb-4">
      
      {/* 1. Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1], 
             opacity: [0.3, 0.5, 0.3],
             x: [0, 50, 0],
             y: [0, 30, 0]
           }}
           transition={{ duration: 12, repeat: Infinity }}
           className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-[120px] opacity-20" 
         />
         <motion.div 
           animate={{ 
             scale: [1, 1.4, 1], 
             opacity: [0.2, 0.4, 0.2],
             x: [0, -40, 0],
             y: [0, -60, 0]
           }}
           transition={{ duration: 15, repeat: Infinity, delay: 1 }}
           className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[100px] opacity-10" 
         />
      </div>

      {/* 2. Glassmorphic Navbar */}
      <nav className="sticky top-6 z-[100] mx-auto max-w-7xl px-4 flex items-center h-20">
        <div className="w-full h-full bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-2xl px-8 flex justify-between items-center shadow-2xl">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                 <Zap size={20} fill="white" />
              </div>
              <span className="font-bold tracking-tighter text-2xl">NEXUS</span>
           </div>
           
           <div className="hidden md:flex items-center gap-10">
              {['Overview', 'Solutions', 'Infrastructure', 'Security'].map(item => (
                <a key={item} href="#" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-widest">{item}</a>
              ))}
           </div>

           <button className="px-6 py-2.5 bg-[#3B82F6] hover:bg-blue-500 transition-all rounded-xl font-bold text-sm shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              Console
           </button>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-10 pt-32 pb-4 px-8 md:px-16 max-w-7xl mx-auto">
         <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 lg:col-span-7 flex flex-col space-y-10">
               <motion.div 
                 initial={{ x: -20, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#3B82F6] text-xs font-bold w-fit"
               >
                  <Lock size={14} className="animate-pulse" /> v4.0 PROTOCOL DEPLOYED
               </motion.div>
               
               <h1 className="text-6xl md:text-8xl font-black leading-[1] tracking-tighter">
                  Next-Gen <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-cyan-400 to-indigo-500">Infrastructure.</span>
               </h1>
               
               <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                  Architecting high-performance digital ecosystems with intelligent edge routing, real-time telemetry, and autonomous scaling.
               </p>
               
               <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <button className="px-10 py-5 bg-[#3B82F6] hover:bg-blue-500 transition-all rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(59,130,246,0.25)]">
                     Initialize Deployment <ArrowRight size={20} />
                  </button>
                  <button className="px-10 py-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-2xl font-bold text-lg backdrop-blur-md">
                     Documentation
                  </button>
               </div>

               <div className="flex items-center gap-8 pt-10 text-slate-500 grayscale opacity-40">
                  <Globe size={32} />
                  <Database size={32} />
                  <Cloud size={32} />
                  <Server size={32} />
                  <Cpu size={32} />
               </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative">
               <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="p-1.5 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl border border-white/10 shadow-3xl"
               >
                  <div className="bg-[#0B0F19] rounded-[1.2rem] p-8 space-y-8">
                     <div className="flex justify-between items-center pb-6 border-b border-white/5">
                        <span className="text-sm font-bold text-slate-400">NODE STATUS</span>
                        <div className="flex items-center gap-2">
                           <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-ping" />
                           <span className="text-xs font-mono font-bold text-[#22D3EE]">ACTIVE_01</span>
                        </div>
                     </div>
                     <div className="space-y-6">
                        {[
                           { label: "Throughput", val: "1.2 GB/s", perc: 85, color: "#3B82F6" },
                           { label: "Latency", val: "4.2 ms", perc: 12, color: "#22D3EE" },
                           { label: "Security", val: "TITAN-X", perc: 100, color: "#6366F1" }
                        ].map((s, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex justify-between text-xs font-bold">
                                 <span className="text-slate-500 uppercase">{s.label}</span>
                                 <span>{s.val}</span>
                              </div>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                 <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: `${s.perc}%` }}
                                    className="h-full rounded-full"
                                    style={{ backgroundColor: s.color }}
                                 />
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Core Infrastructure Grid */}
      <section className="relative z-10 py-32 bg-[#111827]/30 border-y border-white/5">
         <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-24 tracking-tighter">Unified Operations Suite.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                 { title: "Intelligent Edge", icon: Globe, desc: "Autonomous routing protocols that optimize data paths in real-time." },
                 { title: "Zero-Trust Mesh", icon: Shield, desc: "Identity-aware security layers protecting every internal transaction." },
                 { title: "Elastic Clusters", icon: Box, desc: "High-density compute nodes that scale instantly with demand spikes." },
                 { title: "Deep Analytics", icon: BarChart, desc: "Predictive telemetry providing insights before bottlenecks occur." },
                 { title: "Auto-Govern", icon: Sliders, desc: "Self-healing infrastructure that resolves errors autonomously." },
                 { title: "Pulse Guard", icon: Activity, desc: "Continuous uptime monitoring with 99.999% resilience benchmarks." }
               ].map((f, i) => (
                  <div key={i} className="group p-10 bg-[#111827]/40 border border-white/5 rounded-3xl hover:border-[#3B82F6]/30 hover:bg-[#111827]/60 transition-all cursor-pointer">
                     <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-2xl flex items-center justify-center text-[#3B82F6] mb-8 group-hover:scale-110 transition-transform">
                        <f.icon size={28} />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                     <p className="text-slate-400 leading-relaxed font-medium">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Pricing / Licensing */}
      <section className="py-48 px-8 md:px-16 max-w-7xl mx-auto">
         <div className="text-center mb-32">
             <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">Scale with Precision.</h2>
             <p className="text-slate-400 text-xl font-medium">Transparent licensing tailored for high-growth operations.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
               { tier: "Nexus Core", price: "249", desc: "For localized infrastructure and scaling startups.", color: "#3B82F6" },
               { tier: "Nexus Ultra", price: "899", desc: "Enterprise-grade clusters for global operations.", featured: true, color: "#6366F1" }
            ].map((p, i) => (
               <div key={i} className={`p-16 rounded-[2.5rem] border ${p.featured ? 'border-[#6366F1]/40 bg-[#111827]/60 shadow-[0_40px_80px_rgba(99,102,241,0.15)]' : 'border-white/5 bg-white/5'}`}>
                  <div className="text-sm font-black text-slate-500 uppercase tracking-widest mb-4">{p.tier}</div>
                  <div className="text-7xl font-black mb-8">
                     <span className="text-2xl font-bold opacity-30">$</span>{p.price}<span className="text-base opacity-30 font-bold">/MO</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-12">{p.desc}</p>
                  <ul className="space-y-5 mb-12">
                     {['Global Node Network', 'Zero-Trust Protocol', 'Premium Analytics', '24/7 Priority Support'].map(li => (
                        <li key={li} className="flex items-center gap-4 text-sm font-bold text-slate-300">
                           <Check size={18} style={{ color: p.color }} strokeWidth={4} /> {li}
                        </li>
                     ))}
                  </ul>
                  <button className={`w-full py-5 rounded-2xl font-black uppercase text-sm tracking-widest transition-all ${p.featured ? 'bg-[#6366F1] hover:bg-indigo-500 shadow-xl' : 'bg-white/10 hover:bg-white/20'}`}>
                     Select Plan
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Professional Footer */}
      <footer className="pt-32 pb-16 px-8 md:px-16 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-20 pb-20 border-b border-white/5">
            <div className="col-span-1 md:col-span-1 space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#3B82F6] flex items-center justify-center">
                     <Zap size={16} fill="white" />
                  </div>
                  <span className="font-bold tracking-tighter text-xl">NEXUS</span>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  The infrastructure layer for the next billion digital interactions. Scalable, secure, autonomous.
               </p>
            </div>
            {['Platforms', 'Security', 'Company', 'Legal'].map(cat => (
               <div key={cat} className="space-y-6">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">{cat}</h4>
                  <ul className="space-y-4 text-sm font-bold text-slate-600">
                     <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                     <li><a href="#" className="hover:text-white transition-colors">Global Network</a></li>
                  </ul>
               </div>
            ))}
         </div>

         <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex gap-6">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#3B82F6] transition-all">
                     <Icon size={18} />
                  </a>
               ))}
            </div>
            <p className="text-xs font-bold text-slate-600 tracking-widest uppercase italic">
               © 2026 ZORVIA SYSTEMS // ALL SYSTEMS OPERATIONAL
            </p>
         </div>
      </footer>
    </div>
  );
};

export default ModernDarkMockup;
