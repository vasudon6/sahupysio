import AnimatedCounter from "./AnimatedCounter";
import AnimatedHeading from './AnimatedHeading';
import { motion } from 'motion/react';
import { ArrowRight, Star, Activity, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const heroImage = "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785563827/sahu_clinic_rrdnen.png";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-4, 4, -4],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden flex items-center min-h-[85vh]">
      {/* Minimal Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f0fdfa] to-transparent rounded-full mix-blend-multiply filter blur-[80px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#f0fdfa] to-transparent rounded-full mix-blend-multiply filter blur-[80px] opacity-70 -translate-x-1/3 translate-y-1/3"></div>

      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center max-w-xl mx-auto lg:mx-0 text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 font-medium shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488]"></span>
              </span>
              <AnimatedCounter value={5000} duration={2.5} />+ happy patients
            </div>
          </motion.div>
          
          <AnimatedHeading as="h1" className="text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-semibold lg:font-medium tracking-tight shimmer-text tracking-tight leading-[1.15] mb-6">
            Best Physiotherapy <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Clinic in Raipur</span>
          </AnimatedHeading>
          
          <motion.p variants={itemVariants} className="text-lg text-slate-700 dark:text-slate-300 font-medium mb-8 leading-relaxed">
            Expert physiotherapy tailored to your body's unique needs. We combine advanced techniques with dedicated care to eliminate pain and restore your natural movement.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <motion.a 
              href="#booking" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#0d9488] text-white rounded-xl font-bold shadow-lg shadow-[#0d9488]/20 hover:bg-teal-700 hover:shadow-[#0d9488]/40 transition-all flex items-center justify-center gap-2 group relative overflow-hidden group/btn"
            >
              Book Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent glass-shine-effect pointer-events-none" />
            </motion.a>
            <motion.a 
              href="#services" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl font-bold shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:bg-slate-800/50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 relative overflow-hidden group/btn"
            >
              Explore Services
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent glass-shine-effect pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex items-center gap-8 justify-center lg:justify-start pt-6 border-t border-slate-100 dark:border-slate-800">
             <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                   <Star size={16} fill="currentColor" />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200"><AnimatedCounter value={5.0} decimals={1} duration={2} /> star rating (29)</span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">From <AnimatedCounter value={5000} duration={2.5} />+ happy patientss</span>
             </div>
             <div className="h-10 w-px bg-slate-200"></div>
             <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl font-black text-slate-900 dark:text-white mb-1 flex items-center gap-1">
                  <AnimatedCounter value={8} duration={2} /><span className="text-[#0d9488]">+</span>
                </span>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Years Exp.</span>
                <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Trusted Experts</span>
             </div>
          </motion.div>
        </motion.div>
        
        {/* Right Content - Visual Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center mt-12 lg:mt-0"
        >
          {/* Main Visual Container */}
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-[2.5rem] bg-white dark:bg-slate-900 p-2.5 shadow-2xl shadow-teal-900/5 border border-slate-100 dark:border-slate-800">
            
            {/* The Image */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                fetchPriority="high" 
                decoding="async" 
                src={heroImage} 
                alt="Medical Professional" 
                className="w-full h-full object-cover"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Element 1 - Activity */}
            <motion.div 
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="absolute -right-1 lg:-right-4 top-1/4 liquid-glass-card p-1.5 lg:p-2 rounded-lg flex items-center gap-1.5 lg:gap-2 z-20"
              style={{ willChange: "transform" }}
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 rounded-full bg-teal-50 flex items-center justify-center text-[#0d9488]">
                <Activity className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="pr-1 lg:pr-1.5">
                <div className="text-[7px] lg:text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Recovery</div>
                <div className="font-black text-slate-800 dark:text-slate-200 text-[9px] lg:text-[10px] tabular-nums whitespace-nowrap"><AnimatedCounter value={99} duration={2} />% Success</div>
              </div>
            </motion.div>

            {/* Floating Element 2 - Check */}
            <motion.div 
              variants={floatVariants}
              initial="initial"
              animate="animate"
              style={{ animationDelay: '-2s', willChange: "transform" }}
              className="absolute -left-1 lg:-left-4 bottom-1/4 liquid-glass-card p-1.5 lg:p-2 rounded-lg flex items-center gap-1.5 lg:gap-2 z-20"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                <CheckCircle2 className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
              </div>
              <div className="pr-1 lg:pr-1.5">
                <div className="font-black text-slate-800 dark:text-slate-200 text-[9px] lg:text-[10px] tabular-nums whitespace-nowrap">Certified</div>
                <div className="text-[7px] lg:text-[8px] font-bold text-slate-400 uppercase tracking-wider">Professionals</div>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <svg className="absolute -top-6 -right-6 w-24 h-24 text-slate-200 -z-10" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
            </svg>
            
            <svg className="absolute -bottom-6 -left-6 w-24 h-24 text-[#0d9488]/10 -z-10" fill="currentColor" viewBox="0 0 100 100">
              <pattern id="dots2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" />
              </pattern>
              <rect x="0" y="0" width="100" height="100" fill="url(#dots2)" />
            </svg>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
