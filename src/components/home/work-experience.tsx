"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  
  Code,
  Calendar,
  Building,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Work experience data
const experiences = [
  {
    id: 1,
    title: "eHealthWave",
    company: "Hackathon Project",
    
    period: "April 2025",
    skills: ["React", "TypeScript", "Python", "Next.Js", "Node.Js", "Tailwind CSS", "Framer Motion", "APIs", "Metamask"],
    description:
      "Web app which connects doctors and patients which makes all Paper work to almost zero, Secure user authentication using blockchain and profile management. Use of On-chain  using HyperLedger Fabric.",
    repoUrl: "https://github.com/atharvamhaske/eHealthWave"
  },

  {
    id: 2,
    title: "Fun CLI Portfolio",
    company: "Personal Project",
   
    period: "2025",
    skills: [ "JavaScript", "NodeJs", "Chalk", "Bash",  "zShell", "npm package", ],
    description:
     "A beautiful terminal-based portfolio with interactive menu, built with Node.js, Package available on npm packages named atharva-portfolio-cli,.",
    repoUrl: "https://github.com/atharvamhaske/atharva-portfolio-cli"
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="py-16 md:py-25 relative overflow-hidden">
      {/* Background Elements */}

      <div className="container px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-5xl">
              Work Experience
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A timeline of my learning journey and the Projects I&apos;ve
              developed along the way.
            </p>
          </div>

          {/* Experience Cards - Completely Redesigned */}
          <div className="max-w-4xl mx-auto space-y-12 bg-pri">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: isInView ? index * 0.7 : 0,
                }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-[18px] top-0 lg:left-[39px] lg:top-0 bottom-[-48px] w-0.5 bg-gradient-to-b from-primary/80 to-primary/10 z-0" />
                )}

                <div className="flex gap-6">
                  {/* Timeline Icon */}
                  <div className="relative">
                    <div className=" w-10 h-10 lg:w-20 lg:h-20 rounded-2xl bg-background border-2 border-primary/20 shadow-md flex items-center justify-center z-10 relative">
                      <Briefcase className="h-4 w-4 lg:h-8 lg:w-8 text-primary" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <div className="bg-background rounded-2xl border shadow-md overflow-hidden">
                      {/* Header Section */}
                      <div className="bg-primary/5 p-6 border-b">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <div className="flex items-center text-muted-foreground mt-1">
                              <Building className="h-4 w-4 mr-1.5" />
                              <span>{exp.company}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full border">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{exp.period}</span>
                            <span className=""></span>
                           
                            
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 space-y-4">
                        <p className="text-sm">{exp.description}</p>
                        {/* Terminal command for Fun CLI Portfolio */}
                        {exp.title === "Fun CLI Portfolio" && (
                          <div
                            style={{
                              fontFamily: '"Fira Mono", "Consolas", "Menlo", monospace',
                              background: '#18181b',
                              color: '#b6faff',
                              padding: '0.5rem 1rem',
                              borderRadius: '0.5rem',
                              marginTop: '0.5rem',
                              display: 'inline-block',
                              fontSize: '1.1rem',
                            }}
                          >
                            <span style={{ color: '#ff3c3c', marginRight: '0.5rem' }}>$</span>npx atharva-porfolio-cli
                          </div>
                        )}

                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Code className="h-3.5 w-3.5 mr-1.5" />
                            Technologies & Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="outline"
                                className="bg-background border-primary/20 flex items-center gap-1 rounded-full"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements Button - Could link to detailed view */}
                        <div className="pt-2">
                          <motion.a
                            href={exp.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary flex items-center hover:underline"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Repo
                            <ArrowRight className="h-3.5 w-3.5 ml-1" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
