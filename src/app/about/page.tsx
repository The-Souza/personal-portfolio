import {
  AboutHeroSection,
  AboutStackSection,
  AboutExperienceSection,
} from "@/components/about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre mim",
  description:
    "Conheça Guilherme Campos, Frontend Developer especializado em React, Next.js e TypeScript. Experiência, stack e trajetória profissional.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-6xl flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <AboutHeroSection />
      <AboutStackSection />
      <AboutExperienceSection />
    </div>
  );
}
