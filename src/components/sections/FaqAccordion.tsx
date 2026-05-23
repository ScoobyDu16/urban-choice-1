'use client';

import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProductFAQ, FAQ } from '@/types';

type FAQItem = ProductFAQ | FAQ;

interface FaqAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FaqAccordion({ faqs, className }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className={cn('space-y-2', className)}>
      {faqs.map((faq, index) => (
        <Accordion.Item
          key={'id' in faq ? faq.id : index}
          value={String(index)}
          className="bg-card overflow-hidden rounded-lg border"
        >
          <Accordion.Header>
            <Accordion.Trigger className="hover:bg-accent/50 [&[data-state=open]]:text-primary group flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium transition-colors">
              <span>{faq.question}</span>
              <ChevronDown
                className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm">
            <p className="text-muted-foreground px-5 pb-4 leading-relaxed">{faq.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
