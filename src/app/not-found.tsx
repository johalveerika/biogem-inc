import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-5 pt-28 text-center">
      <p className="text-xs tracking-[0.28em] text-gold uppercase">404</p>
      <h1 className="font-display mt-3 text-5xl text-forest">This page has wandered off.</h1>
      <Button asChild variant="charcoal" size="xl" className="mt-8">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
