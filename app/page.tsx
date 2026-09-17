import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import FeaturedSystems from "@/components/FeaturedSystems";
import ServicesGrid from "@/components/ServicesGrid";
import AboutTeaser from "@/components/AboutTeaser";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedSystems />
      <ServicesGrid />
      <AboutTeaser />
      <ContactCTA />
    </>
  );
}
