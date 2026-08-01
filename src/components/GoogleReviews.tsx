import AnimatedHeading from './AnimatedHeading';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: "DIKSHA SAHU",
    date: "5 months ago",
    rating: 5,
    text: "Great experience! Friendly staff, punctual appointments and effective treatment. I saw results much faster than I expected. The facility is clean, modern, and the front desk staff is always welcoming and helpful with scheduling. If you need a physio, this is the place to go!",
    avatar: "D"
  },
  {
    id: 2,
    name: "Nikhil Sahu",
    date: "5 months ago",
    rating: 5,
    text: "Extremely capable and qualified doctors for rehab. does their Part very well. Highly recommend if you're needy of any physiotherapy problems.",
    avatar: "N"
  },
  {
    id: 3,
    name: "Satya Sahu",
    date: "3 months ago",
    rating: 5,
    text: "Well qualified and trained team. Goal oriented approach, patient centric treatment, reasonable charges . Had nice experience with Dr..",
    avatar: "S"
  },
  {
    id: 4,
    name: "Leelakant Sahu",
    date: "5 months ago",
    rating: 5,
    text: "Excellent experience at Sahu Physiotherapy. I visited for my back pain and saw a significant improvement in just a few sessions. Very professional and highly recommended!",
    avatar: "L"
  },
  {
    id: 5,
    name: "Gurjeet Kaur",
    date: "5 months ago",
    rating: 5,
    text: "Well trained doctors, amazing staff and advances facilities. Must visit.",
    avatar: "G"
  },
  {
    id: 6,
    name: "Soumya Bordekar",
    date: "5 months ago",
    rating: 5,
    text: "Best doctors , good understanding with fine skilled💖 highly recommended 💯 …",
    avatar: "S"
  },
  {
    id: 7,
    name: "Chandan Sahu",
    date: "5 months ago",
    rating: 5,
    text: "The best physio therapy clinic Sahu",
    avatar: "C"
  },
  {
    id: 8,
    name: "Rohit Kumar Gupta",
    date: "8 months ago",
    rating: 5,
    text: "Very good experience. Suggest everyone to visit sahu physiotherapy clinic if anyone needed",
    avatar: "R"
  },
  {
    id: 9,
    name: "Suryakant Suryawanshi",
    date: "8 months ago",
    rating: 5,
    text: "Best Physiotherapy clinic in amlidih Raipur Dr. Sahu sir and Sahu ma'am is Qualified and experience Physiotherapist, Sahu physiotherapy clinic provide advance ortho and Neuro Physiotherapy treatment",
    avatar: "S"
  },
  {
    id: 10,
    name: "Thanendra Sahu",
    date: "5 months ago",
    rating: 5,
    text: "Good knowledge and best physiotherapist in Raipur",
    avatar: "T"
  },
  {
    id: 11,
    name: "Shailesh kumar Bharthi",
    date: "5 months ago",
    rating: 5,
    text: "Excellent physio centre",
    avatar: "S"
  },
  {
    id: 12,
    name: "Mala Singh",
    date: "5 months ago",
    rating: 5,
    text: "Good communication and knowledge about the disease.",
    avatar: "M"
  },
  {
    id: 13,
    name: "Meena Sahu",
    date: "8 months ago",
    rating: 5,
    text: "Nice physiotherapy clinic",
    avatar: "M"
  },
  {
    id: 14,
    name: "NAGARJUNA PATRA",
    date: "8 months ago",
    rating: 5,
    text: "Very good and effective treatment!!",
    avatar: "N"
  },
  {
    id: 15,
    name: "Tripti Sahu",
    date: "8 months ago",
    rating: 5,
    text: "Superb service",
    avatar: "T"
  },
  {
    id: 16,
    name: "ayush sahu",
    date: "5 months ago",
    rating: 5,
    text: "Excellent",
    avatar: "A"
  },
  {
    id: 17,
    name: "SATYAM SAHU",
    date: "a week ago",
    rating: 5,
    text: "Very kind natured and professional. Facilities and location wise 10/10 Thank you for your assistance in the journey of my back pain",
    avatar: "S"
  }
];

export default function GoogleReviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const row1 = GOOGLE_REVIEWS.slice(0, 10);
  const row2 = GOOGLE_REVIEWS.slice(10, 20);

  return (
    <section className="liquid-glass-card rounded-[3rem] p-6 md:p-8 lg:p-12 border border-white/80 shadow-sm relative overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex bg-[#f0fdfa] px-3 py-1.5 rounded-full items-center gap-2 border border-[#d6e5ff]">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Google Reviews</span>
              </div>
            </div>
            <AnimatedHeading className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4 tracking-tight">
              Trusted by 5000+ Patients
            </AnimatedHeading>
            <div className="flex items-center gap-4 text-slate-800 dark:text-slate-200 font-medium">
              <div className="text-3xl font-black text-slate-900 dark:text-white">5.0</div>
              <div className="flex flex-col">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm font-medium">Based on 29 reviews</span>
              </div>
            </div>
          </motion.div>
          
          <div className="flex gap-3">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-50 dark:bg-slate-800/50 hover:text-[#0d9488] transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-slate-200 font-medium hover:bg-slate-50 dark:bg-slate-800/50 hover:text-[#0d9488] transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex flex-col gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 -mx-4 px-4 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First Row of 10 Reviews */}
            <div className="flex gap-6 w-max">
              {row1.map((review, idx) => (
                <motion.div 
                  key={`row1-${review.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                  className="w-[300px] sm:w-[350px] p-6 rounded-[2rem] liquid-glass-card border border-white/60 shadow-sm relative group hover:border-[#0d9488]/30 hover:shadow-md hover:shadow-[#0d9488]/5 transition-all duration-300 flex flex-col"
                >
                  <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-[#f0fdfa] transition-colors" size={40} />
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#0d9488] text-white font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold lg:font-medium tracking-tight shimmer-text">{review.name}</div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">{review.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex text-amber-400 mb-4 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-sm leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Second Row of 10 Reviews */}
            <div className="flex gap-6 w-max ml-8">
              {row2.map((review, idx) => (
                <motion.div 
                  key={`row2-${review.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3 + (idx * 0.05) }}
                  className="w-[300px] sm:w-[350px] p-6 rounded-[2rem] liquid-glass-card border border-white/60 shadow-sm relative group hover:border-[#0d9488]/30 hover:shadow-md hover:shadow-[#0d9488]/5 transition-all duration-300 flex flex-col"
                >
                  <Quote className="absolute top-6 right-6 text-slate-100 group-hover:text-[#f0fdfa] transition-colors" size={40} />
                  
                  <div className="flex items-center gap-4 mb-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#0d9488] text-white font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold lg:font-medium tracking-tight shimmer-text">{review.name}</div>
                      <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">{review.date}</div>
                    </div>
                  </div>
                  
                  <div className="flex text-amber-400 mb-4 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-sm leading-relaxed relative z-10">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
