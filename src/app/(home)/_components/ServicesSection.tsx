"use client";

import { SectionHeader } from "@/components/section/SectionHeader";
import { BlurFade } from "@/components/effects/blur-fade";
import { GlassCard } from "@/components/ui/glass-card";
import { services } from "@/constants/service-data";
import { useTranslation } from "react-i18next";

export function ServicesSection() {
  const { t } = useTranslation();
  const primaryServices = services.filter((service) => service.primary);
  const secondaryServices = services.filter((service) => !service.primary);

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-10">
      <SectionHeader
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />

      <div className="w-full max-w-3xl flex flex-col gap-3">
        <ul className="flex flex-col gap-3">
          {primaryServices.map((service, i) => (
            <li key={service.titleKey}>
              <GlassCard className="p-5 sm:p-6 border border-primary/25">
                <BlurFade
                  inView
                  delay={0.05 + i * 0.05}
                  className="group flex items-start gap-5"
                >
                  <service.icon className="w-8 h-8 shrink-0 mt-1 text-primary transition-transform duration-300 group-hover:scale-110" />

                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-heading text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                        {t(service.titleKey)}
                      </h3>
                      {service.labelKey && (
                        <span className="text-xs text-muted-foreground">
                          {t(service.labelKey)}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-prose">
                      {t(service.descriptionKey)}
                    </p>
                  </div>
                </BlurFade>
              </GlassCard>
            </li>
          ))}
        </ul>

        {secondaryServices.length > 0 && (
          <GlassCard className="p-4 sm:p-5">
            <BlurFade inView delay={0.05 + primaryServices.length * 0.05}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {secondaryServices.map((service) => (
                  <li
                    key={service.titleKey}
                    className="group flex items-start gap-3"
                  >
                    <service.icon className="w-4 h-4 shrink-0 mt-0.5 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-sm font-semibold transition-colors duration-300 group-hover:text-primary">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t(service.descriptionKey)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </GlassCard>
        )}
      </div>
    </section>
  );
}
