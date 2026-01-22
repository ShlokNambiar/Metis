"use client"

import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/sections/footer"
import { Shield, Target, Eye, FileCheck, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
                            className="text-foreground font-semibold transition-all duration-300 text-sm tracking-wide animate-fade-in"
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
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in" style={{ color: '#1359a0' }}>
                        About METIS
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
                        Building the future of autonomous intelligence.
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        We're pioneering multi-agent AI systems that transform how enterprises operate, collaborate, and scale.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-wide text-foreground">
                                Our Mission
                            </h2>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                                At METIS, we believe the future of work isn't about replacing humans—it's about amplifying human potential through intelligent automation.
                            </p>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                We're building domain-specific multi-agent systems that handle complex operations, enable seamless communication, and make intelligent decisions at scale—all while maintaining the security and compliance standards that enterprises demand.
                            </p>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-12 border border-border">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground mb-3">Autonomous</h3>
                                    <p className="text-muted-foreground font-light">
                                        AI agents that operate independently, making intelligent decisions without constant human oversight.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground mb-3">Collaborative</h3>
                                    <p className="text-muted-foreground font-light">
                                        Multi-agent systems that work together seamlessly, coordinating complex workflows across your organization.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground mb-3">Enterprise-Ready</h3>
                                    <p className="text-muted-foreground font-light">
                                        Built for scale, security, and compliance from day one—ready for the most demanding enterprise environments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            {/* Enterprise Grade Section */}
            <section className="py-32 px-8 bg-background border-t border-border">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#1359a0' }}>Enterprise Grade</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">Built for trust.</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Shield className="w-5 h-5" style={{ color: '#1359a0' }} />
                            </div>
                            <span className="font-medium text-foreground tracking-wide">Security</span>
                            <span className="text-xs text-muted-foreground mt-1">Enterprise-grade protection</span>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Target className="w-5 h-5" style={{ color: '#1359a0' }} />
                            </div>
                            <span className="font-medium text-foreground tracking-wide">Accuracy</span>
                            <span className="text-xs text-muted-foreground mt-1">Precision at scale</span>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Eye className="w-5 h-5" style={{ color: '#1359a0' }} />
                            </div>
                            <span className="font-medium text-foreground tracking-wide">Transparency</span>
                            <span className="text-xs text-muted-foreground mt-1">Full visibility</span>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <FileCheck className="w-5 h-5" style={{ color: '#1359a0' }} />
                            </div>
                            <span className="font-medium text-foreground tracking-wide">Auditability</span>
                            <span className="text-xs text-muted-foreground mt-1">Complete trails</span>
                        </div>
                        <div className="flex flex-col items-center p-6">
                            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                                <Zap className="w-5 h-5" style={{ color: '#1359a0' }} />
                            </div>
                            <span className="font-medium text-foreground tracking-wide">Autonomy</span>
                            <span className="text-xs text-muted-foreground mt-1">Self-directed agents</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Ready to transform your enterprise?
                    </h2>
                    <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                        Join the organizations already leveraging METIS to build the future of autonomous operations.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://calendly.com/shlok-nambiar/30min" target="_blank" rel="noopener noreferrer">
                            <Button
                                size="lg"
                                className="bg-steel-blue hover:bg-steel-blue/90 text-white px-8 py-6 text-lg tracking-wide"
                            >
                                Book a Meet
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg tracking-wide"
                            >
                                Back to Home →
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
