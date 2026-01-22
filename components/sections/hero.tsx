"use client"

import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="relative w-full py-6 z-10">
        <div className="max-w-6xl mx-auto px-8 flex items-center justify-between relative">
          <Link href="/">
            <MetisLogo size={28} />
          </Link>
          {/* Absolutely centered nav links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-foreground font-semibold transition-colors text-sm tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Solutions
            </Link>
            <Link
              href="/portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
            >
              About
            </Link>

          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://calendly.com/shlok-nambiar/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="tracking-wide bg-transparent">
                Book a Meet
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center justify-center px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Autonomous AI Agents
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
            Intelligence in motion.
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            AI agents that plan, collaborate, and execute business operations.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href="https://calendly.com/shlok-nambiar/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-6 text-lg tracking-wide"
              >
                Book a Meet
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="ghost"
                size="lg"
                className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg tracking-wide"
              >
                Our work →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
