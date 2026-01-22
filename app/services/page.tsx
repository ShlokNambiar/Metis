"use client"

import { Button } from "@/components/ui/button"
import { MetisLogo } from "@/components/metis-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/sections/footer"
import Link from "next/link"
import { Bot, Workflow, Phone, Shield, Zap, Users } from "lucide-react"

export default function ServicesPage() {
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
                            className="text-foreground font-semibold transition-all duration-300 text-sm tracking-wide animate-fade-in"
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
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in" style={{ color: '#1359a0' }}>
                        Our Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
                        AI-powered solutions for every business need.
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed animate-fade-in"
                        style={{ animationDelay: "0.1s" }}
                    >
                        From autonomous agents to enterprise AI architecture, we deliver intelligent systems that transform how you work.
                    </p>
                </div>
            </section>

            {/* Metis Solutions - Grid Layout */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4 text-foreground">
                            Metis Solutions
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-0.5 w-20 bg-foreground/20"></div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Service 1 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Bot className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">AI Agent Orchestration</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                Multi-agent systems that collaborate to execute real business workflows.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Autonomous PM, Sales & Support agents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Goal-driven task planning and delegation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Internal agent-to-agent communication</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Human-handoff and transparency by design</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Connects directly to CRM, email, sheets, phone systems</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                Replace manual coordination with intelligent execution.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Workflow className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">AI System Architecture & Infrastructure</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                Production-grade AI pipelines built for reliability, accuracy & scale.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Ingest → Retrieve → Plan → Action architectures</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>RAG systems with secure knowledge access</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Voice, telephony and LLM integration (SIP, VAPI, Jambonz)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Observability, audit logs, and state management</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Custom agents deployed on-prem or cloud</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                The backbone that keeps enterprise AI running.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Phone className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">Voice-First Enterprise Assistants</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                AI that speaks, listens, and acts—across phone lines and online meetings.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Google Meet hearing agents & note-taking intelligence</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Autonomous call handling — reservations, support, bookings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Real-time speech recognition + reasoning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Multi-language voice workflows</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Compliance-ready audit trails</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                Let voice automation operate at the speed of conversation.
                            </p>
                        </div>

                        {/* Service 4 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Shield className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">Industry-Specific Operations Automation</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                Deep, regulated operational knowledge — automated to execution.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Legal case management with document-aware agents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Chartered accountancy & tax compliance intelligence</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>UDCPR & regulatory knowledge automation</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Automated document drafting, follow-ups, reminders</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Deadline tracking & integrated workflow support</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                Expertise-driven automation for critical business processes.
                            </p>
                        </div>

                        {/* Service 5 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Zap className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">Enterprise Deployment & Integration</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                Turn Metis intelligence into systems that your team actually uses.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Custom workflow design & onboarding</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Connectors for enterprise tools (HubSpot, Sheets, Workspace, telephony)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Identity, role-access, and secure data boundaries</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Dedicated support & continuous improvement</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                We integrate with your ecosystem, not the other way around.
                            </p>
                        </div>

                        {/* Service 6 */}
                        <div className="bg-muted/30 rounded-lg p-8 border border-border hover:border-foreground/20 transition-all">
                            <div className="w-16 h-16 rounded-full bg-steel-blue/10 flex items-center justify-center mb-6">
                                <Users className="w-8 h-8" style={{ color: '#1359a0' }} />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-3">AI Workforce Design</h3>
                            <p className="text-lg text-muted-foreground font-light mb-6">
                                Your own digital team — operating 24/7.
                            </p>
                            <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Define roles: Project Manager, Developer, Intake Agent, Compliance Agent</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Agent governance & capability scaling</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Human-collaboration frameworks</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 mt-1">•</span>
                                    <span>Adaptive behavior and feedback loops</span>
                                </li>
                            </ul>
                            <p className="text-foreground font-medium italic">
                                Build an AI workforce that grows with your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="py-24 px-8 border-t border-border bg-muted/20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-4 text-foreground">
                            How We Work
                        </h2>
                        <p className="text-xl text-muted-foreground font-light">
                            A proven process to deliver AI solutions that drive real business value
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-steel-blue/10 flex items-center justify-center font-bold" style={{ color: '#1359a0' }}>
                                    1
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Discovery & Assessment</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    We analyze your business needs, existing workflows, and identify opportunities for AI automation.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-steel-blue/10 flex items-center justify-center font-bold" style={{ color: '#1359a0' }}>
                                    2
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Strategy & Design</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Custom AI architecture tailored to your requirements, with clear success metrics and implementation roadmap.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-steel-blue/10 flex items-center justify-center font-bold" style={{ color: '#1359a0' }}>
                                    3
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Development & Testing</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Agile development with continuous testing and validation to ensure quality and performance.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-steel-blue/10 flex items-center justify-center font-bold" style={{ color: '#1359a0' }}>
                                    4
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground mb-2">Deployment & Optimization</h3>
                                <p className="text-muted-foreground font-light leading-relaxed">
                                    Smooth rollout with ongoing monitoring, optimization, and support to maximize ROI.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Ready to get started?
                    </h2>
                    <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                        Let's discuss how METIS can transform your business with intelligent AI agents.
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
