import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { Category, Project } from '../../types/portfolio.types';
import { portfolioData } from '../../data/portfolioData';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function getCategoryColor(category: string): string {
  switch (category) {
    case 'cybersecurity':
      return '#00ffff';
    case 'bedrijven':
      return '#f59e0b';
    case 'persoonlijk':
      return '#ec4899';
    default:
      return '#06b6d4';
  }
}

interface ProjectsGridProps {
  category?: Category;
  onBack?: () => void;
  searchQuery?: string;
  selectedCategory?: string;
  selectedTier?: string;
  selectedSubcategory?: string;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  category,
  onBack,
  searchQuery = '',
  selectedCategory = 'all',
  selectedTier = 'all',
  selectedSubcategory = 'all'
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Filter projects based on search and category
  const getFilteredProjects = () => {
    let allProjects: Project[] = [];

    // If category prop is provided (old behavior)
    if (category) {
      const categoryData = portfolioData.find((cat) => cat.id === category);
      allProjects = categoryData?.projects || [];
    } else {
      // New behavior: filter all projects
      if (selectedCategory === 'all') {
        allProjects = portfolioData.flatMap(cat => cat.projects);
      } else {
        const categoryData = portfolioData.find((cat) => cat.id === selectedCategory);
        allProjects = categoryData?.projects || [];
      }
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      allProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech: string) => tech.toLowerCase().includes(query))
      );
    }

    // Apply tier filter (only for cybersecurity)
    if (selectedTier !== 'all' && selectedCategory === 'cybersecurity') {
      allProjects = allProjects.filter(project => project.tier === selectedTier);
    }

    // Apply subcategory filter (only for persoonlijk)
    if (selectedSubcategory !== 'all' && selectedCategory === 'persoonlijk') {
      allProjects = allProjects.filter(project => project.subcategory === selectedSubcategory);
    }

    return allProjects;
  };

  const projects = getFilteredProjects();

  // Simple initial animations without scroll triggers
  useEffect(() => {
    // Only run if category prop is provided (old behavior)
    if (!category) return;

    const ctx = gsap.context(() => {
      // Simple fade in for header
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out'
        });
      }

      // Simple fade in for cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.project-card');
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power3.out'
        });
      }
    });

    return () => {
      ctx.revert();
    };
  }, [projects, category]);

  const categoryData = category ? portfolioData.find((cat) => cat.id === category) : null;

  return (
    <>
      <motion.div
        className="relative w-full min-h-screen px-4 sm:px-6 py-10 sm:py-16 md:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button - only show if onBack is provided */}
        {onBack && (
          <motion.button
            className="mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-bold flex items-center gap-2 transition-all duration-300 text-sm sm:text-base border"
            style={{
              color: getCategoryColor(selectedCategory),
              borderColor: `color-mix(in srgb, ${getCategoryColor(selectedCategory)} 40%, transparent)`,
              backgroundColor: `color-mix(in srgb, ${getCategoryColor(selectedCategory)} 10%, transparent)`
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${getCategoryColor(selectedCategory)} 20%, transparent)`;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.backgroundColor = `color-mix(in srgb, ${getCategoryColor(selectedCategory)} 10%, transparent)`;
            }}
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>←</span> Back to Categories
          </motion.button>
        )}

        {/* Category header - only show if category is provided */}
        {category && categoryData && (
          <motion.div
            ref={headerRef}
            className="mb-8 sm:mb-10 md:mb-12 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
              style={{ color: getCategoryColor(selectedCategory) }}
            >
              {categoryData.label}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
        )}

        {/* Projects grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ gridAutoRows: '350px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
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
    </>
  );
};

export default ProjectsGrid;
