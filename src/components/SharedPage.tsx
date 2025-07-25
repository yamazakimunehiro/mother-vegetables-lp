// src/components/SharedPage.tsx
import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import FeatureSection from "@/components/FeatureSection";
import TestimonialSection from "@/components/TestimonialSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function SharedPage({ productSection }: { productSection: ReactNode }) {
  return (
    <>
      <HeroSection />
      <ConceptSection />
      <FeatureSection />
      <TestimonialSection />
      {productSection}
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </>
  );
}
