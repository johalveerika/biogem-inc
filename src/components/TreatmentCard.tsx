import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/lib/treatments";
import { Badge } from "@/components/ui/badge";

export function TreatmentCard({ treatment, featured = false }: { treatment: Treatment; featured?: boolean }) {
  return (
    <Link
      href={`/treatments/${treatment.slug}`}
      className={`group relative min-h-[300px] overflow-hidden rounded-xl bg-charcoal shadow-sm ring-1 ring-foreground/10 transition duration-500 hover:-translate-y-0.5 hover:shadow-xl sm:min-h-[340px] ${
        featured ? "md:col-span-2 md:min-h-[420px]" : "md:min-h-[380px]"
      }`}
    >
      <Image
        src={treatment.image}
        alt={treatment.name}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
        sizes={featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
        <Badge className="bg-gold/90 text-[11px] tracking-[0.18em] text-charcoal uppercase">{treatment.category}</Badge>
        <h3 className="font-display mt-3 text-2xl text-ivory sm:text-3xl md:text-4xl">{treatment.name}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-ivory/90 sm:text-base sm:leading-7">{treatment.tagline}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold-soft">
          Explore the treatment
          <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={16} />
        </span>
      </div>
    </Link>
  );
}
