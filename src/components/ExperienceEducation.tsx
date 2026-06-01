import { motion } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar, Award } from "lucide-react";
import { experiences, education } from "../data";

export default function ExperienceEducation() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/10 transition-colors duration-300 relative text-white overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#22d3ee] uppercase font-semibold">
            // 04 . CREDENTIALS & WORK HISTORY
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-tighter leading-[0.95] text-white mt-3">
            Career Milestones & Education
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5" />
        </div>

        {/* Master Timeline Grid (Experience / Education) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Experience Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Briefcase className="text-cyan-400" size={18} />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white animate-fade-in">
                Professional Experience
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-5 before:w-0.5 before:bg-white/10">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-12 group">
                  {/* Circle indicator node */}
                  <div className="absolute left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#050508] border-2 border-cyan-500 group-hover:bg-cyan-500 transition-colors z-10" />

                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all">
                    
                    {/* Position header metrics */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-medium text-white/60">
                          {exp.company}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-white/55 font-mono mt-1 sm:mt-0">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>{exp.period}</span>
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin size={12} />
                          <span>{exp.location.split(" ")[0]}</span>
                        </span>
                      </div>
                    </div>

                    {/* Work accomplishment details */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-white/70 leading-relaxed list-disc list-outside ml-4">
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Skill tag list */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {exp.skills.map((s) => (
                        <span
                          key={s}
                          className="text-[9px] font-mono bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Education Column (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <GraduationCap className="text-purple-400" size={18} />
              </div>
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                Academic Background
              </h3>
            </div>

            <div className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-5 before:w-0.5 before:bg-white/10">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-12 group">
                  {/* Circle indicator node */}
                  <div className="absolute left-3.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#050508] border-2 border-purple-500 group-hover:bg-purple-500 transition-colors z-10" />

                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 backdrop-blur-md transition-all">
                    
                    {/* Education title details */}
                    <div className="mb-4">
                      <span className="flex items-center gap-1 text-[10px] font-bold font-mono tracking-widest text-purple-400 uppercase mb-2">
                        <Award size={12} className="text-purple-500" />
                        <span>DEGREE PROGRAM COMPLETED</span>
                      </span>
                      <h4 className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-white leading-snug group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-white/60 mt-1 font-medium">
                        {edu.school}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-white/55 font-mono mt-2">
                        <span className="flex items-center gap-0.5">
                          <Calendar size={12} />
                          <span>{edu.period}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin size={12} />
                          <span>{edu.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Achievements items List */}
                    <div className="pt-3 border-t border-white/10 space-y-2">
                      <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase font-semibold">Key Highlights:</span>
                      <ul className="space-y-2">
                        {edu.achievements.map((ach, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-white/70 leading-normal pl-4 list-disc">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
