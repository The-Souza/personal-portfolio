import * as React from "react";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mql.matches);
    mql.addEventListener("change", onChange);
    setReducedMotion(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return reducedMotion;
}
