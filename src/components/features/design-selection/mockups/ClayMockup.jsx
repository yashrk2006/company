import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Bell, Heart, Smile, Sparkles, MessageCircle, Share, Send,
  Zap, Shield, Globe, Layers, Star, Plus, Check, Heart as HeartFilled,
  MousePointer2, Gamepad2, Camera, Music, Video, User
} from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from '../../../ui/Icons';

const ClayMockup = ({ theme }) => {
  return (
    <div className="min-h-fit relative overflow-x-hidden bg-[#FDF2F8] font-sans selection:bg-[#F472B6] selection:text-white flex flex-col">
      {/* 1. Playful Background Shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <motion.div 
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#FBCFE8] rounded-full blur-2xl opacity-60"
        />
        <motion.div 
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-40 right-40 w-64 h-64 bg-[#DBEAFE] rounded-full blur-3xl opacity-60"
        />
        <motion.div 
           animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 10, repeat: Infinity }}
           className="absolute top-[40%] right-[10%] w-96 h-96 bg-pink-100 rounded-full blur-[100px]"
        />
      </div>

      {/* 2. Soft Navbar */}
      <nav className="sticky top-6 z-[100] mx-6 md:mx-auto max-w-7xl w-[calc(100%-3rem)] bg-white/60 backdrop-blur-2xl px-8 py-4 flex justify-between items-center rounded-[2.5rem] border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.03),inset_5px_5px_10px_#ffffff]">
         <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#F472B6] rounded-2xl flex items-center justify-center text-white shadow-[inset_3px_3px_6px_rgba(255,255,255,0.4),4px_4px_8px_rgba(244,114,182,0.3)]">
               <Smile size={24} />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800">zorvia.<span className="text-[#F472B6]">clay</span></span>
         </div>
         
         <div className="hidden lg:flex gap-10 text-sm font-bold text-slate-500">
            {['Tactile', 'Objects', 'Physics', 'Playbook'].map(item => (
              <a key={item} href="#" className="hover:text-[#F472B6] transition-all">{item}</a>
            ))}
         </div>

         <button className="px-8 py-3 bg-white text-slate-800 font-black text-xs uppercase tracking-widest rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.05),-5px_-5px_10px_#ffffff,inset_2px_2px_4px_#ffffff] hover:scale-105 transition-all">
            Join Play
         </button>
      </nav>

      {/* 3. Hero Section (Peak Tactility) */}
      <section className="relative z-10 p-12 lg:p-32 flex flex-col items-center justify-center text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl flex flex-col items-center"
         >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [-5, 5, -5]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-32 h-32 bg-white rounded-[2.5rem] mb-12 flex items-center justify-center text-5xl
                         shadow-[15px_15px_30px_rgba(0,0,0,0.05),-10px_-10px_20px_#ffffff,inset_5px_5px_10px_#ffffff,inset_-5px_-5px_10px_rgba(0,0,0,0.02)]"
            >
              <Smile className="text-pink-400" size={56} />
            </motion.div>

            <div className="mb-8">
               <div className="inline-flex px-6 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-[#F472B6] 
                               shadow-[inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.02),4px_4px_8px_rgba(0,0,0,0.05)]">
                  Tactile Protocol // v4.0
               </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#1E293B] leading-[0.9] mb-12">
               Interfaces <br />
               <span className="text-[#F472B6]">You Can Feel.</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-[#64748B] max-w-2xl leading-relaxed mb-16">
               Tactile, bouncy, and delightfully squishy. Digital objects that behave like physical matter, designed for the next era of interaction.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="h-20 px-16 bg-[#F472B6] text-white font-black text-lg rounded-[2rem] shadow-[0_15px_30px_rgba(244,114,182,0.4),inset_5px_5px_10px_rgba(255,255,255,0.3),inset_-5px_-5px_10px_rgba(0,0,0,0.1)]"
               >
                  Start Bouncing
               </motion.button>

               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="h-20 px-16 bg-white text-[#1E293B] font-black text-lg rounded-[2rem] shadow-[10px_10px_30px_rgba(0,0,0,0.05),-10px_-10px_25px_#ffffff,inset_3px_3px_6px_#ffffff]"
               >
                  Watch Demo
               </motion.button>
            </div>
         </motion.div>
      </section>

      {/* 4. Tactile Objects Grid */}
      <section className="relative z-10 py-32 px-6 md:px-12 bg-white/30 backdrop-blur-sm border-y border-white/60">
         <div className="max-w-7xl mx-auto space-y-24">
            <div className="text-center space-y-4">
               <span className="text-xs font-black uppercase tracking-widest text-pink-400">Playful Components</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">The Clay Collection.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               {[
                  { title: "Soft_Shadows", icon: Layers, color: "bg-blue-100 text-blue-500" },
                  { title: "Bouncy_Physics", icon: Zap, color: "bg-orange-100 text-orange-500" },
                  { title: "Fluid_Motion", icon: Sparkles, color: "bg-purple-100 text-purple-500" },
                  { title: "Global_Sync", icon: Globe, color: "bg-green-100 text-green-500" }
               ].map((f, i) => (
                  <div key={i} className="p-10 bg-white rounded-[3rem] shadow-[15px_15px_30px_rgba(0,0,0,0.03),inset_5px_5px_10px_#ffffff] group hover:scale-[1.02] transition-all">
                     <div className={`w-20 h-20 ${f.color} rounded-[1.8rem] flex items-center justify-center mb-10 shadow-[inset_3px_3px_6px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.05)]`}>
                        <f.icon size={36} strokeWidth={2.5} />
                     </div>
                     <h3 className="text-2xl font-black text-slate-800 mb-4">{f.title}</h3>
                     <p className="text-sm font-bold text-slate-400 leading-relaxed mb-8">Interaction that responds with natural weight and squish.</p>
                     <div className="flex gap-2">
                        <div className="w-full h-3 bg-slate-50 rounded-full overflow-hidden shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05)]">
                           <motion.div 
                             animate={{ width: ['20%', '80%', '20%'] }} transition={{ duration: 4, repeat: Infinity }}
                             className="h-full bg-pink-300 rounded-full" 
                           />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Bubbled Pricing */}
      <section className="py-32 px-6 md:px-12">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight mb-24 text-center">Bouncy Access.</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
               <div className="p-16 bg-white rounded-[4rem] shadow-[20px_20px_40px_rgba(0,0,0,0.04),inset_10px_10px_20px_#ffffff] flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-blue-50 text-blue-400 rounded-full flex items-center justify-center mb-12 shadow-[0_10px_20px_rgba(0,0,0,0.05),inset_5px_5px_10px_#ffffff]">
                     <Star size={40} />
                  </div>
                  <div className="text-7xl font-black text-slate-800 mb-4">$20<span className="text-base text-slate-400 font-bold ml-2">/month</span></div>
                  <p className="text-sm font-black text-pink-400 uppercase tracking-widest mb-12 italic underline decoration-blue-100 underline-offset-8">Starter_Bubble</p>
                  <ul className="space-y-6 mb-16">
                     {['Tactile Interface Kit', 'Basic Bouncy Logic', 'Community Play', 'Daily Soft Updates'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-sm font-bold text-slate-500">
                           <div className="w-2 h-2 bg-pink-400 rounded-full" /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-6 bg-slate-100 text-slate-800 font-black uppercase text-xs tracking-widest rounded-full shadow-[5px_5px_10px_rgba(0,0,0,0.05),inset_2px_2px_5px_#ffffff] hover:bg-pink-100 hover:text-pink-500 transition-all">Claim Space</button>
               </div>

               <div className="p-16 bg-[#FBCFE8] rounded-[4rem] shadow-[20px_20px_40px_rgba(244,114,182,0.2),inset_10px_10px_20px_rgba(255,255,255,0.4)] flex flex-col items-center text-center relative overflow-hidden">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }} transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 blur-3xl rounded-full" 
                  />
                  <div className="w-24 h-24 bg-white text-[#F472B6] rounded-full flex items-center justify-center mb-12 shadow-[0_10px_25px_rgba(244,114,182,0.3),inset_5px_5px_10px_#ffffff]">
                     <Sparkles size={40} />
                  </div>
                  <div className="text-7xl font-black text-slate-800 mb-4">$80<span className="text-base text-pink-500 font-bold ml-2">/month</span></div>
                  <p className="text-sm font-black text-white uppercase tracking-[0.3em] mb-12 italic bg-[#F472B6] px-6 py-2 rounded-full shadow-lg">PRO_ELASTIC</p>
                  <ul className="space-y-6 mb-16">
                     {['Unlimited Physics Objects', 'Networked Squish Cloud', 'Priority Spring Response', 'Custom Fluid Textures', '24/7 Bouncy Support'].map(item => (
                        <li key={item} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                           <Plus size={18} /> {item}
                        </li>
                     ))}
                  </ul>
                  <button className="w-full py-6 bg-white text-[#F472B6] font-black uppercase text-xs tracking-[0.2em] rounded-full shadow-[0_15px_30px_rgba(244,114,182,0.3),inset_5px_5px_10px_#ffffff] hover:scale-105 transition-all">Expand Access</button>
               </div>
            </div>
         </div>
      </section>

      {/* 6. Soft Footer */}
      <footer className="bg-white/40 backdrop-blur-xl border-t border-white p-12 md:p-32 rounded-t-[5rem] mt-24">
         <div className="max-w-7xl mx-auto flex flex-col gap-24 font-bold">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
               <div className="lg:col-span-2 space-y-10">
                  <div className="flex items-center gap-6">
                     <div className="w-20 h-20 bg-[#FBCFE8] rounded-[2rem] shadow-[inset_5px_5px_10px_#ffffff,8px_8px_16px_rgba(0,0,0,0.03)] flex items-center justify-center text-[#F472B6]">
                        <Smile size={48} />
                     </div>
                     <h4 className="text-4xl font-black tracking-tighter text-slate-800 uppercase italic">Zorvia.<span className="text-pink-400">Clay</span></h4>
                  </div>
                  <p className="max-w-md text-base text-slate-400 leading-relaxed uppercase italic tracking-widest">Digital ceramics for the future web. Squishy, tactile systems that elevate the human-screen connection.</p>
               </div>

               <div className="space-y-8">
                  <div className="text-xs font-black text-pink-400 uppercase tracking-widest">Protocols</div>
                  <div className="flex flex-col gap-6 text-sm text-slate-400 uppercase tracking-widest">
                     <a href="#" className="hover:text-pink-400 transition-colors">Spring_Core</a>
                     <a href="#" className="hover:text-pink-400 transition-colors">Elastic_UI</a>
                     <a href="#" className="hover:text-pink-400 transition-colors">Physics_Node</a>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="text-xs font-black text-pink-400 uppercase tracking-widest">Company</div>
                  <div className="flex flex-col gap-6 text-sm text-slate-400 uppercase tracking-widest">
                     <a href="#" className="hover:text-pink-400 transition-colors">Playground</a>
                     <a href="#" className="hover:text-pink-400 transition-colors">Archives</a>
                     <a href="#" className="hover:text-pink-400 transition-colors">Status</a>
                  </div>
               </div>
            </div>

            <div className="pt-20 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="flex gap-8">
                  {[GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon].map((Icon, i) => (
                    <a key={i} href="#" className="w-16 h-16 bg-white border border-white shadow-[5px_5px_10px_rgba(0,0,0,0.03),inset_3px_3px_6px_#ffffff] rounded-3xl flex items-center justify-center text-slate-400 hover:text-pink-400 hover:scale-110 transition-all font-serif">
                       <Icon size={24} />
                    </a>
                  ))}
               </div>
               
               <div className="text-[12px] font-black uppercase tracking-[0.5em] text-slate-300 italic">
                  © MMXXVI Zorvia SOFT SYSTEMS // Squishy_v4.8
               </div>
            </div>
         </div>
         
         {/* Constant Bottom HUD (Like mobile bar) */}
         <div className="mt-20 flex justify-center gap-4">
            {[MessageCircle, Share, Send, Sparkles].map((Icon, i) => (
               <motion.div
                 key={i}
                 whileHover={{ scale: 1.1, y: -5 }}
                 className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-300
                            shadow-[5px_5px_10px_rgba(0,0,0,0.02),-5px_-5px_10px_#ffffff,inset_2px_2px_4px_#ffffff,inset_-2px_-2px_4px_rgba(0,0,0,0.01)]"
               >
                  <Icon size={20} />
               </motion.div>
            ))}
         </div>
      </footer>
    </div>
  );
};

export default ClayMockup;
