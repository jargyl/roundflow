import { motion } from 'framer-motion';

interface BreathingAnimationProps {
  isPlaying: boolean;
  phase: string;
  progress: number;
}

export function BreathingAnimation({ isPlaying, phase }: BreathingAnimationProps) {
  const variants = {
    idle: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    inhale: {
      scale: 2.5,
      transition: { duration: 4, ease: "easeInOut" }
    },
    holdIn: {
      scale: 2.5,
      transition: { duration: 4, ease: "linear" }
    },
    exhale: {
      scale: 1,
      transition: { duration: 4, ease: "easeInOut" }
    },
    holdOut: {
      scale: 1,
      transition: { duration: 4, ease: "linear" }
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full" role="img" aria-label="Breathing animation guide">
      {/* Outer decorative circles */}
      <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-dawn-200/30 to-mystic-200/30 animate-pulse" />
      <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-dawn-300/20 to-mystic-300/20" />
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-dawn-200/10 to-mystic-200/10" />
      
      {/* Main breathing circle */}
      <motion.div
        className="w-24 h-24 bg-gradient-to-br from-dawn-300/40 to-mystic-300/40 backdrop-blur-sm border border-white/50 rounded-full shadow-lg"
        animate={isPlaying ? phase : 'idle'}
        variants={variants}
        initial="idle"
      />
    </div>
  );
}