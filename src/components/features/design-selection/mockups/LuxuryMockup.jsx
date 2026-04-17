import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, Star, ShieldCheck, Diamond, Sparkles, ChevronDown, Compass, 
  UserCheck, ArrowRight, Globe, Lock, Clock, Heart, Menu, X,
  Award, Anchor, Eye, Zap, Shield, Bookmark, MapPin, Share2, PhoneCall,
  Mail, ExternalLink, ArrowUpRight
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const LuxuryMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#0A0A0A] text-[#D4AF37] font-serif selection:bg-[#D4AF37] selection:text-black flex flex-col pt-0">
      
      {/* 1. Immersive Ethereal Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.1, 0.2, 0.1],
             rotate: [0, 5, 0]
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[-10%] right-[-10%] w-[1200px] h-[1200px] bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)] blur-[150px] opacity-20"
         />
         <motion.div 
           animate={{ 
             scale: [1.2, 1, 1.2],
             opacity: [0.05, 0.1, 0.05],
             rotate: [0, -5, 0]
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute bottom-[-10%] left-[-10%] w-[1000px] h-auto bg-[radial-gradient(circle,#D4AF37_0%,transparent_70%)] blur-[180px] opacity-10"
         />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
      </div>

      {/* 2. Global Prestige Header */}
      <nav className="sticky top-0 z-[100] bg-[#0A0A0A]/80 backdrop-blur-3xl border-b border-[#D4AF37]/10 px-8 md:px-24 py-10 flex justify-between items-center transition-all duration-700">
         <div className="flex items-center gap-16">
            <div className="flex flex-col items-start group cursor-pointer">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-1000">
                     <Crown size={24} strokeWidth={1} className="rotate-[-45deg] group-hover:rotate-0 transition-transform duration-1000" />
                  </div>
                  <h1 className="text-3xl font-extralight tracking-[0.4em] uppercase text-white group-hover:tracking-[0.6em] transition-all">ZORVIA</h1>
               </div>
               <span className="text-[9px] tracking-[1em] uppercase opacity-30 mt-2 ml-14">PRESTIGE · ARCHIVE</span>
            </div>
         </div>
         
         <div className="hidden lg:flex gap-16 text-[10px] font-light uppercase tracking-[0.6em] text-white/40">
            {['Archives', 'Heritage', 'Protocols', 'Concierge'].map(item => (
              <a key={item} href="#" className="hover:text-[#D4AF37] hover:tracking-[0.8em] transition-all relative group">
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-700" />
              </a>
            ))}
         </div>

         <div className="flex items-center gap-10">
            <button className="hidden sm:block px-12 py-4 border border-[#D4AF37]/30 text-[10px] font-light uppercase tracking-[0.5em] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-700 shadow-xl">
               Apply
            </button>
            <Menu size={32} className="lg:hidden cursor-pointer opacity-60 hover:opacity-100" />
         </div>
      </nav>

      {/* 3. Hero: The Sovereign Decree */}
      <section className="relative z-10 min-h-[100dvh] flex flex-col items-start justify-center p-12 lg:p-48 text-left bg-transparent">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
           className="max-w-7xl flex flex-col items-start"
         >
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="mb-12"
            >
               <Star size={56} strokeWidth={0.5} className="text-[#D4AF37]" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-9xl font-extralight tracking-[0.25em] uppercase leading-[0.8] mb-16 text-white text-shadow-xl">
              CURATED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F9E498] to-[#D4AF37] italic font-light lowercase tracking-tighter">dominion.</span>
            </h1>
            
            <div className="h-[1px] w-64 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/10 to-transparent mb-20 shadow-[0_0_20px_rgba(212,175,55,0.5)]" />

            <div className="max-w-4xl space-y-16">
               <p className="text-2xl lg:text-5xl font-extralight italic leading-[1.2] opacity-70 uppercase tracking-[0.4em] text-white">
                  "Exquisite digital architectures designed for the world's most distinguished institutions."
               </p>
               <p className="text-sm font-light uppercase tracking-[1.2em] opacity-40 italic">Reserved Access // Institutional Grade</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-16 mt-32">
               <motion.button 
                 whileHover={{ scale: 1.05, letterSpacing: '0.8em', boxShadow: '0 0 50px rgba(212,175,55,0.2)' }}
                 className="px-28 py-10 bg-black border-2 border-[#D4AF37]/40 text-[#D4AF37] text-[14px] uppercase font-light tracking-[0.5em] transition-all duration-700"
               >
                  Initialize Protocol
               </motion.button>
               <button className="px-28 py-10 bg-transparent text-white/40 hover:text-white text-[12px] uppercase font-light tracking-[0.6em] transition-all underline decoration-[#D4AF37]/20 underline-offset-8">
                  The Manifesto
               </button>
            </div>
            
            <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="flex flex-col items-center gap-6 opacity-20 mt-32"
            >
               <span className="text-[10px] uppercase tracking-[1em] font-light">The Reserve Collection</span>
               <ChevronDown size={24} strokeWidth={1} />
            </motion.div>
         </motion.div>
      </section>

      {/* 4. Heritage & Legacy (Brand Story) */}
      <section className="relative z-10 py-16 px-8 md:px-24 bg-white/5 border-y border-[#D4AF37]/10 overflow-hidden">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-auto border border-[#D4AF37]/5 rounded-full pointer-events-none" />
         <div className="max-w-7xl mx-auto flex flex-col items-center gap-8 text-center">
            <div className="space-y-4">
               <span className="text-[10px] font-light uppercase tracking-[1.2em] opacity-30 italic">Legacy Established MMXX</span>
               <h2 className="text-6xl md:text-9xl font-extralight tracking-[0.4em] text-white uppercase italic">THE_HERITAGE.</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
               <div className="text-left space-y-12 order-2 lg:order-1">
                  <h3 className="text-5xl font-light tracking-[0.2em] text-[#D4AF37] italic">Decades of digital refinement.</h3>
                  <p className="text-xl font-light italic leading-loose opacity-60 uppercase tracking-[0.2em] text-white">
                     Architecture is the first art of sovereignty. At Zorvia Prestige, we translate the structural permanence of classical monuments into the fluid velocity of the digital age. Our systems are not just functional—they are generational assets.
                  </p>
                  <div className="grid grid-cols-2 gap-12 pt-8">
                     {[
                        { val: "12", label: "Global Estates" },
                        { val: "04", label: "Protocol Rings" },
                        { val: "MMXX", label: "Founding Code" },
                        { val: "ZERO", label: "Compromise" }
                     ].map((s, i) => (
                        <div key={i} className="border-l border-[#D4AF37]/20 pl-6 py-4">
                           <div className="text-4xl font-extralight tracking-tighter text-white italic">{s.val}</div>
                           <div className="text-[10px] font-light uppercase tracking-[0.4em] opacity-40 mt-2">{s.label}</div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="relative order-1 lg:order-2 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-1000 z-10" />
                  <div className="border border-[#D4AF37]/20 p-4 transition-all duration-1000 group-hover:p-0">
                     <img 
                       src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=1200" 
                       alt="Luxury Architecture" 
                       className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                     />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-64 h-64 border border-[#D4AF37]/20 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
               </div>
            </div>
         </div>
      </section>

      {/* 5. Gilded Assets (Features Showcase) */}
      <section className="relative z-10 py-16 px-12 md:px-10 bg-transparent overflow-hidden">
         <div className="max-w-screen-2xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-12 border-b border-[#D4AF37]/20 pb-16">
               <div className="space-y-6">
                  <span className="text-[11px] font-light uppercase tracking-[1em] opacity-30 italic">Exquisite Modules</span>
                  <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.3em] text-white uppercase leading-none italic">CURATION.</h2>
               </div>
               <p className="max-w-md text-sm font-light uppercase tracking-[0.4em] leading-relaxed opacity-40 text-right">
                  Bespoke digital instruments forged for sovereign navigation and absolute asset preservation.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                  { title: "Sovereign_OS", icon: ShieldCheck, desc: "Private operating layers with military-grade encryption wrapped in silk-white aesthetics." },
                  { title: "Prism_Optics", icon: Eye, desc: "High-fidelity visual engines that render light with mathematical perfection." },
                  { title: "Compass_Sync", icon: Compass, desc: "Navigate global clusters with absolute directional stability and zero latency artifacts." },
                  { title: "Reserve_Vault", icon: Lock, desc: "Immutable storage nodes for the world's most sensitive institutional archives." },
                  { title: "Aether_Comms", icon: Zap, desc: "High-velocity communication protocols delivered through exclusive sovereign channels." },
                  { title: "Legacy_Build", icon: Anchor, desc: "Architectures designed to survive the rapid decay of digital trends and tech stacks." },
                  { title: "Elite_Social", icon: UserCheck, desc: "Private social integration for secure, verified interaction between high-value entities." },
                  { title: "Global_Mesh", icon: Globe, desc: "A world-spanning network of dedicated nodes ensuring 100% identity uptime." }
               ].map((f, i) => (
                  <div key={i} className="group p-12 border border-[#D4AF37]/5 bg-black hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-700 flex flex-col gap-10">
                     <div className="w-20 h-20 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700">
                        <f.icon size={32} strokeWidth={1} />
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-2xl font-light uppercase tracking-[0.4em] text-white group-hover:text-[#D4AF37] transition-all">{f.title}</h3>
                        <div className="w-12 h-px bg-[#D4AF37]/20 group-hover:w-full transition-all duration-1000" />
                        <p className="text-[11px] font-light uppercase tracking-[0.2em] leading-relaxed opacity-30 group-hover:opacity-60 italic">{f.desc}</p>
                     </div>
                     <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} className="text-[#D4AF37]" strokeWidth={1} />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. The Reserves (Pricing & Membership) */}
      <section className="relative z-10 py-16 px-8 md:px-24 bg-white/5 border-y border-[#D4AF37]/10">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-12 space-y-12">
               <motion.div
                 animate={{ rotate: [0, 360] }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="mx-auto"
               >
                 <Diamond size={48} strokeWidth={0.5} className="opacity-30" />
               </motion.div>
               <h2 className="text-7xl md:text-7xl font-extralight text-white tracking-[0.4em] uppercase leading-none">MEMBERSHIP.</h2>
               <p className="text-[11px] font-light uppercase tracking-[1.5em] opacity-40 italic">Participation Tiers // Sovereign Access Only</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:max-w-6xl">
               {/* Tier 1 */}
               <div className="p-8 border border-[#D4AF37]/10 bg-black group relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-20 transition-opacity duration-1000">
                     <Star size={300} strokeWidth={0.5} />
                  </div>
                  <div className="space-y-20 relative z-10">
                     <div className="flex justify-between items-center mb-12">
                        <span className="text-[10px] font-light uppercase tracking-[1em] text-[#D4AF37] italic">Estate_Tier_01</span>
                        <Crown size={24} strokeWidth={1} className="opacity-40" />
                     </div>
                     <div className="space-y-4">
                        <div className="text-5xl font-light text-white tracking-tighter leading-none italic">$2,500<span className="text-xs opacity-20 tracking-[1em] ml-12 not-italic">/annum</span></div>
                        <p className="text-sm font-light uppercase tracking-[0.3em] opacity-40 max-w-[280px] border-l border-[#D4AF37]/20 pl-6 italic">Essential identity architecture for the discerning digital citizen.</p>
                     </div>
                     <ul className="space-y-10 py-12">
                        {['Single Sovereign Estate', 'Bespoke Type Architecture', 'Foundational Encryption', 'Weekly Status Briefs', 'Encrypted Archive'].map(item => (
                           <li key={item} className="flex items-center gap-8 text-[11px] font-light uppercase tracking-[0.6em] text-white/40 group-hover:text-white/80 transition-all italic">
                              <div className="w-2 h-2 border border-[#D4AF37]/40 rounded-full" /> {item}
                           </li>
                        ))}
                     </ul>
                     <button className="w-full py-12 border border-[#D4AF37]/20 text-[#D4AF37] text-[12px] uppercase font-light tracking-[0.8em] hover:bg-[#D4AF37] hover:text-black transition-all duration-700 shadow-xl mt-12">
                        Inquire Access
                     </button>
                  </div>
               </div>

               {/* Tier 2 */}
               <div className="p-8 bg-[#D4AF37]/5 border-2 border-[#D4AF37]/40 relative group overflow-hidden shadow-[0_0_100px_rgba(212,175,55,0.1)] flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent pointer-events-none" />
                  <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                     <Diamond size={350} strokeWidth={0.5} />
                  </div>
                  <div className="space-y-20 relative z-10">
                     <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-4">
                           <Sparkles size={18} className="text-[#D4AF37]" />
                           <span className="text-[11px] font-bold uppercase tracking-[1.2em] text-[#D4AF37]">Institutional_Peak</span>
                        </div>
                        <Award size={32} strokeWidth={1} className="text-[#D4AF37]" />
                     </div>
                     <div className="space-y-6 text-center">
                        <div className="text-6xl font-light text-white tracking-tighter leading-none italic">$9,800<span className="text-xs opacity-40 ml-16 not-italic uppercase tracking-[1.5em]">/eternity</span></div>
                        <p className="text-lg font-light uppercase tracking-[0.4em] leading-relaxed text-shadow shadow-[#D4AF37]/10">The absolute standard. Full global institutionalization for the sovereign elite.</p>
                     </div>
                     <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent my-10" />
                     <ul className="grid grid-cols-1 gap-12 text-center pb-12">
                        {['Infinite Identity Clusters', 'Zero-Day Security Mesh', '24/7 Concierge Uplink', 'Global Signal Supremacy', 'Immutable Heritage Sync', 'Realtime Refinement Swarm'].map(item => (
                           <li key={item} className="text-[12px] font-bold uppercase tracking-[1em] text-[#D4AF37] hover:scale-110 transition-transform duration-700">
                              {item}
                           </li>
                        ))}
                     </ul>
                     <button className="w-full py-16 bg-[#D4AF37] text-black font-bold uppercase text-[15px] tracking-[1.2em] hover:bg-white hover:scale-[1.02] transition-all duration-700 shadow-[0_0_50px_rgba(212,175,55,0.3)] mt-12 border-4 border-[#D4AF37]/20">
                        ENTER_THE_RESERVE
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. The Final Audience (Inquiry) */}
      <section className="bg-black py-16 px-12 md:px-10 relative overflow-hidden text-center z-10 border-t border-[#D4AF37]/10">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5 }}
           className="max-w-5xl mx-auto space-y-24 relative z-10"
         >
            <div className="space-y-8">
               <h2 className="text-5xl md:text-6xl font-extralight text-white tracking-[0.2em] uppercase leading-tight italic">
                  AN ELITE <br/> <span className="opacity-30 text-[#D4AF37] tracking-[0.4em]">ALLIANCE.</span>
               </h2>
               <div className="w-48 h-px bg-[#D4AF37]/40 mx-auto" />
            </div>

            <div className="flex flex-col items-center gap-16">
               <motion.button 
                 whileHover={{ scale: 1.1, letterSpacing: '1em' }}
                 className="px-10 py-12 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-light uppercase tracking-[0.8em] text-3xl hover:bg-[#D4AF37] hover:text-black transition-all duration-1000 shadow-2xl"
               >
                  Inquire
               </motion.button>
               <div className="space-y-4">
                  <p className="text-[10px] font-light uppercase tracking-[1.5em] opacity-40">Private Consultations // MMXXVI Protocols In Force</p>
                  <p className="text-xs font-light text-white/20 italic tracking-[0.5em]">Direct Link: +1 800 ZORVIA PRESTIGE</p>
               </div>
            </div>
         </motion.div>
      </section>

      {/* 8. Global Presence Footer */}
      <footer className="p-12 md:p-48 bg-black border-t-8 border-black flex flex-col gap-12 relative z-10 overflow-hidden">
         <div className="absolute top-0 right-0 p-40 opacity-10 pointer-events-none italic rotate-12">
            <h4 className="text-[20vw] font-black opacity-5 uppercase tracking-tighter">PRESTIGE</h4>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10 w-full max-w-screen-2xl mx-auto text-left">
            <div className="lg:col-span-2 space-y-24">
               <div className="flex items-center gap-12 group cursor-pointer">
                  <div className="w-24 h-24 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-1000">
                     <Crown size={56} strokeWidth={0.5} className="group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="space-y-4">
                     <h4 className="text-6xl font-extralight text-white tracking-[0.5em] uppercase leading-none">ZORVIA.LUXE</h4>
                     <p className="text-[10px] font-light tracking-[2em] text-[#D4AF37]/40 uppercase italic">Refinement // Identity // MMXXVI</p>
                  </div>
               </div>
               <p className="max-w-xl text-xl font-light uppercase tracking-[0.4em] text-white/40 leading-relaxed italic border-l border-[#D4AF37]/20 pl-16 py-8">
                  The world's premier digital laboratory for sovereign identities. We build for the 0.01% – providing an aesthetic sanctuary in an increasingly noisy digital landscape.
               </p>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[1em] italic border-b border-[#D4AF37]/10 pb-6 w-fit">DEPARTMENTS</div>
               <div className="flex flex-col gap-8 text-[10px] font-light text-white/30 uppercase tracking-[0.6em] italic">
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Archives_Silo</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Heritage_Office</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Protocol_Desk</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Aether_Systems</a>
               </div>
            </div>

            <div className="space-y-12">
               <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-[1em] italic border-b border-[#D4AF37]/10 pb-6 w-fit">GLOBAL_NODES</div>
               <div className="flex flex-col gap-8 text-[10px] font-light text-white/30 uppercase tracking-[0.6em] italic">
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Zurich_Node</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">Singapore_Hub</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">London_Station</a>
                  <a href="#" className="hover:text-white hover:translate-x-4 transition-all underline decoration-[#D4AF37]/10 underline-offset-8">NewYork_Cluster</a>
               </div>
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-[#D4AF37]/10 w-full max-w-screen-2xl mx-auto relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]/40 hover:text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 hover:-translate-y-6 transition-all duration-700 shadow-2xl">
                  <Icon size={32} strokeWidth={1} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl mx-auto pt-24 text-[10px] font-light text-[#D4AF37]/10 uppercase tracking-[1.5em] italic leading-loose">
            <span>© MMXXVI ZORVIA PRESTIGE LABORATORIES // THE RESERVE UNIT</span>
            <div className="flex gap-16 items-center">
               <span>STATUS: EMINENCE</span>
               <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse shadow-[0_0_10px_#D4AF37]" />
            </div>
         </div>
      </footer>
    </div>
  );
};

export default LuxuryMockup;
