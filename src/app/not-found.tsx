"use client";

import FuzzyText from "@/components/effects/FuzzyText";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";
  const isMobile = useIsMobile(768);
  const reducedMotion = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(theme !== undefined);
  }, [theme]);

  if (!ready) {
    return null;
  }

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      {/* Animated 404 */}
      {reducedMotion ? (
        <h1 className="z-1 max-w-70 sm:max-w-none font-black leading-none text-[6.25rem] sm:text-[3.5rem] text-foreground">
          404
        </h1>
      ) : (
        <FuzzyText
          fontWeight={900}
          fontSize={isMobile ? 100 : 120}
          color={isDark ? "#fff" : "#000"}
          className="z-1 max-w-70 sm:max-w-none"
          glitchMode
          clickEffect
        >
          404
        </FuzzyText>
      )}

      {reducedMotion ? (
        <h2 className="z-1 max-w-70 sm:max-w-170 font-bold leading-none text-[3.75rem] text-foreground">
          {t("notFound.title")}
        </h2>
      ) : (
        <FuzzyText
          fontWeight={700}
          fontSize={60}
          color={isDark ? "#fff" : "#000"}
          className="z-1 max-w-70 sm:max-w-170"
          glitchMode
          clickEffect
        >
          {t("notFound.title")}
        </FuzzyText>
      )}

      {/* Message */}
      <GlassCard>
        <p className="w-auto text-base sm:text-lg md:text-xl leading-relaxed">
          {t("notFound.description")}
        </p>
      </GlassCard>

      {/* CTA */}
      <Button asChild className="z-1">
        <Link href="/">{t("notFound.goBackButton")}</Link>
      </Button>
    </section>
  );
}
