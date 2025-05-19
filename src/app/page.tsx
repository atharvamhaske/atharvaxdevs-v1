import BottomHero from "@/components/home/bottom-hero";
import ContactSection from "@/components/home/contact-section";
import Hero from "@/components/home/hero";

import WorkExperience from "@/components/home/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharva Mhaske",
  description: "Portfolio home page for Atharva Mhaske, created by devsloka.in",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen mx-auto container">
        <Hero />
        <WorkExperience />
        <BottomHero />
        <ContactSection />
      </main>
    </>
  );
}
