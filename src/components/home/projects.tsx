"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Project data
const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with cart functionality, user authentication, and payment processing.",
    image:
      "https://images.unsplash.com/photo-1746311372686-e164b0bcb333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team functionality.",
    image:
      "https://images.unsplash.com/photo-1746311372686-e164b0bcb333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A customizable portfolio template for developers to showcase their work and skills.",
    image:
      "https://images.unsplash.com/photo-1746311372686-e164b0bcb333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="max-w-[700px] mx-auto text-muted-foreground">
              A selection of my recent work. Each project is unique and solves
              specific problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all h-full"
      whileHover={{ y: -5 }}
    >
      {/* Creative card design with diagonal split */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 z-0" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-tr-[50px] z-0" />

      {/* Project Image with creative overlay */}
      <div className="aspect-video overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform"
          />
        </motion.div>

        {/* Floating badge */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium z-20 border">
          {project.tags[0]}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4 relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <motion.div
            className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
            whileHover={{ rotate: 360 }}
          >
            <ExternalLink className="h-4 w-4" />
          </motion.div>
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(1).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-background border-primary/20 flex items-center gap-1"
            >
              <Code className="h-3 w-3" />
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-4 w-4 mr-1" />
              GitHub
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>

      {/* View Details Link */}
      <Link href={`/projects/${project.id}`} className="absolute inset-0">
        <span className="sr-only">View {project.title} details</span>
      </Link>
    </motion.div>
  );
}
