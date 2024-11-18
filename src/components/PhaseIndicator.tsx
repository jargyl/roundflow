interface PhaseIndicatorProps {
  phase: string;
}

export function PhaseIndicator({ phase }: PhaseIndicatorProps) {
  const getPhaseText = () => {
    switch (phase) {
      case 'idle':
        return 'Press play to begin...';
      case 'inhale':
        return 'Inhale slowly...';
      case 'holdIn':
        return 'Hold your breath...';
      case 'exhale':
        return 'Exhale slowly...';
      case 'holdOut':
        return 'Hold...';
      default:
        return 'Get ready...';
    }
  };

  return (
    <div 
      className="text-xl font-light text-mystic-800 text-center min-h-[1.5em] tracking-wider"
      role="status"
      aria-live="polite"
    >
      {getPhaseText()}
    </div>
  );
}