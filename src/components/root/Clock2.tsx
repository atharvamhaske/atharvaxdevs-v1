"use client";
import { useEffect, useState } from "react";
import {  Globe } from "lucide-react";

export default function Clock2({ className = "", showLocation = true }: { className?: string, showLocation?: boolean }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS IST
  const formatted = time
    .toLocaleTimeString("en-IN", { hour12: false, timeZone: "Asia/Kolkata" });

  return (
    <div className={`flex items-center gap-1 md:gap-3 font-mono text-xs md:text-base ${className}`}>
      
      <span className="font-bold text-black dark:text-white">{formatted} <span className="text-[10px] md:text-base font-normal">IST</span></span>
      {showLocation && (
        <span className="flex items-center gap-1 ml-2 md:ml-4 font-bold text-black dark:text-white">
          <Globe size={14} className="inline-block mb-0.5 md:w-[18px] md:h-[18px]" />
          Pune,India
        </span>
      )}
    </div>
  );
} 