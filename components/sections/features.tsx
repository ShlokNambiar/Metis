"use client"

import { useEffect, useRef, useState } from "react"

const features = [
  {
    title: "Autonomous agents",
    description: "Domain-specific Multi-agent automation systems that handle operations, communication, and decision-making at scale.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-graphite dark:text-white">
        <circle cx="24" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="8" cy="36" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="40" cy="36" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="24" y1="14" x2="12" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="24" y1="14" x2="36" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Enterprise AI Architecture",
    description: "Production pipelines from ingest to action. Built for scale, designed for reliability.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-graphite dark:text-white">
        <circle cx="8" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="40" cy="24" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="13" y1="24" x2="19" y2="24" stroke="currentColor" strokeWidth="2" />
        <line x1="29" y1="24" x2="35" y2="24" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12 L24 12 L40 12" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
        <path d="M8 36 L24 36 L40 36" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" />
      </svg>
    ),
  },
  {
    title: "Voice-First Assistants",
    description: "Meet, telephony, customer support — fully autonomous. Natural conversation at enterprise scale.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="text-graphite dark:text-white">
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
        <path d="M24 6 L24 12" stroke="currentColor" strokeWidth="2" />
        <path d="M24 36 L24 42" stroke="currentColor" strokeWidth="2" />
        <path d="M6 24 L12 24" stroke="currentColor" strokeWidth="2" />
        <path d="M36 24 L42 24" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
]

export function Features() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-32 px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4 text-foreground">
            What We Offer
          </h2>
          <div className="flex justify-center">
            <div className="h-0.5 w-20 bg-foreground/20"></div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4 tracking-wide" style={{ color: '#1359a0' }}>{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
