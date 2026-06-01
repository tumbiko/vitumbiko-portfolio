import { motion } from "motion/react";
import { Laptop, Database, Cpu, Globe, Rocket, ShieldCheck } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  const categories = [
    {
      id: "cat1",
      icon: <Laptop className="w-6 h-6 text-cyan-500" />,
      title: "Software Development",
      description: "Coded with object-oriented and functional architectures. Designing optimized systems, local mobile ledger tools, and custom background services using TypeScript and Node."
    },
    {
      id: "cat2",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: "Data Analysis",
      description: "Extracting insights from environmental metrics and localized logistics data. Modeling yield coefficients in Python and making visual data frameworks with D3."
    },
    {
      id: "cat3",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "IoT & Hardware Integration",
      description: "Interfacing ESP32 and Arduino boards with GPS sensors, ultrasonic gauges, and cellular transceivers to build responsive physical applications."
    },
    {
      id: "cat4",
      icon: <Globe className="w-6 h-6 text-pink-500" />,
      title: "Web Engineering",
      description: "Polishing performant client applications utilizing hybrid static generation, server-rendered portals, and glassmorphism systems styled with Tailwind."
    }
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/10 transition-colors duration-300 relative text-white overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-cyan-450 uppercase font-semibold">
            // 01 . BACKGROUND PROFILE
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-tighter leading-[0.95] text-white mt-3">
            Empowering Communities With Intelligent Tech
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5" />
        </div>

        {/* Narrative / Focus Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-12 xl:col-span-12 lg:max-w-4xl lg:mx-auto space-y-6 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-405">
              Who is Vitumbiko Shaba?
            </h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              I am a results-oriented software engineer, data analyst, and systems implementer based in Lilongwe, Malawi. Grasping theoretical concepts from my credentials, I design solutions aimed at boosting operational systems, conserving water resources, or reducing municipal spending.
            </p>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              By weaving hardware architectures together with high-integrity databases, React architectures, and rigorous security standards, I thrive on unlocking value from raw telemetry data.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-left">
              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white/5 border border-white/10">
                <Rocket className="text-cyan-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">Fast Deployments</h4>
                  <p className="text-xs text-white/50">Agile sprints and functional pipelines.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="text-purple-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">High Integrity</h4>
                  <p className="text-xs text-white/50">Type-safe development & security rules.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-12 xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {categories.map((cat, ix) => (
              <div
                key={cat.id}
                className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md hover:shadow-cyan-950/20 transition-all hover:scale-103 group"
                id={`about-card-${ix}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#050508] border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 transition-colors">
                  {cat.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed mt-2">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
