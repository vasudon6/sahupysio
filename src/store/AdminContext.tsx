import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '../lib/firebase';
import { doc, getDoc, setDoc, onSnapshot, collection, addDoc, serverTimestamp, query, orderBy, deleteDoc, updateDoc } from 'firebase/firestore';

export interface ClinicData {
  testimonials: any[];
  reviews: any[];
  transformations: any[];
  doctors: any[];
  services: any[];
  conditions: any[];
  clinicContext: string;
  aiApiKey?: string;
}

const defaultClinicData: ClinicData = {
  transformations: [
    { id: "1", name: "Patient 1", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228051/physiotherapy_image_2_xbgati.webp", videoUrl: "" },
    { id: "2", name: "Patient 2", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785227980/physiotherapy_image_7_xhrggd.webp", videoUrl: "" },
    { id: "3", name: "Patient 3", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785227991/physiotherapy_image_10_lc4hyw.webp", videoUrl: "" },
    { id: "4", name: "Patient 4", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228019/physiotherapy_image_5_el1l0q.webp", videoUrl: "" },
    { id: "5", name: "Patient 5", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228021/physiotherapy_image_1_cu3yet.webp", videoUrl: "" },
    { id: "6", name: "Patient 6", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228026/physiotherapy_image_4_sdu4d5.webp", videoUrl: "" },
    { id: "7", name: "Patient 7", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228036/physiotherapy_image_3_rmiz6j.webp", videoUrl: "" },
    { id: "8", name: "Patient 8", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228037/physiotherapy_image_9_omnzun.webp", videoUrl: "" },
    { id: "9", name: "Patient 9", outcome: "Physiotherapy Treatment", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785228041/physiotherapy_image_12_vfxtdd.webp", videoUrl: "" },
    { id: 's6', title: "Knee Arthritis Physiotherapy", description: "Expert care for knee pain, osteoarthritis, and mobility restoration in Amlidih, Raipur.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785296240/Osteoarthritis_Physiotherapy_Treatment_rzthdj.webp" }
    ,
    { id: 's6', title: "Knee Arthritis Physiotherapy", description: "Expert care for knee pain, osteoarthritis, and mobility restoration in Amlidih, Raipur.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785296240/Osteoarthritis_Physiotherapy_Treatment_rzthdj.webp" }
  ],
  reviews: [
    { id: "1", name: "Patient 1", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/561NdxoFhO0/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/561NdxoFhO0?si=QTg1uaz8vjkG3mqL" },
    { id: "2", name: "Patient 2", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Eo-utz9l49I/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Eo-utz9l49I?si=-YVbjFKy9w-1eQ0d" },
    { id: "3", name: "Patient 3", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/FPY611qNJj0/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/FPY611qNJj0?si=SNhBPvaw9HpZvgt7" },
    { id: "4", name: "Patient 4", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/sPNP-sW9UgM/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/sPNP-sW9UgM?si=bGusE1omcxNyM0wS" },
    { id: "5", name: "Patient 5", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Vd2oB0Qgh3M/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Vd2oB0Qgh3M?si=40yOZ9QoIl2Qyvk6" },
    { id: "6", name: "Patient 6", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/elaocnb6mb4/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/elaocnb6mb4?si=mmajaIxT9gU3cc0W" },
    { id: "7", name: "Patient 7", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/U9vmPSCo0Nc/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/U9vmPSCo0Nc?si=fgB-EUycP4psOXW2" },
    { id: "8", name: "Patient 8", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/S4M7qRq9JSs/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/S4M7qRq9JSs?si=XZOqH97jNZDWi7-I" },
    { id: "9", name: "Patient 9", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/lBpSQTNgJ-E/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/lBpSQTNgJ-E?si=MaWI-F7LCSlzadpA" },
    { id: "10", name: "Patient 10", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/X3Y0zC3HLuQ/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/X3Y0zC3HLuQ?si=ZnHVXu6xfTw2rcTl" },
    { id: "11", name: "Patient 11", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Lny5RrOxFdE/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Lny5RrOxFdE?si=a17QBzr4Rxk5mct8" },
    { id: "12", name: "Patient 12", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/hRt-m2CeqzY/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/hRt-m2CeqzY?si=FNT8_It1k4A76u_A" }
  ],
  testimonials: [
    { id: '1', name: "Patient 1", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/561NdxoFhO0/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/561NdxoFhO0?si=QTg1uaz8vjkG3mqL" },
    { id: '2', name: "Patient 2", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Eo-utz9l49I/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Eo-utz9l49I?si=-YVbjFKy9w-1eQ0d" },
    { id: '3', name: "Patient 3", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/FPY611qNJj0/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/FPY611qNJj0?si=SNhBPvaw9HpZvgt7" },
    { id: '4', name: "Patient 4", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/sPNP-sW9UgM/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/sPNP-sW9UgM?si=bGusE1omcxNyM0wS" },
    { id: '5', name: "Patient 5", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Vd2oB0Qgh3M/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Vd2oB0Qgh3M?si=40yOZ9QoIl2Qyvk6" },
    { id: '6', name: "Patient 6", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/elaocnb6mb4/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/elaocnb6mb4?si=mmajaIxT9gU3cc0W" },
    { id: '7', name: "Patient 7", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/U9vmPSCo0Nc/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/U9vmPSCo0Nc?si=fgB-EUycP4psOXW2" },
    { id: '8', name: "Patient 8", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/S4M7qRq9JSs/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/S4M7qRq9JSs?si=XZOqH97jNZDWi7-I" },
    { id: '9', name: "Patient 9", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/lBpSQTNgJ-E/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/lBpSQTNgJ-E?si=MaWI-F7LCSlzadpA" },
    { id: '10', name: "Patient 10", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/X3Y0zC3HLuQ/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/X3Y0zC3HLuQ?si=ZnHVXu6xfTw2rcTl" },
    { id: '11', name: "Patient 11", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/Lny5RrOxFdE/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/Lny5RrOxFdE?si=a17QBzr4Rxk5mct8" },
    { id: '12', name: "Patient 12", outcome: "Physiotherapy Success", image: "https://i.ytimg.com/vi/hRt-m2CeqzY/hqdefault.jpg", videoUrl: "https://youtube.com/shorts/hRt-m2CeqzY?si=FNT8_It1k4A76u_A" }
  ],
  doctors: [
    {
      name: "Dr. Thakeshwer Sahu (PT)",
      title: "Consultant Physiotherapist",
      degrees: "BPT, MPT (Ortho) | Reg. No - CGPOC589",
      experience: "8+",
      image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785565318/Gemini_Generated_Image_mdcvr5mdcvr5mdcv_cmui5a.png", // Will get a better image if available, fallback for now
      description: "Dr. Thakeshwer Sahu is a highly skilled Consultant Physiotherapist with 8 years of experience. He formerly served as a Consultant Physiotherapist at Ramkrishna Care Hospital, Raipur.",
      bullets: [
        { icon: "Star", text: "Expert in Ortho" },
        { icon: "Award", text: "Ex Consultant Ramkrishna Care Hospital" }
      ]
    },
    {
      name: "Dr. Jyoti Sahu (PT)",
      title: "Consultant Physiotherapist",
      degrees: "BPT, MPT (Neuro) | Reg. No - CGPOC558",
      experience: "8+",
      image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785564665/Dr._jyoti_Sahu_anzaf3.png", // Will get a better image if available, fallback for now
      description: "A highly qualified Consultant Physiotherapist, Dr. Jyoti Sahu specializes in Neuro physiotherapy with 8 years of experience. She formerly served as a Consultant Physiotherapist at Sankalp Hospital Raipur.",
      bullets: [
        { icon: "Brain", text: "Neuro-Rehabilitation" },
        { icon: "HeartPulse", text: "Ex Consultant Sankalp Hospital" }
      ]
    }
  ],
  services: [
    { id: 's1', title: "Back & Neck Pain Treatment", description: "Chronic lower back pain relief, cervical spondylosis management, and posture correction therapy.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785296151/does-physiotherapy-reduce-and-cure-your-lower-back-pain-problem-1643259226_-_Copy_-_Copy_kof6nj.webp" },
    { id: 's2', title: "Sports Injury Rehabilitation", description: "Muscle and ligament injury care, sports recovery programs, and strength and flexibility training.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785296220/tennis-elbow-golfers-elbow_kilzzo.jpg" },
    { id: 's3', title: "Post-Surgical Rehabilitation", description: "Knee replacement recovery, spine surgery physiotherapy, and mobility and strength restoration.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" },
    { id: 's4', title: "Neurological Physiotherapy", description: "Stroke rehabilitation, paralysis treatment, and balance and coordination training.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785568137/Screenshot_2026-08-01_121846_wxeotr.png" },
    { id: 's5', title: "Orthopedic Physiotherapy", description: "Knee, shoulder, and joint pain, arthritis management, and range of motion improvement.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785424705/Osteoarthritis_22323_yvvfru.jpg" },
    { id: 's6', title: "Knee Arthritis Physiotherapy", description: "Expert care for knee pain, osteoarthritis, and mobility restoration in Amlidih, Raipur.", image: "https://res.cloudinary.com/yfn8ptmo/image/upload/v1785296240/Osteoarthritis_Physiotherapy_Treatment_rzthdj.webp" }
  ],
  conditions: [],
  clinicContext: `You are a highly smart, helpful, and professional AI Assistant for Sahu Physiotherapy Clinic.
Your name is Sahu Assistant. You are friendly, concise, and knowledgeable about the clinic's services.

Here is the complete detail about the website and clinic to answer all user queries:
Sahu Physiotherapy Clinic is Central India's premier destination for advanced rehabilitation and pain management. It is located at First floor, Shop NO. A6, A7, Roshan Complex, Shreeji kalptaru Colony, Amlihdih, Mahaveer Nagar, Raipur, Chhattisgarh 492001. The phone number is +91 8871111877 and the email is info@sahuphysiotherapy.com. The clinic's working hours are Monday to Saturday from 9:00 AM to 1:30 PM, then the clinic is closed in the afternoon, and reopens from 4:00 PM to 8:00 PM. On Sundays, the clinic is open only from 9:00 AM to 2:00 PM.

Our expert doctors are Dr. Thakeshwer Sahu (PT) who is a Consultant Physiotherapist with BPT, MPT (Ortho) and 8+ years of experience, formerly at Ramkrishna Care Hospital. The other expert doctor is Dr. Jyoti Sahu (PT), a Consultant Physiotherapist with BPT, MPT (Neuro) and 8+ years of experience, formerly at Sankalp Hospital. 

We offer a wide range of services including:
1. Back & Neck Pain Treatment for chronic lower back pain relief, cervical spondylosis management, and posture correction.
2. Sports Injury Rehabilitation for muscle and ligament injuries, sports recovery programs, and strength and flexibility training.
3. Post-Surgical Rehabilitation for knee replacement recovery, spine surgery physiotherapy, and mobility restoration.
4. Neurological Physiotherapy for stroke rehabilitation, paralysis treatment, and balance training.
5. Orthopedic Physiotherapy for knee, shoulder, and joint pain, arthritis management, and range of motion improvement.
6. Knee Arthritis Physiotherapy for expert care for knee pain, osteoarthritis, and mobility restoration in Amlidih, Raipur.

The clinic has over 5000+ happy customers. The clinic utilizes advanced equipment, personalized care plans, and evidence-based treatment to provide fast and sustainable recovery without dependency on heavy medication.

- Scope: Only answer questions related to the clinic and physiotherapy treatments.`,
};

interface AdminContextType {
  clinicData: ClinicData;
  publicData: ClinicData;
  updateClinicData: (newData: Partial<ClinicData>) => void;
  bookings: any[];
  addBooking: (booking: any) => Promise<void>;
  updateBookingStatus: (id: string, status: string) => void;
  deleteBooking: (id: string) => void;
  queries: any[];
  deleteQuery: (id: string) => void;
  draftData: ClinicData;
  setDraftData: React.Dispatch<React.SetStateAction<ClinicData>>;
  publishChanges: () => void;
  discardChanges: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const [clinicData, setClinicData] = useState<ClinicData>(defaultClinicData);
  const [draftData, setDraftData] = useState<ClinicData>(defaultClinicData);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch bookings
  useEffect(() => {
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
    const unsubscribeBookings = onSnapshot(q, (snapshot) => {
      const bks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(bks);
    }, (error) => {
      console.error("Error fetching bookings:", error);
    });

    return () => unsubscribeBookings();
  }, []);

  // Fetch initial data from Firebase
  useEffect(() => {
    const docRef = doc(db, 'clinicData', 'main_v3');
    
    // Initial fetch + real-time updates
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data() as ClinicData;
        
        // Ensure arrays exist and force local images
        const safeData = {
          ...defaultClinicData,
          ...data,
          transformations: defaultClinicData.transformations,
          conditions: defaultClinicData.conditions,
          services: defaultClinicData.services,
          doctors: defaultClinicData.doctors,
          reviews: defaultClinicData.reviews,
          testimonials: defaultClinicData.testimonials
        };
        
        setClinicData(safeData);
        setDraftData(safeData);
      } else {
        // If document doesn't exist, seed it with default data
        setDoc(docRef, defaultClinicData);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching clinic data:", error);
      // Fallback to local storage if offline or error
      const saved = localStorage.getItem('sahu_clinic_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        const safeParsed = {
            ...parsed,
            transformations: defaultClinicData.transformations,
            conditions: defaultClinicData.conditions,
            services: defaultClinicData.services,
            doctors: defaultClinicData.doctors,
            reviews: defaultClinicData.reviews,
            testimonials: defaultClinicData.testimonials
        };
        setClinicData(safeParsed);
        setDraftData(safeParsed);
      } else {
        setClinicData(defaultClinicData);
        setDraftData(defaultClinicData);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateClinicData = async (newData: Partial<ClinicData>) => {
    try {
      const updated = { ...clinicData, ...newData };
      // Update local state immediately for snappy UI
      setClinicData(updated);
      
      // Update Firebase
      const docRef = doc(db, 'clinicData', 'main_v3');
      await setDoc(docRef, updated, { merge: true });
      
      // Also save to localStorage as backup
      localStorage.setItem('sahu_clinic_data', JSON.stringify(updated));
    } catch (error) {
      console.error("Error saving to Firebase:", error);
      // Revert if needed or show error (UI toast handles it typically)
    }
  };

  const addBooking = async (booking: any) => {
    try {
      await addDoc(collection(db, 'bookings'), {
        ...booking,
        status: 'pending',
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const docRef = doc(db, 'bookings', id);
      await updateDoc(docRef, { status });
    } catch (error) {
      console.error("Error updating booking status: ", error);
    }
  };

  const deleteBooking = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'bookings', id));
    } catch (error) {
      console.error("Error deleting booking: ", error);
    }
  };

  const publishChanges = () => {
    updateClinicData(draftData);
  };

  const discardChanges = () => {
    setDraftData(clinicData);
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <AdminContext.Provider value={{ 
      clinicData, 
      publicData: clinicData,
      updateClinicData,
      bookings,
      addBooking,
      updateBookingStatus,
      deleteBooking,
      queries: [],
      deleteQuery: () => {},
      draftData,
      setDraftData,
      publishChanges,
      discardChanges
    }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
