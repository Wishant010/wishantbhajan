import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRight, Code, Shield, Database, Cloud, Brain, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MagicBento from '../../components/MagicBento';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './FeaturedProjectsAndSkills.module.css';

// Skill type definition
interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
  note?: string;
}

const FeaturedProjectsAndSkills: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const { t } = useLanguage();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const featuredProjects = [
    {
      color: '#0A0E27',
      title: t('featured.project1.title'),
      description: t('featured.project1.desc'),
      label: t('featured.project1.label'),
      featured: true,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      span: { cols: 2, rows: 2 }
    },
    {
      color: '#0B1029',
      title: t('featured.project2.title'),
      description: t('featured.project2.desc'),
      label: t('featured.project2.label'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    },
    {
      color: '#0C132B',
      title: t('featured.project3.title'),
      description: t('featured.project3.desc'),
      label: t('featured.project3.label'),
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      color: '#0D152E',
      title: t('featured.project4.title'),
      description: t('featured.project4.desc'),
      label: t('featured.project4.label'),
      span: { cols: 2, rows: 1 },
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop'
    },
    {
      color: '#0E1831',
      title: t('featured.project5.title'),
      description: t('featured.project5.desc'),
      label: t('featured.project5.label'),
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      color: '#0A0E27',
      title: t('featured.project6.title'),
      description: t('featured.project6.desc'),
      label: t('featured.project6.label'),
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop'
    }
  ];

  const skills: Skill[] = [
    { name: t('featured.skill.ai'), level: 85, category: t('featured.category.ai'), icon: <Brain />, color: 'from-purple-400 to-pink-500', note: t('featured.skill.ai.note') },
    { name: t('featured.skill.react'), level: 95, category: t('featured.category.frontend'), icon: <Code />, color: 'from-cyan-400 to-blue-500' },
    { name: t('featured.skill.typescript'), level: 90, category: t('featured.category.frontend'), icon: <Code />, color: 'from-blue-400 to-purple-500' },
    { name: t('featured.skill.csharp'), level: 85, category: t('featured.category.backend'), icon: <Code />, color: 'from-purple-400 to-indigo-500' },
    { name: t('featured.skill.nodejs'), level: 85, category: t('featured.category.backend'), icon: <Terminal />, color: 'from-green-400 to-emerald-500' },
    { name: t('featured.skill.python'), level: 88, category: t('featured.category.backend'), icon: <Terminal />, color: 'from-yellow-400 to-orange-500' },
    { name: t('featured.skill.cybersecurity'), level: 35, category: t('featured.category.security'), icon: <Shield />, color: 'from-red-400 to-pink-500' },
    { name: t('featured.skill.databases'), level: 70, category: t('featured.category.database'), icon: <Database />, color: 'from-indigo-400 to-blue-500' },
    { name: t('featured.skill.docker'), level: 65, category: t('featured.category.devops'), icon: <Cloud />, color: 'from-purple-400 to-pink-500' },
    { name: t('featured.skill.ml'), level: 70, category: t('featured.category.ai'), icon: <Brain />, color: 'from-pink-400 to-rose-500' },
    { name: t('featured.skill.other'), level: 70, category: t('featured.category.tools'), icon: <Code />, color: 'from-teal-400 to-cyan-500' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section
      ref={ref}
      className={`featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden ${styles.sectionBackground}`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Cyber Grid Pattern */}
        <div className={`absolute inset-0 opacity-5 ${styles.cyberGrid}`} />

        {/* Left side subtle overlay for projects */}
        <div className={`absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block ${styles.leftOverlay}`} />

        {/* Right side subtle overlay for skills */}
        <div className={`absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block ${styles.rightOverlay}`} />

        {/* Center Divider Line - Enhanced */}
        <div className="absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block">
          {/* Main divider line - stronger */}
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

          {/* Secondary line for depth */}
          <div className="absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent" />

          {/* Glow effect - enhanced */}
          <div className="absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm" />

          {/* Extra glow - wider */}
          <div className="absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg" />

          {/* Animated pulse - stronger */}
          <div className={`absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent ${styles.pulseAnimation}`} />

          {/* Top decorative orb */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-cyan-500/60 rounded-full blur-sm" />
            <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping" />
          </div>

          {/* Bottom decorative orb */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-cyan-500/60 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Side - Featured Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Projects Header */}
            <div className="text-left">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${styles.projectsTitle}`}>
                {t('featured.projects.title')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('featured.projects.description')}
              </p>
            </div>

            {/* Magic Bento Grid */}
            <div className="w-full">
              <MagicBento
                cards={featuredProjects}
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                glowColor="0, 245, 255"
              />
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                type="button"
                onClick={() => navigate('/portfolio')}
                className={`group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold ${styles.viewAllButton}`}
              >
                {t('featured.viewAllProjects')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pl-12"
          >
            {/* Skills Header */}
            <div className="text-left">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${styles.skillsTitle}`}>
                {t('featured.skills.title')}
              </h2>
              <p className="text-lg text-gray-400">
                {t('featured.skills.description')}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category, index) => (
                  <motion.span
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className={`absolute h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      >
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 opacity-50 ${styles.skillIconShimmer} ${styles.shimmerAnimation}`} />
                      </motion.div>
                    </div>

                    {/* AI Note if exists */}
                    {skill.note && (
                      <p className="text-xs text-gray-400 italic mt-1 ml-6">
                        {skill.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Skills Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">8+</div>
                  <div className="text-xs text-gray-400">{t('featured.stats.technologies')}</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.7 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-gray-400">{t('featured.stats.experience')}</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.8 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">20+</div>
                  <div className="text-xs text-gray-400">{t('featured.stats.projects')}</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .featured-projects-skills-section {
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .featured-projects-skills-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjectsAndSkills;