import React, { useState } from "react";
import { motion } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import Footer from "../../components/Footer";
import LaserFlow from "../../components/LaserFlow";
import { Link } from "react-router-dom";

interface Skill {
  name: string;
  level: number;
  icon: string | React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  skills: Skill[];
}

const SkillsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      description: "Building modern, responsive user interfaces",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
      skills: [
        { name: "React/Next.js", level: 95, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", level: 90, icon: "📘", color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", level: 92, icon: "🎨", color: "from-teal-400 to-cyan-500" },
        { name: "Three.js/WebGL", level: 75, icon: "🌐", color: "from-purple-400 to-pink-500" },
        { name: "Framer Motion", level: 85, icon: "🎬", color: "from-pink-400 to-purple-500" },
      ],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications & APIs",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      skills: [
        { name: "Node.js/Express", level: 88, icon: "🟢", color: "from-green-400 to-emerald-500" },
        { name: "Python/FastAPI", level: 85, icon: "🐍", color: "from-yellow-400 to-orange-500" },
        { name: "PostgreSQL", level: 82, icon: "🐘", color: "from-blue-500 to-indigo-500" },
        { name: "MongoDB", level: 80, icon: "🍃", color: "from-green-500 to-lime-500" },
        { name: "Redis", level: 75, icon: "📦", color: "from-red-400 to-rose-500" },
      ],
    },
    {
      title: "Cybersecurity",
      description: "Security-first development practices",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      skills: [
        { name: "OWASP Top 10", level: 85, icon: "🛡️", color: "from-slate-400 to-zinc-500" },
        { name: "Penetration Testing", level: 78, icon: "🔍", color: "from-red-500 to-pink-500" },
        { name: "Security Auditing", level: 80, icon: "📋", color: "from-orange-400 to-red-500" },
        { name: "Encryption/JWT", level: 88, icon: "🔐", color: "from-purple-500 to-indigo-500" },
        { name: "Network Security", level: 72, icon: "🌐", color: "from-cyan-500 to-blue-500" },
      ],
    },
    {
      title: "DevOps & Tools",
      description: "Efficient deployment and development workflows",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      skills: [
        { name: "Docker/K8s", level: 78, icon: "🐳", color: "from-blue-400 to-cyan-500" },
        { name: "AWS/Cloud", level: 75, icon: "☁️", color: "from-orange-400 to-yellow-500" },
        { name: "Git/GitHub", level: 92, icon: "📚", color: "from-gray-400 to-slate-500" },
        { name: "CI/CD", level: 80, icon: "♾️", color: "from-green-400 to-teal-500" },
        { name: "Linux/Bash", level: 85, icon: "🐧", color: "from-yellow-500 to-orange-500" },
      ],
    },
    {
      title: "AI/ML & Data",
      description: "Machine learning and data processing",
      icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      skills: [
        { name: "TensorFlow/PyTorch", level: 70, icon: "🧠", color: "from-orange-500 to-red-500" },
        { name: "Data Analysis", level: 75, icon: "📊", color: "from-blue-500 to-purple-500" },
        { name: "NLP/LLMs", level: 68, icon: "💬", color: "from-green-500 to-teal-500" },
        { name: "Computer Vision", level: 65, icon: "👁️", color: "from-purple-500 to-pink-500" },
        { name: "Pandas/NumPy", level: 78, icon: "🐼", color: "from-indigo-500 to-blue-500" },
      ],
    },
  ];

  const currentCategory = skillCategories[selectedCategory];

  // Calculate overall expertise
  const calculateOverallLevel = () => {
    const allSkills = skillCategories.flatMap(cat => cat.skills);
    const average = allSkills.reduce((acc, skill) => acc + skill.level, 0) / allSkills.length;
    return Math.round(average);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <GlobalNavbar />

      {/* Hero Section with LaserFlow */}
      <section className="relative h-screen overflow-hidden">
        {/* LaserFlow Background */}
        <div className="absolute inset-0 z-0">
          <LaserFlow
            color="#10B981"
            wispDensity={1.2}
            flowSpeed={0.4}
            verticalSizing={2.5}
            horizontalSizing={0.6}
            fogIntensity={0.5}
            wispIntensity={6}
            mouseTiltStrength={0.015}
          />
        </div>

        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80 z-[1]" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">
              Skills & Expertise
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-emerald-100/90 max-w-3xl mx-auto mb-12 drop-shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Een continue reis van leren en groeien in de wereld van technologie
          </motion.p>

          {/* Overall Expertise Meter */}
          <motion.div
            className="max-w-md w-full mx-auto"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-900/70 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20">
              <div className="flex justify-between mb-3">
                <span className="text-emerald-300 font-semibold text-lg">Overall Expertise</span>
                <span className="text-emerald-400 font-bold text-xl">{calculateOverallLevel()}%</span>
              </div>
              <div className="h-5 bg-slate-800 rounded-full overflow-hidden border border-emerald-500/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 rounded-full shadow-lg shadow-emerald-400/50"
                  initial={{ width: 0 }}
                  animate={{ width: `${calculateOverallLevel()}%` }}
                  transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-emerald-400/50 rounded-full flex justify-center p-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1 h-3 bg-emerald-400 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === index
                    ? "bg-gradient-to-r from-emerald-500 to-green-500 text-slate-950 shadow-lg shadow-emerald-500/30"
                    : "bg-slate-900/80 text-emerald-300 hover:bg-slate-800/80 border border-emerald-500/30 hover:border-emerald-400/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={selectedCategory === index ? "text-slate-950" : "text-emerald-400"}>{category.icon}</span>
                <span>{category.title}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Display */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="text-emerald-400 w-20 h-20 flex items-center justify-center bg-slate-900/50 rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                  {currentCategory.icon}
                </div>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">{currentCategory.title}</h2>
              <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">{currentCategory.description}</p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCategory.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="bg-slate-900/70 backdrop-blur-lg rounded-2xl p-6 border border-emerald-500/30 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{skill.icon}</span>
                        <h3 className="text-lg font-semibold text-emerald-200">{skill.name}</h3>
                      </div>
                      <span className="text-emerald-400 font-bold text-lg">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden border border-emerald-500/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 via-green-400 to-teal-400 rounded-full shadow-lg shadow-emerald-400/30"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      />

                      {/* Animated Glow */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent"
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    {/* Experience Level */}
                    <div className="mt-4 text-sm font-medium text-emerald-300/80">
                      {skill.level >= 90
                        ? "🌟 Expert"
                        : skill.level >= 80
                        ? "⭐ Advanced"
                        : skill.level >= 70
                        ? "✨ Proficient"
                        : "💡 Intermediate"}
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-green-400/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Learning */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">Continuous Learning</h2>
            <p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">
              Altijd bezig met het leren van nieuwe technologieën en het verbeteren van bestaande skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Currently Learning",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
                items: ["Rust", "Web3/Blockchain", "Advanced AI/ML"],
                color: "from-emerald-500 to-green-500",
              },
              {
                title: "Certifications",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                items: ["AWS Certified", "Google Cloud", "Security+"],
                color: "from-teal-500 to-cyan-500",
              },
              {
                title: "Next Goals",
                icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                items: ["Kubernetes Expert", "ML Engineering", "System Design"],
                color: "from-green-500 to-emerald-500",
              },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/70 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/30 hover:border-emerald-400/50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="text-emerald-400 w-16 h-16 flex items-center justify-center bg-slate-800/50 rounded-xl border border-emerald-500/30">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-6 text-center">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-emerald-100/80 font-medium"
                    >
                      <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${section.color} shadow-lg`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-emerald-950/60 via-slate-900/70 to-green-950/60 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/40 shadow-2xl shadow-emerald-500/20"
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-teal-500/10 animate-pulse" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-6">
                Op zoek naar deze skills?
              </h2>
              <p className="text-xl text-emerald-100/90 mb-10 max-w-2xl mx-auto">
                Laten we samen jouw technische uitdagingen aanpakken en innovatieve oplossingen bouwen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-slate-800/80 text-emerald-300 rounded-xl font-semibold hover:bg-slate-700/80 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  Bekijk Projecten
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-500 text-slate-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
                >
                  Neem Contact Op
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SkillsPage;