import React from 'react';
import { motion } from 'framer-motion';
import { 
  Diamond, Star, Sparkles, Anchor, ChevronDown, Award, Globe, Heart, Shield, Zap, Check, ArrowRight,
  Bookmark, Award as Trophy, Globe as World, Zap as Energy, Shield as Protection, Clock,
  Eye, Command, Grid, Box, Layers, PlayCircle, Plus, Maximize, ArrowUpRight
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ArtDecoMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#D4AF37] selection:text-black pb-0">
      
      {/* 1. Immersive Geometric Sunray Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
               <linearGradient id="rayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
               </linearGradient>
            </defs>
            {[...Array(72)].map((_, i) => (
               <line 
                 key={i}
                 x1="50" y1="100" 
                 x2={50 + Math.cos((i * 5 * Math.PI) / 180) * 150} 
                 y2={100 - Math.sin((i * 5 * Math.PI) / 180) * 150} 
                 stroke="url(#rayGradient)" 
                 strokeWidth="0.05"
               />
            ))}
         </svg>
      </div>

      {/* 2. Symmetrical Borders (Global) */}
      <div className="fixed inset-4 md:inset-10 border border-[#D4AF37]/20 pointer-events-none z-[60]" />
      <div className="fixed inset-6 md:inset-14 border-2 border-[#D4AF37]/40 pointer-events-none z-[60]" />
      
      {/* Decorative Corners */}
      {[
        "top-4 left-4 md:top-10 md:left-10 border-t-8 border-l-8",
        "top-4 right-4 md:top-10 md:right-10 border-t-8 border-r-8",
        "bottom-4 left-4 md:bottom-10 md:left-10 border-b-8 border-l-8",
        "bottom-4 right-4 md:bottom-10 md:right-10 border-b-8 border-r-8"
      ].map((pos, i) => (
        <div key={i} className={`fixed w-16 h-16 md:w-32 md:h-32 border-[#D4AF37] ${pos} z-[70]`} />
      ))}

      {/* 3. Luxury Navbar */}
      <nav className="sticky top-0 z-[100] bg-black/90 backdrop-blur-2xl border-b-2 border-[#D4AF37]/30 px-12 md:px-24 py-10 flex justify-between items-center h-28">
         <div className="flex items-center gap-12 group cursor-pointer skew-x-[-10deg]">
            <div className="relative">
               <div className="w-14 h-14 border-2 border-[#D4AF37] rotate-45 flex items-center justify-center group-hover:rotate-0 transition-transform duration-1000 bg-[#D4AF37]/5">
                  <Diamond size={32} className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-1000 shadow-[0_0_15px_#D4AF37]" strokeWidth={1} />
               </div>
               <div className="absolute inset-0 flex items-center justify-center text-[12px] font-black text-white mix-blend-difference">Z</div>
            </div>
            <div className="flex flex-col items-start leading-none pt-2">
               <span className="text-4xl font-light uppercase tracking-[0.4em] italic drop-shadow-[0_0_10px_#D4AF37] text-white">ZORVIA.LUXE</span>
               <span className="text-[9px] tracking-[1.5em] uppercase opacity-40 italic mt-1 ml-1">Prestige_MMXXVI</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[10px] font-black uppercase tracking-[0.6em] text-[#D4AF37]/60">
            {['Archives', 'Essence', 'Protocol', 'Manifesto'].map(item => (
               <a key={item} href="#" className="hover:text-white transition-all hover:scale-110 relative group px-4 py-2">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
               </a>
            ))}
         </div>

         <div className="flex items-center gap-8">
            <button className="hidden sm:block px-12 py-3 bg-[#D4AF37] text-black font-black uppercase text-[10px] tracking-[0.4em] shadow-[10px_10px_0px_white] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all border-2 border-black">
               Inquire
            </button>
            <Plus size={24} className="lg:hidden text-[#D4AF37]" />
         </div>
      </nav>

      {/* 4. Hero: The Golden Era Re-Born */}
      <section className="relative z-10 min-h-fit flex flex-col items-center justify-center p-12 md:p-48 text-center overflow-hidden">
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
           className="relative mb-32 flex flex-col items-center"
         >
            <div className="w-[2px] h-64 md:h-96 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent shadow-[0_0_30px_#D4AF37] mb-12" />
            
            <h1 className="text-8xl md:text-[16rem] lg:text-[22rem] font-light leading-[0.7] tracking-[0.1em] uppercase text-white drop-shadow-[0_10px_40px_rgba(212,175,55,0.4)]">
               TRANS <br />
               <span className="opacity-40 italic tracking-tighter lowercase mx-[-0.1em] font-normal text-[#D4AF37] mix-blend-difference">and</span> <br />
               SCEND.
            </h1>
            
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mt-20"
            >
               <Sparkles size={64} strokeWidth={0.5} className="text-[#D4AF37]" />
            </motion.div>
         </motion.div>

         <div className="max-w-6xl space-y-20 relative px-4">
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-px h-64 bg-[#D4AF37]/20 hidden lg:block" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-px h-64 bg-[#D4AF37]/20 hidden lg:block" />
            
            <p className="text-3xl md:text-6xl font-light italic leading-[1.3] uppercase tracking-[0.4em] opacity-80 text-[#D4AF37]">
               "Sovereign digital architectures inspired by the golden era of decorative structuralism. Where beauty meets power."
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-16 pt-24">
               <motion.button 
                 whileHover={{ scale: 1.05, letterSpacing: '1em', boxShadow: '0 0 50px rgba(212,175,55,0.2)' }}
                 className="px-28 py-12 bg-black border-2 border-[#D4AF37] text-[#D4AF37] font-black uppercase text-xl tracking-[0.6em] shadow-[20px_20px_0px_#D4AF37]/10 hover:bg-[#D4AF37] hover:text-black transition-all group flex items-center justify-center gap-8"
               >
                  THE_VOYAGE <ArrowRight size={32} className="group-hover:translate-x-6 transition-transform" strokeWidth={1} />
               </motion.button>
               <button className="px-28 py-12 bg-white text-black font-black uppercase text-xl tracking-[0.6em] hover:bg-[#D4AF37] transition-all border-4 border-black">
                  MANIFESTO
               </button>
            </div>
         </div>
      </section>

      {/* 5. Gilded Matrix (The Modules) */}
      <section className="relative z-10 py-64 bg-black/80 border-y-4 border-[#D4AF37]/30 backdrop-blur-3xl overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full pattern-luxury-grid opacity-10" />
         <div className="max-w-[1600px] mx-auto px-8 md:px-24 flex flex-col items-center">
            <div className="mb-48 text-center space-y-8">
               <div className="flex items-center justify-center gap-12 opacity-30">
                  <div className="h-px w-24 bg-[#D4AF37]" />
                  <Anchor size={24} strokeWidth={1} />
                  <div className="h-px w-24 bg-[#D4AF37]" />
               </div>
               <h2 className="text-7xl md:text-[12rem] font-light uppercase tracking-[0.5em] text-white drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">STRUCTURALISM.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
               {[
                  { title: "Symmetry", icon: Trophy, desc: "Perfectly balanced grid systems that command ocular respect and digital authority." },
                  { title: "Velocity", icon: Energy, desc: "High-speed rendering engines wrapped in heavy aesthetic bronze and gold." },
                  { title: "Legacy", icon: World, desc: "Immutable node networks built to sustain centuries of luxury traffic and institutional data." },
                  { title: "Sovereign", icon: Protection, desc: "Private encryption layers for the most exclusive digital institutions and high-value entities." },
                  { title: "Glamour", icon: Eye, desc: "Refined visual optics that transition light into high-fidelity user experiences." },
                  { title: "Protocol", icon: Command, desc: "Master architectures that dictate the flow of state-wide digital assets." },
                  { title: "Foundation", icon: Grid, desc: "Concrete-logic grid formations that neutralize aesthetic entropy globally." },
                  { title: "Heritage", icon: Clock, desc: "Time-tested structural patterns established in the first decade of digital eminence." }
               ].map((f, i) => (
                  <div key={i} className="p-20 border-2 border-[#D4AF37]/20 bg-black group hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-700 flex flex-col items-center gap-12 text-center hover:scale-[1.02] hover:-translate-y-4">
                     <div className="w-32 h-32 border-2 border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black hover:rotate-12 transition-all duration-1000 shadow-[10px_10px_0px_rgba(212,175,55,0.1)]">
                        <f.icon size={56} strokeWidth={0.5} />
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-4xl font-light uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-all underline underline-offset-[16px] decoration-[#D4AF37]/20">{f.title}</h3>
                        <p className="text-sm font-bold italic opacity-40 group-hover:opacity-100 transition-opacity uppercase tracking-widest leading-loose pt-4">{f.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Prestige Portfolio (Visual Showcase) */}
      <section className="py-64 px-8 md:px-24 bg-[#0A0A0A] relative z-10 overflow-hidden">
         <div className="max-w-7xl mx-auto space-y-48">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 pb-16 border-b border-[#D4AF37]/20">
               <div className="space-y-6">
                  <span className="text-[11px] font-black uppercase tracking-[1.5em] text-[#D4AF37] italic">The Reserve Collection</span>
                  <h2 className="text-7xl md:text-[10rem] font-light text-white uppercase italic tracking-[0.2em] leading-none">ARCHIVES.</h2>
               </div>
               <p className="max-w-md text-[10px] font-black uppercase tracking-[0.5em] opacity-40 leading-relaxed text-right italic">Bespoke digital estates curated for the world's most distinguished institutions. Historical excellence MMXX-MMXXVI.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
               {[
                 { t: "THE_PALACE", d: "High Intensity Retail Protocol", img: "https://images.unsplash.com/photo-1541339904944-67295240c497?auto=format&fit=crop&q=80&w=1200" },
                 { t: "GOLDEN_GATE", d: "Sovereign Network Gateway", img: "https://images.unsplash.com/photo-1518005020251-6fb101cc9a31?auto=format&fit=crop&q=80&w=1200" }
               ].map((p, i) => (
                  <div key={i} className="group relative overflow-hidden border-2 border-[#D4AF37]/10 aspect-[4/3] cursor-pointer">
                     <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-1000 z-10" />
                     <img src={p.img} alt={p.t} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" />
                     <div className="absolute inset-x-0 bottom-0 p-12 z-20 space-y-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                        <div className="text-4xl font-light text-white tracking-[0.4em] uppercase">{p.t}</div>
                        <div className="flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.8em] text-[#D4AF37] opacity-60">
                           {p.d} <ArrowUpRight size={20} strokeWidth={1} />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 7. Elite Subscriptions (Participation) */}
      <section className="py-64 px-8 md:px-24 bg-white/5 border-y-2 border-[#D4AF37]/20 relative z-10">
         <div className="max-w-[1400px] mx-auto flex flex-col items-center">
            <div className="text-center space-y-12 mb-48">
               <Diamond size={48} className="mx-auto opacity-30 animate-pulse" strokeWidth={1} />
               <h2 className="text-7xl md:text-[14rem] font-light text-white uppercase tracking-[0.4em] leading-none text-shadow-xl">THE_INDEX.</h2>
               <p className="text-[12px] font-black uppercase tracking-[1.5em] opacity-40 italic">Participation Tiers // Institutional Tiers</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full lg:max-w-6xl">
               {[
                  { tier: "VOL. 01 (SILVER)", price: "2,500", icon: Trophy, features: ["Limited Grid Vault", "Standard Luxury Support", "Static Asset Mining", "Nightly Signals", "Exclusive Archive Access"] },
                  { tier: "VOL. 02 (GOLD)", price: "8,500", featured: true, icon: Award, features: ["Unlimited Grid Access", "Direct Concierge Uplink", "Source Code Ownership", "Global Mesh Status", "Institutional Identity", "Private Key Logistics"] }
               ].map((p, i) => (
                  <div key={i} className={`p-24 border-2 transition-all duration-1000 flex flex-col gap-16 ${p.featured ? 'border-[#D4AF37] bg-[#D4AF37]/5 shadow-[50px_50px_0px_rgba(212,175,55,0.1)]' : 'border-[#D4AF37]/10 bg-black shadow-[50px_50px_0px_rgba(0,0,0,0.5)]'}`}>
                     <div className="flex justify-between items-center pb-8 border-b border-[#D4AF37]/10">
                        <p className="text-[12px] font-black uppercase tracking-[0.8em] opacity-40 italic" style={{ color: p.featured ? '#D4AF37' : 'inherit' }}>{p.tier}</p>
                        <p.icon size={40} className={p.featured ? "text-[#D4AF37]" : "text-white/20"} strokeWidth={0.5} />
                     </div>
                     <div className="text-8xl md:text-[12rem] font-light text-white tracking-tighter italic">
                        <span className="text-2xl font-bold opacity-30 text-[#D4AF37]">$</span>{p.price}
                        <span className="text-xs font-black uppercase tracking-[0.4em] opacity-10 ml-6 not-italic">/unit</span>
                     </div>
                     <div className="w-24 h-[1px] bg-[#D4AF37]/40 my-8" />
                     <ul className="space-y-8 pb-16 flex-grow">
                        {p.features.map(f => (
                           <li key={f} className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.6em] opacity-40 hover:opacity-100 transition-opacity italic">
                              <Check size={24} className="text-[#D4AF37]" strokeWidth={4} /> {f}
                           </li>
                        ))}
                     </ul>
                     <button className={`w-full py-12 font-black uppercase tracking-[0.8em] text-xs transition-all duration-700 h-20 flex items-center justify-center border-4 ${p.featured ? 'bg-[#D4AF37] text-black border-white shadow-[15px_15px_0px_white] hover:shadow-none hover:translate-x-4 hover:translate-y-4' : 'bg-transparent text-[#D4AF37] border-[#D4AF37] opacity-60 hover:opacity-100 hover:bg-[#D4AF37] hover:text-black'}`}>
                        Acquire_Key
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Global Presence (The Network) */}
      <section className="py-64 px-12 md:px-32 relative z-10 bg-black overflow-hidden border-b-2 border-[#D4AF37]/30">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-32">
            <div className="space-y-16 max-w-xl">
               <span className="text-[11px] font-black uppercase tracking-[1em] text-[#D4AF37] italic">Global Distribution</span>
               <h2 className="text-7xl md:text-9xl font-light text-white uppercase italic tracking-[0.2em] leading-none">THE_MESH.</h2>
               <p className="text-2xl font-light italic leading-loose text-white/40 uppercase tracking-[0.2em]">
                  A world-spanning grid of dedicated luxury nodes ensuring 100% architectural uptime and institutional signal strength across all sovereign territories.
               </p>
               <div className="flex gap-12 pt-8">
                  <div className="px-8 py-3 bg-white/5 border border-[#D4AF37]/30 text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">LATENCY: 1.2MS</div>
                  <div className="px-8 py-3 bg-white/5 border border-[#D4AF37]/30 text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">NODES: 4,800</div>
               </div>
            </div>
            
            <div className="relative w-full lg:w-[600px] aspect-square flex items-center justify-center">
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-[2px] border-[#D4AF37]/10 rounded-full"
               />
               <motion.div
                 animate={{ rotate: -360 }}
                 transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-12 border-[2px] border-[#D4AF37]/20 rounded-full border-dashed"
               />
               <World size={300} strokeWidth={0.5} className="text-[#D4AF37] opacity-60 drop-shadow-[0_0_50px_rgba(212,175,55,0.5)]" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-ping" />
            </div>
         </div>
      </section>

      {/* 9. Final Assertion (The Inquiry) */}
      <footer className="p-12 md:p-48 bg-black border-t-[40px] border-black flex flex-col items-center gap-48 text-center text-[#D4AF37] relative z-20">
         <div className="flex flex-col items-center gap-24 group">
            <div className="w-72 h-72 border-4 border-[#D4AF37] flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-1000 cursor-pointer shadow-[30px_30px_0px_rgba(212,175,55,0.1)] bg-[#D4AF37]/5 relative">
               <Diamond size={150} strokeWidth={0.5} className="drop-shadow-[0_0_40px_#D4AF37] group-hover:scale-125 transition-transform duration-1000" />
               <Sparkles size={40} className="absolute top-4 right-4 animate-pulse" />
            </div>
            <div className="space-y-12">
               <h3 className="text-8xl md:text-[16rem] font-light uppercase tracking-[0.1em] text-white italic leading-none drop-shadow-2xl">ZORVIA.LUXE</h3>
               <p className="text-[12px] font-black tracking-[2em] uppercase opacity-30 italic">High Fidelity Systems Institutionalized // ARCHIVED MMXXVI</p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-24 w-full md:max-w-6xl text-[11px] font-black uppercase tracking-[0.8em] opacity-40">
            {['Archives', 'Manifesto', 'Glossary', 'Protocols', 'Galleries', 'Security', 'Inquiry', 'Legal'].map(item => (
                <a key={item} href="#" className="hover:text-white transition-all hover:scale-110 hover:tracking-[1.2em] relative group py-4">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
            ))}
         </div>

         <div className="flex flex-wrap gap-12 pt-32 border-t-2 border-[#D4AF37]/10 w-full max-w-5xl justify-center items-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-32 h-32 border-2 border-[#D4AF37]/40 flex items-center justify-center hover:bg-[#D4AF37] hover:text-black hover:-translate-y-8 transition-all duration-700 shadow-[15px_15px_0px_rgba(212,175,55,0.05)] bg-black">
                  <Icon size={48} strokeWidth={2} />
               </a>
            ))}
         </div>

         <div className="pt-32 flex flex-col md:flex-row justify-between w-full max-w-screen-2xl items-center gap-16 text-[14px] font-black uppercase tracking-[1.5em] opacity-20 italic bg-white/5 py-12 px-24 border-2 border-[#D4AF37]/10">
            <span>© MMXXVI ZORVIA LUXURY PROTOCOLS // ALL RIGHTS RESERVED</span>
            <div className="flex gap-16 items-center">
               <span>STATUS: EMINENT</span>
               <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
               <span>NETWORK: GOLD_MIRROR</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .pattern-luxury-grid {
          background-image: radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0);
          background-size: 60px 60px;
        }
      `}} />
    </div>
  );
};

export default ArtDecoMockup;
