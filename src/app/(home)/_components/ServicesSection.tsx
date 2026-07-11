"use client";

import MagicBento from "@/components/effects/MagicBento";
import { SectionHeader } from "@/components/section/SectionHeader";
import { useTranslation } from "react-i18next";
import { services } from "@/constants/service-data";
import { useCssColor } from "@/hooks/use-css-color";

const DEFAULT_GLOW_COLOR = "132, 0, 255";

export function ServicesSection() {
  const { t } = useTranslation();
  const primaryRgb = useCssColor("--primary", `rgb(${DEFAULT_GLOW_COLOR})`);
  const glowColor =
    primaryRgb.match(/\d+/g)?.slice(0, 3).join(", ") ?? DEFAULT_GLOW_COLOR;

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
          featured: service.featured,
        }))}
        enableSpotlight
        enableBorderGlow
        enableStars
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
        glowColor={glowColor}
        textAutoHide
      />
    </section>
  );
}
