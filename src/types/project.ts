export type ProjectCategory =
  | "Mobile"
  | "Web"
  | "Backend"
  | "Game"
  | "Tool"
  | "AI"
  | "Experiment";

export type ProjectStatus = "Active" | "Completed" | "Experimental" | "Archived";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;

  /** One or two sentences, used in listings and cards. */
  shortDescription: string;
  /** Longer form, used as the "Overview" on the project detail page. */
  description: string;

  category: ProjectCategory;
  technologies: string[];
  status: ProjectStatus;
  year: number;
  Link?:string;
  /** Featured projects get the large editorial treatment in the archive. */
  featured?: boolean;

  image?: string;
  gallery?: string[];

  github?: string;
  liveDemo?: string;
  download?: string;
  documentation?: string;

  motivation?: string; // "Why I built it"
  problem?: string;
  solution?: string; // "The interesting part"
  challenges?: string[];
  lessons?: string[];
  architecture?: string;

  metrics?: ProjectMetric[];
}

export interface Experiment {
  id: string;
  number: string; // zero-padded, e.g. "014"
  title: string;
  description: string;
  technologies: string[];
  category?: ProjectCategory;
  link?: string;
  year: number;
}

export interface TechEntry {
  name: string;
  description?: string;
}

export interface TechGroup {
  group: string;
  items: TechEntry[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description?: string;
  current?: boolean;
}

export interface ExploringEntry {
  label: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  instagram?: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  availability: {
    open: boolean;
    label: string;
  };
}
