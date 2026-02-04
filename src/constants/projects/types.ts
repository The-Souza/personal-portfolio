export type ProjectStatus = "inDevelopment" | "completed" | "inMaintenance";
export type ProjectRole = "Frontend" | "Fullstack";

export interface ProjectMedia {
  previewImage?: string;
  video?: string;
}

export interface ProjectLinks {
  demo?: string;
  github?: string;
}

export interface ProjectOutcome {
  context: string;
  solution: string;
  result: string;
}

export interface Project {
  id: string;
  nameProject: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;
  role?: string;
  status?: ProjectStatus;
  highlights?: string[];
  techs: string[];
  features?: string[];
  architecture?: string[];
  outcome?: ProjectOutcome;
  media?: ProjectMedia;
  links?: ProjectLinks;
  featured?: boolean;
}