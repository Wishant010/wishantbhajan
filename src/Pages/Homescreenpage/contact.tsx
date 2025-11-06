"use client"

import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../../contexts/LanguageContext"

interface ContactProps {
  isVisible?: boolean
}

const Contact: React.FC<ContactProps> = ({ isVisible = true }) => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden py-16 page-content">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950"></div>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/10 via-transparent to-indigo-950/10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Side - Small text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : -30
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {t('contact.connect')}
              </span>
            </h2>
            <p className="text-gray-400 text-base max-w-md">
              {t('contact.intro')}
            </p>
          </motion.div>

          {/* Right Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 30
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Contact items */}
            <div className="space-y-4">
              {/* Phone */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0, delay: 0 }}
              >
                <motion.div
                  className="text-emerald-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0, delay: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-gray-500 text-sm">{t('contact.phone')}</p>
                  <a href="tel:+31648447234" className="text-white font-medium group-hover:text-emerald-400 transition-none">
                    +31 648 447 234
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0, delay: 0 }}
              >
                <motion.div
                  className="text-emerald-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0, delay: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-gray-500 text-sm">{t('contact.email')}</p>
                  <a href="mailto:wishant@example.com" className="text-white font-medium group-hover:text-emerald-400 transition-none">
                    wishant@example.com
                  </a>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0, delay: 0 }}
              >
                <motion.div
                  className="text-emerald-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0, delay: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-gray-500 text-sm">{t('contact.linkedin')}</p>
                  <a href="https://linkedin.com/in/wishantbhajan" target="_blank" rel="noopener noreferrer" className="text-white font-medium group-hover:text-emerald-400 transition-none">
                    /in/wishantbhajan • 220+ connecties
                  </a>
                </div>
              </motion.div>

              {/* GitHub */}
              <motion.div
                className="flex items-center space-x-4 group cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ duration: 0, delay: 0 }}
              >
                <motion.div
                  className="text-emerald-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0, delay: 0 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>
                <div>
                  <p className="text-gray-500 text-sm">{t('contact.github')}</p>
                  <a href="https://github.com/Wishant010" target="_blank" rel="noopener noreferrer" className="text-white font-medium group-hover:text-emerald-400 transition-none">
                    /Wishant010
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Availability Status */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">{t('contact.availability.status')}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth gradient transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
    </div>
  )
}

export default Contact