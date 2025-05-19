"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Github, Link2 } from "lucide-react";
import { ProjectItem } from "@/utilities/data";
import { motion } from "motion/react";

const ProjectDetail = ({ project }: { project: ProjectItem }) => {
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
    <motion.section
      className="py-25 px-5 lg:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="container mx-auto">
        <Button asChild variant="ghost" className="mb-6 -ml-3">
          <Link href="/projects">
            <span className="flex items-center gap-2">
              <ArrowLeft />
              Back to Projects
            </span>
          </Link>
        </Button>
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={viewitem}
        >
          {project.title}
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground mb-8 max-w-2xl"
          variants={viewitem}
        >
          {project.description}
        </motion.p>
        <motion.div className="flex flex-wrap gap-3 mb-8" variants={viewitem}>
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary dark:bg-accent text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>
        <motion.div className="flex flex-wrap gap-4 mb-12" variants={viewitem}>
          {project.github && (
            <Button asChild variant="outline" className="gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* GitHub icon */}
                GitHub Repository
              </Link>
            </Button>
          )}
          {project.live && (
            <Button asChild className="gap-2">
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Link icon */}
                Visit Live Site
              </Link>
            </Button>
          )}
        </motion.div>
        {project.images?.length ? (
          <motion.div className="mb-12" variants={viewitem}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${
                    idx === 0 ? "md:col-span-2" : ""
                  } rounded-lg overflow-hidden shadow-sm`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    width={800}
                    height={600}
                    className="object-cover aspect-video w-full h-[500px]"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ) : null}
        <motion.div
          className="prose dark:prose-invert max-w-none"
          variants={viewitem}
        >
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          {project.longDescription?.split("\n\n").map((para, i) => (
            <p key={i} className="mb-4">
              {para}
            </p>
          ))}

          {project.features?.length ? (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </>
          ) : null}

          {project.challenges ? (
            <>
              <h2 className="text-2xl font-bold mt-8 mb-4">
                Challenges & Solutions
              </h2>
              <p>{project.challenges}</p>
            </>
          ) : null}
        </motion.div>
        <Separator className="my-12" />
        <div className="flex justify-between items-center">
          <Button asChild variant="ghost">
            <Link href="/projects">
              <span className="flex items-center gap-2">
                {/* ArrowLeft icon */}
                <ArrowLeft />
                Back to Projects
              </span>
            </Link>
          </Button>

          <div className="flex space-x-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repo"
              >
                {/* GitHub icon SVG */}
                <Github />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
              >
                <Link2 />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ProjectDetail;
