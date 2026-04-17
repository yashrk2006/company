import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Coffee, Music, Camera, Heart, Sun, Rainbow, Sparkles, ChevronRight, CheckCircle2, Volume2, Gamepad, Radio, Play, ArrowRight } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../../../ui/Icons';

const RetroMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#FEF3C7] text-[#111111] font-serif selection:bg-[#EA580C] selection:text-white pb-4">
      {/* 1. Animated Groovy Sunburst Background */}
      <div className="fixed inset-0 flex items-center justify-center opacity-10 pointer-events-none overflow-hidden z-0">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="w-[3000px] h-[3000px] bg-[repeating-conic-gradient(#EA580C_0_15deg,transparent_0_30deg)]"
         />
      </div>

      {/* 2. Paper Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.2] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] z-[50]" />

      {/* 3. Retro Navbar */}
      <nav className="sticky top-0 z-[100] px-8 md:px-16 py-6 border-b-8 border-black bg-white flex justify-between items-center shadow-[0_10px_0_rgba(0,0,0,1)]">
         <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 bg-[#991B1B] rounded-full border-4 border-black shadow-[4px_4px_0px_#000] flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
               <Zap size={24} fill="currentColor" />
            </div>
            <span className="font-black text-3xl uppercase italic tracking-tighter hover:text-[#EA580C] transition-colors">ZORVIA.77</span>
         </div>
         <div className="hidden lg:flex gap-12 font-black text-sm uppercase tracking-[0.2em]">
            {['Archives', 'Protocol', 'Manifesto', 'Hardware'].map(item => (
              <a key={item} href="#" className="hover:text-[#EA580C] transition-all decoration-8 underline-offset-8 hover:underline italic">{item}</a>
            ))}
         </div>
         <button className="px-8 py-3 bg-[#991B1B] text-white border-4 border-black shadow-[4px_4px_0px_#000] font-black uppercase text-xs tracking-widest hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Join Club
         </button>
      </nav>

      {/* 4. Hero Section */}
      <section className="relative z-10 p-8 md:p-16 lg:p-32 max-w-7xl mx-auto flex flex-col items-center text-center">
         <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex items-center gap-4 px-6 py-3 bg-[#FDE68A] border-4 border-black rounded-full shadow-[6px_6px_0px_#000] mb-16 rotate-2"
         >
            <Sun className="text-[#EA580C] animate-spin-slow" size={24} />
            <span className="text-sm font-black uppercase tracking-widest">Golden Age Tech is Here!</span>
         </motion.div>

         <h1 className="text-7xl md:text-[10rem] lg:text-[13rem] font-black uppercase tracking-tighter italic leading-[0.75] text-[#991B1B] drop-shadow-[8px_8px_0px_white] mb-16">
            GROOVY <br/> 
            <span className="text-[#EA580C]">LOGIC & </span> <br/>
            RADICAL <br/>
            <span className="relative">
               TECH.
               <Sparkles className="absolute -top-10 -right-16 text-[#FACC15]" size={80} />
            </span>
         </h1>

         <p className="text-2xl md:text-4xl font-black leading-[1.1] max-w-4xl text-[#111] mb-20 italic">
            "We're bringing back the energy of 1977 with the computational power of 2026. High-vibe engineering for a brighter digital world."
         </p>

         <div className="flex flex-col md:flex-row gap-8">
            <button className="px-16 py-8 bg-[#EA580C] text-white border-8 border-black rounded-[3rem] font-black uppercase tracking-[0.2em] text-2xl shadow-[15px_15px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex items-center gap-6">
               Start Session
               <Play size={24} fill="currentColor" />
            </button>
            <button className="px-16 py-8 bg-white text-black border-8 border-black rounded-[3rem] font-black uppercase tracking-[0.2em] text-2xl shadow-[15px_15px_0px_#000] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
               Our Vibe
            </button>
         </div>

         {/* Floating Retro Elements */}
         <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
            {[Music, Camera, Gamepad, Radio].map((Icon, i) => (
               <motion.div
                 key={i}
                 animate={{ y: [0, -20, 0], rotate: [0, i % 2 === 0 ? 5 : -5, 0] }}
                 transition={{ duration: 3 + i, repeat: Infinity }}
                 className="aspect-square bg-white border-4 border-black rounded-[2rem] shadow-[10px_10px_0px_rgba(0,0,0,0.1)] flex items-center justify-center text-[#991B1B]"
               >
                  <Icon size={64} strokeWidth={2.5} />
               </motion.div>
            ))}
         </div>
      </section>

      {/* 5. Feature Matrix (The Manifesto) */}
      <section className="relative z-10 py-48 bg-[#991B1B] text-white border-y-[12px] border-black">
         <div className="max-w-7xl mx-auto px-8 md:px-16 text-center mb-32">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic drop-shadow-[6px_6px_0px_black]">Our Manifesto.</h2>
            <div className="mt-8 h-4 w-64 bg-[#FDE68A] mx-auto border-4 border-black shadow-[4px_4px_0px_#000]" />
         </div>

         <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            {[
              { title: "Vibe Dynamics", icon: Volume2, desc: "Synchronizing high-fidelity audio signals with your digital workflows for peak performance." },
              { title: "Neon Grids", icon: Zap, desc: "Building resilient infrastructures that shine in the darkest corners of the global web." },
              { title: "Radical Flow", icon: Coffee, desc: "Optimized deployment cycles that keep your team energized and your systems fluid." },
              { title: "Paper Trails", icon: Heart, desc: "Deep-layer documentation with a human touch. We value the soul as much as the code." },
              { title: "Analog Security", icon: ShieldCheck, desc: "Military-grade protection wrapped in an approachable, tactile architectural layer." },
              { title: "Golden Edge", icon: Sun, desc: "Pushing the boundaries of what's possible with a warm, optimistic outlook on scale." }
            ].map((f, i) => (
               <div key={i} className="group p-12 bg-[#FEF3C7] border-4 border-black rounded-[3rem] shadow-[10px_10px_0px_#000] hover:-translate-y-4 transition-all cursor-default">
                  <div className="w-20 h-20 bg-white border-4 border-black rounded-2xl flex items-center justify-center text-[#991B1B] mb-10 shadow-[6px_6px_0px_#000] group-hover:bg-[#EA580C] group-hover:text-white transition-all">
                     <f.icon size={40} />
                  </div>
                  <h3 className="text-4xl font-black text-black uppercase tracking-tighter italic mb-6">{f.title}</h3>
                  <p className="text-lg font-bold text-black/60 leading-tight uppercase tracking-tight">{f.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* 6. Pricing Index (Subscription) */}
      <section className="py-48 px-8 md:px-16 max-w-7xl mx-auto space-y-32">
         <div className="flex flex-col items-center gap-6">
            <span className="px-6 py-2 bg-black text-white text-[10px] font-black uppercase tracking-[0.6em] rounded-full">Membership Options</span>
            <h2 className="text-6xl md:text-9xl font-black uppercase text-center tracking-tighter italic">CHOOSE YOUR GROOVE.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-white p-16 border-8 border-black rounded-[4rem] shadow-[20px_20px_0px_#EA580C] space-y-16 group hover:rotate-1 transition-transform">
               <div className="flex justify-between items-start">
                  <span className="text-xl font-black uppercase italic tracking-widest text-[#991B1B]">Classic Plan</span>
                  <Camera size={32} className="opacity-20 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="text-9xl font-black tracking-tighter text-black">$80<span className="text-lg font-bold opacity-30 mt-auto ml-4">/YR</span></div>
               <ul className="space-y-6 pt-10 border-t-4 border-black/5">
                  {['Lofi Dashboard Access', 'Golden Age Themes', 'Standard Support', 'Monthly Archives'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xl font-black uppercase italic tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity">
                        <CheckCircle2 size={24} className="text-[#EA580C]" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-black text-white font-black uppercase text-xl tracking-widest rounded-full hover:bg-[#EA580C] transition-all flex items-center justify-center gap-4">
                  Start Classic
                  <ArrowRight size={24} />
               </button>
            </div>

            <div className="bg-[#EA580C] p-16 border-8 border-black rounded-[4rem] shadow-[20px_20px_0px_#991B1B] space-y-16 group text-white hover:-rotate-1 transition-transform relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-10">
                  <Star size={300} fill="white" />
               </div>
               <div className="flex justify-between items-start relative z-10">
                  <span className="text-xl font-black uppercase italic tracking-widest text-white">Radical Plan</span>
                  <Zap size={32} fill="white" />
               </div>
               <div className="text-9xl font-black tracking-tighter text-white relative z-10">$240<span className="text-lg font-bold opacity-40 mt-auto ml-4">/YR</span></div>
               <ul className="space-y-6 pt-10 border-t-4 border-white/20 relative z-10">
                  {['Hifi Infrastructure Access', 'All Retro Variations', 'Priority Vibe Check', 'Infinite Cloud Storage', 'VIP Social Node'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xl font-black uppercase italic tracking-tighter">
                        <CheckCircle2 size={24} className="text-white" /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-8 bg-white text-[#EA580C] font-black uppercase text-xl tracking-widest rounded-full hover:bg-black hover:text-white transition-all shadow-2xl relative z-10">
                  GO RADICAL
               </button>
            </div>
         </div>
      </section>

      {/* 7. Fun Footer */}
      <footer className="p-12 md:p-32 bg-white border-t-[12px] border-black flex flex-col items-center gap-24 text-center">
         <div className="flex flex-col items-center gap-10 group">
            <div className="w-32 h-32 bg-[#EA580C] border-8 border-black rounded-3xl shadow-[10px_10px_0px_#000] flex items-center justify-center text-white -rotate-6 group-hover:rotate-0 transition-transform">
               <Rainbow size={64} />
            </div>
            <div className="space-y-4">
               <h4 className="text-6xl font-black text-black tracking-tighter uppercase italic">ZORVIA.77</h4>
               <p className="text-xs font-black tracking-[1em] text-black/20 uppercase">Radical Engineering Since MMXXVI</p>
            </div>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-black/40">
            {['Archives', 'Manifesto', 'Support', 'Legal', 'Press', 'Hardware', 'Stickers', 'Gallery'].map(item => (
               <a key={item} href="#" className="hover:text-[#EA580C] transition-colors decoration-4 underline-offset-8 hover:underline">{item}</a>
            ))}
         </div>

         <div className="flex gap-10 pt-20 border-t-4 border-black/5 w-full max-w-4xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-[#FEF3C7] border-4 border-black rounded-[2rem] flex items-center justify-center text-black hover:bg-[#EA580C] hover:text-white hover:rotate-6 transition-all shadow-[6px_6px_0px_#000]">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-10 text-[11px] font-black text-black/20 uppercase tracking-[0.8em]">
            <span>© 1977-2026 ZORVIA RADICAL SYSTEMS</span>
            <span>STAY GROOVY // STAY RADICAL</span>
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

export default RetroMockup;
