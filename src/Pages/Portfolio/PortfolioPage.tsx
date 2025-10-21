import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";
import ParticleField from "../Homescreenpage/ParticleField";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string | React.ReactNode;
  github?: string;
  live?: string;
  features: string[];
  status: "completed" | "in-progress" | "planned";
}

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["all", "web", "mobile", "security", "ai/ml"];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce platform met real-time inventory en AI-powered recommendations",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      github: "https://github.com",
      live: "https://example.com",
      features: ["Real-time inventory", "AI recommendations", "Payment integration", "Admin dashboard"],
      status: "completed",
    },
    {
      id: 2,
      title: "Security Audit Tool",
      category: "security",
      description: "Automated security vulnerability scanner voor web applicaties",
      tech: ["Python", "FastAPI", "React", "MongoDB", "Docker"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      github: "https://github.com",
      features: ["Vulnerability scanning", "Automated reporting", "CI/CD integration", "Real-time monitoring"],
      status: "completed",
    },
    {
      id: 3,
      title: "AI Content Generator",
      category: "ai/ml",
      description: "Machine learning powered content generation platform",
      tech: ["Python", "TensorFlow", "React", "AWS", "PostgreSQL"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      github: "https://github.com",
      live: "https://example.com",
      features: ["Text generation", "Image creation", "SEO optimization", "Multi-language support"],
      status: "in-progress",
    },
    {
      id: 4,
      title: "Portfolio Dashboard",
      category: "web",
      description: "Interactive portfolio management dashboard met analytics",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      github: "https://github.com",
      live: "https://example.com",
      features: ["Real-time analytics", "Data visualization", "Responsive design", "Dark mode"],
      status: "completed",
    },
    {
      id: 5,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application met biometric authentication",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
      features: ["Biometric auth", "Transaction history", "Bill payments", "Budget tracking"],
      status: "in-progress",
    },
    {
      id: 6,
      title: "Network Monitor",
      category: "security",
      description: "Real-time network traffic monitoring en anomaly detection",
      tech: ["Python", "Elasticsearch", "Kibana", "React", "WebSockets"],
      image: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
      github: "https://github.com",
      features: ["Traffic analysis", "Anomaly detection", "Alert system", "Historical data"],
      status: "planned",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "in-progress":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "planned":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <GlobalNavbar />
      <ParticleField isActive={true} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-900 to-emerald-950/20" />

          {/* Animated Hexagon Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2310b981' stroke-width='0.5'%3E%3Cpath d='M30 0L52 15L52 45L30 60L8 45L8 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-emerald-200/80 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Een selectie van mijn meest innovatieve projecten op het gebied van web development,
            cybersecurity en AI/ML oplossingen.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 shadow-lg shadow-emerald-400/25"
                    : "bg-slate-800/50 text-emerald-200 hover:bg-slate-700/50 border border-emerald-500/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div
                    className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-emerald-500/20 p-6 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Project Icon */}
                    <div className="flex justify-center text-emerald-400 mb-4">{project.image}</div>

                    {/* Project Info */}
                    <h3 className="text-xl font-bold text-emerald-300 mb-2">{project.title}</h3>
                    <p className="text-emerald-200/70 mb-4 line-clamp-2">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 text-emerald-400/60 text-xs">
                          +{project.tech.length - 3} meer
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {project.github && (
                        <button className="text-emerald-400 hover:text-emerald-300 transition-colors">
                          GitHub
                        </button>
                      )}
                      {project.live && (
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          Live Demo
                        </button>
                      )}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/0 via-cyan-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-emerald-500/30 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-emerald-400 hover:text-emerald-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Project Details */}
              <div className="flex justify-center text-emerald-400 mb-6">{selectedProject.image}</div>
              <h2 className="text-3xl font-bold text-emerald-300 mb-4">{selectedProject.title}</h2>

              <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium border mb-4 ${getStatusColor(selectedProject.status)}`}>
                {selectedProject.status}
              </div>

              <p className="text-emerald-200/80 mb-6">{selectedProject.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-emerald-200/70">
                      <span className="text-emerald-400">▸</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-slate-700 text-emerald-300 rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-400/25 transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-cyan-950/50 to-emerald-950/50 backdrop-blur-lg rounded-2xl p-12 border border-emerald-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-6">
              Geïnteresseerd in samenwerking?
            </h2>
            <p className="text-xl text-emerald-200/80">
              Laten we samen jouw volgende project tot leven brengen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <ContactBar />
      <Footer />
    </div>
  );
};

export default PortfolioPage;