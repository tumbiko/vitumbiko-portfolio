import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cpu, Globe, Database, Code, Shield } from "lucide-react";
import { skills } from "../data";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "Frameworks & Libraries", "Tools & Databases", "Hardware & IoT"];

  const filteredSkills = selectedCategory === "All" 
    ? skills 
    : skills.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code size={14} className="text-cyan-500" />;
      case "Frameworks & Libraries":
        return <Globe size={14} className="text-purple-500" />;
      case "Tools & Databases":
        return <Database size={14} className="text-blue-500" />;
      case "Hardware & IoT":
        return <Cpu size={14} className="text-pink-500" />;
      default:
        return <Shield size={14} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/10 transition-colors duration-300 relative text-white"
    >
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-455 uppercase font-semibold">
            // 02 . TECHNICAL ARSENAL
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-tighter leading-[0.95] text-white mt-3">
            Engineered Skill Set & Capabilities
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-white text-black border border-white"
                  : "bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Bars Layout (Using Grid with Motion) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((sk, index) => (
              <motion.div
                layout
                key={sk.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/20 backdrop-blur-md transition-all hover:scale-101"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#050508] border border-white/10 flex items-center justify-center">
                      {getCategoryIcon(sk.category)}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {sk.name}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold font-mono text-cyan-400">
                    {sk.level}%
                  </span>
                </div>

                {/* Progress bar line element */}
                <div className="bg-white/10 h-1 sm:h-1.5 rounded-full overflow-hidden w-full relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${sk.level}%` }}
                    transition={{ duration: 1.1, ease: "easeOut" }}
                  />
                </div>

                {/* Category detail tag */}
                <div className="flex justify-between mt-2.5">
                  <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider font-mono">
                    {sk.category}
                  </span>
                  <span className="text-[9px] text-white/30 font-mono">
                    STABILIZED & VERIFIED
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Highlight Quote Grid or Footer information */}
        <div className="mt-16 text-center max-w-2xl mx-auto rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur">
          <p className="text-xs sm:text-sm font-mono text-white/60 italic">
            "We can embed intelligence into our infrastructure to optimize water utility cycles, route maintenance, and improve logistics across our communities."
          </p>
          <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 mt-2 block">
            — Vitumbiko Shaba
          </span>
        </div>

      </div>
    </section>
  );
}
