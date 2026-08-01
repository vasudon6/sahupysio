import { motion } from 'motion/react';
import { ArrowRight, Award, Activity, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IntroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-12, 12, -12],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  const floatVariantsReverse = {
    initial: { y: 0 },
    animate: {
      y: [12, -12, 12],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="liquid-glass-card rounded-[3rem] p-8 sm:p-12 lg:p-20 border border-white/80 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-teal-50/30 dark:from-teal-900/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Content Column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-start order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 text-[11px] font-bold uppercase tracking-widest text-slate-700 dark:text-slate-300 font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0d9488]"></span>
              About Our Clinic
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-[44px] font-semibold lg:font-medium tracking-tight shimmer-text leading-[1.15] mb-6 tracking-tight">
            Advance Physiotherapy <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">in Raipur</span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-5 text-[15px] sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-10 border-l-2 border-[#0d9488]/20 pl-6">
            <p>
              At Sahu Physiotherapy, we utilize state-of-the-art technology and advanced treatments to deliver a <strong>99% success rate</strong> in patient recovery. Our modern clinic is equipped with the latest rehabilitation tools to address the root cause of your pain.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex items-center gap-6 pt-2">
            <Link to="/clinic" className="group flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-3.5 rounded-full font-bold shadow-lg shadow-slate-900/20 hover:bg-[#0d9488] dark:hover:bg-[#0d9488] dark:hover:text-white hover:shadow-[#0d9488]/30 transition-all duration-300">
              <span>Read Our Story</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Main Visual Container - Smaller and modern */}
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-[2.5rem] bg-white dark:bg-slate-900 p-3 shadow-2xl shadow-teal-900/10 border border-slate-100 dark:border-slate-800 z-10">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-teal-100/50 to-sky-50/50 dark:from-teal-900/20 dark:to-sky-900/20 opacity-50"></div>
            
            {/* Image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800 group">
              <motion.img loading="lazy" decoding="async" 
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="https://res.cloudinary.com/yfn8ptmo/image/upload/v1785569926/imgi_17_AHRPTWnniAAGihX3lnKZCE5WiL4mXq9DxdQ-u3ewbPwEXxErvGq7oL0JzDm8R1cPX5ZBGLBFxViSVCGvXdQuNCud1GP6RYC8hOrqiagvicR5YfDPG2pr6UAqvG_DzB8Zzjs_k5fuht.jpg" 
                alt="Professional physiotherapy treatment" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Experience Badge 1 */}
            <motion.div 
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-5 -left-4 sm:-left-8 lg:-left-12 liquid-glass-card rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-4 flex items-center gap-2 sm:gap-3 lg:gap-4 z-20 scale-90 sm:scale-95 lg:scale-100 origin-bottom-left"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-[#0d9488] dark:text-teal-400">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <div className="text-sm sm:text-base lg:text-xl font-black text-slate-900 dark:text-white leading-none mb-1">
                  8<span className="text-[#0d9488] dark:text-teal-400">+</span>
                </div>
                <div className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Years Exp.
                </div>
              </div>
            </motion.div>

            {/* Floating Experience Badge 2 */}
            <motion.div 
              variants={floatVariantsReverse}
              initial="initial"
              animate="animate"
              className="absolute top-8 sm:top-10 lg:top-12 -right-4 sm:-right-6 lg:-right-8 liquid-glass-card rounded-xl lg:rounded-2xl p-2 sm:p-2.5 lg:p-3 flex items-center gap-2 lg:gap-3 z-20 scale-90 sm:scale-95 lg:scale-100 origin-top-right"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-rose-50 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-500 dark:text-rose-400">
                <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="pr-1 sm:pr-1.5 lg:pr-2">
                <div className="text-[8px] lg:text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
                  Trusted By
                </div>
                <div className="text-xs lg:text-sm font-black text-slate-900 dark:text-white leading-none">
                  5k+ Patients
                </div>
              </div>
            </motion.div>
            
            {/* Abstract Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0d9488]/5 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl -z-10"></div>
          </div>
          
          {/* Subtle geometric pattern behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-slate-100 dark:border-slate-800 border-dashed -z-10 opacity-60"></div>
        </motion.div>
        
      </div>
    </section>
  );
}
