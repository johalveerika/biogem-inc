import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { doctor } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Initial Consultation",
  description:
    "Book an initial consultation with Szilvia Passfield at Biogem Clinic in Burlington to design a regenerative wellness plan around your goals.",
};

const steps = [
  {
    title: "Tell the whole story",
    copy: "Energy, sleep, pain, mood, hormones, recovery, and what you miss doing. We listen for patterns, not a single complaint.",
  },
  {
    title: "Match the technology",
    copy: "You will leave knowing which devices belong in your first month—and which can wait. No menu-ordering without a reason.",
  },
  {
    title: "Leave with a plan",
    copy: "A sequenced path: perhaps theta and sleep first, then oxygen and light, then core. Or detox before performance. Yours will be specific.",
  },
];

export default function ConsultationPage() {
  return (
    <div className="bg-cream pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-7xl items-end gap-8 px-4 pb-10 sm:px-5 md:grid-cols-2 md:gap-10 md:px-8 md:pb-12">
        <div>
          <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
            Start here
          </Badge>
          <h1 className="font-display mt-3 text-3xl leading-tight text-forest sm:text-5xl md:text-6xl">
            Initial consultation with {doctor.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink md:text-xl md:leading-9">
            This is the doorway to Biogem. Before you step into a cube, a dome, or a chamber, we sit down and decide
            what your body is actually asking for. The consultation is how we keep advanced technology personal.
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <Image src="/images/consultation.jpg" alt="Consultation room at Biogem" fill className="object-cover" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 pb-12 sm:px-5 md:grid-cols-3 md:px-8 md:pb-16">
        {steps.map((step, index) => (
          <Card key={step.title} className="transition hover:-translate-y-0.5 hover:shadow-md">
            <CardHeader>
              <p className="font-display text-3xl text-gold">{String(index + 1).padStart(2, "0")}</p>
              <CardTitle className="font-display text-2xl text-forest">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base leading-7 text-muted-foreground">{step.copy}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-2 md:gap-12 md:px-8 md:py-16">
          <div>
            <h2 className="font-display text-3xl text-forest sm:text-4xl">Request your consultation</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Share a little about yourself. The clinic will reply to confirm a time. Bring a list of medications,
              recent reports if you have them, and the outcomes that would make this visit worth it.
            </p>
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-foreground/10">
              <Image
                src="/images/dr-passfield-real.jpg"
                alt={doctor.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <BookingForm defaultInterest="consultation" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:px-8 md:py-16">
        <FAQ
          items={[
            {
              q: "Who is the consultation for?",
              a: "Adults exploring longevity, recovery, stress, core weakness, sleep, skin vitality, or a full-body reset. If you have complex medical conditions, we will be clear about what belongs in a wellness setting and what needs your physician.",
            },
            {
              q: "Is this a medical diagnosis?",
              a: "Biogem is a complementary regenerative wellness clinic. The consultation is designed to understand your goals and recommend appropriate technologies. It does not replace your family doctor or specialist care.",
            },
            {
              q: "What should I wear?",
              a: "Comfortable clothing you can move and rest in. Some treatments need easier access to the feet or a change of layers for infrared heat.",
            },
          ]}
        />
      </div>
    </div>
  );
}
