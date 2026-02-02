import { Project } from "./types";

export const personalPortfolioProject: Project = {
  id: "portfolio",
  nameProject: "Portfólio",
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
};
