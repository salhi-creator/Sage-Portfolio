import type { ProjectStatus } from "../../types/project";

const STATUS_CLASS: Record<ProjectStatus, string> = {
  Active: "is-active",
  Completed: "is-completed",
  Experimental: "is-experimental",
  Archived: "is-archived",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`status-badge ${STATUS_CLASS[status]}`}>
      <span className="status-dot" aria-hidden="true" />
      {status}
    </span>
  );
}
