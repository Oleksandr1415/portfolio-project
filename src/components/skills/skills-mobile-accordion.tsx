import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/partials/accordion/index.tsx';
import { cn } from '@/utils/helpers';
import Badges from '@/partials/badges/badges.tsx';
import { designSetMobile, type PlanetDesign } from '@/mock/skills.ts';

export interface AccordionData {
  class: string;
  badgesList: string[];
  description: string;
  headline: string;
  design: PlanetDesign;
}

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
        const selectedDesign = designSetMobile[item.design];

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
