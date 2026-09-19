import { Link } from "react-router-dom";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../../types/project";
import { Tag } from "../ui/Tag";
import { StatusBadge } from "../ui/StatusBadge";
import { PlaceholderVisual } from "../ui/PlaceholderVisual";
import "./FeaturedProject.css";

export function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const num = String(index).padStart(2, "0");

  return (
    <article className="featured-project">
      <div className="featured-project__content">
        <div className="featured-project__meta mono">
          <span>{num}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>

        <h3 className="featured-project__title">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        <p className="featured-project__description">{project.shortDescription}</p>

        <ul className="featured-project__tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <Tag>{tech}</Tag>
            </li>
          ))}
        </ul>

        <div className="featured-project__footer">
          <StatusBadge status={project.status} />
          <span className="featured-project__year mono">{project.year}</span>
        </div>

        <div className="featured-project__actions">
          <Link to={`/projects/${project.slug}`} className="btn btn--primary btn--sm">
            View project
          </Link>
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm">
              <Code2 size={14} strokeWidth={1.5} /> Source
            </a>
          )}
          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn--secondary btn--sm">
              <ArrowUpRight size={14} strokeWidth={1.5} /> Live demo
            </a>
          )}
        </div>
      </div>

      <div className="featured-project__visual">
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
        ) : (
          <PlaceholderVisual category={project.category} title={project.title} />
        )}
      </div>
    </article>
  );
}
