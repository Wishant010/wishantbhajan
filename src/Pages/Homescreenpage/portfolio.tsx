"use client"

import type React from "react"
import { motion } from "framer-motion"

interface PortfolioProps {
  isVisible?: boolean
}

const Portfolio: React.FC<PortfolioProps> = ({ isVisible = true }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 py-20 page-content">
      <div className="max-w-7xl mx-auto px-6">
        {/* Portfolio Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 80
          }}
          transition={{ duration: 1, delay: isVisible ? 0.5 : 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-200 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-emerald-200/70 max-w-3xl mx-auto">
            Een selectie van mijn meest recente en innovatieve projecten die moderne technologieën 
            en creatieve oplossingen combineren.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 100
          }}
          transition={{ duration: 1, delay: isVisible ? 1.0 : 0 }}
        >
          {[
            {
              title: "E-commerce Platform",
              description: "Een volledig functionele webshop met React, Node.js en Stripe integratie. Bevat gebruikersbeheer, productcatalogus, winkelwagen en veilige betalingen.",
              tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
              features: ["Responsive Design", "Payment Integration", "User Authentication", "Admin Dashboard"],
              color: "from-emerald-500/20 to-teal-500/20",
              border: "border-emerald-500/30"
            },
            {
              title: "Portfolio Dashboard",
              description: "Interactive dashboard voor portfolio management met real-time data visualisatie, analytics en content management systeem.",
              tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Chart.js"],
              features: ["Real-time Analytics", "Content Management", "Data Visualization", "Multi-user Support"],
              color: "from-teal-500/20 to-cyan-500/20",
              border: "border-teal-500/30"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              className={`bg-gradient-to-br ${project.color} backdrop-blur-lg rounded-2xl p-8 border ${project.border} hover:border-emerald-400/50 transition-all duration-500 group`}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : (index === 0 ? -50 : 50),
                scale: isVisible ? 1 : 0.95
              }}
              transition={{ duration: 0.8, delay: isVisible ? 1.2 + index * 0.2 : 0 }}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-4 group-hover:text-emerald-100 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-emerald-200/70 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-emerald-300 font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-emerald-200/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-emerald-500/30 text-emerald-200 rounded-full text-sm font-medium hover:bg-emerald-500/40 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <motion.button
                className="mt-6 px-6 py-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 rounded-lg font-medium hover:bg-emerald-500/30 hover:border-emerald-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Grid */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 80
          }}
          transition={{ duration: 1, delay: isVisible ? 2.0 : 0 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 text-center mb-12">
            Andere Projecten
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Task Management App",
                description: "React-based productivity app met drag & drop functionaliteit.",
                tech: ["React", "Firebase", "Material-UI"]
              },
              {
                title: "Weather Dashboard",
                description: "Real-time weather data visualisatie met interactieve kaarten.",
                tech: ["Vue.js", "D3.js", "OpenWeather API"]
              },
              {
                title: "Chat Application",
                description: "Real-time messaging app met Socket.io en gebruikersbeheer.",
                tech: ["Socket.io", "Express", "Redis"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 group"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 50,
                  scale: isVisible ? 1 : 0.95
                }}
                transition={{ duration: 0.6, delay: isVisible ? 2.2 + index * 0.1 : 0 }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <h4 className="text-lg font-bold text-emerald-200 mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-emerald-200/70 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 60
          }}
          transition={{ duration: 1, delay: isVisible ? 2.8 : 0 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-6">
            Geïnteresseerd in samenwerking?
          </h3>
          <p className="text-emerald-200/70 mb-8 max-w-2xl mx-auto">
            Laten we samen iets geweldigs bouwen. Neem contact op voor meer informatie over mijn projecten.
          </p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Bekijk Alle Projecten
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
