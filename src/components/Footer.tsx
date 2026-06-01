import { Terminal, ArrowUp, Mail, MapPin } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050508] border-t border-white/10 text-white/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center">
            <Terminal size={15} className="text-white" />
          </div>
          <div className="text-left">
            <span className="text-sm font-bold font-display uppercase tracking-tight text-white block">
              Vitumbiko Shaba
            </span>
            <span className="text-[10px] text-white/40 font-mono">
              Software Dev & IoT Specialist
            </span>
          </div>
        </div>

        {/* Center: Navigation quick jumps */}
        <ul className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-widest font-mono">
          <li>
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </li>
        </ul>

        {/* Right Side: Back to Top and Meta copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-[10px] text-white/40 font-mono text-center sm:text-right">
            © {new Date().getFullYear()} • Designed with React & Framer Motion
          </span>

          <button
            onClick={handleScrollToTop}
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-black hover:bg-white hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Return to topmost node"
          >
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
