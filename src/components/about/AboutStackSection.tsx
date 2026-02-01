"use client"

import { SectionHeader } from "@/components/section/SectionHeader";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { CATEGORY_META } from "@/constants/stackCategory";
import { STACKS } from "@/constants/stacks";
import { useTranslation } from "react-i18next";

const entries = Object.entries(STACKS) as [
  keyof typeof STACKS,
  (typeof STACKS)[keyof typeof STACKS],
][];

export function AboutStackSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-14 md:py-20 flex flex-col items-center gap-12">
      <SectionHeader title={t("about.stacks")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 z-1 w-full lg:w-auto">
        {entries.map(([category, stacks]) => {
          const meta = CATEGORY_META[category];

          return (
            <Card
              key={category}
              className="group z-1 h-64 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary shadow-md hover:shadow-primary"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 uppercase font-heading text-muted-foreground transition-colors group-hover:text-primary">
                  <meta.icon className="w-6 h-6" />
                  {t(meta.labelKey)}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="grid grid-cols-2 gap-4">
                  {Object.values(stacks).map(({ name, icon: Icon }) => (
                    <li
                      key={`${category}-${name}`}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Icon className="w-5 h-5" />
                      {name}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
