'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load home page with better error handling
const HomePage = dynamic(() => import('../../src/pages-components/Homescreenpage/index').catch(err => {
  console.error('Failed to load HomePage:', err);
  return { default: () => <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Error loading page</div> };
}), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-emerald-400 font-medium text-lg animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-emerald-400">Loading...</div>
      </div>
    }>
      <HomePage />
    </Suspense>
  );
}
