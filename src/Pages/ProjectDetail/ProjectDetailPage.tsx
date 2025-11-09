import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';

const ProjectDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectId]);

  // Find the project
  const project = portfolioData
    .flatMap(cat => cat.projects)
    .find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Project niet gevonden</h1>
          <button
            onClick={() => navigate('/portfolio')}
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
          >
            Terug naar Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Background Video or Image */}
      {project.backgroundVideo ? (
        <div className="fixed inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={project.backgroundVideo} type="video/mp4" />
          </video>
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>
      ) : project.thumbnail && (
        <div className="fixed inset-0 z-0">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-slate-950/85" />
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
            onClick={() => {
              // Navigate to portfolio with the project's category stored in state
              navigate('/portfolio', { state: { selectedCategory: project.category } });
            }}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>

          <h1 className="text-xl font-bold text-white">{project.title}</h1>

          {/* Empty space for balance */}
          <div className="w-32"></div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Project Header */}
            <div className="mb-12">
              <motion.h1
                className="text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                className="text-xl text-slate-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.description}
              </motion.p>

              {/* Category Badge */}
              <motion.div
                className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {getCategoryLabel(project.category)}
                {project.tier && ` • Tier ${project.tier}`}
              </motion.div>
            </div>

            {/* Project Image */}
            {project.thumbnail && (
              <motion.div
                className="mb-12 rounded-2xl overflow-hidden border border-slate-800"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
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

            {/* Technologies Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-800/50 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30 hover:bg-slate-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* Project Overview Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Projectoverzicht</h2>
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.details || project.description}
                </p>
              </div>
            </motion.section>

            {/* Problem & Solution Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Probleem & Oplossing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-950/20 rounded-xl p-8 border border-red-900/30">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Het Probleem</h3>
                  <p className="text-slate-300 leading-relaxed">
                    [Beschrijf hier het probleem dat dit project oplost. Wat was de uitdaging? Welke pain points waren er?]
                  </p>
                </div>
                <div className="bg-emerald-950/20 rounded-xl p-8 border border-emerald-900/30">
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">De Oplossing</h3>
                  <p className="text-slate-300 leading-relaxed">
                    [Beschrijf hier hoe dit project het probleem oplost. Wat maakt jouw aanpak uniek?]
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Key Features Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Belangrijkste Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">Feature {i}</h3>
                        <p className="text-slate-400">
                          [Beschrijf hier een belangrijke feature van het project]
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Technical Implementation Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Technische Implementatie</h2>
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Architectuur</h3>
                    <p className="text-slate-300 leading-relaxed">
                      [Beschrijf hier de technische architectuur. Welke design patterns heb je gebruikt? Hoe is de applicatie gestructureerd?]
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400 mb-3">Belangrijkste Componenten</h3>
                    <ul className="space-y-2">
                      <li className="text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>[Component/Module 1 - Beschrijving]</span>
                      </li>
                      <li className="text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>[Component/Module 2 - Beschrijving]</span>
                      </li>
                      <li className="text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>[Component/Module 3 - Beschrijving]</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Challenges & Learnings Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Uitdagingen & Leerpunten</h2>
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-amber-400 mb-3">Uitdagingen</h3>
                    <p className="text-slate-300 leading-relaxed">
                      [Beschrijf hier de grootste uitdagingen die je tegenkwam tijdens de ontwikkeling. Hoe heb je deze opgelost?]
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-3">Wat ik heb geleerd</h3>
                    <p className="text-slate-300 leading-relaxed">
                      [Beschrijf hier wat je hebt geleerd tijdens dit project. Welke nieuwe skills of kennis heb je opgedaan?]
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Future Improvements Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Toekomstige Verbeteringen</h2>
              <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-800">
                <ul className="space-y-3">
                  <li className="text-slate-300 flex items-start gap-3">
                    <span className="text-cyan-400 text-xl mt-0.5">→</span>
                    <span>[Verbeterpunt 1]</span>
                  </li>
                  <li className="text-slate-300 flex items-start gap-3">
                    <span className="text-cyan-400 text-xl mt-0.5">→</span>
                    <span>[Verbeterpunt 2]</span>
                  </li>
                  <li className="text-slate-300 flex items-start gap-3">
                    <span className="text-cyan-400 text-xl mt-0.5">→</span>
                    <span>[Verbeterpunt 3]</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Links Section */}
            {(project.links.github || project.links.demo) && (
              <motion.section
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">Links</h2>
                <div className="flex flex-wrap gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-800 text-cyan-400 rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 border border-cyan-500/30 hover:border-cyan-500/50 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View on GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-all duration-200 flex items-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.section>
            )}

            {/* Other Projects Section */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <div className="border-t border-slate-800 pt-12">
                <h2 className="text-3xl font-bold text-white mb-6">Andere Projecten</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {portfolioData
                    .flatMap(cat => cat.projects)
                    .filter(p => p.id !== project.id)
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

                {/* View All Projects Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="px-8 py-3 bg-slate-800 text-cyan-400 rounded-lg font-medium hover:bg-slate-700 transition-all duration-200 border border-cyan-500/30 hover:border-cyan-500/50 inline-flex items-center gap-2"
                  >
                    Bekijk Andere Projecten
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
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

function getCategoryLabel(category: string): string {
  const labels: Record<string, string> = {
    cybersecurity: 'Cybersecurity',
    bedrijven: 'Bedrijven',
    persoonlijk: 'Persoonlijk'
  };
  return labels[category] || category;
}

export default ProjectDetailPage;
