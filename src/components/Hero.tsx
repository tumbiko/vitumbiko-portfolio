import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, Twitter, ChevronDown, MapPin } from "lucide-react";
import { personalInfo, stats } from "../data";

// Custom auto-typing roles hook
const roles = [
  "Software Developer",
  "Data Analyst",
  "IoT Solutions Architect",
  "Web Technology Expert"
];

function TypewriterEffect() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer: any;
    const fullText = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(40);
      }, speed);
    } else {
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(80);
      }, speed);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait on complete
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, speed]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-bold">
      {currentText}
      <span className="animate-pulse text-cyan-400 font-light font-mono">|</span>
    </span>
  );
}

// Stats Counter component
function AnimatedStatItem({ label, value, maxNumber, suffix }: { label: string; value: string; maxNumber: number; suffix?: string; key?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // ms
    const increment = maxNumber / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= maxNumber) {
        clearInterval(counter);
        setCount(maxNumber);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [maxNumber]);

  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:scale-103 group">
      <span className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
        {count}
        {suffix}
      </span>
      <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 mt-1.5 text-center group-hover:text-cyan-400 transition-colors">
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const handleDownloadCV = () => {
    // Elegant CV download trigger helper
    const mockCv = `
=============================================
VITUMBIKO SHABA - CURRICULUM VITAE
Email: ${personalInfo.email}
Profile: Software Developer & IoT Specialist
=============================================
Download successful. Custom PDF resume generated at runtime!
    `;
    const blob = new Blob([mockCv], { type: "text/plain" });
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
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050508] text-white"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-950/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Bento Grid / Layout container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column (Meta description and titles) */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
          
          {/* Malawian Tag / Badge */}
          <div className="mx-auto lg:mx-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur w-fit">
            <MapPin size={13} className="text-cyan-400" />
            <span>Malawi, SE Africa</span>
          </div>

          <p className="text-cyan-400 font-mono text-xs tracking-widest text-center lg:text-left">
            // SOFTWARE DEVELOPER & DATA ANALYST
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold font-display uppercase tracking-tighter leading-[0.9] text-white">
            VITUMBIKO<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              SHABA.
            </span>
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-semibold h-10 flex items-center justify-center lg:justify-start">
            <TypewriterEffect />
          </div>

          <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-white/60 leading-relaxed">
            {personalInfo.bio}
          </p>

          {/* Social Links Row */}
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/40 text-white/60 hover:text-cyan-400 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
              id="social-github"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 text-white/60 hover:text-purple-400 transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn Profile"
              id="social-linkedin"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.twitter}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/40 text-white/60 hover:text-blue-400 transition-all hover:scale-110 active:scale-95"
              aria-label="Twitter Account"
              id="social-twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/40 text-white/60 hover:text-purple-400 transition-all hover:scale-110 active:scale-95"
              aria-label="Send direct email"
              id="social-email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Action Grid CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-550 text-white font-bold text-[11px] uppercase tracking-wider hover:from-purple-650 hover:to-cyan-600 transition-all cursor-pointer group"
              id="cta-get-in-touch"
            >
              <span>Get in Touch</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={handleDownloadCV}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white text-[11px] uppercase font-bold tracking-widest hover:bg-white hover:text-black transition-colors"
              id="cta-download-cv-hero"
            >
              Download CV
            </button>
          </div>

        </div>

        {/* Right Column (Aesthetic Profiling Image with animated visual brackets) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 select-none group" id="hero-image-bracket shadow-lg">
            {/* Visual background spinning ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-65 blur-md group-hover:opacity-100 animate-spin-slow transition-opacity duration-500" />
            
            {/* Modern bracket border contours */}
            <div className="w-full h-full bg-[#050508] border border-white/10 rounded-full overflow-hidden relative z-10">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
            </div>

            {/* Glowing technology badging indicators */}
            <div className="absolute bottom-2 -right-2 bg-[#050508]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg text-[10px] font-mono tracking-widest text-cyan-400 z-20">
              ⚡ IOT & DATA
            </div>
            <div className="absolute top-4 -left-4 bg-[#050508]/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-lg text-[10px] font-mono tracking-widest text-purple-400 z-20">
              💻 FULLSTACK
            </div>
          </div>
        </div>

      </div>

      {/* Hero Statistics Section Banner (Bento style bottom layout) */}
      <div className="max-w-7xl mx-auto w-full pt-16 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st) => (
            <AnimatedStatItem
              key={st.id}
              label={st.label}
              value={st.value}
              maxNumber={st.number}
              suffix={st.suffix}
            />
          ))}
        </div>
      </div>

      {/* Floating Section Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer select-none">
        <a href="#about" className="flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-widest font-medium font-mono">SCROLL EXPLORE</span>
          <ChevronDown className="animate-bounce" size={18} />
        </a>
      </div>
    </section>
  );
}
