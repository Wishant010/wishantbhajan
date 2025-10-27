"use client"

import type React from "react"
import { useState } from "react"
import '../../components/animations.css'
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"

interface PortfolioProps {
  isVisible?: boolean
}

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  extendedDescription?: string;
  image: string;
  tech: string[];
  features: string[];
  status: 'live' | 'development' | 'completed';
  metrics?: {
    users?: string;
    rating?: string;
    uptime?: string;
    performance?: string;
  };
  github?: string;
  demo?: string;
  featured?: boolean;
  category: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ isVisible = true }) => {
  const { t } = useLanguage();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Project data with images and metrics
  const projects: Project[] = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.desc'),
      extendedDescription: t('project1.extDesc'),
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS", "Redis", "Docker"],
      features: [t('project1.feature1'), t('project1.feature2'), t('project1.feature3'), t('project1.feature4')],
      status: 'live',
      metrics: {
        users: "2.5k+",
        rating: "4.8",
        uptime: "99.9%",
        performance: "95/100"
      },
      featured: true,
      category: 'web',
      demo: "https://demo.com",
      github: "https://github.com"
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.desc'),
      extendedDescription: t('project2.extDesc'),
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js", "TensorFlow"],
      features: [t('project2.feature1'), t('project2.feature2'), t('project2.feature3'), t('project2.feature4')],
      status: 'live',
      metrics: {
        users: "500+",
        rating: "4.9",
        uptime: "99.95%"
      },
      featured: true,
      category: 'ai'
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.desc'),
      image: "/api/placeholder/600/400",
      tech: ["Web3.js", "React", "Solidity", "Hardhat"],
      features: [t('project3.feature1'), t('project3.feature2'), t('project3.feature3')],
      status: 'development',
      metrics: {
        users: "Beta",
        rating: "N/A"
      },
      category: 'blockchain'
    },
    {
      id: 4,
      title: t('project4.title'),
      description: t('project4.desc'),
      image: "/api/placeholder/600/400",
      tech: ["React", "Firebase", "Material-UI", "OpenAI"],
      features: [t('project4.feature1'), t('project4.feature2'), t('project4.feature3')],
      status: 'completed',
      metrics: {
        users: "1k+",
        rating: "4.7"
      },
      category: 'productivity'
    },
    {
      id: 5,
      title: t('project5.title'),
      description: t('project5.desc'),
      image: "/api/placeholder/600/400",
      tech: ["Vue.js", "D3.js", "OpenWeather API"],
      features: [t('project5.feature1'), t('project5.feature2'), t('project5.feature3')],
      status: 'live',
      metrics: {
        users: "5k+",
        rating: "4.6"
      },
      category: 'data'
    },
    {
      id: 6,
      title: t('project6.title'),
      description: t('project6.desc'),
      image: "/api/placeholder/600/400",
      tech: ["Next.js", "Socket.io", "Redis", "PostgreSQL"],
      features: [t('project6.feature1'), t('project6.feature2'), t('project6.feature3')],
      status: 'development',
      category: 'social'
    }
  ];

  // Filter projects by category
  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Categories for filtering
  const categories = [
    { id: 'all', labelKey: 'portfolio.filter.all', icon: '🎯' },
    { id: 'web', labelKey: 'portfolio.filter.web', icon: '🌐' },
    { id: 'ai', labelKey: 'portfolio.filter.ai', icon: '🤖' },
    { id: 'blockchain', labelKey: 'portfolio.filter.blockchain', icon: '⛓️' },
    { id: 'data', labelKey: 'portfolio.filter.data', icon: '📊' }
  ];

  // Get tech icon
  const getTechIcon = (tech: string): string => {
    const icons: { [key: string]: string } = {
      'React': '⚛️',
      'Next.js': '▲',
      'Node.js': '🟢',
      'TypeScript': '🔷',
      'MongoDB': '🍃',
      'PostgreSQL': '🐘',
      'Docker': '🐳',
      'Vue.js': '💚',
      'Solidity': '⟠',
      'Python': '🐍'
    };
    return icons[tech] || '💻';
  };

  // Status badge component
  const StatusBadge: React.FC<{ status: Project['status'] }> = ({ status }) => {
    const styles = {
      live: 'bg-green-500/10 text-green-400 border-green-500/30',
      development: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      completed: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    };

    const icons = {
      live: '🟢',
      development: '🔧',
      completed: '✅'
    };

    return (
      <div className={`status-badge flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${styles[status]}`}>
        <span className="status-dot">{icons[status]}</span>
        {status.toUpperCase()}
      </div>
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-20 scroll-snap-section">
      {/* Animated cyber grid background */}
      <div className="absolute inset-0 bg-slate-900">
        <div
          className="absolute inset-0 opacity-20 cyber-grid"
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: -10,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Portfolio Header with gradient text */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 50
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {t('portfolio.header')}
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.description')}
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{cat.icon}</span>
              {t(cat.labelKey)}
            </motion.button>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`relative group ${
                  project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.23, 1, 0.32, 1]
                  }
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Card with gradient border */}
                <div className="relative h-full overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500">
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl blur-sm" />
                  </div>

                  {/* Card content */}
                  <div className="relative bg-slate-900/90 backdrop-blur-xl h-full rounded-2xl overflow-hidden">
                    {/* Project Image */}
                    <div className="relative h-48 lg:h-64 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Status Badge Overlay */}
                      <div className="absolute top-4 right-4 z-20">
                        <StatusBadge status={project.status} />
                      </div>

                      {/* Image Overlay on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                        initial={false}
                      >
                        <div className="flex gap-4">
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500/30 transition-all"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Live Demo →
                            </motion.a>
                          )}
                          {project.github && (
                            <motion.a
                              href={project.github}
                              className="px-6 py-2 bg-slate-700/50 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-700/70 transition-all"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              GitHub
                            </motion.a>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Hover Reveal Extended Description */}
                      <AnimatePresence>
                        {hoveredProject === project.id && project.extendedDescription && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-slate-400 text-sm mb-4"
                          >
                            {project.extendedDescription}
                          </motion.p>
                        )}
                      </AnimatePresence>

                      {/* Project Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-slate-800/50 rounded-lg">
                              <div className="text-cyan-400 font-bold text-lg">{value}</div>
                              <div className="text-slate-500 text-xs capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Interactive Tech Badges with Tooltips */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 5).map((tech) => (
                          <div
                            key={tech}
                            className="tech-badge relative group/badge"
                          >
                            <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-700/50 text-cyan-400 rounded-full text-sm font-medium hover:bg-cyan-500/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-slate-600 hover:border-cyan-500/50">
                              <span>{getTechIcon(tech)}</span>
                              <span>{tech}</span>
                            </span>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-800 text-white text-xs rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-slate-700">
                              {tech} - Click to filter
                            </div>
                          </div>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-3 py-1 bg-slate-800/50 text-slate-400 rounded-full text-sm">
                            +{project.tech.length - 5} more
                          </span>
                        )}
                      </div>

                      {/* Features List */}
                      <div className="space-y-1">
                        {project.features.slice(0, 3).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                            <span className="text-cyan-400">▪</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3D Lift Effect Shadow */}
                  <motion.div
                    className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                    animate={hoveredProject === project.id ? {
                      boxShadow: [
                        "0 0 0 rgba(0, 245, 255, 0)",
                        "0 0 30px rgba(0, 245, 255, 0.3)",
                        "0 0 60px rgba(0, 245, 255, 0.2)"
                      ]
                    } : {}}
                  />
                </div>

                {/* Hover Lift Transform */}
                <style>{`
                  .group:hover {
                    transform: translateY(-12px) scale(1.02);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  }
                `}</style>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('portfolio.cta.header')}
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            {t('portfolio.cta.description')}
          </p>
          <motion.button
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('portfolio.homepage.cta.button')} →
          </motion.button>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float-grid {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-50px, -50px);
          }
        }

        @keyframes pulse-dot {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.5);
          }
        }

        .status-badge .status-dot {
          animation: pulse-dot 2s ease-in-out infinite;
        }

        .tech-badge {
          position: relative;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Portfolio