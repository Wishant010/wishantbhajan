'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from '../../utils/routerCompat';
import { portfolioData } from '../../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../contexts/LanguageContext';
import { Screenshot } from '../../types/portfolio.types';

gsap.registerPlugin(ScrollTrigger);

// Laptop Slideshow Component
const LaptopSlideshow: React.FC<{ screenshots: Screenshot[] }> = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Screen Only */}
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative bg-slate-900 rounded-2xl overflow-hidden aspect-video border border-cyan-500/20 shadow-2xl shadow-cyan-500/10">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={screenshots[currentIndex].src}
              alt={screenshots[currentIndex].alt}
              className="w-full h-full object-cover object-[35%_top]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white transition-colors border border-cyan-500/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-800 rounded-full flex items-center justify-center text-white transition-colors border border-cyan-500/30"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-6 text-center">
        <p className="text-slate-300">{screenshots[currentIndex].caption}</p>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mt-4">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-cyan-400' : 'bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

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
      {/* Background Image from Project Thumbnail */}
      {project.thumbnail && (
        <div className="fixed inset-0 z-0">
          <img
            src={project.thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/70 to-slate-950" />
        </div>
      )}

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

      {/* Hero Section - Split Layout */}
      <div className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Website Screenshot */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-2xl blur-3xl" />
                <img
                  src="/projects/spirit/272a485a-f703-4df8-b5c5-c45340c0b3a6.png"
                  alt="Spirit Engineering Homepage"
                  className="relative w-full h-auto rounded-2xl border border-cyan-500/20 shadow-2xl shadow-cyan-500/10"
                />
              </div>
            </motion.div>

            {/* Right Side - Introduction */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Project Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">Case Study</span>
                {project.id === 'spirit-engineering' && (
                  <>
                    <span className="text-slate-500">|</span>
                    <a
                      href="https://www.spirit-engineering.nl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      spirit-engineering.nl
                    </a>
                  </>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {project.title}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-slate-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Tech Tags */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 tech-item"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="flex gap-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div>
                  <div className="text-2xl font-bold text-cyan-400">2024</div>
                  <div className="text-sm text-slate-400">Jaar</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">Website</div>
                  <div className="text-sm text-slate-400">Type</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">Klant</div>
                  <div className="text-sm text-slate-400">Project</div>
                </div>
              </motion.div>
            </motion.div>
          </div>


          {hasProjectData ? (
            <>
              {/* CLIENT INFO SECTION */}
              {project.projectData?.clientInfo && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">01</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">Het Begin</h2>
                  <p className="text-slate-400 mb-8">Wie is de klant en wat was de vraag?</p>
                  <motion.div
                    className="p-8 rounded-2xl bg-slate-900/50 border border-cyan-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
                        <svg className="w-7 h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">{project.projectData.clientInfo.name}</h3>
                        <p className="text-slate-400">{project.projectData.clientInfo.industry}</p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.projectData.clientInfo.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Behoeften:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.projectData.clientInfo.needs.map((need, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300">
                            <svg className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {need}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </section>
              )}

              {/* ASSIGNMENT SECTION */}
              {project.projectData?.assignment && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">02</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">De Uitdaging</h2>
                  <p className="text-slate-400 mb-8">Wat moest er gebeuren en waarom?</p>
                  <motion.div
                    className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {project.projectData.assignment.why}
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Wishes */}
                    <motion.div
                      className="p-8 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-500/20"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center border border-emerald-500/30">
                          <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-emerald-400">Wensen</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.projectData.assignment.wishes.map((wish, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300">
                            <span className="text-emerald-400 flex-shrink-0">•</span>
                            <span>{wish}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Problems */}
                    <motion.div
                      className="p-8 rounded-2xl bg-gradient-to-br from-red-950/30 to-red-900/10 border border-red-500/20"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30">
                          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-red-400">Problemen</h3>
                      </div>
                      <ul className="space-y-3">
                        {project.projectData.assignment.problems.map((problem, idx) => (
                          <li key={idx} className="flex gap-3 text-slate-300">
                            <span className="text-red-400 flex-shrink-0">•</span>
                            <span>{problem}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </section>
              )}

              {/* MY ROLE SECTION */}
              {project.projectData?.myRole && project.projectData.myRole.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">03</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">Mijn Rol</h2>
                  <p className="text-slate-400 mb-8">Wat heb ik gedaan om dit project te realiseren?</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {project.projectData.myRole.map((role, index) => (
                      <div
                        key={index}
                        className="feature-card group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:bg-cyan-500/20 transition-colors mb-4">
                          {getRoleIcon(role.icon)}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {role.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* DESIGN CHOICES SECTION */}
              {project.projectData?.designChoices && project.projectData.designChoices.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">04</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">De Visie</h2>
                  <p className="text-slate-400 mb-8">Welke ontwerpkeuzes hebben we gemaakt?</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.projectData.designChoices.map((choice, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <h3 className="text-lg font-bold text-purple-400 mb-3">{choice.title}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{choice.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* SCREENSHOTS GALLERY - LAPTOP MOCKUP */}
              {project.projectData?.screenshots && project.projectData.screenshots.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">04</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">Het Resultaat</h2>
                  <p className="text-slate-400 mb-8">Een kijkje in het eindproduct</p>

                  <LaptopSlideshow screenshots={project.projectData.screenshots} />
                </section>
              )}

              {/* PROCESS TIMELINE */}
              {project.projectData?.process && project.projectData.process.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">05</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">De Reis</h2>
                  <p className="text-slate-400 mb-8">Van idee tot eindproduct - stap voor stap</p>
                  <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 hidden md:block" />

                    <div className="space-y-8">
                      {project.projectData.process.map((step, index) => (
                        <div
                          key={index}
                          className="relative flex gap-6"
                        >
                          {/* Step number */}
                          <div className="relative z-10 w-12 h-12 bg-slate-900 border-2 border-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-cyan-400 font-bold">{step.step}</span>
                          </div>

                          {/* Content */}
                          <div className="flex-1 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-slate-400">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* TECHNICAL HIGHLIGHTS */}
              {project.projectData?.technicalHighlights && project.projectData.technicalHighlights.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">06</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">Onder de Motorkap</h2>
                  <p className="text-slate-400 mb-8">De technische details die het verschil maken</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.projectData.technicalHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="feature-card group p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-500/20 transition-colors mb-4">
                          {getTechnicalIcon(highlight.icon)}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {highlight.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* CLIENT RESULTS */}
              {project.projectData?.clientResults && project.projectData.clientResults.length > 0 && (
                <section className="mb-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-cyan-400 text-sm font-mono">07</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  </div>
                  <h2 className="section-title text-4xl font-bold text-white mb-2">De Impact</h2>
                  <p className="text-slate-400 mb-8">Wat heeft dit project opgeleverd?</p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.projectData.clientResults.map((result, index) => (
                      <div
                        key={index}
                        className="feature-card group p-6 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-emerald-900/10 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500/20 transition-colors mb-4">
                          {getResultIcon(result.icon)}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                          {result.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {result.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

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
                {['cybersecurity', 'bedrijven', 'persoonlijk']
                  .map(catId => {
                    const category = portfolioData.find(cat => cat.id === catId);
                    if (!category) return null;
                    const proj = category.projects.find(p => p.id !== project.id && !p.comingSoon);
                    return proj;
                  })
                  .filter((p): p is NonNullable<typeof p> => p != null)
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

function getRoleIcon(iconName: string) {
  const icons: Record<string, React.ReactElement> = {
    design: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    layout: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    palette: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    code: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    mobile: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    animation: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    brand: (
      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  };
  return icons[iconName] || icons.design;
}

function getTechnicalIcon(iconName: string) {
  const icons: Record<string, React.ReactElement> = {
    responsive: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    performance: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    seo: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    animation: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    structure: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  };
  return icons[iconName] || icons.responsive;
}

function getResultIcon(iconName: string) {
  const icons: Record<string, React.ReactElement> = {
    image: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    services: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    navigation: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    trust: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    online: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  };
  return icons[iconName] || icons.image;
}

export default ProjectDetailPage;
