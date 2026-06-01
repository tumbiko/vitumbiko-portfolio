import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceEducation from "./components/ExperienceEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import ParticleBackground from "./components/ParticleBackground";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(true);

  // Initialize and select theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark theme for premium portfolios
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const target = theme === "dark" ? "light" : "dark";
    setTheme(target);
    localStorage.setItem("portfolio_theme", target);
    
    if (target === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-[#050508] text-slate-100" : "bg-slate-50 text-slate-800"
    }`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader-panel" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="portfolio-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col min-h-screen relative"
            id="portfolio-main"
          >
            {/* Interactive Particle canvas behind layout */}
            <ParticleBackground theme={theme} />

            {/* Navigation top menu */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Layout Section blocks */}
            <main className="flex-1">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <ExperienceEducation />
              <Contact />
            </main>

            {/* Licensing and index back-to-top controls */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
