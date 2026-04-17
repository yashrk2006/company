import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Plus, Search, Menu, MoreVertical, Heart, Share2, 
  MessageCircle, BarChart3, Database, Globe, Shield, Zap,
  ChevronRight, Star, Settings, Check, Bell, User, Clock,
  Smartphone, Monitor, CreditCard
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MaterialMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#F3F4F6] text-slate-800 font-sans selection:bg-[#6200EE] selection:text-white flex flex-col">
      {/* 1. Top App Bar (Institutional Header) */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 w-full h-20 bg-[#6200EE] text-white flex justify-between items-center px-8 z-[100] shadow-lg"
      >
         <div className="flex items-center gap-6">
            <motion.button whileTap={{ scale: 0.9 }} className="p-3 rounded-full hover:bg-white/10 transition-colors">
               <Menu size={28} />
            </motion.button>
            <div className="flex flex-col leading-none">
               <span className="text-2xl font-bold tracking-tight">ZORVIA MATERIAL</span>
               <span className="text-[10px] font-medium tracking-widest opacity-60 mt-1 uppercase">Adaptive Design System v3.0</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-widest opacity-60">
            {['Components', 'Theming', 'Guidelines', 'Resources'].map(item => (
               <a key={item} href="#" className="hover:opacity-100 hover:text-[#03DAC6] transition-all">{item}</a>
            ))}
         </div>

         <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 px-6 py-2 bg-white/10 rounded-full w-64">
               <Search size={18} className="opacity-60" />
               <input className="bg-transparent border-none outline-none text-xs font-medium text-white placeholder:text-white/40 w-full" placeholder="Search system docs..." />
            </div>
            <motion.button whileTap={{ scale: 0.9 }} className="p-3 rounded-full hover:bg-white/10 transition-colors">
               <Bell size={24} />
            </motion.button>
            <div className="w-10 h-10 rounded-full bg-[#03DAC6] flex items-center justify-center text-slate-900 border-2 border-white/20 shadow-sm cursor-pointer">
               <User size={20} />
            </div>
         </div>
      </motion.nav>

      {/* 2. Hero Section (Inspiration) */}
      <section className="relative z-10 min-h-fit flex flex-col items-center justify-center p-12 lg:p-40 text-center bg-[#6200EE] text-white overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="max-w-5xl space-y-12 relative z-10"
         >
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 rounded-full text-[11px] font-black uppercase tracking-widest border border-white/20">
               <Zap size={14} className="text-[#03DAC6]" />
               Material Design Foundations
            </div>

            <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-none">
               Surfaces with <br />
               <span className="text-[#03DAC6]">Purpose.</span>
            </h1>

            <p className="text-xl md:text-3xl font-medium leading-relaxed max-w-3xl opacity-70 mx-auto">
               A visual language that synthesizes classical design principles with technological innovation. Motion that feels natural, depth that informs, and color that inspires.
            </p>

            <div className="flex flex-wrap justify-center gap-8 pt-8">
               <motion.button 
                 whileHover={{ scale: 1.05, y: -4 }}
                 className="px-12 py-6 bg-[#03DAC6] text-slate-900 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-2xl hover:bg-white transition-all flex items-center gap-3"
               >
                  Get Started
                  <ChevronRight size={18} />
               </motion.button>
               <button className="px-12 py-6 border-2 border-white/20 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                  Documentation
               </button>
            </div>
         </motion.div>
         
         {/* Decorative Floating Shapes */}
         <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#03DAC6] rounded-full blur-[120px] opacity-20" />
         <div className="absolute top-[20%] right-[-50px] w-64 h-64 bg-white rounded-full blur-[100px] opacity-10 animate-pulse" />
      </section>

      {/* 3. Surface Layers (The Core Logic) */}
      <section className="relative z-10 py-16 px-8 md:px-24 bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#6200EE]">Depth & Elevation</span>
                     <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight">Structured <br/> Materiality.</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                     Each element exists on a specific elevation layer. This z-space hierarchy creates intuitive user flows and clear informational boundaries across the entire system.
                  </p>
                  <div className="flex gap-12 pt-4">
                     {[
                        { val: "24dp", label: "MAX_ELEVATION" },
                        { val: "60fps", label: "FLUID_MOTION" },
                        { val: "All", label: "ADAPTIVE_DYNAMICS" }
                     ].map((s, i) => (
                        <div key={i} className="space-y-2">
                           <div className="text-3xl font-bold text-[#6200EE]">{s.val}</div>
                           <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{s.label}</div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                     { title: "Dynamic Themes", icon: Layers, color: "bg-blue-50", text: "text-blue-600", desc: "Adaptive color mapping that responds to environment and accessibility." },
                     { title: "Intelligent Motion", icon: Zap, color: "bg-amber-50", text: "text-amber-600", desc: "Motion defined by physics, communicating intent and continuity." },
                     { title: "Surface Logic", icon: Smartphone, color: "bg-emerald-50", text: "text-emerald-600", desc: "Consistent behavior across mobile, tablet, and desktop viewports." },
                     { title: "Unified Sync", icon: Globe, color: "bg-purple-50", text: "text-purple-600", desc: "Global asset synchronization for a perfectly aligned ecosystem." }
                  ].map((f, i) => (
                     <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <div className={`w-16 h-16 ${f.color} ${f.text} rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                           <f.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{f.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 4. Cross-Platform Dashboard (Metrics) */}
      <section className="py-16 px-12 md:px-10 bg-[#F3F4F6] z-10">
         <div className="max-w-7xl mx-auto">
            <div className="p-12 md:p-8 bg-white rounded-[4rem] shadow-xl border border-white relative overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-5 pointer-events-none" />
               <div className="flex flex-col lg:flex-row justify-between items-center gap-16 relative z-10">
                  <div className="space-y-12 max-w-xl">
                     <div className="space-y-4">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#6200EE]">Real-time Health</span>
                        <h2 className="text-5xl font-bold text-slate-900">System Telemetry.</h2>
                     </div>
                     <p className="text-slate-500 leading-relaxed">Monitoring the pulse of your digital infrastructure with Material You precision. Every data point is a surface interaction.</p>
                     <div className="grid grid-cols-2 gap-12">
                        {[
                           { val: "99.9%", label: "UPTIME_STABILITY" },
                           { val: "2.4B", label: "NODE_REACTIONS" }
                        ].map((s, i) => (
                           <div key={i} className="space-y-1">
                              <div className="text-5xl font-bold text-slate-900">{s.val}</div>
                              <div className="text-[10px] font-black text-[#6200EE] uppercase tracking-[0.3em]">{s.label}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full lg:w-auto">
                     {[
                        { icon: Database, bg: "bg-indigo-50", label: "Storage" },
                        { icon: Shield, bg: "bg-orange-50", label: "Security" },
                        { icon: MessageCircle, bg: "bg-teal-50", label: "Comm_Sync" },
                        { icon: BarChart3, bg: "bg-rose-50", label: "Analytics" }
                     ].map((item, i) => (
                        <div key={i} className="aspect-square w-40 md:w-48 bg-white rounded-[3rem] shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center justify-center gap-4 transition-all hover:translate-y-[-8px]">
                           <div className={`w-16 h-16 ${item.bg} rounded-3xl flex items-center justify-center text-slate-600`}>
                              <item.icon size={28} />
                           </div>
                           <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. Adaptive Solutions (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#6200EE]">Scaling Components</span>
            <h2 className="text-6xl md:text-9xl font-bold text-slate-900 tracking-tight leading-none">Access Levels.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
            <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-700">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#6200EE]">Standard</span>
                     <Smartphone size={24} className="opacity-20" />
                  </div>
                  <div className="text-7xl font-bold text-slate-900 tracking-tighter leading-none">$480<span className="text-sm font-black uppercase tracking-widest opacity-40 ml-2">/year</span></div>
                  <ul className="space-y-6">
                     {['Core Library Access', 'Monthly Theme Packs', 'Standard Elevation Support', 'Community Sync'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-bold text-slate-600">
                           <Check size={18} className="text-[#6200EE]" strokeWidth={3} /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-6 mt-16 bg-[#F3F4F6] text-[#6200EE] font-bold uppercase text-[11px] tracking-widest rounded-2xl hover:bg-[#6200EE] hover:text-white transition-all">Select Bundle</button>
            </div>

            <div className="p-16 bg-[#6200EE] text-white rounded-[4rem] shadow-[0_40px_80px_rgba(98,0,238,0.2)] flex flex-col justify-between relative overflow-hidden group scale-105 z-20">
               <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 group-hover:rotate-12 transition-transform">
                  <Zap size={200} />
               </div>
               <div className="space-y-12 relative z-10">
                  <div className="flex justify-between items-center">
                     <span className="px-5 py-2 bg-[#03DAC6] text-slate-900 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">Institutional Premier</span>
                     <Star size={24} className="text-[#03DAC6]" strokeWidth={3} />
                  </div>
                  <div className="text-8xl font-black tracking-tighter leading-none">$1,800<span className="text-[12px] font-bold uppercase tracking-widest text-[#03DAC6] ml-4 italic">/full_sync</span></div>
                  <p className="text-sm opacity-60 leading-relaxed font-medium">Enterprise-grade institutionalization for planetary-scale applications. Full custom component engineering and direct core support.</p>
                  <ul className="space-y-6">
                     {['Custom Component Tokens', '24/7 Premium Governance', 'Unlimited Elevation Layers', 'AI-Powered Color Mapping', 'Direct Cloud Shell Access'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-white/80">
                           <Plus size={18} className="text-[#03DAC6]" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-8 mt-16 bg-white text-[#6200EE] font-bold uppercase text-[12px] tracking-[0.4em] rounded-3xl shadow-2xl hover:bg-[#03DAC6] hover:text-slate-900 transition-all relative z-10">Infiltrate Prime</button>
            </div>

            <div className="p-12 bg-white rounded-[3.5rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-700">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#6200EE]">Creator</span>
                     <Monitor size={24} className="opacity-20" />
                  </div>
                  <div className="text-7xl font-bold text-slate-900 tracking-tighter leading-none">$800<span className="text-sm font-black uppercase tracking-widest opacity-40 ml-2">/year</span></div>
                  <ul className="space-y-6">
                     {['Full Design Templates', 'Priority Feature Update', 'Cross-Platform Sync', 'Advanced Motion Kit', '20GB Project Cloud'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-bold text-slate-600">
                           <Check size={18} className="text-[#6200EE]" strokeWidth={3} /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-6 mt-16 bg-[#F3F4F6] text-[#6200EE] font-bold uppercase text-[11px] tracking-widest rounded-2xl hover:bg-[#6200EE] hover:text-white transition-all">Select Bundle</button>
            </div>
         </div>
      </section>

      {/* 6. Material Footer */}
      <footer className="p-12 md:p-10 bg-white border-t border-slate-100 flex flex-col items-center gap-10 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-8 group">
                  <div className="w-24 h-24 bg-[#6200EE] text-white rounded-[2rem] flex items-center justify-center text-4xl font-bold shadow-xl transition-all group-hover:rotate-6">ZM</div>
                  <div className="space-y-4">
                     <h4 className="text-4xl font-bold text-slate-900 tracking-tight leading-none uppercase">Zorvia Material</h4>
                     <p className="text-[11px] font-black tracking-[1em] text-[#6200EE] uppercase italic opacity-40">System Core // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-medium text-slate-400 leading-loose border-l-4 border-[#6200EE]/10 pl-8">Designing digital interfaces with honesty and precision. We create surfaces that speak, motion that guides, and systems that endure.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em]">SYSTEM</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#6200EE] transition-all">Components</a>
                  <a href="#" className="hover:text-[#6200EE] transition-all">Elevation_Map</a>
                  <a href="#" className="hover:text-[#6200EE] transition-all">Color_Toning</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em]">GOVERNANCE</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#6200EE] transition-all">Accessibility</a>
                  <a href="#" className="hover:text-[#6200EE] transition-all">Legal_Terms</a>
                  <a href="#" className="hover:text-[#6200EE] transition-all">Support_Ticket</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-10 pt-20 border-t border-slate-50 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#6200EE] hover:text-white transition-all shadow-sm">
                  <Icon size={24} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-12 text-[10px] font-black text-slate-300 uppercase tracking-[1em] italic leading-loose">
            <span>© MMXXVI ZORVIA MATERIAL ARCHITECTURE</span>
            <div className="flex gap-10">
               <span>Adaptive Intelligence</span>
               <Smartphone size={12} />
            </div>
         </div>
      </footer>

      {/* 7. Persistent FAB (Quick Action) */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-12 right-12 w-20 h-20 bg-[#03DAC6] rounded-[2rem] shadow-[0_20px_40px_rgba(3,218,198,0.3)] flex items-center justify-center text-slate-900 z-[200] group overflow-hidden"
      >
         <Plus size={32} strokeWidth={3} className="relative z-10" />
         <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-0" />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .pattern-grid-lg { background-image: radial-gradient(circle, #000 1px, transparent 1px); background-size: 24px 24px; }
      `}} />
    </div>
  );
};

export default MaterialMockup;
