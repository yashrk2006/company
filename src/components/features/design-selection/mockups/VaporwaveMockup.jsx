import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Cloud, Music, Monitor, Zap, Heart, Sparkles, Send, Play, Radio, Volume2, CassetteTape, Disc, Mic2, Star, CheckCircle2 } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const VaporwaveMockup = ({ theme }) => {
  const accents = ['#FF71CE', '#01CDFE', '#05FFA1', '#B967FF', '#FFFB96'];

  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#01CDFE] font-sans text-white selection:bg-[#FF71CE] selection:text-white pb-4">
      
      {/* 1. Immersive Retro Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {/* Perspective Grid */}
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[70%] perspective-1000">
            <div className="w-full h-full bg-[linear-gradient(rgba(185,103,255,0.4)_2px,transparent_2px),linear-gradient(90deg,rgba(185,103,255,0.4)_2px,transparent_2px)] bg-[size:60px_60px] animate-grid-drift origin-bottom" style={{ transform: 'rotateX(65deg)' }} />
         </div>

         {/* Vaporwave Sun */}
         <motion.div 
           animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#FF71CE] via-[#FF71CE]/90 to-transparent shadow-[0_0_120px_rgba(255,113,206,0.5)]"
         >
            <div className="absolute inset-0 flex flex-col gap-6 py-12 opacity-50">
               {[...Array(12)].map((_, i) => (
                 <div key={i} className="h-2 bg-[#01CDFE]" style={{ width: '100%', opacity: (i + 1) * 0.08 }} />
               ))}
            </div>
         </motion.div>

         {/* Floating Aesthetic Elements */}
         <div className="absolute bottom-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_left,#05FFA1_0%,transparent_70%)] blur-3xl" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,#B967FF_0%,transparent_70%)] blur-3xl" />
         </div>
      </div>

      {/* 2. Floating Navbar */}
      <nav className="sticky top-6 z-[100] mx-auto max-w-7xl px-4 flex items-center h-24">
        <div className="w-full h-full bg-[#1A103C]/40 backdrop-blur-3xl border-4 border-[#B967FF] flex justify-between items-center px-12 shadow-[8px_8px_0px_#05FFA1]">
           <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 bg-[#FF71CE] flex items-center justify-center border-2 border-white rotate-12 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_white]">
                 <span className="text-3xl font-black italic">V</span>
              </div>
              <span className="font-black italic text-2xl tracking-[0.2em] uppercase text-white drop-shadow-[2px_2px_0px_#FF71CE]">AESTHETIC</span>
           </div>
           
           <div className="hidden lg:flex items-center gap-12 font-black uppercase italic text-xs tracking-[0.3em]">
              {['Cassettes', 'Galleries', 'Waves', 'Signals'].map(item => (
                <a key={item} href="#" className="hover:text-[#05FFA1] transition-all hover:translate-y-px">{item}</a>
              ))}
           </div>

           <button className="px-8 py-3 bg-[#05FFA1] text-[#1A103C] font-black uppercase text-xs tracking-widest border-2 border-white shadow-[6px_6px_0px_#FF71CE] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              Initialize
           </button>
        </div>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-20 min-h-fit flex flex-col items-center justify-center text-center p-8 md:p-32">
         <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative mb-24"
         >
            <h1 className="text-8xl md:text-[12rem] lg:text-[15rem] font-black italic uppercase tracking-tighter leading-none text-white drop-shadow-[0_0_40px_rgba(255,113,206,0.6)] relative z-10">
               VISUAL <br />
               <span className="text-[#05FFA1] drop-shadow-[0_0_30px_rgba(5,255,161,0.5)]">EUPHORIA.</span>
            </h1>
            <motion.div 
              animate={{ x: [-4, 4, -4], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 0.15, repeat: Infinity }}
              className="absolute inset-0 text-8xl md:text-[12rem] lg:text-[15rem] font-black italic uppercase tracking-tighter leading-none text-[#FF71CE] blur-[6px] -z-10 translate-x-2 translate-y-2"
            >
               VISUAL <br /> EUPHORIA.
            </motion.div>
         </motion.div>

         <div className="max-w-3xl w-full bg-[#1A103C]/70 backdrop-blur-2xl border-4 border-[#B967FF] p-12 shadow-[15px_15px_0px_#05FFA1] text-left relative overflow-hidden">
            {/* Holographic Overlays */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Music size={120} className="text-[#05FFA1]" />
            </div>

            <div className="flex justify-between items-center border-b-2 border-[#B967FF] pb-6 mb-8">
               <div className="flex gap-3">
                  <div className="w-4 h-4 bg-[#FF71CE] rounded-full shadow-[0_0_10px_#FF71CE]" />
                  <div className="w-4 h-4 bg-[#05FFA1] rounded-full shadow-[0_0_10px_#05FFA1]" />
                  <div className="w-4 h-4 bg-[#01CDFE] rounded-full shadow-[0_0_10px_#01CDFE]" />
               </div>
               <span className="text-xs font-black uppercase tracking-[0.5em] opacity-40 italic">BUFFERING_MEMORY // 1994</span>
            </div>

            <p className="text-3xl md:text-4xl font-black italic leading-[1.1] text-[#05FFA1] mb-12 drop-shadow-md">
               "Architecting the digital afterlife. Retro-futuristic realms designed for peak nostalgia and high-speed dreams."
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-[#FF71CE]/20 border-2 border-[#FF71CE] flex items-center justify-center text-[#FF71CE] group-hover:bg-[#FF71CE] group-hover:text-white transition-all">
                     <Monitor size={24} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest leading-snug">CRT_FLICKER <br/> RENDER_V4</span>
               </div>
               <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-14 h-14 bg-[#05FFA1]/20 border-2 border-[#05FFA1] flex items-center justify-center text-[#05FFA1] group-hover:bg-[#05FFA1] group-hover:text-[#1A103C] transition-all">
                     <Radio size={24} />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest leading-snug">LO-FI_PULSE <br/> SIGNAL_STABLE</span>
               </div>
            </div>

            <motion.button 
              whileHover={{ x: 10, y: 10, boxShadow: '0px 0px 0px #05FFA1' }}
              className="mt-16 w-full py-8 bg-[#FF71CE] text-white border-4 border-white font-black uppercase tracking-[0.3em] text-xl shadow-[12px_12px_0px_#05FFA1] transition-all flex items-center justify-center gap-6 group"
            >
               ACQUIRE SIGNAL
               <Play size={24} fill="white" className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
         </div>
      </section>

      {/* 4. Feature Matrix (Neon Wave) */}
      <section className="relative z-20 py-48 bg-[#1A103C] border-y-8 border-[#B967FF]">
         <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
            <h2 className="text-6xl md:text-9xl font-black italic text-[#FF71CE] mb-32 tracking-tighter drop-shadow-[0_0_20px_#FF71CE]">CORE_DYNAMICS.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-[#B967FF] border-4 border-[#B967FF] shadow-[20px_20px_0px_rgba(255,113,206,0.2)]">
               {[
                 { title: "Retro_Sync", icon: CassetteTape, color: "#FF71CE", desc: "Phase-locked synchronization for legacy hardware emulators." },
                 { title: "Dream_State", icon: Cloud, color: "#05FFA1", desc: "Non-linear navigation layers optimized for flow and nostalgia." },
                 { title: "Spark_Engine", icon: Sparkles, color: "#01CDFE", desc: "High-energy animation clusters that sustain 120fps drift patterns." },
                 { title: "Heart_Mesh", icon: Heart, color: "#FF71CE", desc: "Emotionally-driven color algorithms based on 1980s cinema." },
                 { title: "Volt_Guard", icon: Zap, color: "#FFFB96", desc: "High-voltage surge protection for aesthetic-critical infrastructure." },
                 { title: "Star_Pulse", icon: Star, color: "#05FFA1", desc: "Distributed node rewards for consistent aesthetic engagement." }
               ].map((f, i) => (
                  <div key={i} className="p-16 bg-[#1A103C] hover:bg-[#2A1B5C] transition-all group flex flex-col items-center gap-10">
                     <div className="w-24 h-24 rounded-full border-4 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.1)]" style={{ borderColor: f.color }}>
                        <f.icon size={44} style={{ color: f.color }} />
                     </div>
                     <h3 className="text-3xl font-black uppercase italic tracking-widest" style={{ color: f.color }}>{f.title}</h3>
                     <p className="text-lg font-bold italic text-white/40 leading-tight uppercase tracking-widest">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Aesthetic Subs (Pricing) */}
      <section className="py-48 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-40">
            <h2 className="text-7xl md:text-[8rem] font-black italic uppercase tracking-tighter text-[#05FFA1] leading-none mb-4 drop-shadow-[0_0_15px_rgba(5,255,161,0.3)]">THE_INDEX.</h2>
            <div className="h-4 w-64 bg-[#FF71CE] mx-auto opacity-40 shadow-[0_0_20px_#FF71CE]" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
            {[
               { tier: "VOL. 01 (LO-FI)", price: "19", color: "#FF71CE", features: ["1984 Color Profiles", "Basic Scanline Filter", "Signal Buffer (1GB)", "Nightline Access"] },
               { tier: "VOL. 02 (HI-FI)", price: "45", color: "#05FFA1", featured: true, features: ["Holographic Textures", "Dream Mode Toggle", "Unlimited Signals", "24/7 Neon Support", "Aesthetic Forge V3"] },
               { tier: "VOL. 03 (ULTRA)", price: "99", color: "#01CDFE", features: ["Full Horizon Sync", "Reality Drift Engine", "Custom Waveforms", "VIP Lounge Access"] }
            ].map((p, i) => (
               <div key={i} className={`p-12 border-4 border-white transition-all hover:-translate-y-4 ${p.featured ? 'bg-[#FF71CE]/10 shadow-[20px_20px_0px_#FF71CE]' : 'bg-white/5 shadow-[20px_20px_0px_#01CDFE]'}`}>
                  <div className="text-xs font-black tracking-[0.4em] mb-12 opacity-50 uppercase italic" style={{ color: p.color }}>{p.tier}</div>
                  <div className="text-8xl font-black italic mb-12 tracking-tighter">
                     <span className="text-xl font-bold opacity-30">$</span>{p.price}
                  </div>
                  <ul className="space-y-6 pb-12 border-b-2 border-white/5">
                     {p.features.map(f => (
                        <li key={f} className="flex items-center gap-4 text-xs font-black uppercase tracking-widest italic opacity-60">
                           <CheckCircle2 size={20} style={{ color: p.color }} strokeWidth={4} /> {f}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full mt-12 py-6 bg-white text-[#1A103C] font-black uppercase tracking-widest text-xs hover:bg-[#05FFA1] transition-all shadow-[6px_6px_0px_#FF71CE]">
                     INITIATE_INDEX
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Massive Footer */}
      <footer className="p-12 md:p-32 bg-[#1A103C] border-t-8 border-[#05FFA1] flex flex-col items-center gap-24 text-center relative overflow-hidden">
         <div className="relative z-10 flex flex-col items-center gap-12 group">
            <div className="w-40 h-40 bg-[#FF71CE] flex items-center justify-center text-white rotate-12 group-hover:rotate-0 transition-transform cursor-pointer border-4 border-white shadow-[12px_12px_0px_#05FFA1]">
               <Mic2 size={80} strokeWidth={3} />
            </div>
            <div className="space-y-4">
               <h4 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,113,206,0.4)]">AESTHETIC.ZORVIA</h4>
               <p className="text-[10px] font-black tracking-[2em] text-[#05FFA1] uppercase opacity-40">Total Transmission Institutionalized // 1994</p>
            </div>
         </div>

         <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-20 text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
            {['Archives', 'Spells', 'Protocols', 'Galleries', 'Waves', 'Signals', 'Studio', 'Support'].map(item => (
                <a key={item} href="#" className="hover:text-[#FF71CE] hover:translate-y-px transition-all">{item}</a>
            ))}
         </div>

         <div className="relative z-10 flex gap-10 pt-20 border-t-2 border-white/10 w-full max-w-4xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-16 h-16 bg-white/5 border-2 border-white flex items-center justify-center text-white hover:bg-[#05FFA1] hover:text-[#1A103C] hover:-translate-y-4 transition-all shadow-[6px_6px_0px_#FF71CE]">
                  <Icon size={24} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="relative z-10 pt-20 flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-8 text-[10px] font-black uppercase tracking-[1em] opacity-20 italic">
            <span>© 1994-2026 ZORVIA AESTHETIC SYSTEMS</span>
            <span>NO LIMITS // HIGH FREQUENCY</span>
         </div>
      </footer>

      {/* 7. Scanlines Overlay (Global) */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-[200] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%] animate-scanlines" />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes grid-drift {
          from { background-position: 0 0; }
          to { background-position: 0 60px; }
        }
        .animate-grid-drift {
          animation: grid-drift 3s linear infinite;
        }
        .perspective-1000 { perspective: 2000px; }
      `}} />
    </div>
  );
};

export default VaporwaveMockup;
