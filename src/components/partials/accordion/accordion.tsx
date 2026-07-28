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
  accordionItems: AccordionData[];
}

export function AccordionComponent({ accordionItems }: AccordionComponentProps) {
  if (!accordionItems) {
    return <p>No skills are loaded</p>;
  }

  return (
    <Accordion defaultValue={['']} className="max-w-lg">
      {accordionItems.map((item, index) => {
        const selectedDesign = designSet[item.design];

        return (
          <AccordionItem
            value={item.headline}
            key={`${item.headline} - ${index}`}
            className={cn('group/accordion-item', selectedDesign.card)}
          >
            <AccordionTrigger>
              <div
                data-slot="skill-planet"
                className={cn('size-10 w-10 shrink-0', selectedDesign.planet)}
                // style={{
                //   boxShadow:
                //     '0 0 20px 0 rgba(236, 72, 153, 0.40), 0 0 40px 0 rgba(236, 72, 153, 0.16), -4px -3px 10px 0 rgba(0, 0, 0, 0.50) inset',
                // }}
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

// box-shadow: 0 0 20px 0 rgba(6, 182, 212, 0.40),  0 0 40px 0 rgba(6, 182, 212, 0.16),  -4px -3px 10px 0 rgba(0, 0, 0, 0.50) inset;
// box-shadow: 0 0 20px 0 rgba(236, 72, 153, 0.40), 0 0 40px 0 rgba(236, 72, 153, 0.16), -4px -3px 10px 0 rgba(0, 0, 0, 0.50) inset;
// box-shadow: 0 0 20px 0 rgba(168, 85, 247, 0.40), 0 0 40px 0 rgba(168, 85, 247, 0.16), -4px -3px 10px 0 rgba(0, 0, 0, 0.50) inset;
// box-shadow: 0 0 20px 0 rgba(249, 115, 22, 0.40), 0 0 40px 0 rgba(249, 115, 22, 0.16), -4px -3px 10px 0 rgba(0, 0, 0, 0.50) inset;
