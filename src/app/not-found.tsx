"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/ui/FuzzyText";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";
  const isMobile = useIsMobile(768);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (theme !== undefined) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setReady(true);
    }
  }, [theme]);

  if (!ready) {
    return null;
  }

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-center">
      {/* Animated 404 */}
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

      {/* Message */}
      <p className="z-1 w-auto text-base sm:text-lg md:text-xl">
        {t("notFound.description")}
      </p>

      {/* CTA */}
      <Button
        asChild
        className="hover:scale-105 transition-transform active:scale-[0.97] z-1"
      >
        <Link href="/">{t("notFound.goBackButton")}</Link>
      </Button>
    </section>
  );
}
