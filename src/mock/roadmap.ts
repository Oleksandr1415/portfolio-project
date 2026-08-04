export type RoadmapStopVariant = 'science' | 'experience' | 'germany';

export interface RoadmapStop {
  badges: string[];
  badgesVariant: RoadmapStopVariant;
  description: string;
  headlineBlock?: {
    headline: string;
    subHeadline?: string;
    postHeadline?: string;
  };
  variant: RoadmapStopVariant;
}

export const roadmapStops: RoadmapStop[] = [
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description:
      'Schwerpunkt: Theorie und Technologie der Programmierung. Abschluss mit Deutscher Anerkennung.',
    headlineBlock: {
      headline: 'B.Sc. Informatik & Kybernetik',
      subHeadline: 'Sept 2015 – Juni 2019',
      postHeadline: 'Nationale Taras-Schewtschenko-Universität Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description: 'Schwerpunkt Nanosystemphysik. Abschluss mit Auszeichnung.',
    headlineBlock: {
      headline: 'M.Sc. Physik & Astronomie',
      subHeadline: 'Sept 2019 – Juni 2021',
      postHeadline: 'Nationale Taras-Schewtschenko-Universität Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['internship'],
    badgesVariant: 'experience',
    description:
      'Entwicklung einer Webanwendung mit Java, PostgreSQL, TypeScript, React. OAuth2/OIDC-Integration und Datenbankdesign.',
    headlineBlock: {
      headline: 'Full-Stack Entwickler (Praktikum)',
      subHeadline: 'Sept 2019 – Jan 2020',
      postHeadline: 'NetCracker, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['job'],
    badgesVariant: 'experience',
    description:
      'EXADS Ad-Tech-Plattform: TypeScript Strict Null Checks, Refactoring, Webkomponenten für Self-Service & Echtzeit-Statistiken.',
    headlineBlock: {
      headline: 'Frontend Entwickler',
      subHeadline: 'Jan 2020 – Sept 2020',
      postHeadline: 'Iteams, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description:
      'Fokus auf Abschlussprüfungen, Diplomarbeit und Bewerbung um eine Promotionsstelle.',
    headlineBlock: {
      headline: 'Akademische Phase',
      subHeadline: 'Sept 2020 – Juni 2021',
      postHeadline: 'Nationale Taras-Schewtschenko-Universität Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['course'],
    badgesVariant: 'experience',
    description:
      'Vertiefung in React, TypeScript, Bootstrap, Material UI, Git, Figma, Jira. Enterprise-Softwareentwicklungsmethodik.',
    headlineBlock: {
      headline: 'Enterprise Frontend-Entwicklung',
      subHeadline: 'Juni 2021 – Aug 2021',
      postHeadline: 'Mate Academy, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['course'],
    badgesVariant: 'experience',
    description:
      'Migration von JavaScript-Komponenten zu React. MultiTenant Document Governance Platform für öffentliche Einrichtungen.',
    headlineBlock: {
      headline: 'Entwickler',
      subHeadline: 'Aug 2021 – März 2023',
      postHeadline: 'Intecracy Group, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description:
      'Forschung im Bereich Computeringenieurwesen. Abbruch zugunsten des Neuanfangs in Deutschland.',
    headlineBlock: {
      headline: 'Promotionsstudium (nicht abgeschlossen)',
      subHeadline: 'Sept 2021 – Feb 2023',
      postHeadline: 'KPI – Polytechnisches Ihor-Sikorskyj-Institut, Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['finished'],
    badgesVariant: 'germany',
    description:
      'Intensives Sprachstudium vom Anfänger bis zum C1-Niveau. Fundament für die neue berufliche Laufbahn in Deutschland.',
    headlineBlock: {
      headline: 'Deutsche Sprache C1',
      subHeadline: 'Juni 2023 – Juni 2025',
      postHeadline: 'Sprachschule, Deutschland',
    },
    variant: 'germany',
  },
  {
    badges: ['finished'],
    badgesVariant: 'germany',
    description:
      'Praktikum als Frontend-Entwickler — erster professioneller Schritt auf dem deutschen Arbeitsmarkt.',
    headlineBlock: {
      headline: 'Front-end Entwickler Praktikum',
      subHeadline: 'Juni 2023 – Juni 2025',
      postHeadline: 'Duisburg, Deutschland',
    },
    variant: 'germany',
  },
];

interface RoadmapStopVariants {
  container: string;
  line: string;
  postHeadlineClass: string;
  subHeadlineClass: string;
}

export const roadmapStopVariants: Record<RoadmapStopVariant, RoadmapStopVariants> = {
  science: {
    container: 'bg-primary-light/10 border-primary-light/20',
    line: 'via-primary',
    postHeadlineClass: 'text-science/80 ',
    subHeadlineClass: 'text-science/70',
  },
  experience: {
    container: 'bg-experience/10 border-experience/20',
    line: 'via-experience/80',
    postHeadlineClass: 'text-experience/80 ',
    subHeadlineClass: 'text-experience/70',
  },
  germany: {
    container: 'bg-germany/12 border-germany/30',
    line: 'via-germany',
    postHeadlineClass: 'text-germany/85 ',
    subHeadlineClass: 'text-germany/70',
  },
};
