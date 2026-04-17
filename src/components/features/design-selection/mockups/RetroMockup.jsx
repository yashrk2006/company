import React from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Zap, Coffee, Music, Camera, Heart, Sun, Rainbow, Sparkles, 
  ChevronRight, CheckCircle2, Volume2, Gamepad, Radio, Play, ArrowRight,
  Disc, Tv, Mic, Volume1, Repeat, SkipForward, SkipBack, Power,
  Download, Share2, MessageCircle, HelpCircle, Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const RetroMockup = ({ theme }) => {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden bg-[#FEF3C7] text-[#111] font-serif selection:bg-[#EA580C] selection:text-white pt-0 flex flex-col items-center">
      
      {/* 1. Immersive Animated Groovy Sunburst Background */}
      <div className="fixed inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none overflow-hidden z-0">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
           className="w-[4000px] h-[4000px] bg-[repeating-conic-gradient(#EA580C_0_10deg,transparent_0_20deg)]"
         />
      </div>

      {/* 2. Paper Grain & Analog Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.15] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] z-[50]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')] z-[51]" />

      {/* 3. Bouncy Retro Navbar */}
      <nav className="sticky top-6 z-[110] w-full max-w-7xl px-4 flex items-center h-24">
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="w-full h-full bg-white border-[8px] border-black rounded-[2rem] px-10 flex justify-between items-center shadow-[15px_15px_0px_#000]"
        >
           <motion.div 
             whileHover={{ scale: 1.1, rotate: -5, skewX: -10 }}
             className="flex items-center gap-6 group cursor-pointer transition-transform duration-700"
           >
              <div className="relative">
                 <div className="w-16 h-16 bg-[#991B1B] rounded-full border-[6px] border-black shadow-[6px_6px_0px_#000] flex items-center justify-center text-white group-hover:rotate-[360deg] transition-all duration-1000">
                    <Zap size={32} fill="currentColor" strokeWidth={3} />
                 </div>
                 <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#FBBF24] border-4 border-black rounded-full animate-bounce" />
              </div>
              <div className="flex flex-col leading-none">
                 <span className="font-black text-4xl uppercase italic tracking-tighter text-[#991B1B]">ZORVIA.77</span>
                 <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40">Analog_Reserve</span>
              </div>
           </motion.div>
           
           <div className="hidden lg:flex gap-12 font-black text-xs uppercase tracking-[0.3em]">
              {['Archives', 'Protocol', 'Manifesto', 'Hardware', 'The_Tape'].map(item => (
                <a key={item} href="#" className="hover:text-[#EA580C] transition-all decoration-[6px] underline-offset-8 hover:underline italic group relative">
                   {item}
                   <Star size={12} className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 text-[#FBBF24] fill-current" />
                </a>
              ))}
           </div>

           <div className="flex items-center gap-6">
              <button className="hidden sm:block px-8 py-3 bg-white text-black border-[4px] border-black font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all italic">
                 Log_In
              </button>
              <motion.button 
                 whileHover={{ scale: 1.1, rotate: 5 }}
                 className="px-10 py-3 bg-[#991B1B] text-white border-[6px] border-black shadow-[6px_6px_0px_#000] font-black uppercase text-xs tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                 JOIN_CLUB
              </motion.button>
           </div>
        </motion.div>
      </nav>

      {/* 4. Hero: The Maximum Groovy Vibe */}
      <section className="relative z-10 w-full px-8 md:px-24 pt-32 pb-16 flex flex-col items-center text-center max-w-screen-2xl mx-auto overflow-visible mb-16">
         <motion.div
           initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
           animate={{ scale: 1, opacity: 1, rotate: 5 }}
           transition={{ type: "spring", damping: 12 }}
           className="inline-flex items-center gap-6 px-10 py-4 bg-[#FDE68A] border-[6px] border-black rounded-full shadow-[10px_10px_0px_#000] mb-20 relative group cursor-pointer"
         >
            <Sun className="text-[#EA580C] animate-spin-slow" size={40} strokeWidth={3} />
            <span className="text-xl font-black uppercase tracking-[0.2em] text-[#111]">GOLDEN AGE TECH IS HERE!</span>
            <div className="absolute -top-8 -right-8 bg-[#991B1B] text-white px-4 py-2 rounded-xl text-xs font-black rotate-12 group-hover:rotate-0 transition-transform">MMXXVI</div>
         </motion.div>

         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic leading-[0.75] text-[#991B1B] drop-shadow-[6px_6px_0px_white] mb-20 relative group transition-all">
            GROOVY <br/> 
            <span className="text-[#EA580C] relative px-12 group-hover:tracking-tighter transition-all">
               LOGIC & 
               <Rainbow size={100} className="absolute -top-8 -right-12 opacity-40 group-hover:opacity-100 transition-all text-[#FBBF24]" />
            </span> <br/>
            RADICAL <br/>
            <span className="relative inline-block hover:scale-110 transition-all cursor-default">
               TECH.
               <Sparkles className="absolute -top-16 -right-24 text-[#FACC15] animate-pulse" size={120} />
            </span>
         </h1>

         <p className="text-2xl md:text-5xl lg:text-7xl font-black leading-[1] max-w-6xl text-[#111] mb-32 italic border-y-[12px] border-black/5 py-16 relative">
            "We're bringing back the energy of 1977 with the computational power of 2026. High-vibe engineering for a brighter digital legacy."
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#EA580C] text-white px-8 py-2 border-4 border-black rounded-full text-sm font-black italic tracking-[1em] uppercase">Vibe_Protocol_Active</div>
         </p>

         <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-full sm:w-auto px-20 py-10 bg-[#EA580C] text-white border-[10px] border-black rounded-[4rem] font-black uppercase tracking-[0.2em] text-4xl shadow-[20px_20px_0px_#000] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all flex items-center justify-center gap-10 group"
            >
               START_TRACK <Play size={54} fill="currentColor" className="group-hover:scale-125 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-full sm:w-auto px-20 py-10 bg-white text-black border-[10px] border-black rounded-[4rem] font-black uppercase tracking-[0.2em] text-4xl shadow-[20px_20px_0px_#000] hover:translate-x-4 hover:translate-y-4 hover:shadow-none transition-all flex items-center justify-center gap-10"
            >
               OUR_VIBE <Mic size={54} strokeWidth={3} />
            </motion.button>
         </div>

         {/* Hero Shape Parade (Interative) */}
         <div className="mt-16 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-20">
            {[Music, Camera, Gamepad, Radio, Disc, Tv].map((Icon, i) => (
               <motion.div 
                 key={i}
                 initial={{ y: 0 }}
                 animate={{ 
                    y: [0, -30, 0], 
                    rotate: [0, i % 2 === 0 ? 10 : -10, 0] 
                 }}
                 transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                 className="aspect-[4/5] bg-white border-[8px] border-black rounded-[3rem] shadow-[15px_15px_0px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center text-[#991B1B] hover:-translate-y-12 hover:-rotate-6 transition-all duration-700 cursor-pointer group"
               >
                  <Icon size={100} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
                  <div className="mt-8 px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">ARCHIVE_NODE_{i}</div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 5. Feature Matrix (The Manifesto) */}
      <section className="relative z-10 py-20 w-full bg-[#991B1B] text-white border-y-[20px] border-black flex flex-col items-center">
         <div className="max-w-7xl mx-auto px-8 md:px-24 text-center mb-12 space-y-12">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic drop-shadow-[6px_6px_0px_black] text-white leading-none">THE_MANIFESTO.</h2>
            <div className="flex flex-col items-center gap-8">
               <div className="h-6 w-[80vw] bg-[#FDE68A] border-[6px] border-black shadow-[10px_10px_0px_#000]" />
               <p className="text-2xl font-black uppercase tracking-[1em] opacity-40 italic">Structural Radiance MMXXVI</p>
            </div>
         </div>

         <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-full">
            {[
              { title: "Vibe Dynamics", icon: Volume2, desc: "Synchronizing high-fidelity audio signals with your digital workflows for peak performance and emotional clarity." },
              { title: "Neon Grids", icon: Zap, desc: "Building resilient infrastructures that shine in the darkest corners of the global web with absolute structural brilliance." },
              { title: "Radical Flow", icon: Coffee, desc: "Optimized deployment cycles that keep your team energized, caffeinated, and your systems fluid and responsive." },
              { title: "Paper Trails", icon: Heart, desc: "Deep-layer documentation with a human touch. We value the soul of the mission as much as the binary code in the core." },
              { title: "Analog Security", icon: Power, desc: "Military-grade protection wrapped in an approachable, tactile architectural layer with physical multi-factor logic." },
              { title: "Golden Edge", icon: Sun, desc: "Pushing the boundaries of what's possible with a warm, optimistic outlook on planetary scale and future-ready nodes." },
              { title: "Hifi Signals", icon: Mic, desc: "Uncompressed data transmission streams delivered through high-fidelity, un-ornamented sonic pipelines." },
              { title: "Static Tape", icon: Disc, desc: "Immutable archival protocols that ensure your digital legacy remains readable for the next millennium." },
              { title: "Groove Ops", icon: Sliders, desc: "Intelligent management protocols that optimize your project's rhythm for maximum creative output." }
            ].map((f, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -20, rotate: i % 2 === 0 ? 3 : -3 }}
                 className="group p-12 bg-[#FEF3C7] border-[8px] border-black rounded-[4rem] shadow-[20px_20px_0px_#000] hover:shadow-none transition-all cursor-default flex flex-col justify-between h-full"
               >
                  <div className="space-y-10">
                     <div className="w-24 h-24 bg-white border-[6px] border-black rounded-[2rem] flex items-center justify-center text-[#991B1B] mb-12 shadow-[10px_10px_0px_#000] group-hover:bg-[#EA580C] group-hover:text-white group-hover:rotate-12 transition-all">
                        <f.icon size={54} strokeWidth={3} />
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-5xl font-black text-black uppercase tracking-tighter italic leading-none group-hover:text-[#991B1B] transition-colors">{f.title}.</h3>
                        <p className="text-xl font-bold text-black/60 leading-tight uppercase tracking-tight italic group-hover:text-black transition-colors">{f.desc}</p>
                     </div>
                  </div>
                  <div className="pt-16 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700">
                     <span className="text-xs font-black uppercase tracking-[1em] text-black italic">Read_Transcript</span>
                     <ArrowUpRight size={48} className="text-[#991B1B]" strokeWidth={6} />
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 6. Tape Deck Telemetry (Stats) */}
      <section className="py-20 w-full px-8 md:px-24 bg-[#FEF3C7] z-10 relative flex flex-col items-center">
         <div className="max-w-7xl mx-auto space-y-12 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-16 border-b-[16px] border-black pb-20">
               <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-[0.7] text-[#991B1B]">AUDIO_LOGS.</h2>
               <div className="max-w-md text-right space-y-8">
                  <div className="text-sm font-black uppercase tracking-[1.5em] opacity-30 italic">Playback Frequency</div>
                  <p className="text-2xl font-bold uppercase tracking-widest leading-none bg-black text-white px-6 py-3 italic inline-block">Absolute sonic fidelity in every signal.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
               <div className="bg-white border-[12px] border-black rounded-[4rem] p-16 shadow-[30px_30px_0px_#EA580C] space-y-16 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                     <Disc size={400} strokeWidth={1} className="animate-spin-slow" />
                  </div>
                  <div className="flex justify-between items-center">
                     <div className="flex gap-4">
                        <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest italic leading-none">RECORDING_CORE_V.77</span>
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-[0.5em] italic">00:48:26:MMXXVI</span>
                  </div>
                  <div className="space-y-12 relative z-10">
                     <div className="flex gap-4 items-end overflow-hidden h-48 border-b-8 border-black pb-4">
                        {[15, 45, 85, 25, 65, 95, 35, 55, 10, 75, 45, 25, 85, 55, 35, 65, 15, 45, 85].map((h, i) => (
                           <motion.div 
                              key={i}
                              animate={{ height: [`${h}%`, `${h+20}%`, `${h}%`] }}
                              transition={{ duration: 1 + (i*0.1), repeat: Infinity }}
                              className="flex-1 bg-[#EA580C] border-2 border-black" 
                           />
                        ))}
                     </div>
                     <div className="grid grid-cols-4 gap-8">
                        {[
                           { label: "BASS", val: "100%" },
                           { label: "TREBLE", val: "LIT" },
                           { label: "SYD", val: "ACT" },
                           { label: "VIBE", val: "RAD" }
                        ].map((d, i) => (
                           <div key={i} className="text-center space-y-4">
                              <div className="text-4xl font-black text-black italic tracking-tighter">{d.val}</div>
                              <div className="text-[10px] font-black uppercase tracking-widest opacity-40">{d.label}</div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="flex justify-center gap-12 pt-12 relative z-10">
                     {[SkipBack, Play, SkipForward].map((Icon, i) => (
                        <motion.button 
                          key={i} 
                          whileHover={{ scale: 1.2, backgroundColor: "#000", color: "#fff" }}
                          className="w-20 h-20 border-[6px] border-black rounded-full flex items-center justify-center transition-all"
                        >
                           <Icon size={32} fill={i === 1 ? "currentColor" : "none"} strokeWidth={4} />
                        </motion.button>
                     ))}
                  </div>
               </div>

               <div className="space-y-16 p-12">
                  <h3 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter italic leading-none">The_Sync.</h3>
                  <p className="text-xl md:text-3xl font-bold uppercase tracking-widest leading-relaxed text-black/60 italic border-l-[16px] border-[#991B1B] pl-10 py-6">
                     We monitor the global groove across all 1977 legacy nodes. High-fidelity structural warmth delivered through refined analog-to-digital transmission cycles.
                  </p>
                  <div className="flex gap-12">
                     <div className="px-8 py-4 bg-white border-4 border-black rounded-full text-sm font-black italic tracking-widest">SIGNAL: STEADY</div>
                     <div className="px-8 py-4 bg-[#EA580C] text-white border-4 border-black rounded-full text-sm font-black italic tracking-widest">VERACITY: RADICAL</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. Retro Pricing (Memberships) */}
      <section className="py-20 px-8 md:px-24 w-full max-w-7xl mx-auto flex flex-col items-center z-10">
         <div className="text-center mb-12 space-y-12">
            <h2 className="text-5xl md:text-7xl font-black text-[#991B1B] tracking-tighter uppercase italic leading-none drop-shadow-[8px_8px_0px_white]">THE_ARCHIVE.</h2>
            <p className="text-[14px] font-black uppercase tracking-[2.5em] opacity-30 italic">Investment Clusters // Legacy Access</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full lg:max-w-6xl">
            {[
               { tier: "VOL. 01 (LITE)", price: "240", desc: "For independent explorers and solitary digital architects requiring retro clarity.", items: ["3 Core Static Themes", "Classic Audio Pack V1", "Standard Signal Access", "Monthly Tape Mailer", "Basic Protocol Key"] },
               { tier: "VOL. 02 (RAD)", price: "880", featured: true, desc: "For professional groovers and legacy institutions demanding radical transmission.", items: ["Full Kinetic Library Access", "Infinite Tape Space", "Priority Vibe Routing", "Custom Hardware Forge", "Full Sovereign Reserves", "24/7 Strategic Uplink"] }
            ].map((p, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -25, rotate: i === 0 ? -2 : 2 }}
                 className={`p-8 bg-white border-[12px] border-black rounded-[5rem] shadow-[40px_40px_0px_#000] group relative transition-all duration-700 overflow-hidden flex flex-col justify-between ${p.featured ? 'bg-[#EA580C] text-white' : ''}`}
               >
                  <div className="space-y-16 relative z-10">
                     <div className="flex justify-between items-start border-b-[8px] border-black group-hover:border-white pb-10">
                        <span className="text-2xl font-black uppercase italic tracking-[0.5em]">{p.tier}</span>
                        <div className="w-16 h-16 border-[6px] border-current flex items-center justify-center bg-white text-black group-hover:rotate-[360deg] transition-all duration-1000">
                           <Zap size={32} fill={p.featured ? "currentColor" : "none"} strokeWidth={4} />
                        </div>
                     </div>
                     <div className="text-[120px] md:text-[160px] font-black tracking-tighter leading-none italic relative flex items-center justify-center">
                        <span className="text-4xl font-black opacity-30 absolute top-0 left-[-4rem] italic">$</span>{p.price}
                        <span className="text-[12px] font-black uppercase tracking-[1em] opacity-30 absolute bottom-0 right-[-6rem] rotate-[-90deg] invisible md:visible">Archival Fee / Year</span>
                     </div>
                     <p className={`text-xl font-bold uppercase tracking-widest leading-relaxed opacity-60 italic border-l-[12px] border-black group-hover:border-white pl-8 py-4 ${p.featured ? 'text-white/80' : ''}`}>
                        {p.desc}
                     </p>
                     <ul className="grid grid-cols-1 gap-12 py-16 text-center max-w-sm mx-auto">
                        {p.items.map((item, k) => (
                           <li key={k} className={`flex items-center gap-6 text-[14px] font-black uppercase tracking-[0.4em] italic leading-none hover:translate-x-4 transition-transform`}>
                              <CheckCircle2 size={24} className={p.featured ? 'text-white' : 'text-[#EA580C]'} strokeWidth={4} /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <motion.button 
                     whileHover={{ scale: 1.1, skewX: -10 }}
                     className={`w-full py-12 ${p.featured ? 'bg-white text-[#EA580C]' : 'bg-black text-white'} border-[8px] border-black font-black uppercase text-3xl tracking-[0.5em] rounded-full shadow-[10px_10px_0px_#000] transition-all mt-16 hover:shadow-none`}
                  >
                     {p.featured ? 'GET_RADICAL' : 'START_CLASSIC'}
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 7. The Final Groove (CTA) */}
      <section className="bg-white py-20 px-12 md:px-10 relative overflow-hidden text-center z-10 border-t-[30px] border-black">
         <div className="absolute inset-0 pattern-dots opacity-5 pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, type: "spring" }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-12 relative z-10"
         >
            <h2 className="text-7xl md:text-7xl lg:text-8xl font-black italic tracking-tighter leading-[0.6] uppercase text-[#991B1B] drop-shadow-[8px_8px_0px_#FDE68A]">
               STAY<br/>GROOVY.
            </h2>
            <div className="flex flex-col items-center gap-16">
               <motion.button 
                  whileHover={{ scale: 1.15, rotate: 5, skewX: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-12 py-20 bg-[#EA580C] border-[12px] border-black rounded-[6rem] text-white font-black uppercase text-5xl md:text-8xl tracking-[0.4em] shadow-[40px_40px_0px_#000] hover:shadow-none transition-all flex items-center gap-16 group"
               >
                  VIBE! <Sun size={100} strokeWidth={8} className="group-hover:rotate-[360deg] transition-all duration-[2000ms]" />
               </motion.button>
               <div className="text-xl font-black uppercase tracking-[3em] opacity-40 italic mt-16 text-[#111]">Transmitting Radical Energy</div>
            </div>
         </motion.div>
      </section>

      {/* 8. Super-Retro Branded Footer */}
      <footer className="w-full p-12 md:p-48 bg-white border-t-[40px] border-black flex flex-col items-center gap-16 relative z-[110] overflow-hidden text-center">
         <div className="absolute top-[-10%] right-[-10%] text-[40vw] font-black opacity-[0.03] italic pointer-events-none uppercase text-black">RETRO</div>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-screen-2xl mx-auto items-center relative z-10 text-left">
            <div className="lg:col-span-2 space-y-24">
               <div className="flex items-center gap-10 group cursor-pointer transition-all duration-700">
                  <div className="relative">
                     <div className="w-32 h-32 bg-[#991B1B] border-[10px] border-black rounded-full shadow-[15px_15px_0px_#000] flex items-center justify-center text-white -rotate-12 group-hover:rotate-[360deg] transition-all duration-1000">
                        <Zap size={80} fill="white" />
                     </div>
                     <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FBBF24] border-4 border-black rounded-full animate-pulse shadow-[8px_8px_0px_#000]" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-black text-8xl md:text-9xl tracking-tighter uppercase italic leading-none text-[#991B1B]">ZORVIA.77</span>
                     <span className="text-[12px] font-black tracking-[4em] text-[#EA580C] uppercase mt-6 italic">Analog Systems Institutionalized // Binary Groove</span>
                  </div>
               </div>
               <p className="max-w-4xl text-3xl font-black italic tracking-tight text-[#111] leading-tight border-l-[16px] border-[#EA580C] pl-16 py-8">
                  The foundational architectural layer for digital projects that value warmth, energy, and radical optimism. We build textures for the binary future.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-16 w-full">
               {['Archives', 'Protocol', 'Manifesto', 'Hardware', 'Stickers', 'Legal', 'Privacy', 'Nodes'].map(item => (
                  <a key={item} href="#" className="text-xl font-black uppercase tracking-widest text-[#111] hover:text-[#EA580C] hover:translate-x-6 transition-all underline decoration-8 underline-offset-12 decoration-[#EA580C]/20 italic">
                     {item}
                  </a>
               ))}
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-16 w-full max-w-screen-2xl mx-auto pt-12 border-t-[10px] border-black/5 relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone].map((Icon, i) => (
               <motion.a 
                  key={i} 
                  whileHover={{ y: -25, rotate: i % 2 === 0 ? 15 : -15, backgroundColor: "#EA580C", color: "#fff" }}
                  href="#" 
                  className="w-24 h-24 bg-[#FEF3C7] border-[8px] border-black rounded-[2.5rem] flex items-center justify-center text-[#111] shadow-[12px_12px_0px_#000] rotate-6 transition-all group"
               >
                  <Icon size={40} strokeWidth={4} className="group-hover:scale-125 transition-transform" />
               </motion.a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl mx-auto pt-24 text-[16px] font-black text-[#111] uppercase tracking-[1em] opacity-30 italic font-mono">
            <span>© 1977-2026 ZORVIA RADICAL SYSTEMS // ALL RIGHTS GROOVY</span>
            <div className="flex gap-8 items-center">
               <div className="flex items-center gap-6">
                  <div className="w-5 h-5 bg-[#EA580C] rounded-full animate-pulse shadow-[0_0_20px_#EA580C]" />
                  <span>SIGNAL: STEADY</span>
               </div>
               <span>VERACITY: TOTAL</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
           animation: spin-slow 20s linear infinite;
        }
        .pattern-dots {
          background-image: radial-gradient(circle at 2px 2px, #000 2px, transparent 0);
          background-size: 40px 40px;
        }
      `}} />
    </div>
  );
};

export default RetroMockup;
