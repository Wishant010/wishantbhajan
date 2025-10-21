"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"

interface AboutMeProps {
  isVisible?: boolean
}

const AboutMe: React.FC<AboutMeProps> = ({ isVisible = true }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden py-20 scroll-snap-section">
      {/* Seamless background connecting from hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900"></div>

      {/* Subtle top blend for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-slate-900 via-slate-900/98 to-transparent pointer-events-none z-10"></div>

      {/* Subtle colored overlay for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/15 via-transparent to-teal-950/15"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-20">
        {/* About Me Header */}
        <motion.div
          className="text-center mb-8"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">{t('about.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
            Hoi! Ik ben Wishant, een gepassioneerde full-stack developer die moderne, innovatieve webapplicaties bouwt.
            Met expertise in React, TypeScript en Node.js breng ik ideeën tot leven.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-8">
            Van concept tot deployment - ik ontwikkel complete oplossingen met oog voor design,
            performance en gebruikerservaring.
          </p>
        </motion.div>

        {/* Quick Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ y: 60, opacity: 0 }}
          animate={{
            y: isVisible ? 0 : 60,
            opacity: isVisible ? 1 : 0
          }}
          transition={{ duration: 0.8, delay: isVisible ? 1.0 : 0 }}
        >
          {[
            {
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              title: "Frontend",
              text: "React, TypeScript, Next.js"
            },
            {
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>,
              title: "Backend",
              text: "Node.js, Express, PostgreSQL"
            },
            {
              icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
              title: "UI/UX Design",
              text: "Figma, Tailwind, Responsive Design"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-slate-800/70 backdrop-blur-sm border border-emerald-500/30 rounded-xl p-6 text-center hover:border-emerald-400/50 transition-all duration-300 shadow-xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 40,
                scale: isVisible ? 1 : 0.95
              }}
              transition={{ duration: 0.6, delay: isVisible ? 1.2 + index * 0.15 : 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <div className="text-emerald-400 mb-3 inline-block">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40
          }}
          transition={{ duration: 0.8, delay: isVisible ? 1.8 : 0 }}
        >
          <motion.a
            href="/about"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Lees meer over mij</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Smooth gradient transition to skills section - seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>
    </div>
  )
}

export default AboutMe
