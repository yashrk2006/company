import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, Heart, Cloud, Moon, Sun, Rocket, BarChart3, Activity, ShieldCircle, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const MaximalismMockup = ({ theme }) => {
  const accents = [
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFFF00', // Yellow
    '#FF7F00', // Orange
    '#8B00FF'  // Purple
  ];

  const floatingIcons = [
    { Icon: Sparkles, color: accents[0], size: 48, top: '10%', left: '5%', delay: 0 },
    { Icon: Zap, color: accents[1], size: 64, top: '15%', left: '85%', delay: 1 },
    { Icon: Star, color: accents[2], size: 32, top: '70%', left: '10%', delay: 2 },
    { Icon: Heart, color: accents[3], size: 40, top: '80%', left: '80%', delay: 1.5 },
    { Icon: Cloud, color: accents[4], size: 56, top: '40%', left: '90%', delay: 0.5 },
    { Icon: Rocket, color: accents[0], size: 44, top: '60%', left: '5%', delay: 2.5 },
  ];

  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
    color: accents[i % accents.length]
  }));

  return (
    <div className="min-h-fit w-full relative bg-[#0a0a0a] text-white font-sans overflow-x-hidden selection:bg-white selection:text-black pb-4">
      {/* 1. Immersive Texture Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #FF00FF 10%, transparent 10%, transparent 50%, #FF00FF 50%, #FF00FF 60%, transparent 60%)', backgroundSize: '100px 100px' }} />
      </div>

      {/* 2. Kinetic Particles */}
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
              filter: `blur(2px) drop-shadow(0 0 10px ${p.color})` 
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 3. Global Navbar */}
      <nav className="sticky top-0 z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-transparent mix-blend-difference">
         <div className="flex items-center gap-6 group cursor-pointer">
            <div className="w-16 h-16 bg-white flex items-center justify-center text-black -rotate-12 group-hover:rotate-0 transition-transform">
               <span className="text-5xl font-black italic">Z</span>
            </div>
            <span className="text-4xl font-black uppercase tracking-tighter text-white">MAX.ZORVIA</span>
         </div>
         <div className="hidden lg:flex gap-12">
            {['Platforms', 'Spells', 'Archives', 'Essence'].map(item => (
               <a key={item} href="#" className="text-xl font-black uppercase tracking-widest hover:text-white transition-colors relative group">
                  <span className="relative z-10">{item}</span>
                  <div className="absolute -bottom-2 inset-x-0 h-2 bg-[#FF00FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
               </a>
            ))}
         </div>
         <button className="px-12 py-4 bg-white text-black font-black uppercase text-xl shadow-[10px_10px_0px_#FF00FF] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
            EMBARK
         </button>
      </nav>

      {/* 4. Chaos Hero Section */}
      <section className="relative z-20 min-h-fit flex flex-col items-center justify-center text-center p-8 md:p-32">
         <motion.div
           initial={{ rotate: -5, scale: 0.5, opacity: 0 }}
           animate={{ rotate: 10, scale: 1, opacity: 1 }}
           className="inline-block px-12 py-4 bg-[#FF00FF] border-8 border-white shadow-[15px_15px_0px_#00FFFF] mb-20"
         >
            <span className="text-4xl font-black uppercase tracking-[0.4em] italic leading-none">THE_LIMIT_IS_ZERO</span>
         </motion.div>

         <h1 className="text-7xl md:text-[12rem] lg:text-[15rem] font-black uppercase tracking-tighter leading-[0.7] mb-20 text-shadow-max-mega group decoration-white underline decoration-8 underline-offset-[20px] hover:no-underline transition-all">
            MORE IS <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '4px white' }}>MORE</span> <br />
            <span className="bg-white text-black px-8">ALWAYS.</span>
         </h1>

         <p className="text-2xl md:text-5xl font-black max-w-5xl leading-[0.85] uppercase italic text-[#FFFF00] mb-24 drop-shadow-2xl">
            "Abandon the minimalist cage. Embrace the beautiful chaos of visual surplus. We build for those who want IT ALL."
         </p>

         <div className="flex flex-col md:flex-row gap-12">
            <button className="px-20 py-10 bg-[#00FFFF] text-black font-black uppercase text-4xl shadow-[20px_20px_0px_white] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all">
               LAUNCH_NOW
            </button>
            <button className="px-20 py-10 bg-white text-black font-black uppercase text-4xl shadow-[20px_20px_0px_#8B00FF] hover:shadow-none hover:translate-x-4 hover:translate-y-4 transition-all italic">
               WATCH_SPELL
            </button>
         </div>

         {/* Floating Elements (Batch 2) */}
         {floatingIcons.map(({ Icon, color, size, top, left, delay }, i) => (
            <motion.div
               key={i}
               className="absolute"
               style={{ top, left, zIndex: 30 }}
               animate={{
                  y: [0, -100, 0],
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
               }}
               transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay
               }}
            >
               <Icon size={size * 1.5} style={{ color, filter: `drop-shadow(0 0 20px ${color})` }} />
            </motion.div>
         ))}
      </section>

      {/* 5. Feature Matrix (High Intensity) */}
      <section className="relative z-20 py-64 bg-white text-black border-y-[20px] border-[#FF00FF]">
         <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-4 border-black">
            {[
              { title: "HYPER_INTENSE", icon: Sparkles, desc: "Saturating every interaction with peak sensory feedback systems." },
              { title: "MEGA_DENSITY", icon: BarChart3, desc: "Compressing massive data streams into visually explosive formats." },
              { title: "NEON_GUARD", icon: ShieldCircle, desc: "High-visibility protection layers that refuse to be ignored." },
              { title: "PULSE_FLOW", icon: Activity, desc: "Continuous energy cycles that sustain growth in infinite loops." }
            ].map((f, i) => (
               <div key={i} className="p-20 bg-white group hover:bg-black hover:text-white transition-all duration-300 space-y-12">
                  <div className="w-24 h-24 flex items-center justify-center border-4 border-black group-hover:border-white transition-colors">
                     <f.icon size={56} style={{ color: accents[i % accents.length] }} />
                  </div>
                  <h3 className="text-6xl font-black uppercase tracking-tighter italic">{f.title}</h3>
                  <p className="text-2xl font-bold uppercase leading-tight opacity-40 group-hover:opacity-100">{f.desc}</p>
                  <div className="h-6 w-full bg-slate-100 group-hover:bg-[#FFFF00] overflow-hidden">
                     <motion.div 
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-full w-32 bg-black opacity-20" 
                     />
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Strategic Chaos (Pricing) */}
      <section className="py-64 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-48">
            <h2 className="text-8xl md:text-[14rem] font-black uppercase tracking-tighter leading-none italic underline decoration-[#8B00FF] decoration-[20px] underline-offset-[10px]">THE_INDEX.</h2>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full">
            {[
               { tier: "VOL. 01 (CORE)", price: "280", color: "#FF00FF", details: ["Infinite Color Profiles", "Dopamine Architecture", "Global Chaos Sync", "Email Support (High Priority)"] },
               { tier: "VOL. 02 (MAX)", price: "990", color: "#00FFFF", features: true, details: ["Omni-Channel Excess", "Neural Dopamine Loop", "Military Grade Neon Vault", "VIP Chaos Counsel", "Custom Particle Engine"] }
            ].map((p, i) => (
               <div key={i} className="p-20 border-8 border-white bg-white/5 relative group hover:bg-white hover:text-black transition-all">
                  <div className="absolute inset-x-0 top-0 h-4" style={{ backgroundColor: p.color }} />
                  <div className="flex justify-between items-start mb-16">
                     <span className="text-xl font-black uppercase tracking-widest opacity-40">{p.tier}</span>
                     <Rocket size={32} style={{ color: p.color }} className="animate-bounce" />
                  </div>
                  <div className="text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none italic mb-16">
                     <span className="text-2xl font-bold opacity-30">$</span>{p.price}
                  </div>
                  <ul className="space-y-8 pb-20 border-b-2 border-white/20 group-hover:border-black/20">
                     {p.details.map((d, k) => (
                        <li key={k} className="flex items-center gap-6 text-xl font-black uppercase tracking-tight italic">
                           <CheckCircle2 size={24} style={{ color: p.color }} /> {d}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full mt-16 py-10 bg-white text-black font-black uppercase text-3xl tracking-widest group-hover:bg-black group-hover:text-white transition-all shadow-[15px_15px_0px_#FF00FF]">
                     ACQUIRE_SPELL
                  </button>
               </div>
            ))}
         </div>
      </section>

      {/* 7. Massive Footer */}
      <footer className="p-12 md:p-32 bg-white text-black border-t-[30px] border-[#FFFF00] flex flex-col items-center gap-32 text-center text-white relative">
         <div className="absolute inset-0 bg-black z-0" />
         
         <div className="relative z-10 flex flex-col items-center gap-20">
            <div className="w-56 h-56 bg-[#FF00FF] flex items-center justify-center text-white rotate-12 hover:rotate-0 transition-transform cursor-pointer border-8 border-white shadow-[20px_20px_0px_#00FFFF]">
               <span className="text-9xl font-black italic">!</span>
            </div>
            <div className="space-y-6">
               <h3 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter italic leading-none">MAX.ZORVIA</h3>
               <p className="text-xs font-black tracking-[1.5em] opacity-40 uppercase">Total Transmission Institutionalized // MMXXVI</p>
            </div>
         </div>

         <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-24 w-full lg:max-w-6xl text-[10px] font-black uppercase tracking-[0.5em] opacity-40">
            {['Architecture', 'Spells', 'Protocols', 'Archives', 'Essence', 'Manifesto', 'Support', 'Legal'].map(item => (
                <a key={item} href="#" className="hover:text-[#FF00FF] hover:opacity-100 transition-all">{item}</a>
            ))}
         </div>

         <div className="relative z-10 flex gap-12 pt-24 border-t-2 border-white/10 w-full max-w-5xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-white text-black border-4 border-black flex items-center justify-center hover:bg-[#FF00FF] hover:text-white hover:-translate-y-4 transition-all shadow-[8px_8px_0px_white]">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="relative z-10 pt-24 flex flex-col md:flex-row justify-between w-full max-w-7xl items-center gap-12 text-[12px] font-black uppercase tracking-[1em] opacity-20 italic">
            <span>© MMXXVI ZORVIA SYSTEMS // NO LIMITS RESERVE</span>
            <div className="flex gap-12">
               <span>DOPAMINE: PEAK</span>
               <span>INTENSITY: TOTAL</span>
            </div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .text-shadow-max-mega {
          text-shadow: 10px 10px 0px #FF00FF, 20px 20px 0px #00FFFF, 30px 30px 0px #FFFF00;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
    </div>
  );
};

export default MaximalismMockup;
