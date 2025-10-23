import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

interface SkillsSectionProps {
  isVisible?: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ isVisible = true }) => {
  const { t } = useLanguage();
  const skillCategories = [
    {
      titleKey: 'skills.category.frontend',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', level: 90, color: 'from-blue-500 to-blue-700' },
        { name: 'Next.js', level: 85, color: 'from-gray-400 to-gray-600' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
      ]
    },
    {
      titleKey: 'skills.category.backend',
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-400 to-green-600' },
        { name: 'Python', level: 80, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Express.js', level: 85, color: 'from-gray-500 to-gray-700' },
        { name: 'PostgreSQL', level: 75, color: 'from-blue-600 to-blue-800' },
        { name: 'MongoDB', level: 70, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      titleKey: 'skills.category.tools',
      skills: [
        { name: 'Git', level: 90, color: 'from-red-400 to-red-600' },
        { name: 'Docker', level: 75, color: 'from-blue-400 to-blue-600' },
        { name: 'AWS', level: 70, color: 'from-orange-400 to-orange-600' },
        { name: 'Figma', level: 80, color: 'from-purple-400 to-purple-600' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-700' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.5
      }
    })
  };

  return (
    <section className="min-h-screen py-20 relative overflow-hidden scroll-snap-section">
      {/* Seamless background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900"></div>

      {/* Subtle top blend for seamless transition */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-slate-900 via-slate-900/98 to-transparent pointer-events-none z-10"></div>

      {/* Subtle colored overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/12 via-transparent to-teal-950/12"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              {t('skills.title')}
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.titleKey}
              variants={itemVariants}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {t(category.titleKey)}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        variants={skillVariants}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        custom={skill.level}
                      />
                      {/* Removed animate-pulse for cleaner look */}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/70 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/30 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('skills.learning.title')}
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {t('skills.learning.desc')}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Smooth gradient transition to portfolio section - seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-[500px] pointer-events-none z-30">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
      </div>
    </section>
  );
};

export default SkillsSection;