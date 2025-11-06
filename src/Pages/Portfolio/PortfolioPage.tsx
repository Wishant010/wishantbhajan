import React from "react";
import { motion } from "framer-motion";
import ParticleField from "../Homescreenpage/ParticleField";
import OptimizedSplashCursor from "../../utils/OptimizedSplashCursor";

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900" data-page="portfolio">
      <OptimizedSplashCursor />
      <ParticleField isActive={true} />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-slate-900 to-emerald-950/20" />

        {/* Animated Hexagon Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2310b981' stroke-width='0.5'%3E%3Cpath d='M30 0L52 15L52 45L30 60L8 45L8 15Z'/%3E%3C/g%3E%3C/svg%3E")`,
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
    </div>
  );
};

export default PortfolioPage;
