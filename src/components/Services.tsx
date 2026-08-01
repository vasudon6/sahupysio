import AnimatedHeading from './AnimatedHeading';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { useAdmin } from '../store/AdminContext';

export default function Services() {
  const { publicData } = useAdmin();
  const services = publicData.services || [];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const autoScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const card = scrollRef.current.children[0] as HTMLElement;
          const cardWidth = card ? card.offsetWidth : 300;
          const gap = 16; // 1rem
          scrollRef.current.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
        }
      }
    };

    const intervalId = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalId);
  }, []);


  return (
    <section className="liquid-glass-card rounded-[3rem] border border-white/80 p-8 sm:p-12 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden mt-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-[#0d9488]" />
            Our Services
          </motion.div>
          <AnimatedHeading 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text leading-[1.15] tracking-tight"
          >
            Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Treatment Options</span>
          </AnimatedHeading>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link 
            to="/services" 
            className="group flex items-center gap-3 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-2 pl-6 rounded-full font-bold border border-slate-200 dark:border-slate-700 hover:bg-[#0d9488] hover:border-[#0d9488] hover:text-white transition-all duration-300 shadow-sm shrink-0 relative overflow-hidden group/btn"
          >
            <span className="text-sm tracking-wide relative z-10">View all Services</span>
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent glass-shine-effect pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 font-medium group-hover:bg-white dark:bg-slate-900/20 group-hover:text-white transition-colors duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden -mx-4 sm:-mx-8 w-[calc(100%+2rem)] sm:w-[calc(100%+4rem)]">
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-12 pt-4 hide-scrollbar px-4 sm:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-slate-900 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl hover:shadow-[#0d9488]/10 dark:hover:shadow-[#0d9488]/30 hover:border-[#0d9488]/20 transition-all duration-500 flex flex-col relative overflow-hidden w-[260px] sm:w-[280px] lg:w-[300px] shrink-0 cursor-pointer snap-center"
            >
              <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <div className="absolute inset-0 bg-[#0d9488]/0 group-hover:bg-[#0d9488]/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                <img loading="lazy" decoding="async" 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow bg-white dark:bg-slate-900">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0d9488] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-medium line-clamp-3">
                  {service.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 group-hover:border-[#0d9488]/20 transition-colors">
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-slate-900 dark:text-white group-hover:text-[#0d9488] font-bold text-sm tracking-wide transition-colors duration-300">
                    Discover Treatment
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
