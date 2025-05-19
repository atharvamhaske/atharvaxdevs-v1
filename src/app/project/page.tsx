import WorkExperience from "@/components/home/work-experience";
import Loader from "@/components/ui/Loader";
import { useEffect, useState } from "react";

export default function ProjectPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader text="loading projects data..." />;
  return <WorkExperience />;
} 