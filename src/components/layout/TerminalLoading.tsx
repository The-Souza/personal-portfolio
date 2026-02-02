"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function TerminalLoading() {
  return (
    <Terminal className="w-full sm:w-200 h-auto shadow-sm shadow-primary" aria-label="Loading portfolio">
      <TypingAnimation>&gt; npm install portfolio</TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Initializing project
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Loading components
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Applying UI theme
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Ready. Welcome 👋
      </TypingAnimation>
    </Terminal>
  );
}
