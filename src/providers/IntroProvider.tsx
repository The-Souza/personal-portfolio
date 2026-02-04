"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface IntroContextValue {
  hasSeenIntro: boolean;
  ready: boolean;
  shouldPlayIntro: boolean;
  finishIntro: () => void;
}

const IntroContext = createContext<IntroContextValue | null>(null);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("intro_seen") === "true";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasSeenIntro(seen);
    setReady(true);
  }, []);

  const finishIntro = () => {
    sessionStorage.setItem("intro_seen", "true");
    setHasSeenIntro(true);
  };

  const shouldPlayIntro = useMemo(() => {
    return ready && !hasSeenIntro;
  }, [ready, hasSeenIntro]);

  const value = useMemo(
    () => ({
      hasSeenIntro,
      ready,
      shouldPlayIntro,
      finishIntro,
    }),
    [hasSeenIntro, ready, shouldPlayIntro],
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) {
    throw new Error("useIntro must be used within IntroProvider");
  }
  return context;
}
