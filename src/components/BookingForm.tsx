"use client";

import { treatments } from "@/lib/treatments";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const interests = [
  { value: "consultation", label: "Initial consultation with Szilvia Passfield" },
  ...treatments.map((treatment) => ({ value: treatment.slug, label: treatment.name })),
];

const fieldClass = "min-h-12 w-full rounded-md bg-cream px-4 text-base md:text-base";

export function BookingForm({ defaultInterest = "consultation" }: { defaultInterest?: string }) {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState(defaultInterest);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");
    const selected = interests.find((item) => item.value === interest)?.label ?? interest;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Interest: ${selected}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:biogemhwc@gmail.com?subject=${encodeURIComponent(
      `Biogem inquiry — ${selected}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the inquiry ready to send.");
    setSent(true);
  }

  if (sent) {
    return (
      <Card className="border-gold/30 py-8 text-center shadow-none">
        <CardContent className="px-6">
          <p className="font-display text-3xl text-forest">Thank you</p>
          <p className="mt-3 text-lg leading-8 text-foreground">
            Your email app should open with the inquiry ready to send. If it does not, write us at biogemhwc@gmail.com
            or call 905-632-3555. We will help you choose a first visit.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-[0_20px_60px_-30px_rgba(20,18,16,0.35)]">
      <CardContent className="px-5 pt-1 sm:px-6 md:px-8">
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-base text-foreground">
                Full name
              </Label>
              <Input required id="name" name="name" className={fieldClass} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone" className="text-base text-foreground">
                Phone
              </Label>
              <Input required id="phone" name="phone" type="tel" className={fieldClass} />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-base text-foreground">
              Email
            </Label>
            <Input required id="email" name="email" type="email" className={fieldClass} />
          </div>
          <div className="grid gap-2">
            <Label className="text-base text-foreground">I am interested in</Label>
            <input type="hidden" name="interest" value={interest} />
            <Select value={interest} onValueChange={setInterest}>
              <SelectTrigger className={`${fieldClass} w-full justify-between`}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper">
                {interests.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-base text-foreground">
              How can we help?
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              className="rounded-md bg-cream px-4 py-3 text-base md:text-base"
              placeholder="Share your goals, symptoms you want to understand, or the treatments you are curious about."
            />
          </div>
          <Button type="submit" variant="charcoal" size="xl" className="mt-2 w-full">
            Request my visit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
