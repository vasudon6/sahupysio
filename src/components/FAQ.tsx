import AnimatedHeading from './AnimatedHeading';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "What physiotherapy services do you offer?",
    answer: "At Sahu Physiotherapy Clinic, we offer a comprehensive range of services including Advanced Manual Therapy, Sports Rehabilitation, Post-Surgical Rehab, Neuro Rehabilitation, Laser Therapy, Dry Needling, and Pediatric Physiotherapy."
  },
  {
    question: "Are the treatments painful?",
    answer: "Our primary goal is to relieve your pain, not cause it. We use advanced evidence-based techniques and a personalized approach to ensure you remain as comfortable and relaxed as possible throughout your rehabilitation journey."
  },
  {
    question: "How much does a physiotherapy session cost?",
    answer: "The cost of physiotherapy varies depending on your specific needs, the type of therapy required, and the duration of the treatment plan. We offer a detailed consultation where Dr. Sahu Koshle will provide a transparent and custom treatment plan."
  },
  {
    question: "Do you provide treatments for children?",
    answer: "Absolutely. We have specialized pediatric physiotherapy services focusing on developmental milestones, neuro-rehab, and physical health in a friendly, comfortable environment."
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an in-clinic consultation easily through our website using the 'Book Consultation' button, or you can call our clinic directly. We offer flexible scheduling to accommodate your needs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <AnimatedHeading className="text-3xl md:text-4xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4 tracking-tight">
          Frequently Asked <span className="text-teal-600">Questions</span>
        </AnimatedHeading>
        <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">Everything you need to know about your rehabilitation journey.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-colors duration-300 ${
              openIndex === index ? 'liquid-glass-card border-teal-300 shadow-sm' : 'liquid-glass-card border-white/60 hover:border-teal-200'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-teal-900' : 'text-slate-800 dark:text-slate-200'}`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
