export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = 72; // keep in sync with --nav-height in tokens.css
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight - 12;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}
