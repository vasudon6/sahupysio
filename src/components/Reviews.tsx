import AnimatedHeading from './AnimatedHeading';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, MessageSquareQuote, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';

export default function Reviews() {
  const { clinicData } = useAdmin();
  const reviews = clinicData.reviews || [];
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  if (!reviews || reviews.length === 0) return null;

  return (
    <section className="liquid-glass-card rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/80 shadow-sm relative overflow-hidden mt-6">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 font-medium shadow-sm mb-6"
            >
              <MessageSquareQuote size={14} className="text-[#0d9488]" />
              Patient Stories
            </motion.div>
            <AnimatedHeading 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text leading-[1.15] tracking-tight"
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Patients Say</span>
            </AnimatedHeading>
          </div>
          
          <div className="hidden md:flex gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium duration-300 hover:-translate-y-1"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium duration-300 hover:-translate-y-1"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 -mx-4 px-4 sm:-mx-8 sm:px-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="snap-center w-[85vw] sm:w-[350px] shrink-0 liquid-glass-card rounded-[2rem] p-8 border border-white/60 flex flex-col relative hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 text-[#0d9488]/10 w-16 h-16" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating || 5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-300 text-[15px] leading-relaxed mb-8 flex-grow relative z-10 font-medium">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto relative z-10 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center text-[#0d9488] font-bold text-lg border border-white shadow-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold lg:font-medium tracking-tight shimmer-text leading-none mb-1.5">{review.name}</h4>
                  <span className="text-xs font-bold tracking-widest text-[#0d9488] uppercase">{review.date || 'Recent Patient'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile controls */}
        <div className="flex md:hidden justify-center gap-3 mt-4">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium active:scale-95 transition-transform"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-md border border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-medium active:scale-95 transition-transform"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
