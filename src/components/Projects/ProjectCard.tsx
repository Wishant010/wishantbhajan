import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types/portfolio.types';
import { gsap } from 'gsap';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card group relative cursor-pointer"
      initial={{ opacity: 0, rotateX: -90, y: 50 }}
      animate={{ opacity: 1, rotateX: 0, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, 0, 0.4, 1]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="relative h-full bg-slate-800/50 backdrop-blur-lg rounded-xl border border-cyan-500/20 p-6 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/60">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-bold">
              Featured
            </span>
          </div>
        )}

        {/* Project content */}
        <div className="relative z-10">
          {/* Icon/Thumbnail area */}
          <div className="w-full h-40 bg-gradient-to-br from-cyan-950/50 to-slate-900/50 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <span className="text-6xl">{getCategoryIcon(project.category)}</span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-cyan-400/60 text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
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
                className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
        {/* Hover shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shine-effect" />
      </div>
    </motion.div>
  );
};

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    cybersecurity: '🔒',
    school: '🎓',
    bedrijf: '💼',
    persoonlijk: '🎨'
  };
  return icons[category] || '📁';
}

export default ProjectCard;
