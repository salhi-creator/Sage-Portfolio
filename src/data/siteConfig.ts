import type { SiteConfig } from "../types/project";

/**
 * Edit this file to update global site identity.
 * `availability.open` controls whether the small status indicator in the
 * navigation is shown at all — set it to false if you don't want to make
 * any claim about availability.
 */
export const siteConfig: SiteConfig = {
  name: "Hakim",
  role: "Developer & Builder",
  availability: {
    open: true,
    label: "AVAILABLE TO BUILD",
  },
};

export const siteMeta = {
  brand: "Sage",
  title: "Sage — Developer & Builder",
  description:
    "Personal workshop and project archive of Hakim — a computer science student and independent developer building across mobile, web, backend, and games.",
  url: "https://example.com",
};
