import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import GlobalNavbar from './components/GlobalNavbar';
import AboutNavbar from './components/AboutNavbar';

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
      <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
    </div>
  </div>
);

// Navbar rendered at root level — buiten alle page wrappers zodat fixed altijd werkt
const RootNavbar: React.FC = () => {
  const location = useLocation();
  if (location.pathname === '/') return null;
  if (location.pathname.startsWith('/project/')) return null;
  if (location.pathname === '/about') return <AboutNavbar />;
  return <GlobalNavbar />;
};

const AppRoutes: React.FC = () => {
  const hasVisited = sessionStorage.getItem('hasVisitedSite') === 'true';

  return (
    <>
      <RootNavbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={hasVisited ? <Navigate to="/home" replace /> : <FirstScreen />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRoutes;
