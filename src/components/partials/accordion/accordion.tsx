import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordionDirectives';
import { cn } from '@/utils/helpers';
import Badges from '../badges.tsx';

export interface AccordionData {
  class: string;
  badgesList: string[];
  description: string;
  headline: string;
  design: 'default' | 'markup' | 'tool' | 'framework' | 'design';
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
  tool: {
    planet:
      'planet-tool group-data-[open]/accordion-item:shadow-[0_0_20px_0_var(--color-skill-tool),0_0_40px_0_var(--color-skill-tool),-4px_-3px_10px_0_rgba(0,0,0,0.50)_inset] transition-all duration-300',
    card: 'data-open:bg-skill-tool/7 data-open:border-skill-tool/33',
    content: 'bg-transparent border-t-skill-tool/20',
    badgesVariant: 'tool' as 'tool',
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
};

interface AccordionComponentProps {
  class?: string;
  accordionItems: AccordionData[];
  defaultValue?: string;
  multiple?: boolean;
}

export function AccordionComponent({
  class: className = '',
  accordionItems,
  defaultValue = '',
  multiple = false,
}: AccordionComponentProps) {
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
        console.log(defaultValue);
        console.log(item.headline);
        const selectedDesign = designSet[item.design];

        return (
          <AccordionItem
            className={cn('group/accordion-item', selectedDesign.card)}
            key={`${item.headline} - ${index}`}
            value={item.headline}
          >
            <AccordionTrigger>
              <div
                data-slot="skill-planet"
                className={cn('size-10 w-10 shrink-0', selectedDesign.planet)}
              ></div>

              <section
                data-slot="card-description"
                className="flex w-full grow flex-col items-start gap-1 pl-5"
              >
                <h4>{item.headline}</h4>
                <span className="text-xs font-medium text-white/35">{item.description}</span>
              </section>
            </AccordionTrigger>
            <AccordionContent className={cn(selectedDesign.content)}>
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
