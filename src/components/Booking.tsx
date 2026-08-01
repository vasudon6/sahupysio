import AnimatedHeading from './AnimatedHeading';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar as CalendarIcon, Clock, User, Phone, CheckCircle, Mail, Stethoscope, Video } from 'lucide-react';
import { useAdmin } from '../store/AdminContext';
import toast from 'react-hot-toast';

export default function Booking({ isPopup = false, onComplete }: { isPopup?: boolean, onComplete?: () => void }) {
  const { addBooking, clinicData } = useAdmin();
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const submitBooking = async () => {
    setPhoneError('');
    setEmailError('');
    let hasError = false;

    if (!name || !phone || !date || !time || !service || !type) {
      toast.error("Please fill in all required details.");
      return;
    }

    if (phone.length !== 10) {
      setPhoneError('please enter writte mobile number');
      hasError = true;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('please enter valid email id');
      hasError = true;
    }

    if (hasError) return;

    try {
      await addBooking({ name, phone: '+91' + phone, email, service, type, date, time, message });
      localStorage.setItem('has_booked_consultation', 'true');
      toast.success("Booking confirmed successfully!");
      setStep(2);
    } catch (error) {
      toast.error("Failed to book appointment. Please try again.");
    }
  };

  const availableTimes = useMemo(() => {
    if (!date) return [];
    const d = new Date(date);
    const day = d.getDay();
    if (day === 0) {
      // Sunday: 9:00 AM to 2:00 PM
      return [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', 
        '01:00 PM', '01:30 PM'
      ];
    } else {
      // Monday-Saturday: 9:00 AM to 1:30 PM, then 4:00 PM to 8:00 PM
      return [
        '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
        '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM',
        '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', 
        '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'
      ];
    }
  }, [date]);

  return (
    <section className={`liquid-glass-card rounded-[3rem] ${isPopup ? 'p-4 md:p-6' : 'p-6 md:p-8 lg:p-12'} border border-white/80 shadow-sm relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-[1440px] mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-center ${isPopup ? 'mb-4' : 'mb-10'}`}
        >
          {isPopup ? (
            <AnimatedHeading className="text-2xl md:text-3xl font-semibold lg:font-medium tracking-tight shimmer-text mb-2 tracking-tight">Book Your Appointment</AnimatedHeading>
          ) : (
            <>
              <h3 className="text-sm font-bold uppercase tracking-widest text-teal-600 mb-4">Book Appointment</h3>
              <AnimatedHeading className="text-3xl lg:text-4xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4 tracking-tight">Book Your Appointment</AnimatedHeading>
              <p className="text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto text-lg">
                Schedule a consultation with our experts.
              </p>
            </>
          )}
        </motion.div>

        <div className={`max-w-4xl mx-auto bg-slate-50 dark:bg-slate-800/50 rounded-3xl ${isPopup ? 'p-4 md:p-6' : 'p-6 md:p-10'} border border-slate-100 dark:border-slate-800 shadow-inner`}>
          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div 
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className={`grid md:grid-cols-2 ${isPopup ? 'gap-3' : 'gap-6'}`}>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">What are you looking for?</label>
                      <div className="relative">
                        <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select value={service} onChange={(e) => setService(e.target.value)} className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 dark:text-slate-200 font-medium appearance-none bg-white dark:bg-slate-900`}>
                          <option value="">Select Service</option>
                          {clinicData?.services?.map((s: any, idx: number) => (
                            <option key={idx} value={s.title}>{s.title}</option>
                          ))}
                          <option value="Other / General Checkup">Other / General Checkup</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Consultation Type</label>
                      <div className="relative">
                        <Video className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select value={type} onChange={(e) => setType(e.target.value)} className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 dark:text-slate-200 font-medium appearance-none bg-white dark:bg-slate-900`}>
                          <option value="">Select Type</option>
                          <option>In-Clinic</option>
                          <option>Video</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <span className="absolute left-10 top-1/2 -translate-y-1/2 text-slate-800 dark:text-slate-200 font-medium">+91</span>
                        <input type="tel" value={phone} onChange={(e) => {setPhone(e.target.value.replace(/\D/g, '').slice(0, 10)); setPhoneError('');}} placeholder="9876543210" className={`w-full pl-20 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border ${phoneError ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-teal-500/20 focus:border-teal-500'} focus:outline-none focus:ring-2 transition-all`} />
                      </div>
                      {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); setEmailError('');}} placeholder="your@email.com" className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border ${emailError ? 'border-red-500 focus:border-red-500 outline-none ring-2 ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500'} transition-all`} />
                      </div>
                      {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Preferred Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="date" 
                          min={new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]}
                          value={date} 
                          onChange={(e) => {
                            setDate(e.target.value);
                            setTime(''); // Reset time when date changes
                          }} 
                          className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 dark:text-slate-200 font-medium`} 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Preferred Time</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select disabled={!date} value={time} onChange={(e) => setTime(e.target.value)} className={`w-full pl-12 pr-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-slate-800 dark:text-slate-200 font-medium appearance-none bg-white dark:bg-slate-900 ${!date ? 'opacity-50 cursor-not-allowed' : ''}`}>
                          <option value="">{date ? 'Select Time' : 'Select Date First'}</option>
                          {availableTimes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 font-medium uppercase">Message (Optional)</label>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any specific concerns or details?" className={`w-full px-4 ${isPopup ? 'py-3' : 'py-4'} rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all ${isPopup ? 'min-h-[80px]' : 'min-h-[100px]'}`}></textarea>
                    </div>
                  </div>

                  <div className={`flex justify-end ${isPopup ? 'pt-4' : 'pt-6'}`}>
                    <motion.button 
                      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(13, 148, 136, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={submitBooking} 
                      className={`${isPopup ? 'px-6 py-3' : 'px-8 py-4'} bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/30 w-full md:w-auto relative overflow-hidden group border-t border-white/20`}
                    >
                      <span className="relative z-10">Confirm Booking</span>
                      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                      <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent glass-shine-effect pointer-events-none" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div 
                  key="step2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 space-y-6"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                    className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-2"
                  >
                    <CheckCircle size={48} className="text-teal-600" />
                  </motion.div>
                  <h3 className="text-3xl font-semibold lg:font-medium tracking-tight shimmer-text">Request Received!</h3>
                  <p className="text-slate-700 dark:text-slate-300 font-medium max-w-md text-lg">
                    Thank you! Our care team will contact you shortly to confirm your {type} consultation for {service}.
                  </p>
                  {onComplete ? (
                    <button onClick={onComplete} className="mt-4 px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-colors">
                      Close
                    </button>
                  ) : (
                    <button onClick={() => {
                        setStep(1); 
                        setName(''); setPhone(''); setEmail(''); setDate(''); setTime(''); setMessage(''); setService(''); setType('');
                    }} className="mt-4 px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-full hover:bg-slate-200 transition-colors">
                      Book Another
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
