import { Project } from "./types";

export const accountManagementProject: Project = {
  id: "account-management",
  nameProject: "Account Management",
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
    "projects.data.account-management.highlights.react",
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
};
