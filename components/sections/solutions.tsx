"use client"

import { useEffect, useRef, useState } from "react"

const solutions = [
  {
    title: "Legal Operations",
    description:
      "Case workflow automation with intelligent RAG. Document review, contract analysis, and compliance tracking.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-steel-blue">
        <circle cx="20" cy="10" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="10" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="20" y1="15" x2="12" y2="25" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="15" x2="28" y2="25" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Chartered Accountancy",
    description: "Tax preparation and advisory agents. Automated compliance with regulatory precision.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-steel-blue">
        <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
        <circle cx="8" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="32" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="12" y1="20" x2="17" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="23" y1="20" x2="28" y2="20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Compliance Systems",
    description: "Documentation and audit trail automation. Real-time monitoring with full transparency.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-steel-blue">
        <circle cx="20" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="20" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <line x1="20" y1="12" x2="20" y2="16" stroke="currentColor" strokeWidth="2" />
        <line x1="20" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="11" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" />
        <line x1="24" y1="20" x2="29" y2="20" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export function Solutions() {
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
    <section id="solutions" ref={sectionRef} className="py-32 px-8 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4">Industry Solutions</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Automation built for regulated work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`bg-muted/50 border border-border rounded-2xl p-8 transition-all duration-700 hover:border-steel-blue/30 hover:bg-muted ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-wide">{solution.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
