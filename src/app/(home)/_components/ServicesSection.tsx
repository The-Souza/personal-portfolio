"use client";

import MagicBento from "@/components/effects/MagicBento";
import { SectionHeader } from "@/components/section/SectionHeader";
import { useTranslation } from "react-i18next";
import { services } from "@/constants/service-data";

export function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-10">
      <SectionHeader
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <MagicBento
        items={services.map((service) => ({
          titleKey: t(service.titleKey),
          labelKey: service.labelKey ? t(service.labelKey) : undefined,
          descriptionKey: t(service.descriptionKey),
          icon: service.icon,
        }))}
        enableSpotlight
        enableBorderGlow
        enableStars
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        glowColor="132, 0, 255"
        textAutoHide
      />
    </section>
  );
}
