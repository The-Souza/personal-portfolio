import {
  Layers,
  LayoutDashboard,
  Database,
  Workflow,
  Gauge,
  Plug,
} from "lucide-react";

export interface BentoItem {
  titleKey: string;
  descriptionKey: string;
  labelKey?: string;
  icon: React.ElementType;
}

export const services: BentoItem[] = [
  {
    titleKey: "services.data.frontendDevelopment.title",
    labelKey: "services.data.frontendDevelopment.label",
    descriptionKey: "services.data.frontendDevelopment.description",
    icon: LayoutDashboard,
  },
  {
    titleKey: "services.data.backendIntegration.title",
    labelKey: "services.data.backendIntegration.label",
    descriptionKey: "services.data.backendIntegration.description",
    icon: Database,
  },
  {
    titleKey: "services.data.projectsFullstack.title",
    labelKey: "services.data.projectsFullstack.label",
    descriptionKey: "services.data.projectsFullstack.description",
    icon: Layers,
  },
  {
    titleKey: "services.data.metodologi.title",
    labelKey: "services.data.metodologi.label",
    descriptionKey: "services.data.metodologi.description",
    icon: Workflow,
  },
  {
    titleKey: "services.data.performanceOptimization.title",
    labelKey: "services.data.performanceOptimization.label",
    descriptionKey: "services.data.performanceOptimization.description",
    icon: Gauge,
  },
  {
    titleKey: "services.data.integration.title",
    labelKey: "services.data.integration.label",
    descriptionKey: "services.data.integration.description",
    icon: Plug,
  },
];
