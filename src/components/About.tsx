import AnimatedHeading from './AnimatedHeading';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Activity, Award } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';

export default function About() {
  const { clinicData } = useAdmin();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: { duration: 6, ease: "easeInOut", repeat: Infinity }
    }
  };

  return (
    <section id="about" className="liquid-glass-card rounded-[3rem] p-8 sm:p-12 lg:p-20 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
      {/* Background abstract shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-50 to-transparent rounded-full opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2.5rem] bg-white dark:bg-slate-900 p-3 shadow-2xl shadow-slate-900/5 border border-slate-100 dark:border-slate-800 z-10">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-slate-100 to-slate-50 opacity-50"></div>
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 group">
              <motion.img loading="lazy" decoding="async" 
                initial={{ scale: 1.15 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800" 
                alt="Sahu Physiotherapy Clinic Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-50"></div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="absolute -bottom-6 -right-6 sm:-right-8 liquid-glass-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-[#f0fdfa] flex items-center justify-center text-[#0d9488]">
                <Award size={24} />
              </div>
              <div>
                <p className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1">10<span className="text-[#0d9488]">+</span> Years</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">of Trust</p>
              </div>
            </motion.div>
            
            {/* Decorative Grid */}
            <svg className="absolute -top-6 -left-6 w-24 h-24 text-slate-200 -z-10" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots-about" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#dots-about)" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 font-medium shadow-sm">
              <ShieldCheck size={14} className="text-[#0d9488]" />
              Our Legacy
            </div>
          </motion.div>
          
          <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text tracking-tight leading-[1.15] mb-6">
            Pioneering Care in <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Chhattisgarh</span>
          </AnimatedHeading>
          
          <motion.div variants={itemVariants} className="space-y-4 text-[15px] sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-10 pl-6 border-l-2 border-[#0d9488]/20">
            <p>
              Established in the heart of Raipur at <strong>Roshan Complex, Amlihdih, Mahaveer Nagar</strong>, Sahu Physiotherapy Clinic is Central India's premier destination for advanced rehabilitation and pain management. 
            </p>
            <p>
              Under the visionary leadership of <strong>Dr. Sahu (Sir) and Dr. Sahu (Ma'am)</strong>, our clinic combines evidence-based manual therapy with state-of-the-art medical technology. We specialize in Sports Rehabilitation, Neuro Rehab, Post-Surgical Care, and Painless Manual Therapy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-8 w-full pt-8 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-[#0d9488] mb-2 shadow-sm border border-teal-100/50">
                <Activity size={20} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">5000+</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Happy Patients</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-500 mb-2 shadow-sm border border-green-100/50">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white">100%</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safe Methods</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
