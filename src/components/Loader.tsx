import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
  key?: string;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1600; // 1.6 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const computed = Math.min(100, Math.floor((elapsed / duration) * 100));
      
      setProgress(computed);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(onComplete, 400); // short delay for visual transition
      }
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      id="loader-container"
      className="fixed inset-0 bg-slate-950 flex flex-col items-center justify-center z-50 text-white font-sans"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="w-full max-w-sm px-6 text-center select-none">
        {/* Animated Icon */}
        <motion.div
          className="mx-auto w-16 h-16 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20 mb-8"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ 
            scale: [0.8, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Terminal className="text-white w-8 h-8" id="loader-icon" />
        </motion.div>

        {/* Branding text */}
        <motion.h1
          className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          VITUMBIKO SHABA
        </motion.h1>

        <motion.p
          className="text-xs tracking-widest text-slate-400 mt-2 uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Portfolio Experience
        </motion.p>

        {/* Custom Progress Bar */}
        <div className="mt-8 bg-slate-900/80 backdrop-blur border border-slate-800/60 rounded-full h-1.5 overflow-hidden w-full relative">
          <motion.div
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 h-full rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        {/* Percent number indicator */}
        <div className="mt-3 flex justify-between text-xs text-slate-500 font-mono">
          <span>INITIALIZING CORE MODULES</span>
          <span className="text-cyan-400 font-medium">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
