import {
  CssIcon,
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  Html5Icon,
  TailwindIcon,
  NodeJsIcon,
  PrismaIcon,
  PostgreSQLIcon,
  SupabaseIcon,
  GitIcon,
  GitHubIcon,
  EslintIcon,
  VercelIcon,
  InsomniaIcon,
  PythonIcon,
  PnpmIcon,
} from "@/icons";

export const STACKS = {
  frontend: {
    nextjs: {
      name: "Next.js",
      icon: NextJsIcon,
    },
    react: {
      name: "React",
      icon: ReactIcon,
    },
    typescript: {
      name: "TypeScript",
      icon: TypeScriptIcon,
    },
    javascript: {
      name: "JavaScript",
      icon: JavaScriptIcon,
    },
    html5: {
      name: "HTML5",
      icon: Html5Icon,
    },
    tailwind: {
      name: "Tailwind",
      icon: TailwindIcon,
    },
    css: {
      name: "CSS",
      icon: CssIcon,
    },
  },
  backend: {
    nodejs: {
      name: "Node.js",
      icon: NodeJsIcon,
    },
    nextjs: {
      name: "Next.js",
      icon: NextJsIcon,
    },
    prisma: {
      name: "Prisma",
      icon: PrismaIcon,
    },
  },
  database: {
    postgresql: {
      name: "PostgreSQL",
      icon: PostgreSQLIcon,
    },
    supabase: {
      name: "Supabase",
      icon: SupabaseIcon,
    },
  },
  automation: {
    python: {
      name: "Python",
      icon: PythonIcon,
    },
  },
  tools: {
    git: {
      name: "Git",
      icon: GitIcon,
    },
    github: {
      name: "GitHub",
      icon: GitHubIcon,
    },
    eslint: {
      name: "ESLint",
      icon: EslintIcon,
    },
    vercel: {
      name: "Vercel",
      icon: VercelIcon,
    },
    pnpm: {
      name: "pnpm",
      icon: PnpmIcon,
    },
    insomnia: {
      name: "Insomnia",
      icon: InsomniaIcon,
    },
  },
} as const;
