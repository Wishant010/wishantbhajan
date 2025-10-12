"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

interface ContactProps {
  isVisible?: boolean
}

const Contact: React.FC<ContactProps> = ({ isVisible = true }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-800 via-blue-900 to-emerald-900 py-20 page-content">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 80
          }}
          transition={{ duration: 1, delay: isVisible ? 0.5 : 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-emerald-200 mb-4">
            Laten we samenwerken
          </h2>
          <p className="text-lg text-emerald-200/70 mb-8 max-w-3xl mx-auto">
            Heb je een interessant project, een vraag over mijn werk, of wil je gewoon een gesprek? 
            Ik hoor graag van je en ben altijd open voor nieuwe uitdagingen!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : -50
            }}
            transition={{ duration: 1, delay: isVisible ? 1.0 : 0 }}
          >
            <h3 className="text-2xl font-bold text-emerald-200 mb-6">Stuur een bericht</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-emerald-300 font-medium mb-2">
                    Naam *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-400/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                    placeholder="Je naam"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-emerald-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-400/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                    placeholder="je@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-emerald-300 font-medium mb-2">
                  Onderwerp
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-400/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300"
                  placeholder="Waar gaat je bericht over?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-emerald-300 font-medium mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-black/20 border border-emerald-500/30 rounded-lg text-emerald-100 placeholder-emerald-400/50 focus:border-emerald-400 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Vertel me over je project of vraag..."
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Verstuur Bericht
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              x: isVisible ? 0 : 50
            }}
            transition={{ duration: 1, delay: isVisible ? 1.2 : 0 }}
          >
            {/* Contact Methods */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20">
              <h3 className="text-2xl font-bold text-emerald-200 mb-6">Contact Informatie</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: "📧",
                    title: "Email",
                    content: "wishant@example.com",
                    description: "Voor projecten en samenwerking"
                  },
                  {
                    icon: "💼",
                    title: "LinkedIn",
                    content: "/in/wishantbhajan",
                    description: "Professioneel netwerk"
                  },
                  {
                    icon: "💻",
                    title: "GitHub",
                    content: "/Wishant010",
                    description: "Bekijk mijn code"
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-500/10 transition-colors duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: isVisible ? 1 : 0,
                      y: isVisible ? 0 : 30
                    }}
                    transition={{ duration: 0.6, delay: isVisible ? 1.4 + index * 0.1 : 0 }}
                  >
                    <div className="text-2xl">{contact.icon}</div>
                    <div>
                      <h4 className="text-emerald-300 font-semibold">{contact.title}</h4>
                      <p className="text-emerald-200 font-medium">{contact.content}</p>
                      <p className="text-emerald-200/60 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 30
              }}
              transition={{ duration: 0.8, delay: isVisible ? 1.8 : 0 }}
            >
              <h3 className="text-xl font-bold text-emerald-200 mb-4">Beschikbaarheid</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-200">Beschikbaar voor nieuwe projecten</span>
                </div>
                <p className="text-emerald-200/70 text-sm">
                  Ik reageer meestal binnen 24 uur op berichten en ben altijd geïnteresseerd 
                  in uitdagende projecten.
                </p>
              </div>
            </motion.div>

            {/* What to Expect */}
            <motion.div
              className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-emerald-500/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 30
              }}
              transition={{ duration: 0.8, delay: isVisible ? 2.0 : 0 }}
            >
              <h3 className="text-xl font-bold text-emerald-200 mb-4">Wat kun je verwachten?</h3>
              <ul className="space-y-3 text-emerald-200/70">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span>Snelle en professionele reactie</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span>Transparante communicatie over project scope</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span>Hoge kwaliteit code en design</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2"></div>
                  <span>Ondersteuning na oplevering</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 60
          }}
          transition={{ duration: 1, delay: isVisible ? 2.4 : 0 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-4">
              Klaar om je idee werkelijkheid te maken?
            </h3>
            <p className="text-emerald-200/70 mb-8">
              Van concept tot realisatie - laten we samen iets geweldigs bouwen dat impact maakt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start een Project
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-emerald-500/50 text-emerald-200 font-bold rounded-lg hover:bg-emerald-500/10 hover:border-emerald-400 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const portfolioSection = document.querySelector('#portfolio');
                  portfolioSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Bekijk Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
