"use client"

import React from "react"
import HeroSection from "./herosection"
import AboutMe from "./aboutme"
import Portfolio from "./portfolio"
import Contact from "./contact"
import ParticleField from "./ParticleField"
import NavbarMenu from "../../components/NavbarMenu"

interface HomescreenProps {
  isVisible?: boolean
}

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm border-t border-emerald-500/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Wishant Bhajan
            </h3>
            <p className="text-emerald-200/70 leading-relaxed">
              Full Stack Developer met passie voor innovatieve digitale oplossingen en moderne webontwikkeling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-300">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-emerald-200/60 hover:text-emerald-200 transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-300">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500/20 mt-8 pt-8 text-center">
          <p className="text-emerald-200/60">
            © 2025 Wishant Bhajan. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

const Homescreen: React.FC<HomescreenProps> = ({ isVisible = true }) => {
  // Add smooth scrolling to the entire document
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed Navbar */}
      <NavbarMenu isVisible={isVisible} />
      
      {/* Navigation will be part of hero section */}
      <section id="home">
        <HeroSection isVisible={isVisible} />
      </section>

      <section id="about">
        <AboutMe isVisible={isVisible} />
      </section>

      <section id="portfolio">
        <Portfolio isVisible={isVisible} />
      </section>

      <section id="contact">
        <Contact isVisible={isVisible} />
      </section>

      <Footer />

      <ParticleField isActive={isVisible} />
    </div>
  )
}

export default Homescreen
