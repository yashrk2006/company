import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Activity, BarChart3, Globe, Zap, Users, ShieldCheck, ChevronRight, Bell, Search, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../../../ui/Icons';

const ModernMockup = ({ theme }) => {
  const primary = theme.styles.primary || '#3b82f6';
  
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-slate-50 font-sans selection:bg-primary/20 pb-4">
      {/* 1. Subtle Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      {/* 2. SaaS Header */}
      <nav className="sticky top-0 z-[100] px-6 md:px-12 py-4 bg-white/80 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
         <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
               <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <Zap size={20} fill="currentColor" />
               </div>
               <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">ZORVIA.X</span>
            </div>
            <div className="hidden lg:flex gap-10 text-sm font-bold text-slate-500">
               {['Platform', 'Solutions', 'Enterprise', 'Security', 'Company'].map(item => (
                 <a key={item} href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                    {item}
                    {item === 'Solutions' && <ChevronRight size={12} className="rotate-90" />}
                 </a>
               ))}
            </div>
         </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-400 border border-slate-200 focus-within:bg-white focus-within:border-primary/50 transition-all">
               <Search size={16} />
               <input className="bg-transparent border-none outline-none text-xs w-32 font-medium text-slate-900" placeholder="Search..." />
            </div>
            <button className="px-6 py-2.5 bg-slate-900 text-white font-bold rounded-xl text-sm hover:bg-primary transition-all shadow-lg shadow-slate-900/10">Get Started</button>
          </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-10 px-6 md:px-16 pt-24 pb-4 max-w-7xl mx-auto flex flex-col items-center text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-10 border border-primary/20 shadow-sm"
         >
            <Sparkles size={14} className="animate-pulse" />
            v4.0 Update: Unified Intelligence Engine
         </motion.div>

         <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-10">
            Scale your vision <br />
            with <span className="text-primary italic">global</span> precision.
         </h1>

         <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mb-16 leading-relaxed">
            The next-generation digital ecosystem for enterprise growth. Automate workflows, secure architectures, and deliver excellence at scale.
         </p>

         <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-12 py-5 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-transform flex items-center justify-center gap-4 text-lg">
               Launch Dashboard
               <ArrowRight size={22} strokeWidth={3} />
            </button>
            <button className="px-12 py-5 bg-white border border-slate-200 text-slate-900 font-black rounded-2xl hover:bg-slate-50 transition-colors shadow-sm text-lg">
               Watch Demo
            </button>
         </div>

         {/* Hero Dashboard Preview */}
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3 }}
           className="mt-32 w-full aspect-[16/9] bg-white rounded-[3rem] border border-slate-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-4 md:p-8"
         >
            <div className="w-full h-full bg-slate-50 rounded-[2rem] border border-slate-100 flex flex-col overflow-hidden">
               <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white/50">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-slate-200" />
                     <div className="w-3 h-3 rounded-full bg-slate-200" />
                     <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex gap-4">
                     <div className="w-32 h-6 bg-slate-200 rounded-full" />
                     <div className="w-10 h-6 bg-slate-200 rounded-full" />
                  </div>
               </div>
               <div className="flex-1 p-8 grid grid-cols-12 gap-8">
                  <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
                     <div className="w-full h-48 bg-white border border-slate-200 rounded-3xl" />
                     <div className="grid grid-cols-2 gap-8">
                        <div className="h-32 bg-white border border-slate-200 rounded-3xl" />
                        <div className="h-32 bg-white border border-slate-200 rounded-3xl" />
                     </div>
                  </div>
                  <div className="col-span-12 lg:col-span-4 space-y-8">
                     <div className="w-full h-full bg-white border border-slate-200 rounded-3xl" />
                  </div>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 4. Strategic Features */}
      <section className="relative z-10 py-48 bg-white border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { title: "Global Intelligence", icon: Globe, desc: "Deploy resilient nodes across 40+ regions with optimized latency and high-tier security protocols." },
              { title: "Unified Analytics", icon: BarChart3, desc: "Consolidate all enterprise data streams into a single source of truth for real-time decision making." },
              { title: "Zero-Trust Security", icon: ShieldCheck, desc: "Military-grade encryption and automated threat detection for every byte within your ecosystem." },
              { title: "Pulse Workflows", icon: Activity, desc: "High-frequency event processing that keeps your business running at the speed of thought." },
              { title: "Elastic Scaling", icon: Zap, desc: "Automatically adapt your infrastructure to meet demand surges without a millisecond of downtime." },
              { title: "User Cohesion", icon: Users, desc: "Collaborative tools designed to foster alignment and productivity across global teams." }
            ].map((f, i) => (
               <div key={i} className="group p-10 rounded-[2.5rem] hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center mb-8 shadow-sm">
                     <f.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{f.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 5. Metrics & Impact */}
      <section className="py-48 px-6 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center space-y-6 mb-32">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Live Performance Metrics</span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">Impact at scale.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full">
            {[
              { label: "Uptime Reliability", val: "99.998%", suffix: "Global Avg" },
              { label: "Deployment Speed", val: "< 0.4s", suffix: "Instant Edge" },
              { label: "Data Processed", val: "1.2 PB", suffix: "Weekly Throughput" }
            ].map((m, i) => (
               <div key={i} className="text-center p-12 bg-white rounded-[3rem] border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 inset-x-0 h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{m.label}</div>
                  <div className="text-6xl md:text-7xl font-black text-slate-900 tabular-nums mb-4">{m.val}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{m.suffix}</div>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Pricing Plans */}
      <section className="py-48 bg-slate-100 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center">
             <div className="text-center mb-24 space-y-6">
               <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">Strategic plans.</h2>
               <p className="text-xl text-slate-500 font-medium">Choose the architecture that matches your ambition.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
               <div className="bg-white p-16 rounded-[4rem] border border-slate-200 shadow-sm space-y-12 group hover:-translate-y-2 transition-transform">
                  <div className="space-y-6">
                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Team Edition</span>
                     <div className="text-8xl font-black text-slate-900 tracking-tighter leading-none">$490<span className="text-sm opacity-30 ml-4 font-bold uppercase tracking-widest mt-auto">/mo</span></div>
                  </div>
                  <ul className="space-y-6 pt-10 border-t border-slate-100">
                     {['Standard Cloud Access', '5 Regional Nodes', 'Basic Security Protocols', 'Daily System Audits'].map(feat => (
                        <li key={feat} className="flex items-center gap-4 text-slate-500 font-semibold group-hover:text-slate-900 transition-colors">
                           <CheckCircle2 size={24} className="text-primary opacity-40 group-hover:opacity-100" />
                           {feat}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-slate-100 text-slate-900 font-black uppercase text-sm tracking-widest rounded-3xl hover:bg-slate-900 hover:text-white transition-all shadow-md">Deploy Standard</button>
               </div>

               <div className="bg-primary p-16 rounded-[4rem] text-white shadow-2xl shadow-primary/30 space-y-12 relative overflow-hidden group hover:-translate-y-2 transition-transform">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                     <Zap size={200} fill="currentColor" />
                  </div>
                  <div className="space-y-6 relative z-10">
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60 italic">Enterprise Max</span>
                     <div className="text-8xl font-black tracking-tighter leading-none">$2.4k<span className="text-sm opacity-40 ml-4 font-black uppercase tracking-widest">/mo</span></div>
                  </div>
                  <ul className="space-y-6 pt-10 border-t border-white/10 relative z-10">
                     {['Full System Architecture', 'Global Node Cluster', 'Elite Security Vault', 'Real-time Neural Audits', 'VIP Support Node'].map(feat => (
                        <li key={feat} className="flex items-center gap-4 font-bold opacity-80 group-hover:opacity-100 transition-opacity">
                           <CheckCircle2 size={24} className="text-white" fill="white" fillOpacity={0.2} />
                           {feat}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-white text-primary font-black uppercase text-sm tracking-widest rounded-3xl hover:scale-105 transition-transform shadow-2xl shadow-white/10 relative z-10">Initialize Enterprise</button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. SaaS Footer */}
      <footer className="relative z-10 p-12 md:p-32 bg-white flex flex-col items-center text-center gap-24">
         <div className="flex flex-col items-center gap-8 group">
            <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-primary/20 group-hover:rotate-12 transition-transform">
               <Zap size={40} fill="currentColor" />
            </div>
            <div className="space-y-4">
               <h4 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Zorvia.X</h4>
               <p className="text-xs font-black tracking-[0.8em] text-slate-300 italic uppercase">Enterprise Innovation Engine // MMXXVI</p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-24 flex-wrap max-w-5xl w-full text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            {['Platform', 'Solutions', 'Security', 'Company', 'Archives', 'API', 'Docs', 'Support'].map(item => (
                <a key={item} href="#" className="hover:text-primary transition-colors">{item}</a>
            ))}
         </div>

         <div className="flex gap-10 pt-20 border-t border-slate-100 w-full max-w-4xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                  <Icon size={20} strokeWidth={2.5} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-10 text-[10px] font-bold text-slate-300 gap-8">
            <div className="flex gap-8 uppercase tracking-widest">
               <span>© 2026 ZORVIA SYSTEMS</span>
               <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-slate-900 transition-colors">Terms of Work</a>
            </div>
            <div className="flex gap-8 uppercase tracking-widest">
               <span>Status: Nominal</span>
               <span>Cluster: 0x48-Ind</span>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default ModernMockup;
