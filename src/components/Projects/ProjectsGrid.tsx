import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import styles from './ProjectsGrid.module.css';
import { Project, Category } from '../../types/portfolio.types';
import { portfolioData } from '../../data/portfolioData';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ProjectsGridProps {
  category: Category;
  onBack: () => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ category, onBack }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const categoryData = portfolioData.find((cat) => cat.id === category);
  const projects = categoryData?.projects || [];

  // Scroll-triggered animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      }

      // Project cards stagger animation
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.project-card');

        gsap.from(cards, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            scrub: 0.5,
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotateX: -15,
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.4)'
        });
      }

      // Parallax effect on scroll
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const progress = self.progress;
          if (headerRef.current) {
            gsap.to(headerRef.current, {
              y: progress * 50,
              duration: 0.3,
              ease: 'none'
            });
          }
        }
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects]);

  const getCategoryColor = () => {
    const colors: Record<Category, string> = {
      cybersecurity: '#00ffff',
      school: '#6366f1',
      bedrijf: '#f59e0b',
      persoonlijk: '#ec4899'
    };
    return colors[category];
  };

  return (
    <>
      <motion.div
        className={`relative w-full min-h-screen px-4 sm:px-6 py-10 sm:py-16 md:py-20 ${styles[getThemeClass(category)]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <motion.button
          className={`mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold flex items-center gap-2 transition-all duration-300 text-sm sm:text-base ${styles.backButton}`}
          onClick={onBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>←</span> Back to Categories
        </motion.button>

        {/* Category header */}
        <motion.div
          ref={headerRef}
          className="mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 ${styles.categoryTitle}`}
          >
            {categoryData?.label}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Empty state */}
        {projects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-slate-400 text-lg">
              No projects in this category yet.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            categoryColor={getCategoryColor()}
          />
        )}
      </AnimatePresence>
    </>
  );
};

function getThemeClass(category: Category): keyof typeof styles {
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

export default ProjectsGrid;
