import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import CertificateGallery from "@/components/CertificateGallery";

export const metadata: Metadata = {
  title: "About — MJ Ablanque",
  description:
    "BS Accountancy background, corporate Order-to-Cash and Accounts Payable experience, e-commerce operations, and AI automation engineering — the business experience behind the systems.",
};

export default function AboutPage() {
  return (
    <div className="pt-10">
      <AboutSection />
      <CertificateGallery />
    </div>
  );
}
