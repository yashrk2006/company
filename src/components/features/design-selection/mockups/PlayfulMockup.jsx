import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Square, Triangle, Hexagon, Star, Sparkles, Smile, ArrowRight, Heart, Zap, Play, Check, MousePointer2 } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const PlayfulMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-white text-slate-900 font-sans selection:bg-[#8B5CF6] selection:text-white pb-4">
      
      {/* 1. Floating Primitives Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
         {[
            { color: '#F472B6', top: '10%', left: '5%', size: 100, rotate: 15 },
            { color: '#34D399', top: '80%', left: '85%', size: 150, rotate: -10 },
            { color: '#FBBF24', top: '20%', left: '75%', size: 80, rotate: 45 },
            { color: '#8B5CF6', top: '60%', left: '10%', size: 120, rotate: -30 },
            { color: '#60A5FA', top: '40%', left: '90%', size: 60, rotate: 20 },
         ].map((p, i) => (
            <motion.div 
               key={i}
               animate={{ 
                  y: [0, -40, 0], 
                  rotate: [p.rotate, p.rotate + 20, p.rotate],
                  scale: [1, 1.1, 1]
               }} 
               transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
               className="absolute opacity-10 border-[12px]" 
               style={{ 
                  top: p.top, 
                  left: p.left, 
                  width: p.size, 
                  height: p.size, 
                  borderColor: p.color,
                  borderRadius: i % 2 === 0 ? '50%' : '2rem'
               }}
            />
         ))}
      </div>

      {/* 2. Bouncy Navbar */}
      <nav className="sticky top-0 z-[100] px-8 md:px-16 py-6 border-b-8 border-slate-900 bg-white flex justify-between items-center shadow-pop-lg">
         <motion.div 
           whileHover={{ scale: 1.1, rotate: -5 }}
           className="flex items-center gap-4 bg-[#8B5CF6] text-white px-8 py-4 rounded-full border-4 border-slate-900 shadow-pop cursor-pointer"
         >
            <Smile size={32} strokeWidth={3} />
            <span className="font-black text-2xl uppercase tracking-tighter">ZORVIA!</span>
         </motion.div>

         <div className="hidden lg:flex gap-6">
            {['Playground', 'Spells', 'Studio', 'Club'].map((item, i) => (
              <motion.button 
                key={item} whileHover={{ y: -8, rotate: i % 2 === 0 ? 2 : -2 }}
                className="px-8 py-3 bg-slate-100 rounded-[2rem] font-black uppercase text-xs tracking-widest border-4 border-transparent hover:border-slate-900 transition-all hover:bg-white"
              >
                 {item}
              </motion.button>
            ))}
         </div>

         <button className="px-8 py-3 bg-[#FBBF24] border-4 border-slate-900 rounded-full font-black uppercase text-xs tracking-widest shadow-pop hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Start Free
         </button>
      </nav>

      {/* 3. Hero Section */}
      <section className="relative z-10 px-8 md:px-16 pt-24 pb-4 max-w-7xl mx-auto flex flex-col items-center text-center">
         <motion.div
           initial={{ scale: 0, rotate: -20 }}
           animate={{ scale: 1, rotate: 5 }}
           className="inline-flex items-center gap-3 px-6 py-3 bg-[#34D399] border-4 border-slate-900 rounded-full shadow-pop mb-16"
         >
            <Sparkles className="text-white" size={24} />
            <span className="text-sm font-black uppercase tracking-widest text-slate-900">New: Squishy UI 2.0</span>
         </motion.div>

         <h1 className="text-7xl md:text-[10rem] lg:text-[12rem] font-black leading-[0.85] mb-12 tracking-tight block">
            Make Digital <br />
            <span className="text-[#8B5CF6] underline decoration-[12px] decoration-[#FBBF24] underline-offset-8">Fun Again!</span>
         </h1>

         <p className="text-2xl md:text-4xl font-black text-slate-400 max-w-4xl mb-20 leading-tight">
            "Bold lines, vibrant colors, and bouncy animations that make every click feel like a celebration."
         </p>

         <div className="flex flex-col md:flex-row gap-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-[#8B5CF6] text-white border-8 border-slate-900 rounded-[3rem] font-black text-2xl uppercase tracking-widest shadow-pop-lg hover:shadow-none hover:translate-y-2 hover:translate-x-2 transition-all flex items-center gap-6"
            >
               Play Now <Play size={32} fill="currentColor" />
            </motion.button>
            <button className="px-16 py-8 bg-white text-slate-900 border-8 border-slate-900 rounded-[3rem] font-black text-2xl uppercase tracking-widest shadow-pop-lg hover:translate-y-2 hover:translate-x-2 hover:shadow-none transition-all">
               Our Studio
            </button>
         </div>

         {/* Hero Shape Parade */}
         <div className="mt-48 w-full flex flex-wrap justify-center gap-12 md:gap-24">
            {[Triangle, Square, Circle, Hexagon, Heart, Star].map((Icon, i) => (
               <motion.div 
                 key={i}
                 animate={{ 
                    y: [0, -30, 0], 
                    rotate: [0, 45, -45, 0],
                    scale: [1, 1.2, 0.8, 1] 
                 }}
                 transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                 className={`w-32 h-32 md:w-48 md:h-48 rounded-[2rem] border-8 border-slate-900 shadow-pop flex items-center justify-center cursor-pointer`}
                 style={{ backgroundColor: ['#F472B6', '#34D399', '#FBBF24', '#60A5FA', '#8B5CF6', '#F87171'][i] }}
               >
                  <Icon size={64} className="text-white fill-white" strokeWidth={3} />
               </motion.div>
            ))}
         </div>
      </section>

      {/* 4. Squishy Features */}
      <section className="relative z-10 py-48 bg-[#FDE68A] border-y-[12px] border-slate-900">
         <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col items-center">
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 mb-32 tracking-tight text-center italic drop-shadow-[6px_6px_0px_white]">Visual Spells.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
               {[
                 { title: "Bouncy UX", color: "#F472B6", icon: MousePointer2, desc: "Interfaces that respond with meaningful weight and elastic delight." },
                 { title: "Zesty Grids", color: "#34D399", icon: Zap, desc: "Layouts that break the standard cage with radical, asymmetric energy." },
                 { title: "Sticker Pack", color: "#8B5CF6", icon: Sparkles, desc: "Custom decorative elements that bring personality to every pixel." },
                 { title: "Happy Storage", color: "#60A5FA", icon: Circle, desc: "Secure data clusters wrapped in approachable, high-spirit containers." },
                 { title: "Global Rave", color: "#FBBF24", icon: Star, desc: "Resilient node networks designed for massive scale and zero friction." },
                 { title: "Primal Core", color: "#F87171", icon: Heart, desc: "The foundational engine built for peak stability and joyous growth." }
               ].map((f, i) => (
                  <div key={i} className="group p-12 bg-white border-8 border-slate-900 rounded-[4rem] shadow-pop hover:-translate-y-4 transition-all hover:rotate-2">
                     <div className="w-20 h-20 rounded-[1.5rem] border-4 border-black flex items-center justify-center text-white mb-10 shadow-pop" style={{ backgroundColor: f.color }}>
                        <f.icon size={40} strokeWidth={3} />
                     </div>
                     <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">{f.title}</h3>
                     <p className="text-xl font-bold text-slate-400 leading-tight">{f.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Playful Pricing */}
      <section className="py-48 px-8 md:px-16 max-w-7xl mx-auto flex flex-col items-center">
         <div className="text-center mb-32 space-y-6">
            <span className="px-4 py-1 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Fair Play Pricing</span>
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter">Choose Your Pack.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl">
            <div className="bg-white p-16 border-8 border-slate-900 rounded-[5rem] shadow-pop-lg space-y-12 group hover:scale-[1.02] transition-all">
               <div className="flex justify-between items-start">
                  <span className="text-xl font-black uppercase italic tracking-tighter text-slate-400">Starter Pack</span>
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border-2 border-black">
                     <Smile size={24} />
                  </div>
               </div>
               <div className="text-9xl font-black text-slate-900 tracking-tighter">$20<span className="text-sm font-bold opacity-30 ml-4 italic">/MO</span></div>
               <ul className="space-y-6 pt-10 border-t-8 border-slate-50">
                  {['Core Sticker Pack', 'Basic Playground Access', 'Community Spells', 'Daily Vibe Check'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xl font-black italic tracking-tighter opacity-60">
                        <Check size={28} className="text-[#34D399]" strokeWidth={4} /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-10 bg-slate-100 text-slate-900 border-4 border-slate-900 font-black uppercase text-xl tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all">Select Pack</button>
            </div>

            <div className="bg-[#8B5CF6] p-16 border-8 border-slate-900 rounded-[5rem] shadow-pop-lg space-y-12 text-white group hover:scale-[1.02] transition-all relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-10 rotate-45">
                  <Star size={300} fill="white" />
               </div>
               <div className="flex justify-between items-start relative z-10">
                  <span className="text-xl font-black uppercase italic tracking-tighter opacity-70">Extreme Pack</span>
                  <Zap size={32} fill="white" />
               </div>
               <div className="text-9xl font-black tracking-tighter relative z-10">$85<span className="text-sm font-bold opacity-40 ml-4 italic">/MO</span></div>
               <ul className="space-y-6 pt-10 border-t-8 border-white/10 relative z-10">
                  {['Full Kinetic Library', 'Infinite Studio Seats', 'Enterprise Node Clusters', 'Priority Joy Engine', 'Custom Sticker Forge'].map(item => (
                     <li key={item} className="flex items-center gap-4 text-xl font-black italic tracking-tighter">
                        <Check size={28} className="text-[#FBBF24]" strokeWidth={4} /> {item}
                     </li>
                  ))}
               </ul>
               <button className="w-full py-10 bg-white text-[#8B5CF6] border-4 border-slate-900 font-black uppercase text-xl tracking-widest rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-pop relative z-10">GET RADICAL</button>
            </div>
         </div>
      </section>

      {/* 6. Joyful Footer */}
      <footer className="p-12 md:p-32 bg-white border-t-[12px] border-slate-900 flex flex-col items-center gap-24 text-center">
         <div className="flex flex-col items-center gap-10 group">
            <div className="w-32 h-32 bg-[#F472B6] border-8 border-slate-900 rounded-[3rem] shadow-pop flex items-center justify-center text-white -rotate-12 group-hover:rotate-0 transition-transform cursor-pointer">
               <Sparkles size={64} fill="white" fillOpacity={0.2} />
            </div>
            <div className="space-y-4">
               <h4 className="text-6xl font-black text-slate-900 tracking-tighter uppercase italic">Zorvia.Play!</h4>
               <p className="text-xs font-black tracking-[1em] text-slate-300 uppercase">Interactive Joy Engine // MMXXVI</p>
            </div>
         </div>

         <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
            {['Playground', 'Spells', 'Studio', 'Club', 'Archive', 'Prints', 'Stickers', 'Gallery'].map(item => (
                <a key={item} href="#" className="hover:text-[#8B5CF6] transition-colors">{item}</a>
            ))}
         </div>

         <div className="flex gap-10 pt-20 border-t-8 border-slate-50 w-full max-w-4xl justify-center">
            {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
               <a key={i} href="#" className="w-20 h-20 bg-slate-50 border-4 border-slate-900 rounded-[2rem] flex items-center justify-center text-slate-900 hover:bg-[#FBBF24] hover:-translate-y-4 transition-all shadow-pop">
                  <Icon size={32} strokeWidth={3} />
               </a>
            ))}
         </div>

         <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl pt-10 text-[10px] font-black text-slate-200 uppercase tracking-[1em]">
            <span>© 2026 ZORVIA JOY SYSTEMS</span>
            <span>BUILT WITH ENERGY & PRIDE</span>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
         .shadow-pop { box-shadow: 8px 8px 0px 0px rgba(15,23,42,1); }
         .shadow-pop-lg { box-shadow: 16px 16px 0px 0px rgba(15,23,42,1); }
      `}} />
    </div>
  );
};

export default PlayfulMockup;
