export const coreSkills = ['JS', 'TS', 'HTML', 'CSS', 'PHP', 'React'];

export type PlanetDesign = 'default' | 'markup' | 'tool' | 'framework' | 'design';

export interface SkillPlanets {
  class?: string;
  badgesList: string[];
  description: string;
  design: PlanetDesign;
  headline: string;
}

export const skillPlanets: SkillPlanets[] = [
  {
    class: '',
    badgesList: ['React', 'Next.js', 'Laravel Blade', 'Angular', '...'],
    description: '5 technologies',
    design: 'framework' as 'framework',
    headline: 'Framework',
  },
  {
    class: '',
    badgesList: ['CSS', 'SCSS/Sass', 'Tailwind', 'Bulma', 'Material UI'],
    description: '5 technologies',
    design: 'markup' as 'markup',
    headline: 'Markup',
  },
  {
    class: '',
    badgesList: ['Figma', 'Miro'],
    description: '2 technologies',
    design: 'design' as 'design',
    headline: 'Design',
  },
  {
    class: '',
    badgesList: ['Git/GitHub', 'Docker (ddev)', 'Vite', 'Vs Code', 'DevTools'],
    description: '6 technologies',
    design: 'tool' as 'tool',
    headline: 'Tools',
  },
];
