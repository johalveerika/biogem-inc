import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { clinic } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Visit & Contact",
  description:
    "Find Biogem Clinic at 3430 South Service Road, Unit 100–102, Burlington. Call 905-632-3555 or write biogemhwc@gmail.com.",
};

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(clinic.mapQuery)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <div className="bg-cream pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-5 md:px-8 md:pb-10">
        <Badge variant="outline" className="border-gold/40 tracking-[0.2em] text-gold uppercase">
          Visit
        </Badge>
        <h1 className="font-display mt-3 text-3xl leading-tight text-forest sm:text-5xl md:text-6xl">Come to South Service Road.</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
          Parking is available and the clinic is wheelchair accessible. We are closed Mondays and Sundays.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {clinic.amenities.map((item) => (
            <Badge key={item} variant="secondary" className="rounded-full">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 sm:px-5 md:grid-cols-2 md:gap-10 md:px-8 md:pb-16">
        <div className="min-h-[240px] overflow-hidden rounded-xl bg-sand ring-1 ring-foreground/10 sm:min-h-[360px]">
          <iframe
            title="Map to Biogem Clinic"
            src={mapSrc}
            className="h-full min-h-[240px] w-full border-0 sm:min-h-[360px]"
            loading="lazy"
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="font-display text-2xl text-forest sm:text-3xl">{clinic.address.line1}</CardTitle>
            <p className="text-lg leading-8 text-muted-foreground">
              {clinic.address.line2}
              <br />
              {clinic.address.city}, {clinic.address.region} {clinic.address.postal}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              <a href={clinic.phoneHref} className="transition hover:text-gold">
                {clinic.phone}
              </a>
              <br />
              <a href={clinic.emailHref} className="transition hover:text-gold">
                {clinic.email}
              </a>
            </p>
            <Button asChild variant="outline" size="xl" className="mt-6">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.mapQuery)}`}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </Button>
            <Separator className="my-6 bg-sand" />
            <ul className="space-y-2 text-base">
              {clinic.hours.map((row) => (
                <li key={row.day} className="flex items-center justify-between border-b border-sand py-2 last:border-0">
                  <span>{row.day}</span>
                  {row.time === "Closed" ? (
                    <Badge variant="outline">Closed</Badge>
                  ) : (
                    <span className="text-muted-foreground">{row.time}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 md:grid-cols-2 md:gap-10 md:px-8 md:py-16">
          <div>
            <h2 className="font-display text-3xl text-forest sm:text-4xl">Write to us</h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Prefer a message to a phone call? Send the form and we will reply with available times.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
