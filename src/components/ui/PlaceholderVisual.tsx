import { Smartphone, Globe, Server, Gamepad2, Wrench, Sparkles, FlaskConical, type LucideIcon } from "lucide-react";
import type { ProjectCategory } from "../../types/project";

const ICONS: Record<ProjectCategory, LucideIcon> = {
  Mobile: Smartphone,
  Web: Globe,
  Backend: Server,
  Game: Gamepad2,
  Tool: Wrench,
  AI: Sparkles,
  Experiment: FlaskConical,
};

interface PlaceholderVisualProps {
  category: ProjectCategory;
  title: string;
}

/**
 * A generated, on-brand visual used whenever a project doesn't have a
 * real screenshot yet, instead of leaving an empty box. Purely
 * decorative — the project title is already announced by the
 * surrounding heading, so this is hidden from assistive tech.
 */
export function PlaceholderVisual({ category, title }: PlaceholderVisualProps) {
  const Icon = ICONS[category];
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="placeholder-visual" aria-hidden="true">
      <div className="placeholder-visual__grid" />
      <Icon className="placeholder-visual__icon" strokeWidth={1.25} />
      <span className="placeholder-visual__initials">{initials}</span>
    </div>
  );
}
