import { technologies } from "../../data/technologies";
import "./TechStack.css";

export function TechStack() {
  return (
    <div className="tech-stack">
      {technologies.map((group) => (
        <div className="tech-stack__group" key={group.group}>
          <h3 className="tech-stack__group-title mono">{group.group}</h3>
          <ul className="tech-stack__items">
            {group.items.map((item) => (
              <li key={item.name}>
                {item.description ? (
                  <span className="tech-stack__chip" tabIndex={0}>
                    {item.name}
                    <span className="tech-stack__tooltip" role="tooltip">
                      {item.description}
                    </span>
                  </span>
                ) : (
                  <span className="tech-stack__chip tech-stack__chip--plain">{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
