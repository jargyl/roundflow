import { useState, useEffect } from "react";
import { BreathingAnimation } from "./components/BreathingAnimation";
import { Controls } from "./components/Controls";
import { Instructions } from "./components/Instructions";
import { PhaseIndicator } from "./components/PhaseIndicator";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isPlaying) {
      if (phase === "idle") {
        setPhase("inhale");
      }

      interval = setInterval(() => {
        setTimer((prev) => {
          const newTimer = prev + 1;

          if (newTimer >= 4) {
            const phases = ["inhale", "holdIn", "exhale", "holdOut"];
            const currentPhaseIndex = phases.indexOf(phase);
            const nextPhaseIndex = (currentPhaseIndex + 1) % phases.length;

            if (nextPhaseIndex === 0) {
              setCycles((prev) => prev + 1);
            }

            setPhase(phases[nextPhaseIndex]);
            return 0;
          }

          return newTimer;
        });

        setProgress((prev) => (prev + 0.25) % 1);
      }, 1000);
    } else {
      setPhase("idle");
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, phase]);

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setPhase("idle");
    setProgress(0);
    setTimer(0);
    setCycles(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-mystic-100 via-dawn-100 to-mystic-200 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80')] opacity-5 bg-cover bg-center fixed" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-dawn-200/20 rounded-full filter blur-3xl animate-float" />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-mystic-200/20 rounded-full filter blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <main className="container mx-auto px-4 py-6 relative min-h-screen">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="flex justify-center mb-8 md:mb-16">
            <img src="./logo.svg" alt="Logo" className="h-12" />
          </div>
          {/* Main breathing interface */}
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-xl border border-white/20 px-6 py-6">
            <h1 className="text-2xl font-light tracking-wide text-mystic-800 text-center mb-4">
              Box Breathing
            </h1>
            <div className="flex flex-col items-center gap-4">
              <PhaseIndicator phase={phase} />

              <div className="relative w-full aspect-square max-w-[16rem]">
                <BreathingAnimation
                  isPlaying={isPlaying}
                  phase={phase}
                  progress={progress}
                />
              </div>

              <Controls
                isPlaying={isPlaying}
                onTogglePlay={handleTogglePlay}
                onReset={handleReset}
                cycles={cycles}
              />
            </div>
          </div>

          <div className="relative">
            <Instructions
              showInstructions={showInstructions}
              onToggle={() => setShowInstructions(!showInstructions)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
