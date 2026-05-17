import { Project } from "./types";

export const consultaNfeCteProject: Project = {
  id: "consulta-nfe-cte",
  nameProject: "Consulta NF-e / CT-e",
  featured: true,

  titleKey: "projects.data.consulta-nfe-cte.title",
  descriptionKey: "projects.data.consulta-nfe-cte.description",
  longDescriptionKey: "projects.data.consulta-nfe-cte.longDescription",

  role: "Desktop",
  status: "completed",

  highlights: [
    "projects.data.consulta-nfe-cte.highlights.python",
    "projects.data.consulta-nfe-cte.highlights.desktop",
    "projects.data.consulta-nfe-cte.highlights.ocr",
    "projects.data.consulta-nfe-cte.highlights.excel",
    "projects.data.consulta-nfe-cte.highlights.completed",
  ],

  techs: ["Python", "CustomTkinter", "Tesseract OCR", "PyInstaller", "keyring"],

  features: [
    "projects.data.consulta-nfe-cte.features.login",
    "projects.data.consulta-nfe-cte.features.search",
    "projects.data.consulta-nfe-cte.features.ocr",
    "projects.data.consulta-nfe-cte.features.upload",
    "projects.data.consulta-nfe-cte.features.excel",
  ],

  architecture: [
    "projects.data.consulta-nfe-cte.architecture.threads",
    "projects.data.consulta-nfe-cte.architecture.keyring",
    "projects.data.consulta-nfe-cte.architecture.env",
    "projects.data.consulta-nfe-cte.architecture.build",
  ],

  media: {
    previewImage: "/images/consulta-nfe-cte-preview.png",
  },

  links: {
    github: "https://github.com/The-Souza/consulta-nfe-cte",
  },
};
