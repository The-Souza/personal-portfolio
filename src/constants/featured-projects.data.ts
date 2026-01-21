export interface FeaturedProject {
  id: string;
  titleKey: string;
  descriptionKey: string;
  longDescriptionKey: string;

  highlights?: string[];
  techs: string[];
  features?: string[];
  architecture?: string[];

  media?: {
    previewImage?: string;
    video?: string;
  };

  links?: {
    github?: string;
    demo?: string;
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "portfolio",
    titleKey: "featured.data.portfolio.title",
    descriptionKey: "featured.data.portfolio.description",
    longDescriptionKey: "featured.data.portfolio.longDescription",

    highlights: [
      "featured.data.portfolio.highlights.frontend",
      "featured.data.portfolio.highlights.next",
      "featured.data.portfolio.highlights.i18n",
      "featured.data.portfolio.highlights.responsive",
      "featured.data.portfolio.highlights.production",
    ],

    techs: ["Next.js", "React", "TypeScript", "Tailwind CSS", "i18n"],

    features: [
      "featured.data.portfolio.features.i18n",
      "featured.data.portfolio.features.responsive",
      "featured.data.portfolio.features.components",
      "featured.data.portfolio.features.media",
    ],

    architecture: [
      "featured.data.portfolio.architecture.components",
      "featured.data.portfolio.architecture.srp",
      "featured.data.portfolio.architecture.separation",
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
    titleKey: "featured.data.account.title",
    descriptionKey: "featured.data.account.description",
    longDescriptionKey: "featured.data.account.longDescription",

    highlights: [
      "featured.data.account.highlights.fullstack",
      "featured.data.account.highlights.clean",
      "featured.data.account.highlights.jwt",
      "featured.data.account.highlights.dashboard",
      "featured.data.account.highlights.production",
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
      "featured.data.account.features.auth",
      "featured.data.account.features.dashboard",
      "featured.data.account.features.crud",
      "featured.data.account.features.theme",
      "featured.data.account.features.mobile",
    ],

    architecture: [
      "featured.data.account.architecture.clean",
      "featured.data.account.architecture.serverless",
      "featured.data.account.architecture.jwt",
      "featured.data.account.architecture.context",
      "featured.data.account.architecture.supabase",
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
