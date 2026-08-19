import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import FlagshipTeaser from "@/components/FlagshipTeaser";
import AboutSection from "@/components/AboutSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FlagshipTeaser />
      <AboutSection />
      <ContactCTA />
    </>
  );
}
