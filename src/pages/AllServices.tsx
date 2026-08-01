import AnimatedHeading from '../components/AnimatedHeading';
import React, { useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import Booking from '../components/Booking';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../store/AdminContext';
import AIChatbot from '../components/AIChatbot';

export default function AllServices() {
  const { publicData } = useAdmin();
  const services = publicData.services || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-[500px] bg-teal-50 dark:bg-slate-800/50 rounded-bl-full blur-3xl opacity-50 pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-[400px] bg-emerald-50 dark:bg-slate-800/30 rounded-tr-full blur-3xl opacity-50 pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
            <AnimatedHeading as="h1" className="text-4xl lg:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text leading-tight mb-4">
              Our <span className="text-teal-600">Services</span>
            </AnimatedHeading>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              We offer a wide range of specialized physiotherapy services designed to address your unique needs, reduce pain, and improve your overall quality of life.
            </p>
          </div>

          {/* Grid */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-0 border border-slate-200 dark:border-slate-700 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col relative overflow-hidden w-[320px] shrink-0"
              >
                <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img loading="lazy" decoding="async" 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed mb-6 flex-grow relative z-10 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-auto relative z-10 pt-5 border-t border-slate-100 dark:border-slate-800 group-hover:border-teal-100 transition-colors">
                    <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center gap-2 text-teal-600 font-bold text-sm tracking-wide group-hover:text-teal-700 transition-colors duration-300">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <div id="booking" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 pt-16 pb-16">
        <Booking />
      </div>

      <Footer />
      <MobileNav />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}
