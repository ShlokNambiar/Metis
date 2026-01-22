import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Serif_Text, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"
import "./globals.css"

const dmSerifText = DM_Serif_Text({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "METIS | Intelligence in Motion",
  description:
    "AI agents that plan, collaborate, and execute business operations. Autonomous multi-agent orchestration for regulated enterprises.",
  icons: {
    icon: [
      {
        url: "/metis-icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1563b2",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerifText.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll />
        <PageTransition>
          {children}
        </PageTransition>
        <Analytics />
      </body>
    </html>
  )
}

