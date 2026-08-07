export const coreSkills = ['JS', 'TS', 'HTML', 'CSS', 'PHP', 'React'];

export type PlanetDesign = 'default' | 'core' | 'markup' | 'tools' | 'framework' | 'design';

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
    design: 'tools' as 'tools',
    headline: 'Tools',
  },
];

export const designSetMobile = {
  default: {
    planet: 'planet-markup',
    card: 'bg-skill-markup/7',
    content: '',
    badgesVariant: 'default' as 'default',
  },
  markup: {
    planet:
      'planet-markup group-data-[open]/accordion-item:shadow-[0_0_20px_0_var(--color-skill-markup),0_0_40px_0_var(--color-skill-markup),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset] transition-all duration-300',
    card: 'data-open:bg-skill-markup/7 data-open:border-skill-markup/33',
    content: 'bg-transparent border-t-skill-markup/20',
    badgesVariant: 'markup' as 'markup',
  },
  tools: {
    planet:
      'planet-tools group-data-[open]/accordion-item:shadow-[0_0_20px_0_var(--color-skill-tools),0_0_40px_0_var(--color-skill-tools),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset] transition-all duration-300',
    card: 'data-open:bg-skill-tools/7 data-open:border-skill-tools/33',
    content: 'bg-transparent border-t-skill-tools/20',
    badgesVariant: 'tools' as 'tools',
  },
  framework: {
    planet:
      'planet-framework group-data-[open]/accordion-item:shadow-[0_0_20px_0_var(--color-skill-framework),0_0_40px_0_var(--color-skill-framework),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset] transition-all duration-300',
    card: 'data-open:bg-skill-framework/7 data-open:border-skill-framework/33',
    content: 'bg-transparent border-t-skill-framework/20',
    badgesVariant: 'framework' as 'framework',
  },
  design: {
    planet:
      'planet-design group-data-[open]/accordion-item:shadow-[0_0_20px_0_var(--color-skill-design),0_0_40px_0_var(--color-skill-design),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset] transition-all duration-300',
    card: 'data-open:bg-skill-design/7 data-open:border-skill-design/33',
    content: 'bg-transparent border-t-skill-design/20',
    badgesVariant: 'design' as 'design',
  },
  core: {
    planet: '',
    card: '',
    content: '',
    badgesVariant: 'design' as 'design',
  },
};
