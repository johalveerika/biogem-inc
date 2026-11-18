import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { doctor, team } from "@/lib/site";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "The Clinic",
  description:
    "Meet Szilvia Passfield and the Biogem team in Burlington—a functional, regenerative wellness centre built around advanced, drug-free technologies.",
};

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 1 && !part.endsWith("."))
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <div className="bg-cream pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-5 md:px-8">
        <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
          The clinic
        </Badge>
        <h1 className="font-display mt-3 max-w-3xl text-3xl leading-tight text-forest sm:text-5xl md:text-6xl">
          A regenerative house for people who are done treating symptoms in isolation.
        </h1>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 sm:px-5 md:grid-cols-2 md:gap-12 md:px-8 md:pb-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-charcoal ring-1 ring-foreground/10 md:aspect-auto md:min-h-[560px]">
          <Image
            src="/images/dr-passfield-real.jpg"
            alt={doctor.name}
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <Badge variant="outline" className="w-fit border-gold/40 tracking-[0.2em] text-gold uppercase">
            Director
          </Badge>
          <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">{doctor.name}</h2>
          <p className="mt-2 text-base tracking-wide text-moss uppercase">{doctor.shortTitle}</p>
          <div className="mt-6 space-y-4 text-lg leading-8 text-ink md:text-xl md:leading-9">
            <p>{doctor.summary}</p>
            <p>
              Trained in Europe and the United States, she built Biogem as a complementary and advanced bio-energy,
              preventive, restorative, and regenerative centre. The work is drug-free by design: the latest high-end
              technologies, used to optimize physical, neurological, and emotional well-being.
            </p>
            <p>
              After years of clinical refinement she describes the clinic’s integrative approach as the SYNRGTX
              method—protocols where preventive, regenerative, and reconstructive strategies multiply each other.
              Hormonal balance, metabolic efficiency, inflammation, mitochondrial performance, neuroplasticity, and
              cellular repair are the terrain. The destination is healthspan: vitality you can still feel in daily
              life.
            </p>
          </div>
          <Button asChild variant="charcoal" size="xl" className="mt-8 w-fit">
            <Link href="/consultation">Book with {doctor.name.split(" ")[0]}</Link>
          </Button>
        </div>
      </div>

      <section className="bg-charcoal py-14 text-ivory md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-8">
          <Badge className="bg-gold/20 tracking-[0.2em] text-gold-soft uppercase">The team</Badge>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">People who hold the room.</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                className="border-white/10 bg-transparent text-ivory shadow-none ring-white/10 transition hover:-translate-y-0.5 hover:ring-gold/40"
              >
                <CardHeader className="flex-row items-center gap-4">
                  <Avatar className="size-12 ring-1 ring-gold/40">
                    <AvatarFallback className="bg-forest text-gold-soft">{initials(member.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-display text-xl text-gold-soft">{member.name}</CardTitle>
                    <p className="mt-1 text-sm text-sand">{member.role}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-forest sm:text-4xl">What “head to toe” means here</h2>
            <p className="mt-4 text-lg leading-8 text-ink md:text-xl md:leading-9">
              AO Scan for wellness patterns. Frequency Matrix for light, PEMF, and sound. Theta for the mind. Red
              light for cells and skin. Infrared and ionic work for detoxification support. VibeX for fascia and the
              nervous system. AllCore360 for the deep core that keeps you upright. You do not have to use every
              machine. You do have to start with a conversation.
            </p>
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-xl ring-1 ring-foreground/10">
            <Image src="/images/clinic-hero.jpg" alt="Biogem Clinic interior" fill className="object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
