export interface ProjectOutcome {
  context: string;
  solution: string;
  result: string;
}

export type ProjectStatus = "inDevelopment" | "completed" | "inMaintenance";
export type ProjectRole = "Frontend" | "Fullstack";

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;

  role?: ProjectRole;
  status?: ProjectStatus;
  highlights?: string[];
  techs: string[];
  features?: string[];
  architecture?: string[];

  outcome?: ProjectOutcome;

  media?: {
    previewImage?: string;
    video?: string;
  };

  links?: {
    github?: string;
    demo?: string;
  };

  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    featured: true,

    titleKey: "projects.data.portfolio.title",
    descriptionKey: "projects.data.portfolio.description",
    longDescriptionKey: "projects.data.portfolio.longDescription",

    role: "Frontend",
    status: "inDevelopment",

    highlights: [
      "projects.data.portfolio.highlights.frontend",
      "projects.data.portfolio.highlights.next",
      "projects.data.portfolio.highlights.i18n",
      "projects.data.portfolio.highlights.responsive",
      "projects.data.portfolio.highlights.production",
    ],

    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n"],

    features: [
      "projects.data.portfolio.features.i18n",
      "projects.data.portfolio.features.responsive",
      "projects.data.portfolio.features.components",
      "projects.data.portfolio.features.media",
    ],

    architecture: [
      "projects.data.portfolio.architecture.components",
      "projects.data.portfolio.architecture.srp",
      "projects.data.portfolio.architecture.separation",
    ],

    media: {
      previewImage: "/images/portfolio-preview.png",
      video: "/videos/portfolio-demo.mp4",
    },

    links: {
      github: "https://github.com/The-Souza/personal-portfolio",
    },
  },

  {
    id: "account-management",
    featured: true,

    titleKey: "projects.data.account-management.title",
    descriptionKey: "projects.data.account-management.description",
    longDescriptionKey: "projects.data.account-management.longDescription",

    role: "Fullstack",
    status: "completed",

    outcome: {
      context: "projects.data.account-management.outcome.context",
      solution: "projects.data.account-management.outcome.solution",
      result: "projects.data.account-management.outcome.result",
    },

    highlights: [
      "projects.data.account-management.highlights.fullstack",
      "projects.data.account-management.highlights.clean",
      "projects.data.account-management.highlights.jwt",
      "projects.data.account-management.highlights.dashboard",
      "projects.data.account-management.highlights.production",
    ],

    techs: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Supabase",
      "Tailwind CSS",
    ],

    features: [
      "projects.data.account-management.features.auth",
      "projects.data.account-management.features.dashboard",
      "projects.data.account-management.features.crud",
      "projects.data.account-management.features.theme",
      "projects.data.account-management.features.mobile",
    ],

    architecture: [
      "projects.data.account-management.architecture.clean",
      "projects.data.account-management.architecture.serverless",
      "projects.data.account-management.architecture.jwt",
      "projects.data.account-management.architecture.context",
      "projects.data.account-management.architecture.supabase",
    ],

    media: {
      previewImage: "/images/account-preview.png",
      video: "/videos/account-management-demo.mp4",
    },

    links: {
      github: "https://github.com/The-Souza/Account-Management",
      demo: "https://account-management-gilt.vercel.app/",
    },
  },
];
