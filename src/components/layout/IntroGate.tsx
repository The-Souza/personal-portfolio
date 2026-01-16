"use client";

import { usePathname } from "next/navigation";
import { TerminalLoading } from "@/components/layout/TerminalLoading";
import { useIntro } from "@/providers/IntroProvider";

export function IntroGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { finished, shouldPlay, ready } = useIntro();

  const isHome = pathname === "/";

  if (!ready && isHome) {
    return null;
  }

  if (isHome && shouldPlay && !finished) {
    return (
      <div className="flex-1 w-full flex items-center justify-center p-6">
        <TerminalLoading />
      </div>
    );
  }

  return <>{children}</>;
}
