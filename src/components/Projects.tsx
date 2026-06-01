import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ZoomIn, X, Trash2, MapPin, BarChart3, Radio, RefreshCw } from "lucide-react";
import { projects } from "../data";
import { Project } from "../types";

// Simulated Garbage Bins Data structure
interface SmartBin {
  id: string;
  name: string;
  fillLevel: number; // percentage
  lat: string;
  lng: string;
  status: "Normal" | "Warning" | "Critical";
  lastPing: string;
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  
  // Smart Garbage simulation states
  const [smartBins, setSmartBins] = useState<SmartBin[]>([
    { id: "b1", name: "Area 18 Market Hub", fillLevel: 87, lat: "-13.9531", lng: "33.7845", status: "Critical", lastPing: "1 min ago" },
    { id: "b2", name: "Area 25 Shopping Center", fillLevel: 45, lat: "-13.9182", lng: "33.7431", status: "Normal", lastPing: "3 mins ago" },
    { id: "b3", name: "Gateway Mall East", fillLevel: 15, lat: "-13.9712", lng: "33.7745", status: "Normal", lastPing: "5 mins ago" },
    { id: "b4", name: "Lilongwe Central Station", fillLevel: 94, lat: "-13.9822", lng: "33.7611", status: "Critical", lastPing: "Just now" }
  ]);
  const [simulatedTruckRoute, setSimulatedTruckRoute] = useState<string[]>([]);
  const [isSimulatingRing, setIsSimulatingRing] = useState(false);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Auto route planning for simulated Garbage Bins
  useEffect(() => {
    // Only route to warning or critical bins
    const criticalBins = smartBins
      .filter((b) => b.fillLevel > 70)
      .sort((a, b) => b.fillLevel - a.fillLevel)
      .map((b) => b.name);
    setSimulatedTruckRoute(criticalBins);
  }, [smartBins]);

  // Simulate garbage deposit values
  const handleIncreaseFill = (binId: string) => {
    setSmartBins((prev) =>
      prev.map((bin) => {
        if (bin.id === binId) {
          const nextLevel = Math.min(100, bin.fillLevel + Math.floor(Math.random() * 15) + 5);
          return {
            ...bin,
            fillLevel: nextLevel,
            status: nextLevel > 80 ? "Critical" : nextLevel > 50 ? "Warning" : "Normal",
            lastPing: "Just now"
          };
        }
        return bin;
      })
    );
  };

  // Simulate truck collection routine
  const handleEmptyBin = (binId: string) => {
    setIsSimulatingRing(true);
    setTimeout(() => {
      setSmartBins((prev) =>
        prev.map((bin) => {
          if (bin.id === binId) {
            return {
              ...bin,
              fillLevel: 0,
              status: "Normal",
              lastPing: "Just now"
            };
          }
          return bin;
        })
      );
      setIsSimulatingRing(false);
    }, 1000);
  };

  // Reset all simulated data
  const handleResetSimulation = () => {
    setSmartBins([
      { id: "b1", name: "Area 18 Market Hub", fillLevel: 32, lat: "-13.9531", lng: "33.7845", status: "Normal", lastPing: "10 mins ago" },
      { id: "b2", name: "Area 25 Shopping Center", fillLevel: 45, lat: "-13.9182", lng: "33.7431", status: "Normal", lastPing: "3 mins ago" },
      { id: "b3", name: "Gateway Mall East", fillLevel: 72, lat: "-13.9712", lng: "33.7745", status: "Warning", lastPing: "5 mins ago" },
      { id: "b4", name: "Lilongwe Central Station", fillLevel: 15, lat: "-13.9822", lng: "33.7611", status: "Normal", lastPing: "Just now" }
    ]);
  };

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/10 transition-colors duration-300 relative text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
            // 03 . PORTFOLIO ARCHIVES
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-tighter leading-[0.95] text-white mt-3">
            Featured Projects & Case Studies
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
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

        {/* Projects Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex flex-col rounded-3xl bg-white/5 border overflow-hidden transition-all duration-300 group ${
                  p.featured 
                    ? "border-cyan-500/40 relative shadow-lg shadow-cyan-500/5" 
                    : "border-white/10"
                }`}
              >
                {/* Featured Badge */}
                {p.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded-full z-15 shadow-sm">
                    FEATURED INNOVATION
                  </div>
                )}

                {/* Cover Image container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-slate-950/20 z-10 transition-opacity group-hover:opacity-0" />
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-102 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover visual details link */}
                  <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300 z-15">
                    <button
                      onClick={() => setActiveProject(p)}
                      className="p-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors cursor-pointer"
                      title="Inspect full details"
                    >
                      <ZoomIn size={18} />
                    </button>
                    {p.githubUrl && (
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-slate-800 text-white hover:bg-slate-750 transition-colors"
                        title="GitHub Code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                        title="View Live on Google"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Details wrapper */}
                <div className="p-6 flex-1 flex flex-col justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold font-mono tracking-widest text-cyan-400 uppercase">
                      {p.category}
                    </span>
                    <h3 className="text-xl font-bold font-display uppercase tracking-tight text-white mt-1 group-hover:text-cyan-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2 line-clamp-2">
                      {p.description}
                    </p>
                  </div>

                  <div>
                    <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] font-medium font-mono text-white/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.technologies.length > 4 && (
                        <span className="text-[9px] font-mono text-white/40 px-1 py-0.5">
                          +{p.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Integrated Action Row for direct clicks */}
                    <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setActiveProject(p)}
                        className="text-xs font-mono font-bold uppercase text-white/70 hover:text-cyan-400 flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <ZoomIn size={12} />
                        <span>Specs</span>
                      </button>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[10px] font-mono font-bold uppercase text-emerald-400 hover:text-emerald-350 flex items-center gap-1 transition-colors"
                        >
                          <span>Live Link</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Live Simulation Playground Widget for IoT Section */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0a0520] to-[#010915] border border-cyan-500/30 shadow-xl overflow-hidden relative">
          
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 z-0" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8">
            
            {/* Simulation Text Details Column */}
            <div className="lg:w-1/2 flex flex-col justify-between text-white">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2">
                  <Radio className="animate-pulse" size={13} />
                  <span>Interactive IoT Sandboxing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white">
                  Smart Bin Real-Time Controller Simulator
                </h3>
                <p className="text-xs sm:text-sm text-white/70 mt-3 leading-relaxed">
                  Experiencing the logistics optimization of the **Smart Garbage Monitoring System** from Lilongwe City. Real ultrasonic sensors send bin metrics via PHP. Click buttons to drop virtual trash, map the active volume triggers, and plan dynamic routing maps for collection trucks automatically.
                </p>
              </div>
 
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Computed Collection Route</h4>
                  <div className="flex items-center gap-2 mt-1 text-xs text-white">
                    {simulatedTruckRoute.length === 0 ? (
                      <span className="text-emerald-400 font-medium font-mono">ALL SLOTS VERIFIED CLEAN</span>
                    ) : (
                      <div className="flex flex-wrap items-center gap-1.5">
                        {simulatedTruckRoute.map((node, ix) => (
                          <span key={node} className="font-mono text-white/80">
                            {ix > 0 && " → "}
                            <span className="text-cyan-400 font-bold">{node.split(" ")[0]}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
 
                <button
                  onClick={handleResetSimulation}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-white/75 hover:bg-white hover:text-black hover:border-white transition-colors cursor-pointer ml-auto"
                >
                  <RefreshCw size={12} />
                  <span>Reset Demo</span>
                </button>
              </div>
            </div>
 
            {/* Simulated Live UI Screen Column */}
            <div className="lg:w-1/2 rounded-3xl bg-black/60 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-between text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-[10px] font-mono tracking-widest text-white/50 uppercase">LILONGWE CIVIC DASHBOARD</span>
                <span className="flex items-center gap-1 text-[9px] text-emerald-400 bg-emerald-950/20 px-2.5 py-1 border border-emerald-500/20 rounded-full font-mono">
                  <span className="w-1.5 h-1.5 bg-emerald-450 rounded-full animate-pulse" />
                  <span>GSM ONLINE</span>
                </span>
              </div>

              {/* Virtual Bins indicators */}
              <div className="space-y-4">
                {smartBins.map((bin) => (
                  <div key={bin.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-950/80 border border-slate-850">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-900 border border-slate-800 flex items-center justify-center">
                        <Trash2 size={15} className={bin.fillLevel > 80 ? "text-rose-500 animate-bounce" : bin.fillLevel > 50 ? "text-amber-500 animate-pulse" : "text-emerald-400"} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <span>{bin.name}</span>
                          <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${
                            bin.fillLevel > 80 ? "bg-rose-950/60 text-rose-450 border border-rose-900" : bin.fillLevel > 50 ? "bg-amber-950/60 text-amber-450 border border-amber-900" : "bg-emerald-950/60 text-emerald-450 border border-emerald-950"
                          }`}>
                            {bin.fillLevel}%
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono tracking-tight flex items-center gap-0.5">
                          <MapPin size={10} />
                          <span>{bin.lat}, {bin.lng}</span>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-auto">
                      <button
                        onClick={() => handleIncreaseFill(bin.id)}
                        disabled={bin.fillLevel >= 100}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-slate-900 border border-slate-800 hover:text-white disabled:opacity-40 transition-colors text-slate-400 cursor-pointer"
                        title="Add mock trash drop to verify telemetry levels"
                      >
                        + Trash Drop
                      </button>
                      
                      <button
                        onClick={() => handleEmptyBin(bin.id)}
                        disabled={bin.fillLevel < 40 || isSimulatingRing}
                        className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded bg-cyan-950/60 text-cyan-450 border border-cyan-900 hover:bg-cyan-900 hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
                        title="Dispatch cleaning truck simulation"
                      >
                        Collect
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap justify-between text-[10px] text-slate-500 font-mono pt-3 border-t border-slate-800/60">
                <span>SYSTEM DELAY: 140ms</span>
                <span>AUTOROUTE CO-FFF4</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Detail Showcase Modal overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/80 text-white transition-colors cursor-pointer"
                title="Dismiss modal view"
              >
                <X size={16} />
              </button>

              {/* Hero Photo banner */}
              <div className="relative aspect-video w-full bg-slate-900">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                      {activeProject.category}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Scrollable Details Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 dark:text-slate-350 bg-white dark:bg-slate-950">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Core Narrative</h4>
                  <p className="text-sm mt-1.5 leading-relaxed">
                    {activeProject.detailedDescription || activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Key Technology Framework</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {activeProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-cyan-400 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* External Action triggers inside Modal */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-900">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono tracking-wider text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      <Github size={13} />
                      <span>SOURCE REPO</span>
                    </a>
                  )}
                  {activeProject.demoUrl && !activeProject.demoUrl.startsWith("#") && (
                    <a
                      href={activeProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold font-mono tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-xl transition-all shadow shadow-cyan-500/10"
                    >
                      <ExternalLink size={13} />
                      <span>LIVE PREVIEW</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
