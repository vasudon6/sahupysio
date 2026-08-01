/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToHash from './components/ScrollToHash';
import { Toaster } from 'react-hot-toast';
import { AdminProvider } from './store/AdminContext';

const PublicSite = lazy(() => import('./pages/PublicSite'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const ClinicDetails = lazy(() => import('./pages/ClinicDetails'));
const Blog = lazy(() => import('./pages/Blog'));
const AllServices = lazy(() => import('./pages/AllServices'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));

export default function App() {
  return (
    <AdminProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-[#fafafa] dark:bg-slate-950 text-slate-500">Loading...</div>}>
          <Routes>
            <Route path="/" element={<PublicSite />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/clinic" element={<ClinicDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
        <Toaster position="top-center" />
      </BrowserRouter>
    </AdminProvider>
  );
}
