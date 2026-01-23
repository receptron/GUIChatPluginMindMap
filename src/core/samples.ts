/**
 * Mind Map Plugin Samples
 */

import type { ToolSample } from "gui-chat-protocol";

export const samples: ToolSample[] = [
  {
    name: "AI Applications",
    args: {
      action: "create",
      title: "AI Applications",
      centralIdea: "Artificial Intelligence",
      ideas: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Robotics",
        "Expert Systems",
        "Speech Recognition",
      ],
    },
  },
  {
    name: "Web Development",
    args: {
      action: "create",
      title: "Modern Web Development",
      centralIdea: "Web Development",
      ideas: [
        "Frontend",
        "Backend",
        "Database",
        "DevOps",
        "Security",
      ],
    },
  },
  {
    name: "Project Planning",
    args: {
      action: "create",
      title: "New Project",
      centralIdea: "Project Goals",
      ideas: [
        "Research",
        "Design",
        "Implementation",
        "Testing",
        "Deployment",
        "Maintenance",
      ],
    },
  },
  {
    name: "Creative Writing",
    args: {
      action: "create",
      title: "Story Ideas",
      centralIdea: "Adventure Story",
      ideas: [
        "Main Character",
        "Setting",
        "Conflict",
        "Plot Twists",
        "Resolution",
      ],
    },
  },
];
