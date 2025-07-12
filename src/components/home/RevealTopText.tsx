"use client";
import { useEffect, useState } from "react";

const lines = [

  "100xLearner",
  "AtharvaXDevs"
];

export default function RevealTopText() {
  const [lineIdx, setLineIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (charIdx < lines[lineIdx].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + lines[lineIdx][charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIdx(0);
        setDisplayed("");
        setLineIdx((prev) => (prev + 1) % lines.length);
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, lineIdx]);

  return (
    <span className="inline-block">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
} 