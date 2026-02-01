"use client";

import { Palette, Code, Rocket } from "lucide-react";

const stages = [
  { id: "design", label: "Design", icon: Palette },
  { id: "dev", label: "Dev", icon: Code },
  { id: "launch", label: "Launch", icon: Rocket },
];

// Example: show first two stages complete (user can replace with real project state)
const currentStageIndex = 1;

export default function ProjectProgress() {
  return (
    <section className="glass rounded-2xl p-6 border border-white/10" aria-labelledby="progress-heading">
      <h2 id="progress-heading" className="text-lg font-semibold text-white mb-6">
        Project progress
      </h2>
      <div className="flex items-center justify-between gap-2">
        {stages.map((stage, i) => {
          const isComplete = i < currentStageIndex;
          const isCurrent = i === currentStageIndex;
          const Icon = stage.icon;
          return (
            <div key={stage.id} className="flex flex-1 items-center">
              <div
                className={`flex flex-col items-center gap-2 flex-1 ${
                  isComplete ? "text-emerald-400" : isCurrent ? "text-white" : "text-white/40"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                    isComplete
                      ? "bg-emerald-500/20 border-emerald-400"
                      : isCurrent
                        ? "bg-white/10 border-white"
                        : "border-white/20"
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden />
                </div>
                <span className="text-sm font-medium">{stage.label}</span>
              </div>
              {i < stages.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-1 rounded-full ${
                    isComplete ? "bg-emerald-500/50" : "bg-white/10"
                  }`}
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
