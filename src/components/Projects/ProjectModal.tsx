import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio.types';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  categoryColor: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, categoryColor: _categoryColor }) => {
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
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal Content */}
      <motion.div
        className={`${styles.content} ${styles[getThemeClass(project.category)]}`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => onClose()}
          className={styles.closeButton}
          title="Close modal"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Image/Icon */}
        <div className={styles.imageContainer}>
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={styles.projectImage}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          ) : (
            <span className={styles.categoryIcon}>{getCategoryIcon(project.category)}</span>
          )}
        </div>

        {/* Project Details */}
        <h2
          className={styles.title}
        >
          {project.title}
        </h2>

        {project.featured && (
          <span
            className={styles.featuredBadge}
          >
            Featured Project
          </span>
        )}

        <p className={styles.description}>
          {project.description}
        </p>

        {project.details && (
          <p className={styles.details}>
            {project.details}
          </p>
        )}

        {/* Technologies */}
        <div className={styles.technologiesSection}>
          <h3
            className={styles.technologiesTitle}
          >
            Technologies
          </h3>
          <div className={styles.technologiesContainer}>
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className={styles.technologyTag}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.links.github || project.links.demo || project.links.case_study) && (
          <div className={styles.linksContainer}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.githubLink}`}
              >
                View on GitHub →
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.demoLink}`}
              >
                Live Demo →
              </a>
            )}
            {project.links.case_study && (
              <a
                href={project.links.case_study}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkButton} ${styles.caseStudyLink}`}
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

function getThemeClass(category: string): string {
  switch (category) {
    case 'cybersecurity':
      return 'themeCybersecurity';
    case 'school':
      return 'themeSchool';
    case 'bedrijf':
      return 'themeBedrijf';
    case 'persoonlijk':
      return 'themePersoonlijk';
    default:
      return 'themeDefault';
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
