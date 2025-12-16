import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy load all pages for code-splitting
const FirstScreen = lazy(() => import('./pages-components/LandinPage/FirstScreen'));
const HomePage = lazy(() => import('./pages-components/Homescreenpage/index'));
const AboutPage = lazy(() => import('./pages-components/About/AboutPage'));
const PortfolioPage = lazy(() => import('./pages-components/Portfolio/NewPortfolioPage'));
const EventPage = lazy(() => import('./pages-components/Event/EventPage'));
const ArticlePage = lazy(() => import('./pages-components/Article/ArticlePage'));
const ProjectDetailPage = lazy(() => import('./pages-components/ProjectDetail/ProjectDetailPage'));

// Lightweight loading fallback - CSS only, no JS overhead
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-slate-900 flex items-center justify-center">
    <div className="relative">
      {/* Simple CSS spinner */}
      <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      {/* Optional: skeleton pulse */}
      <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
    </div>
  </div>
);

const AppRoutes: React.FC = () => {
  // Check if user has visited the site before
  const hasVisited = sessionStorage.getItem('hasVisitedSite') === 'true';

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Landing page - only show if not visited */}
        <Route path="/" element={hasVisited ? <Navigate to="/home" replace /> : <FirstScreen />} />

        {/* Main pages */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/project/:projectId" element={<ProjectDetailPage />} />

        {/* Catch-all redirect to home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
