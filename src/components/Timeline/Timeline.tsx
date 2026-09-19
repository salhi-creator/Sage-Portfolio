import { timeline } from "../../data/timeline";
import "./Timeline.css";

export function Timeline() {
  return (
    <ol className="timeline">
      {timeline.map((entry, index) => (
        <li key={`${entry.year}-${index}`} className={`timeline__entry ${entry.current ? "is-current" : ""}`}>
          <div className="timeline__rail" aria-hidden="true">
            <span className="timeline__dot" />
          </div>
          <div className="timeline__body">
            <span className="timeline__year mono">{entry.year}</span>
            <h4 className="timeline__title">{entry.title}</h4>
            {entry.description && <p className="timeline__description">{entry.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
