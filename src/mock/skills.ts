export const coreSkills = ['JS', 'TS', 'HTML', 'CSS', 'PHP', 'React'];

export type PlanetVariant = 'default' | 'core' | 'markup' | 'tools' | 'framework' | 'design';

export interface SkillPlanet {
  class?: string;
  moons: string[];
  description: string;
  variant: PlanetVariant;
  headline: string;
}

export const skillPlanets: SkillPlanet[] = [
  {
    class: '',
    moons: ['React', 'Next.js', 'Laravel Blade', 'Angular', '...'],
    description: '5 technologies',
    variant: 'framework' as 'framework',
    headline: 'Framework',
  },
  {
    class: '',
    moons: ['CSS', 'SCSS/Sass', 'Tailwind', 'Bulma', 'Material UI'],
    description: '5 technologies',
    variant: 'markup' as 'markup',
    headline: 'Markup',
  },
  {
    class: '',
    moons: ['Figma', 'Miro'],
    description: '2 technologies',
    variant: 'design' as 'design',
    headline: 'Design',
  },
  {
    class: '',
    moons: ['Git/GitHub', 'Docker (ddev)', 'Vite', 'Vs Code', 'DevTools'],
    description: '6 technologies',
    variant: 'tools' as 'tools',
    headline: 'Tools',
  },
];

export const planetStyleVariants: Record<PlanetVariant, string> = {
  core: 'planet-core-desktop group-hover:planet-core-desktop-hover',
  default: '',
  design: 'planet-design-desktop group-hover:planet-design-desktop-hover',
  framework: 'planet-framework-desktop group-hover:planet-framework-desktop-hover',
  markup: 'planet-markup-desktop group-hover:planet-markup-desktop-hover',
  tools: 'planet-tools-desktop group-hover:planet-tools-desktop-hover',
};

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
