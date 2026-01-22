"use client"

import { useState } from "react"

type Category = "Agents" | "Coding" | "Enterprise AI" | "Product announcements"

export function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("Agents")

    const categories: Category[] = ["Agents", "Coding", "Enterprise AI", "Product announcements"]

    return (
        <section className="relative py-32 px-8 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f3460] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-cyan-400/20 via-cyan-500/5 to-transparent blur-3xl" />
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-radial from-orange-300/30 via-orange-400/10 to-transparent blur-3xl" />
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 via-purple-600/5 to-transparent blur-3xl" />
            </div>

            {/* Stars */}
            <div className="absolute inset-0 opacity-40">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Category Navigation */}
                <nav className="mb-16">
                    <ul className="space-y-2">
                        {categories.map((category) => (
                            <li key={category}>
                                <button
                                    onClick={() => setSelectedCategory(category)}
                                    className={`group flex items-center gap-3 text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-300 ${selectedCategory === category
                                            ? "text-white"
                                            : "text-white/30 hover:text-white/50"
                                        }`}
                                >
                                    {category}
                                    <svg
                                        width="32"
                                        height="32"
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

                {/* Content Area */}
                <div className="mt-12">
                    {selectedCategory === "Agents" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    AI Agent Portfolio
                                </h2>
                                <p className="text-xl text-white/70 mb-8">
                                    Explore our collection of intelligent agents designed for autonomous task execution, multi-agent collaboration, and enterprise automation.
                                </p>
                            </div>

                            {/* Placeholder for agent cards/content */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                                        <div className="w-12 h-12 rounded-lg bg-cyan-500/20 mb-4" />
                                        <h3 className="text-xl font-semibold text-white mb-2">Agent {i}</h3>
                                        <p className="text-white/60">Description of the agent and its capabilities.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedCategory === "Coding" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Code Generation & Automation
                                </h2>
                                <p className="text-xl text-white/70 mb-8">
                                    Advanced AI-powered coding assistants that understand context, generate production-ready code, and automate development workflows.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/20 mb-4" />
                                        <h3 className="text-xl font-semibold text-white mb-2">Tool {i}</h3>
                                        <p className="text-white/60">Coding automation tool description.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedCategory === "Enterprise AI" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Enterprise-Grade AI Solutions
                                </h2>
                                <p className="text-xl text-white/70 mb-8">
                                    Scalable AI infrastructure built for compliance-critical industries with full audit trails, security, and enterprise support.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[1, 2].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                                        <div className="w-12 h-12 rounded-lg bg-orange-500/20 mb-4" />
                                        <h3 className="text-2xl font-semibold text-white mb-2">Solution {i}</h3>
                                        <p className="text-white/60 mb-4">Enterprise solution description and benefits.</p>
                                        <ul className="space-y-2 text-white/50 text-sm">
                                            <li>• Full compliance support</li>
                                            <li>• Audit trail tracking</li>
                                            <li>• Enterprise security</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {selectedCategory === "Product announcements" && (
                        <div className="space-y-8 animate-fade-in">
                            <div className="max-w-3xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    Latest Updates & Releases
                                </h2>
                                <p className="text-xl text-white/70 mb-8">
                                    Stay informed about new features, improvements, and innovations in the METIS platform.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />
                                            <div className="flex-1">
                                                <h3 className="text-xl font-semibold text-white mb-2">Update {i}</h3>
                                                <p className="text-white/60 mb-2">Description of the latest product update or announcement.</p>
                                                <span className="text-sm text-white/40">December 2024</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
