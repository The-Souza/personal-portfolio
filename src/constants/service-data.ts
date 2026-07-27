import {
  Layers,
  LayoutDashboard,
  Database,
  Workflow,
  Gauge,
  Plug,
  Terminal,
} from "lucide-react";

export interface ServiceItem {
  titleKey: string;
  descriptionKey: string;
  labelKey?: string;
  icon: React.ElementType;
  primary?: boolean;
}

export const services: ServiceItem[] = [
  {
    titleKey: "services.data.frontendDevelopment.title",
    labelKey: "services.data.frontendDevelopment.label",
    descriptionKey: "services.data.frontendDevelopment.description",
    icon: LayoutDashboard,
    primary: true,
  },
  {
    titleKey: "services.data.backendIntegration.title",
    labelKey: "services.data.backendIntegration.label",
    descriptionKey: "services.data.backendIntegration.description",
    icon: Database,
    primary: true,
  },
  {
    titleKey: "services.data.projectsFullstack.title",
    labelKey: "services.data.projectsFullstack.label",
    descriptionKey: "services.data.projectsFullstack.description",
    icon: Layers,
    primary: true,
  },
  {
    titleKey: "services.data.methodology.title",
    labelKey: "services.data.methodology.label",
    descriptionKey: "services.data.methodology.description",
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
  {
    titleKey: "services.data.automation.title",
    labelKey: "services.data.automation.label",
    descriptionKey: "services.data.automation.description",
    icon: Terminal,
  },
];
