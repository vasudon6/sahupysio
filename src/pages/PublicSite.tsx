import React, { Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import IntroSection from '../components/IntroSection';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import Services from '../components/Services';
import Transformation from '../components/Transformation';
import Doctor from '../components/Doctor';
import WhyChooseUs from '../components/WhyChooseUs';
import Booking from '../components/Booking';
import FAQ from '../components/FAQ';
import GoogleReviews from '../components/GoogleReviews';
import VideoReviews from '../components/VideoReviews';

import AIChatbot from '../components/AIChatbot';

export default function PublicSite() {
  return (
    <div id="top" className="min-h-screen bg-[#fafafa] dark:bg-slate-950 text-slate-900 dark:text-white dark:text-slate-100 font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden flex flex-col pb-24 sm:pb-0 relative">
      {/* Global Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-400/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-400/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-emerald-400/10 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="bg-amber-100 text-amber-900 text-center py-2 text-sm font-bold tracking-wide relative z-[200]">
        This website is developed for demo purpose
      </div>
      
      <Navbar />

      <main className="flex flex-col gap-6 px-4 py-6 sm:p-6 lg:p-8 max-w-[1440px] mx-auto w-full flex-grow relative z-10">
        <Hero />
        
        <IntroSection />
        
        <section id="results" aria-label="Patient Transformations">
          <Transformation />
        </section>
        
        <section id="services" aria-label="Our Services">
          <Services />
        </section>

        <section id="video-reviews" aria-label="Patient Testimonials">
          <VideoReviews />
        </section>
        
        <section id="doctor" aria-label="Our Doctors">
          <Doctor />
        </section>
        
        <section id="why-choose-us" aria-label="Why Choose Us">
          <WhyChooseUs />
        </section>
        
        
        <section id="booking" aria-label="Book Appointment">
          <Booking />
        </section>
        
        
        <section id="faq" aria-label="Frequently Asked Questions">
          <FAQ />
        </section>
        
        <section id="google-reviews" aria-label="Google Reviews">
          <GoogleReviews />
        </section>
      </main>

      <Footer />
      <MobileNav />
      
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}
