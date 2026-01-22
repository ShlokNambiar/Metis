"use client"

import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/sections/footer"
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const openPositions = [
    {
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Remote",
        type: "Contract Basis",
        description: "Build and deploy autonomous AI agents for enterprise clients. Experience with LLMs, RAG systems, and agent orchestration required."
    },
    {
        title: "Full Stack Developer",
        department: "Engineering",
        location: "Remote",
        type: "Contract Basis",
        description: "Develop scalable web applications and APIs. Proficiency in React, Next.js, Node.js, and Python preferred."
    },
    {
        title: "Head of Marketing",
        department: "Marketing",
        location: "Remote",
        type: "Contract Basis",
        description: "Lead our marketing strategy and brand presence. Drive growth through compelling storytelling and data-driven campaigns."
    }
]

const benefits = [
    {
        title: "Remote-First",
        description: "Work from anywhere in the world. We believe great talent isn't limited by geography."
    },
    {
        title: "Flexible Hours",
        description: "We focus on outcomes, not hours. Work when you're most productive."
    },
    {
        title: "True Collaboration",
        description: "Work alongside like-minded people in a culture of open communication and shared problem-solving."
    }
]

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="relative w-full py-6 z-10 border-b border-border">
                <div className="max-w-6xl mx-auto px-8 flex items-center justify-between relative">
                    <Link href="/" className="animate-fade-in" style={{ animationDelay: '0ms' }}>
                        <MetisLogo size={28} />
                    </Link>
                    {/* Absolutely centered nav links */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        <Link
                            href="/"
                            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm tracking-wide animate-fade-in"
                            style={{ animationDelay: '50ms' }}
                        >
                            Home
                        </Link>
                        <Link
                            href="/services"
                            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm tracking-wide animate-fade-in"
                            style={{ animationDelay: '100ms' }}
                        >
                            Solutions
                        </Link>
                        <Link
                            href="/portfolio"
                            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm tracking-wide animate-fade-in"
                            style={{ animationDelay: '150ms' }}
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm tracking-wide animate-fade-in"
                            style={{ animationDelay: '200ms' }}
                        >
                            About
                        </Link>

                    </div>
                    <div className="hidden md:flex items-center gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
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

            {/* Hero Section */}
            <section className="py-32 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in" style={{ color: '#1359a0' }}>
                            Careers
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
                            Build the future <span className="whitespace-nowrap">with us.</span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Join a team of engineers, researchers, and builders creating
                            autonomous AI systems that transform how businesses operate.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Join Us */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                            Why Metis?
                        </h2>
                        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                            We're building something meaningful. Here's what you get when you join us.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="p-6 bg-muted/30 rounded-2xl border border-border hover:border-steel-blue/30 transition-all duration-300 animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground font-light text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                            Open Positions
                        </h2>
                        <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                            We're always looking for exceptional talent. See what roles we're hiring for.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {openPositions.map((position, index) => (
                            <div
                                key={position.title}
                                className="group p-6 bg-muted/30 rounded-2xl border border-border hover:border-steel-blue/30 transition-all duration-300 animate-fade-in cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-semibold text-foreground group-hover:text-steel-blue transition-colors">
                                                {position.title}
                                            </h3>
                                            <span className="px-3 py-1 text-xs font-medium bg-steel-blue/10 text-steel-blue rounded-full">
                                                {position.department}
                                            </span>
                                        </div>
                                        <p className="text-muted-foreground font-light text-sm mb-3">
                                            {position.description}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                {position.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link href="https://app.youform.com/forms/al6n1gpr" target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" className="hover:bg-steel-blue hover:text-white hover:border-steel-blue transition-all">
                                                Apply Now
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
                        Don't see the right role?
                    </h2>
                    <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                        We're always interested in meeting talented people. Send us your resume
                        and tell us how you'd like to contribute.
                    </p>
                    <Link href="mailto:careers@metis.ai">
                        <Button size="lg" className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-6 text-lg tracking-wide">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
