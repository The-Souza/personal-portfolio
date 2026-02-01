"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section/SectionHeader";
import { Briefcase, Mail } from "lucide-react";

export function CallToActionSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader title={t("cta.title")} subtitle={t("cta.description")} />

      <div className="z-1 flex justify-center gap-4">
        <Button asChild>
          <Link
            href="/contact"
            className="hover:scale-105 transition-transform active:scale-[0.97]"
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("cta.primary")}
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link
            href="/projects"
            className="hover:scale-105 transition-transform active:scale-[0.97]"
          >
            <Briefcase className="mr-2 h-4 w-4" />
            {t("viewProjects")}
          </Link>
        </Button>
      </div>
    </section>
  );
}
