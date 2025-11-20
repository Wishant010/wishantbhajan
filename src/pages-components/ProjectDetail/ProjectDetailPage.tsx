'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from '../../utils/routerCompat';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetailPage: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId as string;
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // GSAP Scroll Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate feature cards on scroll
      gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 0,
          y: 50,
          duration: 0.6,
          delay: index * 0.1,
        });
      });

      // Animate tech stack items
      gsap.utils.toArray<HTMLElement>('.tech-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          delay: index * 0.05,
        });
      });

      // Animate section titles
      gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: -30,
          duration: 0.6,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [projectId]);

  // Find the project
  const project = portfolioData
    .flatMap(cat => cat.projects)
    .find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">{t('projectdetail.notfound')}</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            {t('projectdetail.backto')}
          </button>
        </div>
      </div>
    );
  }

  const hasProjectData = project.projectData;

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 relative">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/portfolio', { state: { selectedCategory: project.category } })}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('projectdetail.backto')}
          </button>

          <h1 className="text-xl font-bold text-white">{project.title}</h1>

          <div className="w-32"></div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <div className="pt-24 pb-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors tech-item"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Project Image */}
          {project.thumbnail && (
            <motion.div
              className="mb-20 rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>
          )}

          {hasProjectData ? (
            <>
              {/* Problem & Solution Section */}
              {(project.projectData?.problem || project.projectData?.solution) && (
                <section className="mb-20">
                  <h2 className="section-title text-4xl font-bold text-white mb-12">{t('projectdetail.challenge.title')}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.projectData.problem && (
                      <motion.div
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-500/20"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-500/30">
                            <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-red-400">{t('projectdetail.problem')}</h3>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          {project.projectData.problem}
                        </p>
                      </motion.div>
                    )}

                    {project.projectData.solution && (
                      <motion.div
                        className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-500/20"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-emerald-400">{t('projectdetail.solution')}</h3>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed">
                          {project.projectData.solution}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </section>
              )}

              {/* Features Section */}
              {project.projectData?.features && project.projectData.features.length > 0 && (
                <section className="mb-20">
                  <h2 className="section-title text-4xl font-bold text-white mb-12">{t('projectdetail.features')}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.projectData.features.map((feature, index) => (
                      <div
                        key={index}
                        className="feature-card group relative p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors">
                            {getFeatureIcon(feature.icon)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Tech Stack Section */}
              {project.projectData?.techStack && (
                <section className="mb-20">
                  <h2 className="section-title text-4xl font-bold text-white mb-12">{t('projectdetail.techstack')}</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {project.projectData.techStack.frontend && (
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-500/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center border border-blue-500/30">
                            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-blue-400">{t('projectdetail.frontend')}</h3>
                        </div>
                        <div className="space-y-2">
                          {project.projectData.techStack.frontend.map((tech, idx) => (
                            <div key={idx} className="tech-item flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.projectData.techStack.backend && (
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center border border-purple-500/30">
                            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-purple-400">{t('projectdetail.backend')}</h3>
                        </div>
                        <div className="space-y-2">
                          {project.projectData.techStack.backend.map((tech, idx) => (
                            <div key={idx} className="tech-item flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.projectData.techStack.architecture && (
                      <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 to-amber-900/10 border border-amber-500/20">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-amber-400">{t('projectdetail.architecture.title')}</h3>
                        </div>
                        <div className="space-y-2">
                          {project.projectData.techStack.architecture.map((tech, idx) => (
                            <div key={idx} className="tech-item flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* Architecture Section */}
              {project.projectData?.architecture && (
                <section className="mb-20">
                  <h2 className="section-title text-4xl font-bold text-white mb-12">{t('projectdetail.architecture.section')}</h2>
                  <motion.div
                    className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {project.projectData.architecture}
                    </p>
                  </motion.div>
                </section>
              )}

              {/* Challenges & Learnings */}
              {(project.projectData?.challenges || project.projectData?.learnings) && (
                <section className="mb-20">
                  <h2 className="section-title text-4xl font-bold text-white mb-12">{t('projectdetail.challenges.title')}</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {project.projectData.challenges && project.projectData.challenges.length > 0 && (
                      <motion.div
                        className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
                            <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-amber-400">{t('projectdetail.challenges')}</h3>
                        </div>
                        <ul className="space-y-3">
                          {project.projectData.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-amber-400 mt-1">•</span>
                              <span>{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {project.projectData.learnings && project.projectData.learnings.length > 0 && (
                      <motion.div
                        className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-emerald-400">{t('projectdetail.learnings')}</h3>
                        </div>
                        <ul className="space-y-3">
                          {project.projectData.learnings.map((learning, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <span className="text-emerald-400 mt-1">•</span>
                              <span>{learning}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </section>
              )}
            </>
          ) : (
            /* Fallback for projects without detailed data */
            <section className="mb-20">
              <div className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.details || project.description}
                </p>
              </div>
            </section>
          )}

          {/* Links Section */}
          {(project.links.github || project.links.demo) && (
            <motion.section
              className="mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-4 justify-center">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-slate-800 text-cyan-400 rounded-xl font-medium hover:bg-slate-700 transition-all duration-200 border border-cyan-500/30 hover:border-cyan-500/50 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {t('projectdetail.github')}
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 transition-all duration-200 flex items-center gap-3"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {t('projectdetail.demo')}
                  </a>
                )}
              </div>
            </motion.section>
          )}

          {/* Other Projects Section */}
          <motion.section
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="border-t border-slate-800 pt-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('projectdetail.more')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {portfolioData
                  .flatMap(cat => cat.projects)
                  .filter(p => p.id !== project.id && !p.comingSoon)
                  .slice(0, 3)
                  .map((otherProject) => (
                    <motion.div
                      key={otherProject.id}
                      className="group cursor-pointer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => navigate(`/project/${otherProject.id}`)}
                    >
                      <div className="relative h-48 rounded-xl overflow-hidden border border-slate-800 group-hover:border-cyan-500/50 transition-colors mb-4">
                        {otherProject.thumbnail ? (
                          <>
                            <img
                              src={otherProject.thumbnail}
                              alt={otherProject.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                          </>
                        ) : (
                          <div className="w-full h-full bg-slate-800/50 flex items-center justify-center">
                            <span className="text-5xl">{getCategoryIcon(otherProject.category)}</span>
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            {otherProject.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm line-clamp-2 group-hover:text-slate-300 transition-colors">
                        {otherProject.description}
                      </p>
                    </motion.div>
                  ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => navigate('/portfolio')}
                  className="px-8 py-3 bg-slate-800 text-cyan-400 rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 border border-cyan-500/30 hover:border-cyan-500/50 inline-flex items-center gap-2"
                >
                  {t('projectdetail.viewall')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

function getFeatureIcon(iconName: string) {
  const icons: Record<string, React.ReactElement> = {
    calendar: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    event: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    room: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    dashboard: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    security: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    responsive: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[iconName] || icons.calendar;
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    cybersecurity: '🔒',
    bedrijven: '💼',
    persoonlijk: '🎨'
  };
  return icons[category] || '📁';
}

export default ProjectDetailPage;
