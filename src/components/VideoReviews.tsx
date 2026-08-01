import AnimatedHeading from './AnimatedHeading';
import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Video, Play } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  let videoId = '';
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v') || '';
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0] || '';
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const getYouTubeVideoId = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url.split('embed/')[1];
  
  let videoId = '';
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v') || '';
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0] || '';
  }
  return videoId;
}

function VideoReviewCard({ videoUrl, name, outcome }: { videoUrl: string; name: string; outcome: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : videoUrl;
  const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm flex flex-shrink-0 group/ba bg-slate-900 cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      <div className="w-full relative h-full overflow-hidden flex items-center justify-center">
        {isPlaying ? (
          <iframe 
            src={embedUrl} 
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            loading="lazy"
            title={name}
          />
        ) : (
          <>
            {thumbnailUrl ? (
              <img src={thumbnailUrl} alt={name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
            ) : (
              <div className="w-full h-full bg-slate-800"></div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover/ba:bg-black/10 transition-colors">
              <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl shadow-black/20 group-hover/ba:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 text-[#0d9488] ml-1" fill="currentColor" />
              </div>
            </div>
          </>
        )}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent flex flex-col justify-end p-6 pointer-events-none">
            <div className="translate-y-4 opacity-0 group-hover/ba:translate-y-0 group-hover/ba:opacity-100 transition-all duration-300">
              <h4 className="text-white font-bold text-lg mb-1">{name}</h4>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                <p className="text-slate-200 font-medium text-sm">{outcome}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

const SliderRow: React.FC<{ idPrefix: string, cases: any[] }> = ({ idPrefix, cases }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  if (!cases || cases.length === 0) return null;

  return (
    <div className="relative mb-10 w-full group/slider">
      <button 
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-6 z-20 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium md:opacity-0 md:group-hover/slider:opacity-100 md:-translate-x-4 md:group-hover/slider:translate-x-0 duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cases.map((item, idx) => (
          <div key={`${idPrefix}-${item.id}-${idx}`} className="snap-center w-[75vw] sm:w-[260px] md:w-[280px] shrink-0">
            <VideoReviewCard videoUrl={item.videoUrl} name={item.name} outcome={item.outcome} />
          </div>
        ))}
      </div>

      <button 
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-6 z-20 w-12 h-12 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center shadow-xl border border-slate-100 dark:border-slate-800 hover:bg-[#0d9488] hover:text-white transition-all text-slate-800 dark:text-slate-200 font-medium md:opacity-0 md:group-hover/slider:opacity-100 md:translate-x-4 md:group-hover/slider:translate-x-0 duration-300"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default function VideoReviews() {
  const { clinicData } = useAdmin();
  const cases = clinicData.reviews || [];

  return (
    <section className="liquid-glass-card rounded-[3rem] border border-white/80 py-16 px-6 md:p-12 lg:p-20 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative mt-6">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-100/40 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/60 text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-slate-200 font-medium shadow-sm mb-4">
            <Video size={14} className="text-[#0d9488]" />
            Patient Stories
          </div>
          <AnimatedHeading className="text-3xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text mb-6 tracking-tight">Real Results. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0d9488] to-teal-400">Video Testimonials.</span></AnimatedHeading>
          <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl text-lg leading-relaxed">Watch our patients share their incredible recovery journeys with Sahu Physiotherapy.</p>
        </motion.div>
        
        <div className="flex flex-col gap-2">
          {cases.length > 0 ? (
            cases.reduce((resultArray, item, index) => {
              const chunkIndex = Math.floor(index / 5);
              if (!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = []; // start a new chunk
              }
              resultArray[chunkIndex].push(item);
              return resultArray;
            }, [] as any[][]).map((chunk, idx) => (
              <SliderRow key={`row-${idx}`} idPrefix={`row-${idx}`} cases={chunk} />
            ))
          ) : (
              <div className="text-center py-10 text-slate-400 font-medium">No video reviews added yet.</div>
          )}
        </div>
      </div>
    </section>
  );
}
