import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MoreVertical, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 apple-glass-nav dark:bg-slate-900/80 dark:border-slate-800"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 overflow-hidden shadow-[0_0_15px_rgba(13,148,136,0.4)] group shrink-0 cursor-pointer">
            <div className="absolute inset-[-150%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,rgba(45,212,191,1)_25%,transparent_50%,rgba(45,212,191,1)_75%,transparent_100%)]"></div>
            <div className="absolute inset-[2px] bg-slate-900 rounded-[10px] z-10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-teal-500/20 animate-pulse mix-blend-screen"></div>
              <svg 
                className="w-6 h-6 text-teal-400 relative z-20 drop-shadow-[0_0_8px_rgba(45,212,191,1)] group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="4" r="2" />
                <path d="M5.5 12a6.5 6.5 0 0 1 13 0" />
                <path d="M12 5.5v11" />
                <path d="M7.5 22l4.5-5.5 4.5 5.5" />
              </svg>
            </div>
          </div>
          <span className="font-black text-lg sm:text-xl tracking-tighter uppercase drop-shadow-md logo-ultra-bold">
            Sahu <span className="font-black logo-accent-ultra ml-1">Physiotherapy</span>
          </span>
        </div>
        
        <div className="hidden xl:flex flex-1 items-center justify-end gap-5 text-sm font-medium text-slate-800 dark:text-slate-200 ml-4">
          <Link to="/#top" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Home</Link>
          <Link to="/services" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Service</Link>
          <Link to="/#results" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Treatment Image</Link>
          <Link to="/#video-reviews" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Video Review</Link>
          <Link to="/#doctor" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Doctor</Link>
          <Link to="/#faq" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">FAQ</Link>
          <Link to="/#booking" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors shrink-0">Booking</Link>
        </div>

        <div className="flex items-center gap-2 ml-auto xl:ml-6">
          {/* Tablet Menu Button */}
          <div className="hidden sm:flex xl:hidden items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-800 dark:text-slate-200 font-medium hover:text-teal-600 dark:hover:text-teal-400 transition-colors rounded-full hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={24} /> : <MoreVertical size={24} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="hidden sm:block xl:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 dark:border-slate-800 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 gap-4 text-sm font-medium text-slate-800 dark:text-slate-200">
              <Link to="/#top" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</Link>
              <Link to="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Service</Link>
              <Link to="/#results" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Treatment Image</Link>
              <Link to="/#video-reviews" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Video Review</Link>
              <Link to="/#doctor" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Doctor</Link>
              <Link to="/#faq" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">FAQ</Link>
              <Link to="/#booking" onClick={() => setIsMenuOpen(false)} className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Booking</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
