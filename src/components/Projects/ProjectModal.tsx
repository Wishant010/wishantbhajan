import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio.types';
import { useLanguage } from '../../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  categoryColor: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, categoryColor: _categoryColor }) => {
  const { t } = useLanguage();

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const categoryColor = getCategoryColor(project.category);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
        className="relative bg-slate-800/98 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2"
        style={{
          borderColor: `color-mix(in srgb, ${categoryColor} 30%, transparent)`
        }}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => onClose()}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors duration-200"
          style={{
            color: categoryColor,
            backgroundColor: `color-mix(in srgb, ${categoryColor} 10%, transparent)`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${categoryColor} 20%, transparent)`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${categoryColor} 10%, transparent)`;
          }}
          title={t('project.modal.close')}
          aria-label={t('project.modal.close')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image/Icon */}
        <div className="w-full h-64 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl mb-6 flex items-center justify-center overflow-hidden">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <div className="flex items-center justify-center">{getCategoryIcon(project.category)}</div>
          )}
        </div>

        {/* Project Details */}
        <h2
          className="text-3xl font-bold mb-4"
          style={{ color: categoryColor }}
        >
          {project.title}
        </h2>

        {project.featured && (
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border"
            style={{
              color: categoryColor,
              backgroundColor: `color-mix(in srgb, ${categoryColor} 20%, transparent)`,
              borderColor: `color-mix(in srgb, ${categoryColor} 40%, transparent)`
            }}
          >
            {t('project.modal.featuredProject')}
          </span>
        )}

        <p className="text-slate-300 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>

        {project.details && (
          <p className="text-slate-400 mb-6">
            {project.details}
          </p>
        )}

        {/* Technologies */}
        <div className="mb-6">
          <h3
            className="text-xl font-bold mb-3"
            style={{ color: categoryColor }}
          >
            {t('project.modal.technologies')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-semibold border"
                style={{
                  color: categoryColor,
                  backgroundColor: `color-mix(in srgb, ${categoryColor} 20%, transparent)`,
                  borderColor: `color-mix(in srgb, ${categoryColor} 30%, transparent)`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.links.github || project.links.demo || project.links.case_study) && (
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-700">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300 border"
                style={{
                  color: categoryColor,
                  backgroundColor: `color-mix(in srgb, ${categoryColor} 20%, transparent)`,
                  borderColor: `color-mix(in srgb, ${categoryColor} 40%, transparent)`
                }}
              >
                {t('project.modal.viewOnGitHub')} →
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300"
                style={{
                  color: '#0f172a',
                  backgroundColor: categoryColor
                }}
              >
                {t('project.modal.viewLiveDemo')} →
              </a>
            )}
            {project.links.case_study && (
              <a
                href={project.links.case_study}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300 border"
                style={{
                  color: categoryColor,
                  backgroundColor: `color-mix(in srgb, ${categoryColor} 20%, transparent)`,
                  borderColor: `color-mix(in srgb, ${categoryColor} 40%, transparent)`
                }}
              >
                {t('project.modal.caseStudy')} →
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

function getCategoryColor(category: string): string {
  switch (category) {
    case 'cybersecurity':
      return '#10b981';
    case 'school':
      return '#3b82f6';
    case 'bedrijf':
      return '#8b5cf6';
    case 'persoonlijk':
      return '#f59e0b';
    default:
      return '#06b6d4';
  }
}

function getCategoryIcon(category: string): React.ReactNode {
  switch (category) {
    case 'cybersecurity':
      return (
        <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case 'school':
      return (
        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'bedrijf':
    case 'bedrijven':
      return (
        <svg className="w-16 h-16 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'persoonlijk':
      return (
        <svg className="w-16 h-16 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      );
    default:
      return (
        <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
  }
}

export default ProjectModal;
