import { ArrowUpRight } from "lucide-react";
import type { Experiment } from "../../types/project";
import { Tag } from "../ui/Tag";
import "./ExperimentCard.css";

export function ExperimentCard({ experiment }: { experiment: Experiment }) {
  return (
    <article className="experiment-card">
      <p className="experiment-card__eyebrow mono">Experiment {experiment.number}</p>
      <h3 className="experiment-card__title">{experiment.title}</h3>
      <p className="experiment-card__description">{experiment.description}</p>
      <ul className="experiment-card__tech" aria-label="Technologies used">
        {experiment.technologies.map((tech) => (
          <li key={tech}>
            <Tag>{tech}</Tag>
          </li>
        ))}
      </ul>
      {experiment.link && (
        <a href={experiment.link} target="_blank" rel="noreferrer" className="experiment-card__link mono">
          View <ArrowUpRight size={12} strokeWidth={1.75} />
        </a>
      )}
    </article>
  );
}
