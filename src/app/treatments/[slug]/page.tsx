import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookingForm } from "@/components/BookingForm";
import { FAQ } from "@/components/FAQ";
import { getTreatment, treatments } from "@/lib/treatments";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return { title: "Treatment" };
  return {
    title: treatment.name,
    description: treatment.tagline,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const others = treatments.filter((item) => item.slug !== treatment.slug).slice(0, 3);

  return (
    <article className="bg-cream">
      <header className="relative isolate min-h-[58svh] bg-charcoal text-ivory sm:min-h-[70vh]">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={treatment.image} alt={treatment.name} fill priority className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />
        </div>
        <div className="relative mx-auto flex min-h-[58svh] max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:min-h-[70vh] sm:px-5 sm:pb-16 sm:pt-32 md:px-8">
          <Badge className="w-fit bg-gold/90 tracking-[0.2em] text-charcoal uppercase">{treatment.category}</Badge>
          <h1 className="font-display mt-3 max-w-3xl text-4xl leading-[1.05] sm:text-5xl md:text-7xl">{treatment.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ivory sm:text-xl">{treatment.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge variant="outline" className="border-ivory/30 text-ivory">
              {treatment.duration}
            </Badge>
            <Badge variant="outline" className="border-ivory/30 text-ivory">
              {treatment.experience}
            </Badge>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-5 sm:py-16 md:grid-cols-12 md:gap-14 md:px-8">
        <div className="md:col-span-7">
          <h2 className="font-display text-3xl text-forest md:text-4xl">Purpose</h2>
          <p className="mt-4 text-lg leading-8 text-ink md:text-xl md:leading-9">{treatment.purpose}</p>

          <h2 className="font-display mt-12 text-3xl text-forest md:text-4xl">How the session works</h2>
          <ol className="mt-6 space-y-5">
            {treatment.howItWorks.map((step, index) => (
              <li key={step} className="flex gap-3 sm:gap-4">
                <span className="font-display shrink-0 text-2xl text-gold sm:text-3xl">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-8 text-ink md:text-xl md:leading-9">{step}</p>
              </li>
            ))}
          </ol>

          <h2 className="font-display mt-12 text-3xl text-forest md:text-4xl">What a visit feels like</h2>
          <p className="mt-4 text-lg leading-8 text-ink md:text-xl md:leading-9">{treatment.session}</p>
        </div>

        <aside className="md:col-span-5">
          <Card className="md:sticky md:top-24">
            <CardHeader>
              <CardTitle className="text-sm font-medium tracking-[0.18em] text-gold uppercase">Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-lg leading-8 text-ink">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="border-b border-sand pb-3 last:border-0">
                    {benefit}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm font-medium tracking-[0.18em] text-gold uppercase">Often chosen by</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-lg leading-8 text-ink">
                {treatment.idealFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="border-sand bg-transparent">
              <Button asChild variant="charcoal" size="xl" className="w-full">
                <Link href="/consultation">Discuss this treatment</Link>
              </Button>
            </CardFooter>
          </Card>
        </aside>
      </div>

      {treatment.gallery && treatment.gallery.length > 1 ? (
        <div className="mx-auto grid max-w-7xl gap-3 px-4 pb-10 sm:px-5 md:grid-cols-2 md:px-8">
          {treatment.gallery.map((src) => (
            <div key={src} className="relative aspect-[16/10] overflow-hidden rounded-xl bg-charcoal ring-1 ring-foreground/10">
              <Image src={src} alt={`${treatment.name} at Biogem Clinic`} fill className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}

      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-5 md:px-8">
        <FAQ
          items={[
            {
              q: "Do I need a consultation first?",
              a: "Yes. An initial consultation with Szilvia Passfield is the recommended starting point so we can match technologies to your history and goals—and screen for anything that makes a device unwise.",
            },
            {
              q: "How many sessions will I need?",
              a: "Some guests feel a shift after one visit. Regenerative work is usually a series. Your plan will be paced to your body, schedule, and the combination of treatments you choose.",
            },
            {
              q: "Can I combine this with other Biogem therapies?",
              a: "That is the point of the clinic. AO Scan, Frequency Matrix, light, theta, infrared, vibration, and core work are designed to stack. We will not pile them on without a reason.",
            },
          ]}
        />
      </div>

      <div className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-2 md:px-8 md:py-16">
          <div>
            <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
              Begin here
            </Badge>
            <h2 className="font-display mt-3 text-3xl text-forest sm:text-4xl">Request this treatment</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Tell us what you are hoping to change. We will follow up to schedule a consultation or a first session
              if you are already a guest of the clinic.
            </p>
          </div>
          <BookingForm defaultInterest={treatment.slug} />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-5 md:px-8 md:py-16">
        <p className="text-sm font-medium tracking-[0.2em] text-gold uppercase">Continue exploring</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {others.map((item) => (
            <Link key={item.slug} href={`/treatments/${item.slug}`} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-charcoal ring-1 ring-foreground/10">
                <Image src={item.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-3 font-display text-2xl text-forest transition group-hover:text-gold">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
      <Separator className="bg-sand" />
    </article>
  );
}
