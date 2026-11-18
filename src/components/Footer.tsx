import Image from "next/image";
import Link from "next/link";
import { clinic } from "@/lib/site";
import { treatments } from "@/lib/treatments";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-5 md:grid-cols-4 md:gap-12 md:px-8 md:py-16">
        <div className="md:col-span-1">
          <Image
            src="/images/biogem-logo.png"
            alt="Biogem Private Healthspan Center"
            width={160}
            height={160}
            className="mb-4 h-28 w-28 rounded-xl object-contain ring-1 ring-gold/25"
          />
          <p className="text-xs tracking-[0.18em] text-gold uppercase">Private Healthspan Center</p>
          <p className="mt-2 text-sm leading-relaxed text-sand/70">{clinic.tagline}</p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Treatments</p>
          <ul className="mt-4 space-y-2 text-sm text-ivory/80">
            {treatments.map((treatment) => (
              <li key={treatment.slug}>
                <Link href={`/treatments/${treatment.slug}`} className="transition hover:text-gold">
                  {treatment.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
            <br />
            {clinic.address.city}, {clinic.address.region} {clinic.address.postal}
          </p>
          <p className="mt-4 text-sm">
            <a href={clinic.phoneHref} className="transition hover:text-gold">
              {clinic.phone}
            </a>
            <br />
            <a href={clinic.emailHref} className="transition hover:text-gold">
              {clinic.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Hours</p>
          <ul className="mt-4 space-y-1 text-sm text-ivory/80">
            {clinic.hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-4">
                <span>{row.day}</span>
                <span className="text-sand/70">{row.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="bg-white/10" />
      <div className="px-4 py-6 text-xs leading-relaxed text-sand/50 sm:px-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {clinic.legalName}. All rights reserved.</p>
          <p className="max-w-xl">
            Wellness technologies described here are complementary and not a substitute for medical care. Individual
            results vary. A consultation determines whether a treatment is appropriate for you.
          </p>
        </div>
      </div>
    </footer>
  );
}
