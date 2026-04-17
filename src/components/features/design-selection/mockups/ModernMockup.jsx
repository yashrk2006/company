import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Activity, BarChart3, Globe, Zap, Users, ShieldCheck, 
  ChevronRight, Bell, Search, CheckCircle2, ArrowRight, Layers,
  Cloud, Lock, Cpu, Database, Network, Briefcase, ExternalLink,
  MessageSquare, Settings, Share2, Mail, Phone, MapPin, Tablet, Smartphone
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ModernMockup = ({ theme }) => {
  const primary = theme?.styles?.primary || '#3b82f6';
  
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-slate-50 font-sans selection:bg-blue-500/20 pt-0 flex flex-col items-center">
      
      {/* 1. Subtle High-Fidelity Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[150px]" />
         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[150px]" />
         <div className="absolute top-[30%] left-[20%] w-px h-px shadow-[0_0_400px_400px_rgba(59,130,246,0.03)]" />
      </div>

      {/* 2. Sleek Enterprise Navbar */}
      <nav className="sticky top-6 z-[110] w-full max-w-7xl px-4 flex items-center h-20">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full h-full bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm rounded-3xl px-8 flex justify-between items-center"
        >
           <div className="flex items-center gap-12">
              <div className="flex items-center gap-3 group cursor-pointer">
                 <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    <Zap size={22} fill="currentColor" />
                 </div>
                 <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">ZORVIA.X</span>
              </div>
              <div className="hidden lg:flex gap-8 text-sm font-bold text-slate-500">
                 {['Platform', 'Solutions', 'Enterprise', 'Security', 'Pricing'].map(item => (
                   <a key={item} href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1 group">
                      {item}
                      {item !== 'Pricing' && <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                   </a>
                 ))}
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-400 border border-slate-200 focus-within:bg-white focus-within:border-blue-500/50 transition-all">
                 <Search size={14} />
                 <input className="bg-transparent border-none outline-none text-xs w-24 font-medium text-slate-900" placeholder="Search..." />
              </div>
              <button className="px-6 py-2.5 bg-slate-900 text-white font-black rounded-xl text-xs hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/10 uppercase tracking-widest">
                 Get_Started
              </button>
           </div>
        </motion.div>
      </nav>

      {/* 3. Hero: Precision Scalability */}
      <section className="relative z-10 w-full px-6 md:px-16 pt-32 pb-12 flex flex-col items-center text-center max-w-screen-2xl mx-auto overflow-hidden">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-3 px-5 py-2 bg-blue-500/10 rounded-full text-blue-600 text-[10px] font-black uppercase tracking-widest mb-10 border border-blue-500/20 shadow-sm"
         >
            <Sparkles size={16} className="animate-pulse" />
            v4.0 Update: Unified Intelligence Protocol
         </motion.div>

         <h1 className="text-6xl md:text-9xl lg:text-6xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-12">
            Scale your vision <br />
            with <span className="text-blue-600 italic">global</span> precision.
         </h1>

         <p className="text-xl md:text-3xl text-slate-500 font-medium max-w-4xl mb-20 leading-relaxed">
            The next-generation digital ecosystem for enterprise growth. Automate workflows, secure critical architectures, and deliver excellence at scale.
         </p>

         <div className="flex flex-col sm:flex-row gap-8 w-full max-w-3xl justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-600/30 hover:bg-blue-700 transition-all flex items-center justify-center gap-4 text-xl"
            >
               Launch Dashboard
               <ArrowRight size={28} strokeWidth={3} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-12 py-6 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-colors shadow-sm text-xl flex items-center gap-4"
            >
               Watch Demo <Play size={24} fill="currentColor" />
            </motion.button>
         </div>

         {/* Hero Dashboard Preview (High Fidelity) */}
         <motion.div 
           initial={{ opacity: 0, y: 60 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 1 }}
           className="mt-12 w-full max-w-7xl aspect-[16/10] bg-white rounded-[3rem] border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-4 relative"
         >
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-pulse" />
            
            <div className="w-full h-full bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col overflow-hidden shadow-inner">
               <div className="px-10 py-6 border-b border-slate-200 flex justify-between items-center bg-white/80 backdrop-blur-sm">
                  <div className="flex gap-3">
                     <div className="w-4 h-4 rounded-full bg-slate-200" />
                     <div className="w-4 h-4 rounded-full bg-slate-200" />
                     <div className="w-4 h-4 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="w-48 h-8 bg-slate-100 rounded-lg" />
                     <div className="w-12 h-12 bg-blue-500 rounded-xl" />
                  </div>
               </div>
               <div className="flex-1 p-12 grid grid-cols-12 gap-10">
                  <div className="col-span-12 lg:col-span-8 space-y-10">
                     <div className="w-full h-64 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex items-end p-8 gap-4">
                        {[40, 70, 45, 90, 65, 80, 50, 95, 30].map((h, i) => (
                           <motion.div 
                              key={i} 
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 0.5 + (i * 0.1) }}
                              className="flex-1 bg-blue-500/10 rounded-t-xl relative group"
                           >
                              <div className="absolute inset-x-0 bottom-0 bg-blue-600 rounded-t-xl group-hover:h-full transition-all h-2" />
                           </motion.div>
                        ))}
                     </div>
                     <div className="grid grid-cols-3 gap-10">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="h-40 bg-white border border-slate-200 rounded-[2rem] shadow-sm flex flex-col justify-center p-8 space-y-4">
                              <div className="w-12 h-12 bg-slate-50 rounded-xl" />
                              <div className="w-full h-4 bg-slate-100 rounded-full" />
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-[2rem] shadow-sm p-10 space-y-10">
                     <div className="w-full h-64 bg-slate-50 rounded-2xl relative overflow-hidden flex items-center justify-center">
                        <Activity size={80} className="text-blue-200 animate-pulse" />
                     </div>
                     <div className="space-y-6">
                        <div className="w-2/3 h-5 bg-slate-100 rounded-full" />
                        <div className="space-y-4">
                           <div className="w-full h-3 bg-slate-50 rounded-full" />
                           <div className="w-full h-3 bg-slate-50 rounded-full" />
                           <div className="w-1/2 h-3 bg-slate-50 rounded-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 4. Infrastructure Matrix (Services) */}
      <section className="relative z-10 py-20 w-full bg-white border-y border-slate-200 flex flex-col items-center">
         <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col items-center space-y-12">
            <div className="text-center space-y-6">
               <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase">Architectural Excellence.</h2>
               <p className="text-xl md:text-2xl font-medium text-slate-400 max-w-3xl mx-auto italic">Precision engineering for the most demanding global projects.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
               {[
                 { title: "Global Intelligence", icon: Globe, desc: "Deploy resilient nodes across 40+ regions with optimized latency and high-tier military security." },
                 { title: "Unified Analytics", icon: BarChart3, desc: "Consolidate all enterprise data streams into a single source of truth for real-time decisioning." },
                 { title: "Zero-Trust Security", icon: ShieldCheck, desc: "Advanced encryption and automated threat detection for every byte within your digital ecosystem." },
                 { title: "Pulse Workflows", icon: Activity, desc: "High-frequency event processing that keeps your business running at the speed of modern thought." },
                 { title: "Elastic Scaling", icon: Zap, desc: "Automatically adapt your infrastructure to meet demand surges without a millisecond of downtime." },
                 { title: "User Cohesion", icon: Users, desc: "Collaborative tools designed to foster alignment and productivity across global innovation teams." },
                 { title: "Cloud Grid", icon: Cloud, desc: "Scalable cloud resources distributed across a peer-to-peer mesh for maximum redundancy." },
                 { title: "Encryption Vault", icon: Lock, desc: "Dedicated hardware security modules for protecting your most sensitive enterprise assets." },
                 { title: "Neural Processing", icon: Cpu, desc: "On-edge AI processing for real-time decision making without the latency of central servers." }
               ].map((f, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -15 }}
                    className="group p-12 bg-slate-50/50 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-600/5 transition-all flex flex-col gap-10"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-white text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                        <f.icon size={28} />
                     </div>
                     <div className="space-y-4">
                        <h3 className="text-3xl font-black text-slate-900 leading-tight">{f.title}</h3>
                        <p className="text-lg font-medium text-slate-500 leading-relaxed italic">{f.desc}</p>
                     </div>
                     <div className="pt-8 flex items-center gap-3 text-blue-600 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                        Learn_More <ChevronRight size={14} />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Telemetry & Impact (Stats) */}
      <section className="py-20 w-full px-8 md:px-24 bg-slate-50 z-10 relative flex flex-col items-center">
         <div className="max-w-7xl mx-auto space-y-12 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-b border-slate-200 pb-12">
               <div className="space-y-6 text-left">
                  <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none uppercase">Precision Impact.</h2>
                  <p className="text-xl font-bold uppercase tracking-[1em] text-blue-600/40 italic">Global Infrastructure Telemetry</p>
               </div>
               <div className="flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-slate-200 shadow-sm font-black text-sm uppercase tracking-widest text-slate-400 italic">
                  Status: <span className="text-emerald-500">Nominal_Active</span>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
               {[
                 { label: "Uptime Reliability", val: "99.999%", sub: "Enterprise SLA", icon: ShieldCheck },
                 { label: "Global Latency", val: "42ms", sub: "Edge Average", icon: Activity },
                 { label: "Data Throughput", val: "2.8PB", sub: "Weekly Metrics", icon: Database }
               ].map((m, i) => (
                  <div key={i} className="p-16 bg-white rounded-[4rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                     <div className="absolute top-0 inset-x-0 h-1 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                     <div className="flex justify-between items-start mb-12">
                        <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                           <m.icon size={28} />
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Live_Uplink</div>
                     </div>
                     <div className="space-y-4">
                        <div className="text-7xl font-black text-slate-900 tabular-nums leading-none tracking-tighter">{m.val}</div>
                        <div className="flex flex-col gap-1">
                           <div className="text-sm font-black text-slate-400 uppercase tracking-widest italic">{m.label}</div>
                           <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{m.sub}</div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Strategic Pricing */}
      <section className="py-20 px-12 md:px-24 w-full max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-12 space-y-8">
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-none uppercase">Global Plans.</h2>
            <p className="text-xl md:text-2xl font-medium text-slate-400">Architecture that grows with your ambition.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full lg:max-w-6xl">
            {[
               { tier: "Team_Pro", price: "59", desc: "For high-growth teams requiring precision tooling and refined security.", items: ["Standard Cloud Access", "12 Global Edge Nodes", "Advanced Security Vault", "Daily Performance Audits", "Team Collaboration Suite"] },
               { tier: "Enterprise_Max", price: "490", featured: true, desc: "For massive institutions demanding the absolute peak of architectural performance.", items: ["Full Spectrum Architecture", "Infinite Edge Clusters", "Dedicated Security Vaults", "Real-time Neural Audits", "24/7 Priority Support Node", "Custom White-label Ops"] }
            ].map((p, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -20 }}
                 className={`p-8 bg-white border border-slate-200 rounded-[5rem] shadow-sm group relative transition-all duration-700 overflow-hidden flex flex-col justify-between ${p.featured ? 'border-blue-100 shadow-2xl shadow-blue-600/10' : ''}`}
               >
                  {p.featured && (
                     <div className="absolute top-0 inset-x-0 h-4 bg-blue-600" />
                  )}
                  <div className="space-y-16 relative z-10">
                     <div className="flex justify-between items-center mb-16">
                        <span className="text-xl font-black uppercase tracking-[0.4em] text-slate-400">{p.tier}</span>
                        {p.featured && <div className="px-4 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-600/20">Recommended</div>}
                     </div>
                     <div className="text-center space-y-8">
                        <div className="text-5xl font-black tracking-tighter text-slate-900 leading-none">
                           <span className="text-4xl opacity-20">$</span>{p.price}
                           <span className="text-sm opacity-20 ml-4 font-black uppercase tracking-[0.5em]">/Month</span>
                        </div>
                        <p className="text-lg font-medium text-slate-400 leading-relaxed italic max-w-sm mx-auto">{p.desc}</p>
                     </div>
                     <ul className="grid grid-cols-1 gap-8 py-12 border-y border-slate-100 mx-auto w-full max-w-md">
                        {p.items.map((item, k) => (
                           <li key={k} className="flex items-center gap-6 text-sm font-black uppercase tracking-widest text-slate-600 italic">
                              <CheckCircle2 size={18} className="text-blue-600" strokeWidth={3} /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     className={`w-full py-8 ${p.featured ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-slate-900 text-white'} font-black uppercase text-xs tracking-[0.4em] rounded-2xl transition-all mt-16`}
                  >
                     Select_Plan_V4.0
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 7. Final Call to Action */}
      <section className="w-full py-20 px-12 md:px-10 bg-slate-900 text-white relative overflow-hidden text-center z-10 border-t border-slate-800">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 rounded-full blur-[200px] pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-24 relative z-10"
         >
            <h2 className="text-6xl md:text-9xl lg:text-6xl font-black tracking-tighter leading-none uppercase"> Ready to <br /> scale <span className="text-blue-500 italic">instantly</span>?</h2>
            <p className="text-xl md:text-3xl font-medium text-slate-400 max-w-4xl mx-auto leading-relaxed italic">
               Join 2,400+ forward-thinking teams operating on the Zorvia.X architectural protocol. High-fidelity infrastructure for high-vibe innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12">
               <motion.button 
                  whileHover={{ scale: 1.1 }}
                  className="px-16 py-8 bg-blue-600 text-white rounded-2xl font-black uppercase text-xl tracking-[0.3em] shadow-2xl shadow-blue-600/30 flex items-center gap-6"
               >
                  Deploy_Now <ArrowRight size={32} />
               </motion.button>
               <button className="px-16 py-8 bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-2xl font-black uppercase text-xl tracking-[0.3em] transition-all">
                  Contact_Unit
               </button>
            </div>
         </motion.div>
      </section>

      {/* 8. Modern Branded Footer */}
      <footer className="w-full p-12 md:p-10 bg-white border-t border-slate-200 flex flex-col items-center gap-12 relative z-[110] overflow-hidden text-center">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full max-w-7xl mx-auto items-start text-left relative z-10">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-4 group cursor-pointer transition-all duration-700">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-600/10 group-hover:rotate-12 transition-transform">
                     <Zap size={32} fill="currentColor" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-black text-5xl tracking-tighter uppercase text-slate-900">ZORVIA.X</span>
                     <span className="text-[10px] font-black tracking-[0.6em] text-blue-600 uppercase mt-2 italic">Precision Architecture // Global Scale</span>
                  </div>
               </div>
               <p className="max-w-2xl text-xl font-medium text-slate-500 leading-relaxed italic border-l-8 border-blue-100 pl-10 py-6">
                  The foundational architectural protocol for digital projects that demand absolute stability, precision, and sovereign performance. We build infrastructure for the global innovators.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-8 w-full">
               <div className="space-y-8">
                  <h5 className="text-xs font-black uppercase tracking-widest text-slate-900">Protocol</h5>
                  <div className="flex flex-col gap-6">
                     {['Platform', 'Solutions', 'Security', 'Enterprise'].map(item => (
                        <a key={item} href="#" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-all uppercase tracking-widest">{item}</a>
                     ))}
                  </div>
               </div>
               <div className="space-y-8">
                  <h5 className="text-xs font-black uppercase tracking-widest text-slate-900">Resources</h5>
                  <div className="flex flex-col gap-6">
                     {['Archives', 'API_Docs', 'Support', 'Status'].map(item => (
                        <a key={item} href="#" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-all uppercase tracking-widest">{item}</a>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-between items-center w-full max-w-7xl mx-auto pt-32 border-t border-slate-100 relative z-10 group">
            <div className="flex gap-10">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                     <Icon size={20} strokeWidth={2.5} />
                  </a>
               ))}
            </div>
            <div className="flex flex-col md:flex-row items-end gap-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest italic text-right">
               <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_#10b981]" />
                  <span>SYSTEM_UPTIME: 99.999%</span>
               </div>
               <span>© MMXXVI ZORVIA SYSTEMS // ALL RIGHTS PRECISION</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default ModernMockup;
