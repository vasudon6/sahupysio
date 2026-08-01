import { motion } from 'motion/react';
import { PhoneIcon } from 'lucide-react'; 

export default function WhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 sm:left-auto sm:right-6 lg:bottom-6 lg:left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-colors overflow-hidden group/wa border border-white/20"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <PhoneIcon size={24} className="fill-white relative z-10" />
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent glass-shine-effect pointer-events-none" />
    </motion.a>
  );
}
