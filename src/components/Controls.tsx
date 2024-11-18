import { Pause, Play, RefreshCw } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  cycles: number;
}

export function Controls({ isPlaying, onTogglePlay, onReset, cycles }: ControlsProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <button
          onClick={onTogglePlay}
          className="bg-gradient-to-br from-dawn-400/80 to-mystic-400/80 backdrop-blur-sm text-white p-4 rounded-full hover:from-dawn-500/80 hover:to-mystic-500/80 transition-all hover:shadow-lg border border-white/20"
          aria-label={isPlaying ? 'Pause breathing exercise' : 'Start breathing exercise'}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button
          onClick={onReset}
          className="bg-white/30 backdrop-blur-sm p-4 rounded-full hover:bg-white/40 transition-all hover:shadow-lg border border-white/20"
          aria-label="Reset breathing exercise"
        >
          <RefreshCw size={24} className="text-mystic-600" />
        </button>
      </div>
      <div className="text-mystic-800 text-base font-light tracking-wide">
        Completed cycles: <span className="font-medium">{cycles}</span>
      </div>
    </div>
  );
}