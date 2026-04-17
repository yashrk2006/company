import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutGrid, Database, Server, Settings, Search, Bell, ChevronDown, 
  List, Filter, Shield, Globe, Cpu, BarChart, Users, Check, ArrowRight,
  Lock, Zap, Cloud, Smartphone
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const EnterpriseMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-slate-50 text-slate-800 font-sans selection:bg-slate-800 selection:text-white flex flex-col">
      
      {/* 1. Global Navigation */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-slate-200 px-6 md:px-12 py-4 flex justify-between items-center shadow-sm">
         <div className="flex items-center gap-12">
            <div className="flex items-center gap-2 font-black text-slate-900 tracking-tighter text-xl">
               <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
                  <LayoutGrid size={18} />
               </div>
               ZORVIA.ENTERPRISE
            </div>
            
            <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-500">
               {['Solutions', 'Infrastructure', 'Security', 'Pricing', 'Resources'].map(item => (
                 <a key={item} href="#" className="hover:text-slate-900 transition-colors">{item}</a>
               ))}
            </div>
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 text-slate-400">
               <Search size={18} className="hover:text-slate-900 cursor-pointer" />
               <div className="w-px h-6 bg-slate-200" />
               <Bell size={18} className="hover:text-slate-900 cursor-pointer" />
            </div>
            <button className="px-6 py-2.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded hover:bg-slate-800 transition-colors">
               Portal Login
            </button>
         </div>
      </nav>

      {/* 2. Hero Section: Strategic Systems */}
      <section className="relative bg-white pt-24 pb-32 px-6 md:px-12 overflow-hidden border-b border-slate-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
               <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-100 border border-slate-200 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  <Shield size={12} className="text-slate-900" />
                  SLA-BACKED PERFORMANCE
               </div>
               
               <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.95] uppercase">
                  Precision <br />
                  <span className="text-slate-400">Engineering.</span> <br />
                  Global Scale.
               </h1>
               
               <p className="text-lg text-slate-500 font-medium max-w-xl leading-relaxed">
                  Institutionalizing digital architectures for high-growth enterprises. Resilient, secure, and fully automated infrastructure for the modern era.
               </p>

               <div className="flex flex-wrap gap-4 pt-4">
                  <button className="px-10 py-4 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest rounded shadow-xl hover:shadow-slate-200 hover:translate-y-[-2px] transition-all flex items-center gap-4">
                     Request Proposal
                     <ArrowRight size={16} />
                  </button>
                  <button className="px-10 py-4 bg-white border border-slate-200 text-slate-900 font-bold uppercase text-xs tracking-widest rounded hover:bg-slate-50 transition-all">
                     View Case Studies
                  </button>
               </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
               <div className="bg-white border border-slate-200 rounded-xl shadow-2xl p-4 overflow-hidden">
                  <div className="h-8 border-b border-slate-100 flex items-center gap-2 mb-4 px-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                     <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                     <div className="col-span-1 space-y-4">
                        <div className="h-32 bg-slate-50 rounded-lg animate-pulse" />
                        <div className="h-24 bg-slate-50 rounded-lg" />
                     </div>
                     <div className="col-span-3 space-y-4">
                        <div className="h-12 bg-slate-900 rounded-lg" />
                        <div className="grid grid-cols-2 gap-4">
                           <div className="h-44 bg-slate-50 rounded-lg" />
                           <div className="h-44 bg-slate-100 rounded-lg flex flex-col justify-end p-6">
                              <BarChart className="text-slate-900 mb-4" size={40} />
                              <div className="h-2 w-full bg-slate-200 rounded mb-2" />
                              <div className="h-2 w-2/3 bg-slate-200 rounded" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Decorative badge */}
               <div className="absolute -bottom-8 -right-8 bg-white p-6 border border-slate-200 rounded-2xl shadow-xl flex items-center gap-4 hidden md:flex">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                     <Check size={24} />
                  </div>
                  <div>
                     <div className="text-xs font-bold uppercase text-slate-400">System Status</div>
                     <div className="text-xl font-black text-slate-900">100% OPERATIONAL</div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>

      {/* 3. Trusted By Section */}
      <section className="py-16 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
         <div className="max-w-7xl mx-auto">
            <div className="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-12">Powering Global Frontrunners</div>
            <div className="flex flex-wrap justify-center gap-16 md:gap-10 opacity-30 grayscale hover:grayscale-0 transition-all">
               {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                 <div key={i} className="flex items-center gap-3">
                    <Icon size={32} />
                    <span className="font-black tracking-tighter text-xl">ENTERPRISE_{i+1}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Core System Modules */}
      <section className="py-32 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="mb-24 space-y-4">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">Infrastructure <br/> Modules.</h2>
               <div className="w-24 h-1.5 bg-slate-900" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Systema_Logistics", icon: Database, desc: "High-throughput data orchestration for complex global supply chains." },
                  { title: "Defensa_Guard", icon: Shield, desc: "Bank-grade encryption protocols with zero-trust architecture at the core." },
                  { title: "Nodus_Compute", icon: Cpu, desc: "Distributed edge computing designed for millisecond-latency demands." },
                  { title: "Gnosis_Analytics", icon: BarChart, desc: "Real-time institutional intelligence processed through neural engines." }
               ].map((f, i) => (
                  <div key={i} className="p-10 border border-slate-100 hover:border-slate-300 hover:shadow-2xl hover:translate-y-[-8px] bg-white transition-all group">
                     <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                        <f.icon size={28} strokeWidth={1.5} />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{f.title}</h3>
                     <p className="text-sm text-slate-500 font-medium leading-relaxed">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Metrics Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 pattern-max-dots opacity-5" />
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-12">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase">Validated <br/> Performance.</h2>
               <div className="grid grid-cols-2 gap-12">
                  <div>
                     <div className="text-5xl font-black mb-2 tabular-nums text-slate-300">99.99%</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Uptime Reliability</div>
                  </div>
                  <div>
                     <div className="text-5xl font-black mb-2 tabular-nums text-slate-300">256-BIT</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">AES Institutional Grade</div>
                  </div>
                  <div>
                     <div className="text-5xl font-black mb-2 tabular-nums text-slate-300">12ms</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Avg Global Latency</div>
                  </div>
                  <div>
                     <div className="text-5xl font-black mb-2 tabular-nums text-slate-300">1.2B+</div>
                     <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Packets Daily</div>
                  </div>
               </div>
            </div>
            <div className="p-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
               <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
                     <Users size={24} />
                  </div>
                  <div>
                     <div className="text-base font-bold">CTO, Global Logistics</div>
                     <div className="text-xs opacity-40 uppercase tracking-widest">Client Testimonial</div>
                  </div>
               </div>
               <p className="text-2xl font-medium leading-relaxed italic text-slate-300">
                  "Zorvia's enterprise architecture didn't just solve our scaling issues—it completely redefined our strategic capabilities."
               </p>
            </div>
         </div>
      </section>

      {/* 6. Institutional Tiers */}
      <section className="py-32 px-6 md:px-12 bg-white">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-24 space-y-4">
               <span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">Institutional Licensing</span>
               <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase">Scalable Flow.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
               <div className="p-12 border border-slate-100 flex flex-col justify-between hover:shadow-2xl transition-all">
                  <div>
                     <div className="flex justify-between items-center mb-12">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Division Tier</span>
                        <Server size={24} className="text-slate-200" />
                     </div>
                     <div className="text-6xl font-black text-slate-900 tracking-tighter mb-8">$1,200<span className="text-xs text-slate-400 normal-case ml-2">/month</span></div>
                     <ul className="space-y-5 mb-12">
                        {['Standard Cluster Management', 'Uptime monitoring', 'Email support', '3 Internal modules'].map(item => (
                           <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                              <Check size={16} className="text-slate-900" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <button className="w-full py-4 border border-slate-900 text-slate-900 font-bold uppercase text-[11px] tracking-widest hover:bg-slate-900 hover:text-white transition-all">Select Model</button>
               </div>

               <div className="p-12 bg-slate-900 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
                     <LayoutGrid size={200} />
                  </div>
                  <div>
                     <div className="flex justify-between items-center mb-12 relative z-10">
                        <div className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[8px] font-black uppercase tracking-[0.3em]">Institutional Standard</div>
                        <Globe size={24} className="text-white/20" />
                     </div>
                     <div className="text-6xl font-black tracking-tighter mb-8 relative z-10">$4,800<span className="text-xs text-white/40 normal-case ml-2">/month</span></div>
                     <ul className="space-y-5 mb-12 relative z-10">
                        {['Full Enterprise Mesh', 'SLA-backed 99.99%', 'Priority 24/7 Response', 'Unlimited module access', 'Custom AI integration'].map(item => (
                           <li key={item} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                              <Check size={16} className="text-white" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <button className="w-full py-4 bg-white text-slate-900 font-bold uppercase text-[11px] tracking-widest relative z-10 hover:bg-slate-100 transition-all">Deploy System</button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Corporate Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 px-6 md:px-12">
         <div className="max-w-7xl mx-auto flex flex-col gap-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
               <div className="lg:col-span-1 space-y-8">
                  <div className="flex items-center gap-2 font-black text-slate-900 tracking-tighter text-2xl">
                     <div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white">
                        <LayoutGrid size={22} />
                     </div>
                     ZORVIA
                  </div>
                  <p className="text-xs font-medium text-slate-500 leading-relaxed uppercase tracking-wider">
                     Strategic digital architecture for organizations at scale. Providing the infrastructure of tomorrow, today.
                  </p>
               </div>
               
               <div className="space-y-8">
                  <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Infrastructure</div>
                  <div className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <a href="#" className="hover:text-slate-900 transition-colors">Compute Nodes</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">Global DB</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">Edge Services</a>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Solutions</div>
                  <div className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <a href="#" className="hover:text-slate-900 transition-colors">Enterprise</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">Gov_Tech</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">Financial</a>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Support</div>
                  <div className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <a href="#" className="hover:text-slate-900 transition-colors">Documentation</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">v4.8 Release</a>
                     <a href="#" className="hover:text-slate-900 transition-colors">Status</a>
                  </div>
               </div>
            </div>

            <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
               <div className="flex gap-8">
                  {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 border border-slate-200 rounded flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all">
                       <Icon size={18} />
                    </a>
                  ))}
               </div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em] italic">
                  © 2026 ZORVIA SYSTEMS INSTITUTIONAL
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default EnterpriseMockup;
