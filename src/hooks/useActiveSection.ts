import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * Tracks which of the given section ids is currently most visible in
 * the viewport. Only active on the home page — on other routes those
 * sections don't exist in the DOM, so this simply returns null.
 */
export function useActiveSection(ids: string[]): string | null {
  const location = useLocation();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActive(mostVisible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, location.pathname]);

  return location.pathname === "/" ? active : null;
}
