import AnimatedHeading from '../components/AnimatedHeading';
import React, { useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';

const AIChatbot = React.lazy(() => import('../components/AIChatbot'));

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden flex flex-col pb-24 sm:pb-0">
      <Navbar />
      
      <main className="flex-grow px-4 py-12 md:py-20 max-w-4xl mx-auto w-full">
        <article className="prose prose-lg prose-slate prose-teal max-w-none bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <AnimatedHeading as="h1" className="text-4xl md:text-5xl font-semibold lg:font-medium tracking-tight shimmer-text mb-6 tracking-tight leading-tight">
            Welcome to Sahu Physiotherapy Clinic: Central India's Premier Rehabilitation Care
          </AnimatedHeading>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-12 font-medium">
            <span>Published: Clinic Updates</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <p className="text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-8 font-medium">
            Welcome to <strong>Sahu Physiotherapy Clinic</strong>, where your health and mobility are our top priority. Located in the heart of Raipur, we understand that a pain-free, active lifestyle is essential for your confidence and overall well-being. Led by Chief Physiotherapist <strong>Dr. Sahu Koshle</strong>, our clinic is dedicated to providing world-class physiotherapy treatments with an evidence-based, patient-centric approach.
          </p>

          <AnimatedHeading className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mt-12 mb-4">Our Comprehensive Physiotherapy Services</AnimatedHeading>
          <p>
            We offer a wide range of advanced physiotherapy treatments under one roof, utilizing state-of-the-art technology to ensure the best possible outcomes for our patients.
          </p>
          
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">1. Advanced Manual Therapy</h3>
          <p>
            Say goodbye to joint stiffness. We utilize advanced manual therapy techniques to relieve pain, reduce muscle tension, and restore joint mobility quickly and effectively.
          </p>
          
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">2. Sports Rehabilitation</h3>
          <p>
            A customized, targeted solution for athletes. Our sports rehab programs focus on biomechanics and strengthening to help you return to your sport safely and prevent future injuries.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">3. Post-Surgical Rehab</h3>
          <p>
            Expert rehabilitation following orthopedic surgeries. Our structured programs focus on safely restoring your strength and range of motion, optimizing your surgical outcome.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">4. Laser Therapy (LLLT)</h3>
          <p>
            Accelerate your healing with low-level laser therapy. It stimulates cellular healing, reduces inflammation, and effectively treats acute injuries and chronic pain conditions.
          </p>

          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-3">5. Pediatric Physiotherapy</h3>
          <p>
            We offer a welcoming, fun, and comfortable environment for our youngest patients, ensuring their physiotherapy journey starts with a positive experience and builds a foundation for physical health.
          </p>

          <AnimatedHeading className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mt-12 mb-4">Why Choose Sahu Physiotherapy Clinic?</AnimatedHeading>
          <ul>
            <li><strong>Expert Care:</strong> Over a decade of clinical experience and 5,000+ happy, pain-free patients across Central India.</li>
            <li><strong>Advanced Technology:</strong> We use the latest equipment, including advanced electrotherapy, for comprehensive care.</li>
            <li><strong>Personalized Approach:</strong> Our tailored rehabilitation protocols ensure maximum comfort and long-lasting results.</li>
            <li><strong>Transparent Pricing:</strong> No hidden costs or surprises, just honest, customized treatment plans tailored to your needs.</li>
          </ul>

          <AnimatedHeading className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mt-12 mb-4">Begin Your Recovery Journey Today</AnimatedHeading>
          <p>
            Don't let physical pain or injuries hold you back from living your best life. Whether you need a simple assessment or a full body rehabilitation, our expert team is here to help. Book a consultation today and experience the difference at Sahu Physiotherapy Clinic.
          </p>

        </article>
      </main>
      
      <Footer />
      <MobileNav />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}
