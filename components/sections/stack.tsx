"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Quantitative AI Trading & Risk-Automation System",
    category: "Financial Markets",
    description: "Autonomous signal generation, multi-agent decision-making, and risk-aware execution for trading desks.",
    tags: ["Quant Trading", "Risk Management", "ML/AI"],
    image: "/quant-trading-dashboard.png",
    link: "/portfolio?category=Enterprise+AI",
  },
  {
    title: "Autonomous Voice Reservation Agent",
    category: "Voice AI",
    description: "24/7 restaurant reservation system with natural conversation, real-time availability, and SMS confirmations.",
    tags: ["Voice AI", "SIP/VAPI", "Automation"],
    imageLight: "/voice-agent-light.png",
    imageDark: "/voice-agent-dark.png",
    link: "/portfolio?category=Agents",
  },
  {
    title: "Real Estate CRM System",
    category: "Enterprise AI",
    description: "AI-powered lead management with automated follow-ups, property matching, and client communication.",
    tags: ["CRM", "Real Estate", "Automation"],
    image: null, // Placeholder for now
    link: "/portfolio",
  },
]

export function Stack() {
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
          <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4">Featured Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Real-world AI deployments.
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            From trading floors to restaurant operations — see how Metis builds production-ready AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.title}
              href={project.link}
              className={`group bg-muted/50 border border-border rounded-2xl overflow-hidden transition-all duration-700 hover:border-steel-blue/50 hover:bg-muted/70 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-video bg-muted/30 overflow-hidden relative">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {project.imageLight && project.imageDark && (
                  <>
                    <img
                      src={project.imageLight}
                      alt={`${project.title} - light mode`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 dark:hidden"
                    />
                    <img
                      src={project.imageDark}
                      alt={`${project.title} - dark mode`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 hidden dark:block"
                    />
                  </>
                )}
                {!project.image && !project.imageLight && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-steel-blue">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-steel-blue">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-wide group-hover:text-steel-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-background rounded text-xs font-medium text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-steel-blue hover:text-steel-blue/80 font-medium transition-colors"
          >
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
