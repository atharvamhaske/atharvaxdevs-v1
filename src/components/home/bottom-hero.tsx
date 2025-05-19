"use client";

import {
  SiJavascript, SiTailwindcss, SiReact, SiNodedotjs,
  SiExpress, SiTypescript, SiMongodb, SiNextdotjs, SiFramer, SiPrisma,
  SiAmazon, SiCloudflare, SiRedis, SiPostgresql, SiFirebase, SiRust, SiLinux, SiSupabase,  SiReactrouter
} from "react-icons/si";

const techStacks = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={25} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" size={25} /> },
  { name: "React", icon: <SiReact color="#61DAFB" size={25} /> },
  { name: "Node.js", icon: <SiNodedotjs color="#3C873A" size={25} /> },
  { name: "Express.js", icon: <SiExpress color="#fff" size={25} style={{ background: "#222", borderRadius: 8, padding: 2 }} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={25} /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" size={25} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#fff" size={25} style={{ background: "#222", borderRadius: 14, padding: 2 }} /> },
  { name: "Framer", icon: <SiFramer color="#0055FF" size={25} /> },
  { name: "Prisma", icon: <SiPrisma color="#2D3748" size={25} /> },
  { name: "AWS", icon: <SiAmazon color="#FF9900" size={25} /> },
  { name: "Cloudflare", icon: <SiCloudflare color="#F38020" size={25} /> },
  { name: "Redis", icon: <SiRedis color="#DC382D" size={25} /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={25} /> },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={25} /> },
  { name: "Rust", icon: <SiRust color="#dea584" size={25} /> },
  { name: "Linux", icon: <SiLinux color="#FCC624" size={25} /> },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" size={25} /> },
  // No official React Native icon in react-icons/si, using React Router as placeholder
  { name: "React Native", icon: <SiReactrouter color="#61DAFB" size={25} /> },
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
          <div className="relative overflow-x-hidden w-full  m-0 scrollbar-hide z-20 px-8 py-6">
            <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
              <div className="w-full h-full bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent blur-2xl" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center items-center relative z-10">
              {techStacks.map((tech, idx) => (
                <div
                  key={tech.name + idx}
                  className="flex items-center gap-2 px-2 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-zinc-800/50 min-w-[56px] justify-center"
                  style={{ minHeight: 48 }}
                >
                  {tech.icon}
                  <span className="font-semibold text-md whitespace-nowrap text-white">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
