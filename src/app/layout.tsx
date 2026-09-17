import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { clinic } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "Biogem Inc. | Regenerative Wellness in Burlington",
    template: "%s | Biogem Inc.",
  },
  description:
    "Biogem Clinic in Burlington offers hyperbaric oxygen, red light therapy, Theta Chamber, Iyashi Dome, VibeX, AllCore360, and ion foot detox—plus an initial consultation with Szilvia Passfield.",
  metadataBase: new URL("https://biogemclinic.ca"),
  openGraph: {
    title: "Biogem Inc. | Healing from Head to Toe",
    description: clinic.tagline,
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
