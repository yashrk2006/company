import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, PenTool, Search, Archive, Bookmark, Scroll, Library,
  Globe, Heart, Star, Anchor, Navigation, Shield, Zap,
  ChevronDown, ArrowUpRight, Check, Waves, Trees, Tent,
  Feather, Compass, GraduationCap, Microscope, Coffee, Plus
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const AcademiaMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#FDFCF7] text-[#2C2C2C] font-serif selection:bg-[#4A5D4E] selection:text-white pt-0">
      
      {/* 1. Global Texture Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      </div>

      {/* 2. Classical Header */}
      <nav className="sticky top-0 z-[100] bg-[#FDFCF7]/90 backdrop-blur-md border-b border-[#2C2C2C]/10 px-8 md:px-16 py-8 flex justify-between items-center transition-all duration-700">
         <div className="flex items-center gap-12 group cursor-pointer">
            <div className="flex flex-col leading-tight">
               <span className="text-3xl font-extralight tracking-[0.2em] uppercase text-[#2C2C2C]">Academia</span>
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40">Institute Archive</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
            {['Archives', 'Treatises', 'The Lexicon', 'Curriculum'].map(item => (
              <a key={item} href="#" className="hover:opacity-100 hover:text-[#8B4513] transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#8B4513] group-hover:w-full transition-all duration-500" />
              </a>
            ))}
         </div>

         <div className="flex items-center gap-10">
            <button className="hidden sm:flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">
               <Search size={16} />
               <span>Ref_Search</span>
            </button>
            <button className="px-10 py-4 bg-[#2C241E] text-[#FDFBF7] text-[10px] font-black uppercase tracking-[0.3em] shadow-[6px_6px_0px_#8B4513] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
               Apply for Folio
            </button>
         </div>
      </nav>

      {/* 4. Hero Section (The Thesis) */}
      <section className="relative z-10 p-12 lg:p-40 flex flex-col items-center text-center max-w-7xl mx-auto min-h-fit">
         <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="space-y-16"
         >
            <div className="inline-flex items-center gap-4 text-[#8B4513] italic border-b border-[#8B4513]/20 pb-2">
               <Scroll size={20} className="animate-pulse" />
               <span className="text-sm tracking-widest uppercase font-medium">Vol. VII: On Sovereign Architectures</span>
            </div>

            <h1 className="text-7xl md:text-[9rem] lg:text-6xl font-bold leading-[0.85] tracking-tighter text-[#2C241E]">
               Intellectual <br />
               Authority in the <br />
               <span className="italic font-light serif text-[#8B4513] underline underline-offset-[20px] decoration-[#8B4513]/10">Sovereign Era.</span>
            </h1>

            <div className="flex flex-col md:flex-row gap-12 items-center justify-center pt-8">
               <div className="w-20 h-px bg-[#2C241E]/20" />
               <p className="max-w-2xl text-2xl md:text-3xl font-medium italic leading-relaxed opacity-70 text-[#2C241E]">
                 "The preservation of knowledge is not merely an archival task, but a reconstructive digital protocol. We build architectures that endure the erosion of digital time."
               </p>
               <div className="w-20 h-px bg-[#2C241E]/20" />
            </div>

            <div className="flex flex-wrap justify-center gap-12 pt-12 relative">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 className="px-16 py-8 bg-[#2C241E] text-[#FDFBF7] text-xs font-black uppercase tracking-[0.5em] shadow-[12px_12px_0px_rgba(44,36,30,0.1)] hover:shadow-none transition-all"
               >
                  Infiltrate Lexicon
               </motion.button>
               <button className="flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em] group italic hover:text-[#8B4513] transition-colors">
                  Current Treatises
                  <Feather size={24} className="group-hover:rotate-45 transition-transform duration-700" />
               </button>
               <div className="absolute -right-32 top-0 opacity-10 rotate-12 pointer-events-none">
                  <PenTool size={180} />
               </div>
            </div>
         </motion.div>
      </section>

      {/* 5. Manuscript Modules (Features) */}
      <section className="relative z-10 py-16 px-12 md:px-10 bg-[#2C241E]/[0.02] border-y border-[#2C241E]/5">
         <div className="max-w-7xl mx-auto space-y-40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-b border-[#2C241E]/10 pb-20">
               <div className="space-y-8">
                  <span className="text-[11px] font-black uppercase tracking-[0.6em] text-[#8B4513]">Scholarly Systems</span>
                  <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-[#2C241E]">The Archives.</h2>
               </div>
               <p className="text-xl font-medium italic opacity-50 leading-loose max-w-lg">
                  Every module is a documented thesis. We treat digital components as preserved manuscripts—built to be cited, tested, and timeless.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
               {[
                  { title: "Archeology_Node", icon: Archive, label: "REF_01", desc: "Digital excavation protocols for recovering lost logic and legacy architectures." },
                  { title: "Scriptorium_Core", icon: BookOpen, label: "REF_02", desc: "High-density editorial suite for the curation of enterprise-grade content assets." },
                  { title: "Logic_Hermeneutics", icon: Compass, label: "REF_03", desc: "Interpretive algorithms that align business vectors with classical strategic ethics." },
                  { title: "Thesis_Engine", icon: GraduationCap, label: "REF_04", desc: "Automated peer-review cycles for validating code integrity and structural resilience." },
                  { title: "Empirical_Vibe", icon: Microscope, label: "REF_05", desc: "Systematic observation of user interaction patterns through a classical lens." },
                  { title: "Epoch_Anchor", icon: Anchor, label: "REF_06", desc: "Distributed ledger protocols that anchor digital identity across vast temporal spans." }
               ].map((f, i) => (
                  <div key={i} className="group p-14 bg-[#FDFBF7] border border-[#2C241E]/10 flex flex-col gap-10 hover:shadow-[20px_20px_40px_rgba(44,36,30,0.03)] transition-all duration-700 relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                        <f.icon size={140} strokeWidth={1} />
                     </div>
                     <div className="flex justify-between items-center text-[10px] font-black text-[#8B4513] uppercase tracking-[0.4em]">
                        <span>{f.label}</span>
                        <div className="w-12 h-px bg-[#8B4513]/20" />
                     </div>
                     <h3 className="text-4xl font-bold text-[#2C241E] group-hover:text-[#8B4513] transition-colors uppercase tracking-tighter italic">{f.title}.</h3>
                     <p className="text-sm font-medium italic opacity-60 leading-relaxed uppercase tracking-widest">{f.desc}</p>
                     <div className="pt-10 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.6em] opacity-30 group-hover:opacity-100 transition-all">
                        <span>CONSULT MANUAL</span>
                        <ArrowUpRight size={18} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Scholar Performance (Metrics) */}
      <section className="py-16 px-12 md:px-10 bg-[#2C241E] text-[#FDFBF7] relative overflow-hidden z-10">
         <div className="absolute top-0 right-0 p-40 opacity-[0.03] pointer-events-none">
            <Library size={700} strokeWidth={1} />
         </div>
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
               {[
                  { val: "1.4k", label: "CITATIONS_INDEX" },
                  { val: "VII", label: "ACTIVE_VOLUMES" },
                  { val: "100%", label: "HERITAGE_SYNC" },
                  { val: "92", label: "SCHOLAR_NODES" }
               ].map((m, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-12 border border-[#FDFBF7]/10 rounded-[2rem] hover:bg-[#FDFBF7]/5 transition-colors">
                     <div className="text-7xl font-bold tracking-tighter italic text-[#8B4513] mb-6">{m.val}</div>
                     <div className="text-[10px] font-black uppercase tracking-[0.6em] opacity-40">{m.label}</div>
                  </div>
               ))}
            </div>
            
            <div className="mt-40 max-w-4xl p-16 border-l-4 border-[#8B4513] bg-[#FDFBF7]/5 italic text-3xl md:text-5xl font-light opacity-60 leading-relaxed uppercase tracking-tight text-center">
               "Authority is built through the accumulation of reasoned architectures. We do not haste; we endure."
            </div>
         </div>
      </section>

      {/* 7. The Scholar Tiers (Pricing) */}
      <section className="py-16 px-12 md:px-10 max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-40 space-y-8">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] text-[#8B4513]">Allocated Scholarships</span>
            <h2 className="text-6xl md:text-5xl font-bold tracking-tighter text-[#2C241E] uppercase italic leading-none">Curriculum.</h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-5xl">
            <div className="p-8 bg-[#FDFBF7] border border-[#2C241E]/10 flex flex-col gap-16 group hover:shadow-[40px_40px_0px_rgba(44,36,30,0.02)] transition-all duration-1000">
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.4em] text-[#8B4513]">
                  <span>Tier_I: Undergrad</span>
                  <Coffee size={24} className="opacity-20 group-hover:rotate-12 transition-transform" />
               </div>
               <div className="text-8xl font-bold italic text-[#2C241E] tracking-tighter leading-none">$280<span className="text-sm font-black uppercase tracking-[0.3em] opacity-30 ml-4 not-italic">/annum</span></div>
               <p className="text-sm font-medium italic opacity-60 leading-relaxed border-l border-[#2C241E]/20 pl-6 uppercase tracking-widest">Foundational access to the digital scriptorium. Perfect for early-stage institutional architectures.</p>
               <ul className="space-y-6 pt-6">
                  {['Great Library Access', 'Core Node Integration', 'Weekly Folio Updates', 'Standard Citation Help'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.2em] text-[#2C241E]/70 italic">
                        <Check size={18} strokeWidth={4} className="text-[#8B4513]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 border-2 border-[#2C241E] text-[#2C241E] font-black uppercase text-[11px] tracking-[0.4em] hover:bg-[#2C241E] hover:text-[#FDFBF7] transition-all mt-8 shadow-sm">Commit to Thesis</button>
            </div>

            <div className="p-8 bg-[#2C241E] text-[#FDFBF7] border-4 border-[#8B4513]/30 flex flex-col gap-16 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-[-20deg] group-hover:rotate-0 transition-transform duration-[2s]">
                  <Scroll size={300} strokeWidth={1} />
               </div>
               <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-[#8B4513] relative z-10">
                  <span className="px-5 py-2 border border-[#8B4513]/40">Tier_II: Doctorate</span>
                  <Star size={24} className="text-[#8B4513] animate-pulse" />
               </div>
               <div className="text-8xl font-bold italic tracking-tighter leading-none relative z-10 text-[#FDFBF7]">$1,400<span className="text-sm font-black uppercase tracking-[0.3em] text-[#8B4513] ml-4 not-italic font-serif">/annum</span></div>
               <p className="text-xs font-medium italic opacity-40 leading-loose uppercase tracking-[0.3em] relative z-10">Absolute authority over the Zorvia global archive. Sovereign governance for planetary-scale institutions.</p>
               <ul className="space-y-6 pt-6 relative z-10">
                  {['Full Scriptorium Control', 'Unlimited Archive Storage', 'Priority Thesis Review', 'Direct Line to the Scriptor', 'Neural Archive Sync'].map(item => (
                     <li key={item} className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#FDFBF7]/80">
                        <Plus size={18} className="text-[#8B4513]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-[#8B4513] text-[#FDFBF7] font-black uppercase text-[12px] tracking-[0.6em] shadow-[10px_10px_30px_rgba(139,69,19,0.3)] hover:bg-[#FDFBF7] hover:text-[#2C241E] transition-all mt-8 relative z-10">Claim the Chair</button>
            </div>
         </div>
      </section>

      {/* 8. Antique Footer */}
      <footer className="p-12 md:p-40 bg-[#F2EDE4] border-t border-[#2C241E]/10 flex flex-col items-center gap-10 relative z-10">
         <div className="absolute top-0 left-0 p-10 opacity-[0.02] pointer-events-none rotate-12">
            <Archive size={400} strokeWidth={1} />
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full max-w-7xl">
            <div className="lg:col-span-2 space-y-12">
               <div className="flex items-center gap-10 group">
                  <div className="w-24 h-24 rounded-full border-4 border-[#2C241E]/5 flex items-center justify-center text-[#2C241E] shadow-inner group-hover:border-[#8B4513]/20 transition-all duration-1000">
                     <Library size={64} strokeWidth={1} className="opacity-40 group-hover:opacity-100" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-5xl font-bold text-[#2C241E] tracking-tighter uppercase italic leading-none">The Academy</h4>
                     <p className="text-[11px] font-black tracking-[1em] text-[#8B4513] uppercase italic">Est. MCMXXVI // Zorvia Systems</p>
                  </div>
               </div>
               <p className="max-w-md text-sm font-medium uppercase italic tracking-[0.3em] text-[#2C241E]/40 leading-loose border-l-2 border-[#2C241E]/10 pl-10">Cultural and architectural preservation in a decentralized era. We honor the heritage of thought through the precision of logic.</p>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-[#2C241E] uppercase tracking-[0.5em] italic">THE_ARCHIVES</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-[#2C241E]/50 uppercase tracking-[0.4em] italic">
                  <a href="#" className="hover:text-[#8B4513] transition-all">Folio_Catalog</a>
                  <a href="#" className="hover:text-[#8B4513] transition-all">Manuscript_Map</a>
                  <a href="#" className="hover:text-[#8B4513] transition-all">Index_General</a>
               </div>
            </div>

            <div className="space-y-10">
               <div className="text-[11px] font-black text-[#2C241E] uppercase tracking-[0.5em] italic">HERITAGE</div>
               <div className="flex flex-col gap-6 text-[10px] font-black text-[#2C241E]/50 uppercase tracking-[0.4em] italic">
                  <a href="#" className="hover:text-[#8B4513] transition-all">Privacy_Treatise</a>
                  <a href="#" className="hover:text-[#8B4513] transition-all">Legal_Lexicon</a>
                  <a href="#" className="hover:text-[#8B4513] transition-all">Support_Hall</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-16 pt-32 border-t border-[#2C241E]/5 w-full max-w-7xl relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-16 h-16 border border-[#2C241E]/10 rounded-full flex items-center justify-center text-[#2C241E]/20 hover:text-[#8B4513] hover:border-[#8B4513]/50 transition-all font-serif italic">
                  <Icon size={24} strokeWidth={1} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-16 text-[10px] font-black text-[#2C241E]/20 uppercase tracking-[1em] italic leading-loose">
            <span>© MCMXXVI Zorvia Academy of Digital Thought</span>
            <div className="flex gap-10">
               <span>Pecunia Non Olet</span>
               <PenTool size={12} />
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,700;1,400&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-handwritten { font-family: 'Dancing Script', cursive; }
      `}} />
    </div>
  );
};

export default AcademiaMockup;
