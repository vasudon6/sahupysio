import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-12 mb-6">
      <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent pointer-events-none z-0"></div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Brand Section */}
            <div className="lg:pr-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900 overflow-hidden shadow-[0_0_15px_rgba(13,148,136,0.4)] group shrink-0">
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
                      <path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c0 .28.22.5.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" />
                    </svg>
                  </div>
                </div>
                <span className="font-black text-lg sm:text-xl tracking-tighter uppercase drop-shadow-md logo-ultra-bold text-slate-900 dark:text-white">
                  Sahu <span className="font-black logo-accent-ultra ml-1">Physiotherapy</span>
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                Advanced physiotherapy and rehabilitation center dedicated to restoring your mobility, reducing pain, and improving your quality of life.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900/50/5 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0d9488] hover:text-white dark:hover:text-white hover:border-[#0d9488] transition-all duration-300">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900/50/5 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0d9488] hover:text-white dark:hover:text-white hover:border-[#0d9488] transition-all duration-300">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900/50/5 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-[#0d9488] hover:text-white dark:hover:text-white hover:border-[#0d9488] transition-all duration-300">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link to="/#top" className="text-slate-600 dark:text-slate-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#0d9488]" /> Home</Link></li>
                <li><Link to="/#about" className="text-slate-600 dark:text-slate-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#0d9488]" /> About Clinic</Link></li>
                <li><Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#0d9488]" /> Our Services</Link></li>
                <li><Link to="/#doctor" className="text-slate-600 dark:text-slate-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#0d9488]" /> Expert Doctors</Link></li>
                <li><Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-[#0d9488]" /> Health Blog</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h4>
              <ul className="space-y-5">
                <li className="flex gap-4 items-start text-slate-600 dark:text-slate-400">
                  <MapPin className="text-[#0d9488] shrink-0 mt-1" size={20} />
                  <span className="leading-relaxed">First floor, Shoop NO. A6, A7, Roshan Complex, Shreeji kalptaru Colony, Amlihdih, Mahaveer Nagar, Raipur, Tikrapara, Chhattisgarh 492001</span>
                </li>
                <li className="flex gap-4 items-center text-slate-600 dark:text-slate-400">
                  <Phone className="text-[#0d9488] shrink-0" size={20} />
                  <a href="tel:+919876543210" className="hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors">088711 11877</a>
                </li>
                <li className="flex gap-4 items-center text-slate-600 dark:text-slate-400">
                  <Mail className="text-[#0d9488] shrink-0" size={20} />
                  <a href="mailto:info@sahuphysiotherapy.com" className="hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors">info@sahuphysiotherapy.com</a>
                </li>
              </ul>
            </div>

            {/* Working Hours */}
            <div>
              <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6 tracking-wide">Working Hours</h4>
              <ul className="space-y-4">
                <li className="flex items-center justify-between text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-3">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#0d9488]" />
                    <span>Mon - Sat</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-900 dark:text-white font-medium block">9:00 AM - 1:30 PM</span>
                    <span className="text-slate-900 dark:text-white font-medium block">4:00 PM - 8:00 PM</span>
                  </div>
                </li>
                <li className="flex items-center justify-between text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700 pb-3">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-[#0d9488]" />
                    <span>Sunday</span>
                  </div>
                  <span className="text-slate-900 dark:text-white font-medium">9:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-700 dark:text-slate-600 dark:text-slate-400 font-medium text-sm">
            <p>&copy; {new Date().getFullYear()} Sahu Physiotherapy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#0d9488] dark:hover:text-[#0d9488] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
