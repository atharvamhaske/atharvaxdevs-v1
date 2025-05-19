"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loader from "@/components/ui/Loader";

// Project data (expanded from the featured projects)
const allProjects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with cart functionality, user authentication, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "task-management",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A customizable portfolio template for developers to showcase their work and skills.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: "weather-app",
    title: "Weather Application",
    description:
      "A weather forecast application with location detection and detailed weather information.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "recipe-finder",
    title: "Recipe Finder",
    description:
      "A recipe search application with filtering options and step-by-step instructions.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Vue.js", "Vuex", "SCSS", "Food API"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description:
      "A full-featured blog platform with markdown support and user authentication.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description:
      "A fitness tracking application with workout plans and progress visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React Native", "Firebase", "Chart.js"],
    github: "https://github.com",
    featured: false,
  },
  {
    id: "music-player",
    title: "Music Player",
    description:
      "A web-based music player with playlist management and audio visualization.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "Web Audio API", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    id: "chat-application",
    title: "Chat Application",
    description:
      "A real-time chat application with private messaging and group chat functionality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    featured: false,
  },
];

// Extract all unique tags
const allTags = [...new Set(allProjects.flatMap((project) => project.tags))];

export default function ProjectsGrid() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader text="loading projects data..." />;

  // Filter projects based on selected tags
  const filteredProjects =
    selectedTags.length > 0
      ? allProjects.filter((project) =>
          project.tags.some((tag) => selectedTags.includes(tag))
        )
      : allProjects;

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Showing {filteredProjects.length} of {allProjects.length} projects
        </p>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filter by Technology
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {allTags.map((tag) => (
              <DropdownMenuCheckboxItem
                key={tag}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
              >
                {tag}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              layout
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-muted-foreground">
            No projects match your filter criteria.
          </p>
          <Button
            variant="link"
            onClick={() => setSelectedTags([])}
            className="mt-2"
          >
            Clear filters
          </Button>
        </motion.div>
      )}
    </div>
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
  featured: boolean;
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
            whileHover={{ rotate: 90 }}
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
