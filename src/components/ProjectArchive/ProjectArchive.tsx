import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { Project, ProjectCategory } from "../../types/project";
import { FeaturedProject } from "../FeaturedProject/FeaturedProject";
import { ProjectRow } from "../ProjectRow/ProjectRow";
import { ProjectFilter } from "../ProjectFilter/ProjectFilter";
import "./ProjectArchive.css";

type FilterValue = ProjectCategory | "All";

const CATEGORY_FROM_PARAM: Record<string, ProjectCategory> = {
  web: "Web",
  mobile: "Mobile",
  backend: "Backend",
  game: "Game",
  tool: "Tool",
  tools: "Tool",
  ai: "AI",
  experiment: "Experiment",
  experiments: "Experiment",
};

interface ProjectArchiveProps {
  projects: Project[];
  /** Show the category filter and sync the active category to ?category= in the URL. */
  showFilter?: boolean;
  /** Cap the number of non-featured rows shown — used for the homepage teaser. */
  limit?: number;
}

/**
 * Add a project by adding an object to data/projects.ts — this
 * component (used on both the homepage teaser and /work) picks it up
 * automatically. No page needs to change.
 */
export function ProjectArchive({ projects, showFilter = false, limit }: ProjectArchiveProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeCategory: FilterValue = showFilter
    ? (CATEGORY_FROM_PARAM[(searchParams.get("category") ?? "").toLowerCase()] ?? "All")
    : "All";

  const featured = useMemo(() => projects.find((p) => p.featured), [projects]);
  const featuredVisible = Boolean(
    featured && (!showFilter || activeCategory === "All" || activeCategory === featured.category),
  );

  const rest = useMemo(() => {
    let list = projects.filter((p) => p.id !== featured?.id);
    if (showFilter && activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    list = [...list].sort((a, b) => b.year - a.year);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [projects, featured, showFilter, activeCategory, limit]);

  function handleFilterChange(value: FilterValue) {
    const next = new URLSearchParams(searchParams);
    if (value === "All") {
      next.delete("category");
    } else {
      next.set("category", value.toLowerCase());
    }
    setSearchParams(next, { replace: true });
  }

  const startIndex = featuredVisible ? 2 : 1;

  return (
    <div className="project-archive">
      {showFilter && <ProjectFilter active={activeCategory} onChange={handleFilterChange} />}

      {featuredVisible && featured && <FeaturedProject project={featured} index={1} />}

      {rest.length > 0 ? (
        <ol className="project-archive__list">
          {rest.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={startIndex + i} />
          ))}
        </ol>
      ) : (
        !featuredVisible && <p className="project-archive__empty mono">Nothing in this category yet.</p>
      )}
    </div>
  );
}
