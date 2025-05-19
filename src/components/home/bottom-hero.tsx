"use client";
import { motion } from "framer-motion";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiTypescript, SiMongodb, SiNextdotjs
} from "react-icons/si";

const techStacks = [
  { name: "HTML", icon: <SiHtml5 color="#E44D26" size={28} /> },
  { name: "CSS", icon: <SiCss3 color="#1572B6" size={28} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={28} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={28} /> },
  { name: "React", icon: <SiReact color="#61DAFB" size={28} /> },
  { name: "Node.js", icon: <SiNodedotjs color="#3C873A" size={28} /> },
  { name: "Express.js", icon: <SiExpress color="#fff" size={28} style={{ background: "#222", borderRadius: 8, padding: 2 }} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={28} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={28} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" size={28} style={{ background: "#222", borderRadius: 14, padding: 2 }} /> },
];

export default function BottomHero() {
  return (
    <section className="py-0 flex justify-center items-center px-5 lg:px-0">
      <div className="container max-w-4xl">
        <div className="text-center m-0">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Tech Stack</h2>
          <p className="text-muted-foreground mb-4">
            The tools and technologies I use to build modern, scalable, and beautiful web applications.
          </p>
        </div>
        {/* Tech Stack Marquee with rounded L-shaped Corners and faint lines */}
        <div className="relative my-6">
          {/* Corners */}
          <span className="techstack-corner tl"><span className="arc"></span></span>
          <span className="techstack-corner tr"><span className="arc"></span></span>
          <span className="techstack-corner bl"><span className="arc"></span></span>
          <span className="techstack-corner br"><span className="arc"></span></span>
          {/* Faint lines */}
          <span className="techstack-line-h"></span>
          <span className="techstack-line-h bottom"></span>
          <span className="techstack-line-v"></span>
          <span className="techstack-line-v right"></span>
          <div className="relative overflow-x-hidden w-full py-0 m-0 scrollbar-hide z-20 px-12 py-10">
            <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent blur-2xl" />
            </div>
            <motion.div
              className="flex gap-12 min-w-max relative z-10"
              animate={{ x: [0, -1000] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 18,
                ease: "linear"
              }}
            >
              {techStacks.concat(techStacks).map((tech, idx) => (
                <div
                  key={tech.name + idx}
                  className="flex items-center gap-2 px-2 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-800/50 min-w-[56px] justify-center hover:scale-105 transition-transform duration-300"
                  style={{ minHeight: 48 }}
                >
                  {tech.icon}
                  <span className="font-bold text-lg whitespace-nowrap text-white">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
