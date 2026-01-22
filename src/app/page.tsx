import {
  HeroSection,
  ServicesSection,
  ProcessSection,
  FeaturedProjectsSection,
  CallToActionSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <CallToActionSection />
    </div>
  );
}
