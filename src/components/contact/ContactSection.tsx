import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinks } from "@/components/contact/ContactLinks";

export function ContactSection() {
  return (
    <div className="min-h-[80vh] w-full grid grid-cols-1 lg:grid-cols-2 pt-14 sm:pt-20 lg:pt-0 gap-12 items-center justify-between">
      <div className="flex flex-col gap-8">
        <ContactHero />
        <ContactLinks />
      </div>

      <ContactForm />
    </div>
  );
}
