import { HeroSection } from "@/components/marketing/HeroSection";
import { AboutSection } from "@/components/marketing/AboutSection";
import { ServicesGrid } from "@/components/marketing/ServicesGrid";
import { ProjectsShowcase } from "@/components/marketing/ProjectsShowcase";
import { FinalCTA } from "@/components/marketing/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesGrid />
      <ProjectsShowcase />
      <FinalCTA />
    </>
  );
}
