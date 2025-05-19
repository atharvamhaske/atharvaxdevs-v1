"use client";
import { useEffect, useState } from "react";
import { Hourglass, Globe } from "lucide-react";

export default function Clock({ className = "", showLocation = true }: { className?: string, showLocation?: boolean }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS IST
  const formatted = time
    .toLocaleTimeString("en-IN", { hour12: false, timeZone: "Asia/Kolkata" });

  return (
    <div className={`flex items-center gap-3 font-mono ${className}`}>
      <Hourglass
        size={28}
        className="clock-icon text-black dark:text-white"
        strokeWidth={2.5}
      />
      <span className="font-bold text-black dark:text-white">{formatted} <span className="text-base font-normal">IST</span></span>
      {showLocation && (
        <span className="flex items-center gap-1 ml-4 font-bold text-black dark:text-white">
          <Globe size={18} className="inline-block mb-0.5" />
          Pune,India
        </span>
      )}
    </div>
  );
} 