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
    default: "Biogem Clinic | Regenerative Wellness in Burlington",
    template: "%s | Biogem Clinic",
  },
  description:
    "Biogem Clinic in Burlington offers AO Scan, Frequency Matrix Therapy, red light therapy, Theta Chamber, Iyashi Dome, VibeX, AllCore360, and ion foot detox—plus an initial consultation with Szilvia Passfield.",
  metadataBase: new URL(clinic.website),
  keywords: [
    "Biogem Clinic",
    "Biogem Inc",
    "Burlington wellness clinic",
    "regenerative wellness Burlington",
    "AO Scan Burlington",
    "Frequency Matrix Therapy",
    "Szilvia Passfield",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Biogem Clinic | Healing from Head to Toe",
    description: clinic.tagline,
    url: clinic.website,
    siteName: "Biogem Inc.",
    locale: "en_CA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Biogem Inc.",
  alternateName: ["Biogem Clinic", "Biogem Private Healthspan Center", "Biogem Health & Wellness Inc."],
  url: clinic.website,
  telephone: clinic.phoneHref.replace("tel:", ""),
  email: clinic.email,
  image: `${clinic.website}/images/biogem-logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: clinic.address.city,
    addressRegion: clinic.address.region,
    postalCode: clinic.address.postal,
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
