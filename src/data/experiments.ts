import type { Experiment } from "../types/project";

/**
 * Smaller things that don't deserve a full project page. Add one any
 * time you build something small while learning — this is meant to
 * stay a running log, not a curated list.
 */
export const experiments: Experiment[] = [
  {
    id: "android-audio-engine",
    number: "001",
    title: "Android Audio Engine",

    description:
      "Exploring Android native services, broadcasts, activities, audio, and React Native integration.",
    technologies: ["Kotlin", "React Native"],
    category: "Mobile",
    year: 2026,
  },

  {
  id: "backend-systems",
  number: "002",
  title: "Backend Systems",
  description: "Building backend systems with Node.js, APIs, databases, authentication, caching, queues, and real-time communication.",
  technologies: ["Node.js", "Express", "MongoDB", "Redis"],
  category: "Backend",
  year: 2026,
},

  {
    id: "ai-bots",
    number: "003",
    title: "AI Bots",
    description:
      "Experimenting with AI-powered bots, LLM integration, prompt design, tool calling, and conversational systems.",
    technologies: ["TypeScript", "Node.js", "AI"],
    category: "AI",
    year: 2026,
  },
{
  id: "react-frontend",
  number: "004",
  title: "React Frontend",
  description: "Building responsive web interfaces with React, TypeScript, reusable components, and modern frontend architecture.",
  technologies: ["React", "TypeScript", "Tailwind CSS"],
  category: "Web",
  year: 2026,
},
{
  id: "developer-tools",
  number: "006",
  title: "Developer Tools",
  description: "Building developer tools and npm packages with TypeScript, CLI utilities, automation, and code generation.",
  technologies: ["TypeScript", "Node.js", "npm"],
  category: "Tool",
  year: 2026,
},
{
  id: "game-development",
  number: "005",
  title: "Game Development",
  description: "Experimenting with Godot, 2D and 3D gameplay, physics, cameras, terrain, animation, and game systems.",
  technologies: ["Godot", "GDScript"],
  category: "Game",
  year: 2026,
},

];
