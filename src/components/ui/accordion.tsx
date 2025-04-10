'use client';

import { cn } from '@/utils/Helpers';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronRight } from 'lucide-react';

import * as React from 'react';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({ ref, className, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Item> | null> }) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b', className)}
    {...props}
  />
);
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Trigger> | null> }) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-5 text-left text-lg font-medium transition-all hover:no-underline [&[data-state=open]>svg]:rotate-90',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRight className="size-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = ({ ref, className, children, ...props }: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & { ref?: React.RefObject<React.ElementRef<typeof AccordionPrimitive.Content> | null> }) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-base text-muted-foreground transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-5 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
