import React, { useEffect, Suspense } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { useAdmin } from '../store/AdminContext';
import Footer from '../components/Footer';
import MobileNav from '../components/MobileNav';
import FAQ from '../components/FAQ';
import Booking from '../components/Booking';
const AIChatbot = React.lazy(() => import('../components/AIChatbot'));

export default function ClinicDetails() {
  const { publicData } = useAdmin();
  const doctors = publicData.doctors || [];

  const heroImage = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop";
  const clinicImageUrl = "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785569926/imgi_17_AHRPTWnniAAGihX3lnKZCE5WiL4mXq9DxdQ-u3ewbPwEXxErvGq7oL0JzDm8R1cPX5ZBGLBFxViSVCGvXdQuNCud1GP6RYC8hOrqiagvicR5YfDPG2pr6UAqvG_DzB8Zzjs_k5fuht.jpg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#fafafa] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-teal-200 selection:text-teal-900 overflow-x-hidden flex flex-col relative">
      <Navbar />
      
      <main className="flex flex-col gap-6 px-4 py-6 sm:p-6 lg:p-8 max-w-[1440px] mx-auto w-full flex-grow relative z-10">
        
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden shadow-lg w-full bg-slate-200">
          <img fetchPriority="high" decoding="async" src={heroImage} 
            alt="Sahu Physiotherapy Clinic Hero" 
            className="w-full h-auto min-h-[25vh] max-h-[60vh] object-cover"
          />
        </section>

        {/* Clinic Information */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 lg:p-12 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-12">
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="prose prose-slate max-w-none"
            >
              <h2 className="text-3xl md:text-4xl font-semibold lg:font-medium tracking-tight shimmer-text mb-6 tracking-tight">
                About Sahu Physiotherapy Clinic
              </h2>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Located in the heart of Raipur, Chhattisgarh, <strong>Sahu Physiotherapy Clinic</strong> is Central India's premier destination for advanced rehabilitation and pain management. Established with a vision to provide world-class therapeutic treatments, our clinic integrates modern medical technology with hands-on expertise to deliver life-changing results.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                We understand that physical pain and movement limitations are not just physical issues but an emotional journey that can significantly impact your daily life and confidence. That is precisely why our approach is deeply rooted in empathy, transparency, and clinical excellence. We focus on delivering personalized, non-invasive treatments specifically tailored to each patient's unique condition and functional goals.
              </p>
              
              <h3 className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mt-8 mb-4">Advanced Treatments & Technology</h3>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Our clinic is equipped with cutting-edge modalities like High-Intensity Laser Therapy, Shockwave Therapy, and Advanced Electrotherapy. By combining these technologies with proven manual therapy and dry needling, we provide targeted relief that accelerates tissue repair and reduces inflammation faster than traditional methods.
              </p>

              <h3 className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text mt-8 mb-4">Achieving a 99% Success Rate</h3>
              <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                How do we maintain a 99% success rate? It all starts with a comprehensive biomechanical assessment. We don't just treat the symptoms; we identify the root cause of your pain. By designing customized treatment plans and continually monitoring progress, we ensure sustainable recovery and empower our patients to live pain-free lives.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[300px] md:h-[450px]"
            >
              <img loading="lazy" decoding="async" src={clinicImageUrl} 
                alt="State-of-the-art Clinic Interior" 
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800"
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800"
          >
            <div>
              <h3 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-3 text-teal-700">State-of-the-Art Facilities</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Our clinic is equipped with the latest physiotherapy technology including advanced electrotherapy and laser devices. We adhere strictly to hygiene protocols to ensure a safe, relaxing, and stress-free healing environment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-3 text-teal-700">Advanced Techniques</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                We specialize in advanced manual therapy and targeted exercise prescription. These techniques focus on the root cause of the pain, ensuring rapid recovery, restored mobility, and long-lasting relief.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-3 text-teal-700">Comprehensive Care</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                Our journey with you doesn't end when the pain stops. We provide extensive post-rehabilitation care, including custom home exercise programs and continuous guidance to ensure long-term physical health and injury prevention.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Doctor Information */}
        <div className="space-y-12">
          {doctors.map((doc, idx) => (
            <section key={idx} className="bg-slate-900 text-white rounded-3xl p-8 lg:p-12 border border-slate-800 shadow-xl grid lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-5 relative"
              >
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/20 relative group">
                  <img loading="lazy" decoding="async" src={doc.image || 'https://res.cloudinary.com/yfn8ptmo/image/upload/v1785565318/Gemini_Generated_Image_mdcvr5mdcvr5mdcv_cmui5a.png'} 
                    alt={doc.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="inline-block px-4 py-1 bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 font-bold text-sm rounded-full mb-3">
                      {doc.experience} Years Experience
                    </div>
                    <h3 className="text-3xl font-bold">{doc.name}</h3>
                    <p className="text-slate-300">{doc.degrees}</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-7 prose prose-lg prose-invert"
              >
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 tracking-tight">
                  Meet {doc.name.split('(')[0].trim()}
                </h2>
                <h3 className="text-2xl font-semibold text-teal-400 mb-6">{doc.title}</h3>
                
                <p className="text-slate-300 leading-relaxed">
                  {doc.description}
                </p>
                <ul className="mt-8 space-y-4 list-none pl-0">
                  {(doc.bullets || []).map((bullet: any, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-slate-200">
                      <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium">{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </section>
          ))}
        </div>
        
        {/* Clinic Location & Information */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-800 shadow-xl mt-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Visit Our Clinic
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Experience world-class physiotherapy in a comfortable, modern environment equipped with advanced rehabilitation technology.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Exact Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Roshan Complex, First floor, Shoop NO. A6, A7, Shreeji kalptaru Colony, Amlihdih, Mahaveer Nagar, Raipur, Chhattisgarh 492001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">Contact Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      <a href="tel:+918871111877" className="hover:text-teal-600 transition-colors">+91 8871111877</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl h-[400px] border border-slate-200 dark:border-slate-800"
            >
              <iframe 
                src="https://maps.google.com/maps?q=21.222654,81.671094&hl=en&z=15&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </motion.div>
          </div>
        </section>

        <div className="mt-12 space-y-12">
          <Booking />
          <FAQ />
        </div>
      </main>
      
      <Footer />
      <MobileNav />
      <Suspense fallback={null}>
        <AIChatbot />
      </Suspense>
    </div>
  );
}
