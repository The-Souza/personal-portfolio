"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface IntroContextValue {
  finished: boolean;
  shouldPlay: boolean;
  ready: boolean;
}

const IntroContext = createContext<IntroContextValue | null>(null);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [finished, setFinished] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("intro_seen");

    if (!alreadySeen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldPlay(true);

      const timeout = setTimeout(() => {
        sessionStorage.setItem("intro_seen", "true");
        setFinished(true);
      }, 4500);

      setReady(true);
      return () => clearTimeout(timeout);
    }

    setFinished(true);
    setReady(true);
  }, []);

  return (
    <IntroContext.Provider value={{ finished, shouldPlay, ready }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const context = useContext(IntroContext);
  if (!context) throw new Error("useIntro must be used within IntroProvider");
  return context;
}
