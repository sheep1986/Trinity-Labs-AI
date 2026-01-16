import React from 'react';

/**
 * The core visual symbol for the Trinity AI Agent.
 * Handles pulsing states based on volume and active status.
 */
export const TrinitySymbol = ({ active = false, userSpeaking = false, vol = 0 }: { active?: boolean; userSpeaking?: boolean; vol?: number }) => (
  <div
    className="relative flex items-center justify-center transition-all duration-75 ease-out w-full h-full"
    style={{ transform: `scale(${1 + (vol * 0.35)})` }}
  >
    {active && (
      <div className={`absolute inset-0 blur-[30px] rounded-full animate-pulse-soft transition-all duration-300 scale-125 ${userSpeaking
        ? 'bg-blue-500/30'
        : 'bg-green-500/30'
        }`} />
    )}
    <img
      src="https://i.ibb.co/x4XLWHH/Trinity-Symbol.png"
      alt="Trinity Symbol"
      className={`relative w-[80%] h-[80%] object-contain transition-all duration-150 ${active ? 'brightness-125' : 'opacity-60 brightness-75'
        } ${userSpeaking ? 'drop-shadow-[0_0_10px_#3b82f6]' : 'drop-shadow-[0_0_10px_#22c55e]'}`}
    />
  </div>
);
