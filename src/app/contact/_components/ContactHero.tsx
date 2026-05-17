"use client"

import { TextAnimate } from "@/components/effects/text-animate";
import { GlassCard } from "@/components/ui/glass-card";
import { useTranslation } from "react-i18next";

export function ContactHero() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full text-center lg:text-left">
      <TextAnimate
        key={i18n.language}
        as="h1"
        animation="blurInUp"
        by="word"
        once
        className="text-4xl md:text-5xl font-bold font-heading"
      >
        {t("contact.title")}
      </TextAnimate>

      <GlassCard>
        <p className="text-lg leading-relaxed">
          {t("contact.text")}
        </p>
      </GlassCard>
    </div>
  );
}
