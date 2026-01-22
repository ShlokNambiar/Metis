"use client"

import { useEffect, useRef, useState } from "react"

const stages = [
  { name: "Ingest", description: "Data collection" },
  { name: "Retrieve", description: "Context search" },
  { name: "Plan", description: "Strategy formation" },
  { name: "Execute", description: "Action delivery" },
]

export function Pipeline() {
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          // Animate stages sequentially
          stages.forEach((_, index) => {
            setTimeout(() => setActiveIndex(index), 300 + index * 400)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 px-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4">How we work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Intelligence pipeline.</h2>
        </div>

        <div className="relative">
          {/* Connection line background */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden md:block" />

          {/* Animated connection line */}
          <div
            className="absolute top-8 left-0 h-0.5 bg-gradient-to-r from-steel-blue to-steel-blue/60 hidden md:block transition-all duration-2000 ease-out"
            style={{ width: visible ? "100%" : "0%" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.name}
                className={`text-center transition-all duration-700 ${activeIndex >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  {/* Pulse ring animation */}
                  {activeIndex >= index && (
                    <div className="absolute inset-0 w-16 h-16 mx-auto">
                      <div className="absolute inset-0 rounded-full bg-steel-blue/20 animate-ping"
                        style={{ animationDuration: '2s' }} />
                    </div>
                  )}

                  {/* Main circle */}
                  <div
                    className={`relative w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-700 shadow-lg ${activeIndex >= index
                      ? "bg-steel-blue text-white scale-110 shadow-steel-blue/30"
                      : "bg-muted text-muted-foreground scale-100"
                      }`}
                  >
                    <span className="text-lg font-bold relative z-10">{index + 1}</span>


                  </div>
                </div>

                <h3 className={`text-lg font-semibold mb-1 tracking-wide transition-colors duration-500 ${activeIndex >= index ? "text-foreground" : "text-muted-foreground"
                  }`}>
                  {stage.name}
                </h3>
                <p className="text-sm text-muted-foreground font-light italic">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
