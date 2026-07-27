"use client";

import { TerminalLoading } from "@/components/layout/TerminalLoading";
import { useIntro } from "@/providers/IntroProvider";
import { useTranslation } from "react-i18next";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const { shouldPlayIntro, ready, finishIntro } = useIntro();
  const { t } = useTranslation();

  if (!ready) return null;

  if (shouldPlayIntro) {
    return (
      <div
        className="relative flex-1 w-full flex items-center justify-center p-6"
        onClick={finishIntro}
        onKeyDown={(e) => {
          if (e.key === "Escape") finishIntro();
        }}
      >
        <TerminalLoading onComplete={finishIntro} />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            finishIntro();
          }}
          className="absolute bottom-6 right-6 text-sm text-muted-foreground hover:text-primary underline"
        >
          {t("intro.skip")}
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
