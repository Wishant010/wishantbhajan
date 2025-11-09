import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlobalNavbar from "../../components/GlobalNavbar";
import ContactBar from "../../components/ContactBar";
import Footer from "../../components/Footer";

interface Event {
  id: number;
  title: string;
  type: "hackathon" | "conference" | "workshop" | "competition";
  date: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
  achievement?: string;
  image?: React.ReactNode;
  link?: string;
}

const ArticlePage: React.FC = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const types = ["all", "hackathon", "conference", "workshop", "competition"];

  const events: Event[] = [
    {
      id: 1,
      title: "HackDelft 2024",
      type: "hackathon",
      date: "15-17 Maart 2024",
      location: "TU Delft",
      description: "36-uur hackathon gericht op innovatieve tech oplossingen voor duurzaamheid",
      highlights: [
        "Gebouwd een AI-powered recycling sorter",
        "Samengewerkt met een internationaal team",
        "Presentatie voor 200+ deelnemers",
      ],
      tech: ["Python", "TensorFlow", "React", "Arduino"],
      achievement: "Top 10 Finalist",
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "CyberSec Summit 2024",
      type: "conference",
      date: "22 Februari 2024",
      location: "Amsterdam RAI",
      description: "Jaarlijkse cybersecurity conferentie met talks en workshops over de nieuwste security trends",
      highlights: [
        "Bijgewoond 15+ expert presentations",
        "Netwerken met security professionals",
        "Hands-on security challenges",
      ],
      tech: ["Security", "Penetration Testing", "Network Analysis"],
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "React Workshop Advanced",
      type: "workshop",
      date: "10 Januari 2024",
      location: "Rotterdam Tech Hub",
      description: "Geavanceerde React patterns en performance optimalisatie technieken",
      highlights: [
        "Geleerd over advanced hooks",
        "Performance optimization",
        "State management patterns",
      ],
      tech: ["React", "TypeScript", "Redux", "Next.js"],
      image: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const filteredEvents =
    selectedType === "all"
      ? events
      : events.filter((event) => event.type === selectedType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hackathon":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "conference":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "workshop":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "competition":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900" data-page="article">
      <GlobalNavbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-slate-900 to-blue-950/20" />

          {/* Animated Pattern */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%238B5CF6' stroke-width='0.5'%3E%3Cpath d='M30 0L52 15L52 45L30 60L8 45L8 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "60px 60px"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Events & Hackathons
            </span>
          </motion.h1>
          <motion.p
            className="text-xl text-blue-200/80 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ontdek mijn journey door verschillende tech events, hackathons en workshops waar ik
            heb deelgenomen en nieuwe skills heb geleerd.
          </motion.p>
        </div>
      </section>

      {/* Type Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((type) => (
              <motion.button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedType === type
                    ? "bg-gradient-to-r from-purple-400 to-blue-400 text-slate-900 shadow-lg shadow-purple-400/25"
                    : "bg-slate-800/50 text-blue-200 hover:bg-slate-700/50 border border-purple-500/20"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative"
                >
                  <div
                    className="bg-slate-800/50 backdrop-blur-lg rounded-xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300 cursor-pointer h-full flex flex-col"
                    onClick={() => setSelectedEvent(event)}
                  >
                    {/* Type Badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(
                          event.type
                        )}`}
                      >
                        {event.type}
                      </span>
                    </div>

                    {/* Event Icon */}
                    <div className="flex justify-center text-purple-400 mb-4">
                      {event.image}
                    </div>

                    {/* Event Info */}
                    <h3 className="text-xl font-bold text-purple-300 mb-2">{event.title}</h3>
                    <div className="text-blue-200/60 text-sm mb-2">
                      {event.date} • {event.location}
                    </div>
                    <p className="text-blue-200/70 mb-4 line-clamp-2 flex-grow">
                      {event.description}
                    </p>

                    {/* Achievement Badge */}
                    {event.achievement && (
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium border border-yellow-500/30">
                          🏆 {event.achievement}
                        </span>
                      </div>
                    )}

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {event.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {event.tech.length > 3 && (
                        <span className="px-2 py-1 text-purple-400/60 text-xs">
                          +{event.tech.length - 3} meer
                        </span>
                      )}
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/0 via-blue-400/10 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-blue-200/60 text-lg">
                Geen events gevonden in deze categorie.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-slate-800/95 backdrop-blur-lg rounded-2xl border border-purple-500/30 p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button - Fixed z-index and hover effect */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-slate-700/80 backdrop-blur-sm border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-400/50 transition-all duration-200 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Event Details - Main content with proper z-index */}
              <div className="relative z-10 flex justify-center text-purple-400 mb-6">
                {selectedEvent.image}
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-purple-300 mb-2">{selectedEvent.title}</h2>

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-medium border ${getTypeColor(
                      selectedEvent.type
                    )}`}
                  >
                    {selectedEvent.type}
                  </span>
                  {selectedEvent.achievement && (
                    <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium border border-yellow-500/30">
                      🏆 {selectedEvent.achievement}
                    </span>
                  )}
                </div>

                <div className="text-blue-200/70 mb-4">
                  <p>📅 {selectedEvent.date}</p>
                  <p>📍 {selectedEvent.location}</p>
                </div>

                <p className="text-blue-200/80 mb-6">{selectedEvent.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-blue-200/70">
                        <span className="text-purple-400">▸</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                {selectedEvent.link && (
                  <div className="flex gap-4">
                    <a
                      href={selectedEvent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-purple-400 to-blue-400 text-slate-900 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-400/25 transition-all"
                    >
                      Meer Info
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-950/50 to-blue-950/50 backdrop-blur-lg rounded-2xl p-12 border border-purple-500/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-6">
              Wil je samen naar een event?
            </h2>
            <p className="text-xl text-blue-200/80">
              Ik ben altijd op zoek naar nieuwe hackathons en tech events om bij te wonen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Bar */}
      <ContactBar />
      <Footer />
    </div>
  );
};

export default ArticlePage;
