"use client"

import { useState } from "react"

type Category = "Agents" | "Coding" | "Enterprise AI" | "Product announcements"

export default function GradientDemo() {
    const [selectedCategory, setSelectedCategory] = useState<Category>("Agents")

    const categories: Category[] = ["Agents", "Coding", "Enterprise AI", "Product announcements"]

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#0a0a1f]">
            {/* Main Gradient Background */}
            <div className="absolute inset-0">
                {/* Deep purple to blue base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f3460]" />

                {/* Cyan glow on left */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-cyan-400/30 via-cyan-500/10 to-transparent blur-3xl" />

                {/* Orange/peach glow on right */}
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-radial from-orange-300/40 via-orange-400/20 to-transparent blur-3xl" />

                {/* Purple accent bottom left */}
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/20 via-purple-600/10 to-transparent blur-3xl" />

                {/* Additional cyan accent */}
                <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-radial from-cyan-300/25 via-cyan-400/10 to-transparent blur-3xl" />
            </div>

            {/* Stars/Particles */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen">
                <div className="w-full max-w-7xl mx-auto px-8 py-16">
                    {/* Category Navigation */}
                    <nav className="mb-16">
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li key={category}>
                                    <button
                                        onClick={() => setSelectedCategory(category)}
                                        className={`group flex items-center gap-3 text-4xl md:text-5xl font-bold transition-all duration-300 ${selectedCategory === category
                                                ? "text-white"
                                                : "text-white/30 hover:text-white/50"
                                            }`}
                                    >
                                        {category}
                                        <svg
                                            width="24"
                                            height="24"
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

                    {/* Content Area - Changes based on selected category */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Side - Category Content */}
                        <div className="text-white">
                            {selectedCategory === "Agents" && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-5xl md:text-6xl font-bold">
                                        AI Agent Portfolio
                                        <br />
                                        on GitHub
                                    </h2>
                                    <p className="text-xl text-white/70">
                                        Explore our collection of intelligent agents designed for autonomous task execution and collaboration.
                                    </p>
                                </div>
                            )}

                            {selectedCategory === "Coding" && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-5xl md:text-6xl font-bold">
                                        Code Generation
                                        <br />
                                        & Automation
                                    </h2>
                                    <p className="text-xl text-white/70">
                                        Advanced AI-powered coding assistants that understand context and generate production-ready code.
                                    </p>
                                </div>
                            )}

                            {selectedCategory === "Enterprise AI" && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-5xl md:text-6xl font-bold">
                                        Enterprise-Grade
                                        <br />
                                        AI Solutions
                                    </h2>
                                    <p className="text-xl text-white/70">
                                        Scalable AI infrastructure built for compliance-critical industries with full audit trails.
                                    </p>
                                </div>
                            )}

                            {selectedCategory === "Product announcements" && (
                                <div className="space-y-6 animate-fade-in">
                                    <h2 className="text-5xl md:text-6xl font-bold">
                                        Latest Updates
                                        <br />
                                        & Releases
                                    </h2>
                                    <p className="text-xl text-white/70">
                                        Stay informed about new features, improvements, and innovations in the METIS platform.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Right Side - 3D Sphere Visualization */}
                        <div className="relative flex items-center justify-center">
                            {/* Central Sphere with Network */}
                            <div className="relative w-[400px] h-[400px]">
                                {/* Outer glow */}
                                <div className="absolute inset-0 bg-gradient-radial from-cyan-400/20 to-transparent blur-2xl" />

                                {/* Main sphere */}
                                <div className="absolute inset-[80px] rounded-full bg-gradient-to-br from-[#1a1a3e] to-[#0a0a1f] border border-cyan-400/30">
                                    {/* Network grid overlay */}
                                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 240">
                                        {/* Grid lines */}
                                        <defs>
                                            <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                                                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="0.5" />
                                            </pattern>
                                        </defs>
                                        <circle cx="120" cy="120" r="120" fill="url(#grid)" opacity="0.5" />

                                        {/* Network nodes */}
                                        {[...Array(20)].map((_, i) => {
                                            const angle = (i / 20) * Math.PI * 2;
                                            const radius = 80 + Math.random() * 40;
                                            const x = 120 + Math.cos(angle) * radius;
                                            const y = 120 + Math.sin(angle) * radius;
                                            return (
                                                <g key={i}>
                                                    <circle cx={x} cy={y} r="2" fill="#38bdf8" opacity="0.8" />
                                                    <line x1="120" y1="120" x2={x} y2={y} stroke="#38bdf8" strokeWidth="0.5" opacity="0.3" />
                                                </g>
                                            );
                                        })}

                                        {/* Accent dots */}
                                        <circle cx="180" cy="100" r="3" fill="#fbbf24" className="animate-pulse" />
                                        <circle cx="60" cy="140" r="3" fill="#38bdf8" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                                        <circle cx="120" cy="60" r="3" fill="#a78bfa" className="animate-pulse" style={{ animationDelay: '1s' }} />
                                    </svg>
                                </div>

                                {/* Orbital Ring 1 - Cyan */}
                                <div className="absolute inset-[-20px] animate-spin-slow">
                                    <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-cyan-400 via-transparent to-transparent bg-clip-border"
                                        style={{
                                            transform: 'rotateX(60deg) rotateZ(30deg)',
                                            borderImage: 'linear-gradient(90deg, rgba(56, 189, 248, 0.8), transparent) 1'
                                        }}>
                                        <div className="absolute inset-0 rounded-full" style={{
                                            background: 'linear-gradient(90deg, rgba(56, 189, 248, 0.6) 0%, transparent 50%)',
                                            filter: 'blur(8px)'
                                        }} />
                                    </div>
                                </div>

                                {/* Orbital Ring 2 - Cyan (different angle) */}
                                <div className="absolute inset-[-40px] animate-spin-slower">
                                    <div className="absolute inset-0 rounded-full"
                                        style={{
                                            transform: 'rotateX(70deg) rotateZ(-20deg)',
                                            background: 'linear-gradient(180deg, rgba(56, 189, 248, 0.4) 0%, transparent 50%)',
                                            filter: 'blur(12px)'
                                        }} />
                                </div>

                                {/* Small floating orbs */}
                                <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-500 blur-sm opacity-60 animate-float" />
                                <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 blur-sm opacity-60 animate-float" style={{ animationDelay: '1s' }} />
                                <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 blur-sm opacity-60 animate-float" style={{ animationDelay: '2s' }} />

                                {/* YouTube Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors shadow-2xl">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
