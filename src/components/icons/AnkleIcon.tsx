import React from 'react';

export const AnkleIcon = ({ className = "", ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    {...props}
  >
    {/* Lower leg and foot outline */}
    <path d="M10 2v7.5c0 1.5-1 3.5-3 5.5l-2.5 2.5A1 1 0 0 0 5 19v1a1 1 0 0 0 1 1h8.5A5.5 5.5 0 0 0 20 15.5v-1a1.5 1.5 0 0 0-1.5-1.5H16a1 1 0 0 1-1-1V2" />
    
    {/* Pain radiation/focus around the ankle */}
    <circle cx="12" cy="16" r="2" />
    <path d="M16 16c0 2.2-1.8 4-4 4" strokeDasharray="2 2" />
    <path d="M8 16c0-2.2 1.8-4 4-4" strokeDasharray="2 2" />
  </svg>
);
