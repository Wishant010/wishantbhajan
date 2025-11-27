'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from '../../utils/routerCompat';
import { Project } from '../../types/portfolio.types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    // Don't navigate if the project is coming soon
    if (project.comingSoon) {
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
              <span className="text-5xl transition-all duration-200 group-hover/canvas-card:scale-110 group-hover/canvas-card:-translate-y-2">{getCategoryIcon(project.category)}</span>
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
                  Coming Soon
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
                      GitHub →
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
                      Live Demo →
                    </a>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    cybersecurity: '🔒',
    bedrijven: '💼',
    persoonlijk: '🎨'
  };
  return icons[category] || '📁';
}

export default ProjectCard;
