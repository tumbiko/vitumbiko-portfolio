import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X, Sun, Moon, Terminal, Download } from "lucide-react";
import { personalInfo } from "../data";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  // Framer Motion Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll offset detector for styles & active link selection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection calculation
      const sections = navLinks.map((link) => {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return {
            id: link.id,
            // Section is active if it takes up most of top offset area
            top: rect.top + window.scrollY - 120, 
            bottom: rect.bottom + window.scrollY - 120,
          };
        }
        return null;
      });

      const currentScroll = window.scrollY;
      const currentSection = sections.find(
        (sec) => sec && currentScroll >= sec.top && currentScroll < sec.bottom
      );

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    // Generate a dummy CV link or show an elegant notice
    const mockCvContent = `
=============================================
VITUMBIKO SHABA - CURRICULUM VITAE
Email: ${personalInfo.email}
Profile: Software Developer & IoT Specialist
=============================================
Download successful. Custom PDF resume generated at runtime!
    `;
    const blob = new Blob([mockCvContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Vitumbiko_Shaba_CV.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/65 dark:bg-slate-950/65 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
      id="main-header"
    >
      {/* Scroll Progress Indicator Line */}
      <motion.div
        className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 origin-left"
        id="scroll-indicator"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand Brand */}
          <a
            href="#hero"
            className="flex items-center gap-3"
            id="logo-brand"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center font-extrabold text-lg text-white shadow-md shadow-cyan-500/10 font-sans tracking-tighter">
              VS
            </div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white opacity-90 font-sans">
              Vitumbiko Shaba
            </span>
          </a>

          {/* Desktop Links Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-semibold" id="desktop-nav">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`relative py-1.5 transition-colors font-sans ${
                      activeSection === link.id
                        ? "text-cyan-450 opacity-100"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-white/10 mx-1" />

            {/* Custom Utilities inside desktop Nav */}
            <div className="flex items-center gap-4">
              {/* Light/Dark Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Toggle visual theme"
                id="theme-toggler-btn"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>

              {/* CV Grab download */}
              <button
                onClick={handleDownloadCV}
                className="px-4 py-2 border border-white/20 rounded-full text-[10px] uppercase font-bold tracking-tighter text-white hover:bg-white hover:text-black hover:border-white transition-all duration-350 bg-white/5 cursor-pointer"
                id="navbar-download-cv"
              >
                Download CV
              </button>
            </div>
          </nav>

          {/* Mobile Menu Action Icon */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle theme mobile"
              id="theme-toggler-mobile-btn"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Open mobile menu"
              id="mobile-menu-trigger"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu Panel */}
      <motion.div
        className={`md:hidden absolute w-full left-0 bg-slate-900/98 dark:bg-slate-950/98 backdrop-blur-lg border-b border-slate-800/80 shadow-2xl transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
        id="mobile-nav-panel"
      >
        <ul className="px-4 space-y-1 text-center font-sans">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium text-base transition-colors ${
                  activeSection === link.id
                    ? "bg-slate-800 dark:bg-slate-900 text-cyan-400 font-semibold"
                    : "text-slate-300 hover:bg-slate-800/40 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <button
              onClick={() => {
                setIsOpen(false);
                handleDownloadCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-inner outline-none uppercase text-xs tracking-wider"
              id="mobile-cv-button"
            >
              <Download size={15} />
              <span>Download CV / Resume</span>
            </button>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
