import AnimatedHeading from './AnimatedHeading';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, ArrowRight, Award, GraduationCap } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';

export default function Doctor() {
  const { clinicData } = useAdmin();
  const doctors = clinicData.doctors?.slice(0, 2) || [];
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  if (doctors.length === 0) return null;

  return (
    <section id="doctors" className="py-16 bg-white dark:bg-slate-950 relative overflow-hidden mt-4">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/50 dark:bg-teal-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] font-bold uppercase tracking-widest text-slate-800 dark:text-slate-300 mb-4"
          >
            <Sparkles size={14} className="text-teal-600 dark:text-teal-400" />
            Our Specialists
          </motion.div>
          
          <AnimatedHeading 
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Meet Our Expert <span className="text-teal-600 dark:text-teal-400">Doctors</span>
          </AnimatedHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {doctors.map((doc, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="group relative bg-white dark:bg-slate-900 rounded-[24px] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-teal-900/20 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row"
            >
              {/* Image Section - Compact */}
              <div className="w-full sm:w-[220px] lg:w-[260px] h-[280px] sm:h-auto shrink-0 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img loading="lazy" decoding="async" 
                  src={doc.image || `https://ui-avatars.com/api/?name=${doc.name.replace(' ', '+')}&background=0D8ABC&color=fff&size=200`} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent sm:bg-gradient-to-r sm:from-slate-900/50 sm:to-transparent opacity-80"></div>
                
                {/* Floating Experience */}
                {doc.experience && (
                  <div className="absolute bottom-4 left-4 sm:bottom-auto sm:top-4 sm:left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-white/20 dark:border-slate-700 flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    <div>
                      <div className="text-sm font-black text-slate-900 dark:text-white leading-none">{doc.experience}</div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">Years Exp</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Content Section */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-center relative">
                <div className="mb-1 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase">
                  {doc.title}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                  {doc.name}
                </h3>
                
                {doc.degrees && (
                  <div className="flex items-start gap-2 mb-4 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-snug">
                      {doc.degrees}
                    </span>
                  </div>
                )}
                
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {doc.description}
                </p>
                
                <div className="mt-auto">
                  <a href="#booking" className="inline-flex items-center gap-2 text-sm font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 group/btn transition-colors">
                    Book Appointment
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
