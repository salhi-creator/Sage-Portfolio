import { exploring } from "../../data/exploring";
import "./CurrentlyExploring.css";

export function CurrentlyExploring() {
  return (
    <ol className="exploring-list">
      {exploring.map((item, index) => (
        <li key={item.label} className="exploring-list__item">
          <span className="exploring-list__index mono">{String(index + 1).padStart(2, "0")}</span>
          <span className="exploring-list__label">{item.label}</span>
        </li>
      ))}
    </ol>
  );
}
