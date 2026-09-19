import type { TechGroup } from "../types/project";

export const technologies: TechGroup[] = [
  {
    group: "Languages",
    items: [
      {
        name: "TypeScript",
        description: "Default for anything that will grow past a weekend.",
      },
      { name: "JavaScript", description: "Where TypeScript isn't an option." },
      {
        name: "Kotlin",
        description: "Native Android modules and standalone app logic.",
      },
      {
        name: "GDScript",
        description: "Godot's scripting language for game logic.",
      },
      {
        name: "Java",
        description:
          "Used for Android development and native platform integration.",
      },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", description: "Web UIs and component architecture." },
      {
        name: "React Native",
        description: "Cross-platform mobile, bridged to native when needed.",
      },
      { name: "HTML", description: "" },
      {
        name: "CSS",
        description:
          "Hand-written, token-driven — no utility framework required.",
      },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", description: "API servers and tooling." },
      {
        name: "Express",
        description: "Routing and middleware for smaller services.",
      },
      {
        name: "MongoDB",
        description: "Schema design for read-heavy, evolving data.",
      },
      {
        name: "Redis",
        description: "Pub/sub, caching, and coordination between processes.",
      },
      {
        name: "WebSockets",
        description: "Real-time features and live state sync.",
      },
    ],
  },
  {
    group: "Game Development",
    items: [
      {
        name: "Godot",
        description: "2D and 3D prototypes, learning the node/signal model.",
      },
      { name: "Blender", description: "Basic modeling for game assets." },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", description: "" },
      { name: "GitHub", description: "" },
      { name: "VS Code", description: "" },
      { name: "Android Studio", description: "" },
    ],
  },
];
