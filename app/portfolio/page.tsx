"use client"

import { useState, useEffect, useTransition, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/sections/footer"
import Link from "next/link"
import { PortfolioNav } from "@/components/portfolio/portfolio-nav"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { RestaurantVoiceAgentProject } from "@/components/portfolio/restaurant-voice-agent-project"
import { LegalRAGProject } from "@/components/portfolio/legal-rag-project"
import { MultimodalTutorProject } from "@/components/portfolio/multimodal-tutor-project"
import { QuantTradingEnterpriseProject } from "@/components/portfolio/quant-trading-enterprise-project"
import { SteelManufacturingAIProject } from "@/components/portfolio/steel-manufacturing-ai-project"
import { RealEstateCRMProject } from "@/components/portfolio/real-estate-crm-project"
import { SteelManufacturingWorkflowProject } from "@/components/portfolio/steel-manufacturing-workflow-project"
import { GovernmentLitigationProject } from "@/components/portfolio/government-litigation-project"
import { PortfolioSkeleton } from "@/components/ui/skeletons"

type Category = "Agents" | "Software" | "Enterprise AI" | "Workflow Orchestration"

export default function PortfolioPage() {
    return (
        <Suspense fallback={<PortfolioSkeleton />}>
            <PortfolioContent />
        </Suspense>
    )
}

function PortfolioContent() {
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState<Category>("Agents")
    const [showFloatingNav, setShowFloatingNav] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const categories: Category[] = ["Agents", "Software", "Enterprise AI", "Workflow Orchestration"]

    // Handle category change with loading state
    const handleCategoryChange = (category: Category) => {
        if (category === selectedCategory) return // Don't change if same
        setIsLoading(true)
        setSelectedCategory(category)
        // First scroll up instantly, then smoothly to projects
        window.scrollTo(0, 0)
        setTimeout(() => {
            window.scrollTo({ top: 600, behavior: 'smooth' })
        }, 100)
        // Clear loading state
        setTimeout(() => setIsLoading(false), 450)
    }

    // Read category from URL on mount
    useEffect(() => {
        const categoryParam = searchParams.get("category")
        if (categoryParam && categories.includes(categoryParam as Category)) {
            setSelectedCategory(categoryParam as Category)
        }
    }, [searchParams])

    // Track scroll position to show/hide floating nav
    useEffect(() => {
        const handleScroll = () => {
            // Show floating nav after scrolling past 500px
            setShowFloatingNav(window.scrollY > 500)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <main className="min-h-screen bg-background">
            <PortfolioNav currentPage="portfolio" />

            {/* Floating Category Navigation - appears on scroll */}
            <div
                className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500 hidden lg:block ${showFloatingNav
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10 pointer-events-none'
                    }`}
            >
                <ul className="space-y-3 text-right">
                    {categories.map((category) => (
                        <li key={category}>
                            <button
                                onClick={() => handleCategoryChange(category)}
                                className={`text-sm whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                                    ? "text-foreground font-semibold"
                                    : "text-muted-foreground/40 hover:text-muted-foreground"
                                    }`}
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Combined Hero + Category Navigation Section */}
            <section className="py-24 px-8 bg-background">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Left Side - Header */}
                        <div>
                            <p className="text-sm tracking-[0.2em] uppercase mb-4 animate-fade-in text-center lg:text-left" style={{ color: '#1359a0' }}>
                                Our Work
                            </p>
                            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6 animate-fade-in">
                                Building the future <span className="whitespace-nowrap">with AI.</span>
                            </h1>
                            <p
                                className="text-xl text-muted-foreground font-light leading-relaxed animate-fade-in"
                                style={{ animationDelay: "0.1s" }}
                            >
                                Explore our portfolio of AI agent implementations across industries.
                            </p>
                        </div>

                        {/* Right Side - Category Navigation */}
                        <nav>
                            <ul className="space-y-2">
                                {categories.map((category, index) => (
                                    <li
                                        key={category}
                                        className="animate-fade-in"
                                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                                    >
                                        <button
                                            onClick={() => handleCategoryChange(category)}
                                            className={`group flex items-center gap-3 text-3xl md:text-4xl lg:text-5xl font-bold transition-all duration-300 whitespace-nowrap ${selectedCategory === category
                                                ? "text-foreground"
                                                : "text-foreground/30 hover:text-foreground/50"
                                                }`}
                                        >
                                            {category}
                                            <svg
                                                width="28"
                                                height="28"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className={`transition-all duration-300 ${selectedCategory === category
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0"
                                                    }`}
                                            >
                                                <path
                                                    d="M5 12h14m-7-7l7 7-7 7"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Dynamic Projects Section */}
            <section id="projects-section" className="py-24 px-8 border-t border-border">
                <div className="max-w-6xl mx-auto">
                    {isLoading ? (
                        <PortfolioSkeleton />
                    ) : (
                        <>
                            {selectedCategory === "Agents" && (
                                <div className="space-y-16 animate-fade-in">
                                    <RestaurantVoiceAgentProject />
                                    <LegalRAGProject />
                                    <MultimodalTutorProject />
                                </div>
                            )}

                            {selectedCategory === "Software" && (
                                <div className="space-y-16 animate-fade-in">
                                    <GovernmentLitigationProject />
                                </div>
                            )}

                            {selectedCategory === "Enterprise AI" && (
                                <div className="space-y-16 animate-fade-in">
                                    <QuantTradingEnterpriseProject />
                                    <SteelManufacturingAIProject />
                                </div>
                            )}

                            {selectedCategory === "Workflow Orchestration" && (
                                <div className="space-y-16 animate-fade-in">
                                    <RealEstateCRMProject />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-8 border-t border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Ready to build your AI solution?
                    </h2>
                    <p className="text-xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                        Let's discuss how METIS can transform your operations with intelligent agents.
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
                        <Link href="/services">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="text-muted-foreground hover:text-foreground px-8 py-6 text-lg tracking-wide"
                            >
                                View Solutions →
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
