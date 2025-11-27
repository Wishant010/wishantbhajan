import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FirstScreen from './pages-components/LandinPage/FirstScreen';
import HomePage from './pages-components/Homescreenpage/index';
import AboutPage from './pages-components/About/AboutPage';
import PortfolioPage from './pages-components/Portfolio/NewPortfolioPage';
import EventPage from './pages-components/Event/EventPage';
import ArticlePage from './pages-components/Article/ArticlePage';
import ProjectDetailPage from './pages-components/ProjectDetail/ProjectDetailPage';

const AppRoutes: React.FC = () => {
  // Check if user has visited the site before
  const hasVisited = sessionStorage.getItem('hasVisitedSite') === 'true';

  return (
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
  );
};

export default AppRoutes;
