"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Target, Eye, FileCheck, Zap } from "lucide-react"

const features = [
  { icon: Shield, label: "Security", description: "Enterprise-grade protection" },
  { icon: Target, label: "Accuracy", description: "Precision at scale" },
  { icon: Eye, label: "Transparency", description: "Full visibility" },
  { icon: FileCheck, label: "Auditability", description: "Complete trails" },
  { icon: Zap, label: "Autonomy", description: "Self-directed agents" },
]

export function Enterprise() {
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
    <section id="enterprise" ref={sectionRef} className="py-32 px-8 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-steel-blue text-sm tracking-[0.2em] uppercase mb-4">Enterprise Grade</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Built for trust.</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className={`flex flex-col items-center p-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                <feature.icon className="w-5 h-5 text-steel-blue" />
              </div>
              <span className="font-medium text-foreground tracking-wide">{feature.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{feature.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
