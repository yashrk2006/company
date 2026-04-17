import React from 'react';
import { motion } from 'framer-motion';
import { 
  Hexagon, Activity, Wallet, ArrowDownUp, ShieldAlert, BarChart2, 
  Repeat, Globe, Zap, Cpu, Lock, Layers, Send, Share2,
  ChevronRight, Star, CheckCircle2, ShieldCheck, Database,
  ArrowUpRight, Plus, ExternalLink
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const Web3Mockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#030712] text-white font-mono selection:bg-[#F59E0B] selection:text-black flex flex-col pt-0">
      
      {/* 1. Global Neon Grid Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0" style={{ backgroundImage: 'radial-gradient(circle at center, #F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* 2. Glowing Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[100%] h-[100%] bg-[#F59E0B]/5 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[30%] -left-[20%] w-[120%] h-[120%] bg-blue-600/10 rounded-full blur-[180px]" 
        />
      </div>

      {/* 3. Decentralized Navbar */}
      <nav className="sticky top-6 z-[100] mx-6 md:mx-12 bg-white/5 backdrop-blur-3xl border border-white/10 px-8 py-5 flex justify-between items-center rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 bg-[#F59E0B]/20 border border-[#F59E0B]/40 rounded-2xl flex items-center justify-center text-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
               <Hexagon size={32} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-tight">
               <span className="text-2xl font-black tracking-widest text-white">ZRV.FI</span>
               <span className="text-[9px] font-bold text-[#F59E0B] opacity-60 uppercase tracking-[0.5em] animate-pulse">WEB3 INFRASTRUCTURE</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-12 text-xs font-black uppercase tracking-[0.4em] text-slate-400">
            {['Infras', 'Governance', 'Vaults', 'DAO'].map((item, i) => (
               <a key={item} href="#" className={`${i === 0 ? 'text-[#F59E0B] border-b border-[#F59E0B]' : 'hover:text-white'} pb-1 transition-all`}>
                  {item}
               </a>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-4 px-6 py-2.5 bg-black/40 border border-white/5 rounded-2xl text-[11px] font-bold text-[#03DAC6]">
               <Activity size={12} className="text-green-500" />
               <span className="opacity-80">Network Stable</span>
            </div>
            <button className="flex items-center gap-3 px-8 py-3 bg-[#F59E0B] text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
               <Wallet size={16} /> 0x48f...2A
            </button>
         </div>
      </nav>

      {/* 4. Hero Section (The Protocol) */}
      <section className="relative z-10 pt-32 pb-12 px-12 md:px-24 flex flex-col items-center text-center max-w-7xl mx-auto min-h-[100dvh]">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-16"
         >
            <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.6em] text-[#F59E0B] border border-[#F59E0B]/30 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
               <Cpu size={14} className="animate-spin-slow" />
               Global Protocol
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.8] tracking-tighter text-white">
               Decentralized <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-orange-400">Infrastructure.</span>
            </h1>

            <p className="text-xl md:text-3xl font-bold leading-relaxed max-w-4xl mx-auto text-slate-400 uppercase tracking-tighter italic">
               The ultimate liquidity layer for decentralized enterprise governance. High-fidelity infrastructure for sovereign node clusters worldwide.
            </p>

            <div className="flex flex-wrap justify-center gap-10">
               <motion.button 
                 whileHover={{ scale: 1.05, y: -4 }}
                 className="px-16 py-8 bg-[#F59E0B] text-black rounded-2xl font-black text-sm uppercase tracking-[0.4em] shadow-[0_20px_50px_rgba(245,158,11,0.2)] hover:bg-white transition-all flex items-center gap-4"
               >
                  Explore Ecosystem <ChevronRight size={20} strokeWidth={3} />
               </motion.button>
               <button className="px-16 py-8 bg-white/5 border-2 border-white/10 text-white rounded-2xl font-black text-sm uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all">
                  Documentation
               </button>
            </div>
         </motion.div>
      </section>

      {/* 5. Network Visualization (The Data Layer) */}
      <section className="relative z-10 py-16 px-8 md:px-24 bg-black/40 border-y border-white/5 backdrop-blur-sm">
         <div className="max-w-7xl mx-auto space-y-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end pb-16 border-b border-white/10">
               <div className="space-y-8">
                  <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#F59E0B]">Network Capacity</span>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-none italic">The_Grid.</h2>
               </div>
               <div className="flex gap-12 justify-end">
                  {[
                     { val: "$2.4B", label: "TOTAL_TVL" },
                     { val: "420M", label: "VOL_24H" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-2 border-r-2 border-[#F59E0B] pr-8 text-right">
                        <div className="text-4xl md:text-6xl font-black italic tracking-tighter tabular-nums text-white">{s.val}</div>
                        <div className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-widest">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Node_Sync", icon: Cpu, color: "text-[#F59E0B]", desc: "Distributed synchronization across regional data centers for zero-latency execution." },
                  { title: "Vault_Armor", icon: Lock, color: "text-blue-500", desc: "Military-grade encryption for enterprise-level institutional liquidity custody." },
                  { title: "Pulse_Telemetry", icon: Activity, color: "text-green-500", desc: "Real-time monitoring of protocol health and transactional velocity." },
                  { title: "Yield_Engine", icon: Zap, color: "text-amber-500", desc: "Automated liquidity orchestration maximizing return cycles across chains." }
               ].map((f, i) => (
                  <div key={i} className="p-12 bg-white/5 border border-white/10 rounded-[3rem] group hover:bg-white/10 transition-all duration-700">
                     <div className={`w-20 h-20 bg-white/5 ${f.color} rounded-2xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform`}>
                        <f.icon size={36} />
                     </div>
                     <h3 className="text-3xl font-black uppercase text-white mb-6 border-b border-white/10 pb-4">{f.title}.</h3>
                     <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">{f.desc}</p>
                     <div className="mt-12 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[9px] font-black text-[#F59E0B]">GO_TO_MODULE</span>
                        <ArrowUpRight size={20} className="text-[#F59E0B]" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Sovereign Governance (Stake Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[1em] text-[#F59E0B]">Yield Allocation</span>
            <h2 className="text-6xl md:text-5xl font-black tracking-[-0.1em] text-white leading-none italic uppercase">Staking.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
            <div className="p-8 bg-white/5 border-2 border-white/10 rounded-[4rem] group hover:bg-white/10 transition-all duration-1000 flex flex-col justify-between">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#F59E0B]">L_Tier: Node Pilot</span>
                     <ShieldAlert size={28} className="opacity-20 group-hover:text-amber-500 transition-all" />
                  </div>
                  <div className="text-8xl font-black italic text-white tracking-tighter leading-none">$480k<span className="text-sm font-bold uppercase tracking-widest text-[#F59E0B] ml-6 opacity-60 not-italic">/stake</span></div>
                  <ul className="space-y-6 pt-10 border-t border-white/10">
                     {['Core Governance Vote', 'Standard Node Maintenance', 'Weekly Projections', 'Secure Storage Interface'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[12px] font-black uppercase tracking-[0.2em] text-slate-300 italic group-hover:text-white">
                           <CheckCircle2 size={24} className="text-[#F59E0B]" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-8 bg-white/10 border border-white/20 text-white font-black uppercase text-xs tracking-[0.5em] rounded-3xl hover:bg-[#F59E0B] hover:text-black transition-all mt-10">Select Staking_V1</button>
               </div>
            </div>

            <div className="p-16 bg-[#F59E0B] text-black rounded-[4rem] flex flex-col gap-12 relative overflow-hidden group shadow-[0_40px_100px_rgba(245,158,11,0.2)] scale-105 z-20">
               <div className="absolute top-0 right-0 p-12 opacity-20 scale-150 rotate-[-15deg] group-hover:rotate-0 transition-transform duration-[2s]">
                  <Hexagon size={300} strokeWidth={8} />
               </div>
               <div className="space-y-16 relative z-10 text-center">
                  <div className="flex justify-between items-center">
                     <div className="px-6 py-2 bg-black text-[#F59E0B] rounded-full text-[10px] font-black uppercase tracking-widest">Sovereign Authority</div>
                     <Star size={24} className="text-black fill-black animate-pulse" />
                  </div>
                  <div className="text-9xl font-black italic tracking-tighter leading-none text-black">$2.4M<span className="text-xs font-black uppercase tracking-[1em] text-white ml-6 not-italic">/pool</span></div>
                  <p className="text-xs font-black uppercase tracking-[0.4em] leading-loose opacity-60 italic max-w-sm mx-auto">Full governance rights over the Zorvia global liquidity pool. Reserved for high-trust institutional node pilots and sovereign wealth clusters.</p>
                  <ul className="space-y-6 pt-8 border-t border-black/20">
                     {['Veto Governance Power', 'Unlimited Node Clusters', '24/7 Priority In-Chain Support', 'Custom LP Logic Systems', 'Direct Core Protocol Access'].map(item => (
                        <li key={item} className="flex items-center justify-center gap-6 text-[12px] font-black uppercase tracking-widest text-black/90">
                           <CheckCircle2 size={24} className="text-black" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-10 bg-black text-white font-black uppercase text-xl tracking-[0.5em] rounded-[2.5rem] shadow-2xl hover:bg-white hover:text-black hover:scale-105 transition-all mt-12 relative z-10">Purchase Authority</button>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Decentralized Footer */}
      <footer className="p-12 md:p-40 bg-black border-t-2 border-white/5 flex flex-col items-center gap-10 relative z-10">
         <div className="absolute bottom-0 right-0 p-40 opacity-[0.03] pointer-events-none rotate-12">
            <Globe size={400} strokeWidth={1} />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-8 group cursor-pointer">
                  <div className="w-24 h-24 bg-white/5 border border-white/20 rounded-[2rem] flex items-center justify-center text-[#F59E0B] shadow-[0_0_40px_rgba(245,158,11,0.1)] group-hover:border-[#F59E0B] transition-all">
                     <Hexagon size={64} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-6xl font-black text-white tracking-tighter uppercase italic leading-none">zorv.fi</h4>
                     <p className="text-[11px] font-black tracking-[1.5em] text-[#F59E0B] uppercase italic opacity-40">Decentralized Governance // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-black uppercase tracking-[0.3em] text-slate-500 leading-loose border-l-4 border-[#F59E0B]/50 pl-10 italic">Securing the decentralized era through modular infrastructure and sovereign logic. We build the layers that breathe on-chain.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-white uppercase tracking-[0.5em] italic">PROTOCOLS</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Node_Map</a>
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Staking_Rules</a>
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Governance_Log</a>
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Treasury_Report</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-white uppercase tracking-[0.5em] italic">SOCIETY</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] italic leading-none">
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Privacy_Chain</a>
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Tokenomic_Specs</a>
                  <a href="#" className="hover:text-[#F59E0B] transition-all">Field_Rep</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-16 pt-32 border-t-2 border-white/10 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-500 hover:bg-[#F59E0B] hover:text-black hover:-translate-y-2 transition-all shadow-xl">
                  <Icon size={32} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-white/20 uppercase tracking-[1em] italic leading-loose">
            <span>© MMXXVI ZORVIA DECENTRALIZED PROTOCOL</span>
            <div className="flex gap-12">
               <span>Fully On-Chain</span>
               <Activity size={12} className="text-green-500" />
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Web3Mockup;
