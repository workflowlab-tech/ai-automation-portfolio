import Hero from "@/components/Hero";
import FlagshipTeaser from "@/components/FlagshipTeaser";
import ProjectsPreview from "@/components/ProjectsPreview";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FlagshipTeaser />
      <ProjectsPreview />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
