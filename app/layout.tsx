import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ToastProvider } from "@/components/toast";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pgaai.in"),
  title: {
    default: "P&G Alumni Association of India — Learning & Networking Conference | pgaai.in",
    template: "%s | PGAAI",
  },
  description:
    "P&G Alumni Association of India (PGAAI) connects former Procter & Gamble people across India through learning, networking and giving back. Explore the 2026 Learning & Networking Conference at St. Regis, Mumbai.",
  keywords: [
    "P&G Alumni India",
    "PGAAI",
    "pgaai.in",
    "P&G Alumni Association of India",
    "Learning and Networking Conference",
    "St. Regis Mumbai",
  ],
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    title: "P&G Alumni Association of India — Learning & Networking Conference 2026",
    description:
      "Connecting P&G alumni across India. Join the 2026 Learning & Networking Conference on 31 October 2026 at St. Regis, Mumbai.",
    url: "https://pgaai.in/",
    images: ["/assets/event-2026-flyer.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "P&G Alumni Association of India",
  alternateName: "PGAAI",
  url: "https://pgaai.in/",
  email: "sec@pgaai.in",
  memberOf: { "@type": "Organization", name: "P&G Alumni Network", url: "https://pgalums.com/" },
  event: [
    {
      "@type": "Event",
      name: "Learning & Networking Conference 2026",
      startDate: "2026-10-31",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: "St. Regis, Mumbai", address: "Mumbai, Maharashtra, India" },
      organizer: { "@type": "Organization", name: "P&G Alumni Association of India" },
      url: "https://pgaai.in/events/2026-conference",
    },
    {
      "@type": "Event",
      name: "Learning & Networking Conference 2025",
      startDate: "2025-10-11",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: { "@type": "Place", name: "St. Regis, Mumbai", address: "Mumbai, Maharashtra, India" },
      organizer: { "@type": "Organization", name: "P&G Alumni Association of India" },
      url: "https://pgaai.in/events/2025-conference",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body id="top">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ToastProvider>
          <SiteHeader />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
