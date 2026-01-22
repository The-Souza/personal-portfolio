import { ClipboardList, Layers, Code2, Rocket } from "lucide-react";

export interface ProcessStep {
  step: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    titleKey: "process.data.planning.title",
    descriptionKey: "process.data.planning.description",
    icon: ClipboardList,
  },
  {
    step: "02",
    titleKey: "process.data.architecture.title",
    descriptionKey: "process.data.architecture.description",
    icon: Layers,
  },
  {
    step: "03",
    titleKey: "process.data.development.title",
    descriptionKey: "process.data.development.description",
    icon: Code2,
  },
  {
    step: "04",
    titleKey: "process.data.delivery.title",
    descriptionKey: "process.data.delivery.description",
    icon: Rocket,
  },
];
