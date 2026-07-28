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
  design: 'teal' | 'red' | 'purple' | 'orange';
}

const designSet = {
  teal: { planet: 'planet-teal', card: 'bg-[rgba(6,182,212,0.33)]', badges: '' },
  red: { planet: 'planet-red', card: 'bg-[rgba(6,182,212,0.33)]', badges: '' },
  purple: { planet: 'planet-purple', card: 'bg-[rgba(6,182,212,0.33)]', badges: '' },
  orange: { planet: 'planet-orange', card: 'bg-[rgba(6,182,212,0.33)]', badges: '' },
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
          <AccordionItem value={item.headline} key={`${item.headline} - ${index}`}>
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
            <AccordionContent>
              <Badges
                badgeList={item.badgesList}
                className={cn('', designSet[item.design].badges)}
              ></Badges>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
