export interface Experience {
  id: string;
  placeKey: string;
  positionKey: string;
  period: string;
  responsibilitiesKey: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: "crea-sp",
    placeKey: "about.experience.crea-sp.place",
    positionKey: "about.experience.crea-sp.position",
    period: "about.experience.crea-sp.period",
    responsibilitiesKey: [
      "about.experience.crea-sp.responsibilities.modernization",
      "about.experience.crea-sp.responsibilities.components",
      "about.experience.crea-sp.responsibilities.integration",
      "about.experience.crea-sp.responsibilities.architecture",
      "about.experience.crea-sp.responsibilities.testing",
      "about.experience.crea-sp.responsibilities.api",
      "about.experience.crea-sp.responsibilities.versioning",
    ],
  },
];
