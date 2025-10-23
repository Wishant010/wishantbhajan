import React from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Linkedin, Github } from 'lucide-react'

const ContactBar: React.FC = () => {
  const contactItems = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Telefoon",
      value: "+31 648 447 234",
      href: "tel:+31648447234",
      color: "hover:shadow-blue-500/20"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "Wishantbhajan@outlook.com",
      href: "mailto:Wishantbhajan@outlook.com",
      color: "hover:shadow-purple-500/20"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Wishant Bhajan",
      href: "https://www.linkedin.com/in/wishant-bhajan-0a73832a4/",
      color: "hover:shadow-blue-500/20"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "Wishant010",
      href: "https://github.com/Wishant010",
      color: "hover:shadow-purple-500/20"
    }
  ]

  return (
    <div className="relative -mt-1">
      {/* Subtle dark overlay for readability - more transparent to show background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg,
            rgba(26, 31, 46, 0.4) 0%,
            rgba(27, 32, 48, 0.45) 50%,
            rgba(30, 35, 54, 0.5) 100%
          )`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Main title section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open voor nieuwe projecten en samenwerkingen. Neem contact op voor innovatieve digitale oplossingen.
          </p>
        </motion.div>

        {/* Contact items grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`group backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${item.color}`}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                borderColor: 'rgba(255, 255, 255, 0.15)',
              }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <span className="text-blue-400 group-hover:text-purple-400 transition-colors">
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-slate-300">{item.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Status and CTA section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-slate-400">Currently available for work</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactBar