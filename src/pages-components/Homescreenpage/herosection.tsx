"use client"

import React from "react"
import { motion } from "framer-motion"
import '../../components/animations.css'
import { useLanguage } from "../../contexts/LanguageContext"
import ScrambledText from "../../components/ScrambledText"
import BlurText from "../../components/BlurText"
import LinkedInTooltip from "../../components/LinkedInTooltip"
import GitHubTooltip from "../../components/GitHubTooltip"
import Cubes from "../../components/Cubes"

interface HeroSectionProps {
  isVisible?: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ isVisible = true }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen relative overflow-hidden page-content scroll-snap-section">
      {/* Main Gradient Background - beautiful deep blue/purple theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-purple-950/60"></div>

      {/* Multiple Animated Gradient Orbs for smooth transitions */}
      <motion.div
        className="orb orb-emerald absolute top-1/4 -left-20 w-96 h-96"
        animate={isVisible ? {
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="orb orb-teal absolute top-1/2 right-1/4 w-[500px] h-[500px]"
        animate={isVisible ? {
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        } : {}}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="orb orb-purple absolute bottom-1/4 -right-20 w-96 h-96"
        animate={isVisible ? {
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.1, 1.3, 1.1],
        } : {}}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="orb orb-cyan absolute bottom-1/3 left-1/3 w-[400px] h-[400px]"
        animate={isVisible ? {
          x: [0, 60, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        } : {}}
        transition={{
          duration: 22,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Hero Section - Split Layout */}
      <div className="relative min-h-screen flex items-center z-30">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content - Enlarged */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : -50
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Main Heading */}
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    y: isVisible ? 0 : 20
                  }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <ScrambledText
                    radius={150}
                    duration={1.5}
                    speed={0.6}
                    scrambleChars="!@#$%^&*()_+-={}[]|:;<>?,./~"
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight whitespace-nowrap"
                    style={{ margin: 0, maxWidth: '100%' }}
                  >
                    {t('hero.welcome')}
                  </ScrambledText>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight whitespace-nowrap"
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    filter: isVisible ? 'blur(0px)' : 'blur(10px)',
                    y: isVisible ? 0 : 20
                  }}
                  transition={{ delay: 0.8, duration: 1.0, ease: [0.23, 1, 0.32, 1] }}
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                    {t('hero.portfolio')}
                  </span>
                </motion.h1>
              </div>

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
                  {
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                    text: t('hero.role1'),
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                    text: t('hero.role2'),
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                    text: t('hero.role3'),
                    color: "from-emerald-500 to-teal-500"
                  }
                ].map((role, index) => (
                  <motion.div
                    key={role.text}
                    className={`px-5 py-3 rounded-xl bg-gradient-to-r ${role.color} bg-opacity-10 backdrop-blur-sm border border-white/10 flex items-center gap-3`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      scale: isVisible ? 1 : 0.8
                    }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
                  >
                    <span className="text-white">{role.icon}</span>
                    <span className="text-white text-base font-semibold">{role.text}</span>
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
                <BlurText
                  text={`${t('hero.description1')} ${t('hero.description1.highlight')}. ${t('hero.description2')} ${t('hero.description2.highlight')}.`}
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-slate-300 text-lg md:text-xl leading-relaxed"
                  stepDuration={0.35}
                />
                <BlurText
                  text={t('hero.description3')}
                  delay={70}
                  animateBy="words"
                  direction="top"
                  className="text-slate-400 text-base md:text-lg"
                  stepDuration={0.35}
                />
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="flex flex-wrap items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20
                }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                {/* Social Links */}
                <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-slate-800/90 backdrop-blur-md border border-emerald-500/50 shadow-xl">
                  <span className="text-white text-base font-bold">{t('hero.follow')}</span>
                  <div className="h-6 w-px bg-emerald-500/50"></div>
                  <div className="flex gap-4 items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.8
                      }}
                      transition={{ delay: 1.5, duration: 0.4 }}
                    >
                      <LinkedInTooltip />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.8
                      }}
                      transition={{ delay: 1.6, duration: 0.4 }}
                    >
                      <GitHubTooltip />
                    </motion.div>
                    {/* Divider */}
                    <div className="h-6 w-px bg-emerald-500/50"></div>
                    {/* CV Download Button */}
                    <motion.a
                      href="/Wishant%20Bhajan.pdf"
                      download="Wishant_Bhajan_CV.pdf"
                      className="inline-flex items-center justify-center w-[45px] h-[45px] rounded-md bg-slate-800/80 border border-white/30 text-emerald-500 font-bold text-sm cursor-pointer hover:border-emerald-500/50 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:bg-emerald-500/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isVisible ? 1 : 0,
                        scale: isVisible ? 1 : 0.8
                      }}
                      transition={{ delay: 1.7, duration: 0.4 }}
                      whileTap={{ scale: 0.95 }}
                      title="Download CV"
                    >
                      <span>CV</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Side - 3D Cubes Grid - VEEL GROTER */}
            <motion.div
              className="relative lg:flex items-center justify-center hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                x: isVisible ? 0 : 50
              }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="cube-animation">
                <Cubes
                  gridSize={16}
                  cubeSize={40}
                  maxAngle={45}
                  radius={6}
                  duration={{ enter: 0.3, leave: 0.6 }}
                  cellGap={6}
                  borderStyle="1px solid rgba(100, 116, 139, 0.3)"
                  faceColor="rgba(30, 41, 59, 0.6)"
                  shadow={false}
                  autoAnimate={true}
                  rippleOnClick={true}
                  rippleColor="rgba(71, 85, 105, 0.5)"
                  rippleSpeed={2.5}
                visibleCells={[
                  // === LETTER W ===
                  // Linker verticale lijn - NIEUW (8 blokjes totaal)
                  { row: 1, col: 4 }, { row: 2, col: 4 }, { row: 3, col: 4 },
                  { row: 4, col: 4 }, { row: 5, col: 4 }, { row: 6, col: 4 },
                  { row: 7, col: 4 }, { row: 8, col: 4 },

                  // Eerste V (naar beneden) - alleen onderste blokje blijft
                  { row: 9, col: 5 },

                  // Terug omhoog (middelste piek)
                  { row: 8, col: 6 }, { row: 7, col: 7 },

                  // Tweede V (naar beneden)
                  { row: 8, col: 8 }, { row: 9, col: 9 },

                  // Rechter verticale lijn
                  { row: 8, col: 10 }, { row: 7, col: 10 }, { row: 6, col: 10 },
                  { row: 5, col: 10 }, { row: 4, col: 10 }, { row: 3, col: 10 },
                  { row: 2, col: 10 }, { row: 1, col: 10 },

                  // === LETTER B === (Compleet met alle blokjes)
                  // Verticale ruggengraat
                  { row: 1, col: 13 }, { row: 2, col: 13 }, { row: 3, col: 13 },
                  { row: 4, col: 13 }, { row: 5, col: 13 }, { row: 6, col: 13 },
                  { row: 7, col: 13 }, { row: 8, col: 13 }, { row: 9, col: 13 },

                  // Bovenste buik (COMPLEET)
                  { row: 1, col: 14 }, { row: 1, col: 15 },  // bovenlijn
                  { row: 2, col: 15 },                        // rechts
                  { row: 3, col: 15 },                        // rechts
                  { row: 4, col: 14 }, { row: 4, col: 15 },  // midden (terug)
                  { row: 5, col: 14 },                        // tussenblok

                  // Onderste buik (COMPLEET)
                  { row: 6, col: 14 }, { row: 6, col: 15 },  // midden lijn
                  { row: 7, col: 15 },                        // rechts
                  { row: 8, col: 15 },                        // rechts
                  { row: 9, col: 14 }, { row: 9, col: 15 }   // onderlijn
                ]}
              />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Smooth gradient transition to next section - seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] pointer-events-none z-20">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
      </div>

      {/* Cube color animation */}
      <style>{`
        @keyframes cubeColorPulse {
          0%, 100% {
            filter: hue-rotate(0deg) brightness(1);
          }
          50% {
            filter: hue-rotate(60deg) brightness(1.3);
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSection
