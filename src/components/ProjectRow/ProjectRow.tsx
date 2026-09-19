import { Link } from "react-router-dom";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../../types/project";
import { Tag } from "../ui/Tag";
import { StatusBadge } from "../ui/StatusBadge";
import "./ProjectRow.css";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const num = String(index).padStart(2, "0");

  return (
    <li className="project-row">
      <span className="project-row__index mono" aria-hidden="true">
        {num}
      </span>

      <div className="project-row__main">
        <h3 className="project-row__title">
          <Link to={`/projects/${project.slug}`} className="project-row__link">
            {project.title}
          </Link>
        </h3>
        <p className="project-row__meta mono">
          {project.category} · {project.year}
        </p>
        <p className="project-row__description">{project.shortDescription}</p>
        <ul className="project-row__tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <div className="project-row__side">
        <StatusBadge status={project.status} />
        <div className="project-row__actions">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-row__icon-link"
              aria-label={`${project.title} source on GitHub`}
            >
              <Code2 size={16} strokeWidth={1.5} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="project-row__icon-link"
              aria-label={`${project.title} live demo`}
            >
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
