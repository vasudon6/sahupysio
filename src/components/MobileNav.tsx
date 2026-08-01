import { Home, Image, Activity, CalendarCheck, Video, Stethoscope, Building2, HelpCircle, BookOpen, Accessibility } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const leftItems = [
    { icon: Home, label: 'Home', href: '/#top' },
    { icon: Activity, label: 'Services', href: '/services' },
    { icon: Image, label: 'Results', href: '/#results' },
  ];
  
  const rightItems = [
    { icon: Video, label: 'Reviews', href: '/#video-reviews' },
    { icon: Stethoscope, label: 'Doctor', href: '/#doctor' },
    { icon: HelpCircle, label: 'FAQ', href: '/#faq' },
  ];

  return (
    <div 
      className="fixed left-1/2 -translate-x-1/2 w-[96%] max-w-[420px] apple-glass-nav rounded-[2rem] border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] z-[100] sm:hidden" 
      style={{ bottom: 'max(16px, env(safe-area-inset-bottom))' }}
    >
      <div className="flex justify-between items-end h-[68px] px-2 relative pb-2 w-full">
        
        {leftItems.map((item, i) => (
          <Link
            key={i} to={item.href}
            className="flex flex-col items-center justify-end h-full pb-1 text-slate-700 dark:text-slate-300 font-medium hover:text-teal-600 transition-colors active:text-teal-700 relative w-full group"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <item.icon size={20} className="mb-1 group-hover:text-teal-600 transition-colors" />
            </motion.div>
            <span className="text-[8px] font-bold tracking-wide">{item.label}</span>
          </Link>
        ))}

        {/* Center Booking Button */}
        <Link to="/#booking"
          className="flex flex-col items-center justify-end h-full text-slate-700 dark:text-slate-300 font-medium pb-1 relative group w-full"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-[52px] h-[52px] bg-teal-600 rounded-full flex items-center justify-center text-white border-[3px] border-white z-10 overflow-hidden group/btn shadow-[0_4px_15px_rgba(13,148,136,0.4)]"
          >
            <CalendarCheck size={24} className="text-white relative z-10" />
            <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent glass-shine-effect pointer-events-none" />
          </motion.div>
          <span className="text-[8px] font-bold tracking-wide text-teal-700 mt-6 relative top-[2px]">Book</span>
        </Link>

        {rightItems.map((item, i) => (
          <Link
            key={i} to={item.href}
            className="flex flex-col items-center justify-end h-full pb-1 text-slate-700 dark:text-slate-300 font-medium hover:text-teal-600 transition-colors active:text-teal-700 relative w-full group"
          >
            <motion.div
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <item.icon size={20} className="mb-1 group-hover:text-teal-600 transition-colors" />
            </motion.div>
            <span className="text-[8px] font-bold tracking-wide whitespace-nowrap">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
