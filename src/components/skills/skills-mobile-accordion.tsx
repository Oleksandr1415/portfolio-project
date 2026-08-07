import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../partials/accordion/index.tsx';
import { cn } from '@/utils/helpers';
import Badges from '../partials/badges.tsx';
import { type PlanetDesign } from '@/mock/skill-planets.ts';

export interface AccordionData {
  class: string;
  badgesList: string[];
  description: string;
  headline: string;
  design: PlanetDesign;
}

const designSet = {
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

interface SkillsMobileAccordionProps {
  class?: string;
  accordionItems: AccordionData[];
  defaultValue?: string;
  multiple?: boolean;
}

export default function skillsMobileAccordion({
  class: className = '',
  accordionItems,
  defaultValue = '',
  multiple = false,
}: SkillsMobileAccordionProps) {
  if (!accordionItems) {
    return <p>No skills are loaded</p>;
  }

  return (
    <Accordion
      className={cn(['max-w-lg', className])}
      defaultValue={[defaultValue]}
      multiple={multiple}
    >
      {accordionItems.map((item, index) => {
        const selectedDesign = designSet[item.design];

        return (
          <AccordionItem
            className={cn(
              'group/accordion-item flex flex-col rounded-2xl border border-white/10 bg-white/5 p-4 pb-0',
              selectedDesign.card,
            )}
            key={`${item.headline} - ${index}`}
            value={item.headline}
          >
            <AccordionTrigger className="flex w-full flex-row items-center justify-between pb-4">
              <div
                data-slot="skill-planet"
                className={cn('size-10 w-10 shrink-0', selectedDesign.planet)}
              ></div>

              <section
                data-slot="card-description"
                className="flex w-full grow flex-col items-start gap-1 pl-5"
              >
                <h4 className="text-text-gray-lighter">{item.headline}</h4>
                <span className="text-xs font-medium text-white/35">{item.description}</span>
              </section>
            </AccordionTrigger>
            <AccordionContent className={cn('border-t py-2.5 text-sm', selectedDesign.content)}>
              <Badges
                badgeList={item.badgesList}
                className={cn('')}
                variant={selectedDesign.badgesVariant}
              ></Badges>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
