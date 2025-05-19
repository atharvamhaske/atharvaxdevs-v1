"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, Github, LinkIcon } from "lucide-react";
import { projectsData } from "@/utilities/data";

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const viewitem = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-25 px-5 lg:px-0">
      <div className="container mx-auto">
        <div className="mb-12">
          <Button
            asChild
            variant="ghost"
            className="mb-6 scale-transition -ml-3"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Projects</h1>
          <p
            className="text-muted-foreground max-w-2xl "
            style={{ animationDelay: "200ms" }}
          >
            A collection of my work across various domains, technologies, and
            platforms. Click on any project to learn more about it.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.slug + index}
              variants={viewitem}
              className="bg-card rounded-lg overflow-hidden shadow-sm"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block h-48 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>

              <div className="p-6">
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="font-bold text-lg mb-2 hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary dark:bg-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-medium hover-underline"
                  >
                    View Details
                  </Link>

                  <div className="flex space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Visit live site"
                      >
                        <LinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
