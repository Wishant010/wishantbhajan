// Animation presets for GSAP
export const animationPresets = {
  shieldOpen: {
    duration: 1.2,
    ease: "power4.inOut",
    stagger: 0.1
  },
  shieldClose: {
    duration: 1.0,
    ease: "back.out(1.4)",
    stagger: 0.05
  },
  cardReveal: {
    duration: 0.6,
    ease: "back.out(1.7)",
    stagger: 0.1
  },
  buttonHover: {
    duration: 0.3,
    ease: "power2.out"
  },
  modalOpen: {
    duration: 0.5,
    ease: "power3.out"
  },
  fadeIn: {
    duration: 0.5,
    ease: "power2.out"
  }
};

// Theme colors
export const theme = {
  background: {
    primary: "#0a192f",
    secondary: "#112240",
    tertiary: "#1d2d50"
  },
  accent: {
    cyan: "#00ffff",
    green: "#00ff88",
    blue: "#6366f1",
    purple: "#8b5cf6",
    orange: "#f59e0b",
    pink: "#ec4899"
  },
  text: {
    primary: "#e6f1ff",
    secondary: "#a8b2d1",
    tertiary: "#8892b0"
  },
  border: {
    light: "rgba(100, 255, 218, 0.3)",
    medium: "rgba(100, 255, 218, 0.5)",
    strong: "rgba(100, 255, 218, 0.8)"
  },
  glow: {
    cyan: "0 0 20px rgba(0, 255, 255, 0.6)",
    blue: "0 0 20px rgba(99, 102, 241, 0.6)",
    orange: "0 0 20px rgba(245, 158, 11, 0.6)",
    pink: "0 0 20px rgba(236, 72, 153, 0.6)"
  }
};
