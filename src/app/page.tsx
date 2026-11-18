import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Waves } from "lucide-react";
import { TreatmentCard } from "@/components/TreatmentCard";
import { clinic, doctor } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const pillars = [
  {
    icon: Sparkles,
    title: "Advanced technology",
    copy: "Drug-free, high-end devices chosen to work on frequency insight, light, sound, heat, and core neurology—together, not in isolation.",
  },
  {
    icon: Waves,
    title: "Root-cause thinking",
    copy: "We do not chase a single symptom. Consultations look at energy, inflammation, nervous-system load, and how you actually want to live.",
  },
  {
    icon: Leaf,
    title: "Healthspan, not just lifespan",
    copy: "The aim is resilient vitality: clearer thinking, easier movement, deeper rest, and a body that can still perform.",
  },
];

export default function HomePage() {
  const [featured, ...rest] = treatments;

  return (
    <>
      <section className="relative isolate min-h-[100svh] bg-charcoal text-ivory">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/clinic-hero.jpg"
            alt="The calm interior of a regenerative wellness clinic"
            fill
            priority
            className="object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/30 md:bg-gradient-to-r md:from-charcoal md:via-charcoal/75 md:to-charcoal/25" />
        </div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-4 pb-16 pt-24 sm:px-5 sm:pb-20 sm:pt-28 md:px-8 md:pb-24 md:pt-36">
          <div className="animate-rise flex items-center gap-4 sm:gap-5">
            <Image
              src="/images/biogem-logo.png"
              alt="Biogem Private Healthspan Center"
              width={200}
              height={200}
              className="h-24 w-24 shrink-0 rounded-xl object-contain ring-1 ring-gold/35 sm:h-28 sm:w-28 md:h-36 md:w-36"
              priority
            />
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.22em] text-gold uppercase sm:text-[11px] sm:tracking-[0.32em]">
                Burlington · Ontario
              </p>
              <p className="font-display mt-1 text-[2rem] leading-none tracking-[0.02em] text-gold-soft sm:text-4xl sm:tracking-[0.06em] md:text-6xl lg:text-7xl">
                Biogem
              </p>
              <p className="mt-2 text-[10px] tracking-[0.18em] text-sand/80 uppercase sm:text-xs sm:tracking-[0.24em]">
                Private Healthspan Center
              </p>
            </div>
          </div>
          <div className="animate-rise delay-1 my-5 h-px w-28 bg-gradient-to-r from-gold via-gold-soft to-transparent sm:my-6 sm:w-40 md:w-64" />
          <h1 className="animate-rise delay-1 font-display max-w-3xl text-[2.35rem] leading-[0.95] text-ivory sm:text-4xl md:text-6xl lg:text-7xl">
            Healing, from
            <br />
            <span className="italic text-gold-soft">head to toe.</span>
          </h1>
          <p className="animate-rise delay-2 mt-5 max-w-xl text-base leading-7 text-sand/90 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Biogem Inc. is a complementary, regenerative wellness centre. AO Scan, Frequency Matrix, light, brainwave
            therapy, infrared detox, sound, and core technology—guided by an initial consultation with {doctor.name}.
          </p>
          <div className="animate-rise delay-3 mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <Link href="/treatments">Explore treatments</Link>
            </Button>
            <Button asChild variant="ivory" size="xl" className="w-full sm:w-auto">
              <Link href="/consultation">Book a consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-5 md:grid-cols-3 md:px-8 md:py-20">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="border-none bg-transparent py-0 shadow-none ring-0 transition hover:-translate-y-0.5"
            >
              <CardHeader className="border-t border-gold/40 px-0 pt-6">
                <pillar.icon className="text-gold" size={22} />
                <CardTitle className="font-display mt-2 text-2xl text-forest">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-lg leading-8 text-ink md:text-xl md:leading-9">{pillar.copy}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:px-8 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
                The suite
              </Badge>
              <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl md:text-5xl">Eight technologies. One clinic.</h2>
            </div>
            <Button asChild variant="link" className="h-auto px-0 text-forest">
              <Link href="/treatments">
                View every treatment <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-3">
            <TreatmentCard treatment={featured} featured />
            {rest.slice(0, 1).map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {rest.slice(1).map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest text-ivory">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image src="/images/consultation.jpg" alt="" fill className="object-cover opacity-30" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
          <Badge className="bg-gold/20 tracking-[0.2em] text-gold-soft uppercase">The method</Badge>
          <h2 className="font-display mt-3 max-w-2xl text-3xl sm:text-4xl md:text-5xl">1 + 1 = 3</h2>
          <p className="mt-2 font-display text-xl italic text-gold-soft sm:text-2xl">Advanced technologies for resilient vitality</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/90">
            When insight, light, frequency, heat, and core training are combined with intention, the effect is greater
            than any single machine. Biogem’s philosophy is proactive: optimize mitochondria, inflammation, nervous
            system tone, and structural support before dysfunction becomes the story of your decade.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-5 md:grid-cols-2 md:gap-12 md:px-8 md:py-20">
          <div className="relative aspect-[4/5] max-h-[520px] overflow-hidden rounded-xl bg-charcoal ring-1 ring-foreground/10 md:max-h-none">
            <Image
              src="/images/dr-passfield-real.jpg"
              alt={`${doctor.name}, ${doctor.title}`}
              fill
              className="object-cover object-top"
            />
          </div>
          <div>
            <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
              Your first visit
            </Badge>
            <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl md:text-5xl">{doctor.name}</h2>
            <p className="mt-2 text-base tracking-wide text-moss uppercase">{doctor.title}</p>
            <p className="mt-6 text-lg leading-8 text-ink md:text-xl md:leading-9">{doctor.summary}</p>
            <p className="mt-4 text-lg leading-8 text-ink md:text-xl md:leading-9">
              An initial consultation maps your history, goals, and which technologies belong in your plan—AO Scan for
              insight, Theta for the mind, AllCore360 for the spine, Frequency Matrix and Iyashi for recovery, light
              and sound for the cells.
            </p>
            <Button asChild variant="charcoal" size="xl" className="mt-8">
              <Link href="/consultation">Reserve a consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-sand bg-ivory">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-between gap-6 px-4 py-12 sm:px-5 md:flex-row md:items-center md:gap-8 md:px-8 md:py-16">
          <div>
            <p className="font-display text-3xl text-forest md:text-4xl">Begin in Burlington.</p>
            <p className="mt-2 text-base leading-7 text-muted-foreground">
              {clinic.address.full}
              <br />
              {clinic.phone} · {clinic.email}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button asChild size="xl" className="w-full sm:w-auto">
              <a href={clinic.phoneHref}>Call the clinic</a>
            </Button>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <Link href="/contact">Hours & map</Link>
            </Button>
          </div>
        </div>
      </section>
      <Separator className="bg-sand" />
    </>
  );
}
