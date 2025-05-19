"use client";
import { useEffect, useState } from "react";

const lines = [
  ["Talk is cheap lemme ", "code", " instead"],
  ["Manifesting success via", "npm install", ""],
  ["I dream in ", "TSX", " and roam in ", "NextJs", ""]
];

export default function RevealText() {
  const [lineIdx, setLineIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const currentLine = lines[lineIdx];
    const lineStr = Array.isArray(currentLine) ? currentLine.join("") : currentLine;
    if (charIdx < lineStr.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + lineStr[charIdx]);
        setCharIdx((prev) => prev + 1);
      }, 40);
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

  // Custom render for lines with styled spans (like 'npm install', 'TSX', 'NextJs')
  if (Array.isArray(lines[lineIdx])) {
    const segments = lines[lineIdx];
    // Find which segment the charIdx is in
    let acc = 0;
    let rendered = [];
    let found = false;
    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      const nextAcc = acc + seg.length;
      if (!found && charIdx <= nextAcc) {
        // This is the segment being typed
        if (i % 2 === 1) {
          // styled segment
          rendered.push(
            <span key={i} className="font-mono text-gray-00 opacity-60 dark:text-white px-2 py-0.5 mx-1 inline-block align-middle">
              {seg.slice(0, charIdx - acc)}
            </span>
          );
        } else {
          rendered.push(seg.slice(0, charIdx - acc));
        }
        found = true;
      } else if (charIdx > nextAcc) {
        // Fully revealed segment
        if (i % 2 === 1) {
          rendered.push(
            <span key={i} className="font-mono text-gray-800 opacity-60 dark:text-white px-2 py-0.5 mx-1 inline-block align-middle">
              {seg}
            </span>
          );
        } else {
          rendered.push(seg);
        }
      }
      acc = nextAcc;
    }
    return (
      <span className="text-xl font-['Anton'] tracking-wider px-6 py-6 rounded-full text-gray-800 opacity-60 dark:text-white drop-shadow-red-50 min-h-[2.5rem] inline-block">
        {rendered}
        <span className="animate-pulse">|</span>
      </span>
    );
  }
  return (
    <span className="text-xl font-['Anton'] tracking-wider px-6 py-6 rounded-full text-gray-800 opacity-60 dark:text-white drop-shadow-red-50 min-h-[2.5rem] inline-block">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
} 