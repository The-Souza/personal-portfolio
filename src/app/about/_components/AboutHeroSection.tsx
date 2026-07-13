"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { TextAnimate } from "@/components/effects/text-animate";
import { BlurFade } from "@/components/effects/blur-fade";
import { GlassCard } from "@/components/ui/glass-card";
import { developerCode } from "@/constants/developer-code";
import { TypeScriptIcon } from "@/icons/TypeScriptIcon";
import { Trans, useTranslation } from "react-i18next";

export function AboutHeroSection() {
  const { i18n, t } = useTranslation("translation");

  const locale = i18n.language.startsWith("pt") ? "pt" : "en";
  const language = i18n.language;
  const Highlight = <span className="text-primary font-semibold" />;

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full py-14 md:py-20 items-center gap-12 min-h-[80vh]">
      {/* LEFT — TEXTO */}
      <div className="flex flex-col gap-4 min-w-0">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-[clamp(2rem,3.5vw+1rem,3.25rem)] font-bold font-heading"
        >
          {t("about.title")}
        </TextAnimate>

        <BlurFade inView delay={0.15}>
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
        </BlurFade>
      </div>

      {/* RIGHT — TERMINAL */}
      <BlurFade inView delay={0.2} direction="left">
        <Code
          className="w-full h-128.5 transition-all duration-300 ease-out hover:border-primary shadow-md hover:shadow-primary"
          code={developerCode[locale]}
        >
          <CodeHeader icon={TypeScriptIcon}>developer.ts</CodeHeader>

          <CodeBlock lang="ts" />
        </Code>
      </BlurFade>
    </section>
  );
}
