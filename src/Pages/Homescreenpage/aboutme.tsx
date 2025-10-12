"use client"

import type React from "react"
import { motion } from "framer-motion"

interface AboutMeProps {
  isVisible?: boolean
}

const AboutMe: React.FC<AboutMeProps> = ({ isVisible = true }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-800 via-emerald-900 to-slate-900 py-20 page-content">
      <div className="max-w-7xl mx-auto px-6">
        {/* About Me Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 80, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 80,
            opacity: isVisible ? 1 : 0
          }}
          transition={{
            delay: isVisible ? 0.5 : 0,
            duration: 1.0,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-200 mb-4">
            Over Mij
          </h2>
          <p className="text-lg text-emerald-200/70 max-w-3xl mx-auto">
            Met een passie voor technologie en innovatie, ontwikkel ik moderne webapplicaties 
            die gebruikerservaring en functionaliteit perfect combineren.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-16"
          initial={{ y: 120, opacity: 0, scale: 0.9 }}
          animate={{
            y: isVisible ? 0 : 120,
            opacity: isVisible ? 1 : 0,
            scale: isVisible ? 1 : 0.9
          }}
          transition={{
            delay: isVisible ? 1.0 : 0,
            duration: 1.2,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {[
            { 
              title: 'Frontend Development', 
              desc: 'React, TypeScript, Next.js, Tailwind CSS',
              icon: '💻'
            },
            { 
              title: 'Backend Development', 
              desc: 'Node.js, Python, Databases, API Design',
              icon: '⚡'
            },
            { 
              title: 'UI/UX Design', 
              desc: 'Figma, Prototyping, User Research, Design Systems',
              icon: '🎨'
            }
          ].map((skill, index) => (
            <motion.div
              key={skill.title}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-500"
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              animate={{
                y: isVisible ? 0 : 80,
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.9
              }}
              transition={{
                delay: isVisible ? 1.4 + index * 0.2 : 0,
                duration: 1.0,
                ease: [0.23, 1, 0.32, 1]
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                backgroundColor: 'rgba(255,255,255,0.15)',
                transition: {
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1]
                }
              }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-emerald-300 mb-3">{skill.title}</h3>
              <p className="text-emerald-100/70 leading-relaxed">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience & Info Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16"
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 100
          }}
          transition={{ duration: 1, delay: isVisible ? 2.0 : 0 }}
        >
          {[
            {
              title: "Projects",
              description: "Ontdek mijn innovatieve projecten van e-commerce platforms tot portfolio dashboards.",
              icon: "🚀"
            },
            {
              title: "Experience", 
              description: "Jaren ervaring in het bouwen van schaalbare webapplicaties met moderne technologieën.",
              icon: "💼"
            },
            {
              title: "Passion",
              description: "Gedreven door perfectie en altijd op zoek naar nieuwe uitdagingen in de digitale wereld.",
              icon: "❤️"
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-black/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-500/60 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 50,
                scale: isVisible ? 1 : 0.95
              }}
              transition={{ duration: 0.8, delay: isVisible ? 2.2 + index * 0.2 : 0 }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <h3 className="text-2xl font-bold text-emerald-200 mb-4">{section.title}</h3>
              <p className="text-emerald-200/70 leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Technologies */}
        <motion.div
          className="py-16"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 80
          }}
          transition={{ duration: 1, delay: isVisible ? 2.8 : 0 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 text-center mb-8">
            Technologieën & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Tailwind CSS',
              'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'Figma', 'AWS'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full font-medium hover:bg-emerald-500/30 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  scale: isVisible ? 1 : 0.8
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: isVisible ? 3.0 + index * 0.1 : 0 
                }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
