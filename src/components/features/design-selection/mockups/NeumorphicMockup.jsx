import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Bell, User, Zap, Activity, Shield, Users, BarChart3, 
  ChevronRight, CheckCircle2, Star, Mail, Phone, MapPin, Globe, 
  Lock, Cpu, Layers, MousePointer2, Settings, Check, CreditCard,
  Target, Zap as ZapIcon, Radio
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const NeumorphicMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#E0E5EC] text-[#444] font-sans selection:bg-[#A3B1C6] selection:text-white pt-0">
      
      {/* 2. Soft Tactile Header */}
      <nav className="sticky top-0 z-[100] bg-[#E0E5EC]/80 backdrop-blur-md px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-500">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-12 h-12 bg-[#E0E5EC] rounded-2xl flex items-center justify-center text-[#444] shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff]">
               <Activity size={24} />
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-2xl font-black uppercase tracking-tight text-[#444]">NEU.SYSTEM</span>
               <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-40 mt-1">Institutional Archive</span>
            </div>
            
            <div className="hidden lg:flex gap-6">
               {['Explore', 'Infrastructure', 'Solutions', 'Archives'].map(item => (
                  <button key={item} className="px-6 py-2 rounded-xl bg-[#e0e0e0] text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-inner transition-all">
                     {item}
                  </button>
               ))}
            </div>
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 px-6 py-3 rounded-2xl bg-[#e0e0e0] shadow-inner w-64 border border-white/10">
               <Search size={16} className="text-slate-400" />
               <input className="bg-transparent border-none outline-none text-xs font-bold text-slate-600 w-full" placeholder="Secure Portal Search..." />
            </div>
            <button className="px-8 py-3 rounded-xl bg-[#e0e0e0] text-blue-500 font-black text-[10px] uppercase tracking-widest shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-inner">
               Portal Access
            </button>
         </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative z-10 px-8 md:px-16 pt-32 pb-12 max-w-7xl mx-auto flex flex-col items-center text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#e0e0e0] shadow-inner text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-16 border border-white/20"
         >
            <Activity size={14} className="animate-pulse" />
            Tactile Intelligence v4.8
         </motion.div>

         <h1 className="text-6xl md:text-8xl lg:text-5xl font-black text-slate-800 tracking-tighter leading-[0.85] mb-12 uppercase italic">
            Soft touch. <br />
            <span className="text-blue-500">Depp</span> Impact.
         </h1>

         <p className="text-xl md:text-3xl text-slate-500 font-bold max-w-4xl mb-24 leading-relaxed uppercase tracking-tighter transition-all hover:text-slate-600">
            The tactile interface of the future. Elegant extrusions, sophisticated shadows, and a unified aesthetic designed for high-density enterprise architecture.
         </p>

         <div className="flex flex-col md:flex-row gap-10">
            <button className="px-16 py-8 rounded-[3rem] bg-[#e0e0e0] text-blue-600 font-black uppercase tracking-[0.3em] text-xl shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-inner active:scale-95 transition-all border-2 border-white/40">
               Infiltrate Core
            </button>
            <button className="px-16 py-8 rounded-[3rem] bg-[#e0e0e0] text-slate-500 font-black uppercase tracking-[0.3em] text-xl shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] hover:shadow-inner transition-all">
               System Manual
            </button>
         </div>
      </section>

      {/* 3. Metrics Inset Panel (The Dashboard) */}
      <section className="px-8 md:px-16 pb-12">
         <div className="max-w-7xl mx-auto p-16 rounded-[5rem] bg-[#e0e0e0] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] border-4 border-white/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:rotate-12 transition-transform pointer-events-none">
               <Cpu size={500} strokeWidth={1} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
               {[
                  { label: "Daily Transactions", val: "1.2B+", icon: BarChart3, trend: "+12%" },
                  { label: "Global Nodes", val: "842", icon: Globe, trend: "STABLE" },
                  { label: "Security Vaults", val: "156", icon: Shield, trend: "LOCKED" }
               ].map((m, i) => (
                  <div key={i} className="p-12 rounded-[4rem] bg-[#e0e0e0] shadow-inner flex flex-col items-center text-center group cursor-default">
                     <div className="w-20 h-20 rounded-[2rem] bg-[#e0e0e0] flex items-center justify-center text-blue-500 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] mb-10 group-hover:shadow-inner transition-all">
                        <m.icon size={32} />
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4 italic">{m.label}</span>
                     <div className="text-6xl font-black text-slate-800 tabular-nums tracking-tighter mb-4">{m.val}</div>
                     <div className="px-4 py-1 rounded-full bg-[#e0e0e0] shadow-inner text-[9px] font-black uppercase text-blue-500 border border-white/10">
                        {m.trend}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Core Protocol Grid */}
      <section className="py-16 px-8 md:px-16 bg-[#e8e8e8] border-y border-white/20">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="flex flex-col items-center text-center space-y-8">
               <h2 className="text-5xl md:text-8xl font-black text-slate-800 tracking-[0.4em] uppercase opacity-20 italic">Architectures.</h2>
               <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-2xl uppercase tracking-tighter leading-relaxed">Every extrusion serves a purpose. Every shadow defines a path. A unified material for complex digital ecosystems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
               {[
                  { title: "Tactile Flow", icon: MousePointer2, desc: "Sensory feedback cycles designed to reduce cognitive load across high-density portals." },
                  { title: "Deep Vaults", icon: Lock, desc: "Recessed architectural layers for sensitive data preservation and elite encryption support." },
                  { title: "Resilient Mesh", icon: Layers, desc: "Highly modular system nodes that adapt to enterprise growth with seamless integrity." },
                  { title: "Neural Sync", icon: Target, desc: "AI-driven interface adjustments that predict user needs based on tactile interaction patterns." },
                  { title: "Global Uplink", icon: Radio, desc: "Standardized communication protocols for worldwide cluster synchronization under one root." },
                  { title: "Prime Command", icon: Settings, desc: "Master orchestration layer for enterprise-wide infrastructure control and telemetry." }
               ].map((f, i) => (
                  <div key={i} className="group p-14 rounded-[4rem] bg-[#e0e0e0] shadow-[20px_20px_40px_#bebebe,-20px_-20px_40px_#ffffff] hover:shadow-inner transition-all cursor-default border border-white/10">
                     <div className="w-20 h-20 rounded-[1.8rem] bg-[#e0e0e0] flex items-center justify-center text-slate-400 shadow-inner group-hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] group-hover:text-blue-500 transition-all mb-12">
                        <f.icon size={36} />
                     </div>
                     <h3 className="text-3xl font-black italic text-slate-800 mb-6 uppercase tracking-tight">{f.title}.</h3>
                     <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-widest opacity-80 italic">{f.desc}</p>
                     <div className="mt-12 flex justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-black">PROTOCOL_0{i+1}</span>
                        <ChevronRight size={20} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Inset Pricing Protocols (The Selection) */}
      <section className="py-16 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-32 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-blue-500">Resource Allocation</span>
            <h2 className="text-6xl md:text-9xl font-black text-slate-800 tracking-tighter uppercase italic leading-none">Scalable.</h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
            <div className="p-8 rounded-[5rem] bg-[#e0e0e0] shadow-inner border-[12px] border-[#e0e0e0] relative group">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 text-slate-400">
                  <Activity size={200} strokeWidth={1} />
               </div>
               <div className="space-y-16 relative z-10">
                  <div className="flex justify-between items-center">
                     <div className="px-5 py-2 rounded-xl bg-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] text-[10px] font-black uppercase tracking-widest text-slate-400">Division Tier</div>
                     <Star size={24} className="text-slate-300" />
                  </div>
                  <div className="text-8xl font-black text-slate-800 tracking-tighter leading-none italic">$800<span className="text-xs text-slate-400 normal-case ml-2 not-italic">/cycle</span></div>
                  <ul className="space-y-8">
                     {['Standard Tactile Access', 'Single Cluster Node', '99.9% Sla Response', '4 Enterprise Modules'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] italic text-slate-500">
                           <CheckCircle2 size={18} className="text-slate-400 shadow-sm" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 rounded-[2.5rem] bg-[#e0e0e0] text-slate-800 font-black uppercase text-xs tracking-[0.4em] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-inner transition-all">Submit Selection</button>
               </div>
            </div>

            <div className="p-8 rounded-[5rem] bg-[#e0e0e0] shadow-[30px_30px_60px_#bebebe,-30px_-30px_60px_#ffffff] border-[12px] border-white/20 relative group overflow-hidden">
               <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="space-y-16 relative z-10 text-center">
                  <div className="flex justify-between items-center">
                     <div className="px-6 py-2 rounded-full bg-[#e0e0e0] shadow-inner text-[9px] font-black text-blue-500 uppercase tracking-[0.6em] border border-blue-500/20">Institutional Authority</div>
                     <ZapIcon size={24} className="text-blue-500" />
                  </div>
                  <div className="text-8xl font-black text-slate-800 tracking-tighter leading-none italic">$2,400<span className="text-xs text-blue-500 ml-4 italic tracking-[0.4em] not-italic">/cycle</span></div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] leading-relaxed opacity-60 text-slate-500 italic">Full orchestration across global architectural vectors. Preferred for high-density corporate structures and sovereign infra.</p>
                  <ul className="space-y-8 pb-12">
                     {['Full Mesh Architecture', 'Institutional Authority Shield', 'Real-time Neural Sync', 'Unlimited Module Integration', 'Direct Line Access'].map(item => (
                        <li key={item} className="flex items-center justify-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">
                           <CheckCircle2 size={20} className="text-blue-500" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 rounded-[3rem] bg-blue-500 text-white font-black uppercase text-[12px] tracking-[0.6em] shadow-[15px_15px_30px_rgba(59,130,246,0.3)] hover:bg-slate-800 hover:shadow-none transition-all">Claim Authority</button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Unified Footer */}
      <footer className="p-12 md:p-40 bg-[#e0e0e0] border-t border-white/20 flex flex-col items-center gap-10 relative overflow-hidden">
         <div className="absolute inset-0 pattern-max-dots opacity-[0.03] pointer-events-none" />
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-8 group">
                  <div className="w-24 h-24 rounded-[2.5rem] bg-[#e0e0e0] flex items-center justify-center text-blue-500 shadow-[12px_12px_24px_#bebebe,-12px_-12px_24px_#ffffff] group-hover:shadow-inner transition-all">
                     <Zap size={56} fill="currentColor" fillOpacity={0.2} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-5xl font-black text-slate-800 tracking-tighter uppercase italic leading-none">Zorvia.Neu</h4>
                     <p className="text-[11px] font-black tracking-[1em] text-slate-400 uppercase italic">Institutional Tactility // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-bold uppercase italic tracking-[0.3em] text-slate-400 leading-loose border-l-4 border-white/20 pl-8">Soft digital architecture for the sovereign enterprise. Designing the future with tactile precision and architectural integrity.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-800 uppercase tracking-[0.5em] italic">VECTORS</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic">
                  <a href="#" className="hover:text-blue-500 transition-all">Infrastructures</a>
                  <a href="#" className="hover:text-blue-500 transition-all">Nodes_Store</a>
                  <a href="#" className="hover:text-blue-500 transition-all">Archive_Log</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-800 uppercase tracking-[0.5em] italic">AUTHORITY</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic">
                  <a href="#" className="hover:text-blue-500 transition-all">Privacy_Code</a>
                  <a href="#" className="hover:text-blue-500 transition-all">Security_Docs</a>
                  <a href="#" className="hover:text-blue-500 transition-all">Field_Support</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-12 pt-32 border-t border-white/20 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 rounded-3xl bg-[#e0e0e0] flex items-center justify-center text-slate-400 shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] hover:shadow-inner hover:text-blue-500 transition-all group">
                  <Icon size={32} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-12 text-[10px] font-black text-slate-400 uppercase tracking-[1em] italic leading-loose opacity-40">
            <span>© MMXXVI ZORVIA NEUMORPHIC SYSTEMS</span>
            <span>BUILT WITH TACTILE PRECISION</span>
         </div>
      </footer>
    </div>
  );
};

export default NeumorphicMockup;
