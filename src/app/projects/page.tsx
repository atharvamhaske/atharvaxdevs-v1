import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Atharva Mhaske",
  description: "Projects and work experience of Atharva Mhaske, created by devsloka.in",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
} 