import { Project } from "./types";

export const billwiseDashboardProject: Project = {
  id: "billwise-dashboard",
  nameProject: "BillWise Dashboard",
  featured: true,

  titleKey: "projects.data.billwise-dashboard.title",
  descriptionKey: "projects.data.billwise-dashboard.description",
  longDescriptionKey: "projects.data.billwise-dashboard.longDescription",

  role: "Fullstack",
  status: "completed",

  outcome: {
    context: "projects.data.billwise-dashboard.outcome.context",
    solution: "projects.data.billwise-dashboard.outcome.solution",
    result: "projects.data.billwise-dashboard.outcome.result",
  },

  highlights: [
    "projects.data.billwise-dashboard.highlights.nextjs",
    "projects.data.billwise-dashboard.highlights.prisma",
    "projects.data.billwise-dashboard.highlights.supabase",
    "projects.data.billwise-dashboard.highlights.workspaces",
    "projects.data.billwise-dashboard.highlights.production",
  ],

  techs: [
    "Next.js",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Supabase",
    "Tailwind CSS",
    "Radix UI",
    "React Hook Form",
    "Zod",
    "TanStack Query",
    "Recharts",
    "Vitest",
  ],

  features: [
    "projects.data.billwise-dashboard.features.auth",
    "projects.data.billwise-dashboard.features.workspaces",
    "projects.data.billwise-dashboard.features.dashboard",
    "projects.data.billwise-dashboard.features.budgets",
    "projects.data.billwise-dashboard.features.analytics",
    "projects.data.billwise-dashboard.features.recurrences",
    "projects.data.billwise-dashboard.features.notifications",
  ],

  architecture: [
    "projects.data.billwise-dashboard.architecture.appRouter",
    "projects.data.billwise-dashboard.architecture.serverActions",
    "projects.data.billwise-dashboard.architecture.prisma",
    "projects.data.billwise-dashboard.architecture.workspaces",
    "projects.data.billwise-dashboard.architecture.cron",
  ],

  media: {
    previewImage: "/images/billwise-dashboard-preview.png",
    video: "/videos/billwise-dashboard-demo.mp4",
  },

  links: {
    github: "https://github.com/The-Souza/billwise-dashboard",
    demo: "https://billwise-dashboard.vercel.app",
  },
};
