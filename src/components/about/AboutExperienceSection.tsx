"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section/SectionHeader";
import { EXPERIENCES, Works } from "@/constants/experience.data";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function AboutExperienceSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full max-w-6xl py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader title={t("about.experience.title")} />

      {EXPERIENCES.map((works: Works) => (
        <Card
          key={works.id}
          className="group z-1 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary"
        >
          <CardHeader>
            <CardTitle className="text-lg font-heading group-hover:text-primary">
              {t(works.placeKey)}
            </CardTitle>

            <CardDescription className="text-md text-foreground flex gap-2">
              {t(works.positionKey)} <span>•</span> {t(works.period)}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-4 text-md text-muted-foreground" role="list">
              {works.responsibilitiesKey.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
