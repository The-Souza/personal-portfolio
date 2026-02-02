import type { Metadata } from "next";
import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  FeaturedProjectsSection,
  CallToActionSection,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Guilherme Campos | Frontend Developer",
  description:
    "Frontend Developer especializado em React, Next.js e TypeScript. Portfólio com projetos, serviços e contato.",
};

export default function HomePage() {
  return (
    <div className="w-full max-w-6xl flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <CallToActionSection />
    </div>
  );
}
