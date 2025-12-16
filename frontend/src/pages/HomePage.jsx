import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ContributionSection from "@/components/sections/ContributionSection";
import EducationSection from "@/components/sections/EducationSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import React from "react";

const HomePage = () => {
  return (
    <div className="">
      <Header />
      <main className="max-w-4xl mx-auto min-h-svh p-4 space-y-20">
        <HeroSection />
        <ContributionSection />
        <AboutSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default HomePage;
