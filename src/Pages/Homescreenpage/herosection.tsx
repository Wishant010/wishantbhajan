"use client"

import type React from "react"
import { motion } from "framer-motion"

interface HeroSectionProps {
  isVisible?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible = true }) => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 page-content">
      {/* Subtle Background Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={isVisible ? {
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        animate={isVisible ? {
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Hero Section - Split Layout */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content - New Variant */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -50
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20
                }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Welkom in mijn
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    digitale portfolio
                  </span>
                </h1>
              </motion.div>

              {/* Role Cards */}
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20
                }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {[
                  { emoji: "💻", text: "Full Stack Developer", color: "from-blue-500 to-cyan-500" },
                  { emoji: "🎨", text: "UI/UX Enthusiast", color: "from-purple-500 to-pink-500" },
                  { emoji: "🔐", text: "Cybersecurity Enthusiast", color: "from-emerald-500 to-teal-500" }
                ].map((role, index) => (
                  <motion.div
                    key={role.text}
                    className={`px-4 py-2.5 rounded-xl bg-gradient-to-r ${role.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-2`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8
                    }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
                  >
                    <span className="text-xl">{role.emoji}</span>
                    <span className="text-white text-sm font-semibold">{role.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20
                }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  Ik transformeer ideeën naar <span className="text-emerald-400 font-semibold">digitale realiteit</span>.
                  Als IT-student en passionate developer bouw ik moderne webapplicaties die niet alleen mooi zijn,
                  maar ook <span className="text-cyan-400 font-semibold">innovatief en gebruiksvriendelijk</span>.
                </p>
                <p className="text-slate-400 text-sm md:text-base">
                  Gespecialiseerd in React, TypeScript, Node.js en moderne web technologieën.
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20
                }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                {/* Primary Actions */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="#portfolio"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 overflow-hidden hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Bekijk Projecten
                    </span>
                  </motion.a>

                  <motion.a
                    href="#contact"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3.5 rounded-xl border-2 border-slate-700 text-slate-300 font-semibold backdrop-blur-sm hover:bg-white/5 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Contact
                  </motion.a>

                  <motion.a
                    href="/cv.pdf"
                    className="px-6 py-3.5 rounded-xl border-2 border-slate-700 text-slate-300 font-semibold backdrop-blur-sm hover:bg-white/5 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-slate-500 text-sm font-medium">Volg mij:</span>
                  <div className="flex gap-2">
                    {[
                      { icon: "linkedin", href: "https://linkedin.com/in/wishant-bhajan", label: "LinkedIn" },
                      { icon: "github", href: "https://github.com/wishantbhajan", label: "GitHub" }
                    ].map((social, index) => (
                      <motion.a
                        key={social.icon}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-700/70 transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isVisible ? 1 : 0,
                          scale: isVisible ? 1 : 0.8
                        }}
                        transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
                        aria-label={social.label}
                      >
                        {social.icon === "linkedin" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        )}
                        {social.icon === "github" && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Image Placeholder */}
            <motion.div
              className="relative lg:flex items-center justify-center hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : 50
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="relative w-full max-w-lg aspect-square">
                {/* Animated Background Circles */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Image Container */}
                <div className="relative z-10 w-full h-full rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for your image */}
                  <div className="text-center space-y-4 p-8">
                    <svg className="w-24 h-24 mx-auto text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <p className="text-slate-500 text-sm">Plaats hier je foto</p>
                  </div>

                  {/* You can replace the above placeholder with:
                  <img
                    src="/path-to-your-photo.jpg"
                    alt="Wishant Bhajan"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 blur-xl"
                  animate={{
                    y: [0, 20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 blur-xl"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
