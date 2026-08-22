import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FlagshipTeaser from "@/components/FlagshipTeaser";
import ProjectsPreview from "@/components/ProjectsPreview";
import AboutPreview from "@/components/AboutPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FlagshipTeaser />
      <ProjectsPreview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
