import AnimatedHeading from './AnimatedHeading';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Microscope, Sparkles, Shield, HeartHandshake, ShieldCheck, Clock, X } from 'lucide-react';

const USPS = [
  { icon: ShieldCheck, title: "Experienced Team", desc: "Experienced and skilled physiotherapy team.", fullDesc: "Our team of highly qualified physiotherapists brings years of specialized experience to ensure you receive the most effective, evidence-based care available." },
  { icon: HeartHandshake, title: "Patient-Centered", desc: "Patient-centered approach.", fullDesc: "We believe in treating the person, not just the condition. Our approach is entirely focused on your unique needs, lifestyle, and recovery goals." },
  { icon: Sparkles, title: "Affordable Care", desc: "Affordable and effective treatment plans.", fullDesc: "We provide high-quality physiotherapy care at accessible prices, ensuring that top-tier physical rehabilitation is available to everyone without compromising on effectiveness." },
  { icon: Microscope, title: "Modern Equipment", desc: "Modern equipment and techniques.", fullDesc: "Our clinic is equipped with the latest physiotherapy technology and modalities, enabling us to deliver precise, effective treatments that accelerate healing." },
  { icon: Shield, title: "Trusted Clinic", desc: "Trusted clinic in Mahaveer Nagar.", fullDesc: "Recognized as a leading physiotherapy center in Mahaveer Nagar, we have built a strong reputation based on trust, successful outcomes, and outstanding patient satisfaction." },
];

export default function WhyChooseUs() {
  const [selectedUsp, setSelectedUsp] = useState<typeof USPS[0] | null>(null);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (selectedUsp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedUsp]);

  return (
    <section className="liquid-glass-card rounded-[3rem] p-8 lg:p-12 border border-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Why Choose Us</h3>
          <AnimatedHeading className="text-3xl lg:text-4xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4">Excellence in Rehabilitation</AnimatedHeading>
          <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto text-lg">We set the benchmark for clinical excellence and patient satisfaction.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {USPS.map((usp, idx) => (
            <motion.div
              key={idx}
              initial="rest"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={{
                rest: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } },
                hover: { y: -5, boxShadow: "0 10px 30px -10px rgba(20, 184, 166, 0.2)" }
              }}
              className="p-8 rounded-2xl liquid-glass-card border border-white/60 hover:border-teal-300 group/usp flex flex-col relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              onClick={() => setSelectedUsp(usp)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-sky-50/50 opacity-0 group-hover/usp:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-6 group-hover/usp:scale-110 transition-transform duration-300 shadow-sm group-hover/usp:bg-teal-500 group-hover/usp:border-teal-500 group-hover/usp:shadow-teal-200/50">
                  <motion.div
                    variants={{
                      rest: { y: 0 },
                      visible: { y: 0 },
                      hover: { y: [0, -4, 0], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } }
                    }}
                  >
                    <usp.icon size={24} className="text-slate-400 group-hover/usp:text-white transition-colors" />
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold lg:font-medium tracking-tight shimmer-text mb-2 group-hover/usp:text-teal-800 transition-colors">{usp.title}</h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed mb-4 flex-1">{usp.fullDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedUsp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 z-[200] flex items-end sm:items-center justify-center p-3 pb-[100px] sm:p-4"
            onClick={() => setSelectedUsp(null)}
          >
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white dark:bg-slate-900 w-full sm:w-[500px] max-h-[calc(100vh-120px)] sm:max-h-[85vh] rounded-2xl shadow-xl overflow-hidden flex flex-col relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10 bg-white dark:bg-slate-900/80 backdrop-blur-sm rounded-full p-1 shadow-sm border border-slate-200 dark:border-slate-700">
                <button 
                  onClick={() => setSelectedUsp(null)}
                  className="p-1 rounded-full text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-100 dark:bg-slate-800 transition-colors bg-white dark:bg-slate-900"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="overflow-y-auto flex-1 min-h-0 p-6 sm:p-8 pt-12">
                <div className="w-16 h-16 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                  <selectedUsp.icon size={32} className="text-teal-600" />
                </div>
                <AnimatedHeading className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4">{selectedUsp.title}</AnimatedHeading>
                <div className="prose prose-slate prose-sm sm:prose-base">
                  <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed whitespace-pre-wrap">
                    {selectedUsp.fullDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
