import type { Metadata } from "next"
import { DM_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/context/ThemeContext"
import { DetectionProvider } from "@/context/DetectionContext"
import { BackgroundEffects } from "@/components/ui/BackgroundEffects"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Plantley — Detect plant disease in seconds",
  description:
    "AI-powered crop disease detection. Upload or take a photo of a plant leaf and receive an instant diagnosis.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          <DetectionProvider>
            <BackgroundEffects />
            {children}
          </DetectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
