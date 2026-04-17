import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Zap, Star, Heart, Cloud, Moon, Sun, Rocket, BarChart3, 
  Activity, ShieldCircle, Globe, CheckCircle2, ArrowRight, Ghost,
  Volume2, Disc, Play, MessageCircle, Share2, Plus, Maximize,
  Trash2, Edit3, Target, MousePointer2, Layout, Command, Layers,
  Mail, Phone, MapPin, Tablet, Smartphone, Globe2
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MaximalismMockup = ({ theme }) => {
  const accents = [
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFFF00', // Yellow
    '#FF7F00', // Orange
    '#8B00FF', // Purple
    '#39FF14'  // Neon Green
  ];

  const particles = [...Array(50)].map((_, i) => ({
    id: i,
    size: Math.random() * 10 + 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 5,
    color: accents[i % accents.length]
  }));

  return (
    <div className="min-h-fit w-full relative bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-white selection:text-black pt-0 flex flex-col items-center">
      
      {/* 1. Immersive Texture & Chaos Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
         <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(45deg, #FF00FF 5%, transparent 5%, transparent 45%, #FF00FF 45%, #FF00FF 55%, transparent 55%)', backgroundSize: '80px 80px' }} />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FF00FF]/5 via-transparent to-[#00FFFF]/5" />
      </div>

      {/* 2. Kinetic Hyper-Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map(p => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{ 
              width: p.size, 
              height: p.size, 
              left: `${p.x}%`, 
              top: `${p.y}%`, 
              backgroundColor: p.color,
              filter: `blur(4px) drop-shadow(0 0 15px ${p.color})` 
            }}
            animate={{
              y: [0, -300, 0],
              x: [0, 50, -50, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 2.5, 0],
              rotate: [0, 720]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 3. Maximum Impact Navbar */}
      <nav className="sticky top-6 z-[110] w-full max-w-7xl px-4 flex items-center h-28 mix-blend-difference">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full h-full bg-white border-[10px] border-black flex justify-between items-center px-12 shadow-[20px_20px_0px_#FF00FF]"
        >
           <div className="flex items-center gap-10 group cursor-pointer transition-all duration-700">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                className="w-20 h-20 bg-black flex items-center justify-center text-white -rotate-12 transition-transform shadow-[10px_10px_0px_#00FFFF]"
              >
                 <span className="text-6xl font-black italic">!Z</span>
              </motion.div>
              <div className="flex flex-col leading-none">
                 <span className="text-5xl font-black uppercase tracking-tighter text-black italic">MAX.ZORVIA</span>
                 <span className="text-[10px] font-black tracking-[1em] uppercase opacity-40">Absolute_Surplus_v4</span>
              </div>
           </div>
           
           <div className="hidden lg:flex gap-16">
              {['Parks', 'Spells', 'Archives', 'The_Void', 'Chaos'].map((item, i) => (
                <motion.button 
                  key={item} 
                  whileHover={{ skewX: -15, scale: 1.2, color: accents[i % accents.length] }}
                  className="text-2xl font-black uppercase tracking-widest text-black relative group"
                >
                   {item}
                   <div className="absolute -bottom-2 inset-x-0 h-3 bg-current scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </motion.button>
              ))}
           </div>

           <div className="flex items-center gap-8">
              <button className="hidden sm:block px-12 py-4 bg-black text-white font-black uppercase text-xl shadow-[10px_10px_0px_#FFFF00] hover:shadow-none hover:translate-x-2 transition-all italic">
                 INIT_LOGIN
              </button>
              <motion.button 
                 whileHover={{ scale: 1.2, rotate: 5 }}
                 className="px-12 py-4 bg-[#FF00FF] text-white border-[6px] border-black shadow-[10px_10px_0px_#00FFFF] font-black uppercase text-xl tracking-tighter hover:bg-[#8B00FF] transition-all italic"
              >
                 JOIN_CHAOS
              </motion.button>
           </div>
        </motion.div>
      </nav>

      {/* 4. Hero: The Maximum Overload */}
      <section className="relative z-20 w-full px-8 md:px-24 pt-48 pb-64 flex flex-col items-center text-center max-w-screen-2xl mx-auto overflow-visible mb-64">
         <motion.div
           initial={{ rotate: -20, scale: 0.5, opacity: 0 }}
           whileInView={{ rotate: 10, scale: 1.1, opacity: 1 }}
           transition={{ type: "spring", stiffness: 200, damping: 10 }}
           className="px-16 py-6 bg-[#FF00FF] border-[12px] border-white shadow-[25px_25px_0px_#00FFFF] mb-32 relative cursor-pointer group hover:rotate-0 transition-transform duration-1000"
         >
            <span className="text-4xl md:text-6xl font-black uppercase tracking-[0.5em] italic leading-none drop-shadow-[10px_10px_0px_black]">THE_LIMIT_IS_ZERO</span>
            <Sparkles className="absolute -top-16 -right-16 text-[#FFFF00] animate-bounce" size={80} />
            <div className="absolute -bottom-10 -left-10 bg-[#39FF14] text-black px-6 py-2 border-4 border-black font-black rotate-[-15deg] group-hover:rotate-0 transition-all uppercase">MMXXVI_PROTOCOL</div>
         </motion.div>

         <h1 className="text-8xl md:text-[16rem] lg:text-[22rem] font-black uppercase tracking-tighter leading-[0.7] mb-32 text-shadow-max-mega group decoration-white underline decoration-[20px] underline-offset-[30px] hover:no-underline transition-all relative">
            MORE IS <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '6px white' }}>ALWAYS</span> <br />
            <span className="bg-white text-black px-16 inline-block hover:bg-[#39FF14] transition-colors cursor-default">MORE.</span>
            <div className="absolute top-0 right-[-10%] opacity-20 pointer-events-none group-hover:opacity-100 transition-opacity">
               <Ghost size={300} className="text-[#FF00FF] animate-pulse" strokeWidth={1} />
            </div>
         </h1>

         <p className="text-3xl md:text-6xl lg:text-7xl font-black max-w-7xl leading-[0.8] uppercase italic text-[#FFFF00] mb-48 drop-shadow-[10px_10px_0px_black] border-y-[30px] border-white/5 py-24 relative overflow-hidden group">
            <motion.div 
               animate={{ x: ['-100%', '100%'] }} 
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 left-0 w-1/3 h-full bg-white opacity-5 skew-x-[-30deg]" 
            />
            "Abandon the minimalist cage. Embrace the beautiful chaos of visual surplus. We build for those who demand absolute planetary sovereignty in every pixel."
         </p>

         <div className="flex flex-col lg:flex-row gap-16 w-full max-w-7xl justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: -3, skewX: -10 }}
              whileTap={{ scale: 0.9 }}
              className="w-full lg:w-auto px-32 py-12 bg-[#00FFFF] text-black border-[12px] border-white font-black uppercase text-5xl md:text-7xl shadow-[30px_30px_0px_#8B00FF] hover:shadow-none hover:translate-x-6 hover:translate-y-6 transition-all flex items-center justify-center gap-12 group"
            >
               LAUNCH_NOW <Rocket size={80} fill="currentColor" className="group-hover:translate-y-[-20px] transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 3, skewX: 10 }}
              className="w-full lg:w-auto px-32 py-12 bg-white text-black border-[12px] border-black font-black uppercase text-5xl md:text-7xl shadow-[30px_30px_0px_#FF00FF] hover:shadow-none hover:translate-x-6 hover:translate-y-6 transition-all flex items-center justify-center gap-12 italic"
            >
               STUDIO_VOID <Plus size={80} strokeWidth={8} />
            </motion.button>
         </div>

         {/* Hyper-Element Parade */}
         <div className="mt-80 w-full flex flex-wrap justify-center gap-24 md:gap-48 overflow-visible">
            {[Sparkles, Zap, Star, Heart, Moon, Sun, Cloud, Ghost, Disc, Radio].map((Icon, i) => (
               <motion.div 
                 key={i}
                 initial={{ y: 0 }}
                 animate={{ 
                    y: [0, -60, 0], 
                    rotate: [0, 360, -360, 0],
                    scale: [1, 1.5, 0.7, 1] 
                 }}
                 transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
                 className="relative group cursor-pointer"
               >
                  <div 
                    className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center border-[12px] border-white shadow-[20px_20px_0px_black] transition-all duration-700 group-hover:-translate-y-16"
                    style={{ backgroundColor: accents[i % accents.length] }}
                  >
                     <Icon size={100} className="text-black fill-black/10" strokeWidth={5} />
                  </div>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-10 py-3 font-black text-3xl rotate-[-5deg] opacity-0 group-hover:opacity-100 transition-all uppercase whitespace-nowrap shadow-[5px_5px_0px_#FF00FF]">
                     MAX_CORE_{i}
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 5. Feature Overload (Matrix) */}
      <section className="relative z-20 py-80 bg-white text-black border-y-[40px] border-[#FF00FF] flex flex-col items-center overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(90deg, #000 2px, transparent 2px)', backgroundSize: '50px 50px' }} />
         
         <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col items-center space-y-64 w-full">
            <div className="text-center space-y-12 relative">
               <h2 className="text-9xl md:text-[18rem] font-black text-black tracking-tighter uppercase italic leading-none drop-shadow-[20px_20px_0px_#00FFFF] border-b-[30px] border-black/5 pb-10">THE_INFRA.</h2>
               <div className="text-4xl font-black uppercase tracking-[1.5em] opacity-40 italic mt-8 animate-pulse text-center w-full">Infinite Visual Bandwidth</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-[10px] border-black w-full shadow-[40px_40px_0px_#FFFF00]">
               {[
                 { title: "Hyper_Intensity", icon: Sparkles, desc: "Saturating every single interaction cluster with peak sensory feedback logic for maximum user cognitive engagement." },
                 { title: "Mega_Density", icon: BarChart3, desc: "Compressing massive planetary data streams into visually explosive formats for high-fidelity decision loops." },
                 { title: "Neon_Guard", icon: ShieldCircle, desc: "High-visibility, sovereign protection layers that refuse to be ignored by any malicious actor or legacy node." },
                 { title: "Pulse_Flow", icon: Activity, desc: "Continuous energy cycles that sustain growth in infinite loops while maintaining 100% structural veracity." },
                 { title: "Void_Link", icon: Globe, desc: "Deep-space transmission protocols delivered through high-bandwidth neural pipelines across all 40+ regions." },
                 { title: "Soul_Forge", icon: Heart, desc: "The foundational emotional engine built for peak stability, joyous growth, and total self-expression." },
                 { title: "Hyper_Grid", icon: Layout, desc: "Asymmetric layout structures that break the standard cage with radical, un-ornamented structural brilliance." },
                 { title: "Sonic_Pulse", icon: Volume2, desc: "Immersion layers wrapped in approached sonic textures that define the project's planetary vibe." }
               ].map((f, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ backgroundColor: "#000", color: "#fff" }}
                    className="group p-20 bg-white space-y-16 transition-all duration-300 min-h-[500px] flex flex-col justify-between"
                  >
                     <div className="space-y-12">
                        <div className="w-32 h-32 border-[8px] border-current flex items-center justify-center transition-colors shadow-[10px_10px_0px_current]" style={{ color: accents[i % accents.length] }}>
                           <f.icon size={80} strokeWidth={4} />
                        </div>
                        <div className="space-y-6">
                           <h3 className="text-7xl font-black uppercase tracking-tighter italic leading-none">{f.title}.</h3>
                           <p className="text-3xl font-black uppercase leading-[0.9] opacity-40 group-hover:opacity-100 transition-opacity italic">{f.desc}</p>
                        </div>
                     </div>
                     <div className="h-12 w-full bg-slate-100 group-hover:bg-[#FFFF00] overflow-hidden relative border-2 border-black">
                        <motion.div 
                           animate={{ x: ['-100%', '300%'] }}
                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                           className="h-full w-48 bg-black opacity-30 skew-x-[-45deg]" 
                        />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Strategic Chaos (Pricing Index) */}
      <section className="py-80 px-12 md:px-24 w-full flex flex-col items-center z-10 bg-black">
         <div className="text-center mb-64 space-y-16">
            <h2 className="text-9xl md:text-[22rem] font-black text-white tracking-tighter uppercase italic leading-none underline decoration-[#8B00FF] decoration-[40px] underline-offset-[30px] drop-shadow-[20px_20px_0px_#FF00FF]">THE_INDEX.</h2>
            <div className="text-3xl font-black uppercase tracking-[2em] opacity-20 italic">Planetary Investment Reserves MMXXVI</div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-32 w-full lg:max-w-7xl">
            {[
               { tier: "VOL. 01 (CORE)", price: "480", color: "#FF00FF", accent: "#00FFFF", desc: "For independent creative clusters requiring basic visual overload and planetary sync.", items: ["Infinite Color Core v1", "Dopamine Architecture Sync", "Basic Archive Access", "Standard Vibe Routing", "Email Support (Priority High)"] },
               { tier: "VOL. 02 (MAX)", price: "1.9k", featured: true, color: "#00FFFF", accent: "#FFFF00", desc: "For massive institutions demanding the absolute total planetary surplus of visual signals.", items: ["Omni-Channel Visual Excess", "Neural Dopamine Loop v4.8", "Military Grade Neon Vault", "VIP Chaos Counsel Access", "Custom Particle Forge Engine", "Full Source Sovereignty Key"] }
            ].map((p, i) => (
               <motion.div 
                 key={i} 
                 whileHover={{ y: -40, rotate: i === 0 ? -3 : 3 }}
                 className={`p-24 border-[16px] border-white group relative transition-all duration-700 overflow-hidden flex flex-col justify-between h-[1000px] ${p.featured ? 'bg-white text-black' : 'bg-white/5 text-white'}`}
               >
                  <div className="absolute inset-x-0 top-0 h-8" style={{ backgroundColor: p.color }} />
                  <div className="space-y-24 relative z-10">
                     <div className="flex justify-between items-start pt-12 border-b-8 border-current pb-12">
                        <span className="text-3xl font-black uppercase tracking-[0.5em] italic opacity-40">{p.tier}</span>
                        <div 
                          className="w-24 h-24 border-[8px] border-current flex items-center justify-center transition-all duration-1000 group-hover:rotate-[360deg] shadow-[10px_10px_0px_#FF00FF]"
                          style={{ backgroundColor: p.featured ? '#0a0a0a' : 'white', color: p.featured ? 'white' : 'black' }}
                        >
                           <Zap size={54} fill="currentColor" strokeWidth={5} />
                        </div>
                     </div>
                     <div className="text-center space-y-12">
                        <div className="text-[12rem] md:text-[18rem] font-black tracking-tighter leading-none italic relative inline-block">
                           <span className="text-6xl font-black opacity-20 absolute top-0 left-[-6rem] italic">$</span>{p.price}
                           <span className="text-sm font-black uppercase tracking-[2em] opacity-20 absolute bottom-[-4rem] left-0 text-center w-full">Absolute_Annual_Fee</span>
                        </div>
                        <p className="text-3xl font-black uppercase tracking-widest leading-none italic border-l-[20px] border-current pl-12 py-8 opacity-60">
                           {p.desc}
                        </p>
                        <ul className="grid grid-cols-1 gap-10 py-16 text-left max-w-lg mx-auto border-t-4 border-current/10">
                           {p.items.map((item, k) => (
                              <li key={k} className="flex items-center gap-8 text-xl font-black uppercase tracking-[0.3em] italic leading-none hover:translate-x-6 transition-transform">
                                 <CheckCircle2 size={32} style={{ color: p.color }} strokeWidth={6} /> {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
                  <motion.button 
                     whileHover={{ scale: 1.05, skewX: -15, backgroundColor: "#FF00FF", color: "#fff" }}
                     className={`w-full py-16 ${p.featured ? 'bg-black text-white' : 'bg-white text-black'} border-[10px] border-black font-black uppercase text-6xl tracking-[0.2em] shadow-[20px_20px_0px_#FF00FF] transition-all mt-16`}
                  >
                     ACQUIRE_JOY
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 7. Total Immersive Call (CTA) */}
      <section className="w-full py-80 px-12 md:px-32 relative overflow-hidden text-center z-10 bg-[#FF00FF] text-white border-t-[50px] border-black">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 pointer-events-none" />
         <motion.div
           initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
           whileInView={{ opacity: 1, scale: 1.3, rotate: 0 }}
           transition={{ duration: 1.5, type: "spring" }}
           viewport={{ once: true }}
           className="max-w-7xl mx-auto space-y-64 relative z-10"
         >
            <h2 className="text-[15vw] md:text-[22vw] lg:text-[28vw] font-black italic tracking-tighter leading-[0.5] uppercase text-black drop-shadow-[30px_30px_0px_white]">
               ALL_IN<br/>NOW.
            </h2>
            <div className="flex flex-col items-center gap-32">
               <motion.button 
                  whileHover={{ scale: 1.15, rotate: 5, skewX: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="px-48 py-24 bg-white border-[16px] border-black text-black font-black uppercase text-7xl md:text-[10rem] tracking-[0.2em] shadow-[50px_50px_0px_black] hover:shadow-none transition-all flex items-center gap-32 group"
               >
                  YES! <Sparkles size={160} strokeWidth={8} className="group-hover:rotate-[360deg] transition-all duration-[2000ms]" />
               </motion.button>
               <div className="text-4xl font-black uppercase tracking-[3em] opacity-30 italic mt-16 text-black w-full text-center">Transmitting Absolute Surplus // MMXXVI</div>
            </div>
         </motion.div>
      </section>

      {/* 8. Hyper-Branded Over-the-Top Footer */}
      <footer className="w-full p-12 md:p-64 bg-black text-white border-t-[80px] border-white flex flex-col items-center gap-64 relative z-[110] overflow-hidden text-center">
         <div className="absolute top-0 left-0 w-full h-full pattern-dots opacity-10 pointer-events-none" />
         <div className="absolute top-[-20%] right-[-10%] text-[60vw] font-black opacity-[0.03] italic pointer-events-none uppercase text-white">MAX</div>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-64 w-full max-w-screen-2xl mx-auto items-center relative z-10 text-left">
            <div className="lg:col-span-2 space-y-32">
               <div className="flex items-center gap-16 group cursor-pointer transition-all duration-700">
                  <div className="relative">
                     <div className="w-48 h-48 bg-[#FF00FF] border-[12px] border-white flex items-center justify-center text-white -rotate-12 group-hover:rotate-[360deg] group-hover:scale-125 transition-all duration-[2000ms] shadow-[20px_20px_0px_#00FFFF]">
                        <Ghost size={120} fill="white" fillOpacity={0.2} />
                     </div>
                     <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#39FF14] border-8 border-black rounded-full animate-bounce shadow-[10px_10px_0px_white]" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-black text-9xl md:text-[14rem] tracking-tighter uppercase italic leading-none text-white drop-shadow-[15px_15px_0px_#FF00FF]">MAX.ZORVIA</span>
                     <span className="text-[14px] font-black tracking-[5em] text-[#00FFFF] uppercase mt-12 italic">Total Transmission Institutionalized // Absolute Reserves</span>
                  </div>
               </div>
               <p className="max-w-6xl text-4xl font-black italic tracking-tight text-white leading-none border-l-[30px] border-[#FFFF00] pl-20 py-16 opacity-40 hover:opacity-100 transition-opacity">
                  The final architectural layer for digital projects that demand absolute visual surplus, sovereign energy, and infinite structural bandwidth. We build the textures for the dopamine future.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-24 w-full text-right">
               {['Architecture', 'The_Void', 'Spells', 'Protocols', 'Archives', 'Essence', 'Manifesto', 'Chaos', 'Nodes', 'Legal', 'Privacy', 'Gallery'].map(item => (
                  <a key={item} href="#" className="text-3xl font-black uppercase tracking-widest text-[#FF00FF] hover:text-[#39FF14] hover:translate-x-[-20px] transition-all underline decoration-[12px] underline-offset-[20px] decoration-white/5 italic">
                     {item}
                  </a>
               ))}
            </div>
         </div>

         <div className="flex flex-wrap justify-center gap-20 w-full max-w-screen-2xl mx-auto pt-64 border-t-[20px] border-white/5 relative z-10">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, Mail, Phone, MapPin, Globe2].map((Icon, i) => (
               <motion.a 
                  key={i} 
                  whileHover={{ y: -40, rotate: i % 2 === 0 ? 20 : -20, scale: 1.5, backgroundColor: accents[i % accents.length], color: "#000" }}
                  href="#" 
                  className="w-32 h-32 bg-white text-black border-[10px] border-black flex items-center justify-center shadow-[15px_15px_0px_white] transition-all group"
               >
                  <Icon size={54} strokeWidth={5} className="group-hover:scale-125 transition-transform" />
               </motion.a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-2xl mx-auto pt-32 text-2xl font-black text-white/10 uppercase tracking-[2em] italic">
            <span>© MMXXVI MAX.ZORVIA PROTOCOLS // ALL RIGHTS RESERVED_TOTAL</span>
            <div className="flex gap-48 items-center">
               <div className="flex items-center gap-10">
                  <div className="w-8 h-8 bg-[#39FF14] rounded-full animate-pulse shadow-[0_0_40px_#39FF14]" />
                  <span>TRANSMISSION: PEAK</span>
               </div>
               <span>VERACITY: INFINITE</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-shadow-max-mega {
          text-shadow: 15px 15px 0px #FF00FF, 30px 30px 0px #00FFFF, 45px 45px 0px #FFFF00;
        }
        .pattern-dots {
          background-image: radial-gradient(circle at 4px 4px, #fff 4px, transparent 0);
          background-size: 60px 60px;
        }
      `}} />
    </div>
  );
};

export default MaximalismMockup;
