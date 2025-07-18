import BottomHero from "@/components/home/bottom-hero";


import Hero from "@/components/home/hero";

import WorkExperience from "@/components/home/work-experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atharva Mhaske",
  description: "Created by atharva ",
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen mx-auto container">
        {/* <AppleHelloEnglishEffect className="" /> */}
        <Hero />
        <WorkExperience />
        <BottomHero />
      
      </main>
    </>
  );
}
