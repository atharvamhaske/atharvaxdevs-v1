"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

import Clock from "../root/Clock";

import RevealText from "./RevealText";
import RevealTopText from "./RevealTopText";

export default function Hero() {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Enhanced Background Texture */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--primary-rgb) 1px, transparent 1px),
              linear-gradient(to bottom, var(--primary-rgb) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Diagonal Lines */}
        <div
          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, var(--primary-rgb), var(--primary-rgb) 1px, transparent 1px, transparent 20px)`,
          }}
        />

        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

        {/* Decorative Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold bg-gradient-to-bl  bg-clip-text dark:text-white text-black"
            variants={item}
          >
            <RevealTopText /> <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r dark:from-teal-100 dark:via-cyan-200 dark:to-emerald-300 bg-clip-text dark:text-transparent text-black relative">
             I Break & build things...
              <span className="absolute -bottom-4 left-0 right-0 h-1 bg-black dark:bg-gray-100 rounded-full"></span>
            </span>
          </motion.h1>

          {/* Brief Description */}
          <motion.p
            className="max-w-[700px] text-m md:text-m font-mono !text-gray-400 dark:text-lime-50 mt-4 ml-8"
            variants={item}
          >
            Hey, I&apos;m Atharva a passionate  full-stack developer who thrives on building meaningful & useful web apps. I love turning bold ideas into real-world solutions currently building SaaS platforms. 
            <br />
            Have an idea or want to build something ? DMs are always open!
          </motion.p>

          {/* Tagline */}
          <motion.div variants={item}>
            <RevealText />
          </motion.div>

          {/* CTA Buttons */}
          {/* <motion.div
            className="flex flex-col sm:flex-row gap-8 mt-2"
            variants={item}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects">View My Work</Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full px-8"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div> */}

          {/* Social Links */}
          <div className="flex space-x-4 mt-[-25px] py-2">
            <a
              href="https://github.com/atharvamhaske"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors transform transition-transform duration-200 hover:-translate-y-2"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com/in/atharvaxdevs"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors transform transition-transform duration-200 hover:-translate-y-2"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                LinkedIn
              </span>
            </a>
            <a
              href="https://twitter.com/AtharvaXDevs"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group p-4 rounded-full bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-muted/80 transition-colors transform transition-transform duration-200 hover:-translate-y-2"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                Twitter
              </span>
            </a>
          </div>

          {/* Clock in the center */}
          <div className="flex-1 flex justify-center mt-[-12px] ">
            <Clock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
