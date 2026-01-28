import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";

export const CATEGORY_META = {
  frontend: {
    labelKey: "about.categories.frontend",
    icon: Code2,
  },
  backend: {
    labelKey: "about.categories.backend",
    icon: Server,
  },
  database: {
    labelKey: "about.categories.database",
    icon: Database,
  },
  tools: {
    labelKey: "about.categories.tools",
    icon: Wrench,
  },
} as const;