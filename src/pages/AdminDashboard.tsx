import React, { useState } from 'react';
import { useAdmin } from '../store/AdminContext';
import { Trash2, CheckCircle, XCircle, Clock, Plus, GripVertical, Image as ImageIcon, Video, Save, X, Eye, Settings, Calendar, MessageSquare, Users, Briefcase, Database, ChevronLeft, ChevronRight, Stethoscope, Bot, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import toast from 'react-hot-toast';

function AdminTabs({ active, setActive }: { active: string, setActive: (t: string) => void }) {
  const tabs = [
    { name: 'AI Settings', icon: Bot },
    { name: 'Bookings', icon: Calendar },
    { name: 'Video Reviews', icon: Video }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative mb-6 group flex items-center bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 z-10 w-8 h-8 md:w-10 md:h-10 ml-1 bg-white dark:bg-slate-900/95 backdrop-blur-sm rounded-full shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-teal-600 hover:bg-teal-50 hover:scale-110 transition-all flex items-center justify-center"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide w-full px-8 sm:px-2 scroll-smooth py-1"
      >
        {tabs.map(t => {
          const Icon = t.icon;
          const isActive = active === t.name;
          return (
            <motion.button 
              key={t.name}
              onClick={() => setActive(t.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all ${isActive ? 'bg-teal-600 text-white shadow-lg shadow-teal-600/20' : 'bg-slate-50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:bg-slate-800 border border-slate-100 dark:border-slate-800'}`}
            >
              <Icon size={16} className={isActive ? 'animate-pulse' : ''} />
              {t.name}
            </motion.button>
          );
        })}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 z-10 w-8 h-8 md:w-10 md:h-10 mr-1 bg-white dark:bg-slate-900/95 backdrop-blur-sm rounded-full shadow-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-teal-600 hover:bg-teal-50 hover:scale-110 transition-all flex items-center justify-center"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

const getYouTubeEmbedUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  let videoId = '';
  if (url.includes('youtube.com/watch')) {
    const urlParams = new URLSearchParams(new URL(url).search);
    videoId = urlParams.get('v') || '';
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('youtube.com/shorts/')[1]?.split('?')[0] || '';
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { bookings, updateBookingStatus, deleteBooking, queries, deleteQuery, draftData, setDraftData, publishChanges, discardChanges } = useAdmin();

  const handlePublish = () => {
    publishChanges();
    toast.success('Successfully published changes');
  };
  const [activeTab, setActiveTab] = useState('Bookings');
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);

  // Check session storage on mount
  React.useEffect(() => {
    if (sessionStorage.getItem('sahu_admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'vasu@gmail.com' && password === 'vasu123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('sahu_admin_auth', 'true');
      toast.success('Login successful');
    } else {
      toast.error('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 w-full max-w-md"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-teal-100">
              <Save size={32} className="text-teal-600" />
            </div>
            <h2 className="text-2xl font-semibold lg:font-medium tracking-tight shimmer-text">Admin Login</h2>
            <p className="text-slate-500 text-sm mt-2">Sign in to manage the clinic</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                required 
                placeholder="admin@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" 
                required 
                placeholder="••••••••"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-teal-600 transition-colors relative overflow-hidden group border-t border-white/20"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent glass-shine-effect pointer-events-none" />
            </button>
            <button 
              type="button" 
              onClick={() => window.location.href = '/'}
              className="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Back to Home
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // Helpers for Draft Data
  const updateDraft = (key: keyof typeof draftData, val: any) => {
    setDraftData(prev => ({ ...prev, [key]: val }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800/50 p-3 md:p-8 pb-24 md:pb-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold lg:font-medium tracking-tight shimmer-text">Admin Dashboard</h1>
            <p className="text-slate-500 text-xs md:text-sm mt-1">Manage bookings and website content.</p>
          </div>
          <div className="flex items-center gap-2 md:gap-3 flex-wrap">
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                sessionStorage.removeItem('sahu_admin_auth');
                toast.success('Logged out successfully');
              }}
              className="px-3 md:px-4 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-red-600 transition-colors text-xs md:text-sm order-3 md:order-last md:ml-4"
            >
              Logout
            </button>
            <button type="button" onClick={discardChanges}
              className="flex-1 md:flex-none px-3 md:px-4 py-2 bg-red-50 text-red-600 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              <X size={16} /> <span className="hidden sm:inline">Discard Draft</span><span className="sm:hidden">Discard</span>
            </button>
            <button type="button" onClick={handlePublish}
              className="flex-1 md:flex-none px-4 md:px-6 py-2 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg shadow-teal-600/20 relative overflow-hidden group border-t border-white/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Save size={16} /> Publish
              </span>
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent glass-shine-effect pointer-events-none" />
            </button>
          </div>
        </div>
        <AdminTabs active={activeTab} setActive={setActiveTab} />

        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-6 min-h-[500px]">
          {activeTab === 'AI Settings' && (
            <div className="space-y-6 max-w-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text">AI Chatbot Settings</h2>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Gemini API Key</label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="password" 
                    value={draftData.aiApiKey || ''}
                    onChange={(e) => setDraftData(prev => ({ ...prev, aiApiKey: e.target.value }))}
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    placeholder="Enter your Gemini API Key..."
                    className="flex-1 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors"
                  />
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setDraftData(prev => ({ ...prev, aiApiKey: '' }));
                      }}
                      className="flex-1 sm:flex-none px-4 py-2 bg-red-100 text-red-600 font-bold rounded-xl hover:bg-red-200 transition-colors shadow-sm whitespace-nowrap"
                    >
                      Delete
                    </button>
                    <button type="button" onClick={handlePublish}
                      className="flex-1 sm:flex-none px-4 py-2 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-sm whitespace-nowrap"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Clinic Knowledge Base (Context for AI)</label>
                <textarea
                  value={draftData.clinicContext || ''}
                  onChange={(e) => setDraftData(prev => ({ ...prev, clinicContext: e.target.value }))}
                  placeholder="Enter detailed information about your clinic, services, pricing, FAQs, etc. The AI Chatbot will read this to answer customer questions."
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-colors h-48 resize-y mb-4"
                />
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <p className="text-xs text-slate-500">
                    Write in detail about your clinic so the AI can learn from it and answer customer questions accurately.
                  </p>
                  <div className="flex gap-3 w-full sm:w-auto">
                    <button
                      onClick={() => {
                        setDraftData(prev => ({ ...prev, clinicContext: '' }));
                      }}
                      className="flex-1 sm:flex-none px-6 py-2 bg-red-100 text-red-600 font-bold rounded-xl hover:bg-red-200 transition-colors shadow-sm whitespace-nowrap"
                    >
                      Delete
                    </button>
                    <button type="button" onClick={handlePublish}
                      className="flex-1 sm:flex-none px-6 py-2 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-sm whitespace-nowrap"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Bookings' && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-6">Consultation Bookings</h2>
              {bookings.length === 0 ? (
                <div className="text-center text-slate-400 py-12">No bookings yet.</div>
              ) : (
                <div className="grid gap-4">
                  {bookings.map(b => (
                    <div key={b.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex justify-between items-start gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold lg:font-medium tracking-tight shimmer-text">{b.name}</h3>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                            b.status === 'confirmed' ? 'bg-sky-100 text-sky-700' :
                            b.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-amber-100 text-amber-700'
                          }`}>
                            {b.status}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                          {b.service} - {b.type}
                        </p>
                        <div className="text-xs text-slate-500 flex flex-wrap items-center gap-4">
                          <span>{b.phone}</span>
                          {b.email && <span>{b.email}</span>}
                          <span>{b.date} at {b.time}</span>
                          <span>Requested: {b.createdAt?.toDate ? b.createdAt.toDate().toLocaleDateString() : new Date(b.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {b.status !== 'confirmed' && (
                          <button onClick={() => updateBookingStatus(b.id, 'confirmed')} className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors" title="Confirm">
                            <CheckCircle size={20} />
                          </button>
                        )}

                        {b.status !== 'cancelled' && (
                          <button onClick={() => updateBookingStatus(b.id, 'cancelled')} className="p-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors" title="Cancel">
                            <XCircle size={20} />
                          </button>
                        )}

                        {b.message && (
                          <button onClick={() => setSelectedMessage(b.message!)} className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors ml-2" title="View Message">
                            <Eye size={20} />
                          </button>
                        )}

                        <button onClick={() => deleteBooking(b.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors ml-2" title="Delete">
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}


          {activeTab === 'Video Reviews' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text">Patient Video Reviews</h2>
                <button 
                  onClick={() => {
                    const newId = Date.now().toString();
                    updateDraft('reviews', [{ id: newId, name: 'New Patient', outcome: 'Result', image: '', videoUrl: '' }, ...(draftData.reviews || [])]);
                  }}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-slate-800"
                >
                  <Plus size={16} /> Add Video
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {(draftData.reviews || []).map((r, idx) => (
                  <div key={r.id} className="p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                     <div className="flex justify-between items-center mb-4">
                      <span className="font-bold text-slate-400 text-sm">Review #{idx + 1}</span>
                      <div className="flex gap-2">
                        <button onClick={() => {
                            if(idx > 0) {
                              const arr = [...(draftData.reviews || [])];
                              [arr[idx-1], arr[idx]] = [arr[idx], arr[idx-1]];
                              updateDraft('reviews', arr);
                            }
                          }}
                          disabled={idx === 0}
                          className="text-slate-400 hover:text-slate-900 dark:text-white disabled:opacity-30"
                        >Up</button>
                        <button onClick={() => {
                            if(idx < (draftData.reviews || []).length - 1) {
                              const arr = [...(draftData.reviews || [])];
                              [arr[idx+1], arr[idx]] = [arr[idx], arr[idx+1]];
                              updateDraft('reviews', arr);
                            }
                          }}
                          disabled={idx === (draftData.reviews || []).length - 1}
                          className="text-slate-400 hover:text-slate-900 dark:text-white disabled:opacity-30"
                        >Down</button>
                        <button onClick={() => {
                          updateDraft('reviews', (draftData.reviews || []).filter(item => item.id !== r.id));
                        }} className="text-red-500 hover:text-red-700 ml-4">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Patient Name</label>
                          <input type="text" value={r.name} onChange={(e) => {
                            const arr = [...(draftData.reviews || [])]; arr[idx].name = e.target.value; updateDraft('reviews', arr);
                          }} className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
                        </div>
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">Outcome Label</label>
                          <input type="text" value={r.outcome} onChange={(e) => {
                            const arr = [...(draftData.reviews || [])]; arr[idx].outcome = e.target.value; updateDraft('reviews', arr);
                          }} className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <div>
                          <label className="text-xs font-bold text-slate-500 mb-1 block">YouTube URL / Short URL</label>
                          <input type="text" value={r.videoUrl || ''} onChange={(e) => {
                            const arr = [...(draftData.reviews || [])]; arr[idx].videoUrl = e.target.value; updateDraft('reviews', arr);
                          }} className="w-full p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm mb-2" placeholder="https://youtube.com/..." />
                          {r.videoUrl && (
                            <div className="w-full max-w-sm aspect-video rounded-lg overflow-hidden bg-slate-900">
                              <iframe 
                                src={getYouTubeEmbedUrl(r.videoUrl)} 
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                              />
                            </div>
                          )}

                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {selectedMessage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedMessage(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <h3 className="text-xl font-semibold lg:font-medium tracking-tight shimmer-text mb-4">Patient Message</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">{selectedMessage}</p>
              <div className="mt-8 flex justify-end">
                <button 
                  onClick={() => setSelectedMessage(null)}
                  className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
