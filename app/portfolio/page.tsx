'use client';

import dynamic from 'next/dynamic';

// Lazy load portfolio page
const PortfolioPage = dynamic(() => import('../../src/pages-components/Portfolio/NewPortfolioPage'), {
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

export default function Portfolio() {
  return <PortfolioPage />;
}
