import React, { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio.types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  categoryColor: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, categoryColor: _categoryColor }) => {
  useEffect(() => {
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

  const cssVars = useMemo(() => ({
    '--cat-color': categoryColor,
    '--cat-bg-10': `color-mix(in srgb, ${categoryColor} 10%, transparent)`,
    '--cat-bg-20': `color-mix(in srgb, ${categoryColor} 20%, transparent)`,
    '--cat-border-30': `color-mix(in srgb, ${categoryColor} 30%, transparent)`,
    '--cat-border-40': `color-mix(in srgb, ${categoryColor} 40%, transparent)`,
  } as React.CSSProperties), [categoryColor]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={cssVars}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className="relative bg-slate-800/95 backdrop-blur-xl backdrop-saturate-[1.8] rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto border-2 border-[var(--cat-border-30)]"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => onClose()}
          className="absolute top-4 right-4 p-2 rounded-lg transition-colors duration-200 text-[var(--cat-color)] bg-[var(--cat-bg-10)] hover:bg-[var(--cat-bg-20)]"
          title="Close modal"
          aria-label="Close modal"
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
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <span className="text-8xl">{getCategoryIcon(project.category)}</span>
          )}
        </div>

        {/* Project Details */}
        <h2 className="text-3xl font-bold mb-4 text-[var(--cat-color)]">
          {project.title}
        </h2>

        {project.featured && (
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 border text-[var(--cat-color)] bg-[var(--cat-bg-20)] border-[var(--cat-border-40)]">
            Featured Project
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
          <h3 className="text-xl font-bold mb-3 text-[var(--cat-color)]">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-semibold border text-[var(--cat-color)] bg-[var(--cat-bg-20)] border-[var(--cat-border-30)]"
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
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300 border text-[var(--cat-color)] bg-[var(--cat-bg-20)] border-[var(--cat-border-40)] hover:bg-[var(--cat-border-30)]"
              >
                View on GitHub →
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300 text-slate-900 bg-[var(--cat-color)] hover:opacity-90"
              >
                Live Demo →
              </a>
            )}
            {project.links.case_study && (
              <a
                href={project.links.case_study}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-bold transition-all duration-300 border text-[var(--cat-color)] bg-[var(--cat-bg-20)] border-[var(--cat-border-40)] hover:bg-[var(--cat-border-30)]"
              >
                Case Study →
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

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    cybersecurity: '🔒',
    school: '🎓',
    bedrijf: '💼',
    persoonlijk: '🎨'
  };
  return icons[category] || '📁';
}

export default ProjectModal;
