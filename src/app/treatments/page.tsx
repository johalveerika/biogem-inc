import type { Metadata } from "next";
import { TreatmentCard } from "@/components/TreatmentCard";
import { treatments } from "@/lib/treatments";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore Biogem Clinic treatments: Hyperbaric Oxygen Cube, Red Light Therapy Bed, Theta Chamber, Ion Foot Detox, VibeX, Iyashi Dome, and AllCore360.",
};

const categories = Array.from(new Set(treatments.map((treatment) => treatment.category)));

export default function TreatmentsPage() {
  return (
    <div className="bg-cream pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 md:px-8">
        <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
          The suite
        </Badge>
        <h1 className="font-display mt-3 max-w-3xl text-3xl leading-tight text-forest sm:text-5xl md:text-6xl">
          Technologies chosen for how they change the body—not how they photograph.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink md:text-xl md:leading-9">
          Each device has a job: oxygen for cells, light for mitochondria, theta for the brain, infrared for detox,
          vibration for the nervous system, ions for a gentle reset, gravity for the core. Start with a consultation
          and we will sequence them for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="rounded-full">
              {category}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-3 px-4 pb-16 sm:px-5 md:grid-cols-2 md:px-8 md:pb-20">
        {treatments.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </div>
  );
}
