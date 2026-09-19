import type { ProjectCategory } from "../../types/project";
import "./ProjectFilter.css";

type FilterValue = ProjectCategory | "All";

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All", value: "All" },
  { label: "Web", value: "Web" },
  { label: "Mobile", value: "Mobile" },
  { label: "Backend", value: "Backend" },
  { label: "Game", value: "Game" },
  { label: "Tools", value: "Tool" },
  { label: "AI", value: "AI" },
  { label: "Experiments", value: "Experiment" },
];

interface ProjectFilterProps {
  active: FilterValue;
  onChange: (value: FilterValue) => void;
}

export function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="project-filter" role="group" aria-label="Filter projects by category">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`project-filter__btn ${active === filter.value ? "is-active" : ""}`}
          aria-pressed={active === filter.value}
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
