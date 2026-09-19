import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "./NodeNetwork.css";

interface NodeDef {
  id: string;
  label: string;
  x: number; // percent, 0-100
  y: number; // percent, 0-100
  depth: number; // 0-1, how strongly it reacts to the cursor
}

const NODES: NodeDef[] = [
  { id: "ai", label: "AI", x: 50, y: 13, depth: 0.9 },
  { id: "web", label: "WEB", x: 18, y: 34, depth: 0.55 },
  { id: "mobile", label: "MOBILE", x: 81, y: 27, depth: 0.8 },
  { id: "backend", label: "BACKEND", x: 15, y: 75, depth: 0.4 },
  { id: "game", label: "GAME", x: 84, y: 70, depth: 0.7 },
  { id: "tools", label: "TOOLS", x: 50, y: 90, depth: 0.5 },
];

const EDGES: [string, string][] = [
  ["ai", "web"],
  ["ai", "mobile"],
  ["web", "backend"],
  ["web", "tools"],
  ["mobile", "game"],
  ["backend", "tools"],
  ["game", "tools"],
  ["backend", "ai"],
];

const VIEW_W = 400;
const VIEW_H = 340;

function toPoint(node: NodeDef) {
  return { x: (node.x / 100) * VIEW_W, y: (node.y / 100) * VIEW_H };
}

export function NodeNetwork() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<string, SVGGElement | null>>({});
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(undefined);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = el!.getBoundingClientRect();
      target.current = {
        x: (event.clientX - rect.left) / rect.width - 0.5,
        y: (event.clientY - rect.top) / rect.height - 0.5,
      };
    }

    function handlePointerLeave() {
      target.current = { x: 0, y: 0 };
    }

    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerleave", handlePointerLeave);

    function loop() {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;

      for (const node of NODES) {
        const el = nodeRefs.current[node.id];
        if (!el) continue;
        const shiftX = current.current.x * 24 * node.depth;
        const shiftY = current.current.y * 20 * node.depth;
        el.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
      }

      rafId.current = requestAnimationFrame(loop);
    }

    rafId.current = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [reducedMotion]);

  return (
    <div className="node-network" ref={containerRef} aria-hidden="true">
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} preserveAspectRatio="xMidYMid meet">
        <g className="node-network__edges">
          {EDGES.map(([a, b]) => {
            const na = NODES.find((n) => n.id === a)!;
            const nb = NODES.find((n) => n.id === b)!;
            const pa = toPoint(na);
            const pb = toPoint(nb);
            const isActive = hovered === a || hovered === b;
            return (
              <line
                key={`${a}-${b}`}
                x1={pa.x}
                y1={pa.y}
                x2={pb.x}
                y2={pb.y}
                className={`node-network__edge ${isActive ? "is-active" : ""}`}
              />
            );
          })}
        </g>

        <g className="node-network__nodes">
          {NODES.map((node, index) => {
            const p = toPoint(node);
            const isActive = hovered === node.id;
            return (
              <g
                key={node.id}
                ref={(el) => {
                  nodeRefs.current[node.id] = el;
                }}
                onPointerEnter={() => setHovered(node.id)}
                onPointerLeave={() => setHovered(null)}
              >
                <g
                  className={`node-network__node ${isActive ? "is-active" : ""}`}
                  style={{ animationDelay: `${index * -1.15}s` }}
                >
                  <circle cx={p.x} cy={p.y} r={isActive ? 5 : 3.5} className="node-network__dot" />
                  <text x={p.x} y={p.y - 13} textAnchor="middle" className="node-network__label mono">
                    {node.label}
                  </text>
                </g>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
