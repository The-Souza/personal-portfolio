import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  FeaturedProjectsSection,
  CallToActionSection,
} from "@/components/home";

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
