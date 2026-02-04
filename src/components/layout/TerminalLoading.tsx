"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function TerminalLoading() {
  return (
    <Terminal
      className="w-full sm:w-200 min-h-50 shadow-sm shadow-primary"
      aria-label="Loading portfolio"
    >
      <TypingAnimation>&gt; pnpm install @guilherme/portfolio</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Resolving dependencies
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Building UI components
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Optimizing assets
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Ready.
      </TypingAnimation>
    </Terminal>
  );
}
