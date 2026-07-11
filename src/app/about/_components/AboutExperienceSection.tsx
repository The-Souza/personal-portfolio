"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/section/SectionHeader";
import { EXPERIENCES, Experience } from "@/constants/experience-data";
import { BlurFade } from "@/components/effects/blur-fade";
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
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader title={t("about.experience.title")} />

      {EXPERIENCES.map((experience: Experience, i) => (
        <BlurFade key={experience.id} inView delay={0.1 + i * 0.1}>
          <Card
            interactive
            className="group z-1"
          >
            <CardHeader>
              <CardTitle className="text-lg font-heading group-hover:text-primary">
                {t(experience.placeKey)}
              </CardTitle>

              <CardDescription className="text-base text-foreground flex gap-2 leading-relaxed">
                {t(experience.positionKey)} <span>•</span> {t(experience.period)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc flex flex-col gap-2 pl-4 text-base text-muted-foreground" role="list">
                {experience.responsibilitiesKey.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </BlurFade>
      ))}
    </section>
  );
}
