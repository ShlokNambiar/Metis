"use client"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-32 px-8 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-6">
          Let AI handle the operations.
        </h2>
        <p className="text-muted-foreground text-lg font-light mb-10 max-w-xl mx-auto leading-relaxed">
          Deploy intelligent agents that work alongside your team. Start with a conversation.
        </p>

        {/* Contact Information */}
        <div className="mb-10 space-y-3">
          <p className="text-foreground font-semibold text-lg mb-4">Contact Us</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a
              href="mailto:shlok.nambiar@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
              <span>shlok.nambiar@gmail.com</span>
            </a>
            <a
              href="tel:+919075311677"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9075311677</span>
            </a>
          </div>
        </div>

        <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white px-10 py-6 text-lg tracking-wide">
          Talk to Metis
        </Button>
      </div>
    </section>
  )
}
