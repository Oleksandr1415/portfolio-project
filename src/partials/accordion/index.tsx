import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/utils/helpers';

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion-root"
      className={cn('flex w-full flex-col gap-3', className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item data-slot="accordion-item" className={cn('', className)} {...props} />
  );
}

function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'group/accordion-trigger relative aria-disabled:pointer-events-none aria-disabled:opacity-50',
          '',
          className,
        )}
        {...props}
      >
        {children}
        <div data-slot="accordion-trigger-icon">
          <ChevronDownIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
          />
          <ChevronUpIcon
            data-slot="accordion-trigger-icon"
            className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-content"
      className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden transition-all duration-300"
      {...props}
    >
      <div className={cn('[&_a]:hover:text-foreground', className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
