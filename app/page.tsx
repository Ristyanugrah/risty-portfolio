
"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certificates from "@/components/sections/Certificates";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillSelect = (skill: string) => {
    setSelectedSkill((current) =>
      current === skill ? null : skill
    );
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />

      <Hero />
      <About />

      <Skills
        selectedSkill={selectedSkill}
        onSkillSelect={handleSkillSelect}
      />

      <Experience />

      <Projects
        selectedSkill={selectedSkill}
        onClearFilter={() => setSelectedSkill(null)}
      />

      <Certificates />
      <Contact />

      <Footer />
      <BackToTop />
    </>
  );
}
