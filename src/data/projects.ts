import type { Project } from "../types/project";

/**
 * Add a new project by adding an object here — no other files need to
 * change. Fields left out simply don't render (see ProjectPage.tsx and
 * ProjectRow.tsx): no `github` means no GitHub button, no `image` means
 * a generated placeholder is shown instead, and so on.
 *
 * Set `featured: true` on a project to give it the large editorial
 * treatment at the top of /work. Only the first featured project found
 * gets that treatment; the rest render as normal archive rows.
 */
export const projects: Project[] = [
  {
    id: "SageWake",
    title: "SageWake",
    slug: "sagewake",

    shortDescription:
      "A smart alarm app combining React Native with native Android systems for reliable alarms, audio, and wake-up challenges.",

    description:
      "SageWake is a React Native alarm app built to explore how far a mobile application can integrate with Android's native systems. It combines TypeScript and Kotlin to handle alarm scheduling, background execution, native audio playback, system events, permissions, and interactive wake-up challenges.",

    category: "Mobile",
    technologies: ["React Native", "TypeScript", "Kotlin", "Android SDK"],
    status: "Active",
    year: 2026,
    featured: true,

    image: "/SageAwarePics/sageAware2.jpg",

    gallery: [
      "/SageAwarePics/sageAware.jpg",
      "/SageAwarePics/sageAware4.jpg",
      "/SageAwarePics/sageAware5.jpg",
      "/SageAwarePics/sageAware6.jpg",
      "/SageAwarePics/sageAware7.jpg",
      "/SageAwarePics/sageAware8.jpg",
    ],

    motivation:
      "I wanted to build an alarm app that was more than a simple timer while learning how Android handles alarms, background processes, audio, and communication between React Native and native code.",

    problem:
      "A reliable alarm needs to work beyond the React Native runtime, survive background execution, play audio consistently, and interact with Android's system lifecycle without depending entirely on JavaScript.",

    solution:
      "SageWake combines a React Native interface with Kotlin native components to handle Android-specific functionality, while TypeScript manages the application logic, alarm configuration, challenges, and user experience.",

    challenges: [
      "Running alarm-related functionality reliably while the app is in the background.",
      "Handling native Android audio playback and system lifecycle events.",
      "Bridging data and events between Kotlin and the React Native JavaScript layer.",
      "Designing wake-up challenges that are difficult enough to prevent accidental dismissal.",
    ],

    lessons: [
      "Reliable mobile features often require working with the operating system rather than only the application layer.",
      "React Native becomes much more powerful when combined with targeted native Android code.",
      "Background execution, lifecycle management, and permissions are as important as the visible UI when building system-level mobile features.",
    ],
  },

  {
    id: "vesper",
    title: "Vesper",
    slug: "vesper",
    image: "/VesperProject/vesperPreview.png",
    gallery: [
      "/VesperProject/vesperPreview.png",
      "/VesperProject/vesperPreview2.png",
      "/VesperProject/vesperPreview3.png",
      "/VesperProject/vesperPreview4.png",
      "/VesperProject/vesperPreview5.png",
    ],

    shortDescription:
      "An experimental full-stack social web app exploring authentication, real-time communication, and backend systems.",

    description:
      "Vesper is an experimental full-stack social platform built to explore how a modern web application works across the entire stack. It combines React, Node.js, MongoDB, Redis, and WebSockets for authentication, posts, social interactions, caching, and real-time updates. The live authentication service currently depends on a free Redis instance that may become inactive after extended periods without use, so account sign-in may occasionally be unavailable.",

    category: "Web",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "WebSockets",
    ],
    Link: "https://vesper-self.vercel.app",
    status: "Experimental",
    year: 2025,

    motivation:
      "I wanted a project where I could work across the entire stack instead of focusing on a single layer — from the interface and API to databases, caching, authentication, and real-time communication.",

    problem:
      "Building a social application means keeping multiple systems consistent while handling authentication, database operations, cached data, and real-time updates without letting the client fall out of sync.",

    solution:
      "Vesper uses a REST API for core application operations, WebSockets for real-time events, MongoDB for persistent data, and Redis for fast-access state and caching.",

    challenges: [
      "Keeping REST API responses and WebSocket events synchronized.",
      "Designing MongoDB data structures around the application's access patterns.",
      "Managing real-time connections, reconnections, and client state.",
      "Using Redis for caching and efficient social-graph operations.",
      "Building authentication and session handling across the frontend and backend.",
    ],

    lessons: [
      "Real-time applications are fundamentally a state-synchronization problem.",
      "Backend architecture becomes much more important as different systems start interacting.",
      "Data models should be designed around how the application actually reads and uses data.",
      "Caching is useful only when you understand what data needs to be fast and why.",
    ],
  },

  {
    id: "zod-auto-schema",
    title: "Zod Auto Schema",
    slug: "zod-auto-schema",

    shortDescription:
      "A TypeScript developer tool that generates Zod schemas from existing TypeScript types.",

    description:
      "Zod Auto Schema is a TypeScript code generation tool that turns TypeScript types into Zod validation schemas, reducing the need to maintain the same data structure twice. It uses the TypeScript Compiler API to analyze types and generate runtime validation code.",

    category: "Tool",
    technologies: ["TypeScript", "Node.js", "TypeScript Compiler API", "Zod"],
    status: "Archived",
    year: 2026,

    motivation:
      "I kept defining the same data structures twice — once for TypeScript and again for runtime validation. I wanted to automate that duplication and explore what could be done with the TypeScript Compiler API.",

    problem:
      "TypeScript types are removed at runtime, so they cannot directly validate external data. This usually means maintaining a separate Zod schema that can easily fall out of sync with the original type.",

    solution:
      "Zod Auto Schema analyzes TypeScript types through the Compiler API and generates corresponding Zod schemas, turning static type definitions into reusable runtime validators.",

    challenges: [
      "Working directly with the TypeScript Compiler API and understanding its AST.",
      "Mapping different TypeScript type structures to their Zod equivalents.",
      "Handling unsupported or complex types without generating unreliable schemas.",
      "Turning the generator into a reusable npm package and CLI tool.",
    ],

    lessons: [
      "The TypeScript AST reveals how much of the language can be analyzed and transformed programmatically.",
      "Code generation can eliminate repetitive work when static types and runtime validation need to stay synchronized.",
      "Building a developer tool requires thinking about both the underlying compiler logic and the developer experience.",
    ],
  },

  {
    id: "my-telebot",
    title: "My-TeleBot",
    slug: "my-telebot",

    shortDescription:
      "An AI-powered Telegram bot that talks naturally with customers, takes orders, and sends them to a web dashboard backed by a persistent database.",

    Link: "https://t.me/SageRedbot",

    description:
      "My-TeleBot is an AI-powered Telegram agent built to handle customer conversations and order-taking through a natural, human-like chat experience. The bot can understand what a customer wants, ask for missing information, respond conversationally with a sense of humor, and submit completed orders to a customer dashboard website. Orders and application data are stored in the backend database, while Redis is used for fast-access caching and temporary state. The project explores how an LLM can be connected to real business workflows instead of being limited to simple question-and-answer conversations. The current deployment uses a free-tier Redis instance, so cached or temporary state may become unavailable after long periods of inactivity.",

    category: "Backend",

    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "Telegram Bot API",
      "Redis",
      "LLMs",
      "AI Agents",
      "Webhooks",
      "Database",
    ],

    status: "Completed",
    year: 2025,

    motivation:
      "I wanted to build an AI bot that actually performs a useful job instead of only generating text. The goal was to connect an LLM to a real ordering workflow where it can communicate with customers, collect the required information, and pass completed orders into a backend system.",

    problem:
      "A useful ordering bot needs to understand natural conversation rather than forcing customers through rigid commands or forms. It also needs to know when an order is complete, collect the required details, preserve state during the conversation, and reliably send the resulting order to the application's backend.",

    solution:
      "I built a Node.js backend that receives Telegram messages through webhooks and connects the conversation to an AI agent. The agent handles customer conversations, asks follow-up questions when information is missing, and can respond naturally instead of relying on fixed command flows. Once an order is ready, the backend processes it and stores the order data so it can be displayed and managed through the customer dashboard website. Redis provides fast-access caching and temporary application state, while the database handles persistent order data.",

    challenges: [
      "Designing a conversational ordering flow that feels natural while still collecting the information required to complete an order.",
      "Giving the AI enough freedom to communicate naturally without allowing it to bypass the application's backend rules.",
      "Maintaining conversation state so the bot can understand an order across multiple messages.",
      "Connecting Telegram webhooks, the AI agent, backend services, Redis, and the customer dashboard into one workflow.",
      "Making the bot's personality configurable through external instructions instead of hard-coding its behavior into the application.",
      "Handling the limitations of a free-tier Redis deployment used for caching and temporary state.",
    ],
    gallery: [
      "/teleBotPics/teleBotPreview.png",
      "/teleBotPics/teleBotPreview2.png",
      "/teleBotPics/teleBotPreview3.png",
    ],
    image: "/teleBotPics/botTele.jpg",
    lessons: [
      "An AI agent becomes much more useful when it is connected to real application workflows rather than only generating responses.",
      "Natural conversation and structured application data can work together: the AI handles the conversation while the backend validates and stores the result.",
      "AI systems need deterministic backend logic around them to control what actions can actually be performed.",
      "Persistent application data and temporary conversational state serve different purposes and should be handled accordingly.",
      "Webhooks provide an effective way to connect external messaging platforms such as Telegram with backend services.",
    ],
  },

  {
    id: "context-lens",
    title: "Context Lens",
    slug: "context-lens",

    shortDescription:
      "An experiment wiring an LLM API into a note-taking tool to test structured extraction and context limits in practice.",
    description:
      "A minimal tool that takes freeform notes and asks a language model to extract structured tasks, dates, and follow-ups from them — built to understand prompt design and structured-output patterns rather than to ship a polished product.",

    category: "AI",
    technologies: ["TypeScript", "Node.js", "LLM APIs"],
    status: "Experimental",
    year: 2026,

    motivation:
      "Most of what I'd read about LLM integration was theoretical. I wanted to hit the real constraints myself — token limits, unreliable formatting, latency.",
    problem:
      "Getting consistently structured output from a model that's fundamentally producing free text.",
    solution:
      "Constraining the model with a strict output schema and validating every response before trusting it, falling back to a retry with a corrective prompt when it doesn't match.",
    challenges: [
      "Handling the cases where the model's output almost matches the schema, but not quite.",
      "Balancing prompt length against response latency.",
    ],
    lessons: [
      "Treat a model's output like any other untrusted input — validate first, use second.",
    ],
  },

  {
    id: "my-first-3d-game",
    title: "My First 3D Game",
    slug: "my-first-3d-game",
    image: "/godotProjectPics/godotPreview6.png",
    gallery: [
      "/godotProjectPics/godotPreview.png",
      "/godotProjectPics/godotPreview2.png",
      "/godotProjectPics/godotPreview3.png",
      "/godotProjectPics/godotPreview4.png",
      "/godotProjectPics/godotPreview5.png",
      "/godotProjectPics/godotPreview6.png",
      "/godotProjectPics/terrain.png",
    ],
    shortDescription:
      "A small horror-inspired 3D game I built while learning the fundamentals of 3D game development with Godot.",

    description:
      "My First 3D Game is a small horror-inspired project built as my introduction to 3D game development. I used it to learn how 3D environments, terrain, player movement, collisions, lighting, animation, water, and other gameplay systems come together to create a playable world.",

    category: "Game",
    technologies: ["Godot 4", "GDScript"],
    status: "Experimental",
    year: 2026,

    motivation:
      "I wanted to learn how 3D games are actually built by making one myself instead of only following tutorials. The goal was to experiment with the core systems needed to turn a 3D environment into a playable game.",

    problem:
      "3D game development introduced a completely different set of concepts from the web and mobile development I was already familiar with. I had to learn how environments, terrain, physics, collisions, player movement, animation, and other game systems interact in real time.",

    solution:
      "I built a small horror-inspired environment in Godot and gradually added the systems needed to explore it as a game. Rather than focusing on creating a large or polished game, I used the project to understand how the individual pieces of a 3D game fit together.",

    challenges: [
      "Learning Godot's 3D scene, node, physics, and collision systems.",
      "Getting the player to move correctly across uneven terrain.",
      "Building and shaping a 3D environment while keeping gameplay and exploration in mind.",
      "Understanding how lighting, animation, water, and environmental elements contribute to the atmosphere.",
    ],

    lessons: [
      "3D game development requires thinking about movement, physics, space, and collisions very differently from application development.",
      "Building a small game from scratch made it much easier to understand how Godot's nodes, scenes, and systems work together.",
      "A playable prototype is a useful way to learn game development because every new feature exposes another part of the engine.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
