export type SupportedLocale = 'pt' | 'en';

export const developerCode: Record<SupportedLocale, string> = {
  pt: `interface Developer {
  name: string;
  role: 'Frontend Developer';
  stack: string[];
  principles: string[];
  mindset: string;
  focus: string[];
  learning: boolean;
}

const developer: Developer = {
  name: 'Guilherme Campos',
  role: 'Frontend Developer',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  principles: ['Clean Code', 'SRP', 'Acessibilidade por padrão'],
  mindset: 'Interfaces claras para usuários, código claro para devs',
  focus: ['UI/UX', 'Performance', 'Manutenibilidade'],
  learning: true,
};`,

  en: `interface Developer {
  name: string;
  role: 'Frontend Developer';
  stack: string[];
  principles: string[];
  mindset: string;
  focus: string[];
  learning: boolean;
}

const developer: Developer = {
  name: 'Guilherme Campos',
  role: 'Frontend Developer',
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  principles: [['Clean Code', 'SRP', 'Accessibility by default'],
  mindset: 'Clear interfaces for users, clean code for developers',
  focus: ['UI/UX', 'Performance', 'Maintainability'],
  learning: true,
};`,
};