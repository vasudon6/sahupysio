import AnimatedHeading from '../components/AnimatedHeading';
import React, { useEffect, Suspense } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Booking from '../components/Booking';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import { useAdmin } from '../store/AdminContext';
import { servicesContent } from '../data/servicesContent';
import AIChatbot from '../components/AIChatbot';

export default function ServiceDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { publicData } = useAdmin();
  const servicesList = publicData.services || [];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find the service based on generated slug
  const matchedService = servicesList.find(s => s.title.toLowerCase().replace(/\s+/g, '-') === slug);
  const fallbackTitle = slug?.replace(/-/g, ' ') || 'Service Details';
  
  const title = matchedService?.title || fallbackTitle;
  const image = matchedService?.image || "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop";
  const description = matchedService?.description || "Content for this service is currently being updated. Please contact our clinic directly for detailed information regarding this treatment.";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800/50 flex flex-col font-sans text-slate-800 dark:text-slate-200">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative bg-slate-900 text-white pt-32 pb-24 px-6 lg:px-8 border-b-4 border-teal-600"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-medium tracking-wide">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-teal-400 transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white capitalize">{title}</span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6 tracking-tight">
              {title}
            </h1>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Content */}
          <div className="w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {image && (
                <div className="mb-10 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
                  <img loading="lazy" decoding="async" 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto object-cover max-h-[450px]"
                  />
                </div>
              )}
              
              <div className="prose max-w-none">
                
                {/* Dynamic Content */}
                {(() => {
                  const detailedContent = servicesContent[slug || ''];
                  if (detailedContent && detailedContent.sections) {
                    return detailedContent.sections.map((section: any, idx: number) => {
                      if (section.type === 'title') {
                        return <AnimatedHeading key={idx} className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">{section.content}</AnimatedHeading>;
                      }
                      if (section.type === 'heading') {
                        return <h3 key={idx} className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-10 mb-4">{section.content}</h3>;
                      }
                      if (section.type === 'subheading') {
                        return <h4 key={idx} className="text-xl font-bold text-slate-700 dark:text-slate-300 mt-6 mb-3">{section.content}</h4>;
                      }
                      if (section.type === 'text') {
                        return <p key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-[15px] whitespace-pre-wrap">{section.content}</p>;
                      }
                      if (section.type === 'list-bold') {
                        return (
                          <ul key={idx} className="list-disc pl-5 mb-6 text-slate-600 dark:text-slate-400 text-[15px] space-y-2">
                            {section.items.map((item: any, i: number) => (
                              <li key={i}>
                                <strong>{item.title}</strong> {item.desc}
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    });
                  }
                  
                  // Fallback content if no detailed content found
                  return (
                    <>
                      <AnimatedHeading className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-6">{title}</AnimatedHeading>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-[15px]">{description}</p>
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-10 mb-4">Our Approach</h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 text-[15px]">At our clinic, we use evidence-based practices to ensure the highest quality of care. Our tailored approach focuses on your specific needs to accelerate recovery.</p>
                    </>
                  );
                })()}

              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Booking Form at the bottom */}
      <div id="booking-section" className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 pt-12 pb-12">
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
