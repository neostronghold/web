import type { Metadata } from "next"
import { inter, spaceGrotesk, jetbrainsMono } from "@/lib/fonts"
import { ContactProvider } from "@/components/contact-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "neostronghold — Intelligent homes, open to everyone.",
  description:
    "Your home's AI operating system. Open-source, local-first, and built for the way you live. AI agents for energy, security, comfort, and Tesla integration.",
  keywords: [
    "smart home",
    "home automation",
    "South Africa",
    "Cape Town",
    "Home Assistant",
    "open source",
    "AI agent",
    "solar integration",
    "load shedding",
    "Tesla Powerwall",
    "smart home hub",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/icon-180x180.png", sizes: "180x180" },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "neostronghold — Intelligent homes, open to everyone.",
    description:
      "Your home's AI operating system. Open-source, local-first, and built for the way you live.",
    siteName: "neostronghold",
    locale: "en_ZA",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ContactProvider>{children}</ContactProvider>
      </body>
    </html>
  )
}
