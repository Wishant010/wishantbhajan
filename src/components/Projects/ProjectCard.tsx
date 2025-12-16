'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from '../../utils/routerCompat';
import { Project } from '../../types/portfolio.types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

// Projects that show "coming soon info" modal instead of navigating
const PENDING_INFO_PROJECTS = ['tabletech', 'urban-mobility', 'shipment-tracking', 'spirit-engineering'];

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [showCybersecurityModal, setShowCybersecurityModal] = useState(false);
  const [showPendingInfoModal, setShowPendingInfoModal] = useState(false);

  const handleClick = () => {
    // Don't navigate if the project is coming soon
    if (project.comingSoon) {
      return;
    }

    // Show special modal for cybersecurity projects
    if (project.category === 'cybersecurity') {
      setShowCybersecurityModal(true);
      return;
    }

    // Show special modal for projects with pending info
    if (PENDING_INFO_PROJECTS.includes(project.id)) {
      setShowPendingInfoModal(true);
      return;
    }

    if (onClick) {
      onClick();
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`project-card relative group/canvas-card ${project.comingSoon ? 'cursor-default' : 'cursor-pointer'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={project.comingSoon ? {} : {
        scale: 1.02,
        rotateX: 2,
        rotateY: 2,
        transition: { duration: 0.3 }
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      onClick={handleClick}
      style={{ perspective: 1000 }}
    >
      <div className="relative h-full rounded-xl border border-cyan-500/20 overflow-hidden transition-all duration-300 hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20">

        {/* Background Image - Full card */}
        {project.thumbnail ? (
          <div className="absolute inset-0 z-0">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-all duration-200 group-hover/canvas-card:scale-105"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            {/* Overlay - darker for projects with darkOverlay flag */}
            <div className={`absolute inset-0 transition-all duration-300 ${project.darkOverlay ? 'bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-slate-900/40 group-hover/canvas-card:from-slate-900/95 group-hover/canvas-card:via-slate-900/70 group-hover/canvas-card:to-slate-900/50' : 'bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent group-hover/canvas-card:from-slate-900/90 group-hover/canvas-card:via-slate-900/50 group-hover/canvas-card:to-slate-900/20'}`} />
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-slate-800/50 backdrop-blur-lg transition-all duration-300 group-hover/canvas-card:bg-slate-800/70" />
        )}

        {/* Project content */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Icon for projects without image */}
          {!project.thumbnail && (
            <div className="w-full h-32 bg-gradient-to-br from-cyan-950/30 to-slate-900/30 rounded-lg mb-4 flex items-center justify-center border border-cyan-500/10 transition-all duration-200 group-hover/canvas-card:border-cyan-500/30">
              <div className="transition-all duration-200 group-hover/canvas-card:scale-110 group-hover/canvas-card:-translate-y-2">{getCategoryIcon(project.category)}</div>
            </div>
          )}

          {/* Top section - Title and Description */}
          <div className="flex-1">
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-200 text-sm mb-4 leading-relaxed drop-shadow-md">
              {project.description}
            </p>
          </div>

          {/* Bottom section - Tech stack and Links */}
          <div>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-900/70 text-cyan-300 rounded-md text-xs font-medium border border-cyan-500/30 transition-all duration-200 group-hover/canvas-card:bg-slate-900/90 group-hover/canvas-card:border-cyan-400/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links or Coming Soon Button */}
            {project.comingSoon ? (
              <div className="mt-4">
                <button
                  disabled
                  className="w-full px-4 py-2 text-center font-bold text-slate-400 bg-slate-800/50 border border-slate-700 rounded-lg cursor-not-allowed"
                >
                  {t('project.comingSoon')}
                </button>
              </div>
            ) : (
              (project.links.github || project.links.demo) && (
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 text-sm font-medium hover:text-cyan-200 transition-colors drop-shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('project.github')} →
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-300 text-sm font-medium hover:text-emerald-200 transition-colors drop-shadow-md"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {t('project.liveDemo')} →
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Cybersecurity Coming Soon Modal */}
      <AnimatePresence>
        {showCybersecurityModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCybersecurityModal(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-800/98 rounded-2xl p-8 max-w-md w-full border-2 border-cyan-500/30 text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div
                className="absolute top-3 right-3 z-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowCybersecurityModal(false);
                }}
              >
                <button
                  type="button"
                  className="p-3 rounded-full text-cyan-400 bg-cyan-500/20 hover:bg-cyan-500/40 transition-colors duration-200 cursor-pointer"
                  title={t('project.modal.close')}
                  aria-label={t('project.modal.close')}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center pt-4">
                <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {t('project.modal.cybersecurity.title')}
              </h3>

              {/* Message */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('project.modal.cybersecurity.message')}
              </p>

              {/* Project Title */}
              <div className="px-4 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
                <p className="text-cyan-300 font-medium">{project.title}</p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowCybersecurityModal(false)}
                className="mt-6 px-6 py-3 bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold rounded-lg hover:bg-cyan-500/30 transition-all duration-200"
              >
                {t('project.modal.cybersecurity.understood')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pending Info Modal */}
      <AnimatePresence>
        {showPendingInfoModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPendingInfoModal(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/85"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-800/98 rounded-2xl p-8 max-w-md w-full border-2 text-center"
              style={{
                borderColor: project.category === 'bedrijven' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(236, 72, 153, 0.3)'
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div
                className="absolute top-3 right-3 z-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowPendingInfoModal(false);
                }}
              >
                <button
                  type="button"
                  className="p-3 rounded-full transition-colors duration-200 cursor-pointer"
                  style={{
                    color: project.category === 'bedrijven' ? '#f59e0b' : '#ec4899',
                    backgroundColor: project.category === 'bedrijven' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(236, 72, 153, 0.2)'
                  }}
                  title={t('project.modal.close')}
                  aria-label={t('project.modal.close')}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center pt-4">
                {project.category === 'bedrijven' ? (
                  <svg className="w-16 h-16 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <svg className="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: project.category === 'bedrijven' ? '#f59e0b' : '#ec4899' }}
              >
                {project.title}
              </h3>

              {/* Message */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                {t('project.modal.pending.message')}
              </p>

              {/* Website Link - only for TableTech */}
              {project.id === 'tabletech' && project.links.demo && (
                <div
                  className="px-4 py-3 rounded-lg mb-6"
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 1,
                    borderColor: 'rgba(245, 158, 11, 0.3)'
                  }}
                >
                  <p className="text-slate-400 text-sm mb-2">{t('project.modal.pending.viewWebsite')}</p>
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-lg hover:opacity-80 transition-opacity"
                    style={{ color: '#fbbf24' }}
                  >
                    TableTech.nl →
                  </a>
                </div>
              )}

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowPendingInfoModal(false)}
                className="px-6 py-3 font-bold rounded-lg transition-all duration-200"
                style={{
                  color: project.category === 'bedrijven' ? '#f59e0b' : '#ec4899',
                  backgroundColor: project.category === 'bedrijven' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(236, 72, 153, 0.2)',
                  borderWidth: 1,
                  borderColor: project.category === 'bedrijven' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(236, 72, 153, 0.4)'
                }}
              >
                {t('project.modal.pending.understood')}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function getCategoryIcon(category: string): React.ReactNode {
  switch (category) {
    case 'cybersecurity':
      return (
        <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case 'bedrijven':
      return (
        <svg className="w-12 h-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'persoonlijk':
      return (
        <svg className="w-12 h-12 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
    default:
      return (
        <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
  }
}

export default ProjectCard;
