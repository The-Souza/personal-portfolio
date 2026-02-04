"use client";

import { TerminalLoading } from "@/components/layout/TerminalLoading";
import { useIntro } from "@/providers/IntroProvider";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const { shouldPlayIntro, ready, finishIntro } = useIntro();

  if (!ready) return null;

  if (shouldPlayIntro) {
    return (
      <div className="flex-1 w-full flex items-center justify-center p-6">
        <TerminalLoading onComplete={finishIntro} />
      </div>
    );
  }

  return <>{children}</>;
}
