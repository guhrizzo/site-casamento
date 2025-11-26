"use client";

import { useState, useEffect } from "react";

export default function ContadorAnoNovo() {
  const [timeLeft, setTimeLeft] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2026-01-10T17:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setFinished(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const box =
    "flex flex-col items-center bg-white/10 backdrop-blur-xl px-6 py-4 rounded-xl shadow-lg border border-white/20";

  if (finished) {
    return (
      <div className="w-full flex flex-col items-center mt-10 text-white">
        <h2 className="text-5xl font-bold tracking-widest animate-pulse">
          Chegou o grande dia!
        </h2>
      </div>
    );
  }

  return (
    <div className="lg:w-full flex flex-col items-center mt-10 bg-[#ffffff15] p-4 rounded-2xl backdrop-blur-2xl w-[92dvw]">
      <h2 className="lg:text-xl font-bold text-white lg:mb-6  mb-4">
        Contagem regressiva para o casamento!
      </h2>

      <div className="flex gap-4 text-white text-center lg:scale-100 scale-95">
        <div className={`${box} `}>
          <p className="lg:text-5xl font-bold">{timeLeft.days}</p>
          <span className="uppercase text-sm opacity-80">Dias</span>
        </div>

        <div className={`${box} `}>
          <p className="lg:text-5xl font-bold">{timeLeft.hours}</p>
          <span className="uppercase text-sm opacity-80">Horas</span>
        </div>

        <div className={`${box} `}>
          <p className="lg:text-5xl font-bold">{timeLeft.minutes}</p>
          <span className="uppercase text-sm opacity-80">Min</span>
        </div>

        <div className={`${box} `}>
          <p className="lg:text-5xl font-bold">{timeLeft.seconds}</p>
          <span className="uppercase text-sm opacity-80">Seg</span>
        </div>
      </div>
    </div>
  );
}
