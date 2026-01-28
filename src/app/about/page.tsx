import {
  AboutHeroSection,
  AboutStackSection,
  AboutExperienceSection,
} from "@/components/about";

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <AboutHeroSection />
      <AboutStackSection />
      <AboutExperienceSection />
    </div>
  );
}