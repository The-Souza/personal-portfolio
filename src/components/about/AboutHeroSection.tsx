"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { GlassCard } from "@/components/ui/glass-card";
import { developerCode } from "@/constants/developer.code";
import { Trans, useTranslation } from "react-i18next";
import { TextAnimate } from "@/components/effects/text-animate";

export function AboutHeroSection() {
  const { i18n, t } = useTranslation("translation");

  const locale = i18n.language.startsWith("pt") ? "pt" : "en";
  const language = i18n.language;
  const Highlight = <span className="text-primary font-semibold" />;

  return (
    <section className="grid lg:grid-cols-2 w-full max-w-6xl py-14 md:py-20 items-center gap-12 min-h-[80vh]">
      {/* LEFT — TEXTO */}
      <div className="flex flex-col gap-4">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-4xl md:text-5xl font-bold font-heading"
        >
          {t("about.title")}
        </TextAnimate>

        <GlassCard className="flex flex-col gap-2">
          {(["part1", "part2", "part3"] as const).map((key) => (
            <p key={key} className="text-lg leading-relaxed">
              <Trans
                key={language}
                i18nKey={`about.text.${key}`}
                ns="translation"
                components={{ strong: Highlight }}
              />
            </p>
          ))}
        </GlassCard>
      </div>

      {/* RIGHT — TERMINAL */}
      <Code
        className="w-full h-113.5 transition-all duration-300 ease-out hover:border-primary shadow-md hover:shadow-primary"
        code={developerCode[locale]}
      >
        <CodeHeader>developer.ts</CodeHeader>

        <CodeBlock lang="ts" writing cursor duration={4000} />
      </Code>
    </section>
  );
}
