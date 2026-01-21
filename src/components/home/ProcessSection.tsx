"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/section/SectionHeader";
import { useTranslation } from "react-i18next";
import { processSteps } from "@/constants/process.data";

export function ProcessSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader
        title={t("process.title")}
        subtitle={t("process.subtitle")}
      />

      <div className="grid w-full justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step) => (
          <Card
            key={step.step}
            className="z-1 h-64 flex flex-col justify-between lg:justify-normal transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary"
          >
            <CardHeader className="gap-3">
              <CardTitle className="flex items-center gap-3">
                <step.icon className="w-6 h-6 text-primary" />

                <span className="font-semibold text-primary">{step.step}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <CardTitle className="text-lg font-heading">
                {t(step.titleKey)}
              </CardTitle>

              <CardDescription className="text-xs lg:text-sm leading-relaxed">
                {t(step.descriptionKey)}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
