import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, Building, ChevronRight, BarChart3, Users, FileText,
  Shield, Globe, Database, Zap, ArrowRight, CheckCircle2,
  PieChart, Activity, Clock, Lock, Check,
  MapPin, Phone, Mail, Award, Download, Star
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ProfessionalMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#3B82F6] selection:text-white pt-0">
      
      {/* 2. Professional Navbar */}
      <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 px-8 md:px-16 py-5 flex justify-between items-center transition-all duration-500 shadow-sm">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-10 h-10 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
               <Briefcase size={20} />
            </div>
            <div className="flex flex-col leading-none">
               <span className="text-2xl font-black uppercase tracking-tight text-[#0F172A]">PROFESSIONAL.SYS</span>
               <span className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-40 mt-1">Enterprise Archive</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-10 text-sm font-semibold text-slate-500">
            {['Solutions', 'Industries', 'Insights', 'Global Operations', 'Investor Relations'].map((item, i) => (
               <a key={item} href="#" className={`${i === 0 ? 'text-[#1E40AF] border-b-2 border-[#1E40AF]' : 'hover:text-[#1E40AF]'} pb-1 transition-all`}>
                  {item}
               </a>
            ))}
         </div>

         <div className="flex items-center gap-6">
            <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-[#1E40AF] transition-colors">
               Client Portal
            </button>
            <button className="px-8 py-3 bg-[#1E40AF] text-white rounded-lg font-bold text-sm shadow-lg hover:bg-blue-800 hover:scale-105 transition-all">
               Contact Advisory
            </button>
         </div>
      </nav>

      {/* 2. Hero Section (Authority) */}
      <section className="relative z-10 pt-32 pb-12 px-8 md:px-16 flex flex-col items-center text-center max-w-7xl mx-auto min-h-fit">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="space-y-12"
         >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-50 text-[#1E40AF] rounded-full text-[11px] font-bold uppercase tracking-widest border border-blue-100 shadow-sm">
               <Briefcase size={14} /> 
               Building Institutional Resiliency
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05]">
               Operationalizing <br />
               <span className="text-[#1E40AF]">The Next Decade.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
               A high-trust, production-grade architecture designed for scalability, security, and consistent global performance across the enterprise landscape.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
               <button className="px-12 py-5 bg-[#1E40AF] text-white rounded-xl font-bold text-lg shadow-[0_20px_40px_rgba(30,64,175,0.2)] hover:bg-blue-800 hover:translate-y-[-4px] transition-all flex items-center gap-3">
                  Our Methodology <ArrowRight size={20} />
               </button>
               <button className="px-12 py-5 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-bold text-lg hover:border-[#1E40AF] hover:text-[#1E40AF] transition-all">
                  Request Portfolio
               </button>
            </div>
         </motion.div>

         {/* Trust Bar */}
         <div className="mt-32 w-full pt-16 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
            {['FORBES', 'BLOOMBERG', 'REUTERS', 'FINANCIAL TIMES', 'TECHCRUNCH', 'WIRED'].map(brand => (
               <span key={brand} className="text-sm font-black tracking-[0.3em]">{brand}</span>
            ))}
         </div>
      </section>

      {/* 3. High-Trust Solutions (Features Grid) */}
      <section className="relative z-10 py-16 px-12 md:px-10 bg-white border-y border-slate-200">
         <div className="max-w-7xl mx-auto space-y-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end pb-16 border-b border-slate-100">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1E40AF]">Global Practice</span>
                  <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-none">Institutional <br/> Competence.</h2>
               </div>
               <p className="text-xl text-slate-500 leading-relaxed font-medium">
                  We specialize in the rapid institutionalization of growth-stage enterprises through standardized logic, secure infrastructure, and predictive analytics.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                  { title: "Strategic Risk", icon: Shield, desc: "Predictive threat modeling and mitigation protocols for high-stakes enterprise environments." },
                  { title: "Market Intelligence", icon: BarChart3, desc: "Real-time data orchestration for informed executive decision making on a global scale." },
                  { title: "Infrastructure", icon: Building, desc: "Building resilient physical and digital foundations for decentralized workforce operations." },
                  { title: "Secured Nodes", icon: Database, desc: "Distributed ledger security ensuring absolute data integrity and compliance across jurisdictions." },
                  { title: "Global Expansion", icon: Globe, desc: "Seamless cross-border advisory for entering emerging markets with localized operational logic." },
                  { title: "Prime Velocity", icon: Zap, desc: "Accelerating project delivery cycles through institutionalized process optimization." }
               ].map((f, i) => (
                  <div key={i} className="group p-12 bg-[#F8FAFC] border border-slate-100 rounded-2xl hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                     <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#1E40AF] mb-8 group-hover:scale-110 transition-transform">
                        <f.icon size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}.</h3>
                     <p className="text-slate-500 leading-relaxed font-medium mb-8">{f.desc}</p>
                     <div className="flex items-center gap-2 text-sm font-bold text-[#1E40AF] opacity-0 group-hover:opacity-100 transition-opacity">
                        View Practice Area <ArrowRight size={16} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. Performance Metrics (Dashboard Visual) */}
      <section className="py-16 px-12 md:px-10 bg-slate-900 text-white relative overflow-hidden z-10">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/micro-carbon.png')] opacity-30 pointer-events-none" />
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
            <div className="space-y-16 max-w-xl">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-400">System Telemetry</span>
                  <h2 className="text-6xl font-bold tracking-tight leading-none">Measured <br/> Confidence.</h2>
               </div>
               <p className="text-slate-300 text-lg leading-relaxed font-medium">Monitoring global asset performance with millisecond precision. Our dashboard provides a unified view of your structural health.</p>
               <div className="grid grid-cols-2 gap-12 pt-8">
                  {[
                     { val: "99.98%", label: "OPERATIONAL_STABILITY" },
                     { val: "140+", label: "INSTITUTIONS_SYNCED" },
                     { val: "$4.2B", label: "ASSETS_SECURED" },
                     { val: "24/7", label: "ACTIVE_ADVISORY" }
                  ].map((s, i) => (
                     <div key={i} className="space-y-2 border-l-2 border-blue-900 pl-6">
                        <div className="text-5xl font-bold tracking-tighter">{s.val}</div>
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">{s.label}</div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="p-16 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-md w-full lg:w-auto relative group">
               <div className="grid grid-cols-2 gap-8">
                  {[
                     { label: "Equity Yield", val: "+14.2%", icon: PieChart },
                     { label: "Risk Index", val: "L-Alpha", icon: Activity },
                     { label: "Audit Log", val: "CLEAN", icon: FileText },
                     { label: "Uptime", val: "NOMINAL", icon: Clock }
                  ].map((m, i) => (
                     <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-default">
                        <m.icon size={28} className="text-blue-400 mb-6" />
                        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{m.label}</div>
                        <div className="text-2xl font-bold tracking-tight">{m.val}</div>
                     </div>
                  ))}
               </div>
               <div className="mt-12 p-6 bg-blue-600 rounded-xl flex items-center justify-between group-hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold uppercase tracking-widest">Full Executive Report</span>
                  <Download size={18} />
               </div>
            </div>
         </div>
      </section>

      {/* 5. Advisory Membership (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#1E40AF]">Partnership Structuring</span>
            <h2 className="text-6xl md:text-9xl font-bold text-slate-900 tracking-tight leading-none">Advisory Tiers.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
            <div className="p-12 bg-white border border-slate-200 rounded-3xl flex flex-col justify-between hover:shadow-2xl transition-all duration-700">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1E40AF]">Standard Advisory</span>
                     <Award size={24} className="opacity-20" />
                  </div>
                  <div className="text-7xl font-bold text-slate-900 tracking-tighter leading-none">$2k<span className="text-sm font-black uppercase tracking-widest opacity-40 ml-2">/mo</span></div>
                  <ul className="space-y-6 border-y border-slate-100 py-8">
                     {['Core Strategy Audit', 'Monthly Insights Report', 'Standard Risk Modeling', 'Email Advisory Support'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-bold text-slate-600">
                           <CheckCircle2 size={18} className="text-blue-600" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-5 border-2 border-[#1E40AF] text-[#1E40AF] font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-[#1E40AF] hover:text-white transition-all">Begin Consultation</button>
            </div>

            <div className="p-16 bg-white border-4 border-[#1E40AF] rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group scale-105 z-20">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 group-hover:rotate-12 transition-transform">
                  <Building size={200} />
               </div>
               <div className="space-y-12 relative z-10">
                  <div className="flex justify-between items-center">
                     <span className="px-5 py-2 bg-[#1E40AF] text-white rounded-lg text-[10px] font-black uppercase tracking-widest">Global Sovereign</span>
                     <Star size={24} className="text-[#1E40AF]" fill="currentColor" />
                  </div>
                  <div className="text-8xl font-black tracking-tighter leading-none text-slate-900">$12k<span className="text-[12px] font-bold uppercase tracking-widest text-[#1E40AF] ml-4">/mo_sync</span></div>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">Full institutionalization across all border vectors. Dedicated senior advisory team and sovereign infrastructure governance.</p>
                  <ul className="space-y-6 pb-2">
                     {['Global Risk Neutralization', 'Institutional Board Presence', 'Regulatory Compliance Sync', 'Cross-Border M&A Advisory', '24/7 Dedicated Support'].map(item => (
                        <li key={item} className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-slate-800">
                           <CheckCircle2 size={24} className="text-blue-600" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-8 mt-12 bg-[#1E40AF] text-white font-bold uppercase text-[12px] tracking-[0.4em] rounded-2xl shadow-xl hover:bg-slate-900 transition-all relative z-10">Claim Global Mandate</button>
            </div>

            <div className="p-12 bg-white border border-slate-200 rounded-3xl flex flex-col justify-between hover:shadow-2xl transition-all duration-700">
               <div className="space-y-12">
                  <div className="flex justify-between items-center">
                     <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#1E40AF]">Growth Advisory</span>
                     <Activity size={24} className="opacity-20" />
                  </div>
                  <div className="text-7xl font-bold text-slate-900 tracking-tighter leading-none">$5k<span className="text-sm font-black uppercase tracking-widest opacity-40 ml-2">/mo</span></div>
                  <ul className="space-y-6 border-y border-slate-100 py-8">
                     {['Advanced Market Analysis', 'Bi-Weekly Strategy Sync', 'Modular Expansion Logic', 'Direct Lead Support'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-xs font-bold text-slate-600">
                           <CheckCircle2 size={18} className="text-blue-600" /> {item}
                        </li>
                     ))}
                  </ul>
               </div>
               <button className="w-full py-5 border-2 border-[#1E40AF] text-[#1E40AF] font-bold uppercase text-[11px] tracking-widest rounded-xl hover:bg-[#1E40AF] hover:text-white transition-all">Begin Consultation</button>
            </div>
         </div>
      </section>

      {/* 6. Corporate Footer */}
      <footer className="p-12 md:p-10 bg-[#F8FAFC] border-t border-slate-200 flex flex-col items-center gap-10 relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-10 group cursor-pointer">
                  <div className="w-24 h-24 bg-[#1E40AF] rounded-2xl flex items-center justify-center text-white shadow-xl rotate-0 group-hover:rotate-6 transition-transform">
                     <Building size={56} />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-6xl font-bold text-slate-900 tracking-tighter italic leading-none">ZorviaCorp</h4>
                     <p className="text-[11px] font-black tracking-[1em] text-[#1E40AF] uppercase italic opacity-40">Global Institutional Systems // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-medium text-slate-400 leading-loose border-l-4 border-slate-200 pl-10 uppercase italic tracking-widest">Standardizing excellence across the global enterprise. We deliver stability through logic and resilience through architecture.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] italic">OUR_PRACTICES</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Advisory_Systems</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Risk_Management</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Global_Governance</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Investor_Relations</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-slate-900 uppercase tracking-[0.5em] italic">GOVERNANCE</div>
               <div className="flex flex-col gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Privacy_Policy</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Terms_of_Service</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Compliance_FAQ</a>
                  <a href="#" className="hover:text-[#1E40AF] transition-all underline underline-offset-8 decoration-slate-200">Advisory_Board</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-12 pt-24 border-t border-slate-100 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-16 h-16 border border-slate-200 rounded-full flex items-center justify-center text-slate-300 hover:text-[#1E40AF] hover:border-[#1E40AF] transition-all">
                  <Icon size={24} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-slate-300 uppercase tracking-[1em] italic leading-loose opacity-40">
            <span>© MMXXVI ZORVIA CORPORATE ADVISORY SYSTEMS</span>
            <span>DOMINION_IN_EXCELLENCE</span>
         </div>
      </footer>
    </div>
  );
};

export default ProfessionalMockup;
