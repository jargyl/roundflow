import { ChevronDown, ChevronUp } from "lucide-react";

interface InstructionsProps {
  showInstructions: boolean;
  onToggle: () => void;
}

export function Instructions({
  showInstructions,
  onToggle,
}: InstructionsProps) {
  return (
    <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-xl border border-white/20 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-8 py-4 flex items-center justify-between text-mystic-800 hover:text-mystic-900 transition-colors"
      >
        <h2 className="text-2xl font-light tracking-wide">
          Box Breathing Technique
        </h2>
        {showInstructions ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>

      <div
        className={`overflow-y-auto transition-all duration-300 ${
          showInstructions
            ? "max-h-[calc(100vh-20rem)] md:max-h-[calc(100vh-4rem)]"
            : "max-h-0"
        }`}
      >
        <div className="px-8 pb-8 border-t border-white/20">
          <div className="space-y-6 pt-6">
            <div>
              <h3 className="text-lg font-medium mb-3 text-mystic-800">
                What is Box Breathing?
              </h3>
              <p className="text-mystic-700 leading-relaxed">
                Box breathing, also known as square breathing, is a powerful
                stress-relief technique used by everyone from athletes to Navy
                SEALs. It involves breathing in a pattern that creates a square:
                inhale, hold, exhale, hold - each for the same duration.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-mystic-800">
                Benefits
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Reduces stress and anxiety",
                  "Improves concentration and focus",
                  "Helps regulate emotions",
                  "Increases mental clarity",
                  "Can help with better sleep",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white/30 backdrop-blur-sm rounded-xl p-3 text-mystic-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-dawn-400" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3 text-mystic-800">
                How to Practice
              </h3>
              <ol className="space-y-2 text-mystic-700">
                {[
                  "Find a comfortable sitting position",
                  "Inhale slowly through your nose for 4 seconds",
                  "Hold your breath for 4 seconds",
                  "Exhale slowly through your mouth for 4 seconds",
                  "Hold your breath for 4 seconds",
                  "Repeat the cycle",
                ].map((step, index) => (
                  <li
                    key={index}
                    className="flex gap-3 items-center bg-white/20 backdrop-blur-sm rounded-xl p-3"
                  >
                    <span className="font-medium text-dawn-500 w-6">
                      {index + 1}.
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
