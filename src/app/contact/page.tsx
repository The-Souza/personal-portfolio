import { ContactSection } from "@/components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com Guilherme Campos para oportunidades como Frontend Developer, projetos freelancers ou parcerias.",
};

export default function ContactPage() {
  return (
    <section className="w-full max-w-6xl flex flex-col flex-1 gap-14 md:gap-20 items-center">
      <ContactSection />
    </section>
  );
}
