"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`item-${index}`} className="border-sand">
          <AccordionTrigger className="py-5 text-left hover:no-underline">
            <span className="font-display pr-2 text-xl text-forest sm:text-2xl md:text-3xl">{item.q}</span>
          </AccordionTrigger>
          <AccordionContent className="text-lg leading-8 text-ink md:text-xl md:leading-9">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
