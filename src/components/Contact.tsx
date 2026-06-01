import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Phone, CheckCircle2, History, Trash } from "lucide-react";
import { personalInfo } from "../data";

interface SavedMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  text: string;
  date: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sentHistory, setSentHistory] = useState<SavedMessage[]>([]);

  // Hydrate local messages history on mount
  useEffect(() => {
    const cached = localStorage.getItem("portfolio_messages");
    if (cached) {
      try {
        setSentHistory(JSON.parse(cached));
      } catch (err) {
        console.error("Local storage decoding failure", err);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" })); // Clear error
  };

  const validateForm = () => {
    let valid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Full name is required";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Enter a valid email address";
      valid = false;
    }

    if (!formData.text.trim()) {
      errors.message = "Message text is required";
      valid = false;
    } else if (formData.text.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulate Network delay
    setTimeout(() => {
      const newMessage: SavedMessage = {
        id: "msg-" + Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "General Inquiry",
        text: formData.text,
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const updatedHistory = [newMessage, ...sentHistory];
      setSentHistory(updatedHistory);
      localStorage.setItem("portfolio_messages", JSON.stringify(updatedHistory));

      setIsSent(true);
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", text: "" });

      // Automatically hide success screen after 5 secs
      setTimeout(() => setIsSent(false), 5000);
    }, 1200);
  };

  const handleClearHistory = () => {
    localStorage.removeItem("portfolio_messages");
    setSentHistory([]);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050508] border-t border-white/10 transition-colors duration-300 text-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#22d3ee] uppercase font-semibold">
            // 06 . CONTACT INBOX
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-display uppercase tracking-tighter leading-[0.95] text-white mt-3">
            Let's Collaborate on Systems
          </h2>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-5" />
        </div>

        {/* Contact Layout Splits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Details and Context Info) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-display uppercase tracking-tight text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mt-2">
                Have an IoT system, database configuration, or client-facing dashboard project in mind? Reach out! Complete the secure forms or touch shoulders through direct social channels. I usually respond within 12 hours.
              </p>

              {/* Action channels listing */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Mail className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-white/40">Direct Email Link</span>
                    <a href={`mailto:${personalInfo.email}`} className="block text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Phone className="text-purple-400" size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-white/40">Call / Message</span>
                    <span className="block text-sm sm:text-base font-mono font-bold text-[#22d3ee]">
                      {personalInfo.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest font-mono text-white/40">Current Base Coordinates</span>
                    <span className="block text-sm sm:text-base font-bold text-white/80">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social Link Connect buttons */}
            <div>
              <h4 className="text-[10px] uppercase tracking-widest font-mono font-bold text-white/40 mb-3">CONVERGE ON SOCIALS</h4>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors cursor-pointer"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors cursor-pointer"
                >
                  <Linkedin size={13} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:border-[#22d3ee] hover:text-[#22d3ee] transition-colors cursor-pointer"
                >
                  <Twitter size={13} />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (High Fidelity Form and Simulated history logs) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl">
              
              <AnimatePresence mode="wait">
                {isSent ? (
                  <motion.div
                    className="flex flex-col items-center justify-center text-center py-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 className="text-emerald-500 w-16 h-16 mb-4 animate-bounce" />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched Successfully!</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
                      Thank you for contacting me. Your message has been processed and saved locally in your browser's persistent state container.
                    </p>
                    <button
                      onClick={() => setIsSent(false)}
                      className="mt-6 px-4 py-2 text-xs font-bold font-mono tracking-wider bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-900 rounded-lg cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    
                    {/* Name & Email Row split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-[10px] font-bold font-mono tracking-widest text-white/50 uppercase mb-2">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 bg-[#050508] border rounded-2xl text-sm text-white transition-all focus:outline-none focus:border-cyan-400 placeholder:text-white/30 ${
                            formErrors.name 
                              ? "border-rose-500" 
                              : "border-white/10"
                          }`}
                        />
                        {formErrors.name && (
                          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-rose-500 block mt-1">{formErrors.name}</span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-[10px] font-bold font-mono tracking-widest text-white/50 uppercase mb-2">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@example.com"
                          className={`w-full px-4 py-3 bg-[#050508] border rounded-2xl text-sm text-white transition-all focus:outline-none focus:border-cyan-400 placeholder:text-white/30 ${
                            formErrors.email 
                              ? "border-rose-500" 
                              : "border-white/10"
                          }`}
                        />
                        {formErrors.email && (
                          <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-rose-500 block mt-1">{formErrors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Subject line inputs */}
                    <div>
                      <label htmlFor="subject" className="block text-[10px] font-bold font-mono tracking-widest text-white/50 uppercase mb-2">
                        Subject Matter
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="IoT Monitoring prototype discussion"
                        className="w-full px-4 py-3 bg-[#050508] border border-white/10 rounded-2xl text-white text-sm transition-all focus:outline-none focus:border-cyan-400 placeholder:text-white/30"
                      />
                    </div>

                    {/* Message detail fields */}
                    <div>
                      <label htmlFor="text" className="block text-[10px] font-bold font-mono tracking-widest text-white/50 uppercase mb-2">
                        Detailed Message
                      </label>
                      <textarea
                        id="text"
                        name="text"
                        rows={5}
                        value={formData.text}
                        onChange={handleInputChange}
                        placeholder="Detail your system dimensions, technologies of focus, or consultation ideas here..."
                        className={`w-full px-4 py-3 bg-[#050508] border rounded-2xl text-white text-sm transition-all focus:outline-none focus:border-cyan-400 placeholder:text-white/30 resize-none ${
                          formErrors.message 
                            ? "border-rose-500" 
                            : "border-white/10"
                        }`}
                      />
                      {formErrors.message && (
                        <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-rose-500 block mt-1">{formErrors.message}</span>
                      )}
                    </div>

                    {/* Submit control */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-black border border-white font-bold rounded-full hover:bg-black hover:text-white transition-all uppercase tracking-widest text-xs font-mono group cursor-pointer"
                    >
                      {loading ? (
                        <span>DISPATCHING SECURE LINK...</span>
                      ) : (
                        <>
                          <span>Transmit Secure Message</span>
                          <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Local Message Persistence History log (Exposes beautiful developer logs!) */}
            {sentHistory.length > 0 && (
              <div className="p-6 rounded-3xl bg-white/5 border border-white/10 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <History size={14} className="text-cyan-400" />
                    <span className="text-xs font-bold font-mono tracking-widest text-white/80 uppercase">
                      Client-Side Message Sent History ({sentHistory.length})
                    </span>
                  </div>
                  <button
                    onClick={handleClearHistory}
                    className="flex items-center gap-1 text-[10px] text-rose-400 hover:text-rose-500 font-bold font-mono cursor-pointer"
                    title="Clear history database"
                  >
                    <Trash size={11} />
                    <span>Purge Logs</span>
                  </button>
                </div>

                <div className="space-y-4 max-h-[220px] overflow-y-auto pr-1">
                  {sentHistory.map((msg) => (
                    <div key={msg.id} className="p-3.5 rounded-2xl bg-[#050508] border border-white/10 border-l-2 border-l-cyan-400 text-xs">
                      <div className="flex justify-between items-start gap-1 pb-2 border-b border-white/10 text-white/40">
                        <span className="font-bold text-white/80">{msg.name} ({msg.email})</span>
                        <span className="font-mono text-[10px] tracking-tight">{msg.date}</span>
                      </div>
                      <div className="pt-2 text-white">
                        <div className="font-semibold text-white/90">Subj: {msg.subject}</div>
                        <p className="text-white/60 mt-1 leading-relaxed capitalize-first italic">
                          "{msg.text}"
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
