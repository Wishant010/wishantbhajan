import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Code, Shield, Database, Cloud, Brain, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import MagicBento from '../../components/MagicBento';

// Skill type definition
interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
  color: string;
  note?: string;
}

const FeaturedProjectsAndSkills: React.FC = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const featuredProjects = [
    {
      color: '#0A0E27',
      title: 'CyberGuard Pro',
      description: 'Advanced network security monitoring system with real-time threat detection and automated response capabilities',
      label: 'Live',
      featured: true,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      span: { cols: 2, rows: 2 }
    },
    {
      color: '#0B1029',
      title: 'Data Vault',
      description: 'Encrypted cloud storage with zero-knowledge architecture',
      label: 'In Development',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop'
    },
    {
      color: '#0C132B',
      title: 'AI Assistant',
      description: 'Smart automation platform powered by machine learning',
      label: 'Featured',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
    },
    {
      color: '#0D152E',
      title: 'Blockchain Wallet',
      description: 'Secure crypto wallet with multi-chain support and DeFi integration',
      label: 'Beta',
      span: { cols: 2, rows: 1 },
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop'
    },
    {
      color: '#0E1831',
      title: 'Task Manager',
      description: 'Productivity app with AI suggestions',
      label: 'Live',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop'
    },
    {
      color: '#0A0E27',
      title: 'Weather Dashboard',
      description: 'Real-time weather analytics with predictive models',
      label: 'Live',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop'
    }
  ];

  const skills: Skill[] = [
    { name: 'All Programming Languages', level: 85, category: 'AI', icon: <Brain />, color: 'from-purple-400 to-pink-500', note: 'Ik weet hoe ik met AI moet praten' },
    { name: 'React / Next.js', level: 95, category: 'Frontend', icon: <Code />, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', level: 90, category: 'Frontend', icon: <Code />, color: 'from-blue-400 to-purple-500' },
    { name: 'C#', level: 85, category: 'Backend', icon: <Code />, color: 'from-purple-400 to-indigo-500' },
    { name: 'Node.js', level: 85, category: 'Backend', icon: <Terminal />, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', level: 88, category: 'Backend', icon: <Terminal />, color: 'from-yellow-400 to-orange-500' },
    { name: 'Cybersecurity', level: 35, category: 'Security', icon: <Shield />, color: 'from-red-400 to-pink-500' },
    { name: 'Databases', level: 70, category: 'Database', icon: <Database />, color: 'from-indigo-400 to-blue-500' },
    { name: 'Docker / K8s', level: 65, category: 'DevOps', icon: <Cloud />, color: 'from-purple-400 to-pink-500' },
    { name: 'Machine Learning', level: 70, category: 'AI', icon: <Brain />, color: 'from-pink-400 to-rose-500' },
    { name: 'Overige technologieën', level: 70, category: 'Tools', icon: <Code />, color: 'from-teal-400 to-cyan-500' }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section
      ref={ref}
      className="featured-projects-skills-section relative min-h-screen pt-20 pb-24 px-6 lg:px-12 overflow-hidden"
      style={{
        background: `linear-gradient(180deg,
          #04081E 0%,
          #050B22 10%,
          #060E26 20%,
          #08112A 30%,
          #0A142D 40%,
          #0C1630 50%,
          #0A142D 60%,
          #08112A 70%,
          #091527 80%,
          #0a1527 85%,
          #0a1628 95%,     /* Eindigt op de juiste kleur */
          #0a1628 100%     /* Geen transparante fade - solid kleur */
        )`
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Cyber Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Left side subtle overlay for projects */}
        <div
          className="absolute left-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 184, 212, 0.02) 0%, transparent 100%)'
          }}
        />

        {/* Right side subtle overlay for skills */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
          style={{
            background: 'linear-gradient(270deg, rgba(0, 245, 255, 0.02) 0%, transparent 100%)'
          }}
        />

        {/* Center Divider Line - Enhanced */}
        <div className="absolute left-1/2 top-[5%] bottom-[5%] w-px transform -translate-x-1/2 z-10 hidden lg:block">
          {/* Main divider line - stronger */}
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />

          {/* Secondary line for depth */}
          <div className="absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent" />

          {/* Glow effect - enhanced */}
          <div className="absolute inset-0 w-[4px] bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent blur-sm" />

          {/* Extra glow - wider */}
          <div className="absolute inset-0 w-[8px] bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent blur-lg" />

          {/* Animated pulse - stronger */}
          <div
            className="absolute inset-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"
            style={{
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />

          {/* Top decorative orb */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-cyan-500/60 rounded-full blur-sm" />
            <div className="absolute top-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping" />
          </div>

          {/* Bottom decorative orb */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-cyan-500/60 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400/40 rounded-full animate-ping" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1600px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Side - Featured Projects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Projects Header */}
            <div className="text-left">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  color: '#00B8D4',
                  textShadow: '0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)',
                }}
              >
                Featured Projects
              </h2>
              <p className="text-lg text-gray-400">
                Cutting-edge solutions met moderne technologieën
              </p>
            </div>

            {/* Magic Bento Grid */}
            <div className="w-full">
              <MagicBento
                cards={featuredProjects}
                textAutoHide={false}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                glowColor="0, 245, 255"
              />
            </div>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <button
                onClick={() => navigate('/projects')}
                className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1) 0%, rgba(0, 184, 212, 0.1) 100%)',
                  border: '2px solid rgba(0, 245, 255, 0.3)',
                  color: '#00F5FF',
                  boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 245, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.2)';
                }}
              >
                View All Projects
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:pl-12"
          >
            {/* Skills Header */}
            <div className="text-left">
              <h2
                className="text-4xl lg:text-5xl font-bold mb-4"
                style={{
                  color: '#00B8D4',
                  textShadow: '0 0 25px rgba(0, 184, 212, 0.5), 0 0 8px rgba(0, 150, 168, 0.7)',
                }}
              >
                Technical Skills
              </h2>
              <p className="text-lg text-gray-400">
                Expertise in modern technologies and frameworks
              </p>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {categories.map((category, index) => (
                  <motion.span
                    key={category}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/50 text-cyan-400 border border-cyan-500/20"
                  >
                    {category}
                  </motion.span>
                ))}
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>

                    <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isInView ? `${skill.level}%` : 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className={`absolute h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      >
                        {/* Glow Effect */}
                        <div
                          className="absolute inset-0 opacity-50"
                          style={{
                            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
                            animation: 'shimmer 2s infinite'
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* AI Note if exists */}
                    {skill.note && (
                      <p className="text-xs text-gray-400 italic mt-1 ml-6">
                        {skill.note}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Skills Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.6 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">8+</div>
                  <div className="text-xs text-gray-400">Technologies</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.7 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-xs text-gray-400">Years Exp</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.8 }}
                  className="text-center p-4 bg-slate-800/30 rounded-lg border border-cyan-500/20"
                >
                  <div className="text-2xl font-bold text-cyan-400">20+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .featured-projects-skills-section {
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .featured-projects-skills-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjectsAndSkills;