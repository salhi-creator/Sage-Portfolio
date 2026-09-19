import "./SystemPanel.css";

/** Edit freely — this is presentational, not derived from real system data. */
const ROWS: { label: string; value: string }[] = [
  { label: "Focus", value: "Software" },
  { label: "Stack", value: "TypeScript" },
  { label: "Environment", value: "React Native" },
  { label: "Exploring", value: "Game Dev" },
  { label: "Status", value: "Building" },
];

export function SystemPanel() {
  return (
    <div className="system-panel mono" aria-hidden="true">
      <div className="system-panel__header">
        <span>SYSTEM</span>
        <span className="status-dot" />
      </div>
      <div className="system-panel__divider" />
      <dl className="system-panel__rows">
        {ROWS.map((row) => (
          <div className="system-panel__row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
