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

export const roadmapStopsEnglish: RoadmapStop[] = [
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description:
      'Field of study: Programming theory and technology. Finished (translated and approved in Germany).',
    headlineBlock: {
      headline: 'B.Sc. Informatics. Cybernetics',
      subHeadline: 'Sep 2015 – Jun 2019',
      postHeadline: 'Taras Shevschenko National Univercity Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description: 'Field of study: Physics of nanosystems. Finished with regards.',
    headlineBlock: {
      headline: 'M.Sc. Physik & Astronomie',
      subHeadline: 'Sep 2019 – Jun 2021',
      postHeadline: 'Taras Shevschenko National Univercity Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['internship'],
    badgesVariant: 'experience',
    description:
      'Developing a web-application with Java, PostgreSQL, TypeScript, React. OAuth2/OIDC-Integration and Database design',
    headlineBlock: {
      headline: 'Full-Stack Developer (Praktikum)',
      subHeadline: 'Sep 2019 – Jan 2020',
      postHeadline: 'NetCracker, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['job'],
    badgesVariant: 'experience',
    description:
      'EXADS Ad-Tech-Platform: TypeScript, Strict Null Checks, Refactoring, Webcomponents for Self-Service & Real-time statistics.',
    headlineBlock: {
      headline: 'Frontend Developer',
      subHeadline: 'Jan 2020 – Sep 2020',
      postHeadline: 'Iteams, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['finished'],
    badgesVariant: 'science',
    description: "Focused on Master's project and exams. ",
    headlineBlock: {
      headline: '"Science" Phase',
      subHeadline: 'Sep 2020 – Jun 2021',
      postHeadline: 'Taras Shevschenko National Univercity Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['course'],
    badgesVariant: 'experience',
    description:
      'Advanced training in React, TypeScript, Bootstrap, Material UI, Git, Figma, and Jira, with a focus on enterprise software development methodologies.',
    headlineBlock: {
      headline: 'Enterprise Frontend-Development',
      subHeadline: 'Jun 2021 – Aug 2021',
      postHeadline: 'Mate Academy, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['course'],
    badgesVariant: 'experience',
    description:
      'JavaScript components Migration to React as part of a multi-tenant document governance platform for public-sector organizations.',
    headlineBlock: {
      headline: 'Entwickler',
      subHeadline: 'Aug 2021 – Mar 2023',
      postHeadline: 'Intecracy Group, Kyiv',
    },
    variant: 'experience',
  },
  {
    badges: ['not finished'],
    badgesVariant: 'science',
    description: 'Conducted research in Computer Engineering before relocating to Germany.',
    headlineBlock: {
      headline: 'Ph.D. (not finished) had to move',
      subHeadline: 'Sep 2021 – Feb 2023',
      postHeadline: 'Igor Sikorsky National Technical University, Kyiw',
    },
    variant: 'science',
  },
  {
    badges: ['finished'],
    badgesVariant: 'germany',
    description:
      'Intensive language studies from beginner to C1 level. Foundation for a new professional career in Germany.',
    headlineBlock: {
      headline: 'German language level C1',
      subHeadline: 'Jun 2023 – Jun 2025',
      postHeadline: 'Language schools, Germany',
    },
    variant: 'germany',
  },
  {
    badges: ['finished'],
    badgesVariant: 'germany',
    description:
      'Internship as a Front-End Developer — sorting out how the German job market works.',
    headlineBlock: {
      headline: 'Front-end Developer Praktikum',
      subHeadline: 'Jun 2023 – Jun 2025',
      postHeadline: 'Nauten, Germany',
    },
    variant: 'germany',
  },
];

interface RoadmapStopVariants {
  container: string;
  line: string;
  postHeadlineClass: string;
  subHeadlineClass: string;
  circle: string;
}

export const roadmapStopVariants: Record<RoadmapStopVariant, RoadmapStopVariants> = {
  science: {
    container: 'bg-primary-light/10 border-primary-light/20',
    line: 'via-primary',
    postHeadlineClass: 'text-science/80 ',
    subHeadlineClass: 'text-science/70',
    circle: 'stroke-science',
  },
  experience: {
    container: 'bg-experience/10 border-experience/20',
    line: 'via-experience/80',
    postHeadlineClass: 'text-experience/80 ',
    subHeadlineClass: 'text-experience/70',
    circle: 'stroke-experience',
  },
  germany: {
    container: 'bg-germany/12 border-germany/30',
    line: 'via-germany',
    postHeadlineClass: 'text-germany/85 ',
    subHeadlineClass: 'text-germany/70',
    circle: 'stroke-germany',
  },
};

export const roadmapHistory: Record<RoadmapStopVariant, string> = {
  science: 'Univercities, schools, courses',
  experience: 'Praktikums, real job experience',
  germany: 'New read after moving to Germany',
};
