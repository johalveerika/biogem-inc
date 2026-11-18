"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const links = [
  { href: "/treatments", label: "Treatments" },
  { href: "/about", label: "The Clinic" },
  { href: "/consultation", label: "Consultation" },
  { href: "/contact", label: "Visit" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300 ${
        solid ? "bg-charcoal/95 shadow-lg shadow-black/20 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <Image
            src="/images/biogem-logo.png"
            alt="Biogem Private Healthspan Center"
            width={128}
            height={128}
            className="h-12 w-12 shrink-0 rounded-md object-contain ring-1 ring-gold/30 sm:h-14 sm:w-14"
            priority
          />
          <div className="min-w-0 leading-tight">
            <p className="font-display truncate text-lg tracking-[0.08em] text-gold-soft sm:text-xl sm:tracking-[0.16em]">
              Biogem
            </p>
            <p className="hidden text-[10px] tracking-[0.18em] text-sand/70 uppercase sm:block">
              Private Healthspan Center
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition ${
                  active ? "text-gold" : "text-ivory/80 hover:text-gold-soft"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button asChild size="sm" className="rounded-full px-5">
            <Link href="/consultation">Book a session</Link>
          </Button>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ivory"
                size="icon-lg"
                className="rounded-full border-gold/40 text-gold"
              >
                <a href="tel:+19056323555" aria-label="Call Biogem">
                  <Phone />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Call the clinic</TooltipContent>
          </Tooltip>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ivory"
                size="icon-lg"
                className="rounded-full"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-gold/20 bg-charcoal text-ivory data-[side=right]:w-full sm:max-w-sm [&_[data-slot=sheet-close]]:text-ivory"
            >
              <SheetHeader className="border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/biogem-logo.png"
                    alt=""
                    width={64}
                    height={64}
                    className="h-12 w-12 rounded-md object-contain ring-1 ring-gold/30"
                  />
                  <div>
                    <SheetTitle className="font-display text-2xl text-gold-soft">Biogem</SheetTitle>
                    <SheetDescription className="text-sand/70">Private Healthspan Center</SheetDescription>
                  </div>
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-display rounded-lg px-1 py-2 text-3xl text-ivory transition hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Separator className="bg-white/10" />
              <div className="mt-auto p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <Button asChild size="xl" className="w-full rounded-full">
                  <Link href="/consultation">Book a session</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
