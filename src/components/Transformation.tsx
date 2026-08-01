import AnimatedHeading from './AnimatedHeading';
import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';

const treatmentImagesData = [
  { id: "1", name: "Patient 1", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228051/physiotherapy_image_2_xbgati.webp" },
  { id: "2", name: "Patient 2", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785227980/physiotherapy_image_7_xhrggd.webp" },
  { id: "3", name: "Patient 3", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785227991/physiotherapy_image_10_lc4hyw.webp" },
  { id: "4", name: "Patient 4", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228019/physiotherapy_image_5_el1l0q.webp" },
  { id: "5", name: "Patient 5", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228021/physiotherapy_image_1_cu3yet.webp" },
  { id: "6", name: "Patient 6", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228026/physiotherapy_image_4_sdu4d5.webp" },
  { id: "7", name: "Patient 7", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228036/physiotherapy_image_3_rmiz6j.webp" },
  { id: "8", name: "Patient 8", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228037/physiotherapy_image_9_omnzun.webp" },
  { id: "9", name: "Patient 9", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228041/physiotherapy_image_12_vfxtdd.webp" },
];

function TransformationCard({ image, name, outcome }: { image: string; name: string; outcome: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative w-full h-auto rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-shrink-0 group/ba bg-slate-50 dark:bg-slate-800 cursor-pointer"
    >
      <div className="w-full relative h-auto overflow-hidden bg-slate-100 dark:bg-slate-800">
        {image && <img loading="lazy" decoding="async" src={image} alt="Recovery Transformation" className="w-full h-auto object-contain transition-transform duration-700 group-hover/ba:scale-105"  />}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent flex flex-col justify-end p-4 sm:p-5 pointer-events-none opacity-0 group-hover/ba:opacity-100 transition-opacity duration-300">
          <div className="translate-y-4 group-hover/ba:translate-y-0 transition-transform duration-300">
            <h4 className="text-white font-bold text-sm sm:text-base mb-1">{name}</h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 shrink-0"></span>
              <p className="text-slate-200 font-medium text-[10px] sm:text-xs">{outcome}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const SliderRow: React.FC<{ idPrefix: string, cases: any[] }> = ({ idPrefix, cases }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  if (!cases || cases.length === 0) return null;

  return (
    <div className="relative mb-6 sm:mb-8 w-full group/slider">
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:-ml-4 lg:-ml-6 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium md:opacity-0 md:group-hover/slider:opacity-100 md:-translate-x-4 md:group-hover/slider:translate-x-0 duration-300"
      >
        <ChevronLeft size={20} className="lg:w-6 lg:h-6" />
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-2 items-center"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cases.map((item, idx) => (
          <div key={`${idPrefix}-${item.id}-${idx}`} className="snap-center w-[65vw] sm:w-[240px] md:w-[280px] lg:w-[320px] shrink-0">
            <TransformationCard image={item.image} name={item.name} outcome={item.outcome} />
          </div>
        ))}
      </div>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:-mr-4 lg:-mr-6 z-20 w-10 h-10 lg:w-12 lg:h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium md:opacity-0 md:group-hover/slider:opacity-100 md:translate-x-4 md:group-hover/slider:translate-x-0 duration-300"
      >
        <ChevronRight size={20} className="lg:w-6 lg:h-6" />
      </button>
    </div>
  );
}

export default function Transformation() {
  const cases = treatmentImagesData;

  return (
    <section className="liquid-glass-card rounded-[2rem] sm:rounded-[3rem] border border-white/80 py-12 sm:py-16 px-4 sm:px-6 md:p-12 lg:p-16 border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 font-medium shadow-sm mb-4">
            <Activity size={14} className="text-[#0d9488]" />
            Treatment Images
          </div>
          <AnimatedHeading className="text-3xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text mb-6 tracking-tight">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Treatment Images</span></AnimatedHeading>
          <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl text-lg leading-relaxed">Swipe to see incredible recoveries achieved with our advanced physiotherapy treatments and personalized care.</p>
        </motion.div>
        
        <div className="flex flex-col gap-2">
          {cases.length > 0 ? (
            cases.reduce((resultArray, item, index) => {
              const chunkIndex = Math.floor(index / 5);
              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [];
              }
              resultArray[chunkIndex].push(item);
              return resultArray;
            }, [] as any[][]).map((chunk, idx) => (
              <SliderRow key={`row-${idx}`} idPrefix={`row-${idx}`} cases={chunk} />
            ))
          ) : (
              <div className="text-center py-10 text-slate-400 font-medium">No treatment images added yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
