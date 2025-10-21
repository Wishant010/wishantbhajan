import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";
import ParticleField from "../Homescreenpage/ParticleField";
import { Link } from "react-router-dom";

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [codeText, setCodeText] = useState("");

  // Typing animation effect
  useEffect(() => {
    const codeString = `
const developer = {
  name: "Wishant Bhajan",
  role: "Full Stack Developer",
  passion: ["Cybersecurity", "UI/UX", "Innovation"],
  skills: {
    frontend: ["React", "TypeScript", "Next.js"],
    backend: ["Node.js", "Python", "PostgreSQL"],
    tools: ["Docker", "AWS", "Git"]
  },
  mission: "Building secure, scalable solutions"
};`;

    let index = 0;
    const timer = setInterval(() => {
      if (index < codeString.length) {
        setCodeText(codeString.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const tabContent = {
    journey: {
      title: "Mijn Reis",
      content: [
        { year: "2020", event: "Begonnen met programmeren", desc: "Eerste stappen in web development" },
        { year: "2021", event: "Deep dive in React & TypeScript", desc: "Moderne frontend frameworks" },
        { year: "2022", event: "Full Stack Development", desc: "Backend, databases en cloud" },
        { year: "2023", event: "Cybersecurity Focus", desc: "Secure coding practices" },
        { year: "2024", event: "UI/UX Specialist", desc: "Design systems en user experience" },
      ],
    },
    expertise: {
      title: "Expertise",
      content: [
        { area: "Frontend Architecture", level: 95, color: "from-emerald-400 to-cyan-400" },
        { area: "Backend Development", level: 88, color: "from-cyan-400 to-blue-400" },
        { area: "Cybersecurity", level: 82, color: "from-blue-400 to-purple-400" },
        { area: "UI/UX Design", level: 90, color: "from-purple-400 to-pink-400" },
        { area: "DevOps & Cloud", level: 75, color: "from-pink-400 to-red-400" },
      ],
    },
    values: {
      title: "Waarden",
      content: [
        {
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
          title: "Security First",
          desc: "Elke lijn code met beveiliging in gedachten"
        },
        {
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
          title: "Performance",
          desc: "Snelle, geoptimaliseerde applicaties"
        },
        {
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
          title: "User Experience",
          desc: "Intuïtieve en mooie interfaces"
        },
        {
          icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
          title: "Innovation",
          desc: "Altijd op zoek naar betere oplossingen"
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <GlobalNavbar />
      <ParticleField isActive={true} />

      {/* Hero Section with Matrix Effect */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-slate-900 to-cyan-950/20" />

          {/* Matrix Rain Effect */}
          <div className="matrix-rain absolute inset-0 opacity-10" />

          {/* Animated Grid */}
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "50px 50px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Code Terminal */}
            <motion.div
              className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30 shadow-2xl"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-emerald-400 text-sm font-mono">developer.js</span>
              </div>

              {/* Code Content */}
              <pre className="text-emerald-300 font-mono text-sm overflow-hidden">
                <code>{codeText}</code>
                <motion.span
                  className="inline-block w-2 h-4 bg-emerald-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </pre>
            </motion.div>

            {/* Right: About Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Over Mij
                </span>
              </h1>

              <p className="text-xl text-emerald-200/80 mb-8 leading-relaxed">
                Een gepassioneerde Full Stack Developer met focus op cybersecurity,
                moderne web technologieën en het creëren van innovatieve digitale ervaringen.
              </p>

              <div className="flex flex-wrap gap-3">
                {["Developer", "Designer", "Innovator", "Problem Solver"].map((role, index) => (
                  <motion.span
                    key={role}
                    className="px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: "rgba(16, 185, 129, 0.6)" }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-full p-1 border border-emerald-500/30">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900"
                      : "text-emerald-200 hover:text-white"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
              {tabContent[activeTab as keyof typeof tabContent].title}
            </h2>

            {activeTab === "journey" && (
              <div className="space-y-6">
                {(tabContent.journey.content as any[]).map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="flex items-center gap-6 group"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                    </div>
                    <div className="flex-grow bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-6 group-hover:border-emerald-500/40 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-emerald-300 mb-2">{item.event}</h3>
                      <p className="text-emerald-200/70">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "expertise" && (
              <div className="space-y-6">
                {(tabContent.expertise.content as any[]).map((skill, index) => (
                  <motion.div
                    key={skill.area}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-emerald-300 font-medium">{skill.area}</span>
                      <span className="text-emerald-400">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-slate-800/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "values" && (
              <div className="grid md:grid-cols-2 gap-6">
                {(tabContent.values.content as any[]).map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="bg-slate-800/30 backdrop-blur-sm border border-emerald-500/20 rounded-xl p-6 hover:border-emerald-500/40 transition-all duration-300"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, borderColor: "rgba(16, 185, 129, 0.5)" }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="text-emerald-400 w-12 h-12 flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-emerald-300 mb-2">{value.title}</h3>
                    <p className="text-emerald-200/70">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 backdrop-blur-lg rounded-2xl p-12 border border-emerald-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-300 mb-6">
              Laten We Samen Bouwen
            </h2>
            <p className="text-xl text-emerald-200/80 mb-8">
              Op zoek naar een developer die jouw visie kan realiseren?
            </p>
            <div className="flex justify-center">
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300"
              >
                Bekijk Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <ContactBar />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;